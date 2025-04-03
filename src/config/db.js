const mongoose = require('mongoose');
require('dotenv').config();

async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('🟢 Conectado ao MongoDB com sucesso!');
    } catch (error) {
        console.error('🔴 Erro ao conectar ao MongoDB:', error);
        process.exit(1); // Encerra o app se a conexão falhar
    }
}

module.exports = connectToDatabase;
