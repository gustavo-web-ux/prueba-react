import React from 'react';
import './css/listadoTareas.css'
import { useNavigate } from 'react-router-dom';


const ListadoTareas = ({ tareas, eliminarTarea }) => {
  const navigate = useNavigate(); // Hook para la navegación

  // Función que maneja la redirección al componente de edición
  const handleEdit = (id) => {
    navigate(`/edit/${id}`); // Navega a la ruta de edición con el ID de la tarea
  };


  return (
    <table>
      <thead>
        <tr>
          <th>Nombre de la Tarea</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {tareas.map(tarea => (
          <tr key={tarea._id}>
            <td>{tarea.nombre}</td>
            <td>{tarea.completada ? 'Completada' : 'No Completada'}</td>
            <td>
            <button className="btn editar" onClick={() => handleEdit(tarea._id)}>
                Editar
              </button>
              <button className="btn eliminar" onClick={() => eliminarTarea(tarea._id)}>Eliminar</button>
          </td>
          </tr>
        ))}
      </tbody>
    </table>

  );
};

export default ListadoTareas;
