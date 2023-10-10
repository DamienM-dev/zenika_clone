import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

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
    <div className="mx-8">
      <h1 className="mt-10 text-center text-4xl font-bold leading-10">
        {TITLEPRINCIPAL}
      </h1>
      <p className="font-nunito-light my-5 text-center text-xl leading-6">
        {PARAGRAPHECARROUSEL}
      </p>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {carrousels.map((carrousel) => (
          <SwiperSlide key={carrousel.id}>
            <Image
              src={carrousel.img}
              alt={carrousel.alt}
              height={200}
              width={200}
              layout="responsive"
              objectFit="cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CarrouselsPage;
