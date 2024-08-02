import About from "@/Component/About";
import Card from "@/Component/Card";
import Contact from "@/Component/Contact";
import Footer from "@/Component/Footer";
import HeroSection from "@/Component/HeroSection";
import Navbar from "@/Component/Navbar";
import OurServices from "@/Component/Services";
import WhyUS from "@/Component/WhyUs";
import WorkShowcase from "@/Component/WorkShowcase";
import { Zoom, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />

      <About />
      <WhyUS />
      <OurServices />
      <WorkShowcase />
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
        containerId={"wi-main-toast"}
      />
      <Contact />
      <Footer />
    </>
  );
}
