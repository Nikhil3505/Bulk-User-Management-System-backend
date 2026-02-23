const db = require('../models');
const { faker } = require('@faker-js/faker');

const generateUsers = (count = 5000) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push({
      fullName: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(),
      phone: faker.phone.number('##########'),
      walletBalance: faker.number.int({ min: 0, max: 1000 }),
      isBlocked: faker.datatype.boolean(),
      kycStatus: faker.helpers.arrayElement(['Pending', 'Approved', 'Rejected']),
      deviceInfo: {
        ipAddress: faker.internet.ip(),
        deviceType: faker.helpers.arrayElement(['Mobile', 'Desktop']),
        os: faker.helpers.arrayElement(['Android', 'iOS', 'Windows', 'macOS'])
      },
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }
  return users;
};

const seedUsers = async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Database connected...');
    
    const users = generateUsers(5000);
    await db.User.bulkCreate(users, { validate: true });
    console.log('5000 dummy users inserted successfully.');
    process.exit(0);
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
};

seedUsers();