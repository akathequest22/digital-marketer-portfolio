import Container from "../Container";

const About = () => {
  return (
    <Container>
      <section className="bg-[rgba(143,214,148,0.2)] p-10 md:p-20 flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">About Us</h2>
        <p className="text-lg text-gray-600 max-w-3xl">
          We are a team of dedicated digital marketers passionate about
          delivering exceptional results. Our expertise spans across various
          digital marketing strategies, including SEO, PPC, social media, and
          content marketing. We pride ourselves on crafting personalized
          marketing solutions that drive growth and engage audiences. With a
          focus on innovation and analytics, we ensure your brand stands out in
          the digital landscape.
        </p>
      </section>
    </Container>
  );
};

export default About;
