
import { useState } from "react";
import "./App.css";

const RESUME_URL = "/PoojaPatelX13%20Resume.pdf";

const projects = [
  {
    number: "01",
    category: "MERN Stack",
    filter: "MERN Stack",
    title: "Book Basket",
    description: "An online library management system developed using the MERN Stack.",
    overview: "Allows users to explore books, view book details, add books to their personal library, and manage their reading status.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    link: "https://github.com/PoojaPatelX13/Book-Basket",
  },
  {
    number: "02",
    category: "Backend Development",
    filter: "Backend Development",
    title: "Destiny Travels",
    description: "A REST API for managing travel destinations.",
    overview: "Implements destination management with CRUD operations, filtering, sorting, and pagination using Express.js and MongoDB.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    link: "https://github.com/PoojaPatelX13/Destiny-Travels",
  },
  {
    number: "03",
    category: "React Development",
    filter: "React Development",
    title: "Technika Courses",
    description: "A course listing application built using React.",
    overview: "Displays technical and programming courses with category-based filtering for easy course exploration.",
    technologies: ["React.js", "JavaScript", "CSS", "HTML"],
    link: "https://github.com/PoojaPatelX13/Technika-Courses",
  },
  {
    number: "04",
    category: "React Development",
    filter: "React Development",
    title: "Cinescope",
    description: "A movie browsing application built using React.",
    overview: "Provides movie browsing, individual movie details, and a watchlist to help users keep track of movies.",
    technologies: ["React.js", "JavaScript", "CSS", "HTML"],
    link: "https://github.com/PoojaPatelX13/Cinescope",
  },
  {
    number: "05",
    category: "Web Development",
    filter: "Web Development",
    title: "Foodie Card",
    description: "A food-related web development project.",
    overview: "A frontend project created to practise webpage structure, styling, and user interface development.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/PoojaPatelX13/Foodie-Card",
  },
  {
    number: "06",
    category: "Web Development",
    filter: "Web Development",
    title: "Bit Demo",
    description: "A web development practice project.",
    overview: "Created to practise frontend development concepts and build interactive webpage elements.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/PoojaPatelX13/Bit-Demo",
  },
  {
    number: "07",
    category: "JavaScript Project",
    filter: "JavaScript Project",
    title: "Type Rush",
    description: "A typing practice application.",
    overview: "A typing-focused project developed to practise JavaScript logic and interactive user interface features.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/PoojaPatelX13/Type-Rush-",
  },
  {
    number: "08",
    category: "Data Analytics",
    filter: "Data Analytics",
    title: "Sales & Revenue Dashboard",
    description: "A dashboard project focused on sales and revenue analysis.",
    overview: "Used Excel to organise sales data and present important business insights through dashboard visualisations.",
    technologies: ["Microsoft Excel", "Data Analysis", "Dashboards"],
    link: "https://github.com/PoojaPatelX13",
  },
  {
    number: "09",
    category: "Data Analytics",
    filter: "Data Analytics",
    title: "Customer Segmentation",
    description: "A customer segmentation project using K-Means clustering.",
    overview: "Applied customer segmentation techniques to group customers based on patterns in the available data.",
    technologies: ["Python", "K-Means", "Data Analysis"],
    link: "https://github.com/PoojaPatelX13",
  },
  {
    number: "10",
    category: "Data Analytics",
    filter: "Data Analytics",
    title: "Predictive Analytics",
    description: "A project exploring predictive analytics concepts.",
    overview: "Worked with data analysis techniques to explore patterns and understand how data can support predictions.",
    technologies: ["Python", "Data Analysis", "Excel"],
    link: "https://github.com/PoojaPatelX13",
  },
];

const skills = [
  {
    group: "Programming Languages",
    items: [
      ["Python", "Used for programming, data analysis, and problem-solving."],
      ["JavaScript", "Used to create interactive and dynamic web applications."],
    ],
  },
  {
    group: "Frontend Development",
    items: [
      ["HTML", "Builds the structure and content of web pages."],
      ["CSS", "Styles web pages and creates responsive layouts."],
      ["Bootstrap", "Helps build responsive layouts and interface components."],
      ["React.js", "Used to develop component-based user interfaces."],
    ],
  },
  {
    group: "Backend Development",
    items: [
      ["Node.js", "Used to run JavaScript on the server side."],
      ["Express.js", "Used to build backend applications and REST APIs."],
    ],
  },
  {
    group: "Databases",
    items: [
      ["MySQL", "Used to store and manage structured data."],
      ["MongoDB", "Used to store and manage application data in documents."],
    ],
  },
  {
    group: "Data Analytics",
    items: [
      ["Microsoft Excel", "Used for data organisation, analysis, and dashboards."],
      ["Data Visualisation", "Presents information through visual formats and charts."],
      ["Customer Segmentation", "Helps identify customer groups based on data patterns."],
    ],
  },
  {
    group: "Tools",
    items: [
      ["Git", "Used for tracking changes in project code."],
      ["GitHub", "Used to host and manage software development projects."],
      ["VS Code", "Used for writing and managing code."],
      ["Postman", "Used for testing APIs and backend endpoints."],
    ],
  },
];

