import React, { useEffect, useState  }  from 'react';
import './App.css';
import Sidebar from './siderbar.js'; // Importa el componente Sidebar


function ArtTabla() {

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
  const tablaStyle = {
    margin: '0 auto',   // Esto centra la tabla horizontalmente
    backgroundColor: 'white', // Esto establece el fondo de la tabla en blanco
    border: '2px solid black', // Esto agrega un borde negro de 2px a la tabla
    borderRadius: '10px',
  };

  const itemStyle = {
    textAlign: 'center', // Centrar el contenido
    fontWeight: 'bold', // Hacer que el texto sea negritas
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
  const texto = {
    fontSize: anchoVentana > 530 ? '15px' : '7px',
  };
  const cuadroTextoEstilo = {
    background: 'white',
    borderRadius: '10px',
    padding: '5%',
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
        <p style={textoEstilo}>Tabla de medicamentos</p>
        <div style={texto}>
          <table border="1" style={tablaStyle} >
            <tr>
              <th colSpan="5">SULFONILÚREAS (SFU)</th>
            </tr>
          
            <tr>
              <td>
              <h7 style={itemStyle}> Tolbutamida </h7>
              <li >Orinase ®</li>
              <li >Genéricos varios</li>
              </td>
             
              <td>tabletas de 500 mg</td>
              <td style={{ whiteSpace: 'pre-line' }}>
                <p><strong>Inicial:</strong> 1000-2000 mg diarios</p>
                <p><strong>Rango:</strong> 250-3000 mg</p>
                <p>(pocas veces se necesitan &gt;2000 mg/día)</p>
                <p><strong>Dosis:</strong> Se toma dos o tres veces por día</p>
              </td>
              <td>
                <p><strong>EC:</strong> hipoglucemia, aumento de peso SFU preferida para los ancianos se debe tomar 2-3 veces por día</p>
              </td>

            </tr>

            <td>
              <h7 style={itemStyle}>Glimepirida</h7>
              <li >Amaryl ®</li >
              <li >Genéricos varios</li >
            </td>
            
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
             
              <td>Tabletas de 5 mg, 10 mg</td>
              <td>
                <p><strong>Inicial:</strong> 5 mg por día</p>
                <p><strong>Rango:</strong> 2,5-40 mg (20 mg para XL)</p>
                <p><strong>Dosis:</strong> Se toma una o dos veces (si &lt; 15 mg) por día</p>
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

            <tr>
              <th colSpan="5"><p>INHIBIDORES DE LA ALFA-GLUCOSIDASA: BLOQUEADORES DEL ALMIDÓN </p>
              <p>etrasan la digestión y absorción de los carbohidratos</p></th>
            </tr>

            <tr>
              <td>
                <h7 style={itemStyle}>Acarbosa</h7>
                <li>Precose®</li>
                <li>Genéricos varios</li>
              </td>
           
              <td>
                <p>tabletas de 25 mg, 50 mg, 100 mg </p>
              </td>

              <td>
                <p><strong>Inicial:</strong> 25 mg tres veces por día</p>
                <p><strong>Rango:</strong> 75-300 mg (máximo 150 mg si &lt; 60 kg)</p>
                <p><strong>Dosis:</strong> Se toma tres veces por día</p>
              </td>
              <td>
                <p><strong>EC:</strong> flatulencia ,Se toma con</p>
                <p>el primer bocado de comida</p>
                 
                <p>Comenzar con una dosis baja y lentamente,</p>
                <p>para minimizar la intolerancia GI.</p>
              </td>
            </tr>


            <tr>
              <th colSpan="5"><p>TIAZOLIDINEDIONAS (Glitazonas o TZD): </p>
              <p>disminuyen la resistencia a la insulina en el cuerpo (músculo y tejidos grasos)</p></th>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Pioglitazona (preferida sobre la rosiglitazona)</h7>
                <li>Actos®</li>
              </td>
              
              <td>
                <p>tabletas de 15 mg, 30 mg, 45 mg(blancas a blanquecinas) </p>
              </td>

              <td>
                <p><strong>Inicial:</strong> 15-30 mg diarios</p>
                <p><strong>Rango:</strong> 15-45 mg</p>
                <p><strong>Dosis:</strong> Se toma una vez por día</p>
              </td>
              <td>
                <p><strong>EC:</strong> Anemia, hinchazón (edema) por retención de fluidos, ganancia de peso,</p>
                <p>edema macular (en los ojos), pérdida ósea y fracturas en mujeres</p>
                <p>Puede provocar o empeorar la insuficiencia cardíaca</p>
                 
                <p>No se puede usar si se tienen problemas hepáticos o insuficiencia cardíaca severa</p>
                <p>Se requiere monitoreo hepático.</p>
              </td>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Rosiglitazona</h7>
                <li>Avandia®</li>
              </td>
          
              <td>
                <p>tabletas de 2 mg (rosas)</p>
                <p>tabletas 4 mg (naranjas)</p>
                <p>tabletas 8 mg(rojas amarronadas)</p>
              </td>

              <td>
                <p><strong>Inicial:</strong>4 mg diarios</p>
                <p><strong>Rango:</strong>  4-8 mg</p>
                <p><strong>Dosis:</strong> Se toma una o dos veces por día</p>
              </td>
              <td>
                <p><strong>EC:</strong> Anemia, hinchazón (edema) por retención de fluidos, ganancia de peso,</p>
                <p>edema macular (en los ojos), pérdida ósea y fracturas en mujeres</p>
                <p>Puede incrementar el riesgo de problemas cardíacos, tales como dolor de pecho</p>
                <p> relacionado con el corazón (angina) o ataque cardíaco (infarto de miocardio)</p>
                <p>Puede provocar o empeorar la insuficiencia cardíaca</p>
                <p>No se puede usar si se tienen problemas hepáticos o insuficiencia cardíaca severa</p>
                <p>Se requiere monitoreo hepático.</p>
              </td>
            </tr>


            <tr>
              <th colSpan="5"><p>ANÁLOGOS DEL GLP-1:</p>
              <p>incrementan la secreción de insulina, reducen la liberación de glucosa del hígado luego de las comidas, retrasan el vaciado de alimentos del estómago y promueven la saciedad</p></th>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Exenatida</h7>
                <li>Byetta®</li>
              </td>
            
              <td>
                <p>5 mcg por dosis y 10 mcg por dosis Inyectada debajo de la piel (subcutánea/SC)</p>
                <p>Disponible como dispositivo tipo lapicera/pluma</p>
              </td>

              <td>
                <p><strong>Inicial:</strong>5 mcg SC dos veces por día</p>
                <p><strong>Rango:</strong> Hasta 10 mcg SC dos veces por día</p>
                <p><strong>Dosis:</strong> Se toma dos veces por día</p>
              </td>
              <td>
                <p><strong>EC:</strong>náuseas, jaqueca, hipoglucemia (cuando se utiliza con secretagogos de la insulina)</p>
                <p>Rara vez se informaron casos de pancreatitis (inflamación del páncreas) súbita</p>
                <p>Puede provocar pérdida de peso moderada</p>
                <p>Se requiere monitoreo hepático.</p>
              </td>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Liraglutida</h7>
                <li>Victoza®</li>
              </td>
            
              <td>
                <p>lapicera/pluma de 3 mL que brinda dosis de 0,6 mg, 1,2 mg, o 1,8 mg</p>
                <p>Disponible como dispositivo tipo lapicera/pluma</p>
              </td>

              <td>
                <p><strong>Inicial:</strong> 0,6 mg SC una vez por día</p>
                <p><strong>Rango:</strong> hasta 1,8 mg SC una vez por día</p>
                <p><strong>Dosis:</strong> Se toma una vez por día</p>
              </td>
              <td>
                <p><strong>EC:</strong>náuseas, jaqueca, diarrea, hipoglucemia cuando se utiliza con secretagogos de la insulina)</p>
                <p>Rara vez se informaron casos de pancreatitis (inflamación del páncreas) súbita.</p>
                <p>No se puede usar si se tiene antecedentes de cáncer tiroideo medular</p>
              </td>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Albiglutida</h7>
                <li>Tanzeum ®</li>
              </td>
         
              <td>
                <p>30 mg o 50 mg por dosis</p>
                <p>Inyectada debajo de la piel (subcutánea/SC)</p>
                <p>Requiere reconstitución</p>
                <p>Disponible en dispositivos tipo lapicera/pluma de dosis única</p>
                <p>específica</p>
              </td>

              <td>
                <p><strong>Inicial:</strong> 30 mg una vez por semana</p>
                <p><strong>Rango:</strong> se puede incrementar a 50 mg una vez por semana</p>
                <p>se puede incrementar a 50 mg una vez por semana si la respuesta es inadecuada</p>
              </td>
              <td>
                <p><strong>EC:</strong> reacción en el sitio de la inyección, náuseas, diarrea, infección del tracto respiratorio superior</p>
                <p>Rara vez se informaron casos de pancreatitis (inflamación del páncreas);</p>
                <p>no se puede usar si se tienen antecedentes de cáncer tiroideo medular.</p>
              </td>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Dulaglutida</h7>
                <li>Trulicity ®</li>
              </td>
         
              <td>
                <p>0,75 mg o 1,5 mg por dosis</p>
                <p>se puede incrementar hasta 1,5 mg una vez por semana si hay una respuesta inadecuada</p>
              </td>

              <td>
                <p><strong>Inicial:</strong> 0,75 mg una vez por semana</p>
                <p><strong>Rango:</strong> se puede incrementar a 50 mg una vez por semana</p>
                <p>se puede incrementar a 50 mg una vez por semana si la respuesta es inadecuada</p>
              </td>
              <td>
                <p><strong>EC:</strong> náuseas, diarrea, vómitos, dolor abdominal</p>
                <p>No se puede usar si se tienen antecedentes familiares de carcinoma tiroideo medular</p>
                <p>(CTM) o si se tiene síndrome de neoplasia endócrina múltiple tipo</p>
                <p>2 (NEM2)</p>
                <p>Rara vez se informaron casos de pancreatitis (inflamación del páncreas);</p>
                <p>no se puede usar si se tienen antecedentes de cáncer tiroideo medular</p>

              </td>
            </tr>

            <tr>
              <th colSpan="5"><p>INHIBIDORES DE LA DPP-4: </p>
              <p>incrementan la secreción de insulina, reducen la liberación de glucosa desde el hígado luego de las comidas</p></th>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Alogliptina</h7>
                <li>Nesina ®</li>
              </td>
         
              <td>
                <p>tabletas de 6,25mg (rosa claro)</p>
                <p>12,5mg (amarillas)</p>
                <p>25 mg(rojas claras)</p>
              </td>

              <td>
                <p><strong>Inicial:</strong> 25 mg por boca diarios.</p>
                <p><strong>Dosis:</strong> Se toma una vez por día.</p>
              </td>
              <td>
                <p><strong>EC:</strong> nariz congestionada o con goteo, dolor de garganta, jaqueca,</p>
                <p>infección del tracto respiratorio superior, reacciones alérgicas severas raramente (inflamación de</p>
                <p>la lengua, garganta, rostro o cuerpo; sarpullido severo)</p>
                <p>Raras veces se informó pancreatitis</p>
                <p>No hay aumento de peso</p>
              </td>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Sitagliptina</h7>
                <li>Januvia ®</li>
              </td>
         
              <td>
                <p>tabletas de 25 mg (rosas)</p>
                <p>50 mg (beige claro)</p>
                <p>100 mg (beige)</p>
              </td>

              <td>
                <p><strong>Inicial:</strong> 100 mg diarios</p>
                <p><strong>Rango:</strong>  25-100 mg diarios</p>
                <p><strong>Dosis:</strong> Se toma una vez por día.</p>
              </td>
              <td>
                <p><strong>EC:</strong> Nariz con goteo, infección del tracto respiratorio superior, reacciones alérgicas severas raramente</p>
                <p>(inflamación de la lengua, garganta, rostro o cuerpo; sarpullido severo)</p>
                <p>No hay aumento de peso; si hay problemas renales se usan dosis más bajas</p>
              </td>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Saxagliptina</h7>
                <li>Onglyza ®</li>
              </td>
           
              <td>
                <p>tabletas de 2,5 mg (pálidas a amarillo claro)</p>
                <p>5 mg (rosas)</p>
              </td>

              <td>
                <p><strong>Inicial:</strong>2,5 o 5 mg diarios</p>
                <p><strong>Rango:</strong>  2,5-5 mg diarios</p>
                <p><strong>Dosis:</strong> Se toma una vez por día.</p>
              </td>
              <td>
                <p><strong>EC:</strong> infección del tracto respiratorio superior, infección del tracto urinario, jaqueca</p>
                <p>No hay aumento de peso; si hay problemas renales se usan dosis más bajas</p>
              </td>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Linagliptina</h7>
                <li>Tradjenta ®</li>
              </td>
           
              <td>
                <p>tableta de 5 mg (roja clara)</p>
              </td>

              <td>
                <p><strong>Inicial:</strong> 5 mg por día</p>
                <p><strong>Dosis:</strong> Se toma una vez por día.</p>
              </td>
              <td>
                <p><strong>EC:</strong> nariz con goteo, dolor de garganta, rara vez se informaron casos de pancreatitis, reacciones</p>
                <p>alérgicas severas raramente, no hay aumento de peso.</p>
              </td>
            </tr>

            <tr>
              <th colSpan="5"><p>Inhibidores del SGLT2:</p>
              <p>incrementan la excreción de glucosa en la orina</p></th>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Canagliflozina</h7>
                <li>Invokana ®</li>
              </td>
          
              <td>
                <p>tabletas de 100 mg (amarillas, con forma de cápsula)</p>
                <p>300 mg(blancas, con forma de cápsula)</p>
              </td>

              <td>
                <p><strong>Inicial:</strong>100 mg diarios</p>
                <p><strong>Rango:</strong> 100-300 mg diarios</p>
                <p><strong>Dosis:</strong> Se toma una vez por día.</p>
              </td>
              <td>
                <p><strong>EC:</strong> incremento o urgencia para orinar, presión sanguínea más baja, mareos, infecciones genitales por levaduras,</p>
                <p>infecciones del tracto urinario incremento del potasio en sangre;</p>
                <p>rara vez, reacciones alérgicas severas (inflamación de la lengua, garganta, rostro o cuerpo;sarpullido severo) </p>
                <p>No se puede usar si se tienen problemas renales</p>
              </td>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Dapagliflozina</h7>
                <li>Farxiga ®</li>
              </td>
           
              <td>
                <p>tabletas de 5mg (amarillas, redondas)</p>
                <p>10mg (amarillas,con forma de diamante)</p>
              </td>

              <td>
                <p><strong>Inicial:</strong> 5 mg una vez por día</p>
                <p><strong>Rango:</strong> hasta 10 mg diarios</p>
              </td>
              <td>
                <p><strong>EC:</strong> incremento o urgencia para orinar, presión sanguínea más baja,</p>
                <p>mareos, infecciones genitales por levaduras, infecciones del tracto urinario</p>
                <p>incremento del potasio en sangre; rara vez, reacciones alérgicas severas </p>
                <p>(inflamación de la lengua, garganta, rostro o cuerpo; sarpullido severo)</p>
                <p>No se puede usar si se tienen problemas renales</p>
              </td>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Empagliflozina</h7>
                <li>Jardiance ®</li>
              </td>
             
              <td>
                <p>tabletas de 10 mg (beige pálido, redondas)</p>
                <p>25 mg (beige pálido,alargadas)</p>
              </td>

              <td>
                <p><strong>Inicial:</strong> 10 mg una vez al día</p>
                <p><strong>Rango:</strong> hasta 25 mg diarios</p>
              </td>
              <td>
                <p><strong>EC:</strong> incremento o urgencia para orinar, presión sanguínea más baja,</p>
                <p>mareos, infecciones genitales por levaduras, infecciones del tracto urinario</p>
                <p>incremento del potasio en sangre; rara vez, reacciones alérgicas severas</p>
                <p>(inflamación de la lengua, garganta, rostro o cuerpo; sarpullido severo)</p>
                <p>No se puede usar si se tienen problemas renales</p>
              </td>
            </tr>


            
            <tr>
              <th colSpan="5"><p>PÍLDORAS ORALES COMBINADAS</p></th>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Alogliptina/Metformina</h7>
                <li>Kazano ®</li>
              </td>
            
              <td>
                <p>tabletas alargadas de 12,5 mg/500 mg (amarillas pálidas)</p>
                <p>2,5 mg/1000 mg (amarillas pálidas)</p>
              </td>

              <td>
                <p><strong>Inicial:</strong> 12,5 mg/500 mg una o dos veces por día</p>
                <p><strong>Rango:</strong> hasta 25/2000. Se toma dos veces por día con las comidas.</p>
              </td>
              <td>
                <p>Igual que los anteriores para la alogliptina y metformina</p>
              </td>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Alogliptina/Pioglitazona</h7>
                <li>Oseni ®</li>
              </td>
              
              <td>
                <p>tabletas redondas de 12,5 mg/15 mg (amarillo pálido)</p>
                <p> 12,5 mg/30 mg (durazno pálido)</p>
                <p> 12,5 mg/45 mg (rojo pálido)</p>
                <p>25 mg/15 mg (amarillo)</p>
                <p>25 mg/30 mg(durazno)</p>
                <p>25 mg/45 mg (rojo)</p>

              </td>

              <td>
                <p><strong>Inicial:</strong> 12,5 mg/15 mg una vez por día</p>
                <p><strong>Rango:</strong> hasta 25/45 mg. Se toma una vez por día con o sin alimentos.</p>
              </td>
              <td>
                <p>Igual que los anteriores para la alogliptina y pioglitazona</p>
              </td>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Empagliflozina/Linagliptina</h7>
                <li>Glyxambi ®</li>
              </td>
              
              <td>
                <p>tabletas triangulares de 10 mg/5 mg (amarillo pálido)</p>
                <p>25 mg/5 mg(rosa pálido)</p>
              </td>

              <td>
                <p><strong>Inicial:</strong> 10 mg/5 mg una vez por día</p>
                <p><strong>Rango:</strong> hasta 25 mg/5 mg una vez por día</p>
              </td>
              <td>
                <p>Igual que los anteriores para la empagliflozina y linagliptina</p>
              </td>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Empagliflozina/Metformina</h7>
                <li>Synjardy ®</li>
              </td>
            
              <td>
                <p>tabletas ovales, recubiertas por una película, de 5 mg/500 mg (amarillo anaranjado)</p>
                <p>5 mg/1000 mg (amarillo amarronado)</p>
                <p>12,5 mg/500 mg (púrpura amarronado pálido)</p>
                <p>12,5 mg/1000 mg(púrpura amarronado oscuro)</p>
              </td>

              <td>
                <p><strong>Inicial:</strong> 5 mg/500 mg o 5 mg/1000 mg</p>
                <p><strong>Rango:</strong> hasta 25 mg/2000 mg</p>
                <p><strong>Dosis:</strong> Se toma dividida en 2 dosis</p>
              </td>
              <td>
                <p>Igual que los anteriores para la empagliflozina y metformina</p>
              </td>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Canagliflozina/Metformina</h7>
                <li>Invokamet ®</li>
              </td>

              <td>
                <p>tabletas con forma de cápsula, recubiertas por una película, de 50 mg/500 mg (blancas)</p>
                <p>50 mg/1000 mg (beige)</p>
                <p>150 mg/500 mg (amarillas)</p>
                <p>150 mg/1000 mg (púrpura)</p>
              </td>

              <td>
                <p><strong>Inicial:</strong> 50 mg/500 mg o 50 mg/1000 mg</p>
                <p><strong>Rango:</strong> hasta 300 mg/2000 mg</p>
                <p><strong>Dosis:</strong> Se toma dividida en 2 dosis</p>
              </td>
              <td>
                <p>Igual que los anteriores para la canagliflozina y metformina</p>
              </td>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Dapagliflozina/Metformina XR</h7>
                <li>Xigduo XR ®</li>
              </td>
     
              <td>
                <p>tableta ovalada, recubierta por una película, de 5 mg/500 mg (naranjas)</p>
                <p>5 mg/1000 mg (rosas a rosa oscuro)</p>
                <p>10 mg/500 mg (rosa)</p>
                <p>10 mg/1000 mg (amarillo a amarillo oscuro)</p>
              </td>

              <td>
                <p><strong>Inicial:</strong> se basa en el régimen actual del paciente</p>
                <p><strong>Rango:</strong>  hasta 10 mg/2000 mg diarios</p>
              </td>
              <td>
                <p>Igual que los anteriores para la dapagliflozina y metformina</p>
              </td>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Gliburida/Metformina</h7>
                <li>Glucovance ®</li>
                <li>Genéricos varios</li>
              </td>

              <td>
                <p>tabletas con forma de cápsula de 1,25 mg/250 mg (amarillo pálido)</p>
                <p>2,5 mg/500 mg (naranja pálido)</p>
                <p>5 mg/500 mg (amarillas)</p>
              </td>

              <td>
                <p><strong>Inicial:</strong> 1,25 mg/250 mg una o dos veces por día</p>
                <p><strong>Rango:</strong> hasta 20/2000 mg</p>
                <p><strong>Dosis:</strong> Se toma una o dos veces por día</p>
              </td>
              <td>
                <p>Igual que los anteriores para la gliburida y metformina</p>
              </td>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Glipizida/Metformina</h7>
                <li>Metaglip ®</li>
                <li>Genéricos varios</li>
              </td>
    
              <td>
                <p>	tabletas ovaladas de 2,5 mg/250 mg (rosas)</p>
                <p> 2,5 mg/500 mg (blancas)</p>
                <p> 5 mg/500 mg (rosas)</p>
              </td>

              <td>
                <p><strong>Inicial:</strong> 2,5 mg/250 mg diarios o 2,5mg/500 mg dos veces por día</p>
                <p><strong>Rango:</strong> hasta 20/2000 mg</p>
                <p><strong>Dosis:</strong> Se toma una o dos veces por día</p>
              </td>
              <td>
                <p>Igual que los anteriores para la glipizida y metformina</p>
              </td>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Linagliptina/Metformina</h7>
                <li>Jentadueto  ®</li>
              </td>
     
              <td>
                <p>tabletas ovaladas de 2,5 mg/500 mg (amarillo claro)</p>
                <p> 2,5 mg/850 mg (naranja claro, ovaladas)</p>
                <p> 2,5 mg/1000 mg (rosa claro)</p>
              </td>

              <td>
                <p><strong>Inicial:</strong> 2,5 mg/500 mg dos veces por día con alimentos</p>
                <p><strong>Rango:</strong> hasta 2,5 mg/1000 mg dos veces por día con alimentos.</p>
              </td>
              <td>
                <p>Igual que los anteriores para la linagliptina y metformina</p>
              </td>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Rosiglitazona/Metformina</h7>
                <li>Avandamet   ®</li>
                <li>Genéricos varios</li>
              </td>
      
              <td>
                <p>tabletas ovaladas de 2 mg/500 mg (rosa pálido)</p>
                <p> 2 mg/1000 mg (amarillas)</p>
                <p> 4 mg/500 mg (naranjas)</p>
                <p> 4 mg/1000 mg (rosas)</p>
              </td>

              <td>
                <p><strong>Inicial:</strong> 2 mg/5000 mg una o dos veces por día Rango: hasta 8 mg/2000 mg</p>
                <p><strong>Rango:</strong> hasta 8 mg/2000 mg</p>
                <p><strong>Dosis:</strong> Se toma dos veces por día</p>
              </td>
              <td>
                <p>Igual que los anteriores para la metformina y rosiglitazona</p>
              </td>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Pioglitazona/Metformina</h7>
                <li>ActoPlus Met ®</li>
                <li>Genéricos varios</li>
              </td>
          
              <td>
                <p>tabletas de 15 mg/500 mg, 15 mg/850 mg (blancas a blanquecinas)</p>
              </td>

              <td>
                <p><strong>Inicial:</strong> 15 mg/500 mg o 15 mg/850 mg una o dos veces por día</p>
                <p><strong>Rango:</strong> hasta 45 mg/2550 mg</p>
                <p><strong>Dosis:</strong> Dosificadas una o dos veces por día</p>
              </td>
              <td>
                <p>Igual que los anteriores para la metformina y pioglitazona</p>
              </td>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Pioglitazona/Glimepirida</h7>
                <li>Duetact ®</li>
              </td>
        
              <td>
                <p>tabletas de 30 mg/2 mg, 30 mg/4 mg (blancas a blanquecinas)</p>
              </td>

              <td>
                <p><strong>Inicial:</strong> 30 mg/2 mg o 30 mg/4 mg una vez por día</p>
                <p><strong>Rango:</strong> una tableta máximo por día</p>
                <p><strong>Dosis:</strong> Se toma una vez por día</p>
              </td>
              <td>
                <p>Igual que los anteriores para la pioglitazona y glimepirida</p>
              </td>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Rosiglitazona/Glimepirida</h7>
                <li>Avandryl ®</li>
                <li>Genéricos varios</li>
              </td>
        
              <td>
                <p>tabletas triangulares redondeadas de 4 mg/1 mg (amarillas)</p>
                <p>4 mg/2 mg (naranjas)</p>
                <p>4 mg/4 mg (rosas)</p>
              </td>

              <td>
                <p><strong>Inicial:</strong> 4 mg/1 mg o 4 mg/2 mg una vez por día</p>
                <p><strong>Rango:</strong> hasta 8 mg/4 mg</p>
                <p><strong>Dosis:</strong> Se toma una vez por día</p>
              </td>
              <td>
                <p>Igual que los anteriores para la rosiglitazona y glimepirida</p>
              </td>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Sitagliptina/Metformina</h7>
                <li>Janumet ®</li>
              </td>
     
              <td>
                <p>tabletas alargadas de 50 mg/500 mg (rosa claro)</p>
                <p>50 mg/1000mg(rojas)</p>
              </td>

              <td>
                <p><strong>Inicial:</strong> 50 mg/500 mg o 50 mg/1000 mg dos veces por día</p>
                <p><strong>Rango:</strong> hasta 100 mg/2000 mg</p>
                <p><strong>Dosis:</strong> Se toma una vez por día</p>
              </td>
              <td>
                <p>Igual que los anteriores / siguientes para la sitagliptina y metformina</p>
              </td>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Sitagliptina/Metformina</h7>
                <li>Janumet XR  ®</li>
              </td>
    
              <td>
                <p>tabletas ovaladas de 50 mg/500 mg (celestes)</p>
                <p>50 mg/1000 mg (verde claro)</p>
                <p>100 mg/ 1000 mg (azules)</p>
              </td>

              <td>
                <p><strong>Inicial:</strong> 100 mg/1000 mg diarios</p>
                <p><strong>Rango:</strong> hasta 100 mg/2000 mg por día</p>
                <p><strong>Dosis:</strong> Se toma una vez por día</p>
              </td>
              <td>
                <p>Igual que los anteriores / siguientes para la sitagliptina y metformina</p>
              </td>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Repaglinida/Metformina</h7>
                <li>PrandiMet ®</li>
              </td>
   
              <td>
                <p>tabletas de 1 mg/500 mg (amarillas)</p>
                <p>2 mg/500 mg (rosas)</p>  
              </td>

              <td>
                <p><strong>Inicial:</strong> 1 mg/500 mg dos veces por día</p>
                <p><strong>Rango:</strong> 10 mg/2500 mg, máximo por dosis 4 mg/1000 mg</p>
                <p><strong>Dosis:</strong> Se toma dos o tres veces por día</p>
              </td>
              <td>
                <p>Igual que los anteriores para la repaglinida y metformina</p>
              </td>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Pioglitazona/Metformina XR</h7>
                <li>ActoPlus Met XR ®</li>
              </td>
        
              <td>
                <p>tabletas redondas de 15 mg/1000 mg, 30 mg/1000 mg (blancas a blanquecinas)</p>
              </td>

              <td>
                <p><strong>Inicial:</strong> 15 mg/1000 mg o 30 mg/1000 mg una vez por día</p>
                <p><strong>Rango:</strong> hasta 45 mg/2000 mg</p>
                <p><strong>Dosis:</strong> Se toma una vez por día</p>
              </td>
              <td>
                <p>Igual que los anteriores para la metformina y pioglizatona</p>
              </td>
            </tr>
            <tr>
              <td>
                <h7 style={itemStyle}>Saxagliptina/Metformina XR</h7>
                <li>Kombiglyze XR ®</li>
              </td>
      
              <td>
                <p>tabletas con forma de cápsula de 5 mg/500 mg (marrón claro a marrón)</p>
                <p> 5 mg/1000 mg (rosas)</p>
                <p> 2,5 mg/1000 mg (amarillo pálido a amarillo claro)</p>
              </td>

              <td>
                <p><strong>Inicial:</strong> 5 mg/500 mg o 5 mg/1000 mg una vez por día</p>
                <p><strong>Rango:</strong> hasta 5 mg / 2000 mg</p>
                <p><strong>Dosis:</strong> Se toma una vez por día</p>
              </td>
              <td>
                <p>Igual que los anteriores para la metformina y saxagliptina</p>
              </td>
            </tr>


          </table>
          </div>
          </div>
    </div>
    </div>
              {anchoVentana < 990 && (
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '50%', textAlign: 'center' }}>

                        <a href="./TiposDD.js" style={flechaEstilo}>
                        <img src="./izquierda.png" alt="Flecha izquierda" style={imagenEstilo} />
                        </a>
                        <a style={texto2}>Tipos</a>
                    </div>

                    <div style={{ width: '50%', textAlign: 'center' }}>
                       
                    </div>
                </div>
            )} 
  </div>
  );
}

export default ArtTabla;