import React from 'react';
import './App.css';
import Sidebar from './siderbar.js'; // Importa el componente Sidebar


function ArtTabla() {

  const textoEstilo = {
    textAlign: 'center',
    fontSize: '48px',  // Tamaño de fuente más grande
    fontWeight: 'bold',
    color: 'white',   // Color blanco
    margin: '10px 0',
  };
  const contenidoEstilo = {
    marginLeft: '300px',
    marginRight: '20px', 
    padding: '20px',
    textAlign: 'justify',
  };
  const tablaStyle = {
    margin: '0 auto',   // Esto centra la tabla horizontalmente
    backgroundColor: 'white', // Esto establece el fondo de la tabla en blanco
  };

  const itemStyle = {
    textAlign: 'center', // Centrar el contenido
    fontWeight: 'bold', // Hacer que el texto sea negritas
  };
  
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar /> {/* Agrega el componente Sidebar aquí */}
      
      <div style={contenidoEstilo}>
        <p style={textoEstilo}>Tabla de medicamentos</p>
          <table border="1" style={tablaStyle}>
            <tr>
              <th colSpan="5">SULFONILÚREAS (SFU)</th>
            </tr>
          
            <tr>
              <td>
              <h7 style={itemStyle}> Tolbutamida </h7>
              <li >Orinase ®</li>
              <li >Genéricos varios</li>
              </td>
              <td>1957</td>
              <td>tabletas de 500 mg</td>
              <td style={{ whiteSpace: 'pre-line' }}>
                <p><strong>Inicial:</strong> 1000-2000 mg diarios</p>
                <p><strong>Rango:</strong> 250-3000 mg</p>
                <p>(pocas veces se necesitan &gt;2000 mg/día)</p>
                <p><strong>Dosis:</strong> Se toma dos o tres veces por día</p>
              </td>
              <td>
                <p><strong>EC:</strong> hipoglucemia, aumento de peso</p>
                <p>SFU preferida para los ancianos</p>
                <p>Se debe tomar 2-3 veces por día</p>
              </td>

            </tr>

            <td>
              <h7 style={itemStyle}>Glimepirida</h7>
              <li >Amaryl ®</li >
              <li >Genéricos varios</li >
            </td>
            <td>11/95 </td>
            <td>tabletas de 1 mg, 2 mg, 4 mg</td>
            <td style={{ whiteSpace: 'pre-line' }}>
              <p><strong>Inicial:</strong> 1-2 mg diarios</p>
              <p><strong>Rango:</strong> 1-8 mg</p>
              <p>Dosis: Se toma una vez por día</p>
            </td>
            <td>
              <p><strong>EC:</strong> hipoglucemia, aumento de peso</p>
              <p>Tiene que tomarse sólo una vez por día</p>
            </td>

            <tr>
              <td>
                <h7 style={itemStyle}>Glimepirida</h7>
                <li >Amaryl ®</li >
                <li >Genéricos varios</li >
              </td>
              <td>11/95</td>
              <td>Tabletas de 1 mg, 2 mg, 4 mg</td>
              <td style={{ whiteSpace: 'pre-line' }}>
                <p><strong>Inicial:</strong> 1-2 mg diarios</p>
                <p><strong>Rango:</strong> 1-8 mg</p>
                <p><strong>Dosis:</strong> Se toma una vez por día</p>
              </td>
              <td>
                <p><strong>EC:</strong> hipoglucemia, aumento de peso</p>
                <p>Tiene que tomarse sólo una vez por día</p>
              </td>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Glipizida</h7>
                <li >Glucotrol ®</li >
                <li >Glucotrol XL ®</li >
                <li >Genéricos varios</li >
              </td>
              <td>5/84</td>
              <td>Tabletas de 5 mg, 10 mg</td>
              <td>
                <p><strong>Inicial:</strong> 5 mg por día</p>
                <p><strong>Rango:</strong> 2,5-40 mg (20 mg para XL)</p>
                <p><strong>Dosis:</strong> Se toma una o dos veces (si >15 mg) por día</p>
              </td>
              <td>
                <p><strong>EC:</strong> hipoglucemia, aumento de peso</p>
                <p>SFU preferida para los ancianos</p>
                <p>LP = liberación prolongada/se toma una vez por día</p>
              </td>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Gliburida</h7>
                <li >Micronase ®</li >
                <li >DiaBeta ®</li >
                <li >Genéricos varios</li >
              </td>
              <td>5/84</td>
              <td>Tabletas de 1,25 mg, 2,5 mg, 5 mg</td>
              <td>
                <p><strong>Inicial:</strong> 2,5-5 mg diarios</p>
                <p><strong>Rango:</strong> 1,25-20 mg</p>
                <p><strong>Dosis:</strong> Se toma una o dos veces por día</p>
              </td>
              <td>
                <p><strong>EC:</strong> hipoglucemia, aumento de peso</p>
              </td>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Gliburida, micronizada</h7>
                <li >Glynase PresTab ®</li >
                <li >Genéricos varios</li >
              </td>
              <td>3/92</td>
              <td><p>Tabletas micronizadas de 1,5 mg, 3 mg,</p>
              <p>4,5 mg, 6 mg</p></td>
              <td>
                <p><strong>Inicial:</strong> 1,5-3 mg diarios</p>
                <p><strong>Rango:</strong> 0,75-12 mg</p>
                <p><strong>Dosis:</strong> Se toma uno o dos veces (si &lt;6 mg) por día</p>
              </td>
              <td>
                <p><strong>EC:</strong> hipoglucemia, aumento de peso</p>
              </td>
            </tr>

            <tr>
              <th colSpan="5">GLINIDAS</th>
            </tr>

            <tr>
              <td>
              <h7 style={itemStyle}>Repaglinida</h7>
              <li >Prandin ®</li >
              </td>
              <td>12/97</td>
              <td><p>Tabletas de 0,5 mg (blancas),</p> 
              <p>1 mg (amarillas), 2 mg (rojas)</p></td>
              <td>
                <p><strong>Inicial:</strong> 1-2 mg diarios (0,5 mg si A1C &lt; 8%)</p>
                <p><strong>Rango:</strong> 0,5-16 mg</p>
                <p>La dosis máxima por comida es 4 mg</p>
                <p><strong>Dosis:</strong> se toma dos, tres o cuatro veces por día</p>
              </td>
              <td>
                <p><strong>EC:</strong> hipoglucemia</p>
                <p>Seguro para los ancianos</p>
                <p>La duración del efecto es solo 4 horas</p>
                <p>Se toma dentro de los 15-30 minutos de la comida</p>
              </td>
            </tr>
            <tr>
              <td>
              <h7 style={itemStyle}>Nateglinida</h7>
              <li >Starlix ®</li >
              </td>
              <td>12/00</td>
              <td>Tabletas de 60 mg (rosas), 120 mg (amarillas)</td>
              <td>
                <p><strong>Inicial:</strong> 120 mg tres veces por día (si la A1C está</p>
                <p>cerca del objetivo, use 60 mg)</p>
                <p><strong>Rango:</strong> 180-360 mg</p>
                <p><strong>Dosis:</strong> se toma tres veces por día</p>
              </td>
              <td>
                <p><strong>EC:</strong> hipoglucemia</p>
                <p>Seguro para los ancianos</p>
                <p>La duración del efecto es solo 2 horas</p>
                <p>Se toma dentro de los 30 minutos de la comida</p>
              </td>
            </tr>

            <tr>
              <th colSpan="5"><p>EUGLUCÉMICOS: Son medicamentos que traen a la glucosa en sangre de regreso al rango </p>
              <p>normal. Estos medicamentos no deberían provocar hipoglucemia.3</p></th>
            </tr>

            <tr>
              <th colSpan="5"><p>BIGUANIDAS: disminuyen la liberación de glucosa del hígado; disminuyen la absorción intestinal de </p>
              <p>la glucosa; mejoran la sensibilidad a la insulina (incrementan la captación y utilización de la glucosa)</p></th>
            </tr>

            <tr>
              <td>
                <h7 style={itemStyle}>Metformina</h7>
                <li>Glucophage ®</li>
                <li>Liberación prolongada (LP):</li>
                <li>Glucophage XR ®</li>
                <li>Fortamet ®</li>
                <li>Glumetza</li>
                <li>Riomet ® (líquido, 500 mg/5ml)</li>
              </td>
              <td>12/94</td>
              <td>
                <p><strong>Glucophage:</strong> tabletas de 500 mg, </p>
                <p>850 mg, 1000 mg</p>
                <p><strong>Glucophage XR:</strong> tabletas de 500 mg, </p>
                <p>750 mg</p>


                <p><strong>Fortamet:</strong> tabletas de 500 mg, </p>
                <p>1000 mg</p>


                <p><strong>Glumetza:</strong> tabletas de 500 mg, </p>
                <p>1000 mg</p>


                  <p><strong>Metformina genérica de LP:</strong> tabletas </p>
                  <p>de 500 mg, 750 mg</p>
              </td>

              <td>
                <p><strong>Inicial:</strong> 500 mg dos veces por día u 850 mg una vez por día</p>
                <p><strong>Rango:</strong> 500-2550 mg</p>
                <p><strong>Dosis:</strong> Se toma dos o tres veces por día</p>
                <p><strong>LP: Inicial:</strong> 500 mg una vez por día</p>
                <p><strong>Rango:</strong> 500-2000 mg</p>
                <p>Dosificada una vez por día</p>
              </td>
              <td>
                <p><strong>EC:</strong> Síntomas gastrointestinales (diarrea, náuseas,</p>
                <p>estómago revuelto), sabor metálico (3%), acidosis láctica (0,03 casos</p>
                  <p>/1000 personas)4,5</p>
                <p>Se toma con las comidas (la de LP con la comida de la noche)</p>
                <p>No se puede usar si se tienen problemas hepáticos o renales, si se </p>
                <p>toma un medicamento para tratar la insuficiencia cardíaca, o si se </p>
                <p>toma alcohol en exceso</p>
              </td>
            </tr>

          </table>
    </div>
  </div>
  );
}

export default ArtTabla;