const internships = [
  {
    title: "Data Analytics Intern",
    company: "Thiranex EduTech LLP",
    duration: "July 2026 – August 2026",
    points: [
      "Cleaned, preprocessed, and structured raw datasets using Microsoft Excel.",
      "Performed exploratory data analysis to examine datasets and identify patterns.",
      "Worked on data analysis activities and Excel dashboard development.",
    ],
  },
  {
    title: "Web Development Intern",
    company: "Thiranex EduTech LLP",
    duration: "July 2026 – August 2026",
    points: [
      "Practised creating webpages using HTML, CSS, JavaScript, and Bootstrap.",
      "Worked on webpage layouts and user interface improvements.",
      "Practised testing webpage functionality and responsiveness.",
    ],
  },
];

const education = [
  {
    number: "01",
    year: "2024 – 2027",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Aditya Institute of Management Studies and Research",
    university: "Bengaluru City University, Bengaluru",
    result: "4th Semester SGPA: 8.02",
  },
  {
    number: "02",
    year: "2023",
    degree: "Pre-University Course (PUC)",
    institution: "CMR National PU College, Bengaluru",
    result: "Percentage: 58%",
  },
  {
    number: "03",
    year: "2021",
    degree: "SSLC",
    institution: "Sri Basaveshwara English High School, Bengaluru",
    result: "Percentage: 85%",
  },
];

const certifications = [
  {
    number: "01",
    title: "AI Fundamentals for Understanding AI",
    issuer: "IBM",
    date: "Issued February 2026",
    description: "Developed foundational knowledge of Artificial Intelligence, including core concepts, applications, opportunities, and responsible considerations when using AI.",
  },
  {
    number: "02",
    title: "AI Fundamentals: Language and Vision in AI",
    issuer: "IBM",
    date: "Issued February 2026",
    description: "Built a foundation in Artificial Intelligence, covering basic AI concepts, applications, capabilities, and the impact of AI across different industries.",
  },
  {
    number: "03",
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    date: "Issued February 2026",
    description: "Built a foundation in Artificial Intelligence, covering basic AI concepts, applications, capabilities, and the impact of AI across different industries.",
  },
  {
    number: "04",
    title: "Getting Started with AI",
    issuer: "IBM",
    date: "Issued February 2026",
    description: "Developed a basic understanding of Artificial Intelligence, its key concepts, common applications, and how AI is used to solve real-world problems.",
  },
  {
    number: "05",
    title: "Job Application Essential",
    issuer: "IBM",
    date: "Issued February 2026",
    description: "Learned essential skills for preparing job applications, including resume preparation, job searching, professional communication, and interview readiness.",
  },
  {
    number: "06",
    title: "Project Management Fundamentals",
    issuer: "IBM",
    date: "Issued February 2026",
    description: "Learned the basic principles of project management, including project planning, organization, teamwork, time management, and completing projects effectively.",
  },
  {
    number: "07",
    title: "Getting Started with Generative AI",
    issuer: "IBM",
    date: "Issued July 2026",
    description: "Learned the fundamentals of Generative AI, including how AI can generate text and other content, along with practical applications and responsible use of generative AI tools.",
  },
  {
    number: "08",
    title: "AI Literacy",
    issuer: "IBM",
    date: "Issued July 2026",
    description: "Gained a foundational understanding of Artificial Intelligence, including key AI concepts, applications, and the role of AI in everyday life and the workplace.",
  },
  {
    number: "09",
    title: "Getting Started with Cybersecurity",
    issuer: "",
    date: "Issued October 31, 2026",
    description: "Developed an understanding of cybersecurity fundamentals, common digital threats, online safety, and essential practices for protecting information and systems.",
  },
  {
    number: "10",
    title: "Web Development Intern",
    issuer: "Thiranex",
    date: "July–August 2026",
    credential: "THX-JUL0926-125",
    description: "Designed and constructed responsive user interfaces using HTML, CSS, JavaScript, and Bootstrap. Optimized website layouts for multiple devices and cross-browser support, and tested and debugged front-end components to improve user experience.",
  },
  {
    number: "11",
    title: "Data Analytics Intern",
    issuer: "Thiranex",
    date: "July–August 2026",
    credential: "THX-JUL0326-013",
    description: "Cleaned, preprocessed, and structured raw datasets using Microsoft Excel to ensure data integrity. Performed exploratory data analysis (EDA) to examine datasets and identify useful patterns and insights.",
  },
  {
    number: "12",
    title: "Letters of Recommendation – Data Analytics & Web Development",
    issuer: "Thiranex EduTech LLP",
    date: "November 2026",
    description: "Received Letters of Recommendation in recognition of performance and contributions during Data Analytics and Web Development internships. Recognized for technical execution, problem-solving, analytical ability, clean implementation, punctual delivery, adaptability, dedication, and professional conduct.",
  },
];

