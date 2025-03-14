const express = require('express');
const Product = require('../models/product'); // Modelo de produto
const router = express.Router();

// Rota para buscar todos os produtos
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar produtos' });
  }
});

// Rota para buscar um produto por ID
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
