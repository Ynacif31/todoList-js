import User from '../models/User.js';
import {hash} from 'bcrypt';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export async function createUser(userData) {
    const { name, email, password } = userData;

    if (!name || !email || !password) {
        throw new Error('Todos os campos são obrigatórios');
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
        throw new Error('E-mail já cadastrado');
    }

    const hashedPassword = await hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    return newUser;
}

export async function getUserById(userId) {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        throw new Error('ID inválido');
    }

    const user = await User.findById(userId);
    if (!user) {
        throw new Error('Usuário não encontrado');
    }
    return user;
}

export async function getAllUsers() {
    try {
        // Busca todos os usuários e remove campos sensíveis
        const users = await User.find().select('-password -__v');

        // Formata os dados de retorno
        return users.map(user => ({
            id: user._id,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        }));

    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        throw new Error('Falha ao recuperar usuários');
    }
}
