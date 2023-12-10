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
    fontSize: '48px',
    fontWeight: 'bold',
    color: 'black',
    margin: '10px 0',
  };

  const contenidoEstilo = {
    marginLeft: anchoVentana <= 768 ? '20px' : '300px', // Ancho del Sidebar
    marginRight: '20px',
    padding: '20px',
    textAlign: 'justify',
    fontSize: '20px',
    color: 'black',
  };

  const cuadroTextoEstilo = {
    background: 'white',
    borderRadius: '10px',
    padding: '20px',
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
          <p  class="texto-ajustado" style={textoEstilo}>¿Que es la diabetes?</p>
          <p  class="texto-ajustado">
            La diabetes es una enfermedad metabólica crónica caracterizada por niveles elevados de glucosa en sangre (o azúcar en sangre), que con el tiempo conduce a daños graves en el corazón, los vasos sanguíneos, los ojos, los riñones y los nervios. 
            La más común es la diabetes tipo 2, generalmente en adultos, que ocurre cuando el cuerpo se vuelve resistente a la insulina o no produce suficiente insulina. 
            En las últimas tres décadas, la prevalencia de la diabetes tipo 2 ha aumentado drásticamente en países de todos los niveles de ingresos. La diabetes tipo 1, una vez conocida como diabetes juvenil o diabetes insulinodependiente, es una afección crónica en la que el páncreas produce poca o ninguna insulina por sí mismo. 
            Para las personas que viven con diabetes, el acceso a un tratamiento asequible, incluida la insulina, es fundamental para su supervivencia.
          </p>
          <p class="texto-ajustado"> 
          Aproximadamente 62 millones de personas en las Américas (422 millones de personas en todo el mundo) tienen diabetes, la mayoría vive en países de ingresos bajos y medianos, y 244 084 muertes (1.5 millones en todo el mundo) se atribuyen directamente a la diabetes cada año. 
          Tanto el número de casos como la prevalencia de diabetes han aumentado constantemente durante las últimas décadas [12].
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Diabetes;
