const { prisma } = require('../../src/generated/prisma-client');

const UserSeed = async () => {
  await prisma.createUser({
    firstname: 'bob',
    lastname: 'Bob',
    email: 'bob@bob.bob',
    phone: '0642424242',
    password: 'bob@bob.bob',
    isActive: true,
    isVerify: true,
  });

  await prisma.createUser({
    firstname: 'tom',
    lastname: 'Tom',
    email: 'tom@tom.tom',
    phone: '0642424242',
    password: 'tom@tom.tom',
  });
};

UserSeed().catch(e => console.error(e));
exports.UserSeed = UserSeed;
