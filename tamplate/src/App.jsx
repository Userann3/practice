import React from "react";
import bgImg from './assets/bgImg.jpg'
import bgCrop from './assets/bgCrop.png'
import bgImg2 from './assets/bgImg2.jpg'
import LetterByLetterAnimation from "./component/LetterByLetterAnimation";
import card1 from './assets/card1.jpg';
import card2 from './assets/card2.jpg';
import card3 from './assets/card3.jpg';
import ImageSlider from "./component/ImageSlider";
import footer from './assets/footer.jpg'
import BenefitsSection from "./component/BenefitsSection";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Template4 from "./component/Template4";


const HomePage = () => {

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* <Template4/> */}
      <Login/>
      {/* <Signup/> */}

            <section id="features" className=" bg-gray-100">
        <div className="w-full h-lvh flex">
          <div style={{ backgroundImage: `url(${bgImg2})` }} className="w-full h-full bg-cover bg-center flex flex-col justify-center items-center">
            <span className="text-7xl text-[#f59f7a]">
            "Templates Made Simple, 
            </span>
            <span className="text-6xl mt-2 text-[#f59f7a]">
            Designs Made Beautiful"
            </span>
            <span className="text-2xl mt-2 text-[#f59f7a]">
            Templates for Every Need – Personal, Professional, and More
            </span>
            <button className="border text-white py-2 px-5 rounded mt-5 text-2xl bg-[#5dc8cf] hover:text-[#5dc8cf] hover:bg-white hover:border-black transition-all duration-300 hover:duration-300">
          Get Started
        </button>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section id="features" className="py-16 bg-[#fcfcfc]">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8 text-[#f59f7a]">Why Choose TemplateGen?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-xl">
              <img src={card1} alt="" className="rounded"/>
              <h4 className="text-xl font-bold mb-2 mt-2">Easy to Use</h4>
              <p className="text-gray-600 text-lg">A user-friendly interface for free customization.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-xl">
              <img src={card2} alt="" className="rounded"/>
              <h4 className="text-xl font-bold mb-2 mt-2">Customizable</h4>
              <p className="text-gray-600 text-lg">Modify colors, fonts, and layouts to suit your needs.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-xl">
              <img src={card3} alt="" className="rounded"/>
              <h4 className="text-xl font-bold mb-2 mt-2">Responsive Designs</h4>
              <p className="text-gray-600 text-lg">Templates that look great on all devices.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Templates Section */}

      <div className="flex flex-col items-center w-full">
      <h3 className="text-4xl font-bold mb-8 text-[#f59f7a]">Popular templates</h3>
      <ImageSlider/>
      </div>

      <BenefitsSection/>

      {/* Footer */}
      <footer id="contact" className="bg-blue-600 text-black py-10 mt-8 border border-t-black" style={{ backgroundImage: `url(${footer})`}}>
  <div className="container mx-auto px-4">
    {/* Top Section */}
    <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
      {/* Contact Information */}
      <div className="mb-6 md:mb-0">
        <h3 className="text-xl font-bold mb-2">Contact Us</h3>
        <p>Have questions? Reach out to us!</p>
        <a href="mailto:support@templategen.com" className="underline hover:text-blue-300">
          support@templategen.com
        </a>
      </div>

      {/* Quick Links */}
      <div className="mb-6 md:mb-0">
        <h3 className="text-xl font-bold mb-2">Quick Links</h3>
        <ul>
          <li>
            <a href="#features" className="hover:text-blue-300">Features</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-300">About Us</a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-blue-300">Pricing</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-300">Contact</a>
          </li>
        </ul>
      </div>

      {/* Social Media Links */}
      <div>
        <h3 className="text-xl font-bold mb-2">Follow Us</h3>
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <i className="fab fa-linkedin-in"></i> LinkedIn
          </a>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-black my-6"></div>

    {/* Bottom Section */}
    <div className="text-center">
      <p className="text-sm">&copy; 2025 TemplateGen. All rights reserved.</p>
      <p className="text-sm">
        Designed with ❤️ by <a href="#" className="underline hover:text-blue-300">TemplateGen Team</a>
      </p>
    </div>
  </div>
</footer>

    </div>
  );
};

export default HomePage;
