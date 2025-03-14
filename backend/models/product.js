// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: [String], // array de URLs das imagens
  category: String,
  subCategory: String,
  sizes: [String],
  date: Number,
  bestseller: Boolean
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
