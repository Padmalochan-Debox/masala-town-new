import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/assets/Logo.svg";
import { morgan, stan } from "@/pages/_app";

const Footer = () => {
  return (
    <div id="footer" className="bg-black text-white py-8">
      {/* <div className="pb-6 overflow-clip pt-8">
        <Icon />
      </div> */}
      <div className="grid md:grid-cols-3 grid-cols-1 max-w-6xl mx-auto  gap-10 pt-8 w-11/12 ">
        <div className="text-center md:text-left">
          <h2 className={`pb-4 text-2xl md:text-4xl ${stan.className}`}>
            Get Direction{" "}
          </h2>
          <Link
            target={"_blank"}
            href={"https://goo.gl/maps/cwCA87twgTSXsS2i7"}
          >
            <h2 className="hover:underline">
              {" "}
              Unit 9/2328 Albany Hwy,
              <br /> Gosnells WA 6110, Australia
            </h2>
          </Link>
        </div>
        <div className=" text-center md:text-left">
          <h2 className={`pb-4 text-2xl md:text-4xl ${stan.className}`}>
            Operational Hours
          </h2>
          {/* <h2>Open 7 days a week</h2> */}
          <h2 className="font-bold">Monday to Sunday : </h2>
          <h2>Lunch 11:30 AM to 2:30 PM</h2>
          <h2> Dinner 5:30 PM to 9.30 PM</h2>
        </div>
        <div className="text-center md:text-left">
          <h2 className={`pb-4 text-2xl md:text-4xl ${stan.className}`}>
            Reach Us
          </h2>
          <div>
            <div className="text-sm flex md:justify-start justify-center items-center gap-2">
              <div>
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="fill-white"
                >
                  <path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376" />
                </svg>
              </div>
              <Link href="tel:+61 08 9848 1665" className="hover:underline">
                +61 08 9848 1665
              </Link>
            </div>
            <div className="text-sm flex md:justify-start justify-center items-center gap-2 py-2">
              <div>
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="fill-white"
                >
                  <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
                </svg>
              </div>
              <Link
                href="mailto:masalatown8@gmail.com"
                className="hover:underline"
              >
                masalatown8@gmail.com
              </Link>
            </div>
          </div>
          {/* <h2 className={`md:text-left text-center py-4 font-bold text-lg`}>
            Get Social With Us!
          </h2> */}
          <div className="flex md:justify-start justify-center md:items-center gap-4 mt-1 ">
            <div>
              <Link
                href={"https://www.facebook.com/masalatown8"}
                target={"_blank"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-white hover:fill-primeBeige transition duration-150 ease-in"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </Link>
            </div>
            <div>
              <Link
                href={
                  "https://www.instagram.com/masalatown.perth/?igshid=NTc4MTIwNjQ2YQ%3D%3D"
                }
                target={"_blank"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-white hover:fill-primeBeige transition duration-150 ease-in"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-white mt-4 max-w-6xl mx-auto" />
      <div className="grid place-items-center py-8 text-center px-4  ">
        {/* <Image src={logo} alt={""} className="py-2" /> */}
        <h2 className="text-base md:text-lg pb-2 divide-x">
          <span>
            Copyright © <span className="px-2">{new Date().getFullYear()}</span>
          </span>
          <span className="px-1"> All rights reserved by Masala Town</span>
        </h2>
        <Link href="https://debox.co.in/" target="_blank" className="text-base">
          Designed and developed by{" "}
          <span className="hover:underline text-primeBeige text-sm font-bold">
            {" "}
            Debox Consulting
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
