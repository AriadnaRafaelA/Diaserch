import React from 'react';
import './App.css';


function conocenos() {

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


  

  return (
    <div >

      

    

      <div >
      <p style={textoEstilo}>Conocenos</p>
        <p style={textoEstilo2}>Conocenos</p>
        <p></p>
      </div>
      

      <div className="fondo-imagen">
        {/* Resto de tu contenido */}
      </div>

    </div>
    
        

  );
}

export default conocenos;