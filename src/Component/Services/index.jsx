import Container from "../Container";
import Button from "../Elements/Buton";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Web Design",
    skill: "UI/UX",
    description:
      "Our expert team specializes in crafting user-friendly and responsive designs that enhance your online presence and drive engagement.",
    link: "",
    variant: "orange",
  },
  {
    title: "Front-end Development",
    skill: "HTML,CSS",
    description:
      "We specialize in building visually appealing front-end solutions using the latest technologies to enhance your website's performance and usability.",
    link: "",
  },
  {
    title: "BACK-end Development",
    skill: "NodeJS",
    description:
      "Our team excels in creating powerful back-end solutions, integrating databases, and APIs to support seamless and dynamic user experiences.",
    link: "",
    variant: "green",
  },
  {
    title: "Software development",
    skill: "JQUERY",
    description:
      "For various startups and established businesses alike, our exceptional software development company",
    link: "",
  },
  {
    title: "e-commerce solutions",
    skill: "SHOPIFY",
    description:
      "E-commerce solution requires a technically holistic approach and it caters to all aspects including, design, development and e-cart.",
    link: "",
    variant: "green",
  },
  {
    title: "Mobile App development",
    skill: "iOS & Android",
    description:
      "TDAA enjoins a hallmark of projects in mobile application development and contributed to the industry",
    link: "",
    variant: "orange",
  },
];

const Services = () => {
  return (
    <Container>
      <div className="ourservices py-12" id="service">
        <div className="flex  text-center justify-center items-center gap-12 mb-8">
          <h2 className="text-4xl text-center font-bold text-[#062d3e]">
            Services We Provide
          </h2>
          <div className="loader"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ourservices-cards">
          {services.map((props, i) => (
            <ServiceCard key={i} {...props} initialColorIndex={i % 5} />
          ))}
        </div>
        <Button className="mt-12" bnText={" Let’s Collaborate!"} isPri={true} />
      </div>
    </Container>
  );
};

export default Services;
