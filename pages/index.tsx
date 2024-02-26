import dynamic from "next/dynamic";
const Herosection = dynamic(() => import("../components/Herosection"));
const About = dynamic(() => import("../components/About"));
const Special = dynamic(() => import("../components/Special"));
const Catering = dynamic(() => import("../components/Catering"));
const Buffet = dynamic(() => import("../components/Buffet"));
const Contact = dynamic(() => import("../components/Contact"));
// const Testimonials = dynamic(() => import("../components/Testimonials"));

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
