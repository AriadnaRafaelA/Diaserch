import React, { useState, useEffect,  useMemo } from 'react';
import './App.css';
import Navbar from './Navbar';
import Conocenos from './conocenos'; // Asegúrate de importar correctamente el componente
import ArtTabla from './ArtTabla';
import TiposDD from './TiposDD';
import Diabetes from './Diabetes';
import Contacto from './Contacto';
import Sintomas from './Sintomas';
import Ofertas from './Ofertas';
import Todos from './Todos';

import Footer from './Footer'; // Ruta correcta del componente Footer
import Diagnostico from './Diagnostico';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Map, GoogleApiWrapper, Marker, Polygon } from 'google-maps-react';
import axios from 'axios'; 


function App(props) {
//___________________________________________________________________
  const gustavoAMaderoCoordinates = [
      // Define aquí las coordenadas que representan los límites de la delegación Gustavo A. Madero
      { lat: 19.51796193683034, lng: -99.1629829966421},
      { lat: 19.465170886901944,  lng: -99.14299873978628},
      { lat: 19.464907921944256,  lng: -99.13320416550526 },
      { lat: 19.46170240362441,  lng: -99.12779713988733 },
      { lat: 19.458110052811723,  lng: -99.11732550929604 },
      { lat: 19.45382078513138,  lng: -99.1118752231829 },
      { lat: 19.449774137443704,  lng: -99.10058861194771 },
      { lat: 19.45183802220947,  lng: -99.09397958417931 },
      { lat:  19.451768357973023,  lng: -99.09353693388411 },
      { lat:  19.445801090137323, lng:  -99.08725961213553 },
      { lat: 19.450420968140744,   lng: -99.08067606416648 },
      { lat: 19.446421238118084,  lng: -99.06825514111289 },
      { lat: 19.446661905240965,  lng:  -99.06736197286557 },
      { lat: 19.44480911158036,  lng: -99.06233502811216 },
      { lat: 19.448490580619715,  lng: -99.05251072143439 },
      { lat: 19.45022300774941, lng:  -99.0508775133647 },
      { lat: 19.478612939432693,  lng: -99.06335574347547 },
      { lat: 19.47981579952389,  lng: -99.06302401185255 },
      { lat: 19.479960142677335,  lng: -99.06361092319742 },
      { lat: 19.481270282553158,  lng: -99.06328194004548 },
      { lat: 19.481542059947465, lng: -99.0645374944182  },
      { lat: 19.48912310954108, lng: -99.06799312004756  },
      { lat: 19.49876341728045, lng:  -99.06389266089538 },
      { lat: 19.512647351225972,  lng: -99.09739463179585 },
      { lat: 19.511319180546625,  lng: -99.1033858665898 },
      { lat: 19.51014453933977,  lng: -99.10610384318362 },
     
      { lat: 19.509701229247362,  lng: -99.10733283309982 },
      { lat: 19.511031285468906,  lng: -99.10763628666061 },
      { lat: 19.510473520529665,  lng: -99.1078487083442 },
      { lat: 19.510487820972024,  lng: -99.10866804451499 },
      { lat: 19.511117348295038,  lng: -99.10897813987447 },
      { lat: 19.510316459037032,  lng: -99.10943332105863 },
      { lat: 19.51045947080494,  lng: -99.1099112672499 },
      { lat: 19.51100294044728, lng:  -99.110191969453 },
      { lat: 19.511174560409717,  lng: -99.11060922249058 },
      { lat: 19.51108159365006,  lng: -99.11441002407155 },
      { lat: 19.51304805418342,  lng: -99.11592731109197 },
      { lat:19.516294615882952, lng:  -99.12099477206382 },
  
      { lat: 19.521214128517514,  lng: -99.12592597186047 },
      { lat: 19.524531871657082,  lng: -99.12801986944808 },
      { lat: 19.535056609258405,  lng: -99.12738259671745 },
      { lat: 19.536114768711343,  lng: -99.13055371405441 },
      { lat: 19.545452037831335,  lng: -99.1227396380058 },
      { lat: 19.549126690316257,  lng: -99.12107061958038 },
      { lat: 19.552200774219454,  lng: -99.11849125008831 },
      { lat: 19.554059488685528,  lng: -99.11562354340964 },
     
      { lat: 19.56491116020614,  lng: -99.10811300145453 },
      { lat: 19.568771253569246, lng: -99.11184553507333 },
      { lat: 19.57980777082655,  lng: -99.11466770065026 },
      { lat: 19.581437424416784,  lng: -99.11692843795252 },
     
      { lat: 19.59058620237416,  lng: -99.11788433087676 },
      { lat: 19.59270177290813,  lng: -99.12372591758634 },
      { lat: 19.549597451303104,  lng: -99.16094662552185 },
      { lat: 19.544855785311064,  lng: -99.15112461735163 },
      { lat: 19.53420565729397,  lng: -99.15893374319499 },
      { lat: 19.532446292299078,  lng: -99.15587602461916 },
      { lat: 19.52886149244039,  lng: -99.15860280938685 },
      { lat: 19.528145678181275,  lng: -99.15680124390947 },
      { lat: 19.52697270898182,  lng: -99.15929034533903 },
      { lat: 19.531988053059877,  lng: -99.17594191078877 },
      { lat: 19.529358907707323,  lng: -99.17710049408326 },
      { lat: 19.52628512731139,  lng: -99.17250829059469 },
      { lat: 19.523858180304966,  lng: -99.17508310206408 },
      { lat:19.522086525064758,  lng:  -99.16999965003696 },
  
      //{ lat:  ,  lng:  },
  
  
      // ... Agrega más puntos para completar el polígono que representa los límites...
    ];
  const mapStyles = {
    width: '100%',
    height: '400px',
    position: 'relative',
    marginBottom: '15%',
  };
  
  const titleStyles = {
    marginTop: '10px', // Ajusta el margen superior del título
    textAlign: 'center',
  };

  const buttonStyles = {
    marginTop: '3%', // Agrega un margen superior al botón de farmacia cercana para separarlo del mapa
  };

  const [userCoordinates, setUserCoordinates] = useState({ lat: null, lng: null });
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error(`Error obteniendo la ubicación del usuario: ${error.message}`);
        }
      );
    } else {
      console.error('Geolocalización no es soportada por este navegador.');
    }
  }, []);

  const farmacias = useMemo(() => [
    {
      title: 'Farmacia 1',
      position: {
        lat: 19.557804757720046,
        lng: -99.13472619929715,
      },
    },
    {
      title: 'Farmacia 2',
      position: {
        lat: 19.544052595388877,
        lng: -99.14596681127203,
      },
    },
    {
      title: 'Farmacia 3',
      position: {
        lat: 19.540317347632964,
        lng: -99.15354455538231,
      },
    },
    {
      title: 'Farmacia 4',
      position: {
        lat: 19.52605982230629,
        lng: -99.15288197436556,
      },
    },
    {
      title: 'Farmacia 5',
      position: {
        lat: 19.511662371013756,
        lng: -99.14042093752664,
      },
    },
    {
      title: 'Farmacia 6',
      position: {
        lat: 19.513305916639574,
        lng: -99.13453810753077,
      },
    },
    {
      title: 'Farmacia 7',
      position: {
        lat: 19.50151981477475,
        lng: -99.09593827140269,
      },
    },
    {
      title: 'Farmacia 8',
      position: {
        lat: 19.488394579943915,
        lng: -99.10756048073203,
      },
    },
    {
      title: 'Farmacia 9',
      position: {
        lat: 19.483184660322387,
        lng: -99.11955030634091,
      },
    },
   
  ],[]);

  const farmacias2 = useMemo(() => [
    {
      title: "Cuautepec",
      position: { lat: 19.52296681356565, lng: -99.14148576089354 }
    },
    {
      title: "Casma",
      position: { lat: 19.49166260896163, lng: -99.1362576346612 }
    },
    {
      title: "Montevideo",
      position: { lat: 19.48829829204483, lng: -99.12611729968107 }
    },
    {
      title: "La Villa",
      position: { lat: 19.474622714702445, lng: -99.12157732982925 }
    },
    {
      title: "Albino Corzo",
      position: { lat: 19.463575145774783, lng: -99.1108678110531 }
    },
    {
      title: "Eduardo Molina",
      position: { lat: 19.497258555853612, lng: -99.09065645913292 }
    },
    {
      title: "San Felipe",
      position: { lat: 19.492312510159614, lng: -99.07462917542122 }
    }
  ],[]);

  const farmacias3 = useMemo(() => [
    {
      title: "Vallejo", // Nombre del marcador
      position: {
        lat: 19.503462189356853, 
        lng: -99.15700256777534,
      }
    },
    
  ],[]);


  const handleUpdateLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userLocation = { lat: latitude, lng: longitude };
  
          // Actualizar las coordenadas del usuario en el estado
          setUserLocation(userLocation);
  
          // Calcular la distancia para cada farmacia en farmacias
          const distances = farmacias.map((farmacia) => {
            const distance = calculateDistance(userLocation, farmacia.position);
            return { nombre: farmacia.title, distancia: distance };
          });
  
          // Calcular la distancia para cada farmacia en farmacias2
          const distances2 = farmacias2.map((farmacia) => {
            const distance = calculateDistance(userLocation, farmacia.position);
            return { nombre: farmacia.title, distancia: distance };
          });

          // Calcular la distancia para cada farmacia en farmacias3
          const distances3 = farmacias3.map((farmacia) => {
            const distance = calculateDistance(userLocation, farmacia.position);
            return { nombre: farmacia.title, distancia: distance };
          });
  
          // Guardar las distancias en el estado
          setDistancias(distances);
          setDistancias2(distances2);
          setDistancias2(distances3);
  
          // Encontrar la farmacia más cercana en farmacias
          const closestPharmacy = farmacias.reduce((prev, current) =>
            calculateDistance(userLocation, prev.position) < calculateDistance(userLocation, current.position) ? prev : current
          );
  
          // Encontrar la farmacia más cercana en farmacias2
          const closestPharmacy2 = farmacias2.reduce((prev, current) =>
            calculateDistance(userLocation, prev.position) < calculateDistance(userLocation, current.position) ? prev : current
          );

          // Encontrar la farmacia más cercana en farmacias3
          const closestPharmacy3 = farmacias3.reduce((prev, current) =>
            calculateDistance(userLocation, prev.position) < calculateDistance(userLocation, current.position) ? prev : current
          );
  
          // Mostrar las coordenadas de la farmacia más cercana en farmacias y farmacias2
          setNearestPharmacyCoordinates({
            lat: closestPharmacy.position.lat,
            lng: closestPharmacy.position.lng,
          });
  
          setNearestPharmacyCoordinates2({
            lat: closestPharmacy2.position.lat,
            lng: closestPharmacy2.position.lng,
          });

          setNearestPharmacyCoordinates3({
            lat: closestPharmacy3.position.lat,
            lng: closestPharmacy3.position.lng,
          });
  
          // Actualizar las coordenadas del usuario en el estado para mostrarlas
          setUserCoordinates({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error(`Error getting user location: ${error.message}`);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };
  
  const calculateDistance = (locationA, locationB) => {
    const R = 6371; // Radio de la Tierra en kilómetros
    const dLat = (locationB.lat - locationA.lat) * (Math.PI / 180);
    const dLon = (locationB.lng - locationA.lng) * (Math.PI / 180);
    const lat1 = locationA.lat * (Math.PI / 180);
    const lat2 = locationB.lat * (Math.PI / 180);
  
    const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distancia en kilómetros
  
    return distance.toFixed(2); // Redondear a 2 decimales
  };

  const [distancias, setDistancias] = useState([]);
  const [nearestPharmacyCoordinates, setNearestPharmacyCoordinates] = useState(null);
  
  useEffect(() => {
    if (userLocation) {
      const distances = farmacias.map((farmacia) => {
        const distance = calculateDistance(userLocation, farmacia.position);
        return { nombre: farmacia.title, distancia: distance };
      });
  
      // Encontrar la farmacia más cercana
      const farmaciaMasCercana = distances.reduce((prev, current) =>
        parseFloat(prev.distancia) < parseFloat(current.distancia) ? prev : current
      );
  
      setDistancias(distances);
  
      // Mostrar la farmacia más cercana en el mapa
      const farmaciaCercana = farmacias.find(
        (farmacia) => farmacia.title === farmaciaMasCercana.nombre
      );
  
      if (farmaciaCercana) {
        setNearestPharmacyCoordinates({
          lat: farmaciaCercana.position.lat,
          lng: farmaciaCercana.position.lng,
        });
      }
    }
  }, [userLocation, farmacias]);


  const [distancias2, setDistancias2] = useState([]);
  const [nearestPharmacyCoordinates2, setNearestPharmacyCoordinates2] = useState(null);

  useEffect(() => {
    if (userLocation) {
      const distances2 = farmacias2.map((farmacia) => {
        const distance = calculateDistance(userLocation, farmacia.position);
        return { nombre: farmacia.title, distancia: distance };
      });
  
      const farmaciaMasCercana2 = distances2.reduce((prev, current) =>
        parseFloat(prev.distancia) < parseFloat(current.distancia) ? prev : current
      );
  
      setDistancias2(distances2);
  
      const farmaciaCercana2 = farmacias2.find(
        (farmacia) => farmacia.title === farmaciaMasCercana2.nombre
      );
  
      if (farmaciaCercana2) {
        setNearestPharmacyCoordinates2({
          lat: farmaciaCercana2.position.lat,
          lng: farmaciaCercana2.position.lng,
        });
      }
    }
  }, [userLocation, farmacias2]);

  const [distancias3, setDistancias3] = useState([]);
  const [nearestPharmacyCoordinates3, setNearestPharmacyCoordinates3] = useState(null);
  
  useEffect(() => {
    if (userLocation) {
      const distances3 = farmacias3.map((farmacia) => {
        const distance = calculateDistance(userLocation, farmacia.position);
        return { nombre: farmacia.title, distancia: distance };
      });
  
      const farmaciaMasCercana3 = distances3.reduce((prev, current) =>
        parseFloat(prev.distancia) < parseFloat(current.distancia) ? prev : current
      );
  
      setDistancias3(distances3);
  
      const farmaciaCercana3 = farmacias3.find(
        (farmacia) => farmacia.title === farmaciaMasCercana3.nombre
      );
  
      if (farmaciaCercana3) {
        setNearestPharmacyCoordinates3({
          lat: farmaciaCercana3.position.lat,
          lng: farmaciaCercana3.position.lng,
        });
      }
    }
  }, [userLocation, farmacias3]);

  const handleVerRutas2 = () => {
    const latitud2 = nearestPharmacyCoordinates2.lat;
    const longitud2 = nearestPharmacyCoordinates2.lng;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitud2},${longitud2}`;
    window.open(url, '_blank');
  };
  
  const handleVerRutas = () => {
    const latitud = nearestPharmacyCoordinates.lat;
    const longitud = nearestPharmacyCoordinates.lng;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitud},${longitud}`;
    window.open(url, '_blank');
  };
  
  const handleVerRutas3 = () => {
    const latitud3 = nearestPharmacyCoordinates3.lat;
    const longitud3 = nearestPharmacyCoordinates3.lng;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitud3},${longitud3}`;
    window.open(url, '_blank');
  };

  let nombreFarmaciaCercana = '';

  const obtenerNombreFarmaciaMasCercana = () => {
    if (distancias && distancias2 && distancias3) {
      let indiceFarmaciaCercana = 0; // Variable para almacenar el índice de la farmacia más cercana
  
      // Verificar cuál de las tres farmacias tiene la menor distancia
      if (distancias[0]?.distancia < distancias[indiceFarmaciaCercana]?.distancia) {
        indiceFarmaciaCercana = 0;
      }
  
      if (distancias2[0]?.distancia < distancias[indiceFarmaciaCercana]?.distancia) {
        indiceFarmaciaCercana = 1;
      }
  
      if (distancias3[0]?.distancia < distancias[indiceFarmaciaCercana]?.distancia) {
        indiceFarmaciaCercana = 2;
      }
  
      // Devolver el índice de la farmacia con menor distancia
      return indiceFarmaciaCercana;
    } else {
      return null; // O manejar el caso en que no haya datos disponibles
    }
  };
  
  // Llama a la función para obtener el índice de la farmacia con la menor distancia
  const indiceFarmaciaCercana = obtenerNombreFarmaciaMasCercana();
  
  // Determinar cuál de los nearestPharmacyCoordinates tiene la menor distancia
  
  if (indiceFarmaciaCercana === 0) {
    nombreFarmaciaCercana = 'Farmacia Guadalajara'; // Reemplaza con el nombre de la primera farmacia
  } else if (indiceFarmaciaCercana === 1) {
    nombreFarmaciaCercana = 'Farmacia San Pablo'; // Reemplaza con el nombre de la segunda farmacia
  } else {
    nombreFarmaciaCercana = 'Farmacia Benavides'; // Reemplaza con el nombre de la tercera farmacia
  }
//___________________________________________________________________


  const textoEstilo = {
    textAlign: 'center',
    fontSize: '8vh',
    //fontSize: '48px',  // Tamaño de fuente más grande
    //fontWeight: 'bold',
    color: 'white',   // Color blanco
    margin: '10px 0',
  
  };
  
  const textoEstilo2 = {
    textAlign: 'center',
    //fontSize: '100px',
    fontSize: '9vh',  // Tamaño de fuente más grande
    fontWeight: 'bold',
    color: 'white',   // Color blanco
    margin: '10px 0',

  };

  const contenidoEstilo = {
    paddingTop: '8%',//Agregar margen superior para separar del Navbar
   
  };

  const buscadorEstilo = {
    textAlign: 'center',
   // marginTop: '70px',  Agregar margen superior para separar del texto
    marginTop: '9VH',
    position: 'relative',
  };

  const texto = {
    textAlign: 'center',
    marginTop: '10px', // Agregar margen superior para separar del texto
   
  };
  
  const inputEstilo = {
    width: '50%', // Ocupar todo el ancho disponible
    height: '60px', // Altura más grande
     //fontSize: '24px', Tamaño de fuente más grande
     fontSize: '2.5VH',
     borderRadius: '30px', // Hace que las esquinas sean redondeadas
    paddingLeft: '20px',
  };

  const areaConFondo = {
   // backgroundImage: 'url("./medicina.png")',
     backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    /* Otras propiedades de fondo que desees agregar */
  };

  const tablaStyles = {
    backgroundColor: '#FFFFFF',
  borderRadius: '10px',
  // padding: '20px', Espaciado interno
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Sombra para el efecto de elevación
  margin: 'auto', // Para centrar horizontalmente
  width: '95%', // Anchura máxima para el contenido de la tabla
    border: '1px solid #ccc', // Borde con color gris
    padding: '20px', // Espaciado interno
    marginTop: '5%',
    margindown: '5%',
     textAlign: 'left' ,
     color: '#000000'
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
    textAlign: 'left' 
  };
  
//___________________________________________________________________

  // Agregar estado para el índice de la sugerencia sobre la que está el cursor
  const [indiceHover, setIndiceHover] = useState(-1);
  const [sugerencias, setSugerencias] = useState([]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setNombreBuscado(inputValue);
  
    // Filtrar sugerencias basadas en el valor ingresado
    if (inputValue === '') {
      setSugerencias([]);
    } else {
      const filteredMedicines = medicinas.filter(medicina =>
        medicina.laboratorio.toLowerCase().startsWith(inputValue.toLowerCase())
      );
  
      // Ordenar las sugerencias alfabéticamente
      filteredMedicines.sort((a, b) => {
        const labA = a.laboratorio.toLowerCase();
        const labB = b.laboratorio.toLowerCase();
        if (labA < labB) return -1;
        if (labA > labB) return 1;
        return 0;
      });
  
      const suggestedMedicines = filteredMedicines.map(medicina => medicina.laboratorio);

      // Si no hay sugerencias después de filtrar, mostrar el mensaje de no encontrado
      if (suggestedMedicines.length === 0) {
        setSugerencias(['No se encontró esa medicina']);
      } else {
        setSugerencias(suggestedMedicines);
      }
    }
  };

  const limpiarBusqueda = () => {
    setNombreBuscado('');
    setSugerencias([]);
  };

  const autocompletar = (sugerencia) => {
    setNombreBuscado(sugerencia);
    setSugerencias([]);
  };

   const suggestionBoxStyle = {
    width: '50%', // Ancho del cuadro de sugerencias
    margin: '0 auto', // Centrar horizontalmente
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '5px',
    position: 'absolute',
    zIndex: '1',
    top: '80px', // Ajuste según sea necesario para la posición vertical
    left: '23%', // Ajuste según sea necesario para la posición horizontal
    maxHeight: '26vh', // Altura máxima del 50% del viewport
    overflowY: 'auto', // Agregar scroll si es necesario
  };

  const borderStyle = {
    width: '100%',
    margin: '10px 0',
    marginTop: '3%',
    borderTop: '2px solid #277FB3',
   backgroundColor: '#ffcccc'
  };
  const borderStyle2 = {
   display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    borderTop: '1px solid #38B6FF',
  };

  const texto1 = {
    fontSize: '2vh', 
   
  };

  //---------------------------------------------------------------------------------
  const [conexionExitosa, setConexionExitosa] = useState(false);
  const [medicinas, setMedicinas] = useState([]);
  const [error,setError] = useState(null);
  const [nombreBuscado, setNombreBuscado] = useState('');
  //const [medicinaEncontrada, setMedicinaEncontrada] = useState(null);

  useEffect(() => {
    async function verificarConexion() {
      try {
        const response = await fetch('http://localhost:5000/api/conexion');
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
    verificarConexion();
    
  }, []);

  const guadalajaraMedicinas = medicinas.filter(medicina => medicina.farmacia === 'Farmacia Guadalajara');
  const sanPabloMedicinas = medicinas.filter(medicina => medicina.farmacia === 'Farmacia San Pablo');
  const benavidesMedicinas = medicinas.filter(medicina => medicina.farmacia === 'Farmacia Benavides');


  const [medicinasEncontradas, setMedicinasEncontradas] = useState([]);

    const buscarPorNombre = () => {
      if (!nombreBuscado) {
      console.log('Ingresa el nombre de la medicina');
      return; // Salir de la función si nombreBuscado está vacío
    }

    const medicinasEncontradas = medicinas.filter(
      //(medicina) => medicina.laboratorio.toLowerCase().startsWith(nombreBuscado.toLowerCase())
      (medicina) => medicina.laboratorio.toLowerCase().includes(nombreBuscado.toLowerCase())

    );

    if (medicinasEncontradas.length > 0) {
      setMostrarContenido(false);
    }
    
    setMedicinasEncontradas(medicinasEncontradas);
  };
  
 /* const [medicinasEncontradas, setMedicinasEncontradas] = useState([]);
  const [palabras, setPalabras] = useState([]);
  
  const buscarPorNombre = () => {
    if (!nombreBuscado) {
      console.log('Ingresa el nombre de la medicina');
      return;
    }
    const primeraPalabra = palabras.length > 0 ? palabras[0] : '';
    const segundaPalabra = palabras.length > 1 ? palabras[1] : '';
  
    const medicinasEncontradasPorFormula = medicinas.filter(
      (medicina) => {
        const formulas = medicina.formula.toLowerCase().split(' ');
        return formulas.includes(primeraPalabra.toLowerCase()) ||
        formulas.includes(segundaPalabra.toLowerCase());
      }
    );
  
    if (medicinasEncontradasPorFormula.length > 0) {
      setMostrarContenido(false);
    }
    
    setMedicinasEncontradas(medicinasEncontradasPorFormula);
  };*/
  const [mostrarContenido, setMostrarContenido] = useState(false);

  const mostrarOcultarContenido = () => {
    setMostrarContenido(!mostrarContenido); // Cambia el estado al contrario del estado actual
  };
  
//_______________________________________________________

/*useEffect(() => {
  const frase = "Kaka Cafe";
  const palabrasSeparadas = frase.split(" ");
  setPalabras(palabrasSeparadas);
}, []);*/

const [palabras, setPalabras] = useState([]);

useEffect(() => {
  axios.get('http://localhost:5000/api/conexion').then(response => {
    // Suponiendo que response.data es un array de objetos donde cada objeto tiene una propiedad 'formula'
    const formulas = response.data.map(medicina => medicina.formula);
    const palabrasSeparadas = formulas.join(' ').split(' ');
    setPalabras(palabrasSeparadas);
  })
  .catch(error => {
    console.error('Error al obtener los datos de la fórmula:', error);
  });
}, []);

const primeraPalabra = palabras.length > 0 ? palabras[0] : '';
const segundaPalabra = palabras.length > 1 ? palabras[1] : '';
  

//________________________________________________________

  const FarmaciaComponent = ({ farmaciaNombre, medicinas }) => ( 
    <div style={texto1}>
      {medicinas.length  > 0 && <p> 
      {/* Estructura común de la tabla */}
      <div style={{ fontWeight: 'bold', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <div style={{ width: '20%', textAlign: 'left' }}>
          <p>Medicina</p>
        </div>
        
        <div style={{ width: '15%', textAlign: 'left' }}>
          <p > Precio</p>
        </div>
        <div style={{ width: '15%', textAlign: 'left' }}>
          <p>Con descuento</p>
        </div>
        <div style={{ width: '10%', textAlign: 'left' }}>
          <p></p>
        </div>
        <div style={{ width: '10%', textAlign: 'left' }}>
          <p>Comprar</p>
        </div>
      </div></p>}
  
      {/* Map para mostrar medicamentos específicos para esta farmacia */}
      {medicinas.map((medicina, index) => (
        
        <div key={index} style={borderStyle2}>
          <div style={{ width: '30%', textAlign: 'left' }}>
            {`${medicina.laboratorio}`} <br></br>
        
            <pre> 
              {`${medicina.formula}`}<br></br>
         
              {`${medicina.presentacion}`}
              </pre>
          </div>
          
          <div style={{ width: '15%', textAlign: 'left' }}>

            {medicina.precio !== medicina.preciod ? (
              <p style={{ textDecoration: 'line-through' }}>{medicina.precio}</p>
            ) : (
              <p> <b>{medicina.precio}  </b></p>
            )}

          </div>
          <div style={{ width: '15%', textAlign: 'left' }}>

            {medicina.precio !== medicina.preciod ? (
              <p> <b>{medicina.preciod} </b></p>
            ) : (
              <p></p>
            )}

          </div>
          <div style={{ width: '10%', textAlign: 'left' }}>
            <p>
            aqui van las iamgenes de arriba, abajo e igual
            </p>
          </div>

          <div style={{ width: '10%', textAlign: 'left' }}>
            {/*<p><a href={`https://www.benavides.com.mx/${medicina.laboratorio.replace(/\s+/g,'-')}-${primeraPalabra}-${medicina.presentacion.replace(/\s+/g, '-')}`} target="_blank" rel="noopener noreferrer">
              <img
                src="./web.png"
                alt="Descripción de la imagen"
                style={{
                  maxWidth: '50%', // Ajustar la imagen al ancho máximo del contenedor
                  height: 'auto', // Mantener la relación de aspecto
                  display: 'block' // Asegurar que la imagen ocupe todo el ancho disponible
                }}
              />
            </a></p>*/}
          </div>
        </div>
      ))}
  
      {/* Mensaje en caso de que no haya medicamentos */}
      {!medicinas.length && <p>Esta farmacia no cuenta con este medicamento</p>}
    </div>
  );
 
  const renderFooter = () => {
    const path = window.location.pathname;
    if (path !== "/") {
      return <Footer />;
    }
    return null;
  };

  return (
    <Router>
      
        <Navbar />
        <div style={contenidoEstilo}>
        <Routes>
          
          <Route path="/conocenos.js" element={<Conocenos /> } />
          <Route path="/ArtTabla.js" element={<ArtTabla />} />
          <Route path="/TiposDD.js" element={<TiposDD />}  />
          <Route path="/Diabetes.js" element={<Diabetes />}  />
          <Route path="/Sintomas.js" element={<Sintomas />}  />
          <Route path="/Diagnostico.js" element={<Diagnostico />}  />
          <Route path="/Contacto.js" element={<Contacto />}  />
          <Route path="/Ofertas.js" element={<Ofertas />}  />
          <Route path="/Todos.js" element={<Todos />}  />

          <Route path="/" element={

            
            <div style={areaConFondo}>
              <div>
                {/*<h6>Verificación de Conexión</h6>*/   }
                <p style={textoEstilo}>A tu alcance</p>
                <p style={textoEstilo2}>El mejor precio</p>
                
              {/*!nombreBuscado && (
                <p>Ingresa el nombre de la medicina</p>
              )*/}
              {(!conexionExitosa || medicinasEncontradas.length === 0 || medicinasEncontradas.length > 0 ) &&(

                <div style={buscadorEstilo}>
                  <input
                    type="text"
                    placeholder="Buscar por nombre"
                    value={nombreBuscado}
                    onChange={handleInputChange}
                    style={inputEstilo}
                  />
                  <button className="search-button" onClick={buscarPorNombre}>
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                  {nombreBuscado && (
                    <button className="clear-button" onClick={limpiarBusqueda}>
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  )}

                  {/* Cuadro de sugerencias */}
                  {sugerencias.length > 0 && (
                    <div style={suggestionBoxStyle}>
                      <ul style={{ listStyleType: 'none', padding: '0' }}>
                      {[...new Set(sugerencias.map(sugerencia => sugerencia.toLowerCase().trim()))].map((sugerencia, index) => (
                          <li key={index} onClick={() => autocompletar(sugerencia)} 
                          onMouseEnter={() => setIndiceHover(index)} // Establecer el índice al pasar el cursor
                          onMouseLeave={() => setIndiceHover(-1)}    // Reiniciar el índice al salir el cursor
                          style={{
                            padding: '8px',
                            cursor: 'pointer',
                            backgroundColor: indiceHover === index ? '#277FB3' : 'inherit', // Cambiar el color al pasar el cursor
                            color: indiceHover === index ? '#fff' : 'inherit',          // Cambiar el color del texto al pasar el cursor
                          }}>
                            
                            {sugerencia}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {mostrarContenido ? null : (
                    <div style={{ padding: '8px'}}>
                    <p><button onClick={mostrarOcultarContenido}>Ver todas las medicinas</button> </p>
                    </div>
                  )}
                      
                </div>
              )}
            </div>


                {mostrarContenido  || medicinasEncontradas.length > 0 ? (
                    <div>
                      {/*<p>Conexión exitosa con el servidor</p>*/  }
                        <div style={{ textAlign: 'center' }}>
                       
                        <div style={tablaStyles3}>

                          {mostrarContenido && (
                            <div style={tablaStyles}>
                              <div>
                              {/* <hr style={{ borderTop: '2px solid blue', width: '100%', margin: '10px 0', marginTop: '3%' }} />*/  }
                                <h3 style={borderStyle} ><img src="http://maps.google.com/mapfiles/ms/icons/orange-dot.png" alt="Markr" /> Farmacia San Pablo</h3>
                                <FarmaciaComponent farmaciaNombre="Farmacia Guadalajara" medicinas={guadalajaraMedicinas} />

                              </div>

                              <div>
                                <h3 style={borderStyle}><img src="http://maps.google.com/mapfiles/ms/icons/green-dot.png" alt="Markr" /> Farmacia San Pablo</h3>
                                <FarmaciaComponent farmaciaNombre="Farmacia San Pablo" medicinas={sanPabloMedicinas} />

                              </div>
                              <div >
                                <h3 style={borderStyle}><img src="http://maps.google.com/mapfiles/ms/icons/red-dot.png" alt="Markr" /> Farmacia Benavides</h3>
                                <FarmaciaComponent farmaciaNombre="Farmacia Benavides" medicinas={benavidesMedicinas} />
                              </div>
                            </div>
                          )}
                      
                          {medicinasEncontradas.length > 0 ? (
                            <div>
                               {/*<div style={{  marginTop: '50px', textAlign: 'center'}}>
                              <button onClick={() => setMedicinasEncontradas([])}>Realizar otra busqueda </button>
                              </div>*/  }
                            <div style={tablaStyles}>

                              <div>
                              {/* <hr style={{ borderTop: '2px solid blue', width: '100%', margin: '10px 0', marginTop: '3%' }} />*/  }
                              <h3 style={borderStyle} ><img src="http://maps.google.com/mapfiles/ms/icons/orange-dot.png" alt="Markr" /> Farmacia San Pablo</h3>
                                <FarmaciaComponent
                                  farmaciaNombre="Farmacia Guadalajara"
                                  medicinas={medicinasEncontradas.filter(medicina => medicina.farmacia === 'Farmacia Guadalajara')}
                                />
                              </div>

                              <div>
                              <h3 style={borderStyle}><img src="http://maps.google.com/mapfiles/ms/icons/green-dot.png" alt="Markr" /> Farmacia San Pablo</h3>
                                <FarmaciaComponent
                                  farmaciaNombre="Farmacia San Pablo"
                                  medicinas={medicinasEncontradas.filter(medicina => medicina.farmacia === 'Farmacia San Pablo')}
                                />
                              </div>

                              <div >
                                <h3 style={borderStyle}><img src="http://maps.google.com/mapfiles/ms/icons/red-dot.png" alt="Markr" /> Farmacia Benavides</h3>
                                  <FarmaciaComponent
                                    farmaciaNombre="Farmacia Benavides"
                                    medicinas={medicinasEncontradas.filter(medicina => medicina.farmacia === 'Farmacia Benavides')}
                                  />
                              </div>
                            </div>
                            </div>
                          )  : null}

                          <div style={tablaStyles2}>
                              {/* Secciones para otras farmacias aquí */}
                              {/* ... */}
                              <h3 style={titleStyles}>Farmacia cercana</h3>
                                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <div style={{ width: '100%', textAlign: 'center'  }}>
                                          <p>La mas cercana es {nombreFarmaciaCercana}</p>
                                        </div>
                                      </div>

                                <p style={texto}>* El color de la marca corresponde a la farmacia asignada</p>

                            <div style={mapStyles}>
                            <img src="http://maps.google.com/mapfiles/ms/icons/blue-dot.png" alt="Marka" />
                                              <button onClick={handleUpdateLocation}  style={buttonStyles}>Actualizar Ubicación</button>
                              <Map
                                google={props.google}
                                zoom={12}
                                initialCenter={
                                  {
                                        lat: 19.4904923,
                                        lng: -99.1325889,
                                      }
                                }
                                
                              >
                                {/* Marcadores y polígonos del mapa de la farmacia más cercana */}



                                {mostrarContenido && nearestPharmacyCoordinates && (
                                  <Marker
                                    title="Farmacia Guadalajara"
                                    position={{
                                      lat: nearestPharmacyCoordinates.lat,
                                      lng: nearestPharmacyCoordinates.lng,
                                    }}
                                    icon={{
                                      url: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png',
                                    }}
                                  />
                                )}

                                {mostrarContenido && nearestPharmacyCoordinates2 && (
                                  <Marker
                                    title="Farmacia San Pablo"
                                    position={{
                                      lat: nearestPharmacyCoordinates2.lat,
                                      lng: nearestPharmacyCoordinates2.lng,
                                    }}
                                    icon={{
                                      url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
                                    }}
                                  />
                                )}

                                {mostrarContenido && nearestPharmacyCoordinates3 && (
                                  <Marker
                                    title="Farmacia Benavides"
                                    position={{
                                      lat: nearestPharmacyCoordinates3.lat,
                                      lng: nearestPharmacyCoordinates3.lng,
                                    }}
                                    icon={{
                                      url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
                                    }}
                                  />
                                )}

                                {medicinasEncontradas.some(medicina => medicina.farmacia === 'Farmacia Guadalajara') && nearestPharmacyCoordinates && (
                                  <Marker
                                  title="Farmacia Guadalajara"
                                    position={{
                                      lat: nearestPharmacyCoordinates.lat,
                                      lng: nearestPharmacyCoordinates.lng,
                                    }}
                                    icon={{
                                      url: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png',
                                    }}
                                  />
                                )}

                                {medicinasEncontradas.some(medicina => medicina.farmacia === 'Farmacia San Pablo') && nearestPharmacyCoordinates2 && (
                                <Marker
                                  title="Farmaia San pablo"
                                    position={{
                                      lat: nearestPharmacyCoordinates2.lat,
                                      lng: nearestPharmacyCoordinates2.lng,
                                    }}
                                    icon={{
                                      url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
                                    }}
                                  />
                                )}
                                
                                {medicinasEncontradas.some(medicina => medicina.farmacia === 'Farmacia Benavides') && nearestPharmacyCoordinates3 && (
                                  <Marker
                                  title="Farmaia Benavides"
                                    position={{
                                      lat: nearestPharmacyCoordinates3.lat,
                                      lng: nearestPharmacyCoordinates3.lng,
                                    }}
                                    icon={{
                                      url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
                                    }}
                                  />
                                )}

                                <Polygon
                                        paths={gustavoAMaderoCoordinates}
                                        strokeColor="#FF0000"
                                        strokeOpacity={0.8}
                                        strokeWeight={2}
                                        fillColor="#FF0000"
                                        fillOpacity={0.1}
                                      />
                                      {userLocation && (
                                        <Marker
                                          position={{
                                            lat: userLocation.lat,
                                            lng: userLocation.lng,
                                          }}
                                          icon={{
                                            url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                                          }}
                                        />
                                      )}
                              </Map>
                            </div>
                            <div style={tablaStyles3}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                              <div style={{ width: '100%', textAlign: 'center'  }}>
                              <h3 style={titleStyles}>Revisar rutas para llegar en Google map</h3>
                              </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                              <div style={{ width: '33.33%', textAlign: 'center'  }}>
                                <p>{medicinasEncontradas.some(medicina => medicina.farmacia === 'Farmacia Guadalajara') && nearestPharmacyCoordinates && (
                                      <button onClick={handleVerRutas} style={buttonStyles}>Farmacia Guadalajara</button> 
                                      )}</p>
                              </div>
                              <div style={{ width: '33.33%', textAlign: 'center'  }}>
                                <p>{medicinasEncontradas.some(medicina => medicina.farmacia === 'Farmacia San Pablo') && nearestPharmacyCoordinates2 && (
                                      <button onClick={handleVerRutas2} style={buttonStyles}>Farmacia San Pablo</button> 
                                      )}</p>
                              </div>
                              <div style={{ width: '33.33%', textAlign: 'center' }}>
                                <p>{medicinasEncontradas.some(medicina => medicina.farmacia === 'Farmacia Benavides') && nearestPharmacyCoordinates3 && (
                                      <button onClick={handleVerRutas3} style={buttonStyles}>Farmacia Benavides</button> 
                                      )}</p>
                              </div>
                            </div>
                        </div>
                          </div>

                        </div>
                        <Footer /> 
                      </div>
                    </div>
                  
                    )  : null}
              </div>
            }
          />
        </Routes>
        <div>
      {/* Contenido de tu página */}
      {renderFooter()}
     {/* Agregar el componente Footer al final de la página */}
    </div>
      </div>
    </Router>
    
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCCgPfn4jH9TEz7dqVu_P1SQyh2KBgJbKU', // Tu clave de API
})(App);