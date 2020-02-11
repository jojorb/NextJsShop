const { prisma } = require('../../src/generated/prisma-client');

async function Finest() {
  await prisma.createItem({
    sku: '',
    title: '',
    label: '',
    description: '',
    image: '',
    imageBack: '',
    price: 100,
    vol: 10,
    nico: 0,
    // #nicsalt: false,
    flavor: '',
    fresh: 3.3,
    fruit: 1.1,
    gourmand: 1.2,
    classic: 0.1,
    vgpg: '',
    color: '',
    feature: '',
    refcrm: '',
    stock: 100,
    category: {
      connect: { id: '' },
    },
    brand: {
      connect: { id: '' },
    },
  });

}

Finest().catch(e => console.error(e));
