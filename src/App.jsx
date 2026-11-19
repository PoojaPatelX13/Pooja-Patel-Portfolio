
import { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaExternalLinkAlt,
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaChartBar,
  FaTools,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaGraduationCap,
  FaBriefcase,
  FaAward,
  FaGlobe,
  FaHeart,
  FaArrowRight,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaCertificate,
  FaLightbulb,
  FaProjectDiagram,
  FaFilePdf,
  FaBookOpen,
  FaUniversity,
  FaCalendarAlt,
  FaStar,
} from "react-icons/fa";

import BlurText from "./components/BlurText";
import "./App.css";

const RESUME_URL = "/PoojaPatelX13%20Resume.pdf";

// PERSONAL INFORMATION

const personalInfo = {
  name: "POOJA PATEL",
  title: "Aspiring Software Developer",
  headline:
    "BCA Student | MERN Stack Enthusiast | Data Analytics Enthusiast",
  email: "poojapatel53032@gmail.com",
  phone: "+91 8652136933",
  location: "Bengaluru, Karnataka, India",
  github: "https://github.com/PoojaPatelX13",
  linkedin: "https://www.linkedin.com/in/poojapatelx13",
  profileImage: "/profile.jpg",
};

// NAVIGATION

const navigation = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Internships", link: "#internships" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#education" },
  { name: "Certificates", link: "#certificates" },
  { name: "Contact", link: "#contact" },
];

// HIGHLIGHTS

const highlights = [
  {
    number: "4",
    title: "Featured Projects",
    description: "Deployed practical projects",
    icon: <FaProjectDiagram />,
  },
  {
    number: "2",
    title: "Internship Experiences",
    description: "Web Development and Data Analytics",
    icon: <FaBriefcase />,
  },
  {
    number: "6",
    title: "Certificates",
    description: "IBM SkillsBuild and Thiranex credentials",
    icon: <FaCertificate />,
  },
  {
    number: "2024–2027",
    title: "BCA Journey",
    description: "Bengaluru City University",
    icon: <FaGraduationCap />,
  },
];

// SKILLS

