import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#8fd694]  text-black py-8 curve-section">
      <div className="w-[89%] container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-12">
          <div className="mb-8 md:mb-0">
            <h5 className="text-xl font-semibold mb-4">About Us</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#333]">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#333]">
                  Mission & Values
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#333]">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h5 className="text-xl font-semibold mb-4">Services</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#333]">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#333]">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#333]">
                  Consulting
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h5 className="text-xl font-semibold mb-4">Contact</h5>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@example.com" className="hover:text-[#333]">
                  nomi@.com
                </a>
              </li>
              <li>
                <a href="tel: +92 3369497644" className="hover:text-[#333]">
                  +92 3369497644
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#333]">
                  1234 Street Name, City, State
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Your Website Name. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
