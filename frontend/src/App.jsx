import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListadoTareas from './components/ListadoTareas';
import AgregarTarea from './components/AgregarTarea';
import EditarTarea from './components/EditarTarea2';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

export const App = () => {
  const [tareas, setTareas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [tareaEditando, setTareaEditando] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerTareas = async () => {
      try {
        const respuesta = await axios.get('http://localhost:5000/api/tareas');
        setTareas(respuesta.data);
        console.log("Datos obtenidos de la API:", respuesta.data);
      } catch (error) {
        console.error("Error al obtener tareas:", error);
        setError("Error al obtener tareas");
      } finally {
        setCargando(false);
      }
    };

    obtenerTareas();
  }, []);

  const agregarTarea = async (nombre) => {
    try {
      const nuevaTarea = { nombre, completada: false };
      const respuesta = await axios.post('http://localhost:5000/api/tareas', nuevaTarea);
      setTareas([...tareas, respuesta.data]);
      alert("Tarea agregada correctamente.");
    } catch (error) {
      console.error("Error al agregar tarea:", error);
    }
  };

  const actualizarTarea = async (id, nuevaTarea) => {
  try {
    await axios.put(`http://localhost:5000/api/tareas/${id}`, nuevaTarea);
    setTareas(tareas.map(tarea => tarea._id === id ? { ...tarea, ...nuevaTarea } : tarea));
  } catch (error) {
    console.error("Error al editar tarea:", error);
  }
};



  const eliminarTarea = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tareas/${id}`);
      setTareas(tareas.filter(tarea => tarea._id !== id));
      alert("Tarea eliminada correctamente.");
    } catch (error) {
      console.error("Error al eliminar tarea:", error);
    }
  };

  if (cargando) {
    return <h2>Cargando tareas...</h2>;
  }

  return (
    <Router>
  <div>
    <h1 style={{ textAlign: "center" }}>Lista de Tareas</h1>
    {error && <p style={{ color: 'red' }}>{error}</p>}

    <Routes>
      {/* Ruta principal para mostrar la lista de tareas y el formulario de agregar */}
      <Route
        path="/"
        element={
          <div>
            {/* Componente para agregar tareas solo en la ruta "/" */}
            <AgregarTarea agregarTarea={agregarTarea} /> 

            {/* Listado de tareas */}
            <ListadoTareas
              tareas={tareas}
              eliminarTarea={eliminarTarea}
              editarTarea={setTareaEditando}
            />
          </div>
        }
      />
      
      {/* Ruta para editar una tarea (sin el formulario de agregar tarea) */}
      <Route
        path="/edit/:id"
        element={<EditarTarea actualizarTarea={actualizarTarea} tareas={tareas} />}
      />
    </Routes>
  </div>
</Router>

  );
};
