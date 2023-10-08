import React, { useEffect, useState } from "react";

import { nunito } from "next/font/google";

import Image from "next/image";

const TITLEPRINCIPAL = "Le lien entre le monde organique et le monde numérique";
const PARAGRAPHECARROUSEL =
  "Nous accompagnons les entreprises dans leur transformation numérique : Conseil, formation et réalisation IT";

function CarrouselsPage() {
  const [carrousels, setCarrousels] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/carrousels")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Données en chargement");
        }
        return response.json();
      })
      .then((data) => {
        setCarrousels(data);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <div>
      <h1>{TITLEPRINCIPAL}</h1>
      <p>{PARAGRAPHECARROUSEL}</p>
      {carrousels.map((carrousel) => (
        <div key={carrousel.id}>
          <Image
            src={carrousel.img}
            alt={carrousel.alt}
            height={200}
            width={200}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
}

export default CarrouselsPage;
