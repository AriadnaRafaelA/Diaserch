import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./siderbar.js"; // Importa el componente Sidebar

function Diagnostico() {
  const [anchoVentana, setAnchoVentana] = useState(window.innerWidth);
  useEffect(() => {
    const actualizarAnchoVentana = () => {
      setAnchoVentana(window.innerWidth);
    };
    window.addEventListener("resize", actualizarAnchoVentana);
    return () => {
      window.removeEventListener("resize", actualizarAnchoVentana);
    };
  }, []);

  const textoEstilo = {
    textAlign: "center",
    fontSize: anchoVentana > 530 ? "40px" : "20px",
    fontWeight: "bold",
    color: "black",
    margin: "10px 0",
  };

  const contenidoEstilo = {
    marginLeft: anchoVentana <= 768 ? "1px" : "300px", // Ancho del Sidebar
    marginRight: "1px",
    padding: "2%",
    textAlign: "justify",
    fontSize: "20px",
    color: "black",
  };

  const cuadroTextoEstilo = {
    background: "white",
    borderRadius: "10px",
    padding: "5%",
  };

  const cuadroGrisEstilo = {
    background: "#f0f0f0", // Color gris claro
    borderRadius: "1%",
    padding: "2%",
    //marginLeft: '450px',
  };
  const cuadroRojoEstilo = {
    background: "red", // Color gris claro
    borderRadius: "10px",
    padding: "2%",
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    margin: "10px 0",
  };

  const texto = {
    fontSize: anchoVentana > 530 ? "20px" : "12px",
  };

  const texto2 = {
    fontSize: anchoVentana > 530 ? "20px" : "12px",
    fontWeight: "bold", // Establece la negrita
    color: "white", // Establece el color blanco
  };
  const texto3 = {
    fontSize: anchoVentana > 530 ? "30px" : "15px",
    fontWeight: "bold", // Establece la negrita
    textAlign: "center",
  };

  const flechaEstilo = {
    display: "block",
    textAlign: "center",
    marginTop: "20px",
  };
  const imagenEstilo = {
    width: "20%",
    height: "20%",
    // Estilos adicionales según sea necesario
  };
  const imagenEstilo2 = {
    float: "left", // Coloca la imagen a la izquierda del texto
    marginRight: "1%", // Espacio entre la imagen y el texto
    width: "50%", // Ajusta el tamaño de la imagen según tus necesidades
    marginLeft: "1%",
    marginTop: "1%",
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
            <p style={textoEstilo}>Diagnóstico</p>
            <div style={texto}>
              <p>
                El diagnóstico de la diabetes se hace mediante una analítica de
                sangre para conocer cuáles son los valores de azúcar (glucosa)
                en la sangre. Los valores normales oscilan entre 70 y 100 mg/dl.
              </p>
              <p>
                Si el resultado de la analítica se corresponde a una de las
                siguientes situaciones, indica que la persona tiene diabetes:
              </p>
              <li>
                <strong>En ayunas, </strong>igual o superiores a 126 mg/dl, en
                dos determinaciones.
              </li>
              <li>
                <strong>A cualquier hora del día, </strong>valores iguales o
                superiores a 200 mg/dL acompañados de síntomas característicos,
                como son tener con frecuencia ganas de orinar y mucha sed.
              </li>
              <li>
                <strong>
                  Después de la ingesta de un preparado de glucosa{" "}
                </strong>
                (75gr), igual o superiores a 200 mg/dL. Esta prueba se realiza a
                las personas que en ayunas tienen valores de glucosa entre 100 y
                126mg/dL.
              </li>
              <li>
                <strong>Hemoglobina glicosilada </strong>(HbA1c) igual o
                superior a 6,5%.
              </li>
            </div>

            <div style={cuadroGrisEstilo}>
              <p style={texto3}>La hemoglobina glicosilada</p>
              <img
                src="H.jpg"
                alt="hemoglobina glicosilada"
                style={imagenEstilo2}
              />

              <div style={texto}>
                La <strong>hemoglobina glicosilada (HbA1c)</strong> es una
                medida importante para valorar si la diabetes está controlada.
                Este valor corresponde al valor medio de azúcar en sangre
                durante los últimos 2-3 meses. Se puede obtener mediante un
                análisis de sangre o un pinchazo en el dedo (glucemia capilar).
                <p>
                  Una persona sin diabetes tiene un HbA1c entre 4% y 6%. En
                  general, las recomendaciones de las sociedades científicas
                  recomiendan mantener el valor por debajo de 7%, siempre y
                  cuando no suponga un riesgo de tener niveles bajos de azúcar
                  en sangre (hipoglucemia).
                </p>
                <p>
                  <strong>¿Cuál debe ser el valor de HbA1c? </strong>El
                  profesional de la salud le orientará sobre cuál tiene que ser
                  su objetivo de A1c.
                </p>
                <p>
                  <strong>
                    ¿Qué pasa si los valores del HbA1c son superiores a los que
                    me ha recomendado mi equipo de salud?{" "}
                  </strong>
                  Cuanto más alto sea el nivel de HbA1c, mayor es el riesgo de
                  desarrollar complicaciones que afecten a los vasos sanguíneos
                  y que provoquen problemas de circulación. De igual manera, se
                  pueden ver afectados los riñones y los ojos, así como una
                  pérdida de sensibilidad en las extremidades inferiores
                  (neuropatia). Así que si se mantienen los niveles de glucosa
                  en sangre y la HbA1c se encuentra en el rango recomendado, se
                  reducirán en gran medida la probabilidad de aparición de
                  complicaciones crónicas.
                </p>
                <p>
                  <strong>¿Cómo puedo hacer esta prueba?</strong> Es una prueba
                  que se realiza en un entorno hospitalario o de atención
                  primaria cada 3-6 meses para evaluar el grado de control de la
                  diabetes.
                </p>
              </div>
            </div>
            <div style={cuadroRojoEstilo}>
              <p style={texto3}>Es necesario el diagnóstico de un profesonal</p>
            </div>
          </div>
        </div>
      </div>
      {anchoVentana < 990 && (
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%", textAlign: "center" }}>
            <a href="./Sintomas.js" style={flechaEstilo}>
              <img
                src="./izquierda.png"
                alt="Flecha izquierda"
                style={imagenEstilo}
              />
            </a>
            <a style={texto2}>Síntomas</a>
          </div>

          <div style={{ width: "50%", textAlign: "center" }}>
            <a href="./TiposDD.js" style={flechaEstilo}>
              <img
                src="./derecha.png"
                alt="Flecha derecha"
                style={imagenEstilo}
              />
            </a>
            <a style={texto2}>Tipos</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Diagnostico;
