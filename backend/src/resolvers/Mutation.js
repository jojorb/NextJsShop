const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto');
const { promisify } = require('util');
const {
  transport,
  CheckEmail,
  PasswordEmail,
  OrderEmail,
} = require('../tool/mail');
const { hasPermission } = require('../tool/utlis');
const stripe = require('../tool/stripe_v1');

const Mutations = {
  /*
   * SIGNUP!!!
   */
  async signup(parent, args, ctx, info) {
    // lowercase their email
    args.email = args.email.toLowerCase();
    // hash their password
    const password = await bcrypt.hash(args.password, 10);
    // create the user in the database
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ...args,
          password,
          permissions: { set: ['USER'] },
        },
      },
      info
    );
    // create the JWT token for them to be login juste after register!!!
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // We set the jwt as a cookie on the response
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 * 1, // 1 year cookie
    });

    // send email to confirme
    // const mailRes = await transport.sendMail({
    //   from: process.env.MAIL_SENDER,
    //   to: user.email,
    //   subject: `${process.env.MAIL_OBJ} - Votre lien de confirmation`,
    //   html: CheckEmail(
    //     user.firstname,
    //     `${process.env.FRONTEND_URL}/userchecking?checkEmail=${user.id}`
    //   ),
    // });

    // async function mainMail() {
    const mRes = {
      from: process.env.MAIL_SENDER,
      to: user.email,
      subject: `${process.env.MAIL_OBJ} - Votre lien de confirmation`,
      html: CheckEmail(
        user.firstname,
        `${process.env.FRONTEND_URL}/userchecking?checkEmail=${user.id}`
      ),
    };
    // send mail with defined transport object
    transport.sendMail(mRes, function(error, mailinfo) {
      if (error) {
        console.log('Email Error', error);
      } else {
        console.log(`Email sent: ${mailinfo.response}`);
        console.log('Message sent: %s', mailinfo.messageId);
      }
    });
    // }
    // mainMail();

    // return the user to the browser
    return user;
  }, // SIGNUP!!!

  /*
   * CHECK EMAIL!!!
   */
  async userCheckEmail(parent, args, ctx, info) {
    // Make sure they are signed in
    const { userId } = ctx.request;
    if (!userId) {
      throw new Error('vous devez etre connecté.');
    }

    // compare logged user ID vs mutation arg ID
    if (userId !== args.id) {
      throw new Error('etes vous bien enregistré?');
    }

    // is he already Active?
    const [user] = await ctx.db.query.users({
      where: { id: args.id },
    });
    if (user.isActive === true) {
      throw new Error(
        `votre email est déjà vérifié! Merci, ${user.firstname} !`
      );
    }

    // Update the user
    await ctx.db.mutation.updateUser({
      where: { id: args.id },
      data: {
        isActive: true,
      },
    });

    // refetch user
    const [userAfter] = await ctx.db.query.users({
      where: { id: args.id },
    });
    //  IF ACTIVE AND CHECKED CHANGE PERMISSION
    if (userAfter.isActive === true && userAfter.isVerify === true) {
      await ctx.db.mutation.updateUser({
        where: { id: userId },
        data: {
          permissions: {
            set: 'USERCHECKED',
          },
        },
      });
    }

    // return the user to the browser
    return user;
    // return { message: `Merci pour la confirmation, ${user.firstname} !` };
  }, // / CHECK EMAIL!!!

  /*
   * SIGNIN!!!
   */
  async signin(parent, { email, password }, ctx, info) {
    // 1. check if there is a user with that email
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`L'email ${email} est introuvable`);
    }
    // 2. Check if their password is correct
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Mot de passe invalide!');
    }
    // 3. generate the JWT Token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // 4. Set the cookie with the token
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });
    // console.log("server user signin", user)
    // 5. Return the user
    return user;
  }, // SIGNIN!!!

  /*
   * SIGNOUT!!!
   */
  signout(parent, args, ctx, info) {
    ctx.response.clearCookie('token');
    return { message: 'User singout!!!' };
  }, // SIGNOUT!!!

  /*
   * CREATE USER ADDRESS!!!
   */
  async createUserAddress(parent, args, ctx, info) {
    // 1. Make sure they are signed in
    const { userId } = ctx.request;
    if (!userId) {
      throw new Error('vous devez etre connecter.');
    }
    // 2. connect the address to the user
    const address = await ctx.db.mutation.createUserAddress(
      {
        data: {
          // This is how to create a relationship between the UserAddress and the User
          user: {
            connect: {
              id: ctx.request.userId,
            },
          },
          ...args,
        },
      },
      info
    );
    // 3. return the address
    return address;
  }, // CREATE USER ADDRESS!!!

  /*
   * CREATE USER COMPANY!!!
   */
  async createUserCompany(parent, args, ctx, info) {
    // 1. Make sure they are signed in
    const { userId } = ctx.request;
    if (!userId) {
      throw new Error('vous devez etre connecter.');
    }
    // 2. connect the company to the user
    const company = await ctx.db.mutation.createUserCompany(
      {
        data: {
          // This is how to create a relationship between the UserAddress and the User
          user: {
            connect: {
              id: ctx.request.userId,
            },
          },
          ...args,
        },
      },
      info
    );
    // 3. update user and is he already Verify?
    const [user] = await ctx.db.query.users({
      where: { id: ctx.request.userId },
    });
    if (user.isVerify === true) {
      throw new Error(
        `votre société est déjà vérifié! Merci, ${user.firstname} !`
      );
    }

    // Update the user
    await ctx.db.mutation.updateUser({
      where: { id: ctx.request.userId },
      data: {
        isVerify: true,
      },
    });

    // refetch user
    const [userAfter] = await ctx.db.query.users({
      where: { id: ctx.request.userId },
    });
    //  IF ACTIVE AND CHECKED CHANGE PERMISSION
    if (userAfter.isActive === true && userAfter.isVerify === true) {
      await ctx.db.mutation.updateUser({
        where: { id: userId },
        data: {
          permissions: {
            set: 'USERCHECKED',
          },
        },
      });
    }

    // 4. return the address
    return company;
  }, // /CREATE USER COMPANY!!!

  /*
   * REQUEST NEW PASSWORD!!!
   */
  async requestReset(parent, args, ctx, info) {
    // 1. Check if this is a real user
    const user = await ctx.db.query.user({ where: { email: args.email } });
    if (!user) {
      throw new Error(`Aucun utilisateur avec l'email: ${args.email}`);
    }
    // 2. Set a reset token and expiry on that user
    const randomBytesPromiseified = promisify(randomBytes);
    const resetToken = (await randomBytesPromiseified(20)).toString('hex');
    const resetTokenExpiry = Date.now() + 3600000; // 1 hour from now
    const res = await ctx.db.mutation.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry },
    });
    // 3. Email them that reset token
    const mailRes = await transport.sendMail({
      from: process.env.MAIL_SENDER,
      to: user.email,
      subject: `${process.env.MAIL_OBJ} - Changez votre mot de passe`,
      html: PasswordEmail(
        user.firstname,
        `${process.env.FRONTEND_URL}/passwordsec?resetToken=${resetToken}`
      ),
    });

    // 4. Return the message
    return { message: 'Merci!' };
  }, //  REQUEST NEW PASSWORD!!!

  /*
   * PROCESS NEW PASSWORD!!!
   */
  async resetPassword(parent, args, ctx, info) {
    // 1. check if the passwords match
    if (args.password !== args.confirmPassword) {
      throw new Error('Les mots de passes ne cooresspondent pas');
    }
    // 2. check if its a legit reset token
    // 3. Check if its expired
    const [user] = await ctx.db.query.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now() - 3600000,
      },
    });
    if (!user) {
      throw new Error('La requette est invalide ou a expiré');
    }
    // 4. Hash their new password
    const password = await bcrypt.hash(args.password, 10);
    // 5. Save the new password to the user and remove old resetToken fields
    const updatedUser = await ctx.db.mutation.updateUser({
      where: { email: user.email },
      data: {
        password,
        resetToken: null,
        resetTokenExpiry: null,
      },
    });
    // 6. Generate JWT
    const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);
    // 7. Set the JWT cookie
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });
    // 8. return the new user
    return updatedUser;
  }, // PROCESS NEW PASSWORD!!!

  /*
   * UPDATE USER PERMISSION!!!
   */
  async updatePermissions(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('Vous devez être authentifié!');
    }
    // 2. Query the current user
    const currentUser = ctx.request.user;
    // const currentUser = await ctx.db.query.user(
    //   {
    //     where: {
    //       id: ctx.request.userId,
    //     },
    //   },
    //   info
    // );

    // 3. Check if they have permissions to do this
    hasPermission(currentUser, ['ADMIN', 'PERMISSIONUPDATE']);
    // 4. Update the permissions
    return ctx.db.mutation.updateUser(
      {
        data: {
          permissions: {
            set: args.permissions,
          },
        },
        where: {
          id: args.userId,
        },
      },
      info
    );
  }, // UPDATE USER PERMISSION!!!

  /*
   * ADD TO CART!!!
   */
  async addToCart(parent, args, ctx, info) {
    // 1. Make sure they are signed in
    const { userId } = ctx.request;
    if (!userId) {
      throw new Error('vous devez etre connecter.');
    }
    // 2. Query the users current cart
    const [existingCartItem] = await ctx.db.query.cartItems({
      where: {
        user: { id: userId },
        item: { id: args.id },
      },
    });
    // 3. Check if that item is already in their cart and increment by 1 if it is
    if (existingCartItem) {
      console.log('Add 5 produit le panier');
      return ctx.db.mutation.updateCartItem(
        {
          where: { id: existingCartItem.id },
          data: { quantity: existingCartItem.quantity + 5 },
        },
        info
      );
    }
    // 4. If its not, create a fresh CartItem for that user!
    return ctx.db.mutation.createCartItem(
      {
        data: {
          user: {
            // utiliser la connection de relation avec prisma
            connect: { id: userId },
          },
          item: {
            connect: { id: args.id },
          },
        },
      },
      info
    );
  }, // ADD TO CART!!!

  /*
   * UPDATE FROM CART!!!
   */
  async updateFromCart(parent, args, ctx, info) {
    // 1. Find the cart item
    const cartItem = await ctx.db.query.cartItem(
      {
        where: {
          id: args.id,
        },
      },
      `{ id, user { id }}`
    );
    // 1.5 Make sure we found an item
    if (!cartItem) throw new Error('No CartItem Found!');
    // 2. Make sure they own that cart item
    if (cartItem.user.id !== ctx.request.userId) {
      throw new Error('Cheatin huhhhh');
    }
    // 3. Update that cart item
    return ctx.db.mutation.updateCartItem(
      {
        where: { id: args.id },
        data: { quantity: args.quantity },
      },
      info
    );
  }, // UPDATE FROM CART!!!

  /*
   * REMOVE FROM CART!!!
   */
  async removeFromCart(parent, args, ctx, info) {
    // 1. Find the cart item
    const cartItem = await ctx.db.query.cartItem(
      {
        where: {
          id: args.id,
        },
      },
      `{ id, user { id }}`
    );
    // 1.5 Make sure we found an item
    if (!cartItem) throw new Error("il n'y a pas d'article");
    // 2. Make sure they own that cart item
    if (cartItem.user.id !== ctx.request.userId) {
      throw new Error('wait whaaat!!!');
    }
    // 3. Delete that cart item
    return ctx.db.mutation.deleteCartItem(
      {
        where: { id: args.id },
      },
      info
    );
  }, // REMOVE FROM CART!!!

  /*
   * CREATE ODER!!!
   */
  async createOrder(parent, args, ctx, info) {
    // 1. Query the current user and make sure they are signed in
    const { userId } = ctx.request;
    if (!userId)
      throw new Error('Vous devez etre connecté pour passer cette commande.');
    const user = await ctx.db.query.user(
      { where: { id: userId } },
      `{
        id
        firstname
        lastname
        email
        discount
        cart {
          id
          quantity
          item { id sku title description image price }
        }}`
    );

    // 2. recalculate the total for the price
    const amount = user.cart.reduce(
      (tally, cartItem) => tally + cartItem.item.price * cartItem.quantity,
      0
    );
    // 2.2 recalculate the discount
    const UserDiscount = user.discount / 100;
    const amountAfterHT = amount - amount * UserDiscount;
    // console.log('Valeur  HT: ', amountAfterHT);

    // 2.3 recalculate the tax right
    const UserTVA = amountAfterHT * 1.2;
    const amountTVAAfter = UserTVA - amountAfterHT;
    // console.log('Valeur TVA: ', amountTVAAfter);

    // 2.4 recalculate the amount TTC
    const amountTTC = amountAfterHT + amountTVAAfter;
    // console.log('Valeur TTC: ', amountTTC);

    // 2.5 recalculate the amount in EUR
    const EurHT = amountAfterHT / 100;
    // const EurTVA = amountTVAAfter / 100;
    const EurTTC = amountTTC / 100;
    // console.log('HT: ', EurHT, '€');
    // console.log('TVA:', EurTVA, '€');
    // console.log('TTC: ', EurTTC, '€');
    console.log(`Going to charge for a total of ${EurTTC}€`);

    // 3. Create an Invoice
    // 3.1 Create a wire invoice
    const mailRes = await transport.sendMail({
      from: process.env.MAIL_SENDER,
      to: user.email,
      bcc: process.env.MAIL_BCC,
      subject: `${process.env.MAIL_OBJ} - votre commande`,
      html: OrderEmail(
        user.firstname,
        args.transactionToken,
        `${EurHT}`,
        `${EurTTC}`
      ),
    });

    // 3.2. Create the stripe charge (turn token into $$$)

    // 4. Convert the CartItems to OrderItems
    const orderItems = user.cart.map(cartItem => {
      const orderItem = {
        ...cartItem.item,
        quantity: cartItem.quantity,
        // user: { connect: { id: userId } },
      };
      // we have to delete the id past from "...cartItem.item,"
      // let the mutation create the new ID
      delete orderItem.id;
      // return an Array of ordered items
      return orderItem;
    });

    // 5. create the Order
    const order = await ctx.db.mutation.createOrder({
      data: {
        totalHT: amountAfterHT,
        totalTax: amountTVAAfter,
        total: amountTTC,
        transactionToken: args.transactionToken,
        invoiceAdr: args.invoiceAdr,
        shippingAdr: args.shippingAdr,
        items: { create: orderItems },
        user: { connect: { id: userId } },
      },
    });

    // 6. Update Items stock minus cartItemIds stock from the user
    // 7. Clean up - clear the users cart, delete cartItems
    const cartItemIds = user.cart.map(cartItem => cartItem.id);
    await ctx.db.mutation.deleteManyCartItems({
      where: {
        id_in: cartItemIds,
      },
    });

    // 8. Send email of the Order to the client
    // 9. Return the Order to the client
    return order;
  }, // CREATE ODER!!!
};
module.exports = Mutations;
