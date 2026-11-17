
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
} from "react-icons/fa";

import "./App.css";

const RESUME_URL = "/PoojaPatelX13%20Resume.pdf";

// ========================================
// PERSONAL INFORMATION
// ========================================

const personalInfo = {
  name: "POOJA PATEL",
  title: "Aspiring Software Developer",
  headline:
    "BCA Student | MERN Stack Enthusiast | Data Analytics Enthusiast",
  email: "poojapatel53032@gmail.com",
  phone: "+91 8652136933",
  location: "Bengaluru, Karnataka, India",
  github: "https://github.com/PoojaPatelX13",
  linkedin: "https://www.linkedin.com/in/pooja-patel-48666a386",
  profileImage: "/profile.jpg",
};

// ========================================
// NAVIGATION
// ========================================

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

// ========================================
// HIGHLIGHTS
// ========================================

const highlights = [
  {
    number: "10+",
    title: "Projects",
    description: "Academic and practical projects",
    icon: <FaProjectDiagram />,
  },
  {
    number: "2",
    title: "Internship Experiences",
    description: "Web Development and Data Analytics",
    icon: <FaBriefcase />,
  },
  {
    number: "12",
    title: "Certificates & Recognition",
    description: "IBM and Thiranex credentials",
    icon: <FaCertificate />,
  },
  {
    number: "2024–2027",
    title: "BCA Journey",
    description: "Bengaluru City University",
    icon: <FaGraduationCap />,
  },
];

// ========================================
// SKILLS
// ========================================

