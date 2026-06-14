import bookImg from "../Components/assets/Book_.jpg";
import buyNowImg from "../Components/assets/BuyNow.png";
import movieImg from "../Components/assets/Movie.jpg";
import expenseImg from "../Components/assets/Expense.png";
import portfolioImg from "../Components/assets/Portfolio.png";
import profileImg from "../Components/assets/DSIMG.jpg";
import invoice from "../Components/assets/Invoice.png";
import sms from "../Components/assets/SMS.png";

export const SITE = {
  name: "Dhruval Shah",
  role: "Software Developer Engineer & Full Stack Developer",
  tagline:
    "Computer Engineering graduate specializing in full-stack development and backend engineering with strong problem-solving skills in Data Structures & Algorithms. Experienced in building production-style web applications using React.js, Node.js, Express.js, MongoDB, and Spring Boot. Worked on real-world systems involving authentication, RESTful API design, role-based access control, and payment gateway integration. Focused on developing secure, scalable, and maintainable backend architectures with clean code practices and efficient system design.",
  email: "dhruval4.shah@gmail.com",
  github: "https://github.com/dhruvalshah05",
  linkedin: "https://www.linkedin.com/in/dhruval4-shah",
  codolio: "https://codolio.com/profile/dhruval4_shah",
  profileImage: profileImg,
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const ABOUT = {
  paragraphs: [
    "Motivated Computer Engineering graduate from CHARUSAT University with hands-on experience from multiple internships. I build full-stack products with the MERN stack, Java & Spring Boot, and REST APIs — plus Python for AI/ML exploration.",
    "I care about readable code, responsive UI, and features that hold up beyond the demo: auth flows, admin tools, and APIs designed for real use.",
    "Currently seeking an entry-level SDE role where I can contribute across the stack and grow with a strong engineering team.",
  ],
  highlights: [
    "MERN stack — React, Node, Express, MongoDB",
    "Java & Spring Boot backend development",
    "JWT auth, REST APIs & role-based access",
    "DSA, DBMS, OS , OOP",
    "Git workflows & collaborative development",
    "AI/ML enthusiast (Python)",
  ],
};

export const SKILL_GROUPS = [
  {
    title: "Programming Languages",
    skills: [
      "JavaScript (ES6+)",
      "C++",
      "Java",
      "Python",
      "SQL",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Bootstrap",
      "Material-UI (MUI)",
      "Responsive UI",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      "REST APIs",
      "JWT Authentication",
      "Google OAuth",
    ],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git & GitHub", "Postman", "VS Code", "npm", "Vercel", "Netlify"],
  },
  {
    title: "Core CS",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
      "Computer Networks",
      "DBMS",
    ],
  },
  {
    title: "Soft Skills",
    skills: ["Teamwork", "Leadership", "Adaptability", "Time Management"],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "BuyNow — Scalable E-Commerce Platform",
    stack: [
      "MERN",
      "Redux Toolkit",
      "JWT",
      "Google OAuth",
      "Razorpay API",
      "Cloudinary",
      "Tailwind CSS",
      "Recharts",
    ],
    description:
      "Full-stack e-commerce platform with auth, payments, RBAC, and admin analytics.",

    features: [
      "JWT + Google OAuth authentication with role-based access control",
      "Razorpay payment integration with order verification flow",
      "Redux Toolkit for cart, auth, and global state management",
      "Admin dashboard with sales analytics (Recharts) + Cloudinary uploads",
    ],

    impact:
      "Simulates production-grade e-commerce architecture with secure authentication flow, payment lifecycle management, and admin-level business insights using modern frontend and backend state management practices.",

    githubUrl: "https://github.com/dhruvalshah05/BuyNow",
    liveUrl: "https://buy-now-phi.vercel.app/",
    image: buyNowImg,
  },
  {
    id: 2,
    title: "Online Book Store",
    stack: ["MERN", "JWT", "REST API", "Tailwind CSS", "Desi UI"],
    description:
      "MERN-based online bookstore with secure user authentication, role-based access control, and RESTful APIs for catalog and orders.",
    features: [
      "Role-based access (admin vs customer)",
      "Catalog & order management APIs",
      "Responsive UI with Tailwind & Desi UI",
    ],
    impact:
      "Supports real-time catalog updates and order workflows — separates admin and customer roles for secure operations.",
    githubUrl: "https://github.com/dhruvalshah05/Online-Book-Selling-Web-App",
    liveUrl: "",
    image: bookImg,
  },
  {
    id: 3,
    title: "Movie Ticket Booking System",
    stack: ["MERN", "JWT", "REST API"],
    description:
      "Full-stack booking app with JWT authentication, dynamic seat selection, showtime scheduling, and an admin panel for movie and show management.",
    features: [
      "Dynamic seat selection & booking flow",
      "Showtime scheduling system",
      "Protected admin routes for movie CRUD",
    ],
    impact:
      "Handles seat logic and admin CRUD in one flow — practical practice for transactional UI and protected routes.",
    githubUrl: "https://github.com/dhruvalshah05/Movie-Ticket-Booking-System",
    liveUrl: "",
    image: movieImg,
  },
  {
    id: 4,
    title: "EasyInvoice — Invoice Management System",
    stack: ["MERN", "JWT", "Razorpay", "PDFKit", "Recharts"],
    description:
      "Invoice management system with authentication, payment processing, PDF generation, and analytics dashboard.",
    features: [
      "JWT-based authentication with secure user access",
      "Razorpay payment integration with verification flow",
      "PDF invoice generation using PDFKit",
      "Analytics dashboard for revenue tracking using Recharts",
    ],
    impact:
      "Automates invoice creation, payment tracking, and revenue monitoring through a unified system.",

    githubUrl: "https://github.com/Meetpidev/Invoice",
    liveUrl: "https://invoice-eight-eta.vercel.app/",
    image: invoice,
  },

  {
    id: 5,
    title: "Student Management System",
    stack: [
      "Spring Boot",
      "Hibernate",
      "MySQL",
      "REST API",
      "React",
      "Tailwind CSS",
      "Redux",
    ],
    description:
      "Full-stack student management system with secure backend APIs and a responsive frontend for managing student records efficiently.",
    features: [
      "RESTful APIs using Spring Boot for CRUD operations",
      "Normalized MySQL database schema design",
      "React + Redux-based frontend for state management",
      "Responsive UI using Tailwind CSS",
    ],
    impact:
      "Strengthened full-stack development skills by integrating frontend state management with backend enterprise-style architecture.",

    githubUrl: "https://github.com/dhruvalshah05/Student-Management",
    liveUrl: "",
    image: sms,
  },
  {
    id: 6,
    title: "Expense Tracker",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "REST API"],
    description:
      "MERN app for tracking daily expenses with secure login, RESTful CRUD APIs, and a responsive dashboard to view and organize spending.",
    features: [
      "Secure user auth & session handling",
      "RESTful expense CRUD APIs",
      "Dashboard to filter and review spending",
    ],
    impact:
      "Clean separation of auth, API layer, and UI — focused on reliable expense management for everyday use.",
    githubUrl: "https://github.com/dhruvalshah05/Expenses-Project",
    liveUrl: "",
    image: expenseImg,
  },
  {
    id: 7,
    title: "Portfolio Website",
    stack: ["React", "Tailwind CSS", "Vite", "EmailJS", "Vercel"],
    description:
      "Personal portfolio with project showcase, skills, experience, and a contact form powered by EmailJS. Built with React, Tailwind v4, and a centralized design token system.",
    features: [
      "Modular sections & reusable UI Components",
      "EmailJS contact form with env-based config",
      "Custom design tokens — no default gray palette",
    ],
    impact:
      "Deployed on Vercel with fast load times and a consistent dark theme — this site.",
    githubUrl: "https://github.com/dhruvalshah05/Portfolio-",
    liveUrl: "https://dhruval-portfolio-lovat.vercel.app/",
    image: portfolioImg,
  },
];

