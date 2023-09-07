import React from 'react';
import { geolocated } from 'react-geolocated';

function GpsForm(props) {
  return (
    <div>
      <h1>Capturar Coordenadas GPS</h1>
      <form>
        <label>Latitude:</label>
        <input type="text" value={props.coords ? props.coords.latitude : ''} readOnly />

        <label>Longitude:</label>
        <input type="text" value={props.coords ? props.coords.longitude : ''} readOnly />
      </form>
    </div>
  );
}

export default GpsForm(props);
