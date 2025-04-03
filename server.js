const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/todolist';

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Express rodando com sucesso!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
