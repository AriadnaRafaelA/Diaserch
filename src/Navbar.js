import React, { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [anchoVentana, setAnchoVentana] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "3.5vw",
    fontWeight: "bold",
    color: "white",
  };

  const cuadroComprimidoStyle = {
    backgroundColor: "#277FB3",
    width: "45%",

    // Otros estilos que desees aplicar al cuadro del comprimido
  };

  const textoStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    justifyContent: "center",
    fontSize: anchoVentana > 530 ? "25px" : "10px",
    marginLeft: "15px",
    marginRight: "15px",
  };

  const textoStyle2 = {
    display: "flex",
    fontWeight: "bold",
    color: "white",
    //fontSize: '3vw',
    fontSize: anchoVentana > 530 ? "25px" : "10px",
    fontWeight: "bold",
    marginLeft: "15px",
    marginRight: "15px",
  };

  const textoStyle3 = {
    fontSize: anchoVentana > 530 ? "15px" : "7px",
  };

  const navbarStyle = {
    backgroundColor: scrolled ? "#277FB3" : "#38B6FF", // Cambia al color que desees cuando hagas scroll y cuando no
    position: "fixed", // Fija el Navbar en la parte superior
    top: "0",
    //width: '100%',
    //height: 'auto',

    // zIndex: '1000', // Añade una alta z-index para asegurarte de que esté en la parte superior
    transition: "background-color 0.3s ease", // Agrega una transición para suavizar el cambio de color
    //height: '100px', // Definir la altura deseada para la barra de navegación
    padding: "0", // Eliminar cualquier relleno
    margin: "0", // Eliminar cualquier margen
  };

  const imgContainerStyle = {
    width: "150px", // Ancho de la imagen
    height: "100px", //'116px',  Alto de la imagen
    margin: "0", // Eliminar cualquier margen
  };

  const imgStyle = {
    width: "100%", // Ajustar el ancho al 100% del contenedor
    height: "100%", // Ajustar la altura al 100% del contenedor
    objectFit: "cover", // Escalar la imagen para cubrir todo el espacio disponible sin deformarla
    borderTop: "none", // Eliminar el borde superior de la imagen
    padding: "0",
    transition: "opacity 0.3s ease", // Agrega transición al cambiar la opacidad de la imagen
  };

  const imgStyle2 = {
    width: `${Math.max(1, anchoVentana * 0.03)}px`, // Ejemplo: tamaño mínimo de 10px, escalado en relación con el ancho de la ventana
    height: "auto", // Esto permite mantener la proporción de la imagen
    padding: "0",
  };

  const centerNavStyle = {
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2vw",
    fontWeight: "bold",
  };

  const [showArrows, setShowArrows] = useState(true);
  const toggleArrows = () => {
    setTimeout(() => {
      setShowArrows(!showArrows);
    }, 0);
  };

  useEffect(() => {
    const actualizarAnchoVentana = () => {
      setAnchoVentana(window.innerWidth);
    };

    window.addEventListener("resize", actualizarAnchoVentana);

    return () => {
      window.removeEventListener("resize", actualizarAnchoVentana);
    };
  }, []);

  const texto = {
    fontSize: "12px", // Tamaño de fuente más grande
  };
  const texto2 = {
    fontSize: "14px", // Tamaño de fuente más grande
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary fixed-top">
      <div className="container-fluid" style={navbarStyle}>
        <div style={logoStyle} className="navbar-brand" href="#">
          <img src="/medicina.png" alt="Logo" style={imgStyle2} />
          DIASERCH
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Alternar navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style={cuadroComprimidoStyle}
        >
          <ul>
            <div className="offcanvas-header">
              <p
                className="offcanvas-title"
                id="offcanvasNavbarLabel"
                style={textoStyle2}
              >
                Contenido
              </p>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div
              className="offcanvas-body"
              style={{ marginLeft: "30px", marginRight: "20px" }}
            >
              <ul className=" navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a
                    className="nav-link "
                    aria-current="page"
                    href="/"
                    style={textoStyle}
                  >
                    Búsqueda
                  </a>
                </li>
                {/*<li className="nav-item">
                    <a className="nav-link " href="/ofertas.js"  style={textoStyle}>
                    Ofertas
                    </a>
  </li>*/}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link  dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={textoStyle}
                  >
                    Artículos
                  </a>
                  {anchoVentana > 550 ? (
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item"
                          href="/Diabetes.js"
                          style={textoStyle3}
                        >
                          ¿Qué es la diabetes?
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/Sintomas.js"
                          style={textoStyle3}
                        >
                          Síntomas
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/Diagnostico.js"
                          style={textoStyle3}
                        >
                          Diagnóstico
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/TiposDD.js"
                          style={textoStyle3}
                        >
                          Tipos de diabetes
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/ArtTabla.js"
                          style={textoStyle3}
                        >
                          Tabla de medicamentos
                        </a>
                      </li>
                    </ul>
                  ) : (
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item"
                          href="/Diabetes.js"
                          style={textoStyle3}
                        >
                          ¿Qué es?
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/Sintomas.js"
                          style={textoStyle3}
                        >
                          Síntomas
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/Diagnostico.js"
                          style={textoStyle3}
                        >
                          Diagnóstico
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/TiposDD.js"
                          style={textoStyle3}
                        >
                          Tipos{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/ArtTabla.js"
                          style={textoStyle3}
                        >
                          Medicamentos
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link "
                    href="/conocenos.js"
                    style={textoStyle}
                  >
                    Conócenos
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link "
                    href="/Contacto.js"
                    style={textoStyle}
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </div>

        {anchoVentana > 990 && (
          <div className="d-flex" style={imgContainerStyle}>
            <img
              src={scrolled ? "/flechas4.png" : "/flechas3.png"}
              alt="Logo"
              className="img-fluid"
              style={imgStyle}
            />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
