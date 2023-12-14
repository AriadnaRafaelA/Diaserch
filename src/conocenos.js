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

  const contenidoEstilo = {
    marginLeft: '100px',
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

  

  return (
    <div >

      <div >
      
        <p style={textoEstilo2}>Conocenos</p>
        <p></p>
      </div>
      
      <div style={{ display: 'flex' }}>
      <div style={contenidoEstilo}>
        <div style={cuadroTextoEstilo}>
          <div>
            <h2>Bienvenido a <strong>DIASERCH</strong></h2>
            <p>En <strong>DIASERCH</strong>, nos dedicamos a simplificar la vida de quienes enfrentan el desafío diario de la diabetes mellitus tipo 2. Nuestro compromiso es brindarte una solución integral que te permita encontrar tus medicamentos de manera rápida, conveniente y confiable.</p>

            <h3>Nuestra Misión:</h3>
            <p>Facilitar el acceso a los medicamentos necesarios para el manejo de la diabetes tipo 2, eliminando las barreras asociadas con la búsqueda y adquisición de los mismos en distintas farmacias.</p>

            <h3>¿Cómo Ayudamos?:</h3>
            <p>Ponemos a tu disposición una plataforma intuitiva que te permite buscar tus medicamentos en farmacias de renombre como San Pablo, Guadalajara y Benavides. Trabajamos con información directamente proveniente de fuentes oficiales para garantizar la precisión y confiabilidad de los datos que compartimos.</p>

        

            <h3>Transparencia y Confianza:</h3>
            <p>Valoramos profundamente tu confianza. Nuestra plataforma se basa en la transparencia en la recopilación de datos y el respeto a la privacidad. Verificamos y actualizamos regularmente la información para brindarte la mejor experiencia posible.</p>

            <h3>Nuestro Compromiso:</h3>
            <p>Estamos aquí para simplificar tu día a día. Queremos que <strong>DIASERCH</strong> sea una herramienta útil para ti. Estamos abiertos a tus preguntas, comentarios y nos comprometemos a mejorar continuamente nuestra plataforma para satisfacer tus necesidades.</p>

            <p>Explora <strong>DIASERCH</strong> y descubre cómo podemos hacer más sencilla la búsqueda de tus medicamentos. ¡Gracias por confiar en nosotros para ser parte de tu camino hacia un mejor manejo de la diabetes tipo 2!</p>
          </div>
        </div>
      </div>
    </div>

      <div className="fondo-imagen">
        {/* Resto de tu contenido */}
      </div>

    </div>
    
        

  );
}

export default conocenos;