
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';

const About = () => {
  const skills = {
    ui: ["Wireframing & Prototyping (Figma)", "UX Writing", "Visual Design", "Interface Design", "Usability Testing"],
    ux: ["User Research", "Information Architecture", "Usability Testing", "User Flow Mapping", "Heuristic Evaluation"],
    soft: ["Leadership", "Teamwork", "Communication", "Problem Solving", "Presentation Skills"]
  };

  const experiences = [
    {
      title: "Live Project",
      company: "Under guidance of Mr. Sumit Rampal",
      period: "03/2025 - 06/2025",
      description: "Worked on an 8-week live project to develop a financial literacy mobile application specifically designed for women.",
    },
  ];
  
  const education = [
    {
      degree: "BTech in CSE(UX/UI)",
      institution: "K.R. Mangalam University",
      period: "08/2023 - 06/2027",
      details: "CGPA: 9.39/10",
      location: "Gurgaon, India"
    },
    {
      degree: "12th Grade",
      institution: "R.P.S. Sr. Sec. School",
      period: "04/2021 - 03/2023",
      details: "Percentage: 75%",
      location: "Mahendergarh, India"
    },
    {
      degree: "10th Grade",
      institution: "R.P.S. Sr. Sec. School",
      period: "04/2019 - 03/2021",
      details: "Percentage: 95%",
      location: "Mahendergarh, India"
    }
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
                  src="/lovable-uploads/eb0724ac-99b9-4b29-a6b9-08125d559b1b.png" 
                  alt="Payal Dhillon - UI/UX Designer" 
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-2/3 h-1/2 rounded-xl border-2 border-designer-purple -z-10"></div>
            </div>
          </div>
          
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Passionate about user-centered design
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Hello! I'm Payal Dhillon, a UI/UX designer pursuing my B.Tech in CSE (UX/UI) at K.R. Mangalam University. 
                My passion lies in creating intuitive, user-centric digital experiences that solve real-world problems.
              </p>
              <p>
                With a keen eye for detail and usability, I approach each project with a focus on understanding 
                user needs and translating them into effective design solutions. My experience includes 
                wireframing, prototyping, UX writing, and usability testing.
              </p>
              <p>
                As Hostel Secretary at my university, I've developed strong communication and leadership skills
                that complement my technical abilities. I'm eager to apply my skills through practical projects
                and internships to create designs that truly resonate with users.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-semibold text-xl mb-4">Education & Certifications</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">BTech in CSE(UX/UI)</p>
                  <p className="text-gray-600">K.R. Mangalam University, 2023-2027 (CGPA: 9.39/10)</p>
                </div>
                <div>
                  <p className="font-medium">Google UX Design Professional Certificate</p>
                  <p className="text-gray-600">Google</p>
                </div>
                <div>
                  <p className="font-medium">Google Analytics Certification</p>
                  <p className="text-gray-600">Google</p>
                </div>
                <div>
                  <p className="font-medium">Infosys Database and SQL certification</p>
                  <p className="text-gray-600">Infosys</p>
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
              <h3 className="text-xl font-bold text-designer-purple mb-6">Design/UX Skills</h3>
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
              <h3 className="text-xl font-bold text-designer-purple mb-6">Research & Analytical Skills</h3>
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
              <h3 className="text-xl font-bold text-designer-purple mb-6">Interpersonal Skills</h3>
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
          Experience & Education
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
            
            {education.map((edu, index) => (
              <div key={`edu-${index}`} className="relative">
                <div className="absolute -left-10 top-0 w-5 h-5 rounded-full bg-designer-purple"></div>
                <div>
                  <span className="text-sm text-designer-purple font-medium">
                    {edu.period}
                  </span>
                  <h3 className="text-xl font-bold mt-1">{edu.degree}</h3>
                  <p className="text-gray-600 font-medium">{edu.institution}</p>
                  <p className="text-gray-600">{edu.details}</p>
                  <p className="text-gray-600">{edu.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technologies & Tools */}
      <section className="py-16 md:py-24 bg-designer-lightgray">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Technologies & Tools
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="subtle-card">
              <h3 className="text-xl font-bold text-designer-purple mb-6">Languages</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-designer-purple/10 text-designer-darkpurple rounded-full">Python</span>
                <span className="px-4 py-2 bg-designer-purple/10 text-designer-darkpurple rounded-full">Java</span>
                <span className="px-4 py-2 bg-designer-purple/10 text-designer-darkpurple rounded-full">MySQL</span>
              </div>
            </div>
            
            <div className="subtle-card">
              <h3 className="text-xl font-bold text-designer-purple mb-6">Design Tools</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-designer-purple/10 text-designer-darkpurple rounded-full">Figma</span>
                <span className="px-4 py-2 bg-designer-purple/10 text-designer-darkpurple rounded-full">Canva</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Achievements */}
      <section className="py-16 md:py-24 bg-designer-darkpurple text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Achievements
            </h2>
            
            <div className="subtle-card bg-white/10 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Top 10 Position in CodeRed Designathon</h3>
              <p className="text-white/90 text-lg">
                Secured a top 10 position in the CodeRed Designathon for redesigning a senior citizen fitness app,
                showcasing creativity and user-centered design thinking.
              </p>
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
