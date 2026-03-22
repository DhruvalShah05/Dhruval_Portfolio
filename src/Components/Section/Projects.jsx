import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import book from '../assets/Book_.jpg'; 
import BuyNow from '../assets/BuyNow.png'; 
import Portfolio from '../assets/Portfolio.jpg';
import Movie from '../assets/Movie.jpg';
import Expense from '../assets/Expense.png';
import Restaurant from '../assets/Restaurant.png';

const projectsData = [
  {
    id: 1,
    title: "Online Book Store",
    description: "Developed a MERN-based online bookstore with secure user authentication, role-based access, real-time catalog updates, and order management using RESTful APIs.",
    technologies: ["MERN", "JWT", "REST API", "Tailwind CSS", "Desi UI"],
    githubUrl: "https://github.com/DhruvalShah05/Online-Book-Selling-Web-App",
    liveUrl: "",
    imageUrl: book
  },
  {
    id: 2,
    title: "Movie Ticket Booking System",
    description: "Designed a full-stack MERN application with JWT authentication, dynamic seat selection, showtime scheduling, and an admin dashboard for efficient movie management.",
    technologies: ["MERN", "JWT", "REST API"],
    githubUrl: "https://github.com/DhruvalShah05/Movie-Ticket-Booking-System",
    liveUrl: "",
    imageUrl: Movie
  },
 {
  id: 3,
  title: "E-Commerce WebApp",
  description: "Developed a full-stack MERN e-commerce platform with secure JWT authentication, Google OAuth login, product catalog, shopping cart, and order management. Built an admin dashboard with analytics and product management, integrated Cloudinary for image uploads, and implemented state management using Redux Toolkit with a responsive UI built using Tailwind CSS.",
  technologies: ["MERN", "Redux Toolkit", "JWT", "Google OAuth", "Tailwind CSS", "Cloudinary", "REST API", "Recharts"],
  githubUrl: "https://github.com/DhruvalShah05/BuyNow",
  liveUrl: "",
  imageUrl: BuyNow
},
{
  id: 4,
  title: "Expense Tracker ",
  description: "Developed a full-stack MERN application that allows users to track and manage their daily expenses. Implemented secure user authentication, RESTful APIs for expense CRUD operations, and a responsive React interface to visualize and organize financial records efficiently.",
  technologies: ["MongoDB", "Express.js", "React", "Node.js", "REST API"],
  githubUrl: "https://github.com/DhruvalShah05/Expenses-Project",
  liveUrl: "",
  imageUrl: Expense
},
{
  id: 5,
  title: "Restaurant Website ",
  description: "Built a responsive restaurant website to understand React component architecture. Implemented reusable components such as Navbar, Menu, Food Cards, and Footer while practicing props, state management, and modular UI design.",
  technologies: ["React", "JavaScript", "HTML", "CSS"],
  githubUrl: "https://github.com/DhruvalShah05/Restaurant",
  liveUrl: "",
  imageUrl: Restaurant
},
  {
    id: 6,
    title: "Portfolio Website",
    description: "Responsive personal portfolio showcasing projects, skills, and contact form integration using EmailJS. Developed with React and Tailwind CSS, deployed on Vercel.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "EmailJS", "Vercel"],
    githubUrl: "https://github.com/DhruvalShah05/Portfolio-",
    liveUrl: "https://dhruvalportfolio-mu.vercel.app/",
    imageUrl: Portfolio
  },
  
  

];



function Projects() {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto">
        <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>
          Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-2 my-4 sm:my-6 md:my-8 lg:my-12">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-xl border border-white/10 bg-gray-900/50 hover:bg-gray-900/70 transition-all duration-300 hover:-translate-y-1 shadow-lg overflow-hidden"
            >
              {/* Image Section */}
              <div
                className="w-full h-48 sm:h-56 overflow-hidden cursor-pointer"
                onClick={() => window.open(project.liveUrl || project.githubUrl, "_blank")}
                title={`Open ${project.liveUrl ? "Live Demo" : "GitHub Repo"}`}
              >
                <img 
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-xs sm:text-sm whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition-colors font-medium text-sm sm:text-base"
                  >
                    <FiGithub className="mr-2" size={18} /> Code
                  </a>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-colors font-medium text-sm sm:text-base"
                    >
                      <FiExternalLink className="mr-2" size={18} /> Live Demo
                    </a>
                  ) : (
                    <div
                      className="flex items-center text-gray-500 cursor-not-allowed select-none font-medium opacity-50 text-sm sm:text-base"
                      title="Live demo not available — View code instead"
                    >
                      <FiExternalLink className="mr-2" size={18} /> Live Demo
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;