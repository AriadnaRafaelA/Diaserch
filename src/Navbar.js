import React, { useState } from 'react';



function Navbar() {
  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '50px',
    fontWeight: 'bold',
    color: 'white',
  };

  const navbarStyle = {
    backgroundColor: '#38B6FF', // Cambia este valor al color que desees
    position: 'fixed', // Fija el Navbar en la parte superior
    top: '0',
    width: '100%',

    zIndex: '1000', // Añade una alta z-index para asegurarte de que esté en la parte superior
  
  };

  const centerNavStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '30px',
    fontWeight: 'bold',
  };
  
  

  const redirectToDiabetes = () => {
    window.location.href = '/Diabetes.js';
  };
  const redirectToArtTabla = () => {
    window.location.href = '/ArtTabla.js';
  };
  const redirectToTiposDD = () => {
    window.location.href = '/TiposDD.js';
  };
  const redirectToSintomas = () => {
    window.location.href = '/Sintomas.js';
  };
  const redirectToDiagnostico = () => {
    window.location.href = '/Diagnostico.js';
  };
  const redirectToOfertas = () => {
    window.location.href = '/Ofertas.js';
  };

  const [showArrows, setShowArrows] = useState(true);
  const toggleArrows = () => {
    setTimeout(() => {
      setShowArrows(!showArrows);
    }, 0);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={navbarStyle}>
       
      <button className="navbar-toggler custom-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
              onClick={toggleArrows}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div style={logoStyle}>
        <img src="/medicina.png" alt="Logo" width="50" height="75" />
        DIASERCH
      </div>

      <div className="collapse navbar-collapse" id="navbarSupportedContent" style={centerNavStyle}>
        <ul className="navbar-nav mr-auto">
          
          <li className="nav-item active">
            <a className="nav-link text-white" href="/" style={{ marginLeft: '30px', marginRight: '20px' }}>Busqueda<span className="sr-only"></span></a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-white" href="/ofertas.js" style={{ marginLeft: '30px', marginRight: '20px' }}>Ofertas</a>
          </li>

          <li class="nav-item dropdown">
            <button class="nav-link dropdown-toggle text-white"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ marginLeft: '30px', marginRight: '20px' }}>
              Articulos
            </button>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <button class="dropdown-item" onClick={redirectToDiabetes}>¿Que es la diabetes?</button>
              <button class="dropdown-item" onClick={redirectToSintomas}>Sintomas</button>
              <button class="dropdown-item" onClick={redirectToDiagnostico}>Diagnostico</button>
              <button class="dropdown-item" onClick={redirectToTiposDD}>Tipos de diabetes</button>
              <button class="dropdown-item" onClick={redirectToArtTabla}>Tabla de medicamentos </button>
            </div>
          </li>
  
          <li className="nav-item">
            <a className="nav-link text-white" href="/conocenos.js" style={{ marginLeft: '30px', marginRight: '20px' }}>Conocenos</a>
          </li>

          <li className="nav-item">
          <a className="nav-link text-white" href="/Contacto.js" style={{ marginLeft: '30px', marginRight: '20px' }}>Contacto</a>
          </li>

          
        </ul>
        
      </div>

      <div className="d-flex">
        {showArrows && (
            <img
              src="/flechas.jpg"
              alt="Logo"
              width="200"
              height="100"
              className="img-fluid"
            />
          )}
      </div>

    </nav>
  );
}

export default Navbar;