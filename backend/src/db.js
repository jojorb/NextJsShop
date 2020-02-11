const { Prisma } = require('prisma-binding');

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: `${process.env.PRISMA_ENDPOINT}/${process.env.PRISMA_EP_SERVICE}/${
    process.env.PRISMA_EP_STAGE
  }`,
  secret: process.env.PRISMA_SECRET,
  debug: false,
});

module.exports = db;
