"use client";
import React, { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import project1 from "../../../public/my-project-img/pr1.png";
import project2 from "../../../public/my-project-img/pr2.png";
import Container from "../Container";

const workItems = [
  {
    images: [
      project1,
      project2,
      project1,
      project2,
      project1,
      project1,
      project1,
    ],
    title: "Project Title 1",
    description: "Description of project 1",
  },
  {
    images: [project1, project2, project1],
    title: "Project Title 2",
    description: "Description of project 2",
  },
];

gsap.registerPlugin(ScrollTrigger);

const WorkShowcase = () => {
  const [selectedWork, setSelectedWork] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showPopup = (item) => {
    setSelectedWork(item);
    setCurrentImageIndex(0);
    gsap.fromTo(
      ".work-popup",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  };

  const hidePopup = () => {
    gsap.to(".work-popup", {
      opacity: 0,
      y: -50,
      duration: 0.5,
      onComplete: () => setSelectedWork(null),
    });
  };

  const showNextImage = () => {
    if (selectedWork) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % selectedWork.images.length
      );
    }
  };

  const showPrevImage = () => {
    if (selectedWork) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedWork.images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <>
      <div className="w-full">
        <Container>
          <div className="work-showcase py-12 px-4">
            <div className="flex items-center  justify-center gap-12 mb-8">
              <h2 className="text-4xl font-bold text-[#062d3e]">My Work</h2>
              <div className="loader"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {workItems.map((item, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer overflow-hidden"
                  onClick={() => showPopup(item)}
                >
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg transition-transform duration-300 transform hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <p className="text-white text-lg font-bold">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {selectedWork && (
              <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center work-popup">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full relative">
                  <button
                    className="absolute top-2 text-[20px] font-bold right-2 text-gray-700"
                    onClick={hidePopup}
                  >
                    &times;
                  </button>
                  <div className="relative flex justify-center items-center">
                    <button
                      className="bg-[#062d3e] text-white font-bold px-3 py-1 text-[20px] rounded-full"
                      onClick={showPrevImage}
                    >
                      &lt;
                    </button>
                    <Image
                      src={selectedWork.images[currentImageIndex]}
                      alt={`${selectedWork.title} image ${
                        currentImageIndex + 1
                      }`}
                      className="w-full h-96 object-cover rounded-lg"
                    />
                    <button
                      className="bg-[#062d3e] text-white font-bold px-3 py-1 text-[20px] rounded-full"
                      onClick={showNextImage}
                    >
                      &gt;
                    </button>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-2xl font-semibold mt-2 text-gray-800 mb-2">
                      {selectedWork.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {selectedWork.description}
                    </p>
                    <button
                      className="mt-4 px-4 py-2 bg-[#8fd694] text-white font-semibold rounded hover:bg-[#6ca270] transition"
                      onClick={hidePopup}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>
    </>
  );
};

export default WorkShowcase;
