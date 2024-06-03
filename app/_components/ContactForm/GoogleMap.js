'use client';

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MyGoogleMap = () => {
  const mapStyles = {
    height: '400px',
    width: '100%'
  };

  const [currentLocation, setCurrentLocation] = React.useState({
    lat: null,
    lng: null
  });

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        () => {
          alert('Geolocation failed or was denied.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey='AIzaSyAO-xmnuavXwGep-gVVIt4xmDziNrtIxeI'>
      {currentLocation.lat && currentLocation.lng ? (
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={14}
          center={currentLocation}
        >
          <Marker position={currentLocation} title='Your Location' />
        </GoogleMap>
      ) : (
        <div>Loading...</div>
      )}
    </LoadScript>
  );
};

export default MyGoogleMap;
