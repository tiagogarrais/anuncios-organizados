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
        <div className="flex flex-wrap">
          <div className="my-1 px-1 w-full md:w-1/2 lg:w-1/3">
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
              <label>
                <input type="checkbox" />
                Casa para venda
              </label>
              <br />
              <label>
                <input type="checkbox" />
                Casa para aluguel
              </label>
              <br />
              <label>
                <input type="checkbox" />
                Terreno para venda
              </label>
              <br />
              <label>
                <input type="checkbox" />
                Terreno para aluguel
              </label>

              <h3>
                Adicionalmente estamos coletando os seguintes dados sobre este
                item:
              </h3>
              <div>
                <h4>Localização</h4>
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
                    Verificar localização no Google Maps
                  </a>
                </button>
                <br />
                <button>Enviar anúncio</button>
              </div>
            </article>
          </div>
        </div>
      </form>
    </div>
  ) : (
    <div>Buscando dados de localização&hellip; </div>
  );
};

export default CoordGps;
