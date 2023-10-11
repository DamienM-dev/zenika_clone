import Image from "next/image";
import { useEffect, useState } from "react";

// IMPORT LIBRAIRIE

import { Swiper, SwiperSlide } from "swiper/react";

// CSS SWIPER

import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Partenaire() {
  const PARAGRAPHE =
    "Nous nous associons avec les piliers de la tech. Cette relation de proximité vous assure des formations officielles données par des consultant(e)s certifié(e)s ainsi qu'un accès privilégié à nos expertises sur ces technologies et produits, tout en restant neutres, dans le respect de notre devoir de conseil.";
  const TITRE = "Nos partenaires";

  const [partenaires, setPartenaires] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/partenaires")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Une erreur est inervenue pendant le chargement des données",
          );
        }
        return response.json();
      })
      .then((data) => {
        setPartenaires(data);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  }, []);
  return (
    <div className="bg-greyColor py-2 pb-4 pt-10">
      <h2 className="mb-9 text-center text-2xl font-bold leading-10">
        {TITRE}
      </h2>
      <p className="px-8 pt-10 text-center text-xl leading-7">{PARAGRAPHE}</p>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={2}
        className="mySwiper"
      >
        {partenaires.map((partenaire) => (
          <SwiperSlide key={partenaire.id}>
            <div className="flex justify-center">
              <Image
                src={partenaire.logo}
                alt={partenaire.alt}
                width={112}
                height={112}
                objectFit="cover"
                className="mt-10 rounded-full"
              />
            </div>
            <h3 className="font-semi-bold mt-6 h-7 text-center text-xl leading-7">
              {partenaire.nom}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Partenaire;
