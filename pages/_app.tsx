import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import localFont from "next/font/local";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  Rubik_Pixels,
  Pangolin,
  Creepster,
  Raleway,
  Fredericka_the_Great,
} from "next/font/google";
import { useEffect } from "react";
// locla font
export const morgan = localFont({
  src: "../public/fonts/MorganaPersonalUseRegular-mL39a.ttf",
});
export const stan = localFont({
  src: "../public/fonts/Stangith-nR0vV.ttf",
});

// goolge font
export const pangolin = Pangolin({
  weight: "400",
  subsets: ["latin"],
});
export const raleway = Raleway({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({});
    document.addEventListener(
      "scroll",
      (e) => {
        Aos.refresh();
      },
      { capture: true, passive: true }
    );
    return () =>
      document.removeEventListener("scroll", (e) => {
        Aos.refresh();
      });
  }, []);
  return (
    <div className={raleway.className}>
      <Layout>
        <Component {...pageProps} />
        {/* <Link href="https://masalatown.com.au/order-now" target={"_blank"}>
          <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-10">
            <button className="relative block mx-auto group  cursor-pointer w-fit">
              <span
                className={`absolute inset-0 transition-transform group-hover:translate-x-1 group-hover:translate-y-1 bg-primeBeige  translate-y-0 translate-x-0 rounded-md`}
              ></span>

              <span
                className={`relative inline-block px-3 py-1.5 text-lg font-bold tracking-widest text-white border border-current group-active:text-opacity-75 rounded-md bg-black`}
              >
                Order Now
              </span>
            </button>
          </div>
        </Link> */}
      </Layout>
    </div>
  );
}
