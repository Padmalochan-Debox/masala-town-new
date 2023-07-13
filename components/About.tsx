import Image from "next/image";
import React from "react";

import aboutImg from "../public/assets/mAbout.webp";
import { stan } from "@/pages/_app";

const About = () => {
  return (
    <div className="bg-black md:py-16 py-8">
      <div
        id="about"
        className=" h-full scroll-mt-44 max-w-full mx-auto w-11/12"
      >
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 lg:gap-12 gap-2 group/item">
          <div className="px-2 bg-lightR md:py-8 py-3 rounded-3xl text-white grid place-items-center">
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className="md:p-8"
            >
              <h2 className={`md:text-6xl text-4xl pb-3 ${stan.className}`}>
                About Masala Town
              </h2>
              <p className="lg:text-base sm:text-base text-sm">
                {`Relish the authentic taste of South Indian food. Located in the
              vibrant suburb of Gosnells, Perth, our menu boasts a wide range of
              dishes. From traditional curries to our signature biryanis, we've
              got everything you need to satisfy your cravings. Pallipalayam,
              Chukka, Perrital, you name it! Our Secret? It’s the Masala. We
              balance those spice blends to create the perfect explosion in your
              mouth. But it’s not only about the food, we’re about the vibes
              too. Our restaurant is the perfect place to sit back and enjoy
              some great company. Whether you're dining in, taking out, or
              ordering online - your taste buds will thank you.`}
              </p>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="1500" className="p-2">
            <Image
              src={aboutImg}
              alt="About Masala Town"
              className="rounded-md h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
