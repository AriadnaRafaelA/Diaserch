import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import Conocenos from './conocenos'; // Asegúrate de importar correctamente el componente
import ArtTabla from './ArtTabla';
import TiposDD from './TiposDD';
import Diabetes from './Diabetes';
import Contacto from './Contacto';
import Sintomas from './Sintomas';
import Ofertas from './Ofertas';
import Diagnostico from './Diagnostico';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [conexionExitosa, setConexionExitosa] = useState(false);
  const [medicinas, setMedicinas] = useState([]);
  const [error, setError] = useState(null);
  const [nombreBuscado, setNombreBuscado] = useState('');
  const [medicinaEncontrada, setMedicinaEncontrada] = useState(null);

  useEffect(() => {
    async function verificarConexion() {
      try {
        const response = await fetch('http://localhost:5000/api/conexion');
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        const data = await response.json();
        setConexionExitosa(true);
        setMedicinas(data);
      } catch (error) {
        setError(`Error: ${error.message}`);
        setConexionExitosa(false);
      }
    }

    verificarConexion();
  }, []);


  const [medicinasEncontradas, setMedicinasEncontradas] = useState([]);
  /*const buscarPorNombre = () => {
    const medicinaEncontrada = medicinas.find(
      (medicina) => medicina.laboratorio.toLowerCase().startsWith(nombreBuscado.toLowerCase())
    );
    setMedicinaEncontrada(medicinaEncontrada);
  };*/
  const buscarPorNombre = () => {
    const medicinasEncontradas = medicinas.filter(
      (medicina) => medicina.laboratorio.toLowerCase().startsWith(nombreBuscado.toLowerCase())
    );
    setMedicinasEncontradas(medicinasEncontradas);
  };

  const textoEstilo = {
    textAlign: 'center',
    fontSize: '48px',  // Tamaño de fuente más grande
    //fontWeight: 'bold',
    color: 'white',   // Color blanco
    margin: '10px 0',
  
  };
  
  const textoEstilo2 = {
    textAlign: 'center',
    fontSize: '100px',  // Tamaño de fuente más grande
    fontWeight: 'bold',
    color: 'white',   // Color blanco
    margin: '10px 0',

  };

  const contenidoEstilo = {
    marginTop: '100px', // Agregar margen superior para separar del Navbar
   
  };

  const buscadorEstilo = {
    textAlign: 'center',
    marginTop: '70px', // Agregar margen superior para separar del texto
   
  };

  const inputEstilo = {
    width: '50%', // Ocupar todo el ancho disponible
    height: '60px', // Altura más grande
    fontSize: '24px', // Tamaño de fuente más grande
    borderRadius: '30px', // Hace que las esquinas sean redondeadas
    
  };

  

  return (
    <Router>
      <div style={contenidoEstilo}>
        <Navbar />
        
        <Routes>
          
          <Route path="/conocenos.js" element={<Conocenos /> } />
          <Route path="/ArtTabla.js" element={<ArtTabla />} />
          <Route path="/TiposDD.js" element={<TiposDD />}  />
          <Route path="/Diabetes.js" element={<Diabetes />}  />
          <Route path="/Sintomas.js" element={<Sintomas />}  />
          <Route path="/Diagnostico.js" element={<Diagnostico />}  />
          <Route path="/Contacto.js" element={<Contacto />}  />
          <Route path="/Ofertas.js" element={<Ofertas />}  />
          <Route path="/" element={
              <div>
                <h6>Verificación de Conexión</h6>
                <p style={textoEstilo}>A tu alcance</p>
                <p style={textoEstilo2}>El mejor precio</p>
                <div style={buscadorEstilo}>
                  <input
                    type="text"
                    placeholder="Buscar por nombre"
                    value={nombreBuscado}
                    onChange={(e) => setNombreBuscado(e.target.value)}
                    style={inputEstilo}
                  />
                  {nombreBuscado && (
                    <button className="clear-button" onClick={() => setNombreBuscado('')}>
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  )}
                  <button className="search-button" onClick={buscarPorNombre}>
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
                {conexionExitosa ? (
                  <div>
                    <p>Conexión exitosa con el servidor</p>
                    {medicinasEncontradas.length > 0 ? (
                      <div style={{ textAlign: 'center' }}>
                        <h2>Medicinas Encontradas:</h2>
                        <table style={{ width: '100%', backgroundColor: 'white' }}>
                          <thead>
                            <tr>
                              <th>Laboratorio</th>
                              <th>Formula</th>
                              <th>Presentacion</th>
                              <th>Precio</th>
                              <th>Preciod</th>
                              <th>Farmacia</th>
                            </tr>
                          </thead>
                          <tbody>
                            {medicinasEncontradas.map((medicina, index) => (
                              <tr key={index}>
                                <td>{medicina.laboratorio}</td>
                                <td>{medicina.formula}</td>
                                <td>{medicina.presentacion}</td>
                                <td>{medicina.precio}</td>
                                <td>{medicina.preciod}</td>
                                <td>{medicina.farmacia}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <button onClick={() => setMedicinasEncontradas([])}>Borrar Resultados</button>
                      </div>
                    )  : null}
                    </div>
                 ) : (
                  <p>{error || 'Error de conexión con el servidor'}</p>
                )}
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;