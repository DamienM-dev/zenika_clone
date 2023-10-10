// IMPORT REACT/NEXT

import Image from "next/image";
import { useState, useEffect } from "react";

// IMPORT LIB

import DOMPurify from "dompurify";

// IMPORT SWIPRE

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

function Reference() {
  const [references, setReferences] = useState([]);
  const [error, setError] = useState(null);

  const TITRE = "Nos références";

  useEffect(() => {
    fetch("/api/references")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Un problème est intervenu pendant le chargement");
        }
        return response.json();
      })
      .then((data) => {
        setReferences(data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }, []);
  return (
    <div className="px-10">
      <h2>{TITRE}</h2>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {references.map((reference) => (
          <SwiperSlide key={reference.id}>
            <div className="rounded-t-lg">
              <Image
                src={reference.img}
                alt={reference.alt}
                height={454}
                width={338}
                objectFit="cover"
                className="w-full rounded-t-lg"
              />
            </div>
            <div className=" h-96 shadow-xl">
              <div className="p-4">
                <h3>{reference.projet}</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(reference.paragraphe),
                  }}
                  className="font-nunito-light"
                ></p>
                <h3>Expertises</h3>
                <p className="font-nunito-light">{reference.langage}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Reference;
