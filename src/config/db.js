import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('🟢 Conectado ao MongoDB com sucesso!');
    } catch (error) {
        console.error('🔴 Erro ao conectar ao MongoDB:', error);
        process.exit(1);
    }
}

export default connectToDatabase;