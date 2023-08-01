// server.js
const express = require('express');
const products = require('./products');

const app = express();
const port = 3001; // You can change this port number as needed

app.use(express.json());

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
