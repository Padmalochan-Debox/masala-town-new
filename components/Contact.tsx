import React, { useRef, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Image from "next/image";
import { morgan, pangolin, stan } from "@/pages/_app";
import bufImg from "../public/assets/I1.jpg";
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
        console.log(e);
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
            src={bufImg}
            alt="Buffet of Masala town"
            className="h-full w-auto object-cover"
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
                      className="block w-full text-black !bg-gray-200 rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6"
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
                      className="block w-full rounded-md border-0 !bg-gray-200 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 mb-2.5 text-white"
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
                    inputClass="!w-full !py-5 !bg-gray-300 !rounded-md"
                    // inputClass="!block !w-full !rounded-md !border-0 !px-3.5 !py-5  !shadow-sm !ring-1 !ring-inset !ring-gray-300 !placeholder:text-gray-400 !sm:text-sm !sm:leading-6"
                    containerClass="!text-black !bg-gray-400 !rounded-md"
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
                      className="block w-full rounded-md !bg-gray-300 border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
                    />{" "}
                    {/* !focus:ring-2 !focus:ring-inset !focus:ring-indigo-600 */}
                  </div>
                </div>
              </div>
              <div className="mt-10">
                {/* <button
                  type="submit"
                  onClick={handleSubmit}
                  className="block mx-auto rounded-md bg-white hover:bg-tertiary text-black px-6 py-2 text-center font-semibold transition duration-300  "
                >
                  {`Submit`}
                </button> */}
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="block mx-auto  hover:bg-primeBeige bg-black  text-center hover:text-white text-white border-2 font-bold px-5 py-1.5 rounded-md transition-colors duration-300"
                >
                  {`Submit`}
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
