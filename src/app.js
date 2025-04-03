import express from 'express';
import { json } from 'express';
import connectToDatabase from './config/db.js';  // Adicione a extensão .js
import userRoutes from './routes/userRoutes.js';  // Adicione a extensão .js
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Conectando ao banco de dados
connectToDatabase();

// Middleware para interpretar JSON
app.use(json());

// Rotas
app.use('/api', userRoutes);

// Exporte tanto o app quanto o listen
export const startServer = (port) => {
  return app.listen(port, () => {
    console.log(`✅ Servidor rodando em http://localhost:${port}`);
  });
};

export default app;