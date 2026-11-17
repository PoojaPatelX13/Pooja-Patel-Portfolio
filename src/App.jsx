
import { useState } from "react";
import "./App.css";

const RESUME_URL = "/PoojaPatelX13%20Resume.pdf";

const projects = [
  {
    number: "01",
    category: "MERN Stack",
    filter: "MERN Stack",
    title: "Book Basket",
    description: "A full-stack online library management system developed using the MERN Stack.",
    overview: "Enables users to search and explore books, view book information, add selected books to their personal library, and organise their reading progress through reading-status management.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    link: "https://github.com/PoojaPatelX13/Book-Basket",
  },
  {
    number: "02",
    category: "Backend Development",
    filter: "Backend Development",
    title: "Destiny Travels",
    description: "A RESTful API developed to manage travel destination data.",
    overview: "Implements backend operations for creating, retrieving, updating, and deleting destination records, along with data filtering, sorting, and pagination using Express.js and MongoDB.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    link: "https://github.com/PoojaPatelX13/Destiny-Travels",
  },
  {
    number: "03",
    category: "React Development",
    filter: "React Development",
    title: "Technika Courses",
    description: "A React-based application for exploring and filtering courses.",
    overview: "Organises technical and programming courses into categories and provides interactive filtering to help users browse available learning options.",
    technologies: ["React.js", "JavaScript", "CSS", "HTML"],
    link: "https://github.com/PoojaPatelX13/Technika-Courses",
  },
  {
    number: "04",
    category: "React Development",
    filter: "React Development",
    title: "Cinescope",
    description: "A movie browsing application developed using React.",
    overview: "Provides a user interface for exploring movies, viewing individual movie details, and maintaining a personal watchlist.",
    technologies: ["React.js", "JavaScript", "CSS", "HTML"],
    link: "https://github.com/PoojaPatelX13/Cinescope",
  },
  {
    number: "05",
    category: "Web Development",
    filter: "Web Development",
    title: "Foodie Card",
    description: "A frontend web development project focused on webpage design.",
    overview: "Demonstrates the use of HTML, CSS, and JavaScript to structure and style webpage content and practise user interface development.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/PoojaPatelX13/Foodie-Card",
  },
  {
    number: "06",
    category: "Web Development",
    filter: "Web Development",
    title: "Bit Demo",
    description: "A frontend practice project developed using web technologies.",
    overview: "Explores webpage structure, styling, and interactive elements while strengthening practical frontend development skills.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/PoojaPatelX13/Bit-Demo",
  },
  {
    number: "07",
    category: "JavaScript Project",
    filter: "JavaScript Project",
    title: "Type Rush",
    description: "An interactive typing practice application.",
    overview: "Focuses on interactive typing practice and JavaScript functionality, providing an opportunity to apply programming logic and frontend development concepts.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/PoojaPatelX13/Type-Rush-",
  },
  {
    number: "08",
    category: "Data Analytics",
    filter: "Data Analytics",
    title: "Sales & Revenue Dashboard",
    description: "An Excel dashboard designed to present sales and revenue information.",
    overview: "Organised and analysed sales-related data using Microsoft Excel and presented key business information through dashboard visualisations.",
    technologies: ["Microsoft Excel", "Data Analysis", "Dashboards"],
    link: "https://github.com/PoojaPatelX13",
  },
  {
    number: "09",
    category: "Data Analytics",
    filter: "Data Analytics",
    title: "Customer Segmentation",
    description: "A customer analysis project using K-Means clustering.",
    overview: "Applied the K-Means clustering approach to explore customer data and group customers according to similarities and patterns in the dataset.",
    technologies: ["Python", "K-Means", "Data Analysis"],
    link: "https://github.com/PoojaPatelX13",
  },
  {
    number: "10",
    category: "Data Analytics",
    filter: "Data Analytics",
    title: "Predictive Analytics",
    description: "A data analytics project exploring patterns and predictive techniques.",
    overview: "Worked with data analysis concepts to examine patterns in datasets and understand how analytical methods can support data-driven predictions.",
    technologies: ["Python", "Data Analysis", "Excel"],
    link: "https://github.com/PoojaPatelX13",
  },
];

const skills = [
  {
    group: "Programming Languages",
    items: [
      ["Python", "Applied to programming tasks, data analysis, and logical problem-solving."],
      ["JavaScript", "Used to develop interactive features and dynamic web applications."],
    ],
  },
  {
    group: "Frontend Development",
    items: [
      ["HTML", "Used to structure webpage content and build web interfaces."],
      ["CSS", "Used to style webpages and create responsive layouts."],
      ["Bootstrap", "Used to develop responsive layouts and reusable interface components."],
      ["React.js", "Used to build component-based interfaces and interactive applications."],
    ],
  },
  {
    group: "Backend Development",
    items: [
      ["Node.js", "Used to develop server-side applications with JavaScript."],
      ["Express.js", "Used to create backend applications and RESTful APIs."],
    ],
  },
  {
    group: "Databases",
    items: [
      ["MySQL", "Used to work with relational databases and structured information."],
      ["MongoDB", "Used to store and manage application data in a document-based database."],
    ],
  },
  {
    group: "Data Analytics",
    items: [
      ["Microsoft Excel", "Used for organising datasets, analysing information, and creating dashboards."],
      ["Data Visualisation", "Used to communicate data insights through charts and visual representations."],
      ["Customer Segmentation", "Used to explore customer groups based on similarities and data patterns."],
    ],
  },
  {
    group: "Tools",
    items: [
      ["Git", "Used for version control and tracking changes in project code."],
      ["GitHub", "Used to host repositories and manage software development projects."],
      ["VS Code", "Used as a development environment for writing and managing code."],
      ["Postman", "Used to test REST APIs and verify backend endpoints."],
    ],
  },
];

