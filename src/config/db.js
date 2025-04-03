const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Conectado ao MongoDB com sucesso!');
    } catch (error) {
      console.error('Erro ao conectar ao MongoDB:', error);
    }
  }
  
  mongoose.connection.on('error', (err) => {
    console.error('Erro de conexão:', err);
  });
  mongoose.connection.on('disconnected', () => {
    console.log('Desconectado do MongoDB');
  });
  mongoose.connection.on('connected', () => {
    console.log('Conectado ao MongoDB');
  });
  
  connectToDatabase();
