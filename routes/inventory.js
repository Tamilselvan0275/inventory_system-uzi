const express = require('express');
const { addItem, getItems } = require('../controllers/inventoryController');
const { protect } = require('../middlewares/auth');
const router = express.Router();

router.post('/item', protect, addItem);
router.get('/items', protect, getItems);

module.exports = router;