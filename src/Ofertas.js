import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';


function App() {
  const [conexionExitosa, setConexionExitosa] = useState(false);
  const [medicinas, setMedicinas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function obtenerMedicinasConDiferenciaPrecio() {
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

    obtenerMedicinasConDiferenciaPrecio();

    
  }, []);


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

  

  const renderizarTabla = () => {
    return (
      <table style={{ width: '100%', backgroundColor: 'white', borderCollapse: 'collapse' }}>
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
          
        {medicinas.map((medicina, index) => {
          const precioNumerico = parseFloat(medicina.precio.replace('.', '').replace(',', '.'));
          const preciodNumerico = parseFloat(medicina.preciod.replace('.', '').replace(',', '.'));
          
          const descuento = precioNumerico - preciodNumerico;
          const porcentajeDescuento = (descuento / precioNumerico) * 100;
          

          if (descuento !== 0) {
            return (
              <tr key={index}>
                <td>{medicina.laboratorio}</td>
                <td>{medicina.formula}</td>
                <td>{medicina.presentacion}</td>
                <td>{medicina.precio}</td>
                <td>{medicina.preciod}</td>
                <td>{medicina.farmacia}</td>
                <td>Descuento: {porcentajeDescuento.toFixed(2)}%</td>
              </tr>
            );
          } else {
            return null; // Si el descuento es 0, no se renderiza ninguna fila
          }
        })}


          
          
        </tbody>
      </table>
    );
  };

  return (
    <div style={{ marginTop: '100px', textAlign: 'center' }}>
      <h1>Medicinas con diferencia entre precio y preciod distinta de cero:</h1>
      {conexionExitosa ? renderizarTabla() : <p>{error || 'Error de conexión con el servidor'}</p>}
    </div>
  );
}

export default App;