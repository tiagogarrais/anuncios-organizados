import React from "react";
import { useGeolocated } from "react-geolocated";

const CoordGps = () => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

    return !isGeolocationAvailable ? (
        <div>Seu navegador parece não suportar geolocalização</div>
    ) : !isGeolocationEnabled ? (
        <div>Aguarde 5 segundos ou habilite a geolocalização no seu navegador</div>
    ) : coords ? (
        
<div>
    latitude: {coords.latitude}<br/>
    longitude: {coords.longitude}<br/>
    altitude: {coords.altitude}<br/>
    heading: {coords.heading}<br/>
    velocidade: {coords.speed}<br/>
    <a href={`https://maps.google.com/?q=${coords.latitude},${coords.longitude}`} target="_blank">Google Maps</a>
</div>
               
    ) : (
        <div>Buscando dados de localização&hellip; </div>
    );
};

export default CoordGps;