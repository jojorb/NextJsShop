const { prisma } = require('../../src/generated/prisma-client');

const BrandSeed = async () => {
  await prisma.createBrand({
    name: 'MY BRAND',
    image: '',
    description: "brand description",
    origine: '',
    www: '',
    facebook: '',
    insta: '',
  });

};

BrandSeed().catch(e => console.error(e));
exports.BrandSeed = BrandSeed;
