import Image from "next/image";
import React from "react";

import catImg from "../public/assets/Catering.webp";
import { stan } from "@/pages/_app";
import Link from "next/link";

const Catering = () => {
  return (
    <div className="bg-black md:py-16 py-8 ">
      <div
        id="catering"
        className=" h-full scroll-mt-44 max-w-full mx-auto w-11/12"
      >
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-2 group/item">
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="h-full w-full"
          >
            <Image
              src={catImg}
              alt="Msala Town catering service"
              className="rounded-md h-full w-full object-cover"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className="px-2 bg- md:py-8 py-3 rounded-3xl text-white grid place-items-center "
          >
            <div className="md:p-8">
              <h2 className={`md:text-6xl text-4xl pb-4 ${stan.className}`}>
                Add a flavorsome twist to your events!
              </h2>
              <p className="md:text-base text-sm">
                {`At Masala Town, we believe that food is only one part of the
              equation. That’s why offer catering services with unparalleled
              hospitality. Be it corporate events or private parties, we provide
              a menu that suits your unique needs. At our catering events, each
              item is prepared with care, using the freshest ingredients and
              traditional cooking techniques. We go above and beyond to provide
              the highest level of hospitality, making sure every guest feels
              welcomed and valued. We’ll take care of everything - you focus on
              enjoying your event.`}
              </p>
              <div className="pt-4">
                <h2 className="md:text-xl text-lg text-primeBeige font-bold">
                  Contact us at :{" "}
                  <Link href="tel:+61 08 9848 1665" className="hover:underline">
                    +61 08 9848 1665
                  </Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catering;
