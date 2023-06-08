import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import webBanner from "../public/assets/WebBanner4.jpg";
import webBanner2 from "../public/assets/WebBanner2.jpg";

import mobileBanner1 from "../public/assets/MobBanner3.jpg";
import mobileBanner2 from "../public/assets/MobBanner2.jpg";

import { Autoplay, Pagination, Navigation } from "swiper";
import { useRef } from "react";

// import { motion } from "framer-motion";

const homeData = [
  {
    img: webBanner,
    alt: "Home slider1",
  },
  {
    img: webBanner2,
    alt: "Home Slider2",
  },
];

const mobile = [
  {
    img: mobileBanner1,
    alt: "Home slider1",
  },
  {
    img: mobileBanner2,
    alt: "Home Slider2",
  },
];

export default function HeroSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <div className="mt-16 hidden lg:block relative">
        {/* <div className="absolute w-full h-full inset-0 bg-black/50 z-10"></div> */}
        <Swiper
          onInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={false}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          speed={8000}
          modules={[Autoplay, Navigation]}
          className="mySwiper w-full relative"
        >
          {homeData.map((home: any) => {
            return (
              <SwiperSlide
                key={home.alt}
                className="flex justify-center h-full "
              >
                <div className="min-h-screen">
                  <Image
                    src={home.img}
                    className="h-full bg-center"
                    objectFit="cover"
                    layout="fill"
                    alt={home.alt}
                    priority
                  />
                </div>
              </SwiperSlide>
            );
          })}
          <div
            className="hidden md:block absolute md:top-[45%] left-0 md:left-10 z-50 cursor-pointer font-extrabold arrow"
            ref={prevRef}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1252.721"
              height="73.72"
              viewBox="0 0 1852.721 73.72"
            >
              <g
                id="Group_9"
                data-name="Group 9"
                transform="translate(-37.493 -503.14)"
              >
                <path
                  id="Icon_ionic-ios-arrow-back"
                  data-name="Icon ionic-ios-arrow-back"
                  d="M23.956,43.044,51.849,15.172a5.268,5.268,0,0,0-7.462-7.44l-31.6,31.58a5.258,5.258,0,0,0-.154,7.264l31.734,31.8a5.268,5.268,0,0,0,7.462-7.44Z"
                  transform="translate(26.242 496.946)"
                  className="fill-white/60 hover:fill-white transition-all duration-150 ease-in-out"
                />
              </g>
            </svg>
          </div>
          <div
            className="hidden md:block absolute md:top-[45%] right-0 md:right-10 z-50 cursor-pointer arrow"
            ref={nextRef}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1252.721"
              height="73.72"
              viewBox="0 0 1852.721 73.72"
            >
              <g
                id="Group_9"
                data-name="Group 9"
                transform="translate(-37.493 -503.14)"
              >
                <path
                  id="Icon_ionic-ios-arrow-forward"
                  data-name="Icon ionic-ios-arrow-forward"
                  d="M40.687,43.038,12.794,15.167a5.245,5.245,0,0,1,0-7.44,5.312,5.312,0,0,1,7.462,0l31.6,31.58a5.258,5.258,0,0,1,.154,7.264l-31.734,31.8a5.268,5.268,0,0,1-7.462-7.44Z"
                  transform="translate(1836.821 496.948)"
                  className="fill-white/60 hover:fill-white transition-all duration-150 ease-in-out"
                />
              </g>
            </svg>
          </div>
        </Swiper>
      </div>
      {/* Smaller devices */}
      <div className="block lg:hidden ">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={false}
          speed={5000}
          modules={[Autoplay, Navigation]}
          className="mySwiper w-full relative"
        >
          {mobile.map((home: any) => {
            return (
              <SwiperSlide
                key={home.alt}
                className="flex justify-center h-full "
              >
                <div className="min-h-screen">
                  <Image
                    src={home.img}
                    className="h-full bg-center !!object-center"
                    objectFit="cover"
                    layout="fill"
                    alt={home.alt}
                    priority
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
