
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
  // {
  //   id: "fintech-mobile-app",
  //   title: "FinWise - Personal Finance App",
  //   category: "Mobile App Design",
  //   description: "A comprehensive redesign of a personal finance tracking app focusing on clarity, accessibility, and intuitive user flows.",
  //   shortDescription: "Redesigning a mobile finance app for improved usability and engagement",
  //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
  //   overview: "FinWise needed a complete overhaul of their existing app to address poor user retention and negative reviews focusing on usability issues. The goal was to create a more intuitive and visually appealing interface that would encourage regular usage.",
  //   challenge: "Users found the existing app confusing to navigate and visually overwhelming. Key functions were buried in menus, and the visual hierarchy didn't guide users to important features. Analytics showed high drop-off rates during the onboarding process.",
  //   solution: "I developed a streamlined interface with clear visual hierarchy and simplified navigation. The redesign included a personalized dashboard, improved expense categorization, and a simplified onboarding flow that reduced steps by 40%.",
  //   results: "After launch, user retention improved by 35%, session duration increased by 28%, and app store ratings went from 3.2 to 4.7 stars. Daily active users grew by 42% within three months.",
  //   tools: ["Figma", "Protopie", "Miro", "Optimal Workshop", "Adobe Illustrator"],
  //   process: [
  //     {
  //       title: "User Research",
  //       description: "Conducted user interviews, analyzed app reviews, and created journey maps to identify pain points in the current experience.",
  //       image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
  //     },
  //     {
  //       title: "Information Architecture",
  //       description: "Restructured the app's navigation and content hierarchy to prioritize key features and simplify user flows.",
  //       image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3432&q=80"
  //     },
  //     {
  //       title: "Visual Design",
  //       description: "Created a clean, modern visual language with improved readability, consistent color coding, and clear data visualization components.",
  //       image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
  //     }
  //   ]
  // },
  {
    "id": "e-commerce-app-homepage",
    "title": "Luxe Carry - E-commerce App Homepage",
    "category": "Mobile App Design",
    "description": "Design a clear and visually appealing typographic hierarchy for the homepage of a fictional e-commerce app.",
    "shortDescription": "Designing the homepage of an e-commerce app with focus on typographic hierarchy",
    "image": "/lovable-uploads/p1.png",
    "overview": "The project focuses on designing the homepage of a fictional e-commerce app called 'Luxe Carry'. The main goal is to establish a clear and visually appealing typographic hierarchy.",
    "challenge": "The challenge is to create a homepage with effective typographic hierarchy that enhances user experience.",
    "solution": "The solution involves defining a color palette, typography system, and layout for the app's homepage.",
    "results": "The result is a designed homepage prototype featuring product listings, categories, and user interface elements with a defined typographic structure.",
    "tools": ["Figma"],
    "process": [
      {
        "title": "Problem Statement",
        "description": "Define the need for a clear and visually appealing typographic hierarchy for the e-commerce app's homepage.",
        "image": "/lovable-uploads/p11.png"
      },
      {
        "title": "Colors",
        "description": "Defined the color palette for the app, including background and text colors.",
        "image": "/lovable-uploads/p10.png"
      },
      {
        "title": "Typography",
        "description": "Established the typographic hierarchy using the Roboto Serif font with defined styles for headings, sub-headings, and body text.",
        "image": "/lovable-uploads/p4.png"
      },
      {
        "title": "Iconography",
        "description": "Utilized icons within the app's interface.",
        "image": "/lovable-uploads/p5.png"
      },
      {
        "title": "Wireframes",
        "description": "Developed wireframes to outline the layout and structure of the homepage.",
        "image": "/lovable-uploads/p8.png"
      },
      {
        "title": "Prototype",
        "description": "Created a high-fidelity prototype of the app's homepage, showcasing product listings and navigation.",
        "image": "/lovable-uploads/p9.png"
      }
    ]
  },

  {
    "id": "heuristic-evaluation-ixigo-trains",
    "title": "Heuristic Evaluation of Ixigo Trains App",
    "category": "Heuristic Evaluation",
    "description": "Heuristic evaluation of the Ixigo Trains app, focusing on usability principles.",
    "shortDescription": "Evaluating the Ixigo Trains app using heuristic principles",
    "image": "/ixigo/Your Group_page-0001.jpg",
    "overview": "The document presents a heuristic evaluation of the Ixigo Trains app, assessing its compliance with established usability heuristics.",
    "challenge": "To identify usability issues within the Ixigo Trains app using heuristic evaluation principles.",
    "solution": "Applying heuristic evaluation principles to analyze the app's interface and functionality.",
    "results": "The evaluation provides insights into the app's strengths and weaknesses regarding usability, with specific examples related to each heuristic principle.",
    "tools": ["Heuristic Evaluation Principles"],
    "process": [
      {
        "title": "Introduction",
        "description": "Brief overview of the heuristic evaluation of the Ixigo Trains app.",
        "image": "/ixigo/Your Group_page-0002.jpg"
      },
      {
        "title": "App Description",
        "description": "Ixigo Trains is described as a versatile travel app offering real-time updates on train schedules, seat availability, ticket booking, and flight bookings.",
        "image": "/ixigo/Your Group_page-0003.jpg"
      },
      {
        "title": "Heuristic Principles",
        "description": "Listing of the heuristic principles used for the evaluation, including visibility of system status, match between system and real world, user control and freedom, consistency and standards, error prevention, flexibility and efficiency of use, aesthetic and minimalist design, help users recognize diagnose and recover from errors, and help and documentation.",
        "image": "/ixigo/Your Group_page-0004.jpg"
      },
      {
        "title": "Evaluation - Visibility of System Status",
        "description": "Assessment of how the app keeps users informed about what's happening, with examples like the search bar and order confirmation.",
        "image": "/ixigo/Your Group_page-0005.jpg"
      },
      {
        "title": "Evaluation - Match Between System and Real World",
        "description": "Analysis of the app's use of language and terminology in relation to users' expectations.",
        "image": "/ixigo/Your Group_page-0006.jpg"
      },
      {
        "title": "Evaluation - User Control and Freedom",
        "description": "Examination of how the app supports users in navigating and undoing actions, such as using the 'back' button.",
        "image": "/ixigo/Your Group_page-0007.jpg"
      },
      {
        "title": "Evaluation - Consistency and Standards",
        "description": "Identification of inconsistencies and standards issues within the app.",
        "image": "/ixigo/Your Group_page-0008.jpg"
      },
      {
        "title": "Evaluation - Error Prevention",
        "description": "Review of the app's features to prevent errors, including undo functionalities and confirmation dialogs.",
        "image": "/ixigo/Your Group_page-0009.jpg"
      },
      {
        "title": "Evaluation - Flexibility and Efficiency of Use",
        "description": "Analysis of how the app allows users to customize search criteria and filter results.",
        "image": "/ixigo/Your Group_page-0010.jpg"
      },
      {
        "title": "Evaluation - Aesthetic and Minimalist Design",
        "description": "Comment on the app's visual representation and clarity.",
        "image": "/ixigo/Your Group_page-0011.jpg"
      },
      {
        "title": "Evaluation - Help Users Recognize, Diagnose, and Recover from Errors",
        "description": "Assessment of error recovery features, such as displaying errors for incorrect passwords.",
        "image": "/ixigo/Your Group_page-0012.jpg"
      },
      {
        "title": "Evaluation - Help and Documentation",
        "description": "Availability of customer service and a help center.",
        "image": "/ixigo/Your Group_page-0013.jpg"
      },
      {
        "title": "Conclusion",
        "description": "Summarizing the heuristic evaluation.",
        "image": "/ixigo/Your Group_page-0014.jpg"
      }
    ]
  },

  {
    "id": "ux-laws-analysis",
    "title": "UX Laws Analysis",
    "category": "UX Design Principles",
    "description": "Analysis of various UX laws and their application (or violation) in different app interfaces.",
    "shortDescription": "Examining UX laws like Fitts's Law, Miller's Law, Jakob's Law, and Hick's Law in app design",
    "image": "/law/UX LAWS_page-0001.jpg",
    "overview": "The document provides explanations of key UX laws and illustrates them with examples from popular mobile applications, highlighting good and bad practices.",
    "challenge": "To demonstrate the importance of UX laws in creating effective and user-friendly interfaces.",
    "solution": "Analyzing app interfaces based on established UX principles to identify areas of improvement.",
    "results": "The analysis offers insights into how adhering to UX laws can enhance user experience and avoid common design pitfalls.",
    "tools": ["Fitts's Law", "Miller's Law", "Jakob's Law", "Hick's Law"],
    "process": [
      {
        "title": "Introduction",
        "description": "Brief overview of the purpose and scope of the analysis.",
        "image": "/law/UX LAWS_page-0002.jpg"
      },
      {
        "title": "Fitts's Law",
        "description": "Explanation of Fitts's Law as a predictive model for target acquisition time.",
        "image": "/law/UX LAWS_page-0007.jpg"
      },
      {
        "title": "Miller's Law",
        "description": "Description of Miller's Law regarding the limits of working memory capacity.",
        "image": "/law/UX LAWS_page-0009.jpg"
      },
      {
        "title": "Jakob's Law",
        "description": "Explanation of Jakob's Law on user expectations for interface consistency.",
        "image": "/law/UX LAWS_page-0004.jpg"
      },
      {
        "title": "Hick's Law",
        "description": "Description of Hick's Law on the relationship between choice and decision time.",
        "image": "/law/UX LAWS_page-0005.jpg"
      },
      {
        "title": "Amazon - Fitts's Law Violation",
        "description": "Analysis of Amazon's mobile interface as a violation of Fitts's Law, focusing on small, hard-to-tap buttons.",
        "image": "/law/UX LAWS_page-0003.jpg"
      },
      {
        "title": "Amazon - Jakob's Law Violation",
        "description": "Examination of inconsistent navigation and UI complexity in the Amazon app as a violation of Jakob's Law.",
        "image": "/law/UX LAWS_page-0004.jpg"
      },
      {
        "title": "LinkedIn - Fitts's Law Violation",
        "description": "Analysis of small, hard-to-tap buttons in the LinkedIn mobile interface.",
        "image": "/law/UX LAWS_page-0005.jpg"
      },
      {
        "title": "Adobe Acrobat - Miller's Law Violation",
        "description": "Critique of Adobe Acrobat's interface for presenting too much information at once, violating Miller's Law.",
        "image": "/law/UX LAWS_page-0006.jpg"
      },
     {
        "title": "Savana - Miller's Law Violation",
        "description": "Analysis of Savana's interface, which overwhelms users with a single dominant item, blocking access to other useful content, in violation of Miller's Law.",
        "image": "/law/UX LAWS_page-0008.jpg"
      },
      {
        "title": "MX Player - Hick's Law",
        "description": "Explanation of how MX Player's interface adheres to Hick's Law by reducing the number of visible options.",
        "image": "/law/UX LAWS_page-0010.jpg"
      },
      {
        "title": "Daily Hunt - Hick's Law",
        "description": "Analysis of Daily Hunt's interface, showing how limiting choices and categorizing them effectively aligns with Hick's Law.",
        "image": "/law/UX LAWS_page-0011.jpg"
      },
      {
        "title": "Dream11 - Jakob’s Law Violation",
        "description": "Analysis of Dream11’s interface violating Jakob’s Law due to inconsistent navigation and missing search function.",
        "image": "/law/UX LAWS_page-0012.jpg"
      },
      {
        "title": "Conclusion",
        "description": "Summary of the importance of UX laws in interface design.",
        "image": "/law/UX LAWS_page-0013.jpg"
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
