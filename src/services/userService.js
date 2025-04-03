import User from '../models/User.js';
import { hash } from 'bcrypt';

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