const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = 4000;

mongoose.connect('mongodb://127.0.0.1:27017/loja', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.log("Erro ao conectar ao MongoDB:", err));

app.use(cors());
app.use(express.json());

// Use as rotas
app.use('/api', productRoutes);  // Aqui, todas as rotas de products vão começar com "/api"

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
