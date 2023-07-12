import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";

import { EffectCoverflow, FreeMode, Pagination, Autoplay } from "swiper";
import { morgan } from "@/pages/_app";
import Image from "next/image";
import aboutImg from "../public/assets/mAbout.jpg";

const testimonials = [
  {
    name: "Padmalochan Barik",
    message:
      "Last year I bought whole life insurance through Hari. It is a very challenging decision to make as there are way too many options and exists no one product that fits all needs. Hari was very patient throughout this process and generated multiple quotations to compare pricing vs future benefits or payoffs. His end goal was never focused on selling the product, rather making sure I was fully convinced with my decision. Clearly, he is passionate about his work which makes him engage with his client to the extent that makes the whole process quite seamless.",
    // company: "Operations Manager at Debox Consulting",
    designation: "Life Insurance Customer",
  },
  {
    name: "Shubham Surve",
    message:
      "We are a small firm with less than 10 employees and having group health insurance first time,Hari provided all the information needed on way of working of group health insurance, taken personal care of first timer questions with patience and provided best possible rates when compared with open market, onboarded us and he is available for every questions when called.",
    designation: "Wavesoft, CEO",
  },
  {
    name: "Meet Vyas",
    message:
      "I have worked with this group for my company with 100+ employees for health, Dental and Vision insurance, provided multiple options and explained how each one is different from others, selected a better policy than what we had and at a lesser price, thank you Hari for all your service, it was great and you were available when ever I have a question, it was very easy to move from our current health insurance to new one with out any hiccups.",
    designation: "Ventois, Head of HR , Ventois",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-black py-14 relative">
      <div className="absolute  w-full h-full top-10 left-0">
        <Image
          src={aboutImg}
          alt="Testimonal Image"
          className="h-full w-full object-fill rounded-xl opacity-20"
        />
      </div>
      <div className=" h-full scroll-mt-44 max-w-full mx-auto w-11/12">
        <div>
          <div className="grid md:grid-cols-12 grid-cols-1 max-w-full mx-auto gap-2 md:gap-4">
            <div className="md:col-span-4 col-span-1 bg-tertiar text-white relative h-full w-full">
              {/* <Image
                src={aboutImg}
                alt=""
                className="h-full w-full object-cover rounded-xl opacity-20"
              /> */}
              <div className="">
                <div className="px-3">
                  <h2 className="text-xl"> Word On The Street :</h2>
                  <h2
                    className={`text-4xl lg:text-7xl pb-3 ${morgan.className}`}
                  >
                    Our Customers Love Us
                  </h2>
                  <h2 className="text-lg md:text-lg">
                    {`Learn how we've made a positive impact by our tatse.`}
                  </h2>
                </div>
                {/* <div className="absolute bottom-0 left-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    fill="currentColor"
                    className="opacity-25"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />{" "}
                  </svg>
                </div> */}
              </div>
            </div>
            {/* mobile */}
            <div className="md:col-span-8 col-span-1 relative block lg:hidden bg- rounded-3xl">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                autoplay={{
                  delay: 4000,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper"
              >
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                  {testimonials.map((item, id) => (
                    <SwiperSlide key={item.name} className="p-2">
                      <div
                        key={item.name}
                        className="bg-white/80 h-full w-full rounded-xl text-black lg:p-8 p-4"
                      >
                        <h2 className="text-center text-base">
                          {item.message}
                        </h2>
                        <h2 className="text-center font-bold py-4 text-lg">
                          {item.name}
                        </h2>
                        {/* <h2 className="text-center text-xs">
                        {item.designation}
                      </h2> */}
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </div>
            {/* MD + */}
            <div className="md:col-span-8 col-span-1 md:px-4 py-8 relative hidden lg:block bg-lightRe md:rounded-3xl ">
              <Swiper
                slidesPerView={2}
                spaceBetween={30}
                autoplay={{
                  delay: 4000,
                }}
                pagination={{
                  clickable: true,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                  rotate: 20,
                  stretch: 0,
                  depth: 100,
                  modifier: 2,
                  slideShadows: true,
                }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
              >
                <div className="">
                  {/* grid md:grid-cols-1 grid-cols-1 gap-4 */}
                  {testimonials.map((item, id) => (
                    <>
                      <SwiperSlide key={id}>
                        <div
                          key={item.name}
                          className="bg- text-white h-full rounded-xl py-10 px-4 border-2"
                        >
                          <h2 className="text-center">{item.message}</h2>
                          <h2 className="text-center font-bold pt-4 text-lg ">
                            {item.name}
                          </h2>
                          {/* <h2 className="text-center text-xs">
                          {item.designation}
                        </h2> */}
                        </div>
                      </SwiperSlide>
                    </>
                  ))}
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
