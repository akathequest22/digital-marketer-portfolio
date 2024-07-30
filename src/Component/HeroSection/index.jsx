"use client";
import Image from "next/image";
import heroImg from "../../../public/my-img/nomi-img.png";
import HeadingDesc from "../HeadingDesc";
import Container from "../Container";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroSecAnimation = useGSAP(() => {
    const tl = gsap.timeline();
    const heading = document.querySelector(".heading");
    const splitedText = heading.textContent.split("");
    const halfValue = splitedText.length / 2;
    var clutter = "";
    splitedText.forEach((elem, i) => {
      if (i <= halfValue) {
        return (clutter += `<span class="a">${elem}</span>`);
      } else {
        return (clutter += `<span class="b">${elem}</span>`);
      }
    });
    heading.innerHTML = clutter;
    gsap.from(".description ", {
      x: -300,
      duration: 0.6,
      opacity: 0,
      stagger: 1,
    });
    gsap.from(".heading .a ", {
      y: 90,
      duration: 0.4,
      opacity: 0,
      stagger: 0.15,
      opacity: 0,
    });
    gsap.from(".heading .b ", {
      y: 90,
      duration: 0.4,
      opacity: 0,
      stagger: -0.15,
      opacity: 0,
    });
    gsap.from(".nomi  ", {
      x: 300,
      duration: 1,
      opacity: 0,
      stagger: 1,
    });
    gsap.from(".btn-ani  ", {
      x: -350,
      duration: 0.8,
      opacity: 0,
    });
  }, []);
  useEffect(() => {
    heroSecAnimation;
  });
  return (
    <Container>
      <div className="  justify-center sm:justify-between mx-auto mt-8 relative grid items-center grid-cols-1 gap-8 lg:grid-cols-[1fr_503px]">
        <div>
          <div className="bg-lay absolute right-[40%] top-30"></div>
          <HeadingDesc
            isUser
            style={{ width: "55%" }}
            descriptionStyle={{ marginTop: "32px" }}
            isButton
            isDesc
            description="Transforming ideas into digital masterpieces, I specialize in creating marketing campaigns that captivate and designs that leave a lasting impression. With expertise in social media management, SEO, and content creation, I turn visions into reality, helping brands not just to grow, but to thrive. Let's collaborate to make your brand unforgettable and take your digital presence to new heights!"
            level={1}
            title="Full Stack Digital Marketer"
            btnText={"Grow Your Buissness Now"}
            headingClassname="heading"
            descriptionClassName="description"
            btnClassName="  btn-ani"
          ></HeadingDesc>
        </div>

        <Image
          className=" mx-auto self-center lg:justify-start nomi"
          alt=""
          src={heroImg}
        />
      </div>
    </Container>
  );
};

export default HeroSection;
