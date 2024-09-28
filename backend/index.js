import express from 'express';
import conectarDB from './config/db.js'; 
import configurarMiddleware from './middleware/middleware.js'
import rutasApi from './routes/rutasTareas.js';
//import cors from 'cors';
const app = express();
const PORT = 5000;

conectarDB();

configurarMiddleware(app);

app.use('/api', rutasApi);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
});
