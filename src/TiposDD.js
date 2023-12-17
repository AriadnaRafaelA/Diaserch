import React, { useEffect, useState }  from 'react';
import './App.css';
import Sidebar from './siderbar.js'; // Importa el componente Sidebar


function TiposDD() {

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
    
      const imagenEstilo2 = {
        marginRight: '1%', // Espacio entre la imagen y el texto
        marginLeft: 'auto', // Centrar horizontalmente
        marginRight: 'auto', // Centrar horizontalmente
        marginTop: '1%',
        width: '40%',
        height: '40%',
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
    
      const texto3 = {
        fontSize: anchoVentana > 530 ? '30px' : '15px',
        
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
                <Sidebar /> {/* Agrega el componente Sidebar aquí */}
            </div>
            <div style={contenidoEstilo}>
            <div className="contenido-expandir">
                <div style={cuadroTextoEstilo}>
                    <p style={textoEstilo}>Tipos de diabetes</p>
                    
                    <p style={texto3}> Diabetes tipo 1  </p>
                    <div style={texto}>
                        <p>Anteriormente conocida como insulinodependiente, juvenil o de inicio en la niñez se caracteriza por una producción deficiente de insulina y requiere la administración diaria de insulina. 
                        En 2017 había 9 millones de personas con diabetes tipo 1; la mayoría de ellos vive en países de ingresos altos. 
                        No se conocen ni su causa ni los medios para prevenirlo.
                        </p>
                        Los síntomas incluyen excreción excesiva de orina (poliuria), sed (polidipsia), hambre constante, pérdida de peso, cambios en la visión y fatiga. 
                        Estos síntomas pueden ocurrir repentinamente.
                    </div>
                    <p style={textoEstilo}><img src="\D1.png" alt="Diabetes tipo 1"  style={imagenEstilo2} /></p>

                    <p style={texto3}>Diabetes tipo 2</p>
                    <div style={texto}>
                        <p>La diabetes tipo 2 o también llamada diabetes mellitus tipo 2 (antes llamada no insulinodependiente o de inicio en la edad adulta) es el resultado del uso ineficaz de la insulina por parte del cuerpo. 
                            Más del 95% de las personas con diabetes tienen diabetes tipo 2. 
                            Este tipo de diabetes es en gran parte el resultado del exceso de peso corporal y la inactividad física.
                        </p>
                        <p> Los síntomas pueden ser similares a los de la diabetes tipo 1, pero a menudo son menos marcados. 
                            Como resultado, la enfermedad puede diagnosticarse varios años después del inicio, después de que ya hayan surgido complicaciones.
                        </p>
                        <p> Hasta hace poco, este tipo de diabetes solo se observaba en adultos, pero ahora también se presenta cada vez con mayor frecuencia en niños.
                        </p>
                         <p style={textoEstilo}><img src="\D2.png" alt="Diabetes tipo 2" style={imagenEstilo2}/></p>
                    </div>
                   

                    <p style={texto3}>Diabetes gestacional</p>
                    <div style={texto}>
                        <p> La diabetes gestacional es una hiperglucemia con valores de glucosa en sangre por encima de lo normal,
                            pero por debajo de los diagnósticos de diabetes. La diabetes gestacional ocurre durante el embarazo.
                        </p>
                        <p> Las mujeres con diabetes gestacional tienen un mayor riesgo de complicaciones durante el embarazo y el parto. 
                            Estas mujeres y posiblemente sus hijos también corren un mayor riesgo de padecer diabetes tipo 2 en el futuro.
                        </p>
                        <p> La diabetes gestacional se diagnostica mediante pruebas de detección prenatales, en lugar de a través de los síntomas informados.
                    
                        <div class="contenedor">
                            <p style={textoEstilo}><img src="/D3.jpg" alt="Descripción de la imagen" class="imagen"  style={imagenEstilo2} /></p>
                        </div>
                        </p>
                    </div>
                </div>
            </div>
            </div>

            {anchoVentana < 990 && (
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '50%', textAlign: 'center' }}>

                        <a href="./Diagnostico.js" style={flechaEstilo}>
                        <img src="./izquierda.png" alt="Flecha izquierda" style={imagenEstilo} />
                        </a>
                        <a style={texto2}>Diagnostico</a>
                    </div>

                    <div style={{ width: '50%', textAlign: 'center' }}>
                        <a href="./ArtTabla.js" style={flechaEstilo}>
                        <img src="./derecha.png" alt="Flecha derecha" style={imagenEstilo} />
                        </a>
                        <a style={texto2}>Medicamentos</a>
                    </div>
                </div>
            )} 

        </div>
    );
}

export default TiposDD;
