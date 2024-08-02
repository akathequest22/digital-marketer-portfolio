"use client";

import Image from "next/image";
import joinUS from "../../../public/my-img/joinus.jpg";
import Form from "../Form";

// import Map from "../Map";

const ContactUsPage = () => {
  return (
    <div>
      <section className=" p-10 md:p-20 text-center">
        <div className="flex items-center  justify-center gap-12 mb-8">
          <h2 className="text-4xl font-bold text-[#062d3e]">Contact Us</h2>
          <div className="loader"></div>
        </div>{" "}
        <p className="text-lg text-black mb-8">
          Get in touch with us for any inquiries or support. We’re here to help!
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-black">
              Contact Form
            </h3>
            <Form />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-[#062d3e]">
              Our Location
            </h3>
            <div className="mt-8 text-black">
              <p className="text-lg font-semibold">Our Address</p>
              <p>123 Business Rd, Suite 100</p>
              <p>City, State, 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: contact@yourdomain.com</p>
            </div>
            <Image src={joinUS} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
