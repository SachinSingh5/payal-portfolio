
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Github } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="container-custom py-24">
      <div className="bg-gradient-to-r from-designer-purple to-designer-lightpurple rounded-3xl py-16 px-8 text-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-3xl mx-auto">
            Ready to create exceptional user experiences together?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how I can help bring your vision to life.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <a 
              href="mailto:dhillonpayal5@gmail.com" 
              className="flex items-center bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
            >
              <Mail className="mr-2" size={18} />
              dhillonpayal5@gmail.com
            </a>
            <a 
              href="tel:8053706091" 
              className="flex items-center bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
            >
              <Phone className="mr-2" size={18} />
              8053706091
            </a>
            <a 
              href="https://github.com/Payaldhillon0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
            >
              <Github className="mr-2" size={18} />
              github.com/Payaldhillon0
            </a>
          </div>
          
          <Link 
            to="/contact" 
            className="bg-white text-designer-purple hover:bg-designer-darkpurple hover:text-white px-8 py-3 rounded-lg text-lg font-medium inline-block transition-colors"
          >
            Let's Start a Conversation
          </Link>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full -ml-40 -mb-40"></div>
      </div>
    </section>
  );
};

export default CtaSection;
