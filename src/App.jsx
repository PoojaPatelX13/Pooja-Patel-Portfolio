
import { useState } from "react";
import "./App.css";

const skillGroups = [
  { title: "Programming Languages", skills: ["Python", "JavaScript"] },
  { title: "Frontend Development", skills: ["HTML", "CSS", "Bootstrap", "React.js"] },
  { title: "Backend Development", skills: ["Node.js", "Express.js"] },
  { title: "Database Management", skills: ["MySQL", "MongoDB"] },
  {
    title: "Data Analytics",
    skills: ["Microsoft Excel", "Pivot Tables", "Data Visualization", "K-Means"],
  },
  { title: "Tools & Technologies", skills: ["Git", "GitHub", "VS Code"] },
];

const projects = [
  {
    number: "01",
    title: "Book Basket",
    category: "Full Stack",
    description:
      "An online library management system designed to make book discovery and personal library management easier.",
    details:
      "Developed using the MERN Stack with backend APIs, MongoDB integration, and the Open Library API.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Open Library API"],
    link: "https://github.com/PoojaPatelX13/Book-Basket",
  },
  {
    number: "02",
    title: "Destiny Travels",
    category: "Backend",
    description:
      "A travel destination management REST API for organizing and managing destination information.",
    details:
      "Practiced CRUD operations, filtering, sorting, pagination, and API testing using Postman.",
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Postman"],
    link: "https://github.com/PoojaPatelX13/Destiny-Travels",
  },
  {
    number: "03",
    title: "Technika Courses",
    category: "Frontend",
    description:
      "An interactive course exploration application for browsing technical and programming courses.",
    details:
      "Created using React, reusable components, structured course data, and category-based filtering.",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    link: "https://github.com/PoojaPatelX13/Technika-Courses",
  },
  {
    number: "04",
    title: "Cinescope",
    category: "Frontend",
    description:
      "A movie discovery application for exploring movies, viewing details, and managing a personal watchlist.",
    details:
      "Built with React and reusable components for movie details and watchlist interfaces.",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    link: "https://github.com/PoojaPatelX13/Cinescope",
  },
  {
    number: "05",
    title: "Foodie Card",
    category: "Frontend",
    description:
      "A food-themed web interface featuring visually engaging food cards and organized content.",
    details:
      "A frontend practice project focused on card layouts, spacing, and visual presentation.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/PoojaPatelX13/Foodie-Card",
  },
  {
    number: "06",
    title: "Bit-Demo",
    category: "Frontend",
    description:
      "A frontend practice project exploring webpage structure and core web development concepts.",
    details:
      "Created to strengthen practical understanding of frontend development fundamentals.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/PoojaPatelX13/Bit-Demo",
  },
  {
    number: "07",
    title: "Type Rush",
    category: "Frontend",
    description:
      "A typing practice application designed to provide an interactive typing experience.",
    details:
      "A JavaScript practice project focused on user interaction, input handling, and dynamic interface updates.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/PoojaPatelX13/Type-Rush-",
  },
  {
    number: "08",
    title: "Sales & Revenue Dashboard",
    category: "Data Analytics",
    description:
      "An Excel dashboard created to present sales and revenue information in an organized visual format.",
    details:
      "Worked with sales data, Pivot Tables, and dashboard visualizations during the Data Analytics internship.",
    tech: ["Microsoft Excel", "Pivot Tables", "Data Visualization"],
    link: "https://github.com/PoojaPatelX13",
  },
  {
    number: "09",
    title: "Customer Segmentation",
    category: "Data Analytics",
    description:
      "A data analytics project focused on grouping customers based on similarities in their data.",
    details:
      "Practiced customer segmentation using Python, Pandas, and K-Means clustering.",
    tech: ["Python", "Pandas", "K-Means", "Data Analysis"],
    link: "https://github.com/PoojaPatelX13",
  },
  {
    number: "10",
    title: "GitHub Profile README",
    category: "Other",
    description:
      "A personal GitHub profile introduction showcasing my technical interests and development journey.",
    details:
      "Organized my GitHub profile to introduce my skills, projects, and ongoing learning.",
    tech: ["GitHub", "Markdown"],
    link: "https://github.com/PoojaPatelX13/PoojaPatelX13",
  },
];

