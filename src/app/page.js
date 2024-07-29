import HeroSection from "@/Component/HeroSection";
import Navbar from "@/Component/Navbar";
import OurServices from "@/Component/Services";
import WorkShowcase from "@/Component/WorkShowcase";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurServices />
      <WorkShowcase />
    </>
  );
}
