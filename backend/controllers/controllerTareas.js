import Tarea from '../models/modeloTareas.js';

// Obtener todas las tareas
export const obtenerTareas = async (req, res) => {
  const tareas = await Tarea.find();
  res.json(tareas);
};

// Agregar una nueva tarea
export const agregarTarea = async (req, res) => {
  const nuevaTarea = new Tarea({ ...req.body, completada: false });
  await nuevaTarea.save();
  res.status(200).json(nuevaTarea);
};

// Actualizar una tarea
export const actualizarTarea = async (req, res) => {
  const { id } = req.params;
  const tarea = await Tarea.findByIdAndUpdate(id, req.body, { new: true });
  if (tarea) {
    res.json(tarea);
  } else {
    res.status(404).send('Tarea no encontrada');
  }
};

// Eliminar una tarea
export const eliminarTarea = async (req, res) => {
  const { id } = req.params;
  await Tarea.findByIdAndDelete(id);
  res.status(200).send();
};
