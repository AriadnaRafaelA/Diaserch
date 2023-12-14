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
    fontSize: '48px',
    fontWeight: 'bold',
    color: 'Black',
    margin: '10px 0',
  };

  const contenidoEstilo = {
    marginLeft: anchoVentana <= 768 ? '20px' : '300px', 
    marginRight: '20px',
    padding: '20px',
    textAlign: 'justify',
    fontSize: '20px',
    //fontWeight: 'bold',
    color: 'Black',
  };

  const cuadroTextoEstilo = {
    background: 'white', // Fondo blanco
    borderRadius: '10px', // Bordes redondos
    padding: '20px',
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
    width: '50px',
    height: '50px',
    marginRight: '10px',
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
              
              <p>Los síntomas de la diabetes incluyen:</p>
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
                  entumecimiento u hormigueo en los pies o las manos
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
              <p>Los síntomas de la diabetes a menudo aparecen 
                lentamente, en el transcurso de varios años, y pueden 
                ser tan leves que ni siquiera se notan. Muchas personas 
                no tienen síntomas. Algunas personas no saben que tienen 
                la enfermedad hasta que tienen problemas de salud relacionados 
                con la diabetes, como visión borrosa o enfermedades del corazón.</p>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default Sintomas;
