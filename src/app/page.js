import About from "@/Component/About";
import Contact from "@/Component/Contact";
import Footer from "@/Component/Footer";
import Gallery from "@/Component/Gallery";
import HeroSection from "@/Component/HeroSection";
import Navbar from "@/Component/Navbar";
import OurServices from "@/Component/Services";
import WorkShowcase from "@/Component/WorkShowcase";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />

      <About />
      <OurServices />
      <WorkShowcase />
      <Contact />
      <Footer />
    </>
  );
}
