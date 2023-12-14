import React, {  useEffect, useState } from 'react';

function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '50px',
    fontWeight: 'bold',
    color: 'white',
  };

  const navbarStyle = {
    backgroundColor: scrolled ? '#277FB3' : '#38B6FF', // Cambia al color que desees cuando hagas scroll y cuando no
    position: 'fixed', // Fija el Navbar en la parte superior
    top: '0',
    width: '100%',
    zIndex: '1000', // Añade una alta z-index para asegurarte de que esté en la parte superior
    transition: 'background-color 0.3s ease', // Agrega una transición para suavizar el cambio de color
    //height: '100px', // Definir la altura deseada para la barra de navegación
    padding: '0', // Eliminar cualquier relleno
    margin: '0', // Eliminar cualquier margen
  };

  const imgContainerStyle = {
    width: '150px', // Ancho de la imagen
    height: '100px', //'116px',  Alto de la imagen
    margin: '0', // Eliminar cualquier margen
  };

  const imgStyle = {
    width: '100%', // Ajustar el ancho al 100% del contenedor
    height: '100%', // Ajustar la altura al 100% del contenedor
    objectFit: 'cover', // Escalar la imagen para cubrir todo el espacio disponible sin deformarla
    borderTop: 'none', // Eliminar el borde superior de la imagen
    padding: '0',
    transition: 'opacity 0.3s ease', // Agrega transición al cambiar la opacidad de la imagen
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

  const [showArrows, setShowArrows] = useState(true);
  const toggleArrows = () => {
    setTimeout(() => {
      setShowArrows(!showArrows);
    }, 0);
  };

  const [anchoVentana, setAnchoVentana] = useState(window.innerWidth);

  useEffect(() => {
    const actualizarAnchoVentana = () => {
      setAnchoVentana(window.innerWidth);
    };

    window.addEventListener('resize', actualizarAnchoVentana);

    return () => {
      window.removeEventListener('resize', actualizarAnchoVentana);
    };
  }, []);

  

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
            <a className="nav-link text-white" href="/" style={{ marginLeft: '30px', marginRight: '20px' }}>Búsqueda<span className="sr-only"></span></a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-white" href="/ofertas.js" style={{ marginLeft: '30px', marginRight: '20px' }}>Ofertas</a>
          </li>

          <li class="nav-item dropdown">
            <button class="nav-link dropdown-toggle text-white"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ marginLeft: '30px', marginRight: '20px' }}>
              Artículos
            </button>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <button class="dropdown-item" onClick={redirectToDiabetes}>¿Qué es la diabetes?</button>
              <button class="dropdown-item" onClick={redirectToSintomas}>Síntomas</button>
              <button class="dropdown-item" onClick={redirectToDiagnostico}>Diagnostico</button>
              <button class="dropdown-item" onClick={redirectToTiposDD}>Tipos de diabetes</button>
              <button class="dropdown-item" onClick={redirectToArtTabla}>Tabla de medicamentos </button>
            </div>
          </li>
  
          <li className="nav-item">
            <a className="nav-link text-white" href="/conocenos.js" style={{ marginLeft: '30px', marginRight: '20px' }}>Conócenos</a>
          </li>

          <li className="nav-item">
          <a className="nav-link text-white" href="/Contacto.js" style={{ marginLeft: '30px', marginRight: '20px' }}>Contacto</a>
          </li>

          
        </ul>
        
      </div>

      <div className="d-flex" style={imgContainerStyle}>
        {anchoVentana > 768 && 
            /* <img
                src="/flechas3.png"
                alt="Logo"
                width="150"
                height="100"
                className="img-fluid"
                style={imgStyle}
              />*/
          <img
            src={scrolled ? '/flechas4.png' : '/flechas3.png'}
            alt="Logo"
            className="img-fluid"
            style={imgStyle}
          />
        }
      </div>

    </nav>
  );
}

export default Navbar;