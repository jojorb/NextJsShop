const { prisma } = require('../../src/generated/prisma-client');

const CategorySeed = async () => {
  await prisma.createCategory({
    name: 'cat1',
    slug: 'cat1',
    image: '',
    description: '',
  });
};

CategorySeed().catch(e => console.error(e));
exports.CategorySeed = CategorySeed;
