import express from 'express';
import {
  obtenerTareas,
  agregarTarea,
  actualizarTarea,
  eliminarTarea,
} from '../controllers/controllerTareas.js';

const router = express.Router();

router.get('/tareas', obtenerTareas);
router.post('/tareas', agregarTarea);
router.put('/tareas/:id', actualizarTarea);
router.delete('/tareas/:id', eliminarTarea);

export default router;

