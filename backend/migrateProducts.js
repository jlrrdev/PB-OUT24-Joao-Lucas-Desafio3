const mongoose = require('mongoose');
const Product = require('./models/Product');

// Dados dos produtos (os que estavam no arquivo JS)
const products = [
    {
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 100,
        image: '../frontend/src/assets/clothes/p_img10.png',
        category: "Women",
        subcategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    }
];

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/loja', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    // Inserir os produtos no banco de dados
    await Product.insertMany(products);
    console.log('Produtos migrados com sucesso!');
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });
