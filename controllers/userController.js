const db = require('../models');
const Joi = require('joi');

// Validation schema
const userSchema = Joi.object({
  fullName: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^\d+$/).required(),
  walletBalance: Joi.number().min(0).optional(),
  isBlocked: Joi.boolean().optional(),
  kycStatus: Joi.string().valid('Pending', 'Approved', 'Rejected').optional(),
  deviceInfo: Joi.object({
    ipAddress: Joi.string().optional(),
    deviceType: Joi.string().valid('Mobile','Desktop').optional(),
    os: Joi.string().optional()
  }).optional()
});

exports.bulkCreateUsers = async (req, res) => {
  try {
    const users = req.body;
    if (!Array.isArray(users) || users.length === 0) {
      return res.status(400).json({ message: "Invalid input" });
    }

    // Validate each user
    for (let u of users) {
      const { error } = userSchema.validate(u);
      if (error) return res.status(400).json({ message: error.details[0].message });
    }

    const createdUsers = await db.User.bulkCreate(users, { validate: true });
    res.status(201).json({ message: 'Users created', count: createdUsers.length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Bulk create failed', error: error.message });
  }
};

exports.bulkUpdateUsers = async (req, res) => {
  try {
    const updates = req.body; // array of { id, fieldsToUpdate }
    const updatePromises = updates.map(u => db.User.update(u.fieldsToUpdate, { where: { id: u.id } }));
    await Promise.all(updatePromises);
    res.status(200).json({ message: 'Users updated', count: updates.length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Bulk update failed', error: error.message });
  }
};