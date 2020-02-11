const { forwardTo } = require('prisma-binding');
const fetch = require('node-fetch');
const { hasPermission } = require('../tool/utlis');

const Query = {
  /*
   * FORWARD TP DB PRISMA BINDING
   */
  // used for the single item
  item: forwardTo('db'),
  // used to get a list of item & fetch items for pagination
  items: forwardTo('db'),
  category: forwardTo('db'),
  // used for the pagination
  itemsConnection: forwardTo('db'),

  brands: forwardTo('db'),
  /*
   * END FORWARD TP DB PRISMA BINDING
   */

  /*
   * me Query to send user ID on request
   */
  me(parent, args, ctx, info) {
    // check if there is a current user ID
    // acces frontend request (res, req) with ctx.request
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId },
      },
      info
    );
  }, // me Query

  /*
   * LISTE ALL USER
   */
  async users(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('Vous devez être authentifié!');
    }
    console.log(ctx.request.userId);
    // 2. Check if the user has one of this permissions to query all the users
    hasPermission(ctx.request.user, ['ADMIN', 'PERMISSIONUPDATE']);
    // 3. if they do, query all the users!
    return ctx.db.query.users({}, info);
  }, // LISTE ALL USER

  /*
   * SIRET
   */
  mybiz(parent, args, ctx, info) {
    const today = new Date();
    const dd = today.toISOString().substring(0, 10);

    // query siret
    const inseeSiret = fetch(
      `https://api.insee.fr/entreprises/sirene/V3/siret/${
        args.siret
      }?date=${dd}`,
      {
        method: 'get',
        headers: new Headers({
          Accept: 'application/json',
          Authorization: `Bearer ${process.env.API_INSEE_TOKEN}`,
        }),
      }
    )
      .then(res => res.json())
      .then(json => {
        console.log('this is it :', json);
        const firstMod = json.etablissement.siren % 97;
        const time3plus12 = firstMod * 3 + 12;
        const secMod = time3plus12 % 97;
        const tvaIntra = `FR ${secMod} ${json.etablissement.siren}`;
        const naf = json.etablissement.uniteLegale.activitePrincipaleUniteLegale.replace(
          '.',
          ''
        );

        // normalised data
        const BusinessNorm = {
          siren: json.etablissement.siren,
          siret: json.etablissement.siret,
          tva: tvaIntra,
          nafape: naf,
          name: json.etablissement.uniteLegale.denominationUniteLegale,
        };

        // console.log(BusinessNorm)
        return BusinessNorm;
      });

    // const gg = fetch(url)
    //   .then(res => res.json())
    //   .then(json => {
    //     const DoliData = {};
    //     return DoliData;
    //   });

    return inseeSiret;
  }, // EN SIRET

  /*
   * GET SINGLE ORDER
   */
  async order(parent, args, ctx, info) {
    // 1. Make sure they are logged in
    if (!ctx.request.userId) {
      throw new Error("Vous n'etes pas connecté!");
    }
    // 2. Query the current order
    const order = await ctx.db.query.order(
      {
        where: { id: args.id },
      },
      info
    );
    // 3. Check if the have the permissions to see this order
    const ownsOrder = order.user.id === ctx.request.userId;
    const hasPermissionToSeeOrder = ctx.request.user.permissions.includes(
      'ADMIN'
    );
    if (!ownsOrder && !hasPermissionToSeeOrder) {
      throw new Error('Vous ne pouvez pas voir ceci!');
    }
    // 4. Return the order
    return order;
  }, // GET SINGLE ORDER

  /*
   * GET ALL ORDERS
   */
  async orders(parent, args, ctx, info) {
    const { userId } = ctx.request;
    if (!userId) {
      throw new Error("Vous n'etes pas connecté!");
    }
    return ctx.db.query.orders(
      {
        where: {
          user: { id: userId },
        },
      },
      info
    );
  }, // GET ALL ORDERS
};

module.exports = Query;
