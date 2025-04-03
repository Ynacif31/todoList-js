import { createUser } from '../services/userService.js';
import { getUserById } from '../services/userService.js';
import { getAllUsers } from '../services/userService.js';

export async function handlerCreateUser(req, res) {
    try {
        // Chama o service para criar o usuário
        const createdUser = await createUser(req.body);

        // Formata a resposta (não incluir a senha)
        const userResponse = {
            id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email,
            createdAt: createdUser.createdAt
        };

        res.status(201).json({
            message: 'Usuário criado com sucesso!',
            user: userResponse
        });
    } catch (error) {
        console.error(error);
        const statusCode = error.message.includes('E-mail já cadastrado') ? 400 : 500;
        res.status(statusCode).json({ error: error.message });
    }
}

export async function handlerGetUserById(req, res) {
    try {
        const { id } = req.params;
        const user = await getUserById(id);

        // Formata a resposta (remove dados sensíveis)
        const userResponse = {
            id: user._id,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt
        };

        res.status(200).json(userResponse);
    } catch (error) {
        console.error(error);
        const statusCode = error.message.includes('não encontrado') ? 404 : 500;
        res.status(statusCode).json({ error: error.message });
    }
}

export async function handleGetAllUsers(req, res) {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

