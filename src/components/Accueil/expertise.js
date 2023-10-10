// IMPORT NEXTJS
import Image from "next/image";
import { useEffect, useState } from "react";

// IMPORT LIBRAIRIE

import { Swiper, SwiperSlide } from "swiper/react";

// CSS SWIPER

import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Expertise() {
  const TITREEXPERTISE = "Nos expertises";

  const [expertises, setExpertises] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/expertises")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Donnée en chargement");
        }
        return response.json();
      })
      .then((data) => {
        setExpertises(data);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  }, []);

  return (
    <div className="bg-greyColor py-2 pb-4 pt-10">
      <div className="h-64">
        <h2 className="mb-10 text-center text-2xl font-bold leading-10">
          {TITREEXPERTISE}
        </h2>

        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={2}
          className="mySwiper"
        >
          {expertises.map((expertise) => (
            <SwiperSlide key={expertise.id}>
              <div className="flex justify-center">
                <Image
                  src={expertise.logo}
                  alt={expertise.alt}
                  width={112}
                  height={112}
                  objectFit="cover"
                />
              </div>
              <h3 className="font-semi-bold mt-6 h-7 text-center font-nunito-light text-xl leading-7">
                {expertise.nom}
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Expertise;
