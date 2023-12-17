import React from 'react';
import './App.css';


function conocenos() {

  const texto = {

    fontSize: '12px',  // Tamaño de fuente más grande
    
  };
  const texto2 = {

    fontSize: '14px',  // Tamaño de fuente más grande
    
  };
  
  const textoEstilo2 = {
    textAlign: 'center',
    //fontSize: '100px',   Tamaño de fuente más grande
    fontSize: '9vw',
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

  const Texto = {
    fontSize: '2vw',
  };

  const tablaStyles = {
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    // padding: '20px', Espaciado interno
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Sombra para el efecto de elevación
    //margin: 'auto',  Para centrar horizontalmente
    width: '95%', // Anchura máxima para el contenido de la tabla
      
    padding: '20px', // Espaciado interno
    marginTop: '2%',
    margindown: '2%',
    
    color: '#000000',

  };

  const tablaStyles2 = {
    backgroundColor: 'rgba(255, 255, 255, 10)',
    borderRadius: '10px',
    // padding: '20px', Espaciado interno
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Sombra para el efecto de elevación
    margin: 'auto', // Para centrar horizontalmente
    width: '80%', // Anchura máxima para el contenido de la tabla
    border: '1px solid #ccc', // Borde con color gris
    padding: '20px', // Espaciado interno
    marginTop: '5%',
    margindown: '5%',
    textAlign: 'left' ,
    color: '#000000'
  };

  const tablaStyles3 = {
    color: '#FFFFFF',
    backgroundColor: '#277FB3',
    borderRadius: '10px',
    // padding: '20px', Espaciado interno
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Sombra para el efecto de elevación
    margin: 'auto', // Para centrar horizontalmente
    width: '95%', // Anchura máxima para el contenido de la tabla
 
    padding: '0.5%', // Espaciado interno
    marginTop: '5%',
    margindown: '5%',
    textAlign: 'left',
    marginBottom: '5%', 
  };



  return (
    <div >

      <div >
      
        <p style={textoEstilo2}>Conocenos</p>
        <p></p>
      </div>
      {window.innerWidth > 550 ? ( // Por ejemplo, si el ancho de la pantalla es mayor a 768px
      <div style={tablaStyles3}>
        <div style={{ display: 'flex'}}>
          <div style={{ ...tablaStyles, width: '100%', marginRight: '2%' ,marginLeft: '2%',}}>
            <h2 style={{ textAlign: 'center' }}>Bienvenido a <strong>DIASERCH</strong></h2>
            <p style={{ textAlign: 'justify' }}>En <strong>DIASERCH</strong>, nos dedicamos a simplificar la vida de quienes enfrentan el desafío diario de la diabetes mellitus tipo 2. Nuestro compromiso es brindarte una solución integral que te permita encontrar tus medicamentos de manera rápida, conveniente y confiable.</p>
          </div>
        </div>

        <div style={{ display: 'flex'}}>
          <div style={{ ...tablaStyles, width: '50%', marginRight: '1%' , marginLeft: '2%',}}>
            <h3 style={{ textAlign: 'center' }}>Nuestra Misión:</h3>
            <p style={{ textAlign: 'justify' }}>Facilitar el acceso a los medicamentos necesarios para el manejo de la diabetes tipo 2, eliminando las barreras asociadas con la búsqueda y adquisición de los mismos en distintas farmacias.</p>
          </div>

          <div style={{ ...tablaStyles, width: '50%',marginRight: '2%' , marginLeft: '1%',}}>
            <h3 style={{ textAlign: 'center' }}>¿Cómo Ayudamos?:</h3>
            <p style={{ textAlign: 'justify' }}>Ponemos a tu disposición una plataforma intuitiva que te permite buscar tus medicamentos en farmacias de renombre como San Pablo, Guadalajara y Benavides. Trabajamos con información directamente proveniente de fuentes oficiales para garantizar la precisión y confiabilidad de los datos que compartimos.</p>
          </div>
        </div>

        <div style={{ display: 'flex'}}>
          <div style={{ ...tablaStyles, width: '50%', marginRight: '1%' , marginLeft: '2%',}}>
            <h3 style={{ textAlign: 'center' }}>Transparencia y Confianza:</h3>
            <p style={{ textAlign: 'justify' }}>Valoramos profundamente tu confianza. Nuestra plataforma se basa en la transparencia en la recopilación de datos y el respeto a la privacidad. Verificamos y actualizamos regularmente la información para brindarte la mejor experiencia posible.</p>
          </div>

          <div style={{ ...tablaStyles, width: '50%',marginRight: '2%' , marginLeft: '1%',}}>
            <h3 style={{ textAlign: 'center' }}>Nuestro Compromiso:</h3>
            <p style={{ textAlign: 'justify' }}>Estamos aquí para simplificar tu día a día. Queremos que <strong>DIASERCH</strong> sea una herramienta útil para ti. Estamos abiertos a tus preguntas, comentarios y nos comprometemos a mejorar continuamente nuestra plataforma para satisfacer tus necesidades.</p>
          </div>
        </div>

        <div style={{ display: 'flex'}}>
          <div style={{ width: '100%', marginRight: '2%' ,marginLeft: '2%', padding: '20px',  marginTop: '2%', margindown: '2%',}}>
            <h4 style={{ textAlign: 'center' }}>Explora <strong>DIASERCH</strong> y descubre cómo podemos hacer más sencilla la búsqueda de tus medicamentos.</h4>
            <br></br>
            <h3 style={{ textAlign: 'center' }}><p>¿Nos hacen falta farmacias?</p></h3>
            <h4 style={{ textAlign: 'center' }}>Contáctanos a través de <strong>contacto.diaserch@gmail.com</strong> y haznos saber qué farmacias hacen falta.</h4>

          </div>
        </div>
      </div>
 
  ) : ( 

      <div style={tablaStyles3}>
        <div style={{ display: 'flex'}}>
          <div style={{ ...tablaStyles, width: '100%', marginRight: '2%' ,marginLeft: '2%',}}>
            <p style={{...texto2, textAlign: 'center' }}>Bienvenido a <strong>DIASERCH</strong></p>
            <p style={{... texto, textAlign: 'justify' }}>En <strong>DIASERCH</strong>, nos dedicamos a simplificar la vida de quienes enfrentan el desafío diario de la diabetes mellitus tipo 2. Nuestro compromiso es brindarte una solución integral que te permita encontrar tus medicamentos de manera rápida, conveniente y confiable.</p>
          </div>
        </div>

        <div style={{ display: 'flex'}}>
          <div style={{ ...tablaStyles, width: '100%', marginRight: '1%' , marginLeft: '2%',}}>
            <h3 style={{...texto2, textAlign: 'center' }}>Nuestra Misión:</h3>
            <p style={{...texto, textAlign: 'justify' }}>Facilitar el acceso a los medicamentos necesarios para el manejo de la diabetes tipo 2, eliminando las barreras asociadas con la búsqueda y adquisición de los mismos en distintas farmacias.</p>
          </div>
        </div>

        <div style={{ display: 'flex'}}>
          <div style={{ ...tablaStyles, width: '100%',marginRight: '2%' , marginLeft: '1%',}}>
            <h3 style={{...texto2, textAlign: 'center' }}>¿Cómo Ayudamos?:</h3>
            <p style={{...texto, textAlign: 'justify' }}>Ponemos a tu disposición una plataforma intuitiva que te permite buscar tus medicamentos en farmacias de renombre como San Pablo, Guadalajara y Benavides. Trabajamos con información directamente proveniente de fuentes oficiales para garantizar la precisión y confiabilidad de los datos que compartimos.</p>
          </div>
        </div>

        <div style={{ display: 'flex'}}>
          <div style={{ ...tablaStyles, width: '100%', marginRight: '1%' , marginLeft: '2%',}}>
            <h3 style={{...texto2, textAlign: 'center' }}>Transparencia y Confianza:</h3>
            <p style={{...texto, textAlign: 'justify' }}>Valoramos profundamente tu confianza. Nuestra plataforma se basa en la transparencia en la recopilación de datos y el respeto a la privacidad. Verificamos y actualizamos regularmente la información para brindarte la mejor experiencia posible.</p>
          </div>
        </div>

        <div style={{ display: 'flex'}}>
          <div style={{ ...tablaStyles, width: '100%',marginRight: '2%' , marginLeft: '1%',}}>
            <p style={{...texto2, textAlign: 'center' }}>Nuestro Compromiso:</p>
            <p style={{...texto, textAlign: 'justify' }}>Estamos aquí para simplificar tu día a día. Queremos que <strong>DIASERCH</strong> sea una herramienta útil para ti. Estamos abiertos a tus preguntas, comentarios y nos comprometemos a mejorar continuamente nuestra plataforma para satisfacer tus necesidades.</p>
          </div>
        </div>

        <div style={{ display: 'flex'}}>
          <div style={{...texto, width: '100%', marginRight: '2%' ,marginLeft: '2%', padding: '20px',  marginTop: '2%', margindown: '2%',}}>
            <p style={{textAlign: 'center' }}>Explora <strong>DIASERCH</strong> y descubre cómo podemos hacer más sencilla la búsqueda de tus medicamentos.</p>
            
            <p style={{textAlign: 'center' }}>¿Nos hacen falta farmacias?</p>
            <p style={{ textAlign: 'center' }}>Contáctanos a través de <strong>contacto.diaserch@gmail.com</strong> y haznos saber qué farmacias hacen falta.</p>

          </div>
        </div>
      </div>

      )}

    </div>
    
  );
}

export default conocenos;