const skillGroups = [
  {
    title: "Programming Languages",
    icon: <FaCode />,
    description:
      "Programming fundamentals and writing logical solutions using:",
    skills: ["Python", "JavaScript"],
  },
  {
    title: "Frontend Development",
    icon: <FaLaptopCode />,
    description:
      "Building responsive and user-friendly web interfaces using:",
    skills: ["HTML", "CSS", "Bootstrap", "React.js"],
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
      "Data Visualisation",
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

// ========================================
// INTERNSHIPS
// ========================================

const internships = [
  {
    role: "Web Development Intern",
    company: "Thiranex EduTech LLP",
    duration: "July 2026 – August 2026",
    credential: "THX-JUL0926-125",
    description:
      "Designed and constructed responsive user interfaces using HTML, CSS, JavaScript, and Bootstrap. Optimized website layout structures for seamless multi-device rendering and cross-browser support. Tested, debugged, and refined front-end components to enhance overall user experience.",
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
    description:
      "Cleaned, preprocessed, and structured raw datasets using Microsoft Excel to ensure data integrity. Executed exploratory data analysis and built dynamic data visualizations to track metrics. Collaborated with cross-functional teams to present key analytical findings and reports.",
    learning: [
      "Practiced data cleaning and preprocessing.",
      "Performed exploratory data analysis.",
      "Created data visualizations and analytical reports.",
    ],
  },
];

// ========================================
// PROJECTS
// ========================================

const projects = [
  {
    title: "Book Basket",
    category: "MERN Stack",
    description:
      "An online library management system developed using the MERN Stack. The application focuses on helping users explore books and organize their personal reading library.",
    features: [
      "Book search and exploration",
      "Book details and information",
      "Add books to personal library",
      "Reading status management",
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/PoojaPatelX13/Book-Basket",
  },
  {
    title: "Destiny Travels",
    category: "Backend Development",
    description:
      "A travel destination management API developed using Node.js, Express.js and MongoDB. It demonstrates backend development and database operations.",
    features: [
      "Create and manage destinations",
      "Read and retrieve records",
      "Update and delete records",
      "Filtering, sorting and pagination",
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "Postman"],
    github: "https://github.com/PoojaPatelX13/Destiny-Travels",
  },
  {
    title: "Technika Courses",
    category: "React Development",
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
  },
  {
    title: "Cinescope",
    category: "React Development",
    description:
      "A movie browsing application developed with React. It provides an interface for exploring movies and managing a personal watchlist.",
    features: [
      "Movie browsing interface",
      "Movie details section",
      "Watchlist functionality",
    ],
    technologies: ["React.js", "JavaScript", "CSS"],
    github: "https://github.com/PoojaPatelX13/Cinescope",
  },
  {
    title: "Foodie Card",
    category: "Web Development",
    description:
      "A web development practice project focused on creating a structured and visually appealing food-related card interface.",
    features: [
      "Card-based layout",
      "User interface practice",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/PoojaPatelX13/Foodie-Card",
  },
  {
    title: "Bit Demo",
    category: "Web Development",
    description:
      "A practical web development project created to practice website structure, layout and frontend implementation.",
    features: [
      "Webpage structure",
      "Frontend practice",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/PoojaPatelX13/Bit-Demo",
  },
  {
    title: "Type Rush",
    category: "Web Development",
    description:
      "A typing practice project focused on interactive user interface development and JavaScript functionality.",
    features: [
      "Typing practice interface",
      "Interactive functionality",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/PoojaPatelX13/Type-Rush-",
  },
  {
    title: "Sales & Revenue Dashboard",
    category: "Data Analytics",
    description:
      "A data analytics project focused on organizing sales information and presenting business performance through an Excel dashboard.",
    features: [
      "Sales data organization",
      "Revenue analysis",
      "Dashboard visualisation",
    ],
    technologies: ["Microsoft Excel", "Data Analytics"],
    github:
      "https://github.com/PoojaPatelX13/sales-revenue-analysis-dashboard",
  },
  {
    title: "Customer Segmentation",
    category: "Data Analytics",
    description:
      "A customer segmentation project focused on analyzing customer data and identifying groups based on patterns in the dataset.",
    features: [
      "Customer data analysis",
      "Segmentation practice",
      "Interpretation of customer patterns",
    ],
    technologies: ["Python", "Data Analytics"],
    github:
      "https://github.com/PoojaPatelX13/customer-segmentation-project",
  },
  {
    title: "Predictive Analytics",
    category: "Data Analytics",
    description:
      "A practical analytics project focused on exploring data and working with predictive analysis concepts.",
    features: [
      "Dataset exploration",
      "Data preparation",
      "Predictive analytics practice",
    ],
    technologies: ["Python", "Data Analytics"],
    github:
      "https://github.com/PoojaPatelX13/predictive-analytics-project",
  },
];

const projectFilters = [
  "All",
  "MERN Stack",
  "Backend Development",
  "React Development",
  "Web Development",
  "Data Analytics",
];

// ========================================
// EDUCATION
// ========================================

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution:
      "Aditya Institute of Management Studies and Research",
    university: "Bengaluru City University",
    duration: "2024 – 2027",
    details: "Currently pursuing BCA.",
    result: "4th Semester SGPA: 8.02",
  },
  {
    degree: "Pre-University Course (PUC)",
    institution: "CMR National PU College",
    university: "Bengaluru",
    duration: "2023",
    details: "Completed Pre-University education.",
    result: "58%",
  },
  {
    degree: "SSLC",
    institution: "Sri Basaveshwara English High School",
    university: "Bengaluru",
    duration: "2021",
    details: "Completed secondary school education.",
    result: "85%",
  },
];

// ========================================
// CERTIFICATES
// ========================================

const certificates = [
  {
    title: "AI Fundamentals for Understanding AI",
    issuer: "IBM",
    date: "February 2026",
    description:
      "Developed foundational knowledge of Artificial Intelligence, including core concepts, applications, opportunities, and responsible considerations when using AI.",
  },
  {
    title: "AI Fundamentals: Language and Vision in AI",
    issuer: "IBM",
    date: "February 2026",
    description:
      "Built a foundation in Artificial Intelligence, covering basic AI concepts, applications, capabilities, and the impact of AI across different industries.",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    date: "February 2026",
    description:
      "Built foundational knowledge of Artificial Intelligence concepts, applications and capabilities.",
  },
  {
    title: "Getting Started with AI",
    issuer: "IBM",
    date: "February 2026",
    description:
      "Developed a basic understanding of Artificial Intelligence, its key concepts, common applications, and how AI is used to solve real-world problems.",
  },
  {
    title: "Job Application Essentials",
    issuer: "IBM",
    date: "February 2026",
    description:
      "Learned essential skills for preparing job applications, including resume preparation, job searching, professional communication, and interview readiness.",
  },
  {
    title: "Project Management Fundamentals",
    issuer: "IBM",
    date: "February 2026",
    description:
      "Learned the basic principles of project management, including project planning, organization, teamwork, time management, and completing projects effectively.",
  },
  {
    title: "Getting Started with Generative AI",
    issuer: "IBM",
    date: "July 2026",
    description:
      "Learned the fundamentals of Generative AI, including how AI can generate text and other content, along with practical applications and responsible use of generative AI tools.",
  },
  {
    title: "AI Literacy",
    issuer: "IBM",
    date: "July 2026",
    description:
      "Gained a foundational understanding of Artificial Intelligence, including key AI concepts, applications, and the role of AI in everyday life and the workplace.",
  },
  {
    title: "Getting Started with Cybersecurity",
    issuer: "IBM",
    date: "October 2025",
    description:
      "Learned basic cybersecurity concepts, common digital threats, online safety, and essential practices for protecting digital information.",
  },
  {
    title: "Web Development Intern",
    issuer: "Thiranex EduTech LLP",
    date: "July 2026",
    credential: "THX-JUL0926-125",
    description:
      "Internship credential recognizing practical exposure to responsive web development, frontend layouts and user interface improvements.",
  },
  {
    title: "Data Analytics Intern",
    issuer: "Thiranex EduTech LLP",
    date: "July 2026",
    credential: "THX-JUL0326-013",
    description:
      "Internship credential recognizing practical exposure to data cleaning, exploratory analysis, data visualization and reporting.",
  },
  {
    title: "Letters of Recommendation – Data Analytics & Web Development",
    issuer: "Thiranex EduTech LLP",
    date: "November 2026",
    description:
      "Recognition for technical contributions, analytical skills, problem-solving, dedication and professional conduct during internship experiences.",
  },
];

// ========================================
// LANGUAGES
// ========================================

const languages = [
  "English",
  "Hindi",
  "Kannada",
  "Rajasthani",
];

// ========================================
// PROFESSIONAL INTERESTS
// ========================================

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

// ========================================
// REUSABLE SECTION HEADING
// ========================================

function SectionHeading({ label, title, description }) {
  return (
    <div className="section-heading">
      <span className="section-label">{label}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

// ========================================
// MAIN APP
// ========================================

function App() {
  const [darkMode, setDarkMode] = useState(true);
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

            {/* RESUME PDF LOGO */}

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
            </a>
          </nav>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
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
                Hello, I'm
              </span>

              <h1>
                {personalInfo.name}
                <span>.</span>
              </h1>

              <h2>{personalInfo.title}</h2>

              <p className="hero-headline">
                {personalInfo.headline}
              </p>

              <p className="hero-description">
                Motivated BCA student with practical exposure to
                programming, MERN Stack development and Data Analytics.
                Interested in building useful applications, learning
                new technologies and growing as a software developer.
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

                {/* RESUME PDF ICON AFTER EMAIL */}

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
                  <div className="highlight-icon">
                    {item.icon}
                  </div>

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
                  JavaScript, HTML, CSS, Bootstrap, React.js,
                  Node.js, Express.js, MongoDB and Microsoft Excel.
                  I have also completed internship experiences in
                  Web Development and Data Analytics at Thiranex
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
                  <div className="skill-icon">
                    {group.icon}
                  </div>

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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}

        <section className="projects-section section" id="projects">
          <div className="container">
            <SectionHeading
              label="MY WORK"
              title="Projects"
              description="A collection of academic and practical projects demonstrating my learning and development."
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
                <div className="project-card" key={project.title}>
                  <div className="project-card-top">
                    <span className="project-category">
                      {project.category}
                    </span>

                    <FaCode className="project-card-icon" />
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
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View on GitHub <FaExternalLinkAlt />
                  </a>
                </div>
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
              description="My academic journey and educational qualifications."
            />

            <div className="education-list">
              {education.map((item) => (
                <div className="education-card" key={item.degree}>
                  <div className="education-icon">
                    <FaGraduationCap />
                  </div>

                  <div className="education-content">
                    <span className="education-year">
                      {item.duration}
                    </span>

                    <h3>{item.degree}</h3>
                    <h4>{item.institution}</h4>
                    <p>{item.university}</p>
                    <p>{item.details}</p>
                    <strong>{item.result}</strong>
                  </div>
                </div>
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
              description="Certifications and recognition gained through learning and professional experiences."
            />

            <div className="certificates-grid">
              {certificates.map((certificate) => (
                <div
                  className="certificate-card"
                  key={certificate.title}
                >
                  <div className="certificate-icon">
                    <FaAward />
                  </div>

                  <span className="certificate-date">
                    {certificate.date}
                  </span>

                  <h3>{certificate.title}</h3>
                  <h4>{certificate.issuer}</h4>
                  <p>{certificate.description}</p>

                  {certificate.credential && (
                    <div className="credential-line">
                      Credential ID:{" "}
                      <strong>{certificate.credential}</strong>
                    </div>
                  )}
                </div>
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