const skillGroups = [
  {
    title: "Programming Languages",
    icon: <FaCode />,
    description:
      "Programming fundamentals and logical problem-solving using:",
    skills: ["Python", "JavaScript"],
  },
  {
    title: "Frontend Development",
    icon: <FaLaptopCode />,
    description:
      "Building responsive and user-friendly web interfaces using:",
    skills: ["HTML", "Bootstrap", "React.js"],
  },
  {
    title: "Backend Development",
    icon: <FaCode />,
    description:
      "Learning server-side development and REST API creation using:",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Database Management",
    icon: <FaDatabase />,
    description:
      "Working with relational and NoSQL database technologies:",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Data Analytics",
    icon: <FaChartBar />,
    description:
      "Practicing data organization, analysis and visual presentation using:",
    skills: [
      "Microsoft Excel",
      "Data Visualization",
      "Customer Segmentation",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: <FaTools />,
    description:
      "Using development tools and platforms during practical work:",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

// INTERNSHIPS

const internships = [
  {
    role: "Web Development Intern",
    company: "Thiranex EduTech LLP",
    duration: "July 2026 – August 2026",
    credential: "THX-JUL0926-125",
    certificate:
      "https://drive.google.com/file/d/1zEGAsajmqgF31Tk_fXEeNmVM9qu6eezm/view?usp=drivesdk",
    lor:
      "https://drive.google.com/file/d/1U4fGmOy0_GzotfzcIDUmRT63Rr6refQB/view?usp=drivesdk",
    description:
      "Designed and developed responsive user interfaces using HTML, CSS, JavaScript and Bootstrap. Practiced improving webpage layouts, multi-device rendering and front-end components.",
    learning: [
      "Practiced creating responsive web pages.",
      "Worked on webpage layouts and user interface improvements.",
      "Tested and refined front-end components.",
    ],
  },
  {
    role: "Data Analytics Intern",
    company: "Thiranex EduTech LLP",
    duration: "July 2026 – August 2026",
    credential: "THX-JUL0326-013",
    certificate:
      "https://drive.google.com/file/d/1DsRyi0SZsZDLRGZEH8V996CVSKZFqm_L/view?usp=drivesdk",
    lor:
      "https://drive.google.com/file/d/1xG86yNUQaxWOgD6SUEGzsPUdQuXWnJmA/view?usp=drivesdk",
    description:
      "Cleaned, preprocessed and structured datasets using Microsoft Excel. Practiced exploratory data analysis and created data visualizations to present analytical findings.",
    learning: [
      "Practiced data cleaning and preprocessing.",
      "Performed exploratory data analysis.",
      "Created data visualizations and analytical reports.",
    ],
  },
];

// PROJECTS — EXACTLY FOUR

const projects = [
  {
    title: "Book Basket",
    category: "MERN Stack",
    number: "01",
    description:
      "An online library management system developed using the MERN Stack. The application helps users explore books and organize their personal reading library.",
    features: [
      "Book search and exploration",
      "Book details and information",
      "Add books to personal library",
      "Reading status management",
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/PoojaPatelX13/Book-Basket",
    live: "https://book-basket-puce.vercel.app/",
  },
  {
    title: "Technika Courses",
    category: "React Development",
    number: "02",
    description:
      "A React-based course listing application that organizes technical and programming courses with category-based filtering.",
    features: [
      "Course listing interface",
      "Technical course category",
      "Programming course category",
      "Dynamic course filtering",
    ],
    technologies: ["React.js", "JavaScript", "CSS"],
    github: "https://github.com/PoojaPatelX13/Technika-Courses",
    live: "https://technika-course.vercel.app/",
  },
  {
    title: "Bit Demo",
    category: "Web Development",
    number: "03",
    description:
      "A practical web development project created to practice website structure, layout and front-end implementation.",
    features: [
      "Webpage structure",
      "Front-end implementation",
      "Responsive interface practice",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/PoojaPatelX13/Bit-Demo",
    live: "https://bit-demo-deploy.vercel.app/",
  },
  {
    title: "Cinescope",
    category: "React Development",
    number: "04",
    description:
      "A movie browsing application developed with React. It provides an interface for exploring movies and managing a personal watchlist.",
    features: [
      "Movie browsing interface",
      "Movie details section",
      "Watchlist functionality",
    ],
    technologies: ["React.js", "JavaScript", "CSS"],
    github: "https://github.com/PoojaPatelX13/Cinescope",
    live: "https://cinescope-deploy.vercel.app/",
  },
];

const projectFilters = [
  "All",
  "MERN Stack",
  "React Development",
  "Web Development",
];

// EDUCATION

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    shortDegree: "Undergraduate Degree",
    institution:
      "Aditya Institute of Management Studies and Research",
    university: "Bengaluru City University",
    duration: "2024 – 2027",
    status: "Currently Pursuing",
    details: [
      "Learning programming languages such as Python and JavaScript.",
      "Studying web development and MERN Stack technologies.",
      "Gaining knowledge of database management using SQL and MongoDB.",
      "Working on practical projects and technical assignments.",
      "Developing problem-solving and analytical skills.",
    ],
    result: "4th Semester SGPA: 8.02",
    icon: <FaGraduationCap />,
    featured: true,
  },
  {
    degree: "Pre-University Course (PUC)",
    shortDegree: "Higher Secondary Education",
    institution: "CMR National PU College",
    university: "Karnataka Pre-University Education Board",
    duration: "2022 – 2024",
    status: "Completed",
    details: [
      "Completed Pre-University education.",
      "Built a foundation in academic and analytical learning.",
      "Developed communication and problem-solving skills.",
      "Gained an interest in computers and technology.",
    ],
    result: "58%",
    icon: <FaBookOpen />,
    featured: false,
  },
];

// CERTIFICATES — SIX RESUME CERTIFICATES

const certificates = [
  {
    title: "Data Analytics Internship",
    issuer: "Thiranex EduTech LLP",
    date: "July 2026",
    description:
      "Internship certificate recognizing practical experience in data cleaning, analysis, visualization and reporting.",
    link:
      "https://drive.google.com/file/d/1DsRyi0SZsZDLRGZEH8V996CVSKZFqm_L/view?usp=drivesdk",
  },
  {
    title: "Web Development Internship",
    issuer: "Thiranex EduTech LLP",
    date: "July 2026",
    description:
      "Internship certificate recognizing practical experience in responsive web development and front-end technologies.",
    link:
      "https://drive.google.com/file/d/1zEGAsajmqgF31Tk_fXEeNmVM9qu6eezm/view?usp=drivesdk",
  },
  {
    title: "AI Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "February 2026",
    description:
      "Developed foundational knowledge of Artificial Intelligence concepts and applications.",
    link:
      "https://drive.google.com/file/d/125D9D9AtAF8erzxq97Ti464KpBVME4c_/view?usp=drivesdk",
  },
  {
    title: "Getting Started with Generative AI",
    issuer: "IBM SkillsBuild",
    date: "July 2026",
    description:
      "Learned the fundamentals of Generative AI, its practical applications and responsible use.",
    link:
      "https://drive.google.com/file/d/1D_8d31qNFH7Bi2gBjlin6u881okFhonJ/view?usp=drivesdk",
  },
  {
    title: "AI Language and Vision",
    issuer: "IBM SkillsBuild",
    date: "February 2026",
    description:
      "Explored foundational concepts and applications of language and vision in Artificial Intelligence.",
    link:
      "https://drive.google.com/file/d/1MZB3Ob0L91P-AXVjkKlfEs0iRQ2iA4hE/view?usp=drivesdk",
  },
  {
    title: "Project Management",
    issuer: "IBM SkillsBuild",
    date: "February 2026",
    description:
      "Learned project planning, organization, teamwork and time management fundamentals.",
    link:
      "https://drive.google.com/file/d/1RUul2-fepc4_XIO2GY1Vzi4yTUd4Oc5h/view?usp=drivesdk",
  },
];

// LANGUAGES

const languages = [
  "English",
  "Hindi",
  "Kannada",
  "Rajasthani",
];

// PROFESSIONAL INTERESTS

const interests = [
  {
    title: "Software Development",
    description:
      "Building useful applications and improving programming skills.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Web Development",
    description:
      "Creating responsive websites and exploring modern web technologies.",
    icon: <FaCode />,
  },
  {
    title: "Data Analytics",
    description:
      "Understanding datasets and presenting meaningful insights.",
    icon: <FaChartBar />,
  },
  {
    title: "Learning New Technologies",
    description:
      "Continuously exploring tools and technologies in the IT field.",
    icon: <FaLightbulb />,
  },
  {
    title: "Problem Solving",
    description:
      "Developing logical thinking and finding practical solutions.",
    icon: <FaCheckCircle />,
  },
  {
    title: "Continuous Learning & Personal Growth",
    description:
      "Improving my knowledge, developing new skills and staying updated with emerging technologies.",
    icon: <FaGraduationCap />,
  },
];

// REUSABLE SECTION HEADING

function SectionHeading({ label, title, description }) {
  return (
    <div className="section-heading">
      <span className="section-label">{label}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

// MAIN APP

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
        (project) => project.category === activeFilter
      );

  return (
    <div className="app">
      {/* NAVBAR */}

      <header className="navbar">
        <div className="nav-container">
          <a
            className="logo"
            href="#home"
            onClick={() => setMenuOpen(false)}
          >
            POOJA PATEL<span>.</span>
          </a>

          <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="resume-nav-link"
              onClick={() => setMenuOpen(false)}
              aria-label="View Resume"
              title="View Resume"
            >
              <FaFilePdf />
              <span>Resume</span>
            </a>
          </nav>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}

        <section className="hero-section" id="home">
          <div className="hero-container">
            <div className="hero-content">
              <span className="hero-greeting">
                Hello, I'm Pooja
              </span>

              <div className="hero-name">
                <BlurText
                  text={personalInfo.name}
                  delay={100}
                  animateBy="letters"
                  direction="top"
                  className="hero-blur-text"
                />
                <span className="hero-name-dot">.</span>
              </div>

              <h2>{personalInfo.title}</h2>

              <p className="hero-headline">
                {personalInfo.headline}
              </p>

              <p className="hero-description">
                Motivated BCA student with knowledge of Python,
                JavaScript, MERN Stack and Data Analytics.
                Experienced in building practical projects and
                developing web applications. Passionate about
                learning new technologies and growing as a Software
                Developer.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="primary-btn">
                  Explore My Work <FaArrowRight />
                </a>

                <a href="#contact" className="secondary-btn">
                  Contact Me
                </a>
              </div>

              <div className="hero-socials">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>

                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="resume-hero-icon"
                  aria-label="View Resume"
                  title="View Resume"
                >
                  <FaFilePdf />
                </a>
              </div>
            </div>

            <div className="hero-image-wrapper">
              <div className="hero-image-border">
                <img
                  src={personalInfo.profileImage}
                  alt="Pooja Patel"
                  className="hero-image"
                />
              </div>

              <div className="hero-image-caption">
                <span className="status-dot"></span>
                Aspiring Software Developer
              </div>
            </div>
          </div>

          <a href="#about" className="hero-scroll">
            Scroll to explore <span>↓</span>
          </a>
        </section>

        {/* HIGHLIGHTS */}

        <section className="highlights-section" id="highlights">
          <div className="container">
            <SectionHeading
              label="MY JOURNEY"
              title="Highlights"
              description="A quick overview of my academic journey, practical experience and learning achievements."
            />

            <div className="highlights-grid">
              {highlights.map((item) => (
                <div className="highlight-card" key={item.title}>
                  <div className="highlight-icon">{item.icon}</div>
                  <h3>{item.number}</h3>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROFILE SUMMARY */}

        <section className="about-section section" id="about">
          <div className="container">
            <SectionHeading
              label="GET TO KNOW ME"
              title="Profile Summary"
              description="A little about my academic background, experience and career goals."
            />

            <div className="about-content">
              <div className="about-text">
                <h3>Building My Journey in Technology</h3>

                <p>
                  I am a Bachelor of Computer Applications (BCA)
                  student at Aditya Institute of Management Studies
                  and Research, Bengaluru City University. I have
                  developed an interest in software development,
                  web technologies and data analytics through
                  academic learning and practical projects.
                </p>

                <p>
                  I have gained practical exposure to Python,
                  JavaScript, HTML, Bootstrap, React.js, Node.js,
                  Express.js, MongoDB and Microsoft Excel. I have
                  also completed internship experiences in Web
                  Development and Data Analytics at Thiranex
                  EduTech LLP.
                </p>

                <p>
                  I consider myself hardworking, responsible and
                  a quick learner. I enjoy exploring new technologies,
                  improving my technical abilities and applying
                  what I learn through practical work.
                </p>

                <p>
                  My career goal is to become a skilled Software
                  Developer and build a strong foundation in the
                  IT industry.
                </p>
              </div>

              <div className="about-details">
                <div className="about-detail-card">
                  <FaGraduationCap />
                  <div>
                    <span>Education</span>
                    <strong>Bachelor of Computer Applications</strong>
                  </div>
                </div>

                <div className="about-detail-card">
                  <FaMapMarkerAlt />
                  <div>
                    <span>Location</span>
                    <strong>{personalInfo.location}</strong>
                  </div>
                </div>

                <div className="about-detail-card">
                  <FaBriefcase />
                  <div>
                    <span>Career Goal</span>
                    <strong>Software Developer</strong>
                  </div>
                </div>

                <div className="about-detail-card">
                  <FaHeart />
                  <div>
                    <span>Strengths</span>
                    <strong>
                      Hardworking, Responsible, Quick Learner
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}

        <section className="skills-section section" id="skills">
          <div className="container">
            <SectionHeading
              label="WHAT I WORK WITH"
              title="Skills & Technologies"
              description="Technologies and tools I have explored through coursework, internships and practical projects."
            />

            <div className="skills-grid">
              {skillGroups.map((group) => (
                <div className="skill-card" key={group.title}>
                  <div className="skill-icon">{group.icon}</div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>

                  <div className="skill-tags">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERNSHIPS */}

        <section
          className="internships-section section"
          id="internships"
        >
          <div className="container">
            <SectionHeading
              label="PRACTICAL EXPERIENCE"
              title="Internship Experience"
              description="Learning and applying technical concepts through internship opportunities."
            />

            <div className="internships-grid">
              {internships.map((internship) => (
                <div className="internship-card" key={internship.role}>
                  <div className="internship-top">
                    <div className="internship-icon">
                      <FaBriefcase />
                    </div>

                    <span className="internship-date">
                      {internship.duration}
                    </span>
                  </div>

                  <h3>{internship.role}</h3>
                  <h4>{internship.company}</h4>
                  <p>{internship.description}</p>

                  <h5>Key Learning</h5>

                  <ul>
                    {internship.learning.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="credential-line">
                    Credential ID:{" "}
                    <strong>{internship.credential}</strong>
                  </div>

                  <div className="internship-links">
                    <a
                      href={internship.certificate}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaCertificate />
                      View Certificate
                      <FaExternalLinkAlt />
                    </a>

                    <a
                      href={internship.lor}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaAward />
                      View LOR
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}

        <section className="projects-section section" id="projects">
          <div className="container">
            <SectionHeading
              label="SELECTED WORK"
              title="Projects"
              description="A selection of four practical projects. Explore the live applications or view their source code."
            />

            <div className="project-filters">
              {projectFilters.map((filter) => (
                <button
                  key={filter}
                  className={
                    activeFilter === filter ? "active" : ""
                  }
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-card-top">
                    <span className="project-number">
                      {project.number}
                    </span>

                    <span className="project-category">
                      {project.category}
                    </span>
                  </div>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <h4>Key Features</h4>

                  <ul className="project-features">
                    {project.features.map((feature) => (
                      <li key={feature}>
                        <FaCheckCircle />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="project-tech">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link live-project-link"
                    >
                      Live Demo <FaArrowRight />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      <FaGithub /> GitHub <FaExternalLinkAlt />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}

        <section className="education-section section" id="education">
          <div className="container">
            <SectionHeading
              label="ACADEMIC BACKGROUND"
              title="Education"
              description="My academic journey, qualifications and learning milestones."
            />

            <div className="education-timeline">
              {education.map((item, index) => (
                <article
                  className={`education-card education-card-${index + 1} ${item.featured ? "education-featured" : ""
                    }`}
                  key={item.degree}
                >
                  <div className="education-timeline-marker">
                    <span>{index + 1}</span>
                  </div>

                  <div className="education-card-inner">
                    <div className="education-card-header">
                      <div className="education-icon">
                        {item.icon}
                      </div>

                      <div className="education-status">
                        <span
                          className={`education-status-dot ${item.featured ? "current" : "completed"
                            }`}
                        ></span>
                        {item.status}
                      </div>
                    </div>

                    <div className="education-main-info">
                      <span className="education-degree-type">
                        {item.shortDegree}
                      </span>

                      <h3>{item.degree}</h3>

                      <h4>
                        <FaUniversity />
                        {item.institution}
                      </h4>

                      <p className="education-university">
                        {item.university}
                      </p>
                    </div>

                    <div className="education-duration">
                      <FaCalendarAlt />
                      <span>{item.duration}</span>
                    </div>

                    <div className="education-divider"></div>

                    <div className="education-learning">
                      <h5>
                        <FaBookOpen />
                        Academic Highlights
                      </h5>

                      <ul>
                        {item.details.map((detail) => (
                          <li key={detail}>
                            <FaCheckCircle />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="education-result">
                      <div className="education-result-icon">
                        <FaStar />
                      </div>

                      <div>
                        <span>Academic Result</span>
                        <strong>{item.result}</strong>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATES */}

        <section
          className="certificates-section section"
          id="certificates"
        >
          <div className="container">
            <SectionHeading
              label="LEARNING & DEVELOPMENT"
              title="Certificates & Achievements"
              description="Six selected certificates from my learning and professional experiences. Open each link to view the proof."
            />

            <div className="certificates-grid">
              {certificates.map((certificate, index) => (
                <article
                  className="certificate-card"
                  key={certificate.title}
                >
                  <div className="certificate-card-top">
                    <div className="certificate-icon">
                      <FaAward />
                    </div>

                    <span className="certificate-number">
                      0{index + 1}
                    </span>
                  </div>

                  <span className="certificate-date">
                    {certificate.date}
                  </span>

                  <h3>{certificate.title}</h3>
                  <h4>{certificate.issuer}</h4>
                  <p>{certificate.description}</p>

                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noreferrer"
                    className="certificate-link"
                  >
                    <FaFilePdf />
                    View Certificate
                    <FaExternalLinkAlt />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* LANGUAGES */}

        <section className="languages-section section" id="languages">
          <div className="container">
            <SectionHeading
              label="COMMUNICATION"
              title="Languages"
              description="Languages I use for communication and everyday interaction."
            />

            <div className="languages-grid">
              {languages.map((language) => (
                <div className="language-card" key={language}>
                  <div className="language-icon">
                    <FaGlobe />
                  </div>

                  <h3>{language}</h3>
                  <span>Communication</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROFESSIONAL INTERESTS */}

        <section className="interests-section section" id="interests">
          <div className="container">
            <SectionHeading
              label="CAREER FOCUS"
              title="Professional Interests"
              description="Areas that motivate me to learn, explore and grow professionally."
            />

            <div className="interests-grid">
              {interests.map((interest) => (
                <div className="interest-card" key={interest.title}>
                  <div className="interest-icon">
                    {interest.icon}
                  </div>

                  <h3>{interest.title}</h3>
                  <p>{interest.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}

        <section className="contact-section section" id="contact">
          <div className="container">
            <SectionHeading
              label="GET IN TOUCH"
              title="Contact Me"
              description="Feel free to connect with me for professional opportunities, collaboration or discussions."
            />

            <div className="contact-wrapper">
              <div className="contact-intro">
                <span className="contact-eyebrow">
                  LET'S CONNECT
                </span>

                <h3>Have an opportunity or idea?</h3>

                <p>
                  I am always interested in learning, connecting with
                  professionals and exploring opportunities to grow
                  in the technology field.
                </p>

                <div className="contact-note">
                  <span className="status-dot"></span>
                  Open to learning and professional opportunities
                </div>

                <div className="contact-location">
                  <FaMapMarkerAlt />
                  {personalInfo.location}
                </div>
              </div>

              <div className="contact-grid">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="contact-card"
                >
                  <span className="contact-icon">
                    <FaEnvelope />
                  </span>

                  <span className="contact-details">
                    <small>Email</small>
                    <strong>{personalInfo.email}</strong>
                  </span>

                  <FaArrowRight className="contact-arrow" />
                </a>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                  className="contact-card"
                >
                  <span className="contact-icon">
                    <FaPhone />
                  </span>

                  <span className="contact-details">
                    <small>Phone</small>
                    <strong>{personalInfo.phone}</strong>
                  </span>

                  <FaArrowRight className="contact-arrow" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                >
                  <span className="contact-icon">
                    <FaLinkedin />
                  </span>

                  <span className="contact-details">
                    <small>LinkedIn</small>
                    <strong>Connect on LinkedIn</strong>
                  </span>

                  <FaArrowRight className="contact-arrow" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                >
                  <span className="contact-icon">
                    <FaGithub />
                  </span>

                  <span className="contact-details">
                    <small>GitHub</small>
                    <strong>Explore My Repositories</strong>
                  </span>

                  <FaArrowRight className="contact-arrow" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}

      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="#home" className="footer-logo">
                POOJA PATEL<span>.</span>
              </a>

              <p>
                BCA Student | MERN Stack Enthusiast |
                Data Analytics Enthusiast
              </p>

              <span className="footer-tagline">
                Learning. Building. Growing.
              </span>
            </div>

            <div className="footer-social-section">
              <h3>Connect With Me</h3>

              <div className="footer-socials">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                  aria-label="Phone"
                >
                  <FaPhone />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} POOJA PATEL. All Rights Reserved.
            </p>

            <a href="#home" className="back-to-top">
              Back to Top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
