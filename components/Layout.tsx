import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

function Layout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Used for page transition
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <div className="min-h-[100vh] ">
      <Head>
        <title>Masala Town - Multi Cuisine Dining & Catering</title>

        <meta name="description" content="Multi Cuisine Dining & Catering" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/Favicon.png" /> */}
      </Head>
      {loading ? (
        <div className="w-screen h-screen fixed top-0 left-0 grid place-items-center transition-all visible  z-50">
          {/* <InfinitySpin width="200" color="#1a7780" /> */}
          Loading..
        </div>
      ) : (
        <>
          <Toaster />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Layout;
