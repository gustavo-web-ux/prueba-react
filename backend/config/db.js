import mongoose from 'mongoose';

const conectarDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/prueba', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado a MongoDB');
  } catch (err) {
    console.error('Error de conexión:', err);
    process.exit(1); // Salir del proceso en caso de error
  }
};

export default conectarDB;