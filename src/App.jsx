
import { useEffect, useState } from "react";
import "./App.css";

const RESUME_URL = "/PoojaPatelX13%20Resume.pdf";

const projects = [
  {
    title: "Book Basket",
    category: "MERN Stack",
    description:
      "An online library management system that allows users to search for books, view book details, add books to their personal library, and manage reading status.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    link: "https://github.com/PoojaPatelX13/Book-Basket",
  },
  {
    title: "Destiny Travels",
    category: "Backend Development",
    description:
      "A RESTful API for managing travel destinations, featuring CRUD operations, database integration, filtering, sorting, and pagination.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    link: "https://github.com/PoojaPatelX13/Destiny-Travels",
  },
  {
    title: "Technika Courses",
    category: "Frontend Development",
    description:
      "A React-based course listing application with course categories and interactive filters for browsing technical and programming courses.",
    technologies: ["React.js", "JavaScript", "HTML", "CSS"],
    link: "https://github.com/PoojaPatelX13/Technika-Courses",
  },
  {
    title: "Cinescope",
    category: "Frontend Development",
    description:
      "A movie browsing application where users can explore movies, view movie details, and manage a personal watchlist.",
    technologies: ["React.js", "JavaScript", "HTML", "CSS"],
    link: "https://github.com/PoojaPatelX13/Cinescope",
  },
  {
    title: "Foodie Card",
    category: "Web Development",
    description:
      "A frontend project focused on presenting food-related content through a structured and user-friendly card layout.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/PoojaPatelX13/Foodie-Card",
  },
  {
    title: "Bit Demo",
    category: "Web Development",
    description:
      "A web development practice project created to strengthen frontend development and implementation skills.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/PoojaPatelX13/Bit-Demo",
  },
  {
    title: "Type Rush",
    category: "Web Development",
    description:
      "A typing practice project designed to provide an interactive way to practise typing and improve speed.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/PoojaPatelX13/Type-Rush-",
  },
  {
    title: "Sales & Revenue Dashboard",
    category: "Data Analytics",
    description:
      "An Excel dashboard project focused on analysing sales and revenue data, organising information, and presenting insights through visual reports.",
    technologies: ["Microsoft Excel", "Pivot Tables", "Data Visualization"],
    link: "https://github.com/PoojaPatelX13/sales-revenue-analysis-dashboard",
  },
  {
    title: "Customer Segmentation",
    category: "Data Analytics",
    description:
      "A customer segmentation project using K-Means clustering to group customers based on data patterns and support better business insights.",
    technologies: ["Python", "K-Means", "Data Analytics"],
    link: "https://github.com/PoojaPatelX13/customer-segmentation-project",
  },
  {
    title: "Predictive Analytics",
    category: "Data Analytics",
    description:
      "A data analytics project focused on exploring datasets, identifying patterns, and applying predictive analysis techniques.",
    technologies: ["Python", "Data Analytics", "Data Analysis"],
    link: "https://github.com/PoojaPatelX13/predictive-analytics-project",
  },
];

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript"],
  },
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "Bootstrap", "React.js"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Data Analytics",
    skills: [
      "Microsoft Excel",
      "Pivot Tables",
      "Data Visualization",
      "Customer Segmentation",
    ],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

