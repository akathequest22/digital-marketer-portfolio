"use client";

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
            <form
              className="space-y-6 max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md"
              action="/submit"
              method="post"
            >
              <div className="flex flex-col items-start">
                <label
                  htmlFor="name"
                  className="text-gray-700 text-lg font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8fd694] transition duration-300"
                  required
                />
              </div>
              <div className="flex flex-col items-start">
                <label
                  htmlFor="email"
                  className="text-gray-700 text-lg font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8fd694] transition duration-300"
                  required
                />
              </div>
              <div className="flex flex-col items-start">
                <label
                  htmlFor="message"
                  className="text-gray-700 text-lg font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8fd694] transition duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#8fd694] text-white py-3 px-6 rounded-md hover:bg-[#8fd694] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-[#062d3e]">
              Our Location
            </h3>
            {/* <Map /> */}
            <div className="mt-8 text-black">
              <p className="text-lg font-semibold">Our Address</p>
              <p>123 Business Rd, Suite 100</p>
              <p>City, State, 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: contact@yourdomain.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
