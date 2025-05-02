
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

const Portfolio = () => {
  const [filter, setFilter] = React.useState<string>("all");
  
  const categories = [
    { value: "all", label: "All Projects" },
    { value: "Mobile App Design", label: "Mobile Apps" },
    { value: "Web Design", label: "Web Design" },
    { value: "Dashboard UI/UX", label: "Dashboards" }
  ];
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 container-custom">
        <div className="max-w-4xl mx-auto text-center animate-fade-in opacity-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="gradient-heading">My Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Selected projects showcasing my design process and problem-solving approach
          </p>
        </div>
      </section>
      
      {/* Filter */}
      <section className="py-6 container-custom">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.value}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === category.value 
                  ? "bg-designer-purple text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setFilter(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-12 md:py-16 container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              category={project.category}
              description={project.shortDescription}
              image={project.image}
              index={index}
            />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-medium text-gray-500">No projects found in this category</h3>
          </div>
        )}
      </section>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
