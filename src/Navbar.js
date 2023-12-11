import React, {  useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '50px',
    fontWeight: 'bold',
    color: 'white',
  };
  const gustavoAMaderoCoordinates = [
    // Define aquí las coordenadas que representan los límites de la delegación Gustavo A. Madero
    { lat: 19.51796193683034, lng: -99.1629829966421},
    { lat: 19.465170886901944,  lng: -99.14299873978628},
    { lat: 19.464907921944256,  lng: -99.13320416550526 },
    { lat: 19.46170240362441,  lng: -99.12779713988733 },
    { lat: 19.458110052811723,  lng: -99.11732550929604 },
    { lat: 19.45382078513138,  lng: -99.1118752231829 },
    { lat: 19.449774137443704,  lng: -99.10058861194771 },
    { lat: 19.45183802220947,  lng: -99.09397958417931 },
    { lat:  19.451768357973023,  lng: -99.09353693388411 },
    { lat:  19.445801090137323, lng:  -99.08725961213553 },
    { lat: 19.450420968140744,   lng: -99.08067606416648 },
    { lat: 19.446421238118084,  lng: -99.06825514111289 },
    { lat: 19.446661905240965,  lng:  -99.06736197286557 },
    { lat: 19.44480911158036,  lng: -99.06233502811216 },
    { lat: 19.448490580619715,  lng: -99.05251072143439 },
    { lat: 19.45022300774941, lng:  -99.0508775133647 },
    { lat: 19.478612939432693,  lng: -99.06335574347547 },
    { lat: 19.47981579952389,  lng: -99.06302401185255 },
    { lat: 19.479960142677335,  lng: -99.06361092319742 },
    { lat: 19.481270282553158,  lng: -99.06328194004548 },
    { lat: 19.481542059947465, lng: -99.0645374944182  },
    { lat: 19.48912310954108, lng: -99.06799312004756  },
    { lat: 19.49876341728045, lng:  -99.06389266089538 },
    { lat: 19.512647351225972,  lng: -99.09739463179585 },
    { lat: 19.511319180546625,  lng: -99.1033858665898 },
    { lat: 19.51014453933977,  lng: -99.10610384318362 },
   
    { lat: 19.509701229247362,  lng: -99.10733283309982 },
    { lat: 19.511031285468906,  lng: -99.10763628666061 },
    { lat: 19.510473520529665,  lng: -99.1078487083442 },
    { lat: 19.510487820972024,  lng: -99.10866804451499 },
    { lat: 19.511117348295038,  lng: -99.10897813987447 },
    { lat: 19.510316459037032,  lng: -99.10943332105863 },
    { lat: 19.51045947080494,  lng: -99.1099112672499 },
    { lat: 19.51100294044728, lng:  -99.110191969453 },
    { lat: 19.511174560409717,  lng: -99.11060922249058 },
    { lat: 19.51108159365006,  lng: -99.11441002407155 },
    { lat: 19.51304805418342,  lng: -99.11592731109197 },
    { lat:19.516294615882952, lng:  -99.12099477206382 },

    { lat: 19.521214128517514,  lng: -99.12592597186047 },
    { lat: 19.524531871657082,  lng: -99.12801986944808 },
    { lat: 19.535056609258405,  lng: -99.12738259671745 },
    { lat: 19.536114768711343,  lng: -99.13055371405441 },
    { lat: 19.545452037831335,  lng: -99.1227396380058 },
    { lat: 19.549126690316257,  lng: -99.12107061958038 },
    { lat: 19.552200774219454,  lng: -99.11849125008831 },
    { lat: 19.554059488685528,  lng: -99.11562354340964 },
   
    { lat: 19.56491116020614,  lng: -99.10811300145453 },
    { lat: 19.568771253569246, lng: -99.11184553507333 },
    { lat: 19.57980777082655,  lng: -99.11466770065026 },
    { lat: 19.581437424416784,  lng: -99.11692843795252 },
   
    { lat: 19.59058620237416,  lng: -99.11788433087676 },
    { lat: 19.59270177290813,  lng: -99.12372591758634 },
    { lat: 19.549597451303104,  lng: -99.16094662552185 },
    { lat: 19.544855785311064,  lng: -99.15112461735163 },
    { lat: 19.53420565729397,  lng: -99.15893374319499 },
    { lat: 19.532446292299078,  lng: -99.15587602461916 },
    { lat: 19.52886149244039,  lng: -99.15860280938685 },
    { lat: 19.528145678181275,  lng: -99.15680124390947 },
    { lat: 19.52697270898182,  lng: -99.15929034533903 },
    { lat: 19.531988053059877,  lng: -99.17594191078877 },
    { lat: 19.529358907707323,  lng: -99.17710049408326 },
    { lat: 19.52628512731139,  lng: -99.17250829059469 },
    { lat: 19.523858180304966,  lng: -99.17508310206408 },
    { lat:19.522086525064758,  lng:  -99.16999965003696 },

    //{ lat:  ,  lng:  },


    // ... Agrega más puntos para completar el polígono que representa los límites...
  ];
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
      {anchoVentana > 768 && 
            <img
              src="/flechas.jpg"
              alt="Logo"
              width="200"
              height="100"
              className="img-fluid"
            />
          }
      </div>

    </nav>
  );
}

export default Navbar;