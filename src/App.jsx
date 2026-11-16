
import { useState } from "react";
import "./App.css";

const RESUME_URL =
  "https://drive.google.com/file/d/1Ftm7jmsRFEaL324bzbhlc0WTUm671_4j/view?usp=drivesdk";

const projects = [
  {
    title: "Book Basket",
    category: "MERN Stack",
    description:
      "An online library management system built using MongoDB, Express.js, React.js and Node.js with book discovery and library management features.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/PoojaPatelX13/Book-Basket",
  },
  {
    title: "Destiny Travels",
    category: "Backend Development",
    description:
      "A travel destination management REST API developed using Node.js, Express.js and MongoDB.",
    tech: ["Node.js", "Express", "MongoDB", "Postman"],
    link: "https://github.com/PoojaPatelX13/Destiny-Travels",
  },
  {
    title: "Technika Courses",
    category: "Frontend Development",
    description:
      "A React-based course listing application with course categories and filtering functionality.",
    tech: ["React", "JavaScript", "CSS"],
    link: "https://github.com/PoojaPatelX13/Technika-Courses",
  },
  {
    title: "Cinescope",
    category: "Frontend Development",
    description:
      "A movie discovery application featuring movie details and watchlist functionality.",
    tech: ["React", "JavaScript", "CSS"],
    link: "https://github.com/PoojaPatelX13/Cinescope",
  },
  {
    title: "Foodie Card",
    category: "Web Development",
    description:
      "A food-themed web project focused on attractive layouts and user interface design.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/PoojaPatelX13/Foodie-Card",
  },
  {
    title: "Bit Demo",
    category: "Web Development",
    description:
      "A web development practice project demonstrating frontend concepts and page design.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/PoojaPatelX13/Bit-Demo",
  },
  {
    title: "Type Rush",
    category: "JavaScript Project",
    description:
      "A typing practice project designed to help users practise typing speed and accuracy.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/PoojaPatelX13/Type-Rush-",
  },
  {
    title: "Sales & Revenue Dashboard",
    category: "Data Analytics",
    description:
      "An Excel dashboard project focused on sales performance, revenue analysis and data visualization.",
    tech: ["Excel", "Pivot Tables", "Data Visualization"],
    link: "https://github.com/PoojaPatelX13",
  },
  {
    title: "Customer Segmentation",
    category: "Data Analytics",
    description:
      "A customer segmentation project using K-Means clustering to identify customer groups.",
    tech: ["Python", "K-Means", "Data Analytics"],
    link: "https://github.com/PoojaPatelX13",
  },
  {
    title: "Predictive Analytics",
    category: "Data Analytics",
    description:
      "An internship project involving predictive analytics and data-based insights.",
    tech: ["Python", "Data Analytics"],
    link: "https://github.com/PoojaPatelX13",
  },
];

const skills = [
  "Python",
  "JavaScript",
  "HTML",
  "CSS",
  "Bootstrap",
  "React.js",
  "Node.js",
  "Express.js",
  "MySQL",
  "MongoDB",
  "Excel",
  "Pivot Tables",
  "Data Visualization",
  "K-Means",
  "Git",
  "GitHub",
  "VS Code",
];

function SocialIcon({ type }) {
  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.31-3.76-1.31-.51-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .1.77 2.14 3.45 1.5.1-.73.4-1.23.71-1.51-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.56 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.02.76 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
        />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.6H4.96V9.02h2.97v9.58ZM6.45 7.71a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.17 10.89h-2.97v-4.66c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.74H9.34V9.02h2.85v1.31h.04c.4-.75 1.37-1.55 2.82-1.55 3.01 0 3.57 1.98 3.57 4.55v5.27Z"
        />
      </svg>
    );
  }

  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6 2h9l5 5v15H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm8 1.5V8h4.5L14 3.5ZM8 12v1.5h8V12H8Zm0 3v1.5h8V15H8Z"
      />
    </svg>
  );
}

