const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/todolist';

async function connectToDatabase() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado ao MongoDB com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
  }
}

mongoose.connection.on('error', (err) => {
  console.error('Erro de conexão:', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Desconectado do MongoDB');
});
mongoose.connection.on('connected', () => {
  console.log('Conectado ao MongoDB');
});

connectToDatabase();

app.get('/', (req, res) => {
  res.send('Express rodando com sucesso!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});