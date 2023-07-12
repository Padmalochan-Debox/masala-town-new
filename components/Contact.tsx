import React, { useRef, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Image from "next/image";
import { morgan, pangolin, stan } from "@/pages/_app";
import contactImg from "../public/assets/contact.png";
const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const form = useRef<null | HTMLFormElement>(null);
  function handleSubmit(e: any) {
    e.preventDefault();
    if (typeof form !== null) {
      if (
        !contact.name ||
        !contact.phone ||
        !contact.email ||
        !contact.message
      ) {
        toast.error("Please provide all the details!");
        return;
      }

      if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          contact.email.toString()
        )
      ) {
        toast.error("Please provide a valid email id.");
        return;
      }

      try {
        fetch("/api/contact", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contact),
        });
        toast.success(
          "Your enquiry has been submitted successfully. We'll get back to you at our earliest.",
          { duration: 3000 }
        );
      } catch (e) {
        toast.error("Something went wrong. Please try again later.");
      }
    }
    setContact({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  }
  return (
    <div id="contact" className="isolate bg-black scroll-mt-16   ">
      <div className="grid md:grid-cols-12 grid-cols-1">
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          className="md:col-span-7 col-span-1 md:order-none order-1"
        >
          <Image
            src={contactImg}
            alt="Telephone covered by masala to contact masala town for events"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="md:col-span-5 col-span-1 grid place-items-center md:order-none order-2 ">
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className="bg-primeYellow max-w-4xl mx-auto py-12 lg:px-16 px-4 rounded-2xl "
          >
            <div className="mx-auto max-w-2xl text-left md:text-center text-white">
              <h2 className={`md:text-6xl  text-4xl ${stan.className}`}>
                Contact Us
              </h2>
              <p className="mt-2 text-sm leading-8 ">
                {`For any further queries, fill out the form and we will get back to you!`}
              </p>
            </div>
            <form
              ref={form}
              name="contact"
              encType="multipart/form-data"
              className="mx-auto mt-8 max-w-xl sm:mt-10"
            >
              <div className="grid grid-cols-1  gap-y-4">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6  text-white"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      value={contact.name}
                      onChange={(e) =>
                        setContact((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      autoComplete="given-name"
                      className="block w-full text-black !bg-white/80 rounded-md px-3.5 py-2 shadow-sm sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contact.email}
                      onChange={(e) =>
                        setContact((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      autoComplete="email"
                      className="block w-full text-black !bg-white/80 rounded-md px-3.5 py-2 shadow-sm sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 mb-2.5 text-white "
                  >
                    Phone number
                  </label>
                  <PhoneInput
                    onChange={(v, c, e, phone) => {
                      setContact({
                        ...contact,
                        phone: phone,
                      });
                    }}
                    inputProps={{
                      name: "phone",
                    }}
                    value={contact.phone}
                    country={"au"}
                    inputClass="!w-full !py-5 !bg-[#ccc] !rounded-md !outline-none"
                    // inputClass="!block !w-full !rounded-md !border-0 !px-3.5 !py-5  !shadow-sm !ring-1 !ring-inset !ring-gray-300 !placeholder:text-gray-400 !sm:text-sm !sm:leading-6"
                    containerClass="!text-black"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      value={contact.message}
                      onChange={(e) =>
                        setContact((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      rows={3}
                      className="block w-full text-black !bg-white/80 rounded-md px-3.5 py-2 shadow-sm sm:text-sm sm:leading-6"
                    />{" "}
                    {/* !focus:ring-2 !focus:ring-inset !focus:ring-indigo-600 */}
                  </div>
                </div>
              </div>
              <div className="mt-10">
                {/* <div className="relative">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="block mx-auto hover:bg-white/80 bg-black  text-center hover:text-black text-white border font-bold px-5 py-1.5 rounded-md transition-colors duration-150"
                    // hover:shadow-[0px_0px_15px_14px_rgb(255,255,255,0.3)]
                  >
                    {`Submit`}
                  </button>
                </div> */}
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="relative block mx-auto group  cursor-pointer w-fit"
                >
                  <span
                    className={`absolute inset-0 transition-transform group-hover:translate-x-1 group-hover:translate-y-1 bg-primeBeige  translate-y-0 translate-x-0 rounded-md`}
                  ></span>

                  <span
                    className={`relative inline-block px-5 py-2 text-sm font-bold tracking-widest text-white border border-current group-active:text-opacity-75 rounded-md bg-black`}
                  >
                    Submit
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
