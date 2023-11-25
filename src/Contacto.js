import React, { useEffect, useState } from 'react';
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

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radio de la Tierra en kilómetros
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distancia en kilómetros
    return distance.toFixed(2); // Redondear a 2 decimales
  };

  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
      }, (error) => {
        console.error(`Error getting user location: ${error.message}`);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div>
      {mapData.map((data, index) => {
        const distance = userLocation ? calculateDistance(userLocation.lat, userLocation.lng, data.lat, data.lng) : null;
        return (
          <div key={index} style={containerStyles}>
            <h2 style={titleStyles}>{data.title}</h2>
            <div style={infoStyles}>
              <p>
                Página web: <a href={data.website}>{data.website}</a>
                <br />
                Teléfono: {data.telefono}
                <br />
                {userLocation && <span>Distancia: {distance} km</span>}
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
        );
      })}
    </div>
  );
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCCgPfn4jH9TEz7dqVu_P1SQyh2KBgJbKU', // Tu clave de API
})(Contacto);
