import React, { useEffect, useState }  from 'react';
import './App.css';
import Sidebar from './siderbar.js'; // Importa el componente Sidebar

function Diabetes() {

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
        {/* Contenido de la barra lateral */}
        <Sidebar />
      </div>
      <div style={contenidoEstilo}>
      <div className="contenido-expandir">
        <div style={cuadroTextoEstilo}>
          <p  class="texto-ajustado" style={textoEstilo}>¿Qué es la diabetes?</p>
          <p  class="texto-ajustado" style={texto}>
            La diabetes es una enfermedad metabólica crónica caracterizada por niveles elevados de glucosa en sangre (o azúcar en sangre), que con el tiempo conduce a daños graves en el corazón, los vasos sanguíneos, los ojos, los riñones y los nervios. 
            La más común es la diabetes tipo 2, generalmente en adultos, que ocurre cuando el cuerpo se vuelve resistente a la insulina o no produce suficiente insulina. 
            </p>
            <p  class="texto-ajustado" style={texto}>  En las últimas tres décadas, la prevalencia de la diabetes tipo 2 ha aumentado drásticamente en países de todos los niveles de ingresos. La diabetes tipo 1, una vez conocida como diabetes juvenil o diabetes insulinodependiente, es una afección crónica en la que el páncreas produce poca o ninguna insulina por sí mismo. 
            Para las personas que viven con diabetes, el acceso a un tratamiento asequible, incluida la insulina, es fundamental para su supervivencia.
          </p>
          <p class="texto-ajustado" style={texto}> 
          Aproximadamente 62 millones de personas en las Américas (422 millones de personas en todo el mundo) tienen diabetes, la mayoría vive en países de ingresos bajos y medianos, y 244 084 muertes (1.5 millones en todo el mundo) se atribuyen directamente a la diabetes cada año. 
          Tanto el número de casos como la prevalencia de diabetes han aumentado constantemente durante las últimas décadas.
          </p>
          <iframe
            width="560" // Ancho del iframe
            height="315" // Altura del iframe
            src="https://www.youtube.com/embed/10SjTF2Dp1E" // Enlace del video de YouTube
            title="Video de YouTube"
            frameborder="0" // Sin borde del iframe
            allowfullscreen // Permitir pantalla completa

            style={{
              maxWidth: '100%',
              height: anchoVentana > 530 ? '' : 'auto',
              //margin: '20px auto',  Ajustar margen para centrar el iframe
              display: 'block', // Asegurar que el iframe ocupe todo el ancho disponible
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          ></iframe>
        </div>
      </div>
      </div>
      
     {anchoVentana < 990 && (
      <div style={{ display: 'flex' }}>
    
        <div style={{ width: '50%', textAlign: 'center' }}>

          
        </div>

        <div style={{ width: '50%', textAlign: 'center' }}>
          <a href="./sintomas.js" style={flechaEstilo}>
            <img src="./derecha.png" alt="Flecha derecha" style={imagenEstilo} />
          </a>
          <a style={texto2}>Síntomas</a>
        </div>

      </div>
     )} 

    </div>
    

    
  );
}

export default Diabetes;
