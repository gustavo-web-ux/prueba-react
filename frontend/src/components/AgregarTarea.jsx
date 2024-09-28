import React, { useState } from 'react';
import './css/agregar.css'

const AgregarTarea = ({ agregarTarea }) => {
  const [nombre, setNombre] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!nombre) return; 
    agregarTarea(nombre);
    setNombre(''); 
  };

  return (
    <form onSubmit={manejarEnvio} className="agregar-tarea-form">
      <label>
        Nombre de la tarea:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingrese la tarea"
          required
        />
      </label>
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default AgregarTarea;
