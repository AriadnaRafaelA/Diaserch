import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './siderbar.js'; // Importa el componente Sidebar

function Sintomas() {

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

 
  const textoEstilo = {
    textAlign: 'center',
    fontSize: anchoVentana > 530 ? '40px' : '20px',
    fontWeight: 'bold',
    color: 'black',
    margin: '10px 0',
  };

  const contenidoEstilo = {
    marginLeft: anchoVentana <= 768 ? '1px' : '300px', // Ancho del Sidebar
    marginRight: '1px',
    padding: '2%',
    textAlign: 'justify',
    fontSize: '20px',
    color: 'black',
  };

  const cuadroTextoEstilo = {
    background: 'white',
    borderRadius: '10px',
    padding: '5%',
  };

  
  const listaEstilo = {
    paddingLeft: '0',
    listStyleType: 'none',
  };

  const listItemEstilo = {
    display: 'flex',
    alignItems: 'center',
    lineHeight: '3',
  };

  const iconoEstilo = {
    width: '5%',
    height: '5%',
    marginRight: '10px',
  };

  const texto = {
    fontSize: anchoVentana > 530 ? '20px' : '12px',
  };

  const texto2 = {
    fontSize: anchoVentana > 530 ? '20px' : '12px',
    fontWeight: 'bold', // Establece la negrita
    color: 'white', // Establece el color blanco
  };


  const flechaEstilo = {
    display: 'block',
    textAlign: 'center',
    marginTop: '20px',
  };
  const imagenEstilo = {
    width: '20%',
    height: '20%',
    // Estilos adicionales según sea necesario
  };

  return (
    <div>
      <div className={`Sidebar ocultar-sidebar`}>
        <Sidebar />
      </div>
      <div style={contenidoEstilo}>
        <div className="contenido-expandir">
            <div style={cuadroTextoEstilo}>
              <p style={textoEstilo}>Síntomas</p>

              <div style={texto}>
              <p >Los síntomas de la diabetes incluyen:</p>
              <ul style={listaEstilo}>
                <li style={listItemEstilo}>
                  <img
                    src="sed.png"
                    alt="Icono de sed"
                    style={iconoEstilo}
                  />
                  aumento de la sed y de las ganas de orinar
                </li>
                <li style={listItemEstilo}>
                  <img
                    src="hambre.png"
                    alt="Icono de hambre"
                    style={iconoEstilo}
                  />
                  aumento del hambre
                </li>
                <li style={listItemEstilo}>
                  <img
                    src="cansado.png"
                    alt="Icono de cansancio"
                    style={iconoEstilo}
                  />
                  sentirse cansado
                </li>
                <li style={listItemEstilo}>
                  <img
                    src="vision.png"
                    alt="Icono de visión borrosa"
                    style={iconoEstilo}
                  />
                  visión borrosa
                </li>
                <li style={listItemEstilo}>
                  <img
                    src="entumecido.png"
                    alt="Icono de entumecimiento"
                    style={iconoEstilo}
                  />
                  entumecimiento en los pies o las manos
                </li>
                <li style={listItemEstilo}>
                  <img
                    src="llagas.png"
                    alt="Icono de llagas que no sanan"
                    style={iconoEstilo}
                  />
                  llagas que no sanan
                </li>
                <li style={listItemEstilo}>
                  <img
                    src="perdida.png"
                    alt="Icono de pérdida de peso"
                    style={iconoEstilo}
                  />
                  pérdida de peso sin razón aparente
                </li>
              </ul>
              <p>Los síntomas a menudo aparecen 
                lentamente, en el transcurso de varios años, y pueden 
                ser tan leves que ni siquiera se notan. Muchas personas 
                no tienen síntomas. Algunas personas no saben que tienen 
                la enfermedad hasta que tienen problemas de salud relacionados 
                con la diabetes, como visión borrosa o enfermedades del corazón.</p>
                </div>
          </div>
          
        </div>
      </div>

      {anchoVentana < 990 && (
        <div style={{ display: 'flex' }}>
      
          <div style={{ width: '50%', textAlign: 'center' }}>

            <a href="./Diabetes.js" style={flechaEstilo}>
              <img src="./izquierda.png" alt="Flecha izquierda" style={imagenEstilo} />
            </a>
            <a style={texto2}>¿Que es?</a>
          </div>

          <div style={{ width: '50%', textAlign: 'center' }}>
            <a href="./Diagnostico.js" style={flechaEstilo}>
              <img src="./derecha.png" alt="Flecha derecha" style={imagenEstilo} />
            </a>
            <a style={texto2}>Diagnostico</a>
          </div>

        </div>
      )} 

    </div>
  );
}

export default Sintomas;
