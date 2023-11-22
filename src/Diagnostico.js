import React from 'react';
import './App.css';
import Sidebar from './siderbar.js'; // Importa el componente Sidebar

function Diagnostico() {
  const textoEstilo = {
    textAlign: 'center',
    fontSize: '48px',
    fontWeight: 'bold',
    color: 'Black',
    margin: '10px 0',
  };

  const textoEstilo2 = {
    //textAlign: 'center',
    fontSize: '30px',
    fontWeight: 'bold',
    color: 'Black',
    margin: '10px 0',
  };

  const contenidoEstilo = {
    marginLeft: '300px',
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

  const cuadroGrisEstilo = {
    background: '#f0f0f0', // Color gris claro
    borderRadius: '10px',
    padding: '20px',
    //marginLeft: '450px',
  };
  const cuadroRojoEstilo = {
    background: 'red', // Color gris claro
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    fontSize: '40px',
    fontWeight: 'bold',
    color: 'white',
    margin: '10px 0',
  };

  const imagenEstilo = {
    float: 'left', // Coloca la imagen a la izquierda del texto
    marginRight: '40px', // Espacio entre la imagen y el texto
    width: '450px', // Ajusta el tamaño de la imagen según tus necesidades
    marginLeft: '10px',
    
    
};

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={contenidoEstilo}>
        <div style={cuadroTextoEstilo}>
          <p style={textoEstilo}>Diagnostico</p>
          <p>
          El diagnóstico de la diabetes se hace mediante una analítica 
          de sangre para conocer cuáles son los valores de azúcar (glucosa) en la sangre. 
          Los valores normales oscilan entre 70 y 100 mg/dl.
          </p>
          <p> 
          Si el resultado de la analítica se corresponde a una de las siguientes situaciones, 
          indica que la persona tiene diabetes:
          </p>
                <li ><strong>En ayunas, </strong>igual o superiores a 126 mg/dl, en dos determinaciones.</li >
                <li ><strong>A cualquier hora del día, </strong>valores iguales o superiores a 200 mg/dL 
                acompañados de síntomas característicos, como son tener con frecuencia ganas de orinar y mucha sed.</li >
                <li ><strong>Después de la ingesta de un preparado de glucosa </strong>(75gr), igual o superiores a 200 mg/dL. 
                Esta prueba se realiza a las personas que en ayunas tienen valores de glucosa entre 100 y 126mg/dL.</li >
                <li ><strong>Hemoglobina glicosilada </strong>(HbA1c) igual o superior a 6,5%.</li >
        
                <img src="H.jpg" alt="hemoglobina glicosilada" style={imagenEstilo}/>
                    
                    <div style={cuadroGrisEstilo}>
                    <p style={textoEstilo2}>La hemoglobina glicosilada</p>
                    La <strong>hemoglobina glicosilada (HbA1c)</strong> es una medida importante para valorar si la diabetes está controlada. 
                    Este valor corresponde al valor medio de azúcar en sangre durante los últimos 2-3 meses. Se puede obtener 
                    mediante un análisis de sangre o un pinchazo en el dedo (glucemia capilar).
                    
                    <p>Una persona sin diabetes tiene un HbA1c entre 4% y 6%. En general, las recomendaciones de las sociedades científicas 
                        recomiendan mantener el valor por debajo de 7%, siempre y cuando no suponga un riesgo de tener niveles bajos de 
                        azúcar en sangre (hipoglucemia).</p> 

                    <p><strong>¿Cuál debe ser el valor de HbA1c? </strong>El profesional de la salud le orientará sobre cuál tiene que ser 
                    su objetivo de A1c.</p> 

                    <p><strong>¿Qué pasa si los valores del HbA1c son superiores a los que me ha recomendado mi equipo de salud? </strong>
                    Cuanto más alto sea el nivel de HbA1c, mayor es el riesgo de desarrollar complicaciones que afecten a los vasos sanguíneos 
                    y que provoquen problemas de circulación. De igual manera, se pueden ver afectados los riñones y los ojos, así como una 
                    pérdida de sensibilidad en las extremidades inferiores (neuropatia). Así que si se mantienen los niveles de glucosa en 
                    sangre y la HbA1c se encuentra en el rango recomendado, se reducirán en gran medida la probabilidad de aparición de 
                    complicaciones crónicas.</p> 

                    <p><strong>¿Cómo puedo hacer esta prueba?</strong>Es una prueba que se realiza en un entorno hospitalario o de atención 
                    primaria cada 3-6 meses para evaluar el grado de control de la diabetes.</p> 
                    
                    </div>
                    <div style={cuadroRojoEstilo}>

                    <p>Es necesario el diagnostico de un profesonal</p>
                   
                    </div>
        </div>
      </div>
    </div>
  );
}

export default Diagnostico;
