"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import project1 from '../../../public/my-project-img/pr1.png';
import Container from '../Container';

gsap.registerPlugin(ScrollTrigger);

const workItems = [
  // Populate this array with your work data
  {
    image: project1,
    title: 'Project Title 1',
    description: 'Description of project 1',
  },
  {
    image: project1,
    title: 'Project Title 1',
    description: 'Description of project 1 Description of project 1 Description of project 1Description of project 1Description of project 1',
  },
  {
    image: project1,
    title: 'Project Title 1',
    description: 'Description of project 1',
  },
  {
    image: project1,
    title: 'Project Title 1',
    description: 'Description of project 1',
  },
  {
    image: project1,
    title: 'Project Title 1',
    description: 'Description of project 1',
  },
  {
    image: project1,
    title: 'Project Title 1',
    description: 'Description of project 1',
  },
  {
    image: project1,
    title: 'Project Title 1',
    description: 'Description of project 1',
  },
  {
    image: project1,
    title: 'Project Title 1',
    description: 'Description of project 1',
  },
  // Add more items as needed
];

const WorkShowcase = () => {
  const workRef = useRef([]);
  const [selectedWork, setSelectedWork] = React.useState(null);

//   useEffect(() => {
//     workRef.current.forEach((el, index) => {
//       gsap.fromTo(
//         el,
//         {
//           opacity: 0,
//           y: 50,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           scrollTrigger: {
//             trigger: el,
//             start: 'top 80%',
//             end: 'bottom 20%',
//             scrub: true,
//             toggleActions: 'play none none reverse',
//           },
//           delay: index * 0.2,
//         }
//       );
//     });
//   }, []);

  const showPopup = (item) => {
    setSelectedWork(item);
    gsap.fromTo(
      '.work-popup',
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  };

  const hidePopup = () => {
    gsap.to('.work-popup', {
      opacity: 0,
      y: -50,
      duration: 0.5,
      onComplete: () => setSelectedWork(null),
    });
  };

  return (

    //   <section className='curve-section'>
  <>
        <Container>
<div className="work-showcase py-12 px-4">
<div className="flex items-center gap-12 mb-8">
          <h2 className="text-4xl font-bold text-[#062d3e]">
           My Work
          </h2>
          <div className="loader"></div>
        </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {workItems.map((item, index) => (
      <div
        ref={(el) => (workRef.current[index] = el)}
        key={index}
        className="work-item bg-white p-6 rounded-lg shadow-lg cursor-pointer"
        onClick={() => showPopup(item)}
      >
        <Image src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" />
        <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
        <p className="text-gray-600">{item.description.split(' ').slice(0, 10).join(' ')}...</p>
        <button 
          className="mt-4  "
          onClick={(e) => {
            e.stopPropagation();
            showPopup(item);
          }}
        >
          View Details
        </button>
      </div>
    ))}
  </div>

  {selectedWork && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center work-popup">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
        <button 
          className="absolute top-2 right-2 text-gray-700"
          onClick={hidePopup}
        >
          &times;
        </button>
        <Image src={selectedWork.image} alt={selectedWork.title} className="w-full h-64 object-cover rounded-lg mb-4" />
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{selectedWork.title}</h3>
        <p className="text-gray-600 mb-4">{selectedWork.description}</p>
        <button 
          className="mt-4 px-4 py-2 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition"
          onClick={hidePopup}
        >
          Close
        </button>
      </div>
    </div>
  )}
</div>
</Container>
            </>
//   </section>
  
  );
};

export default WorkShowcase;
