import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

import I1 from "../public/assets/Curry.webp";
import I2 from "../public/assets/Appetizer.webp";
import I3 from "../public/assets/Biryani.webp";
import I4 from "../public/assets/Desserts.webp";
import bgPat from "../public/assets/Pattern.svg";

import { morgan, pangolin, stan } from "@/pages/_app";

const specialData = [
  {
    title: "Curries",
    desc: "Authentic South Indian curries bursting with flavor & spice. From creamy butter chicken to tangy fish curry, each dish is expertly crafted.",
    img: I1,
    blurData: "LHHwPu~AFx-o9#kqkCf,tRw|=_t6",
  },
  {
    title: "Appetizers",
    desc: "Our appetizers are the perfect way to kick off your meal. A carefully curated selection of South Indian specialties, they’re more than just a pre-meal snack.",
    img: I2,
    blurData: "LVIX%9RktmW-DhxsV@xZ?wIUIBaK",
  },
  {
    title: "Biryanis",
    desc: "A feast for your senses. A perfect blend of fragrant rice, tender meat, & aromatic spices. After all, it’s Masala Town.",
    img: I3,
    blurData: "LMIELZ~W_NNK=_NGt7s:AdR:IqWC",
  },
  {
    title: "Desserts ",
    desc: " End your meal with authentic Indian sweet treats that delight your tastebuds!.",
    img: I4,
    blurData: "LIH,O}5S1KMy~AEkOAa11iEN=]s9",
  },
];

const Special = () => {
  return (
    <div
      id="special"
      className="bg-black h-full w-full py-8 scroll-mt-24 relative z-0"
      // bg-[url('/assets/Pattern.svg')] bg-cover bg-no-repeat opacity-80
    >
      <div className="absolute w-full h-full inset-0 overflow-hidden opacity-20 -z-10">
        <Image
          src={bgPat}
          alt="Pattern"
          layout="fill"
          className="object-cover"
        />
      </div>
      <div>
        {/* MD+ */}
        <h2
          className={`max-w-5xl mx-auto text-white text-left md:text-center md:text-6xl text-4xl px-4 pb-6 z-10 ${stan.className}`}
        >
          {`Treat yourself to our mouth-watering house specials`}
        </h2>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="hidden sm:flex flex-wrap justify-center gap-4 md:gap-8 xl:gap-12 py-8 px-6 "
        >
          {specialData.map((el) => (
            <div key={el.title} className="relative group/item">
              <div
                className={`absolute w-full bottom-0 left-0 h-[40%] bg-white/80 backdrop-blur-lg group-hover/item:-translate-x-6 group-hover/item:-translate-y-6 rounded-lg transition-all duration-300 ease-linear grid place-items-center invisible group-hover/item:visible  `}
              >
                <div className="px-4">
                  <h2 className={`text-lg ${stan.className}`}>{el.title}</h2>
                  <p className="text-sm">{el.desc}</p>
                </div>
              </div>
              <div className="flex flex-col justify-center rounded-lg p-2 sm:max-w-xs border-2 border-white hover:border-primeBeige">
                <Image
                  src={el.img}
                  alt={el.title + "Image"}
                  className="rounded-lg h-96 w-full"
                  placeholder="blur"
                  blurDataURL={el.blurData}
                />
              </div>
            </div>
          ))}
        </div>
        <h2
          className={`hidden md:block text-center sm:text-xl md:text-2xl lg:text-4xl text-primeBeige ${pangolin.className}`}
        >
          * We use boneless and skinless Chicken
        </h2>
        {/* Smaller Devices */}
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="px-2 sm:hidden block"
        >
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {specialData.map((el) => (
              <SwiperSlide key={el.title}>
                <div className="relative">
                  <div className="absolute w-full bottom-0 left-0 h-[38%] bg-white/90 rounded-lg transition-all duration-300  grid place-items-center ">
                    <div className=" text-black  px-5 rounded-lg">
                      <h2 className={`text-base font-bold `}>{el.title}</h2>
                      <p className="text-sm">{el.desc}</p>
                    </div>
                  </div>
                  <div
                    key={el.title}
                    className=" rounded-lg p-2 sm:max-w-xs border border-primeBeige"
                  >
                    <Image
                      src={el.img}
                      alt={el.title + "Image"}
                      className="rounded-lg h-96 w-full"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <h2
            className={`text-3xl text-primeBeige pl-4 pt-4 ${pangolin.className}`}
          >
            * We use boneless and skinless Chicken
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Special;