export const EXPERIENCE = [
  {
    title: "Backend Developer Intern",
    company: "Toshal Infotech Pvt. Ltd.",
    startDate: "2025-12-01",
    endDate: "2026-03-31",
    location: "Remote",
    type: "Internship",
    bullets: [
      "Developed backend features using Node.js for production workflows.",
      "Built and maintained REST APIs with efficient server-side logic.",
      "Collaborated on debugging, API design, and code reviews.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Future Intern",
    startDate: "2025-05-01",
    endDate: "2025-06-01",
    location: "Remote",
    type: "Internship",
    bullets: [
      "Built responsive UI using React and modern frontend patterns.",
      "Integrated REST APIs using Node.js and Express.",
      "Worked with Git-based collaborative workflows.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "CLUMOSS",
    startDate: "2024-05-01",
    endDate: "2024-06-01",
    location: "Vadodara, Gujarat",
    type: "Internship",
    bullets: [
      "Developed responsive websites using HTML, CSS, JavaScript, and Bootstrap.",
      "Used Git for version control in a team environment.",
      "Improved understanding of UI structure and frontend workflows.",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "B.Tech — Computer Engineering",
    school: "Charotar University of Science and Technology (CHARUSAT)",
    period: "Aug 2022 – Apr 2026",
    location: "Anand, Gujarat",
    details: [
      "CGPA: 8.74",
      "Relevant courses: Data Structures, DBMS, Operating Systems",
      "Participated in inter-college hackathons and workshops",
    ],
  },
  {
    degree: "Higher Secondary (HSC — Science)",
    school: "New Education High School",
    period: "2020 – 2022",
    location: "Petlad, Anand",
    details: [
      "GSEB Board — Score: 78%",
      "Focus: Physics, Chemistry, Mathematics",
    ],
  },
];
