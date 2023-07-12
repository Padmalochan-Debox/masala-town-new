import Link from "next/link";
import React from "react";

const FourOFour = () => {
  return (
    <div className="grid h-screen px-4 bg-black/90 text-white place-content-center">
      <div className="text-center">
        <h1 className="font-black text-9xl text-primeBeige pb-8">404</h1>

        <p className="text-2xl font-bold tracking-tight sm:text-4xl">
          Page not found!
        </p>

        <p className="mt-4 text-sm">{`Sorry, we couldn’t find the page you’re looking for.`}</p>

        <Link
          href="/"
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-primeBeige rounded hover:bg-primeBeige/80 focus:outline-none focus:ring"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default FourOFour;
