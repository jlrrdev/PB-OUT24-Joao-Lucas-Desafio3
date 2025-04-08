const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = 5000;

mongoose.connect('mongodb://localhost:27017/loja', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.log("Erro ao conectar ao MongoDB:", err));

app.use(cors());
app.use(express.json());

app.use('/api', productRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
