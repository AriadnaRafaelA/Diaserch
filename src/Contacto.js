import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function Contacto(props) {
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
      lat: 19.4904923,
      lng: -99.1325889,
      website: 'https://www.farmaciasanpablo.com.mx/',
      telefono: '800 0726 722',
    },
    {
      title: 'Farmacias Guadalajara',
      lat: 19.5060043,
      lng: -99.136207,
      website: 'https://www.farmaciasguadalajara.com/',
      telefono: '(33) 3818 1818',
    },
    {
      title: 'Farmacias Similares',
      lat: 19.506388,
      lng: -99.144676,
      website: 'https://www.farmaciasdesimilares.com/',
      telefono: '800 911 6666',
    },
  ];

  const titleStyles = {
    marginTop: '10px', // Ajusta el margen superior del título
    textAlign: 'center',
  };

  return (
    <div>
      {mapData.map((data, index) => (
        <div key={index} style={containerStyles}>
             <h2 style={titleStyles}>{data.title}</h2>
             <div style={infoStyles}>
              <p>
                Página web: <a href={data.website}>{data.website}</a>
                <br />
                Teléfono: {data.telefono}
              </p>
            </div>
          <div style={mapStyles}>
            <Map
              google={props.google}
              zoom={14}
              initialCenter={{
                lat: data.lat,
                lng: data.lng,
              }}
            >
              <Marker
                position={{
                  lat: data.lat,
                  lng: data.lng,
                }}
              />
            </Map>
          </div>
         
        </div>
      ))}
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCCgPfn4jH9TEz7dqVu_P1SQyh2KBgJbKU', // Tu clave de API
})(Contacto);
