const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/bulk-create', userController.bulkCreateUsers);
router.put('/bulk-update', userController.bulkUpdateUsers);

module.exports = router;