'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  
  User.init({
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [3, 255] }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isNumeric: true }
    },
    walletBalance: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      validate: { min: 0 }
    },
    isBlocked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    kycStatus: {
      type: DataTypes.ENUM('Pending', 'Approved', 'Rejected'),
      defaultValue: 'Pending'
    },
    deviceInfo: {
      type: DataTypes.JSONB
    }
  }, {
    sequelize,
    modelName: 'User',
    timestamps: true,
    indexes: [
      { unique: true, fields: ['email'] },
      { unique: true, fields: ['phone'] },
      { fields: ['createdAt'] }
    ]
  });

  return User;
};