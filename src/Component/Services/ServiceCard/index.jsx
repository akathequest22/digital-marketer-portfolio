'use client'


import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ServiceCard = ({
  title,
  skill,
  description,
  className = "",
  style,
  link,
  initialColorIndex, // Add an initialColorIndex prop to control the starting color
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const colors = [
      { borderColor: '#062d3e' }, // lightBlue
      { borderColor: '#acfdd' }, // lightGreen
      { borderColor: '#b5e2e0' }, // lightGreen
      { borderColor: '#16e25f' }, // lightGreen
      { borderColor: '#413839' }, // lightGreen
      { borderColor: '#1aa260' }, // lightGreen
      { borderColor: '#b0bf1a' }, // lightGreen
      { borderColor: '#fedb81' }, // lightGreen
      { borderColor: '#fbb117' }, // lightGreen
      { borderColor: '#6651de' }, // lightGreen
      { borderColor: '#43302e' }, // lightGreen
      { borderColor: '#b83c08' }, // lightGreen
    ];

    const shuffleColors = () => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

      colors.forEach((color, index) => {
        const adjustedIndex = (initialColorIndex + index) % colors.length;
        tl.to(cardRef.current, {
          backgroundColor: colors[adjustedIndex].backgroundColor,
          borderColor: colors[adjustedIndex].borderColor,
          duration: 0.4,
          ease: "power1.inOut",
        });
      });

      return tl;
    };

    shuffleColors();

    return () => {
      gsap.killTweensOf(cardRef.current);
    };
  }, [initialColorIndex]);

  return (
    <div
      ref={cardRef}
      className={`service-card p-6 border-[2px] rounded-lg shadow-lg transform transition-transform hover:-translate-y-2 hover:shadow-2xl ${className}`}
      style={style}
    >
      <p className="service-card-title text-lg font-bold text-[#062d3e]">{title}</p>
      <h3 className="service-card-skill text-xl text-gray-800 mb-2">{skill}</h3>
      <p className="service-card-desc text-gray-800 mb-4">{description}</p>
      <Link href={link}>
        order now
      </Link>
    </div>
  );
};

export default ServiceCard;
