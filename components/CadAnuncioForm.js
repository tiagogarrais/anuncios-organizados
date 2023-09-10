import Link from "next/link";
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
          <label>
            <input type="number" placeholder="Preço" />
          </label>
          <label>
            <textarea rows={5} placeholder="Descrição" />
          </label>
          <label>
            Foto:
            <input type="file" />
          </label>
          <div className="inboxgroup">
            <label>
              <input type="checkbox" />
              Casa para venda
            </label>
            <label>
              <input type="checkbox" />
              Casa para aluguel
            </label>
            <label>
              <input type="checkbox" />
              Terreno para venda
            </label>
            <label>
              <input type="checkbox" />
              Terreno para aluguel
            </label>
          </div>

          <div>
            <div className="button">
              <Link href="/">Enviar anúncio</Link>
            </div>
          </div>
        </article>
      </form>
    </div>
  ) : (
    <div>Buscando dados de localização&hellip; </div>
  );
};

export default CoordGps;
