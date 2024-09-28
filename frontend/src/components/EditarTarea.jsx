import React from 'react';

const Tareas = ({ tarea }) => (
  <li>
    <span style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
      {tarea.nombre}
    </span>
  </li>
);

export default Tareas;

