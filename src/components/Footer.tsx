
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-designer-darkpurple text-white py-12 mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Intro */}
          <div className="md:col-span-4">
            <Link to="/" className="text-2xl font-bold mb-4 inline-block">
              PAYAL
            </Link>
            <p className="text-gray-300 mt-4 max-w-md">
              Creating intuitive and engaging digital experiences that solve real user problems 
              and help businesses achieve their goals.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-6">
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a 
                href="mailto:dhillonpayal5@gmail.com" 
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={18} className="mr-2" />
                dhillonpayal5@gmail.com
              </a>
              <a 
                href="tel:+918053706091" 
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Phone size={18} className="mr-2" />
                +91 8053706091
              </a>
              <a 
                href="https://www.linkedin.com/in/payal-dhillon-59a3902b1" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin size={18} className="mr-2" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2025 PAYAL. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="inline-block mx-2 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="inline-block mx-2 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
