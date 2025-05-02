
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getProjectById, projects } from '@/data/projects';
import { ArrowLeft } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id || '');
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  },[id])
  
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/portfolio"
          className="flex items-center text-designer-purple hover:underline"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
        </Link>
      </div>
    );
  }

  // Find next project for navigation
  const currentIndex = projects.findIndex(p => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Project Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 container-custom">
        <div className="max-w-4xl animate-fade-in opacity-0">
          <Link 
            to="/portfolio"
            className="inline-flex items-center text-gray-600 hover:text-designer-purple mb-8 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Projects
          </Link>
          <br/>
          <span className="text-designer-purple font-medium uppercase text-sm tracking-wider mb-2">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl">
            {project.description}
          </p>
        </div>
      </section>
      
      {/* Featured Image */}
      <section className="py-8 container-custom">
        <div className="rounded-2xl overflow-hidden">
          <img 
            src={project.image}
            alt={project.title}
            className="w-full object-cover"
          />
        </div>
      </section>
      
      {/* Project Overview */}
      <section className="py-16 md:py-24 container-custom">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-gray-700">{project.overview}</p>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="font-semibold mb-3">Tools Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <span 
                    key={index}
                    className="bg-designer-lightgray px-3 py-1 rounded-md text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-gray-700">{project.challenge}</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">The Solution</h2>
            <p className="text-gray-700">{project.solution}</p>
          </div>
        </div>
      </section>
      
      {/* Design Process */}
      <section className="py-16 md:py-24 bg-designer-lightgray">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Design Process
          </h2>
          
          <div className="space-y-24">
            {project.process.map((step, index) => (
              <div 
                key={index} 
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
                
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-16 md:py-24 container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Results</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">{project.results}</p>
      </section>
      
      {/* Next Project */}
      <section className="py-16 md:py-24 bg-designer-darkpurple text-white">
        <div className="container-custom text-center">
          <p className="text-designer-lightpurple mb-4">Next Project</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{nextProject.title}</h2>
          <Link 
            to={`/portfolio/${nextProject.id}`}
            className="inline-block bg-white text-designer-purple hover:bg-designer-lightpurple hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            View Project
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