const internships = [
  {
    title: "Data Analytics Intern",
    company: "Thiranex EduTech LLP",
    duration: "July 2026 – August 2026",
    points: [
      "Cleaned, preprocessed, and organised raw datasets using Microsoft Excel to improve data consistency and quality.",
      "Performed exploratory data analysis (EDA) to examine datasets, identify patterns, and derive useful insights.",
      "Worked on practical analytics assignments, including data analysis and Excel dashboard development.",
    ],
  },
  {
    title: "Web Development Intern",
    company: "Thiranex EduTech LLP",
    duration: "July 2026 – August 2026",
    points: [
      "Developed and practised webpage layouts using HTML, CSS, JavaScript, and Bootstrap.",
      "Worked on frontend user interface improvements and responsive webpage design.",
      "Tested webpage functionality and responsiveness to identify and correct interface issues.",
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
    description: "Introduced the foundational concepts of Artificial Intelligence, its capabilities, practical applications, and the role of AI in modern technology.",
  },
  {
    number: "02",
    title: "AI Fundamentals: Language and Vision in AI",
    issuer: "IBM",
    date: "Issued February 2026",
    description: "Explored how Artificial Intelligence is applied to language and visual information, including the role of AI in understanding text and images.",
  },
  {
    number: "03",
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    date: "Issued February 2026",
    description: "Developed foundational knowledge of AI concepts, common applications, and the ways Artificial Intelligence is used across different fields.",
  },
  {
    number: "04",
    title: "Getting Started with AI",
    issuer: "IBM",
    date: "Issued February 2026",
    description: "Gained an introductory understanding of Artificial Intelligence, its basic concepts, everyday applications, and its growing importance in the workplace.",
  },
  {
    number: "05",
    title: "Job Application Essential",
    issuer: "IBM",
    date: "Issued February 2026",
    description: "Covered essential career preparation skills, including preparing job applications, presenting qualifications, professional communication, and interview readiness.",
  },
  {
    number: "06",
    title: "Project Management Fundamentals",
    issuer: "IBM",
    date: "Issued February 2026",
    description: "Developed an understanding of project management principles, including planning, organising tasks, managing time, collaborating with teams, and working towards project goals.",
  },
  {
    number: "07",
    title: "Getting Started with Generative AI",
    issuer: "IBM",
    date: "Issued July 2026",
    description: "Explored Generative AI fundamentals, including how AI tools create content and how generative technologies can be applied in practical situations.",
  },
  {
    number: "08",
    title: "AI Literacy",
    issuer: "IBM",
    date: "Issued July 2026",
    description: "Strengthened foundational AI awareness by learning about AI concepts, its real-world uses, and the importance of understanding AI in everyday and professional environments.",
  },
  {
    number: "09",
    title: "Getting Started with Cybersecurity",
    issuer: "IBM",
    date: "Issued October 31, 2026",
    description: "Developed an introductory understanding of cybersecurity, including common digital threats, online safety, and basic practices for protecting information and systems.",
  },
  {
    number: "10",
    title: "Web Development Intern",
    issuer: "Thiranex",
    date: "July–August 2026",
    credential: "THX-JUL0926-125",
    description: "Designed and developed responsive user interfaces using HTML, CSS, JavaScript, and Bootstrap. Worked on webpage layouts, cross-device compatibility, and testing and debugging frontend components to improve usability.",
  },
  {
    number: "11",
    title: "Data Analytics Intern",
    issuer: "Thiranex",
    date: "July–August 2026",
    credential: "THX-JUL0326-013",
    description: "Worked with raw datasets using Microsoft Excel for data cleaning, preprocessing, and organisation. Conducted exploratory data analysis (EDA) to examine information, identify patterns, and derive meaningful insights.",
  },
  {
    number: "12",
    title: "Letters of Recommendation – Data Analytics & Web Development",
    issuer: "Thiranex EduTech LLP",
    date: "November 2026",
    description: "Received Letters of Recommendation recognising contributions and performance during the Data Analytics and Web Development internships. The recommendations acknowledge technical execution, problem-solving, analytical ability, adaptability, dedication, timely delivery, and professional conduct.",
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
              I am a BCA student with practical exposure to MERN Stack
              development and Data Analytics. I enjoy building web applications,
              working with data, and applying my technical knowledge to
              practical projects. I am always eager to learn, improve, and take
              on new challenges.
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
                I am pursuing a Bachelor of Computer Applications (BCA) at
                Aditya Institute of Management Studies and Research, Bengaluru,
                affiliated with Bengaluru City University. My academic journey
                has helped me develop an interest in software development and
                data analytics.
              </p>
              <p>
                I have gained practical experience through internships and
                individual projects involving Python, JavaScript, React,
                Node.js, Express.js, databases, and Microsoft Excel. These
                experiences have helped me strengthen my programming,
                analytical, and problem-solving skills.
              </p>
              <p>
                I aspire to build a career as a Software Developer, continue
                learning modern technologies, and contribute to meaningful
                projects while growing as an IT professional.
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
            <p>Technologies and tools I have learned and applied through coursework, internships, and projects.</p>
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
            <p>Practical learning and experience gained through industry-oriented internship assignments.</p>
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
            <p>A selection of academic, personal, and internship projects showcasing my development and analytical skills.</p>
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
            <p>My academic qualifications and educational journey.</p>
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
              Professional learning certificates, internship credentials, and
              recommendations reflecting my commitment to continuous learning
              and practical development.
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
              Interested in connecting, discussing a project, or sharing an
              opportunity? Feel free to reach out. I would be happy to connect
              and learn from new experiences.
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
