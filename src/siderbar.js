import React from 'react';
import { NavLink } from 'react-router-dom'; // Importa NavLink desde react-router-dom

function Sidebar() {

    const sidebarStyle = {
        width: '280px',
        position: 'fixed', // Fija el Sidebar en su lugar
        height: '100%',
        overflow: 'auto',
        color: 'white',
        top: '220px',
        left: '0',
      };

  return (
    <div style={sidebarStyle} className="d-flex flex-column flex-shrink-0 p-3 text-white">
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/Diabetes.js" className="nav-link text-white" >
            <svg className="bi me-2" width="16" height="16"><use xlinkHref="./Diabetes.js"></use></svg>
            Que es la Diabetes
          </NavLink>
        </li>
        <li>
          <NavLink to="/Sintomas.js" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16"><use xlinkHref="./Sintomas.js"></use></svg>
            Sintomas
          </NavLink>
        </li>
        <li>
          <NavLink to="/Diagnostico.js" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16"><use xlinkHref="./Diagnostico.js"></use></svg>
            Diagnostico
          </NavLink>
        </li>
        <li>
          <NavLink to="/TiposDD.js" className="nav-link text-white" >
            <svg className="bi me-2" width="16" height="16"><use xlinkHref="./TiposDD.js"></use></svg>
            Tipos de diabetes
          </NavLink>
        </li>
        <li>
          <NavLink to="/ArtTabla.js" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16"><use xlinkHref="Tabla"></use></svg>
            Tabla de medicamentos
          </NavLink>
        </li>


      </ul>
      <hr />
    </div>
  );
}

export default Sidebar;
