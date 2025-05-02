
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  index?: number;
  featured?: boolean;
}

const ProjectCard = ({ 
  id, 
  title, 
  category, 
  description, 
  image, 
  index = 0,
  featured = false 
}: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "group overflow-hidden animate-fade-in opacity-0",
        featured 
          ? "mb-16 md:mb-20" 
          : "subtle-card hover:translate-y-[-8px]",
        `animate-delay-${index * 100}`
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Link to={`/portfolio/${id}`}>
        <div className={cn(
          "relative overflow-hidden rounded-2xl",
          featured ? "aspect-[16/9]" : "aspect-[4/3]"
        )}>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {featured && (
            <div className="absolute inset-0 bg-gradient-to-t from-designer-darkpurple/80 via-transparent to-transparent flex flex-col justify-end p-6 md:p-10">
              <span className="text-designer-lightpurple font-medium uppercase text-sm tracking-wider mb-2">
                {category}
              </span>
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">
                {title}
              </h3>
              <p className="text-white/80 max-w-xl mb-4 hidden md:block">
                {description}
              </p>
              <div className="flex items-center text-white font-medium">
                View Case Study <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          )}
        </div>
        
        {!featured && (
          <div className="mt-5">
            <span className="text-designer-purple font-medium text-sm uppercase tracking-wider">
              {category}
            </span>
            <h3 className="text-xl font-bold text-designer-darkpurple mt-2 mb-2">
              {title}
            </h3>
            <p className="text-gray-600 line-clamp-2 mb-3">
              {description}
            </p>
            <div className="flex items-center text-designer-purple font-medium">
              View Project <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        )}
      </Link>
    </div>
  );
};

export default ProjectCard;