const filters = [
  "All",
  "MERN Stack",
  "React Development",
  "Backend Development",
  "Web Development",
  "JavaScript Project",
  "Data Analytics",
];

function App() {
  const [theme, setTheme] = useState("dark");
  const [activeFilter, setActiveFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.filter === activeFilter);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`app ${theme === "light" ? "light-theme" : ""}`}>
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          POOJA PATEL<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#certifications" onClick={closeMenu}>Certificates</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? "☀ Light" : "☾ Dark"}
        </button>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section" id="home">
          <div className="hero-content">
            <span className="eyebrow">HELLO, I'M</span>
            <h1>POOJA PATEL<span>.</span></h1>
            <h2>BCA Student | MERN Stack Enthusiast | Data Analytics Enthusiast</h2>

            <p className="hero-description">
              I am a motivated BCA student interested in web development and
              data analytics. I enjoy learning new technologies and building
              practical projects that improve my technical skills.
            </p>

            <div className="hero-buttons">
              <a className="primary-button" href="#projects">
                Explore My Work
              </a>
              <a
                className="secondary-button"
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
              >
                View Resume ↗
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/PoojaPatelX13" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/pooja-patel-48666a386" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="mailto:poojapatel53032@gmail.com">Email</a>
            </div>
          </div>

          <div className="hero-image-area">
            <div className="hero-image-frame">
              <img src="/profile.jpg" alt="Pooja Patel" className="profile-image" />
            </div>
            <div className="floating-card">
              <span className="status-dot"></span>
              Open to Learning & Opportunities
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section" id="about">
          <div className="section-heading">
            <span className="eyebrow">GET TO KNOW ME</span>
            <h2>About Me</h2>
          </div>

          <div className="about-grid">
            <div className="about-main">
              <h3>A little about my journey</h3>
              <p>
                I am a Bachelor of Computer Applications (BCA) student at
                Aditya Institute of Management Studies and Research, Bengaluru.
                I am interested in developing web applications and exploring
                data analytics.
              </p>
              <p>
                Through academic learning, internships, and personal projects,
                I have gained practical exposure to programming, frontend and
                backend development, databases, and data analysis.
              </p>
              <p>
                My goal is to build a career in the IT industry and continue
                developing my skills as a software developer.
              </p>
            </div>

            <div className="about-details">
              <div className="detail-card">
                <span>Location</span>
                <strong>Bengaluru, Karnataka</strong>
              </div>
              <div className="detail-card">
                <span>Degree</span>
                <strong>Bachelor of Computer Applications</strong>
              </div>
              <div className="detail-card">
                <span>University</span>
                <strong>Bengaluru City University</strong>
              </div>
              <div className="detail-card">
                <span>Career Goal</span>
                <strong>Software Developer</strong>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section" id="skills">
          <div className="section-heading">
            <span className="eyebrow">WHAT I WORK WITH</span>
            <h2>My Skills</h2>
            <p>Technologies and tools I have learned and practised.</p>
          </div>

          <div className="skills-grid">
            {skills.map((group) => (
              <div className="skill-card" key={group.group}>
                <h3>{group.group}</h3>
                <div className="skill-list">
                  {group.items.map(([name, description]) => (
                    <div className="skill-info" key={name}>
                      <strong>{name}</strong>
                      <p>{description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section" id="experience">
          <div className="section-heading">
            <span className="eyebrow">MY PROFESSIONAL JOURNEY</span>
            <h2>Internship Experience</h2>
          </div>

          <div className="experience-list">
            {internships.map((internship) => (
              <article className="experience-card" key={internship.title}>
                <div className="experience-top">
                  <div>
                    <h3>{internship.title}</h3>
                    <p className="company-name">{internship.company}</p>
                  </div>
                  <span className="experience-date">{internship.duration}</span>
                </div>

                <ul>
                  {internship.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section" id="projects">
          <div className="section-heading">
            <span className="eyebrow">WHAT I'VE BUILT</span>
            <h2>My Projects</h2>
            <p>Some of my academic, personal, and internship projects.</p>
          </div>

          <div className="project-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? "filter-button active" : "filter-button"}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-topline">
                  <span>{project.category}</span>
                  <span className="project-number">{project.number}</span>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <h4>Project Overview</h4>
                  <p>{project.overview}</p>

                  <div className="tech-tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                    View on GitHub ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section" id="education">
          <div className="section-heading">
            <span className="eyebrow">MY ACADEMIC BACKGROUND</span>
            <h2>My Education</h2>
            <p>My academic journey and educational qualifications.</p>
          </div>

          <div className="education-list">
            {education.map((item) => (
              <article className="education-card" key={item.number}>
                <div className="education-number">{item.number}</div>
                <div className="education-content">
                  <span className="education-year">{item.year}</span>
                  <h3>{item.degree}</h3>
                  <p className="education-institution">{item.institution}</p>
                  {item.university && (
                    <p className="education-university">{item.university}</p>
                  )}
                  <div className="education-result">{item.result}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CERTIFICATES */}
        <section className="section" id="certifications">
          <div className="section-heading">
            <span className="eyebrow">LEARNING & ACHIEVEMENTS</span>
            <h2>Certificates & Recognition</h2>
            <p>
              Certifications and internship recognition reflecting my
              continuous learning and practical experience.
            </p>
          </div>

          <div className="certifications-grid">
            {certifications.map((certificate) => (
              <article className="certificate-card" key={certificate.number}>
                <div className="certificate-top">
                  <span className="certificate-star">✦</span>
                  <span className="certificate-number">{certificate.number}</span>
                </div>

                <h3>{certificate.title}</h3>

                {(certificate.issuer || certificate.date) && (
                  <p className="certificate-meta">
                    {certificate.issuer}
                    {certificate.issuer && certificate.date ? " | " : ""}
                    {certificate.date}
                  </p>
                )}

                {certificate.credential && (
                  <p className="credential-id">
                    Credential ID: {certificate.credential}
                  </p>
                )}

                <h4>Certificate Overview</h4>
                <p className="certificate-description">{certificate.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact-section" id="contact">
          <div className="section-heading">
            <span className="eyebrow">LET'S CONNECT</span>
            <h2>Get In Touch<span className="heading-dot">.</span></h2>
            <p>
              Have an opportunity, a project idea, or just want to connect?
              I'd love to hear from you. Let's start a conversation!
            </p>
          </div>

          <div className="contact-panel">
            <a className="contact-item" href="mailto:poojapatel53032@gmail.com">
              <span className="contact-icon">✉</span>
              <span className="contact-text">
                <small>Email Me</small>
                <strong>poojapatel53032@gmail.com</strong>
              </span>
              <span className="contact-arrow">↗</span>
            </a>

            <a className="contact-item" href="tel:+918652136933">
              <span className="contact-icon">☎</span>
              <span className="contact-text">
                <small>Call Me</small>
                <strong>+91 8652136933</strong>
              </span>
              <span className="contact-arrow">↗</span>
            </a>

            <a
              className="contact-item"
              href="https://www.linkedin.com/in/pooja-patel-48666a386"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon linkedin-icon">in</span>
              <span className="contact-text">
                <small>Connect on LinkedIn</small>
                <strong>linkedin.com/in/pooja-patel-48666a386</strong>
              </span>
              <span className="contact-arrow">↗</span>
            </a>

            <a
              className="contact-item"
              href="https://github.com/PoojaPatelX13"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon github-icon">⌘</span>
              <span className="contact-text">
                <small>Explore My GitHub</small>
                <strong>github.com/PoojaPatelX13</strong>
              </span>
              <span className="contact-arrow">↗</span>
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="footer-brand">
          POOJA PATEL<span>.</span>
        </a>

        <p className="footer-tagline">
          Building my skills, one project at a time.
        </p>

        <div className="footer-socials">
          <a href="https://github.com/PoojaPatelX13" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/pooja-patel-48666a386"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a href="mailto:poojapatel53032@gmail.com">Email ↗</a>
        </div>

        <div className="footer-divider"></div>

        <p className="footer-copyright">
          Designed & developed by <strong>Pooja Patel</strong>.
        </p>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Pooja Patel. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
