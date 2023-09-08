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
      <form>
        <h2>Cadastre seu anúncio</h2>
        <article>
          <label>
            <input type="text" placeholder="Título" />
          </label>
          <br />
          <label>
            <textarea rows={5} placeholder="Descrição" />
          </label>
          <br />
          <label>
            Foto:
            <input type="file" />
          </label>
          <br />
          <button>Enviar anúncio</button>
          <br />
          <div>
            latitude: {coords.latitude}
            <br />
            longitude: {coords.longitude}
            <br />
            altitude: {coords.altitude}
            <br />
            heading: {coords.heading}
            <br />
            velocidade: {coords.speed}
            <br />
            <button>
              <a
                href={`https://maps.google.com/?q=${coords.latitude},${coords.longitude}`}
                target="_blank"
              >
                Google Maps
              </a>
            </button>
          </div>
        </article>
      </form>
    </div>
  ) : (
    <div>Buscando dados de localização&hellip; </div>
  );
};

export default CoordGps;
