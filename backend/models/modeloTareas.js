import mongoose from 'mongoose';

const tareaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  completada: { type: Boolean, default: false },
});

const Tareas = mongoose.model('Tareas', tareaSchema);

export default Tareas;
