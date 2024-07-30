"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);
  const linkRefs = useRef([]);

  // useEffect(() => {
  //   const navElement = navRef.current;

  //   // Navbar background color change on scroll
  //   ScrollTrigger.create({
  //     trigger: navElement,
  //     start: 'top top',
  //     end: 'bottom top',
  //     onEnter: () => gsap.to(navElement, { backgroundColor: '#ffffff', duration: 0.5 }),
  //     onLeaveBack: () => gsap.to(navElement, { backgroundColor: 'aliceblue', duration: 0.5 }),
  //   });

  //   // Links slide-in effect
  //   gsap.fromTo(
  //     linkRefs.current,
  //     { x: -50, opacity: 1 },
  //     {
  //       x: 0,
  //       opacity: 1,
  //       stagger: 0.2,
  //       duration: 1,
  //       ease: 'power2.out',
  //       scrollTrigger: {
  //         trigger: navElement,
  //         start: 'top top',
  //       },
  //     }
  //   );
  // }, []);

  return (
    <nav
      ref={navRef}
      className=" bg-[#fff]  shadow-lg shadow-gray-500/50 w-full top-0 left-0 z-50 transition-all h-[80px] flex items-center duration-500"
    >
      <div className="flex items-center justify-between h-16 mx-auto w-[87%]  ">
        <div className="flex items-center justify-between  w-full">
          <div className="flex-shrink-0">
            <div>Noman Gulistan</div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {["Home", "About", "Services", "Contact"].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  ref={(el) => (linkRefs.current[index] = el)}
                  className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
