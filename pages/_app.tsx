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
        <Link href="/" target={"_blank"}>
          <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-10">
            <button className="text-lg bg-primeBeige hover:bg-black  text-white border-2 font-bold px-4 py-1.5 rounded-md transition-colors duration-200">
              Order Now
            </button>
          </div>
        </Link>
      </Layout>
    </div>
  );
}
