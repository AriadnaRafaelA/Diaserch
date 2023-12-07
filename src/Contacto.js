import React, { useEffect, useState, useMemo } from 'react';
import { Map, GoogleApiWrapper, Marker, Polygon } from 'google-maps-react';

function Contacto(props) {

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

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
    marginRight: '2%',
    marginLeft: '15%',
  };

  const mapStyles = {
    width: '100%',
    height: '400px',
    position: 'relative',
  };

  const infoStyles = {
    textAlign: 'center',
    marginBottom: '10px',
  };

  const mapData = [
    {
      title: 'Farmacias San Pablo',
      //lat: 19.4904923,
      //lng: -99.1325889,
      website: 'https://www.farmaciasanpablo.com.mx/',
      telefono: '800 0726 722',
    },
    {
      title: 'Farmacias Guadalajara',
     // lat: 19.5060043, //esta es la coordenada ue toma para hacer el calculo de la distancia  
      //lng: -99.136207,
      website: 'https://www.farmaciasguadalajara.com/',
      telefono: '(33) 3818 1818',
    },
    {
      title: 'Farmacias Similares',
     // lat: 19.506388,
      //lng: -99.144676,
      website: 'https://www.farmaciasdesimilares.com/',
      telefono: '800 911 6666',
    },
  ];

  const titleStyles = {
    marginTop: '10px', // Ajusta el margen superior del título
    textAlign: 'center',
  };


  const [userCoordinates, setUserCoordinates] = useState({ lat: null, lng: null });
  const [userLocation, setUserLocation] = useState(null);
  const [distancias, setDistancias] = useState([]);

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
    {
      title: 'Farmacia 10',
      position: {
        lat: 19.468793813457868,
        lng: -99.12621981965374,
      },
    },
  ],[]);


  const handleUpdateLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const userLocation = { lat: latitude, lng: longitude };
  
        // Actualizar las coordenadas del usuario en el estado
        setUserLocation(userLocation);
  
        // Calcular la distancia para cada farmacia
        const distances = farmacias.map((farmacia) => {
          const distance = calculateDistance(userLocation, farmacia.position);
          return { nombre: farmacia.title, distancia: distance };
        });
  
        // Guardar las distancias en el estado
        setDistancias(distances);
  
        // Actualizar las coordenadas del usuario en el estado para mostrarlas
        setUserCoordinates({ lat: latitude, lng: longitude });
      }, (error) => {
        console.error(`Error getting user location: ${error.message}`);
      });
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
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distancia en kilómetros
  
    return distance.toFixed(2); // Redondear a 2 decimales
  };

  
  /*useEffect(() => {
    if (userLocation) {
      const distances = farmacias.map((farmacia) => {
        const distance = calculateDistance(userLocation, farmacia.position);
        return { nombre: farmacia.title, distancia: distance };
      });
      setDistancias(distances);
    }
  }, [userLocation, farmacias]);*/
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

  return (
    <div>
      {/* Mapa para Farmacia Guadalajara */}
      <div style={containerStyles}>
        <h2 style={titleStyles}>Farmacia Guadalajara</h2>
        <div style={infoStyles}>
          <p>
            Página web: <a href={mapData[1].website}>{mapData[1].website}</a>
            <br />
            Teléfono: {mapData[1].telefono}
            <br />
            <div style={{ textAlign: 'center' }}>
            {userCoordinates.lat !== null && userCoordinates.lng !== null && (
              <p>Coordenadas del usuario: {userCoordinates.lat}, {userCoordinates.lng}</p>
            )}
          </div>
          
      <button onClick={handleUpdateLocation}>Actualizar Ubicación</button>
      {/* Código para mostrar las distancias en pantalla */}
      {distancias.map((farmacia, index) => (
       <div key={index}>
       <p>{`Farmacia: ${farmacia.nombre} - Distancia: ${farmacia.distancia} km`}</p>
       <p>{`Coordenadas: ${farmacias[index].position.lat}, ${farmacias[index].position.lng}`}</p>
     </div>
      ))}
          </p>
        </div>
          <div style={mapStyles}>
            <Map
              google={props.google}
              zoom={12}
              initialCenter={{
                lat: 19.4904923,
                lng: -99.1325889,
              }}
            >
              <Marker
              title="Farmacia 1" // Nombre del marcador
                position={{
                  lat: 19.557804757720046,
                  lng: -99.13472619929715,
                }}
              />
              <Marker
              title="Farmacia 2" // Nombre del marcador
                position={{
                  lat: 19.544052595388877, 
                  lng: -99.14596681127203,
                }}
              /> 
               <Marker
               title="Farmacia 3" // Nombre del marcador
                position={{
                  lat: 19.540317347632964,
                  lng: -99.15354455538231,
                }}
              /> 
               <Marker
               title="Farmacia 4" // Nombre del marcador
                position={{
                  lat: 19.52605982230629, 
                  lng: -99.15288197436556,
                }}
              /> 
               <Marker
               title="Farmacia 5" // Nombre del marcador
                position={{
                  lat: 19.511662371013756, 
                  lng: -99.14042093752664,
                }}
              />
               <Marker
               title="Farmacia 6" // Nombre del marcador
                position={{
                  lat: 19.513305916639574, 
                  lng: -99.13453810753077,
                }}
              />
               <Marker
               title="Farmacia 7" // Nombre del marcador
                position={{
                  lat: 19.50151981477475, 
                  lng: -99.09593827140269,
                }}
              /> 
               <Marker
               title="Farmacia 8" // Nombre del marcador
                position={{
                  lat:  19.488394579943915,
                  lng:  -99.10756048073203,
                }}
              />
               <Marker
               title="Farmacia 9" // Nombre del marcador
                position={{
                  lat: 19.483184660322387, 
                  lng: -99.11955030634091,
                }}
              />
              
              <Marker
              title="Farmacia 10" // Nombre del marcador
                position={{
                  lat: 19.468793813457868,  
                  lng: -99.12621981965374,
                }}
              />
              
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
      </div>

      {nearestPharmacyCoordinates && (
      <div style={containerStyles}>
        <h2 style={titleStyles}>Farmacia más cercana</h2>
        <div style={mapStyles}>
          <Map
            google={props.google}
            zoom={12}
            initialCenter={
              nearestPharmacyCoordinates
                ? {
                    lat: nearestPharmacyCoordinates.lat,
                    lng: nearestPharmacyCoordinates.lng,
                  }
                : {
                    lat: 19.4904923,
                    lng: -99.1325889,
                  }
            }
          >
            {/* Marcadores y polígonos del mapa de la farmacia más cercana */}
            {nearestPharmacyCoordinates && (
              <Marker
                position={{
                  lat: nearestPharmacyCoordinates.lat,
                  lng: nearestPharmacyCoordinates.lng,
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
      </div>
    )}
    
  
      {/* Mapa para Farmacia Similares */}
      <div style={containerStyles}>
        <h2 style={titleStyles}>Farmacia Similares</h2>
        <div style={infoStyles}>
          <p>
            Página web: <a href={mapData[1].website}>{mapData[1].website}</a>
            <br />
            Teléfono: {mapData[1].telefono}
            <br />
          {userLocation && (
            <span>Distancia: {calculateDistance(userLocation.lat, userLocation.lng, mapData[1].lat, mapData[1].lng)} km</span>
          )}
          </p>
           </div>
         <div style={mapStyles}>
            <Map
              google={props.google}
              zoom={12}
              initialCenter={{
                lat: 19.506388,
                lng: -99.144676,
              }}
            >
              <Marker
                position={{
                  lat: 19.559799169989848, 
                  lng: -99.13240222208009,
                }}
              />
              <Marker
                position={{
                  lat: 19.556257838568335, 
                  lng: -99.13553081023781,
                }}
              />
              <Marker
                position={{
                  lat: 19.52711734270038,  
                  lng: -99.14434183629234,
                }}
              />
              <Marker
                position={{
                  lat: 19.52074657348867,  
                  lng: -99.1589503797686,
                }}
              />
              <Marker
                position={{
                  lat: 19.506388358140953,  
                  lng: -99.14479131425924,
                }}
              />
              <Marker
                position={{
                  lat: 19.493433911475247,  
                  lng: -99.14886208049329,
                }}
              />
              <Marker
                position={{
                  lat: 19.494920338307875,  
                  lng: -99.12533026214066,
                }}
              />
              <Marker
                position={{
                  lat: 19.48474574138641, 
                  lng: -99.14865749568096,
                }}
              />
              <Marker
                position={{
                  lat: 19.476153972055794, 
                  lng: -99.13751296756165,
                }}
              />
              <Marker
                position={{
                  lat: 19.47700521032731, 
                  lng: -99.12492675658966,
                }}
              />
              <Marker
                position={{
                  lat: 19.47123894822558, 
                  lng: -99.1227057326238,
                }}
              />
              <Marker
                position={{
                  lat: 19.48043910482022, 
                  lng: -99.11528838527802,
                }}
              />
              <Marker
                position={{
                  lat: 19.469374301583205,  
                  lng: -99.09982652338921,
                }}
              />
              <Marker
                position={{
                  lat: 19.45853500785219,  
                  lng: -99.10620491137666,
                }}
              />
              <Marker
                position={{
                  lat: 19.451455262423703, 
                  lng: -99.09715822052006,
                }}
              />
              <Marker
                position={{
                  lat: 19.45365086031264,  
                  lng: -99.0864063965821,
                }}
              />
              <Marker
                position={{
                  lat: 19.464703582778128, 
                  lng: -99.05855239917025,
                }}
              />
              <Marker
                position={{
                  lat: 19.496847875358757, 
                  lng: -99.08786261749079,
                }}
              />
              <Marker
                position={{
                  lat: 19.506980880557848,  
                  lng: -99.09021158983029,
                }}
              />
              <Marker
                position={{
                  lat: 19.46803494881982,   
                  lng: -99.08374201070642,
                }}
              />
              <Marker
                position={{
                  lat: 19.54306623987772,   
                  lng: -99.1383803408997,
                }}
              />
              <Marker
                position={{
                  lat: 19.53077007932635,    
                  lng: -99.15484793511504,
                }}
              />
             

              
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
        
      </div>
  

      {/* Farmacia Similares */}
      <div style={containerStyles}>
        <h2 style={titleStyles}>Farmacia del ahorro </h2>
        <div style={infoStyles}>
          <p>
            Página web: <a href={mapData[1].website}>{mapData[1].website}</a>
            <br />
            Teléfono: {mapData[1].telefono}
            <br />
          {userLocation && (
            <span>Distancia: {calculateDistance(userLocation.lat, userLocation.lng, mapData[1].lat, mapData[1].lng)} km</span>
          )}
          </p>
          </div>
          <div style={mapStyles}>
            <Map
              google={props.google}
              zoom={12}
              initialCenter={{
                lat: 19.5060043,
                lng: -99.136207,
              }}
            >
              <Marker
                position={{
                  lat: 19.5060043,
                  lng: -99.136207,
                }}
              />
              
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
        
      </div>
    </div>
  ); 

}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCCgPfn4jH9TEz7dqVu_P1SQyh2KBgJbKU', // Tu clave de API
})(Contacto);