function ProjectVisual({ title, category }) {
  return (
    <div className="project-visual">
      <div className="browser-bar">
        <span />
        <span />
        <span />
        <div className="browser-address">pooja-portfolio / projects</div>
      </div>
      <div className="visual-content">
        <div className="visual-symbol">{title.charAt(0)}</div>
        <span>{category}</span>
        <h3>{title}</h3>
        <div className="visual-lines">
          <i />
          <i />
          <i />
        </div>
      </div>
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Education",
    "Certifications",
    "Contact",
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={darkMode ? "app dark-theme" : "app light-theme"}>
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          POOJA<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? "☀" : "☾"}
          </button>
          <a
            className="resume-icon"
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="View Resume"
            title="View Resume"
          >
            <SocialIcon type="resume" />
          </a>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              BCA STUDENT · OPEN TO OPPORTUNITIES
            </div>

            <p className="eyebrow">HELLO, I'M</p>
            <h1>
              Pooja <span>Patel</span>
            </h1>

            <h2>
              BCA Student <span>|</span> MERN Stack Enthusiast
              <span> | </span>Data Analytics Enthusiast
            </h2>

            <p className="hero-description">
              Motivated BCA student with hands-on experience in web
              development and data analytics. Passionate about building
              practical applications, learning new technologies and solving
              real-world problems.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Work <span>↗</span>
              </a>
              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/PoojaPatelX13"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <SocialIcon type="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/pooja-patel-48666a386"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <SocialIcon type="linkedin" />
              </a>
              <a
                href="mailto:poojapatel53032@gmail.com"
                aria-label="Email"
                title="Email"
              >
                <SocialIcon type="email" />
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Resume"
                title="Resume"
              >
                <SocialIcon type="resume" />
              </a>
            </div>
          </div>

          <div className="hero-image-wrap">
            <div className="image-glow" />
            <div className="hero-image-frame">
              <img src="/profile.jpg" alt="Pooja Patel" />
            </div>
            <div className="floating-card">
              <span className="floating-icon">✦</span>
              <div>
                <strong>Always Learning</strong>
                <small>Growing every day</small>
              </div>
            </div>
            <div className="hero-decoration decoration-one" />
            <div className="hero-decoration decoration-two" />
          </div>

          <a href="#about" className="scroll-indicator">
            SCROLL TO EXPLORE <span>↓</span>
          </a>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">GET TO KNOW ME</p>
            <h2>About <span>Me</span></h2>
            <p>A little introduction about my journey and interests.</p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <span className="card-number">01 / ABOUT</span>
              <h3>Who I Am</h3>
              <p>
                I am a Bachelor of Computer Applications (BCA) student from
                Bengaluru, interested in web development and data analytics.
                I enjoy learning technologies and applying my knowledge to
                practical projects.
              </p>
              <p>
                Through academic work and internships, I have gained
                experience in building web pages, working with databases,
                developing applications and analysing data.
              </p>
            </div>

            <div className="about-details">
              <div className="detail-card">
                <span>⌘</span>
                <div>
                  <h4>Development</h4>
                  <p>Building responsive web applications using MERN Stack.</p>
                </div>
              </div>
              <div className="detail-card">
                <span>▥</span>
                <div>
                  <h4>Data Analytics</h4>
                  <p>Exploring data, dashboards and useful insights.</p>
                </div>
              </div>
              <div className="detail-card">
                <span>✧</span>
                <div>
                  <h4>Continuous Learning</h4>
                  <p>Improving my technical and professional skills.</p>
                </div>
              </div>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                View My Resume <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">WHAT I WORK WITH</p>
            <h2>My <span>Skills</span></h2>
            <p>Technologies and tools I have learned and practised.</p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{skill}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">MY JOURNEY</p>
            <h2>Internship <span>Experience</span></h2>
            <p>Practical learning and industry exposure.</p>
          </div>

          <div className="experience-list">
            <article className="experience-card">
              <div className="experience-date">JUL – AUG 2026</div>
              <div className="experience-info">
                <span className="experience-label">INTERNSHIP</span>
                <h3>Data Analytics Intern</h3>
                <h4>Thiranex EduTech LLP · Remote</h4>
                <ul>
                  <li>Worked on sales and revenue analysis using Excel.</li>
                  <li>
                    Practised customer segmentation using K-Means clustering.
                  </li>
                  <li>Explored predictive analytics and data insights.</li>
                </ul>
              </div>
            </article>

            <article className="experience-card">
              <div className="experience-date">JUL – AUG 2026</div>
              <div className="experience-info">
                <span className="experience-label">INTERNSHIP</span>
                <h3>Web Development Intern</h3>
                <h4>Thiranex EduTech LLP · Remote</h4>
                <ul>
                  <li>
                    Practised creating web pages using HTML, CSS, JavaScript
                    and Bootstrap.
                  </li>
                  <li>Worked on webpage layouts and user interface improvements.</li>
                  <li>
                    Practised testing webpage functionality and responsiveness.
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>My <span>Projects</span></h2>
            <p>Some of the projects I have worked on and learned from.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <ProjectVisual
                  title={project.title}
                  category={project.category}
                />
                <div className="project-content">
                  <div className="project-topline">
                    <span>{project.category}</span>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-heading">
            <p className="eyebrow">ACADEMIC BACKGROUND</p>
            <h2>My <span>Education</span></h2>
            <p>My academic journey.</p>
          </div>

          <div className="education-list">
            <article className="education-card">
              <div className="education-year">2024 – 2027</div>
              <div>
                <span className="experience-label">UNDERGRADUATE</span>
                <h3>Bachelor of Computer Applications (BCA)</h3>
                <p>Aditya Institute of Management Studies and Research</p>
                <p>Bengaluru City University, Bengaluru</p>
                <span className="education-score">4th Semester SGPA: 8.02</span>
              </div>
            </article>

            <article className="education-card">
              <div className="education-year">PUC</div>
              <div>
                <span className="experience-label">PRE-UNIVERSITY</span>
                <h3>Pre-University Course</h3>
                <p>Percentage: 58%</p>
              </div>
            </article>

            <article className="education-card">
              <div className="education-year">SSLC</div>
              <div>
                <span className="experience-label">SCHOOL</span>
                <h3>Secondary School Leaving Certificate</h3>
                <p>Percentage: 85%</p>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="certifications">
          <div className="section-heading">
            <p className="eyebrow">LEARNING & ACHIEVEMENTS</p>
            <h2>My <span>Certifications</span></h2>
            <p>Courses and certifications supporting my learning journey.</p>
          </div>

          <div className="certifications-grid">
            {[
              "Data Analytics Internship",
              "Web Development Internship",
              "AI Fundamentals",
              "AI Language and Vision",
              "Getting Started with Generative AI",
              "Project Management",
            ].map((certificate, index) => (
              <div className="certificate-card" key={certificate}>
                <div className="certificate-icon">✧</div>
                <div>
                  <span>CERTIFICATION {String(index + 1).padStart(2, "0")}</span>
                  <h3>{certificate}</h3>
                </div>
                <span className="certificate-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-panel">
            <div>
              <p className="eyebrow">LET'S CONNECT</p>
              <h2>Have a project or opportunity in mind?</h2>
              <p>
                I would love to connect, learn and explore new opportunities.
                Feel free to reach out.
              </p>
              <a
                href="mailto:poojapatel53032@gmail.com"
                className="primary-button"
              >
                Get In Touch <span>↗</span>
              </a>
            </div>

            <div className="contact-details">
              <a href="mailto:poojapatel53032@gmail.com">
                <SocialIcon type="email" />
                <span>
                  <small>EMAIL</small>
                  poojapatel53032@gmail.com
                </span>
              </a>
              <a href="tel:+918652136933">
                <span className="contact-symbol">☎</span>
                <span>
                  <small>PHONE</small>
                  +91 8652136933
                </span>
              </a>
              <div className="contact-location">
                <span className="contact-symbol">⌖</span>
                <span>
                  <small>LOCATION</small>
                  Bengaluru, Karnataka, India
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          POOJA<span>.</span>
        </a>
        <p>Designed & built by Pooja Patel</p>
        <div className="footer-socials">
          <a
            href="https://github.com/PoojaPatelX13"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <SocialIcon type="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/pooja-patel-48666a386"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <SocialIcon type="linkedin" />
          </a>
          <a href="mailto:poojapatel53032@gmail.com" aria-label="Email">
            <SocialIcon type="email" />
          </a>
        </div>
        <span className="copyright">
          © {new Date().getFullYear()} Pooja Patel. All rights reserved.
        </span>
      </footer>
    </div>
  );
}

export default App;
