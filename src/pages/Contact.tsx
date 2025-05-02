
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Linkedin, Mail, Phone } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 container-custom">
        <div className="max-w-4xl mx-auto text-center animate-fade-in opacity-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="gradient-heading">Get in Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Interested in working together or have a question? I'd love to hear from you. 
            Fill out the form below or reach out directly through my contact information.
          </p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-12 md:py-20 container-custom">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-12">
            <div className="subtle-card">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="mt-1 text-designer-purple" size={20} />
                  <div className="ml-4">
                    <h3 className="font-medium">Email</h3>
                    <a 
                      href="mailto:hello@alexdesign.com" 
                      className="text-gray-700 hover:text-designer-purple transition-colors"
                    >
                      hello@alexdesign.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mt-1 text-designer-purple" size={20} />
                  <div className="ml-4">
                    <h3 className="font-medium">Phone</h3>
                    <a 
                      href="tel:+11234567890" 
                      className="text-gray-700 hover:text-designer-purple transition-colors"
                    >
                      (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Linkedin className="mt-1 text-designer-purple" size={20} />
                  <div className="ml-4">
                    <h3 className="font-medium">LinkedIn</h3>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-gray-700 hover:text-designer-purple transition-colors"
                    >
                      linkedin.com/in/alexdesigner
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="subtle-card">
              <h2 className="text-2xl font-bold mb-6">Availability</h2>
              <p className="text-gray-700 mb-4">
                I'm currently available for:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-designer-purple rounded-full mr-3"></span>
                  Freelance projects
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-designer-purple rounded-full mr-3"></span>
                  Design consultations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-designer-purple rounded-full mr-3"></span>
                  UI/UX workshops and training
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-designer-purple rounded-full mr-3"></span>
                  Speaking engagements
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-3 subtle-card">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-designer-purple/50 focus:border-designer-purple"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-designer-purple/50 focus:border-designer-purple"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-designer-purple/50 focus:border-designer-purple"
                  placeholder="Project inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-designer-purple/50 focus:border-designer-purple"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-designer-purple hover:bg-designer-darkpurple text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 md:py-24 container-custom">
        <div className="rounded-2xl overflow-hidden h-[400px] bg-designer-lightgray flex items-center justify-center">
          <p className="text-gray-500">Map placeholder - You can integrate Google Maps here</p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
