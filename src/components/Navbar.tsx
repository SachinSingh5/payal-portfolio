
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Portfolio", path: "/portfolio" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6",
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold font-heading text-designer-darkpurple">
          <span className="gradient-heading">PAYAL DHILLON</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-medium transition-colors hover:text-designer-purple",
                location.pathname === link.path
                  ? "text-designer-purple"
                  : "text-gray-700"
              )}
            >
              {link.title}
            </Link>
          ))}
          <a id="resume-button-1" className="nav-link resume bg-designer-purple hover:bg-designer-darkpurple text-white px-6 py-2 rounded-lg transition-colors cursor-pointer" download="PayalDhillon_Resume.pdf"   href="/lovable-uploads/PayalDhillon_Resume.pdf">
            <div onClick={()=>window.open('https://drive.google.com/file/d/1MuSke6ZVV0Sef1INwMI0eA1QlPjafWO-/view?usp=sharing', '_blank')}>
              <h3 id="resume-link-1">RESUME</h3>
            </div>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 hover:text-designer-purple"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-medium transition-colors",
                location.pathname === link.path
                  ? "text-designer-purple"
                  : "text-gray-700"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
         
          <a onClick={() => setIsMobileMenuOpen(false)} id="resume-button-1" className="text-center bg-designer-purple hover:bg-designer-darkpurple text-white px-6 py-2 rounded-lg transition-colors cursor-pointer" download="PayalDhillon_Resume.pdf"   href="/lovable-uploads/PayalDhillon_Resume.pdf">
            <div onClick={()=>window.open('https://drive.google.com/file/d/1MuSke6ZVV0Sef1INwMI0eA1QlPjafWO-/view?usp=sharing', '_blank')}>
              <h3 id="resume-link-1">RESUME</h3>
            </div>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
