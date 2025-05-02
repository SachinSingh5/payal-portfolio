
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import CtaSection from '@/components/CtaSection';
import { projects } from '@/data/projects';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const featuredProjects = projects.slice(0, 3);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 container-custom">
        <div className="max-w-4xl animate-fade-in opacity-0">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="gradient-heading">UI/UX Designer</span> Crafting Intuitive Digital Experiences
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
            I transform complex challenges into elegant, user-centered design solutions 
            that merge business goals with exceptional user experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/portfolio" 
              className="bg-designer-purple hover:bg-designer-darkpurple text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View My Work
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-designer-purple text-designer-purple hover:bg-designer-purple hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Let's Connect
            </Link>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="mt-20 md:mt-40 grid grid-cols-10 gap-4 opacity-75">
          {Array.from({ length: 10 }).map((_, i) => (
            <div 
              key={i}
              className="h-2 rounded-full bg-gradient-to-r from-designer-purple to-designer-lightpurple"
              style={{ 
                opacity: 0.1 + i * 0.09,
                transform: `scaleX(${0.5 + i * 0.05})`,
                marginLeft: `${i * 5}%`
              }}
            ></div>
          ))}
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-16 md:py-24 container-custom">
        <div className="flex justify-between items-end mb-12 md:mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className="text-gray-600 mt-2">Selected works I've created for clients</p>
          </div>
          <Link 
            to="/portfolio" 
            className="hidden md:flex items-center text-designer-purple font-medium hover:underline"
          >
            View All Projects <ArrowRight size={18} className="ml-1" />
          </Link>
        </div>
        
        <div className="space-y-16 md:space-y-24">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              category={project.category}
              description={project.shortDescription}
              image={project.image}
              index={index}
              featured={true}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center text-designer-purple font-medium"
          >
            View All Projects <ArrowRight size={18} className="ml-1" />
          </Link>
        </div>
      </section>
      
      {/* About Preview */}
      <section className="py-16 md:py-24 bg-designer-lightgray">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Hi, I'm Alex</h2>
              <p className="text-gray-700 mb-6">
                I'm a passionate UI/UX designer with over 6 years of experience creating digital products
                that users love. My approach combines strategic thinking, user empathy, and visual design
                expertise to craft experiences that are both beautiful and functional.
              </p>
              <p className="text-gray-700 mb-8">
                My work spans across mobile applications, websites, and complex systems, always
                focusing on creating intuitive experiences that solve real problems for users while
                meeting business objectives.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-designer-purple font-medium hover:underline"
              >
                More About Me <ArrowRight size={18} className="ml-1" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Alex - UI/UX Designer" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-designer-purple opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-2xl border-2 border-designer-purple"></div>
            </div>
          </div>
          
          {/* Skills Preview */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="subtle-card">
              <h3 className="font-semibold text-lg mb-2">UI Design</h3>
              <p className="text-gray-600">Creating visually appealing, functional interfaces</p>
            </div>
            <div className="subtle-card">
              <h3 className="font-semibold text-lg mb-2">UX Research</h3>
              <p className="text-gray-600">Understanding users through research and testing</p>
            </div>
            <div className="subtle-card">
              <h3 className="font-semibold text-lg mb-2">Interaction Design</h3>
              <p className="text-gray-600">Crafting meaningful interactions and animations</p>
            </div>
            <div className="subtle-card">
              <h3 className="font-semibold text-lg mb-2">Design Systems</h3>
              <p className="text-gray-600">Building scalable, consistent design frameworks</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CtaSection />
      
      <Footer />
    </div>
  );
};

export default Index;
