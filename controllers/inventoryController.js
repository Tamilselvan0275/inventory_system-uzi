const Item = require('../models/Item');

const addItem = async (req, res) => {
  const { name, quantity, description, price } = req.body;
  try {
    const item = new Item({ name, quantity, description, price });
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addItem, getItems };