const experiences = [
  {
    role: "Data Analytics Intern",
    company: "Thiranex EduTech LLP",
    duration: "July – August 2026",
    credential: "THX-JUL0326-013",
    description: [
      "Worked with datasets using Microsoft Excel for data cleaning, preprocessing, and organisation.",
      "Practised exploratory data analysis to examine information and identify meaningful patterns.",
      "Worked on analytics projects involving sales dashboards, customer segmentation, and predictive analytics.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Thiranex EduTech LLP",
    duration: "July – August 2026",
    credential: "THX-JUL0926-125",
    description: [
      "Practised creating responsive web pages using HTML, CSS, JavaScript, and Bootstrap.",
      "Worked on webpage layouts and user interface improvements.",
      "Practised testing and debugging frontend components to improve usability and responsiveness.",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Aditya Institute of Management Studies and Research",
    university: "Bengaluru City University",
    duration: "2024 – 2027",
    result: "SGPA: 8.02 (4th Semester)",
  },
  {
    degree: "Pre-University Course (PUC)",
    institution: "CMR National PU College, Bengaluru",
    duration: "2022 – 2024",
    result: "58%",
  },
  {
    degree: "SSLC",
    institution: "Sri Basaveshwara English High School, Bengaluru",
    duration: "2021 – 2022",
    result: "85%",
  },
];

const certifications = [
  {
    title: "AI Fundamentals for Understanding AI",
    issuer: "IBM",
    date: "February 2026",
  },
  {
    title: "AI Fundamentals: Language and Vision in AI",
    issuer: "IBM",
    date: "February 2026",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    date: "February 2026",
  },
  {
    title: "Getting Started with AI",
    issuer: "IBM",
    date: "February 2026",
  },
  {
    title: "Job Application Essentials",
    issuer: "IBM",
    date: "February 2026",
  },
  {
    title: "Project Management Fundamentals",
    issuer: "IBM",
    date: "February 2026",
  },
  {
    title: "Getting Started with Generative AI",
    issuer: "IBM",
    date: "July 2026",
  },
  {
    title: "AI Literacy",
    issuer: "IBM",
    date: "July 2026",
  },
  {
    title: "Getting Started with Cybersecurity",
    issuer: "IBM",
    date: "October 31, 2026",
  },
  {
    title: "Web Development Intern",
    issuer: "Thiranex EduTech LLP",
    date: "July – August 2026",
    credential: "THX-JUL0926-125",
    description:
      "Completed practical work in frontend development using HTML, CSS, JavaScript, and Bootstrap, including responsive layouts and interface testing.",
  },
  {
    title: "Data Analytics Intern",
    issuer: "Thiranex EduTech LLP",
    date: "July – August 2026",
    credential: "THX-JUL0326-013",
    description:
      "Worked with datasets, Excel-based data cleaning, preprocessing, exploratory analysis, and identifying meaningful insights.",
  },
  {
    title: "Letters of Recommendation – Data Analytics & Web Development",
    issuer: "Thiranex EduTech LLP",
    date: "November 2026",
    description:
      "Recognition for contributions during both internships, highlighting technical execution, analytical ability, problem-solving, adaptability, dedication, and professional conduct.",
  },
];

const filters = [
  "All",
  "MERN Stack",
  "Backend Development",
  "Frontend Development",
  "Web Development",
  "Data Analytics",
];

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`portfolio ${darkMode ? "dark-mode" : "light-mode"}`}>
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          POOJA PATEL<span>.</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          {[
            "Home",
            "About",
            "Skills",
            "Experience",
            "Projects",
            "Education",
            "Certifications",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            type="button"
          >
            {darkMode ? "☀" : "☾"}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            type="button"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <p className="availability">
              <span className="availability-dot"></span>
              Open to learning and opportunities
            </p>

            <p className="section-label">HELLO, I'M</p>
            <h1>
              POOJA <span>PATEL</span>
            </h1>

            <h2>BCA Student | MERN Stack Enthusiast | Data Analytics Enthusiast</h2>

            <p className="hero-description">
              I am a BCA student aspiring to become a Software Developer,
              with practical exposure to MERN Stack development and Data
              Analytics. I enjoy building web applications, analysing data,
              and applying my technical knowledge to real-world projects.
              I am committed to continuous learning and improving my
              technical and problem-solving skills.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Work
              </a>
              <a
                href={RESUME_URL}
                className="secondary-button"
                target="_blank"
                rel="noreferrer"
              >
                View Resume ↗
              </a>
            </div>

            <div className="social-icons">
              <a
                href="https://github.com/PoojaPatelX13"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                GH
              </a>
              <a
                href="https://www.linkedin.com/in/pooja-patel-48666a386"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a href="mailto:poojapatel53032@gmail.com" aria-label="Email">
                ✉
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="/profile.jpg"
              alt="Pooja Patel"
              className="profile-photo"
            />
          </div>
        </section>

        <section className="section about-section" id="about">
          <p className="section-label">GET TO KNOW ME</p>
          <h2 className="section-title">About Me</h2>

          <div className="about-content">
            <p>
              I am pursuing a Bachelor of Computer Applications (BCA) at
              Aditya Institute of Management Studies and Research,
              Bengaluru City University. I have developed practical
              experience through academic projects and internships in
              MERN Stack development, web development, and Data Analytics.
            </p>
            <p>
              I enjoy learning new technologies, creating useful web
              applications, and working with data to discover meaningful
              insights. My goal is to grow as a Software Developer while
              continuously strengthening my technical and problem-solving
              abilities.
            </p>
          </div>
        </section>

        <section className="section" id="skills">
          <p className="section-label">WHAT I WORK WITH</p>
          <h2 className="section-title">My Skills</h2>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span className="skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <p className="section-label">MY PROFESSIONAL JOURNEY</p>
          <h2 className="section-title">Internship Experience</h2>

          <div className="experience-grid">
            {experiences.map((experience) => (
              <article className="experience-card" key={experience.credential}>
                <p className="experience-date">{experience.duration}</p>
                <h3>{experience.role}</h3>
                <h4>{experience.company}</h4>
                <ul>
                  {experience.description.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p className="credential">
                  Credential ID: {experience.credential}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <p className="section-label">SELECTED WORK</p>
          <h2 className="section-title">My Projects</h2>
          <p className="section-description">
            A collection of my academic, development, and data analytics
            projects.
          </p>

          <div className="project-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`filter-button ${activeFilter === filter ? "active" : ""
                  }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub Repository ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <p className="section-label">MY ACADEMIC BACKGROUND</p>
          <h2 className="section-title">Education</h2>

          <div className="education-grid">
            {education.map((item) => (
              <article className="education-card" key={item.degree}>
                <p className="education-date">{item.duration}</p>
                <h3>{item.degree}</h3>
                <h4>{item.institution}</h4>
                {item.university && <p>{item.university}</p>}
                <p className="education-result">{item.result}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="certifications">
          <p className="section-label">CONTINUOUS LEARNING</p>
          <h2 className="section-title">Certifications & Recognition</h2>

          <div className="certification-grid">
            {certifications.map((certificate) => (
              <article className="certification-card" key={certificate.title}>
                <div className="certificate-icon">✦</div>
                <h3>{certificate.title}</h3>
                <p>{certificate.issuer}</p>
                <p className="certificate-date">
                  Issued {certificate.date}
                </p>
                {certificate.credential && (
                  <p className="credential">
                    Credential ID: {certificate.credential}
                  </p>
                )}
                {certificate.description && (
                  <p className="certificate-description">
                    {certificate.description}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <p className="section-label">LET'S CONNECT</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-description">
            I am always interested in learning, connecting, and exploring
            opportunities. Feel free to reach out.
          </p>

          <div className="contact-grid">
            <a href="mailto:poojapatel53032@gmail.com" className="contact-card">
              <span className="contact-icon">✉</span>
              <span>
                <strong>Email</strong>
                <small>poojapatel53032@gmail.com</small>
              </span>
              <span className="contact-arrow">↗</span>
            </a>

            <a href="tel:+918652136933" className="contact-card">
              <span className="contact-icon">☎</span>
              <span>
                <strong>Phone</strong>
                <small>+91 8652136933</small>
              </span>
              <span className="contact-arrow">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/pooja-patel-48666a386"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span className="contact-icon">in</span>
              <span>
                <strong>LinkedIn</strong>
                <small>Connect with me</small>
              </span>
              <span className="contact-arrow">↗</span>
            </a>

            <a
              href="https://github.com/PoojaPatelX13"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span className="contact-icon">⌘</span>
              <span>
                <strong>GitHub</strong>
                <small>Explore my repositories</small>
              </span>
              <span className="contact-arrow">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="footer-logo">
          POOJA PATEL<span>.</span>
        </a>
        <p>Building my skills, one project at a time.</p>

        <div className="footer-socials">
          <a
            href="https://github.com/PoojaPatelX13"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pooja-patel-48666a386"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:poojapatel53032@gmail.com">Email</a>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Pooja Patel. All rights reserved.</p>
          <p>Designed & developed by Pooja Patel</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
