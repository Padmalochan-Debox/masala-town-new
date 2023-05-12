import React from "react";
import Image from "next/image";

import I1 from "../public/assets/I1.jpg";

import bufImg from "../public/assets/Buffet.jpg";
import { morgan, stan } from "@/pages/_app";
import bgPat from "../public/assets/Pattern.svg";
import Link from "next/link";

const specialData = [
  {
    title: "Drinks",
    desc: "Each sip of these will be a refreshing treat.",
    img: I1,
  },
  {
    title: "Curries",
    desc: "Made with flavorful spices and fresh herbs to give your tastebuds an authentic taste.",
    img: I1,
  },
  {
    title: "Biryani",
    desc: "Layered dish that is a blend of authentic spices and fragrant rice.",
    img: I1,
  },
  {
    title: "Appetizers ",
    desc: " A delicious start with special mouth watering flavors like tandoor.",
    img: I1,
  },
];

const Buffet = () => {
  return (
    <div
      id="buffet"
      className="bg-black h-full scroll-mt-24 relative text-white"
    >
      <div className="absolute w-full h-full inset-0 overflow-hidden opacity-20">
        <Image
          src={bgPat}
          alt="Pattern"
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="grid md:grid-cols-12 grid-cols-1">
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="md:col-span-5 col-span-1 grid place-items-center order-2 md:order-none"
        >
          <div className="md:p-12 p-6">
            {" "}
            <h2 className={`md:text-6xl text-4xl pb-4 ${stan.className}`}>
              A Cultural Experience
            </h2>
            <p className="lg:text-base sm:text-base">
              {`Immerse yourself in the vibrant colors and bold flavors of South
              India as you feast on a variety of dishes. Our buffet services are
              an excellent option that caters to everyone's preferences, and
              offers a unique and enjoyable dining experience. Served on a
              banana leaf, it’s more than just a meal - It’s a cultural
              experience.`}
            </p>
            <div className="pt-4">
              <Link
                target="_blank"
                href={"https://goo.gl/maps/cwCA87twgTSXsS2i7"}
              >
                <div className="flex">
                  <button className="relative inline-block group cursor-pointer w-fit">
                    <span
                      className={`absolute inset-0 transition-transform group-hover:translate-x-1 group-hover:translate-y-1 bg-primeBeige  translate-y-0 translate-x-0 rounded-md`}
                    ></span>

                    <span
                      className={`relative inline-block px-2 py-2 text-sm font-bold tracking-widest text-white border border-current group-active:text-opacity-75 rounded-md bg-black`}
                    >
                      <span className="flex justify-center items-center gap-2 ">
                        <span>
                          <Image
                            src={"/assets/send.png"}
                            alt=""
                            width={20}
                            height={20}
                            className="invert group-hover/item:invert-0"
                          />
                        </span>
                        <span>Get Directions</span>
                      </span>
                    </span>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          className="md:col-span-7 col-span-1 order-1 md:order-none"
        >
          <Image
            src={bufImg}
            alt="Buffet of Masala town"
            className="h-full w-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Buffet;
