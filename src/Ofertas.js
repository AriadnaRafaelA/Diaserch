import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [conexionExitosa, setConexionExitosa] = useState(false);
  const [medicinas, setMedicinas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function obtenerMedicinasConDiferenciaPrecio() {
      try {
        const response = await fetch("https://api.diaserch.com/api/conexion");
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        const data = await response.json();
        setConexionExitosa(true);
        setMedicinas(data);
      } catch (error) {
        setError(`Error: ${error.message}`);
        setConexionExitosa(false);
      }
    }

    obtenerMedicinasConDiferenciaPrecio();
  }, []);

  const textoEstilo = {
    textAlign: "center",
    fontSize: "48px", // Tamaño de fuente más grande
    //fontWeight: 'bold',
    color: "white", // Color blanco
    margin: "10px 0",
  };

  /* const tablaStyles = {
    marginTop: '5%', // Corregir la propiedad marginTop
  marginBottom: '5%', // Agregar marginBottom para centrar también verticalmente
  textAlign: 'left',
  };*/

  const textoEstilo2 = {
    textAlign: "center",
    fontSize: "5vh", // Tamaño de fuente más grande
    fontWeight: "bold",
    color: "white", // Color blanco
    margin: "10px 0",
  };

  const contenidoEstilo = {
    marginTop: "100px", // Agregar margen superior para separar del Navbar
  };

  const buscadorEstilo = {
    textAlign: "center",
    marginTop: "70px", // Agregar margen superior para separar del texto
  };

  const inputEstilo = {
    width: "50%", // Ocupar todo el ancho disponible
    height: "60px", // Altura más grande
    fontSize: "24px", // Tamaño de fuente más grande
    borderRadius: "30px", // Hace que las esquinas sean redondeadas
  };

  const tablaStyles = {
    backgroundColor: "#FFFFFF",

    borderRadius: "10px",
    // padding: '20px', Espaciado interno
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Sombra para el efecto de elevación
    margin: "auto", // Para centrar horizontalmente
    width: "99%", // Anchura máxima para el contenido de la tabla
    border: "1px solid #ccc", // Borde con color gris
    padding: "20px", // Espaciado interno
    marginTop: "5%",
    margindown: "5%",
    textAlign: "left",
    color: "#000000",
  };

  const tablaStyles2 = {
    backgroundColor: "rgba(255, 255, 255, 10)",
    borderRadius: "10px",
    // padding: '20px', Espaciado interno
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Sombra para el efecto de elevación
    margin: "auto", // Para centrar horizontalmente
    width: "80%", // Anchura máxima para el contenido de la tabla
    border: "1px solid #ccc", // Borde con color gris
    padding: "20px", // Espaciado interno
    marginTop: "5%",
    margindown: "5%",
    textAlign: "left",
    color: "#000000",
  };

  const tablaStyles3 = {
    color: "#FFFFFF",
    backgroundColor: "#277FB3",
    borderRadius: "10px",
    // padding: '20px', Espaciado interno
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Sombra para el efecto de elevación
    margin: "auto", // Para centrar horizontalmente
    width: "99%", // Anchura máxima para el contenido de la tabla
    border: "1px solid #ccc", // Borde con color gris
    padding: "20px", // Espaciado interno
    marginTop: "5%",
    margindown: "5%",
    textAlign: "left",
  };

  const renderizarTabla = () => {
    return (
      <div>
        <div>
          <p style={textoEstilo2}>Sorprendete con las ofertas de ...</p>
          <p></p>
        </div>
        <div style={tablaStyles3}>
          <div style={tablaStyles}>
            <table
              style={{
                width: "100%",
                justifyContent: "center",
                backgroundColor: "white",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ width: "20%", textAlign: "left" }}>
                      <p>Medicina</p>
                    </div>

                    <div style={{ width: "20%", textAlign: "left" }}>
                      <p>Precio original</p>
                    </div>
                    <div style={{ width: "20%", textAlign: "left" }}>
                      <p style={{ backgroundColor: "#ffcccc" }}>
                        Precio de descuento
                      </p>
                    </div>
                    <div style={{ width: "20%", textAlign: "left" }}>
                      <p>Farmacia</p>
                    </div>
                  </div>
                </div>
              </thead>
              <tbody>
                {medicinas.map((medicina, index) => {
                  // Suponiendo que medicina.precio y medicina.preciod son strings que representan valores monetarios
                  const quitarSimboloDolar = (valorMonetario) => {
                    return valorMonetario.replace("$", "");
                  };

                  const precioNumerico = parseFloat(
                    quitarSimboloDolar(medicina.precio)
                      .replace(",", "")
                      .replace(".", "")
                      .replace(",", "."),
                  );

                  const preciodNumerico = parseFloat(
                    quitarSimboloDolar(medicina.preciod)
                      .replace(",", "")
                      .replace(".", "")
                      .replace(",", "."),
                  );
                  const descuento = precioNumerico - preciodNumerico;
                  //const porcentajeDescuento = (descuento / precioNumerico) * 100;

                  if (descuento !== 0) {
                    {
                      /* return (
              <tr key={index}>
                <td>{medicina.laboratorio}</td>
                <td>{medicina.formula}</td>
                <td>{medicina.presentacion}</td>
                <td>{medicina.precio}</td>
                <td style={{ backgroundColor: '#ffcccc'}} >{medicina.preciod}</td>
                <td>{medicina.farmacia}</td>
                {/*<td>Descuento: {porcentajeDescuento.toFixed(2)}%</td>
              </tr>
            );*/
                    }
                    return (
                      <div>
                        <div
                          key={index}
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <div style={{ width: "20%", textAlign: "left" }}>
                            <p>{`${medicina.laboratorio}`}</p>

                            <p>{`${medicina.formula}`}</p>

                            <p>{`${medicina.presentacion}`}</p>
                          </div>
                          <div style={{ width: "20%", textAlign: "left" }}>
                            <p>{`${medicina.precio}`}</p>
                          </div>
                          <div style={{ width: "20%", textAlign: "left" }}>
                            <p
                              style={{ backgroundColor: "#ffcccc" }}
                            >{`${medicina.preciod}`}</p>
                          </div>
                          <div style={{ width: "20%", textAlign: "left" }}>
                            <p>{`${medicina.farmacia}`}</p>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return null; // Si el descuento es 0, no se renderiza ninguna fila
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ marginTop: "100px", textAlign: "center" }}>
      {conexionExitosa ? (
        renderizarTabla()
      ) : (
        <p>{error || "Error de conexión con el servidor"}</p>
      )}
    </div>
  );
}

export default App;
