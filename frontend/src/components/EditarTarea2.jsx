import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './css/editar.css'

const EditarTarea = ({ actualizarTarea, tareas }) => {
  const { id } = useParams();  // Obtener el ID de la tarea desde la URL
  const navigate = useNavigate();  // Hook para redirigir

  const tareaActual = tareas.find(t => t._id === id); // Buscar la tarea a editar
  const [tarea, setTarea] = useState({
    nombre: tareaActual ? tareaActual.nombre : "",
    completada: tareaActual ? tareaActual.completada : false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Actualizar la tarea
    await actualizarTarea(id, tarea);
    
    // Redirigir a la página principal después de la actualización
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editando Tarea</h2>

      <label>
        Nombre:
        <input
          type="text"
          value={tarea.nombre}
          onChange={(e) => setTarea({ ...tarea, nombre: e.target.value })}
          className="input-text"
        />
      </label>
      <br />

      <label>
        Estado:
        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={(e) => setTarea({ ...tarea, completada: e.target.checked })}
          className="input-checkbox"
        />
        Completada
      </label>
      <br />

      <button type="submit" className="btn-submit">Guardar Cambios</button>
    </form>
  );
};

export default EditarTarea;
