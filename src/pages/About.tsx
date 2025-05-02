
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';

const About = () => {
  const skills = {
    ui: ["Wireframing", "Visual Design", "Prototyping", "Design Systems", "Figma", "Sketch", "Adobe XD", "Adobe Creative Suite"],
    ux: ["User Research", "Information Architecture", "Usability Testing", "User Flow Mapping", "Persona Development", "Journey Mapping", "A/B Testing"],
    soft: ["Communication", "Collaboration", "Critical Thinking", "Problem Solving", "Presentation Skills", "Project Management", "Client Relations"]
  };

  const experiences = [
    {
      title: "Senior UI/UX Designer",
      company: "Digital Innovations Inc.",
      period: "2023 - Present",
      description: "Lead design initiatives for enterprise clients across fintech, healthcare, and e-commerce sectors. Manage a team of 3 junior designers and collaborate closely with product and development teams.",
    },
    {
      title: "UI/UX Designer",
      company: "CreativeStack Agency",
      period: "2020 - 2023",
      description: "Designed mobile applications and responsive websites for various clients. Conducted user research, created wireframes, prototypes, and managed the design system.",
    },
    {
      title: "UI Designer",
      company: "WebSolutions Co.",
      period: "2019 - 2020",
      description: "Created visual designs for websites and digital products. Collaborated with UX researchers and developers to implement designs.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 container-custom">
        <div className="max-w-4xl mx-auto text-center animate-fade-in opacity-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="gradient-heading">About Me</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            UI/UX Designer passionate about creating digital experiences that people love
          </p>
        </div>
      </section>
      
      {/* Bio Section */}
      <section className="py-12 md:py-20 container-custom">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Alex - UI/UX Designer" 
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-2/3 h-1/2 rounded-xl border-2 border-designer-purple -z-10"></div>
            </div>
          </div>
          
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bringing user-centered design to every project
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Hello! I'm Alex, a UI/UX designer with over 6 years of experience creating digital products 
                that balance business goals with user needs. My journey in design began with a 
                fascination for how people interact with technology, and has evolved into a passionate 
                career crafting intuitive, engaging experiences.
              </p>
              <p>
                I specialize in translating complex requirements into elegant, user-friendly designs 
                that solve real problems. My approach combines thorough research, strategic thinking, 
                and creative exploration to create products that users genuinely enjoy using.
              </p>
              <p>
                When I'm not designing, you can find me exploring photography, reading about emerging 
                tech trends, or hiking with my dog. I believe that drawing inspiration from diverse 
                experiences enriches my design perspective and helps me create more human-centered solutions.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-semibold text-xl mb-4">Education & Certifications</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">Bachelor of Fine Arts in Graphic Design</p>
                  <p className="text-gray-600">Design Institute, 2017</p>
                </div>
                <div>
                  <p className="font-medium">User Experience Design Certification</p>
                  <p className="text-gray-600">Nielsen Norman Group, 2019</p>
                </div>
                <div>
                  <p className="font-medium">Design Leadership & Management</p>
                  <p className="text-gray-600">Design Leadership Academy, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16 md:py-24 bg-designer-lightgray">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My Skillset
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="subtle-card">
              <h3 className="text-xl font-bold text-designer-purple mb-6">UI Design</h3>
              <ul className="space-y-3">
                {skills.ui.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-designer-purple rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="subtle-card">
              <h3 className="text-xl font-bold text-designer-purple mb-6">UX Design</h3>
              <ul className="space-y-3">
                {skills.ux.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-designer-purple rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="subtle-card">
              <h3 className="text-xl font-bold text-designer-purple mb-6">Soft Skills</h3>
              <ul className="space-y-3">
                {skills.soft.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-designer-purple rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-16 md:py-24 container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-designer-purple pl-8 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-10 top-0 w-5 h-5 rounded-full bg-designer-purple"></div>
                <div>
                  <span className="text-sm text-designer-purple font-medium">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
                  <p className="text-gray-600 font-medium">{exp.company}</p>
                  <p className="mt-3 text-gray-700">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Design Philosophy */}
      <section className="py-16 md:py-24 bg-designer-darkpurple text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              My Design Philosophy
            </h2>
            <p className="text-xl mb-12">
              "Design is not just what it looks like and feels like. Design is how it works."
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">User-Centered</h3>
                <p className="text-white/80">
                  I believe that understanding the user's needs, goals, and context is the foundation 
                  of effective design. Every decision should enhance the user experience.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Purpose-Driven</h3>
                <p className="text-white/80">
                  Good design solves real problems. I approach each project with clear objectives and 
                  ensure every design choice serves a purpose and aligns with business goals.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Iterative Process</h3>
                <p className="text-white/80">
                  Design excellence comes through continuous improvement. I embrace feedback, 
                  testing, and iteration to refine solutions and deliver the best possible outcome.
                </p>
              </div>
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

export default About;
