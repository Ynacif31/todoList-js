const express = require('express');
const connectToDatabase = require('./config/db');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();

// Conectando ao banco de dados
connectToDatabase();

// Middleware para interpretar JSON (ESSENCIAL)
app.use(express.json());

// Usando as rotas de usuário
app.use('/api', userRoutes);

module.exports = app;