const certifications = [
  {
    title: "Data Analytics Internship",
    provider: "Thiranex EduTech LLP",
    description:
      "Gained practical experience in data analysis through Excel dashboards, customer segmentation, and predictive analytics assignments.",
  },
  {
    title: "AI Fundamentals",
    provider: "IBM SkillsBuild",
    description:
      "Learned fundamental artificial intelligence concepts and explored their applications in different fields.",
  },
  {
    title: "AI Language and Vision",
    provider: "IBM SkillsBuild",
    description:
      "Explored AI concepts related to language processing and computer vision.",
  },
  {
    title: "Web Development Internship",
    provider: "Thiranex EduTech LLP",
    description:
      "Practiced creating web pages using HTML, CSS, JavaScript, and Bootstrap, along with layout improvements and responsive testing.",
  },
  {
    title: "Getting Started with Generative AI",
    provider: "IBM SkillsBuild",
    description:
      "Learned the basics of generative AI and explored its uses in content creation and everyday applications.",
  },
  {
    title: "Project Management",
    provider: "IBM SkillsBuild",
    description:
      "Learned the fundamentals of project planning, organization, coordination, and project execution.",
  },
];

function SocialIcon({ type }) {
  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.07c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.04-1.15 3.04-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3.01 0 4.3-2.61 5.24-5.1 5.52.4.35.75 1.03.75 2.08V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z"
        />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.8H4.96V9.24h2.97v9.56ZM6.44 7.94a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.37 10.86h-2.96v-4.65c0-1.11-.02-2.53-1.54-2.53-1.54 0-1.78 1.2-1.78 2.45v4.73H9.57V9.24h2.84v1.31h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.56 1.97 3.56 4.54v5.25Z"
        />
      </svg>
    );
  }

  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm9 8.1L3.5 7h17L12 13.1ZM3 8.5V17h18V8.5l-9 7-9-7Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6 2h9l5 5v15H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm8 1.5V8h4.5L14 3.5ZM7 12h10v1.5H7V12Zm0 3.5h10V17H7v-1.5Z"
      />
    </svg>
  );
}

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [theme, setTheme] = useState("dark");

  const filters = [
    "All",
    "Full Stack",
    "Frontend",
    "Backend",
    "Data Analytics",
    "Other",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const resumeUrl =
    "https://drive.google.com/file/d/13TfvXssV8Ki58Et7eUtNu7TqS2GkjqoO/view";

  const linkedinUrl =
    "https://www.linkedin.com/in/pooja-patel-48666a386";

  return (
    <div className="portfolio" data-theme={theme}>
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="brand">
          POOJA PATEL<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certificates</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            aria-label="Toggle colour theme"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>

          <a
            className="nav-resume"
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon type="resume" />
            Resume
            <span>↗</span>
          </a>
        </div>
      </header>

      <main>
        {/* HOME */}
        <section className="hero section-container" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot"></span>
              WELCOME TO MY PORTFOLIO
            </p>

            <h1>
              Hi, I'm <span>Pooja Patel.</span>
              <br />
              Building my journey in technology.
            </h1>

            <h2>
              BCA Student <span>|</span> MERN Stack Enthusiast
              <span>|</span> Data Analytics Enthusiast
            </h2>

            <p className="hero-description">
              Motivated BCA student with hands-on experience in Python,
              JavaScript, MERN Stack, and Data Analytics. I enjoy building
              web applications, exploring backend technologies, and working
              with data. This portfolio showcases my projects, internship
              experience, and learning journey.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                Explore My Work <span>↗</span>
              </a>
              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/PoojaPatelX13"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <SocialIcon type="github" />
                <span>GitHub</span>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <SocialIcon type="linkedin" />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:poojapatel53032@gmail.com"
                aria-label="Send email"
              >
                <SocialIcon type="email" />
                <span>Email</span>
              </a>
            </div>
          </div>

          <div className="hero-image-area">
            <div className="image-glow"></div>
            <div className="profile-frame">
              <img src="/profile.jpg" alt="Pooja Patel" />
            </div>
            <div className="image-caption">
              <span className="caption-line"></span>
              <span>LEARNING · BUILDING · GROWING</span>
            </div>
            <div className="floating-label">BCA / 2024–2027</div>
          </div>

          <div className="hero-bottom">
            <span>BASED IN BENGALURU, INDIA</span>
            <a href="#about">SCROLL TO EXPLORE ↓</a>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section-container about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>Curious mind. Practical learning.</h2>
          </div>

          <div className="about-content">
            <div className="about-intro">
              <p>
                I am a Bachelor of Computer Applications student at Aditya
                Institute of Management Studies and Research, Bengaluru.
                I am interested in web development, MERN Stack technologies,
                and Data Analytics.
              </p>
            </div>

            <div className="about-details">
              <p>
                Through academic assignments, personal projects, and
                internships, I have gained practical experience in developing
                web interfaces, working with backend APIs, managing databases,
                and exploring data.
              </p>
              <p>
                I believe in learning by building, improving my problem-solving
                skills, and consistently exploring new technologies.
              </p>
              <a href="#contact" className="text-link">
                LET'S CONNECT ↗
              </a>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section-container skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">02 / TECHNICAL SKILLS</p>
            <h2>Skills & Technologies</h2>
            <p className="section-description">
              My technical knowledge and tools developed through coursework,
              internships, and practical projects.
            </p>
          </div>

          <div className="skills-list">
            {skillGroups.map((group, index) => (
              <div className="skill-row" key={group.title}>
                <div className="skill-category">
                  <span className="skill-number">0{index + 1}</span>
                  <h3>{group.title}</h3>
                </div>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          className="section-container experience-section"
          id="experience"
        >
          <div className="section-heading">
            <p className="eyebrow">03 / EXPERIENCE</p>
            <h2>Learning through experience.</h2>
            <p className="section-description">
              Internship experience at Thiranex EduTech LLP.
            </p>
          </div>

          <div className="experience-card">
            <div className="experience-top">
              <div>
                <p className="experience-label">INTERNSHIP EXPERIENCE</p>
                <h3>Thiranex EduTech LLP</h3>
              </div>
              <span className="experience-date">JULY – AUGUST 2026</span>
            </div>

            <div className="internship-item">
              <h4>Data Analytics Intern</h4>
              <p>
                Gained practical experience in organizing, analyzing, and
                presenting data through internship assignments.
              </p>
              <ul>
                <li>Created a Sales and Revenue Dashboard using Excel.</li>
                <li>Practiced customer segmentation using K-Means clustering.</li>
                <li>Explored predictive analytics concepts and techniques.</li>
              </ul>
            </div>

            <div className="internship-divider"></div>

            <div className="internship-item">
              <h4>Web Development Intern</h4>
              <p>
                Practiced building web pages and improving user interfaces
                using frontend web technologies.
              </p>
              <ul>
                <li>
                  Created web pages using HTML, CSS, JavaScript, and Bootstrap.
                </li>
                <li>Worked on webpage layouts and user interface improvements.</li>
                <li>
                  Practiced testing webpage functionality and responsiveness.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section-container projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">04 / SELECTED WORK</p>
            <h2>Projects & practical work.</h2>
            <p className="section-description">
              A collection of academic, internship, and personal projects
              reflecting my learning in web development, backend technologies,
              and data analytics.
            </p>
          </div>

          <div className="project-filter-area">
            <span className="filter-heading">EXPLORE THE COLLECTION</span>

            <div className="filter-buttons">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={activeFilter === filter ? "active" : ""}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">
                    {project.number} / 10
                  </span>
                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-details">{project.details}</p>

                <div className="project-tech">
                  {project.tech.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  VIEW PROJECT <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section-container education-section" id="education">
          <div className="section-heading">
            <p className="eyebrow">05 / EDUCATION</p>
            <h2>My academic journey.</h2>
            <p className="section-description">
              My educational background and academic progress.
            </p>
          </div>

          <div className="education-list">
            <article className="education-card">
              <div className="education-info">
                <span className="education-date">2024 – 2027</span>
                <h3>Bachelor of Computer Applications (BCA)</h3>
                <h4>Aditya Institute of Management Studies and Research</h4>
                <p>Bengaluru City University, Bengaluru</p>
                <p className="education-description">
                  Currently pursuing BCA, developing knowledge in computer
                  applications, programming, web technologies, and databases.
                </p>
              </div>

              <div className="education-score">
                <span>4TH SEMESTER</span>
                <strong>8.02</strong>
                <small>SGPA</small>
              </div>
            </article>

            <article className="education-card">
              <div className="education-info">
                <span className="education-date">PUC</span>
                <h3>Pre-University Course</h3>
                <p>Completed higher secondary education.</p>
              </div>

              <div className="education-score">
                <strong>58%</strong>
                <small>Percentage</small>
              </div>
            </article>

            <article className="education-card">
              <div className="education-info">
                <span className="education-date">SSLC</span>
                <h3>Secondary School Leaving Certificate</h3>
                <p>Completed secondary school education.</p>
              </div>

              <div className="education-score">
                <strong>85%</strong>
                <small>Percentage</small>
              </div>
            </article>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section
          className="section-container certificates-section"
          id="certifications"
        >
          <div className="section-heading">
            <p className="eyebrow">06 / CERTIFICATIONS</p>
            <h2>Certifications & continuous learning.</h2>
            <p className="section-description">
              Internship and professional learning certifications in
              technology, artificial intelligence, data analytics, and
              web development.
            </p>
          </div>

          <div className="certificates-grid">
            {certifications.map((certificate, index) => (
              <article className="certificate-item" key={certificate.title}>
                <span className="certificate-number">0{index + 1}</span>

                <div className="certificate-content">
                  <h3>{certificate.title}</h3>
                  <span className="certificate-provider">
                    {certificate.provider}
                  </span>
                  <p>{certificate.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="section-container contact-section" id="contact">
          <div className="contact-content">
            <p className="eyebrow">07 / GET IN TOUCH</p>
            <h2>
              Have an opportunity
              <br />
              or a project in mind?
            </h2>
            <p>
              I would love to connect, learn, and explore opportunities in
              technology.
            </p>
            <a
              href="mailto:poojapatel53032@gmail.com"
              className="primary-button"
            >
              Let's Talk <span>↗</span>
            </a>
          </div>

          <div className="contact-details">
            <div>
              <span>EMAIL</span>
              <a href="mailto:poojapatel53032@gmail.com">
                poojapatel53032@gmail.com
              </a>
            </div>

            <div>
              <span>PHONE</span>
              <a href="tel:+918652136933">+91 8652136933</a>
            </div>

            <div>
              <span>LOCATION</span>
              <p>Bengaluru, Karnataka, India</p>
            </div>

            <div>
              <span>PROFILES</span>
              <div className="contact-socials">
                <a
                  href="https://github.com/PoojaPatelX13"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <SocialIcon type="github" />
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <SocialIcon type="linkedin" />
                </a>

                <a
                  href="mailto:poojapatel53032@gmail.com"
                  aria-label="Email"
                >
                  <SocialIcon type="email" />
                </a>
              </div>
            </div>

            <div>
              <span>RESUME</span>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-resume"
              >
                <SocialIcon type="resume" />
                View Resume ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="brand">
          POOJA PATEL<span>.</span>
        </a>
        <p>Designed & built by Pooja Patel</p>
        <span>© 2026 ALL RIGHTS RESERVED</span>
      </footer>
    </div>
  );
}

export default App;
