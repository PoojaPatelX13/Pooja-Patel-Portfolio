
import { useState } from "react";
import "./App.css";

const RESUME_URL =
  "https://drive.google.com/file/d/1Ftm7jmsRFEaL324bzbhlc0WTUm671_4j/view?usp=drivesdk";

const projects = [
  {
    title: "Book Basket",
    category: "MERN Stack",
    description:
      "An online library management system that helps users explore books and manage their personal library.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    link: "https://github.com/PoojaPatelX13/Book-Basket",
  },
  {
    title: "Destiny Travels",
    category: "Backend Development",
    description:
      "A travel destination API built using Express.js and MongoDB with CRUD operations.",
    tech: ["Node.js", "Express.js", "MongoDB"],
    link: "https://github.com/PoojaPatelX13/Destiny-Travels",
  },
  {
    title: "Technika Courses",
    category: "React",
    description:
      "A React application displaying technical and programming courses with category filters.",
    tech: ["React", "JavaScript", "CSS"],
    link: "https://github.com/PoojaPatelX13/Technika-Courses",
  },
  {
    title: "Cinescope",
    category: "Web Development",
    description:
      "A movie browsing application with movie details and watchlist functionality.",
    tech: ["React", "JavaScript", "CSS"],
    link: "https://github.com/PoojaPatelX13/Cinescope",
  },
  {
    title: "Foodie Card",
    category: "Web Development",
    description: "A food-themed card interface built as a frontend project.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/PoojaPatelX13/Foodie-Card",
  },
  {
    title: "Bit Demo",
    category: "Web Development",
    description: "A practical frontend development project.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/PoojaPatelX13/Bit-Demo",
  },
  {
    title: "Type Rush",
    category: "JavaScript",
    description: "A typing practice project built using web technologies.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/PoojaPatelX13/Type-Rush-",
  },
  {
    title: "Sales & Revenue Dashboard",
    category: "Data Analytics",
    description:
      "An Excel dashboard project focused on sales performance and revenue insights.",
    tech: ["Excel", "Pivot Tables", "Data Visualization"],
    link: "https://github.com/PoojaPatelX13",
  },
  {
    title: "Customer Segmentation",
    category: "Data Analytics",
    description:
      "A customer segmentation project using the K-Means clustering approach.",
    tech: ["Python", "K-Means", "Data Analytics"],
    link: "https://github.com/PoojaPatelX13",
  },
  {
    title: "Predictive Analytics",
    category: "Data Analytics",
    description:
      "An internship project exploring data patterns and predictive analysis.",
    tech: ["Python", "Data Analysis"],
    link: "https://github.com/PoojaPatelX13",
  },
];

