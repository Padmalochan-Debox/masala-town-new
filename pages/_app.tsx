import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import localFont from "next/font/local";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Script from "next/script";
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
        <Head>
          {/* Google Tag Manager */}
          <Script
            id="google-tags"
            strategy="lazyOnload"
            src="https://www.googletagmanager.com/gtag/js?id=G-RFMM690EMR"
          />
          <Script id="google-tags-2" strategy="lazyOnload">
            {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RFMM690EMR');`}
          </Script>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
