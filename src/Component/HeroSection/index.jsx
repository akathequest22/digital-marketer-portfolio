import Image from "next/image";
import heroImg from "../../../public/my-img/nomi-img.png";
import HeadingDesc from "../HeadingDesc";
import Container from "../Container";

const HeroSection = () => {
  return (
    <Container>
      <div className=" mx-auto mt-28 relative grid items-center grid-cols-1 gap-8 lg:grid-cols-[1fr_503px]">
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
          btnClassName=" w-[400] sm:text-[30px] sm:px-10 text-[22px] rounded-none parallelogram"
        >
        </HeadingDesc>
        </div>
        
        <Image
          className=" mx-auto self-center lg:justify-start max-w-[600px] min-w-[300px]"
          alt=""
          src={heroImg}
          />
          </div>
    </Container>
  );
};

export default HeroSection;
