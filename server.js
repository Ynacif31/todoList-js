const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const User = require('./src/models/User');

const mongoURI = 'mongodb://localhost:27017/todolist';

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Express rodando com sucesso!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

app.post('/users', async (req, res) => {
    try{
        const { name, email, password } = req.body;
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({message : 'Usuário criado com sucesso!', user: newUser});
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(400).json({message: 'Erro ao criar usuário'});
    }
});