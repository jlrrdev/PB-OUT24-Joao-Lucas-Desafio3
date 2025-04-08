const express = require('express');
<<<<<<< HEAD
const Product = require('../models/Product');
=======
const Product = require('../models/product'); // Modelo de produto
>>>>>>> 87d3a7b8c04205918d0489e1242036aecbb1f05d
const router = express.Router();

router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar produtos' });
  }
});

router.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

module.exports = router;
