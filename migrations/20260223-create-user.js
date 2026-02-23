'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      fullName: { type: Sequelize.STRING, allowNull: false },
      email: { type: Sequelize.STRING, allowNull: false, unique: true },
      phone: { type: Sequelize.STRING, allowNull: false, unique: true },
      walletBalance: { type: Sequelize.FLOAT, defaultValue: 0 },
      isBlocked: { type: Sequelize.BOOLEAN, defaultValue: false },
      kycStatus: { type: Sequelize.ENUM('Pending','Approved','Rejected'), defaultValue: 'Pending' },
      deviceInfo: { type: Sequelize.JSONB },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};