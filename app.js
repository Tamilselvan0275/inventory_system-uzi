const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const inventoryRoutes = require('./routes/inventory');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/inventory', inventoryRoutes);

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
    //   console.log(Server running on port ${PORT});
    });
  })
  .catch(error => {
    console.error('Database connection failed:', error);
  });   