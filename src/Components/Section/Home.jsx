import React, { useState, useEffect } from "react";
import DSIMG from "../assets/DSIMG.jpg";

const dynamicTexts = [
  "Aspiring SDE",
  "Full Stack Developer",
  "MERN Stack Developer",
  "Node.js Backend Developer",
  "Java Developer",
  "AI Enthusiast",
  "ML Enthusiast",
  "React.js Developer",
  "Software Engineer",
  "Problem Solver",
  "Open Source Contributor",
  "Tech Innovator",
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;

    if (typing) {
      if (displayedText.length < dynamicTexts[currentIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(dynamicTexts[currentIndex].slice(0, displayedText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setTyping(false), 1500);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        setTyping(true);
        setCurrentIndex((prev) => (prev + 1) % dynamicTexts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, typing, currentIndex]);

  return (
    <section
      id="home"
      className="md:min-h-screen  flex flex-col lg:flex-row items-center justify-center  md:pt-0 px-4 sm:px-2 sm:pt-1">
      {/* Left Column (Text Section) */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="text-center lg:text-left max-w-2xl space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Hello, I'm Dhruval
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white min-h-[3rem] break-words">
            I’m{" "}
            <span className="inline-block text-blue-400">
              {displayedText}
              <span className="ml-1 animate-blink border-r-2 border-blue-400" />
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
           
         Motivated Computer Engineering student with hands-on experience from multiple internships. Skilled in full-stack MERN development, Java & Spring Boot backend, Python for AI/ML, and DSA. An AI and ML enthusiast, passionate about building scalable applications, integrating APIs, and solving real-world problems. Seeking an entry-level SDE role to contribute and grow in a dynamic tech environment.
            .
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-lg text-sm sm:text-base"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500 text-blue-500 px-6 py-3 rounded font-medium transition hover:-translate-y-0.5 hover:bg-blue-500/10 hover:shadow-lg text-sm sm:text-base"
            >
              Contact Me
            </a>
            <a
              href="/Dhruval_Resume.pdf"
              download="Dhruval_Resume.pdf"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-lg text-sm sm:text-base"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>

      {/* Right Column (Image Section) */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center items-center">
        <img
          src={DSIMG}
          alt="Profile of Dhruval"
          className="rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-cover object-top-right shadow-lg border-2 border-blue-500 transition-transform duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
}

export default Home;
