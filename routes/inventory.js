const express = require('express');
const { addItem, getItems, updateItem, deleteItem } = require('../controllers/inventoryController');
const { protect } = require('../middlewares/auth');
const router = express.Router();

router.post('/item', protect, addItem);
router.get('/items', protect, getItems);
router.put('/item/:id', protect, updateItem);
router.delete('/item/:id', protect, deleteItem);

module.exports = router;