const skillGroups = [
  {
    title: "Programming",
    skills: ["Python", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "MERN Stack",
    skills: ["React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Database",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Data Analytics",
    skills: ["Microsoft Excel", "Pivot Tables", "K-Means", "Data Visualization"],
  },
  {
    title: "Tools",
    skills: ["VS Code", "Git", "GitHub", "Bootstrap"],
  },
];

const certificates = [
  "Data Analytics Internship",
  "Web Development Internship",
  "AI Fundamentals",
  "AI Language and Vision",
  "Getting Started with Generative AI",
  "Project Management",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={darkMode ? "portfolio dark" : "portfolio light"}>
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          Pooja<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["Home", "About", "Skills", "Experience", "Projects", "Education", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
              >
                {item}
              </a>
            )
          )}

          <a href={RESUME_URL} target="_blank" rel="noreferrer" aria-label="Resume">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6M8 13h8M8 17h8" />
            </svg>
          </a>

          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? "☀" : "☾"}
          </button>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <p className="eyebrow">HELLO, I'M</p>
            <h1>
              Pooja <span>Patel</span>
            </h1>
            <h2>BCA Student | MERN Stack Enthusiast | Data Analytics Enthusiast</h2>
            <p className="hero-description">
              I am a motivated BCA student interested in building web
              applications and exploring data analytics. I enjoy learning new
              technologies and turning ideas into practical projects.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-btn">
                Explore My Work
              </a>
              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/PoojaPatelX13"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/pooja-patel-48666a386"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              <a href="mailto:poojapatel53032@gmail.com" aria-label="Email">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 7L2 7" />
                </svg>
              </a>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Resume"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6M8 13h8M8 17h8" />
                </svg>
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-frame">
              <img
                src="/profile.jpg"
                alt="Pooja Patel"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <div className="image-placeholder">PP</div>
            </div>
            <div className="floating-tag">Aspiring Software Developer</div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <p className="eyebrow">GET TO KNOW ME</p>
          <h2 className="section-title">
            About <span>Me</span>
          </h2>

          <div className="about-content">
            <div>
              <h3>Building skills. Creating possibilities.</h3>
              <p>
                I am a Bachelor of Computer Applications student at Aditya
                Institute of Management Studies and Research, Bengaluru City
                University. I am passionate about technology, web development,
                and data analytics.
              </p>
              <p>
                Through academic work, internships, and personal projects, I
                have gained practical exposure to programming, frontend
                development, backend development, and data analysis.
              </p>
              <p>
                I am a hardworking, responsible, and quick learner who enjoys
                improving my technical skills and taking on new challenges.
              </p>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="primary-btn"
              >
                View My Resume ↗
              </a>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <strong>10+</strong>
                <span>Projects</span>
              </div>
              <div className="stat-card">
                <strong>2</strong>
                <span>Internships</span>
              </div>
              <div className="stat-card">
                <strong>2024–27</strong>
                <span>BCA Journey</span>
              </div>
              <div className="stat-card">
                <strong>6+</strong>
                <span>Certificates</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <p className="eyebrow">WHAT I WORK WITH</p>
          <h2 className="section-title">
            My <span>Skills</span>
          </h2>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <p className="eyebrow">MY PROFESSIONAL JOURNEY</p>
          <h2 className="section-title">
            Internship <span>Experience</span>
          </h2>

          <div className="experience-card">
            <div className="experience-top">
              <div>
                <h3>Data Analytics Intern</h3>
                <p>Thiranex EduTech LLP</p>
              </div>
              <span>July – August 2026</span>
            </div>
            <ul>
              <li>Worked on sales and revenue analysis using Microsoft Excel.</li>
              <li>Practiced customer segmentation using K-Means clustering.</li>
              <li>Explored predictive analytics and data interpretation.</li>
            </ul>
          </div>

          <div className="experience-card">
            <div className="experience-top">
              <div>
                <h3>Web Development Intern</h3>
                <p>Thiranex EduTech LLP</p>
              </div>
              <span>July – August 2026</span>
            </div>
            <ul>
              <li>Practiced creating web pages using HTML, CSS, JavaScript, and Bootstrap.</li>
              <li>Worked on webpage layouts and user interface improvements.</li>
              <li>Practiced testing webpage functionality and responsiveness.</li>
            </ul>
          </div>
        </section>

        <section className="section" id="projects">
          <p className="eyebrow">SOME THINGS I'VE BUILT</p>
          <h2 className="section-title">
            My <span>Projects</span>
          </h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <p className="eyebrow">MY ACADEMIC BACKGROUND</p>
          <h2 className="section-title">
            <span>Education</span>
          </h2>

          <div className="education-card">
            <span className="education-year">2024 – 2027</span>
            <h3>Bachelor of Computer Applications (BCA)</h3>
            <p>Aditya Institute of Management Studies and Research</p>
            <p>Bengaluru City University, Bengaluru</p>
          </div>
          <div className="education-card">
            <h3>Pre-University Course (PUC)</h3>
            <p>Completed Higher Secondary Education</p>
          </div>
          <div className="education-card">
            <h3>SSLC</h3>
            <p>Completed Secondary School Education</p>
          </div>
        </section>

        <section className="section" id="certifications">
          <p className="eyebrow">CONTINUOUS LEARNING</p>
          <h2 className="section-title">
            My <span>Certifications</span>
          </h2>
          <div className="certificates-grid">
            {certificates.map((certificate) => (
              <div className="certificate-card" key={certificate}>
                <span>✦</span>
                <h3>{certificate}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2 className="section-title">
            Get In <span>Touch</span>
          </h2>
          <p>
            I am always open to connecting, learning, and exploring new
            opportunities.
          </p>

          <div className="contact-details">
            <a href="mailto:poojapatel53032@gmail.com">
              <span>✉</span>
              poojapatel53032@gmail.com
            </a>
            <a href="tel:+918652136933">
              <span>☎</span>
              +91 8652136933
            </a>
            <p>
              <span>⌖</span>
              Bengaluru, Karnataka, India
            </p>
          </div>

          <div className="contact-socials">
            <a
              href="https://github.com/PoojaPatelX13"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/pooja-patel-48666a386"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a href={RESUME_URL} target="_blank" rel="noreferrer">
              Resume ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">
          Pooja<span>.</span>
        </a>
        <p>Designed & built by Pooja Patel</p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
