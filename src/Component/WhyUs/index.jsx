import React from "react";
import Container from "../Container";
import Card from "../Card";
import Heading from "../Elements/Heading";
import CustomCarousel from "../CustomCrousel";
const values = [
  {
    title: "Innovation",
    description:
      "We embrace new ideas and technologies to stay ahead of the digital marketing curve, ensuring our clients always have a competitive edge.",
  },
  {
    title: "Integrity",
    description:
      "We believe in transparency and honesty in all our dealings, building trust with our clients through ethical practices.",
  },
  {
    title: "Customer Focus",
    description:
      "Our clients are at the heart of everything we do. We tailor our strategies to meet your unique needs and exceed your expectations.",
  },
  {
    title: "Excellence",
    description:
      "We are committed to delivering high-quality results that drive growth and success for our clients' businesses.",
  },
  {
    title: "Collaboration",
    description:
      "We work closely with our clients, fostering partnerships that allow us to achieve the best outcomes together.",
  },
  {
    title: "Excellence",
    description:
      "We are committed to delivering high-quality results that drive growth and success for our clients' businesses.",
  },
  {
    title: "Collaboration",
    description:
      "We work closely with our clients, fostering partnerships that allow us to achieve the best outcomes together.",
  },
  {
    title: "Excellence",
    description:
      "We are committed to delivering high-quality results that drive growth and success for our clients' businesses.",
  },
  {
    title: "Collaboration",
    description:
      "We work closely with our clients, fostering partnerships that allow us to achieve the best outcomes together.",
  },
];
const WhyUS = () => {
  return (
    <Container>
      <Heading mainHeading={"Why Us?"} />

      <center className="text-lg w-full mx-auto text-gray-600 max-w-3xl text-center ">
        As a digital marketer, we understand the importance of having a strong
        online presence. Our team of passionate and dedicated professionals is
        committed to delivering exceptional customer service and quality digital
        marketing solutions. Our mission is to create a seamless and enjoyable
        experience for our clients by offering a wide range of digital marketing
        services tailored to meet your specific needs. We strive to achieve the
        best results for our clients through our innovative strategies and
        expertise.
      </center>
      <div className="  gap-4 mt-10   ">
        <CustomCarousel>
          {values.map((value, index) => (
            <Card
              key={index}
              title={value.title}
              description={value.description}
            />
          ))}
        </CustomCarousel>
      </div>
    </Container>
  );
};

export default WhyUS;
