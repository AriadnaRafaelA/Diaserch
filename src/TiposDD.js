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
        fontSize: '48px',
        fontWeight: 'bold',
        color: 'Black',
        margin: '10px 0',
      };

    const textoEstilo2 = {
        //textAlign: 'center',
        fontSize: '30px',
        //fontWeight: 'bold',
        color: 'Black',
        margin: '10px 0',
        lineHeight: '3', 
    };

    const contenidoEstilo = {
        marginLeft: anchoVentana <= 768 ? '20px' : '300px', // Ancho del Sidebar
        marginRight: '20px', 
        padding: '20px',
        fontSize: '20px',
        textAlign: 'justify',
    };

    const cuadroTextoEstilo = {
        background: 'white', // Fondo blanco
        borderRadius: '10px', // Bordes redondos
        padding: '20px',
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
                    
                    <p style={textoEstilo2}> Diabetes tipo 1  </p>
                    <p>Anteriormente conocida como insulinodependiente, juvenil o de inicio en la niñez se caracteriza por una producción deficiente de insulina y requiere la administración diaria de insulina. 
                    En 2017 había 9 millones de personas con diabetes tipo 1; la mayoría de ellos vive en países de ingresos altos. 
                    No se conocen ni su causa ni los medios para prevenirlo.
                    </p>
                    Los síntomas incluyen excreción excesiva de orina (poliuria), sed (polidipsia), hambre constante, pérdida de peso, cambios en la visión y fatiga. 
                    Estos síntomas pueden ocurrir repentinamente.
                   
                    <p style={textoEstilo}><img src="\D1.png" alt="Diabetes tipo 1" /></p>

                    <p style={textoEstilo2}>Diabetes tipo 2</p>
                    <p>La diabetes tipo 2 o también llamada diabetes mellitus tipo 2 (antes llamada no insulinodependiente o de inicio en la edad adulta) es el resultado del uso ineficaz de la insulina por parte del cuerpo. 
                        Más del 95% de las personas con diabetes tienen diabetes tipo 2. 
                        Este tipo de diabetes es en gran parte el resultado del exceso de peso corporal y la inactividad física.
                    </p>
                    <p> Los síntomas pueden ser similares a los de la diabetes tipo 1, pero a menudo son menos marcados. 
                        Como resultado, la enfermedad puede diagnosticarse varios años después del inicio, después de que ya hayan surgido complicaciones.
                    </p>
                    <p> Hasta hace poco, este tipo de diabetes solo se observaba en adultos, pero ahora también se presenta cada vez con mayor frecuencia en niños [12].
                    </p>
                    <p style={textoEstilo}><img src="\D2.png" alt="Diabetes tipo 2" /></p>

                    <p style={textoEstilo2}>Diabetes gestacional</p>
                    <p> La diabetes gestacional es una hiperglucemia con valores de glucosa en sangre por encima de lo normal,
                         pero por debajo de los diagnósticos de diabetes. La diabetes gestacional ocurre durante el embarazo.
                    </p>
                    <p> Las mujeres con diabetes gestacional tienen un mayor riesgo de complicaciones durante el embarazo y el parto. 
                        Estas mujeres y posiblemente sus hijos también corren un mayor riesgo de padecer diabetes tipo 2 en el futuro.
                    </p>
                    <p> La diabetes gestacional se diagnostica mediante pruebas de detección prenatales, en lugar de a través de los síntomas informados [12].
                    <div class="contenedor">
                        <img src="/D3.jpg" alt="Descripción de la imagen" class="imagen" />
                    </div>
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default TiposDD;
