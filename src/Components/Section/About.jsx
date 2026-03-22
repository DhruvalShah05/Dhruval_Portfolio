import React from "react";

function About() {
 const skills = {
  languages: [
    {
      name: "HTML",
      proficiency: 80,
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      color: "#E34F26",
    },
    {
      name: "CSS",
      proficiency: 75,
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      color: "#1572B6",
    },
    {
      name: "JavaScript ",
      proficiency: 80,
      logo: "https://skillforge.com/wp-content/uploads/2020/10/javascript.png",
      color: "#F7DF1E",
    },
    {
      name: "Java",
      proficiency: 75,
      logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      color: "#007396",
    },
    {
      name: "Python",
      proficiency: 70,
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      color: "#3776AB",
    },
    {
      name: "C++",
      proficiency: 80,
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
      color: "#00599C",
    },
  ],

  frameworks: [
    {
      name: "React.js",
      proficiency: 80,
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      color: "#61DAFB",
    },
    {
      name: "Bootstrap",
      proficiency: 70,
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
      color: "#7952B3",
    },
    {
      name: "Tailwind CSS",
      proficiency: 70,
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      color: "#38B2AC",
    },
    {
      name: "Node.js",
      proficiency: 75,
      logo: "https://nodejs.org/static/images/logo.svg",
      color: "#339933",
    },
    {
      name: "Express.js",
      proficiency: 75,
      logo: "https://logowik.com/content/uploads/images/express-js1720895493.logowik.com.webp",
      color: "#000000",
    },
    {
      name: "Spring / Spring Boot",
      proficiency: 60,
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg",
      color: "#6DB33F",
    },
  ],

  databases: [
    {
      name: "MongoDB",
      proficiency: 70,
      logo: "https://i.pinimg.com/564x/90/3b/bb/903bbb31b5ae50326ae7d2eac38c9a33.jpg",
      color: "#47A248",
    },
    {
      name: "MySQL",
      proficiency: 70,
      logo: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
      color: "#4479A1",
    },
    {
      name: "PostgreSQL",
      proficiency: 65,
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
      color: "#336791",
    },
  ],

  others: [
    {
      name: "Git/GitHub",
      proficiency: 70,
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Github_logo_svg.svg",
      color: "#181717",
    },
    {
      name: "Postman",
      proficiency: 70,
      logo: "https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-svg-download-png-2945092.png?f=webp",
      color: "#FF6C37",
    },
    {
      name: "VS Code",
      proficiency: 80,
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
      color: "#007ACC",
    },
     {
    name: "Cloudinary",
    proficiency: 70,
    logo: "https://www.make.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fun655fb9wln6%2FappIcon-cloudinary%2Fbe41013e47cba82a426e1bbfac77e2c8%2Fcloudinary.png&w=3840&q=75",
    color: "#3399FF",
  },
  ],
};

const leftCategories = ["languages", "others"];
const rightCategories = ["frameworks", "databases"];
  const educationData = [
    {
      degree: "Bachelor's in Computer Engineering",
      institution: "Charotar University of Science and Technology (CHARUSAT)",
      duration: "2022 – Present",
      location: "Anand, Gujarat",
      details: [
        "CGPA: 8.60 (Till 7th Semester)",
        "Relevant Courses: Data Structures, DBMS, Operating Systems",
        "Participated in inter-college hackathons and workshops",
      ],
    },
    {
      degree: "Higher Secondary (HSC - Science)",
      institution: "New Education High School",
      duration: "2020 – 2022",
      location: "Petlad, Anand",
      details: [
        "GSEB Board | Score: 78%",
        "Focus Subjects: Physics, Chemistry, Mathematics",
      ],
    },
  ];

  const workData = [
    {
      title: "Backend Developer Intern",
      company: "Toshal Infotech Pvt. Ltd.",
      type: "internship",
      startDate: "2025-12-08",
      endDate: "present",
      location: "Remote",
      responsibilities: [
        "Developing backend functionalities using JavaScript and Node.js.",
        "Assisting in building and maintaining server-side logic and APIs.",
        "Collaborating with team members in a remote development environment.",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "Future Intern",
      type: "internship",
      startDate: "2025-05-16",
      endDate: "2025-06-16",
      location: "Bengaluru",
      responsibilities: [
        "Built responsive user interfaces utilizing modern front-end technologies such as ReactJS.",
        "Implemented RESTful API endpoints with Node.js and Express.",
        "Utilized version control systems such as Git to manage source code repositories.",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company: "CLUMOSS",
      type: "internship",
      startDate: "2024-05-13",
      endDate: "2024-06-28",
      location: "Vadodara",
      responsibilities: [
        "Developed a responsive salon website using HTML, CSS, JavaScript, and Bootstrap.",
        "Gained experience with Git version control for collaborative development.",
        "Enhanced understanding of web development workflows.",
      ],
    },
  ];



  const calculateExperienceByType = (data, type) => {
    let totalMonths = 0;

    data
      .filter((job) => job.type === type)
      .forEach((job) => {
        const startDate = new Date(job.startDate);
        const endDate =
          job.endDate === "present" ? new Date() : new Date(job.endDate);

        const months =
          (endDate.getFullYear() - startDate.getFullYear()) * 12 +
          (endDate.getMonth() - startDate.getMonth()) +
          1;

        totalMonths += months;
      });

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years > 0 && months > 0) return `${years} Years ${months} Months`;
    if (years > 0) return `${years} Years`;
    if (totalMonths > 0) return `${totalMonths} Months`;
    return "0 Months";
  };
  const formatDateRange = (start, end) => {
    const options = { month: "short", year: "numeric" };
    const startDate = new Date(start);

    if (end === "present") {
      return `${startDate.toLocaleDateString("en-US", options)} – Present`;
    }

    const endDate = new Date(end);
    return `${startDate.toLocaleDateString(
      "en-US",
      options
    )} – ${endDate.toLocaleDateString("en-US", options)}`;
  };

  return (
    <section
      id="about"
      className="flex flex-col pt-18 items-center justify-center md:min-h-screen py-2 w-full"
    >
      <div className="text-center z-10 max-w-7xl w-full px-4">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>

        {/* About Description */}
        <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all mb-8">
          <p className="text-gray-300 mb-6">
            As a full-stack developer, I enjoy creating innovative solutions and
            dynamic, responsive web applications.
          </p>
        </div>

        {/* Skills */}
        <div className="rounded-xl p-8 border border-white/10 bg-black">
          <h3 className="text-3xl font-bold mb-8 text-center text-blue-400">
            Skills
          </h3>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left */}
            <div className="flex-1 space-y-8 border-0 md:border-r border-blue-500 pr-4 md:pr-8">
              {leftCategories.map((category) => (
                <div key={category}>
                  <h4 className="text-xl font-semibold mb-4 capitalize text-white">
                    {category}
                  </h4>
                  <div className="space-y-4">
                    {skills[category].map(
                      ({ name, proficiency, logo }, idx) => (
                        <div key={idx} className="flex items-center space-x-4">
                          <div className="flex items-center space-x-3 w-44 md:w-56">
                            <img
                              src={logo}
                              alt={`${name} logo`}
                              className="w-7 h-7 object-contain"
                            />
                            <span className="text-white text-sm font-medium">
                              {name}
                            </span>
                          </div>
                          <div className="flex-1 bg-gray-800 rounded-full h-5 overflow-hidden shadow-inner">
                            <div
                              className="bg-blue-500 h-5 rounded-full transition-width duration-700"
                              style={{ width: `${proficiency}%` }}
                            />
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Right */}
            <div className="flex-1 space-y-8">
              {rightCategories.map((category) => (
                <div key={category}>
                  <h4 className="text-xl font-semibold mb-4 capitalize text-white">
                    {category}
                  </h4>
                  <div className="space-y-4">
                    {skills[category].map(
                      ({ name, proficiency, logo }, idx) => (
                        <div key={idx} className="flex items-center space-x-4">
                          <div className="flex items-center space-x-3 w-44 md:w-56">
                            <img
                              src={logo}
                              alt={`${name} logo`}
                              className="w-7 h-7 object-contain"
                            />
                            <span className="text-white text-sm font-medium">
                              {name}
                            </span>
                          </div>
                          <div className="flex-1 bg-gray-800 rounded-full h-5 overflow-hidden shadow-inner">
                            <div
                              className="bg-blue-500 h-5 rounded-full transition-width duration-700"
                              style={{ width: `${proficiency}%` }}
                            />
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education & Work Experience */}
        <div className="flex justify-center px-4 lg:px-20 mt-10">
          <div className="w-full max-w-6xl space-y-10">
            {/* 🎓 Education */}
            <section className="p-6 rounded-xl border border-white/10 bg-white/5 hover:-translate-y-1 transition-transform duration-300 shadow-md w-full">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400 flex justify-center items-center text-center">
                🎓 <span className="ml-2">Education</span>
              </h3>

              {/* Grid: 1 column on mobile, 2 on larger screens */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {educationData.map((edu, index) => (
                  <div
                    key={index}
                    className="w-full p-4 border border-white/10 rounded-lg hover:bg-white/10 transition text-left"
                  >
                    <p className="text-white font-bold text-xl text-center">
                      {edu.degree}
                    </p>
                    <p className="text-gray-400 text-lg text-center">
                      {edu.institution}
                    </p>
                    <p className="text-gray-500 text-sm text-center">
                      {edu.duration} | {edu.location}
                    </p>
                    <ul className="list-disc list-inside mt-4 text-gray-400 text-sm space-y-1">
                      {edu.details.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* 💼 Work Experience */}
            <section className="relative p-6 rounded-xl border border-white/10 bg-white/5 shadow-md w-full">
              <h3 className="text-2xl font-semibold mb-12 text-blue-400 flex justify-center items-center text-center">
                💼 <span className="ml-2">Work Experience</span>
              </h3>
              <p className="text-gray-400 text-sm text-center mb-10 flex justify-center gap-4 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                  <span className="text-blue-400 font-semibold">Work:</span>{" "}
                  <span className="text-white font-medium">
                    {calculateExperienceByType(workData, "work")}
                  </span>
                </span>

                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                  <span className="text-blue-400 font-semibold">
                    Internship:
                  </span>{" "}
                  <span className="text-white font-medium">
                    {calculateExperienceByType(workData, "internship")}
                  </span>
                </span>
              </p>

              <div className="relative flex flex-col items-center">
                {/* Center Vertical Line - Always stays in center with z-index 5 */}
                <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-cyan-400 z-5" />

                {/* Mobile Vertical Line */}
                <div className="absolute md:hidden left-2 h-full w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-cyan-400 z-5" />

                {workData.map((job, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                    <div
                      key={index}
                      className="mb-12 w-full flex flex-col md:flex-row items-center justify-between relative"
                    >
                      {/* Dynamic Vertical Line Segment from center to card - Left or Right */}
                      {isLeft && (
                        <div className="hidden md:block absolute left-1/2 top-0 w-1 h-12 bg-gradient-to-b from-blue-500 to-blue-400" style={{marginLeft: '-2px'}} />
                      )}
                      {!isLeft && (
                        <div className="hidden md:block absolute left-1/2 top-0 w-1 h-12 bg-gradient-to-b from-blue-500 to-blue-400" style={{marginLeft: '-2px'}} />
                      )}

                      {/* Timeline Dot */}
                      <div
                        className={`absolute ${
                          isLeft
                            ? "md:left-1/4 md:-translate-x-1/2"
                            : "md:left-3/4 md:-translate-x-1/2"
                        } left-2 bg-gradient-to-br from-blue-400 to-cyan-300 border-4 border-slate-900 w-5 h-5 rounded-full z-10 shadow-lg shadow-blue-500/50`}
                      />

                      {/* Horizontal Connecting Line - always from center to card middle */}
                      {isLeft && (
                        <div className="hidden md:block absolute left-1/4 top-1/3 w-1/4 h-1 bg-gradient-to-r from-blue-500 to-blue-400" />
                      )}

                      {/* Horizontal Connecting Line - Right Side */}
                      {!isLeft && (
                        <div className="hidden md:block absolute left-1/2 top-1/3 w-1/4 h-1 bg-gradient-to-l from-blue-500 to-blue-400" />
                      )}

                      {/* White Dot at intersection of horizontal and center vertical line */}
                      <div className="hidden md:block absolute left-1/2 top-1/3 w-3 h-3 bg-white rounded-full z-30 transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-blue-500/70 border border-blue-400" />

                      {/* Content */}
                      <div
                        className={`w-full md:w-5/12 ${
                          isLeft ? "md:pr-8" : "md:order-2 md:pl-8"
                        } ${isLeft ? "ml-10 md:ml-0" : "ml-10 md:ml-0"} relative z-20`}
                      >
                        <div className="bg-slate-900 border-2 border-blue-400 rounded-lg p-4 shadow-lg hover:shadow-blue-500/50 hover:border-blue-300 transition duration-300">
                          <p className="text-white font-bold text-lg md:text-xl">
                            {job.title}
                          </p>
                          <p className="text-blue-300 font-semibold text-sm md:text-base">
                            {job.company}
                          </p>
                          <p className="text-gray-400 text-xs md:text-sm">
                            {formatDateRange(job.startDate, job.endDate)} |{" "}
                            {job.location}
                          </p>

                          <ul className="list-disc list-inside mt-3 text-gray-300 text-xs md:text-sm space-y-1">
                            {job.responsibilities.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Spacer for alignment on big screen */}
                      <div className="hidden md:block md:w-5/12" />
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;