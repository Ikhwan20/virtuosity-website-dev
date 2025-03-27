import { Link } from "wouter";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-white font-montserrat text-2xl font-bold mb-4 block">
              Virtuosity Solutions Sdn Bhd
            </Link>
            <p className="text-gray-300 mb-4">
              Leading cloud infrastructure and DevOps solutions provider in Malaysia and the ASEAN region. Helping businesses transform with cloud-native strategies.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/virtuosity-solutions-sdn.-bhd./" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-lg font-montserrat font-medium mb-4">Services</h5>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Hybrid Cloud Platform
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  DevOps Platform
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Microservices Architecture
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  AI Solutions
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-montserrat font-medium mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Client Stories
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 text-center md:text-left text-gray-400">
          <p>&copy; {new Date().getFullYear()} Virtuosity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
