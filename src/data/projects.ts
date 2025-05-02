
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  image: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string;
  tools: string[];
  process: {
    title: string;
    description: string;
    image: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "fintech-mobile-app",
    title: "FinWise - Personal Finance App",
    category: "Mobile App Design",
    description: "A comprehensive redesign of a personal finance tracking app focusing on clarity, accessibility, and intuitive user flows.",
    shortDescription: "Redesigning a mobile finance app for improved usability and engagement",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
    overview: "FinWise needed a complete overhaul of their existing app to address poor user retention and negative reviews focusing on usability issues. The goal was to create a more intuitive and visually appealing interface that would encourage regular usage.",
    challenge: "Users found the existing app confusing to navigate and visually overwhelming. Key functions were buried in menus, and the visual hierarchy didn't guide users to important features. Analytics showed high drop-off rates during the onboarding process.",
    solution: "I developed a streamlined interface with clear visual hierarchy and simplified navigation. The redesign included a personalized dashboard, improved expense categorization, and a simplified onboarding flow that reduced steps by 40%.",
    results: "After launch, user retention improved by 35%, session duration increased by 28%, and app store ratings went from 3.2 to 4.7 stars. Daily active users grew by 42% within three months.",
    tools: ["Figma", "Protopie", "Miro", "Optimal Workshop", "Adobe Illustrator"],
    process: [
      {
        title: "User Research",
        description: "Conducted user interviews, analyzed app reviews, and created journey maps to identify pain points in the current experience.",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
      },
      {
        title: "Information Architecture",
        description: "Restructured the app's navigation and content hierarchy to prioritize key features and simplify user flows.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3432&q=80"
      },
      {
        title: "Visual Design",
        description: "Created a clean, modern visual language with improved readability, consistent color coding, and clear data visualization components.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
      }
    ]
  },
  {
    id: "e-commerce-website-redesign", //
    title: "FreshMarket E-Commerce Redesign",
    category: "Web Design",
    description: "A complete overhaul of an organic grocery e-commerce platform to improve conversion rates and customer satisfaction through intuitive navigation and optimized checkout processes.",
    shortDescription: "Increasing conversions through improved user flows and visual design",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    overview: "FreshMarket, a growing online organic grocery retailer, was experiencing high cart abandonment rates and low customer retention. The website redesign focused on creating a more engaging shopping experience and streamlining the path to purchase.",
    challenge: "The existing website had a cluttered interface, inefficient product filtering, and a complicated checkout process that frustrated users and led to high abandonment rates of 76%.",
    solution: "I designed a clean, visually appealing interface with improved product categorization, enhanced search functionality, and a simplified 3-step checkout process. The redesign included personalized recommendations and clearer presentation of product information.",
    results: "The new design reduced cart abandonment by 32%, increased average order value by 18%, and improved mobile conversion rates by 45%. Customer satisfaction scores increased from 3.4 to 4.6 out of 5.",
    tools: ["Figma", "Adobe XD", "Hotjar", "Optimal Workshop", "Sketch"],
    process: [
      {
        title: "Competitive Analysis",
        description: "Conducted a thorough analysis of competitors and industry leaders to identify best practices and opportunities for differentiation.",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      },
      {
        title: "Wireframing & Prototyping",
        description: "Developed wireframes and interactive prototypes to test navigation patterns, page layouts, and the checkout flow with actual users.",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
      },
      {
        title: "Usability Testing",
        description: "Conducted multiple rounds of usability testing to refine the design based on user feedback and behavior observations.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3432&q=80"
      }
    ]
  },
  {
    id: "healthcare-dashboard",
    title: "MedTrack Patient Dashboard",
    category: "Dashboard UI/UX",
    description: "A comprehensive healthcare provider dashboard designed to improve patient care coordination and clinical workflow efficiency through intuitive data visualization and task management.",
    shortDescription: "Simplifying complex healthcare data for improved clinical decision making",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
    overview: "MedTrack needed a centralized dashboard for healthcare providers to access patient information, coordinate care, and manage clinical workflows more efficiently. The goal was to reduce administrative burden and improve patient outcomes.",
    challenge: "Healthcare providers were struggling with fragmented patient data across multiple systems, leading to inefficiencies, potential errors, and reduced time for patient care. The complex data needed to be presented in an accessible, actionable format.",
    solution: "I designed an integrated dashboard that consolidated critical patient information with clear data visualization, prioritized task management, and contextual alerts. The interface used color coding, progressive disclosure techniques, and customizable views to manage complexity.",
    results: "The new dashboard reduced time spent on administrative tasks by 35%, decreased documentation errors by 27%, and improved provider satisfaction scores by 42%. Clinics reported an average 18% increase in patient appointments per day.",
    tools: ["Figma", "Adobe Illustrator", "Axure RP", "Miro", "Lookback"],
    process: [
      {
        title: "Stakeholder Interviews",
        description: "Conducted extensive interviews with healthcare providers, administrators, and IT staff to understand varied needs and technical constraints.",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
      },
      {
        title: "Data Hierarchy & Information Design",
        description: "Created an information architecture that prioritized critical patient data while making secondary information accessible through progressive disclosure.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
      },
      {
        title: "Iterative Prototyping",
        description: "Developed and refined interactive prototypes through multiple rounds of testing with actual healthcare providers in clinical settings.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3432&q=80"
      }
    ]
  },
  {
    "id": "health-and-fitness-iconography",
    "title": "Health and Fitness Iconography",
    "category": "Icon Design",
    "description": "A set of five visually consistent, user-friendly, and intuitive icons representing core features of a health and fitness application for children. The icons adhere to industry practices for visual language, scalability, and accessibility, enhancing user experience and interface navigation.",
    "shortDescription": "Designing a cohesive icon set for a children's health and fitness app.",
    "image": "/lovable-uploads/health-icon.png",
    "overview": "This project focused on designing five icons for a children's health and fitness app, ensuring they are visually consistent, user-friendly and intuitive.",
    "challenge": "The challenge was to create icons that are playful and engaging for children while remaining clear and informative for parents, balancing simplicity with effective communication of health-related features.",
    "solution": "I designed a set of five icons with a soft, rounded, and playful style, using a gentle pastel color palette (sky blue, mint green, peach, lavender). The icons were designed for 48x48px and are scalable, with simple designs and label-support where needed.",
    "results": "The result is a set of icons that effectively represent key features of a children's health and fitness app, including Child Profile, Hydration Tracker, Sleep Monitor, Nutrition Guide, and Vaccination, designed to be easily understood by both children and parents.",
    "tools": ["Illustrator"],
    "process": [
      {
        "title": "Competitive Analysis",
        "description": "Conducted a thorough analysis of competitors like BabyChakra, Parentlane, and ImmunifyMe to identify best practices and opportunities for differentiation in icon design for children's healthcare apps. Key learnings included using joyful colors, intuitive visuals, themed color groups, and balancing playfulness with clarity.",
        "image": "/lovable-uploads/icon3.png"
      },
      {
        "title": "Design Process Definition",
        "description": "Defined the design process with a focus on creating icons that are soft, rounded, playful yet clear, using a gentle pastel color palette, designed for 48x48px and scalable, and ensuring clarity with simple designs and label-support where needed.",
        "image": "/lovable-uploads/icon2.png"
      },
      {
        "title": "Icon Set Creation",
        "description": "Designed a set of five icons representing Child (Child Profile), Hydration, Sleep (Sleep Monitor), Nutrition (Nutrition Guide), and Vaccination.",
        "image": "/lovable-uploads/icon4.png"
      },
      {
        "title": "Icon Usage",
        "description": "Designed icons to be used for Child Profile (accessing child's health info), Hydration Tracker (tracking daily water intake), Sleep Monitor (monitoring sleep patterns), Nutrition Guide (viewing dietary tips), and Vaccination (checking upcoming/completed vaccines).",
        "image": "/lovable-uploads/icon5.png"
      }
    ]
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
