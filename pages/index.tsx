import { Inter } from "next/font/google";
import Herosection from "@/components/Herosection";
import About from "@/components/About";
import Special from "@/components/Special";
import Catering from "@/components/Catering";
import Buffet from "@/components/Buffet";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Herosection />
      <About />
      <Special />
      <Catering />
      <Buffet />
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
}
