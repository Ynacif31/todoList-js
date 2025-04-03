const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/UserController');

// Rota para criar um novo usuário
router.post('/users', createUser);

module.exports = router;