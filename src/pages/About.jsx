import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import aboutImage from "../assets/About-me-image.JPG";
// Import other project images for other projects section
import wcagHeroImage from "../assets/WCAG-images/WCAGmainhero.png";
import timeManagementImage from "../assets/Timemgmt-images/Timemgmt.png";
import mealUHeroImage from "../assets/MealU-images/MealUHero.png";
import reactWeatherHeroImage from "../assets/Reactweather-images/Reactweatherhero.png";
import lechaletHeroImage from "../assets/Lechaletbymay-images/Lechaletbymay.png";

function About() {
  const [activeSection, setActiveSection] = useState("about");
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState("ux");

  // UX Projects data
  const uxProjects = [
    {
      id: "wcag",
      title: "WCAG eLearning Platform",
      image: wcagHeroImage,
      alt: "WCAG 2.2 eLearning platform",
      description: "A gamified, space-themed accessibility platform with 86 hands-on challenges. Trained 250+ Fortune 500 learners.",
      tags: ["UX Design", "eLearning", "Accessibility", "WCAG 2.2"],
      link: "/wcag-project"
    },
    {
      id: "time",
      title: "Time Management eLearning",
      image: timeManagementImage,
      alt: "Time Management eLearning module",
      description: "Recipe-based productivity module for the State of Michigan IT Department, transforming techniques into simple, repeatable recipes.",
      tags: ["UX Design", "eLearning", "Productivity", "Research"],
      link: "/time-management-case-study"
    },
    {
      id: "mealu",
      title: "Meal U: Student Meal Delivery",
      image: mealUHeroImage,
      alt: "Meal U - Affordable meal delivery for college students",
      description: "Student-focused meal delivery service with affordable pricing, 5-step easy meals, and personalized options designed for dorm living.",
      tags: ["UX Design", "User Research", "Brand Design", "Mobile App"],
      link: "/meal-u"
    }
  ];

  // Development Projects data
  const devProjects = [
    {
      id: "weather",
      title: "React Weather App",
      image: reactWeatherHeroImage,
      alt: "React Weather App with 5-day forecast",
      description: "A responsive weather application built with React that displays real-time weather data, 5-day forecast, and location search.",
      tags: ["React", "API Integration", "Front-End", "OpenWeatherMap"],
      link: "/react-weather"
    },
    {
      id: "lechalet",
      title: "Le Chalet by May",
      image: lechaletHeroImage,
      alt: "Le Chalet by May Shopify redesign",
      description: "Custom Shopify redesign with hard-coded menu, wishlist, and mobile-first design.",
      tags: ["Shopify", "Front-End", "E-Commerce", "Custom Development"],
      link: "/le-chalet-by-may"
    }
  ];

  // Section navigation items for About page
  const navItems = [
    { id: "about", label: "About", icon: "👤" },
    { id: "skills", label: "Skills", icon: "🛠️" },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "other", label: "Other Projects", icon: "📁" }
  ];

  // Smooth scroll to section with offset for sticky navbar
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -90;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "experience", "other"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle body scroll when modal opens/closes
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  // Open image modal
  const openImageModal = (imageSrc, imageTitle) => {
    setSelectedImage({ src: imageSrc, title: imageTitle });
    setModalOpen(true);
  };

  // Close image modal
  const closeImageModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  // Skills data
  const skills = [
    { name: "UX/UI Design", level: 90, color: "var(--accent-purple)" },
    { name: "WCAG Accessibility", level: 85, color: "var(--accent-green)" },
    { name: "App Development", level: 85, color: "var(--accent-pink)" },
    { name: "Figma", level: 95, color: "var(--accent-yellow)" },
    { name: "HTML/CSS", level: 90, color: "var(--accent-purple)" },
    { name: "JavaScript/React", level: 80, color: "var(--accent-green)" },
    { name: "User Research", level: 85, color: "var(--accent-pink)" },
    { name: "Project Management", level: 80, color: "var(--accent-yellow)" }
  ];

  // Experience data
  const experiences = [
    {
      title: "Founder & Web Designer",
      company: "Digital Bee Design Corporation",
      date: "May 2024 – Present",
      description: "Lead digital design business delivering custom websites and end-to-end client services. Customize Shopify themes using Liquid, HTML, CSS, and JavaScript to enhance functionality and user experience. Manage project timelines and client relationships."
    },
    {
      title: "User Experience Designer",
      company: "Logical Imagination LLC",
      date: "Jan 2023 – Oct 2024",
      description: "Designed accessible learning modules compliant with WCAG, using Figma advanced prototyping. Developed user flows, wireframes, and interactive prototypes aligned with accessibility standards. Collaborated with cross-functional teams to deliver projects on time."
    },
    {
      title: "APS Investigator & Eligibility Specialist",
      company: "Lane Council of Governments",
      date: "2022 – 2023",
      description: "Served older adults and people with disabilities, coordinating with community organizations to remove barriers and connect individuals to critical services. Developed strong communication and problem-solving skills."
    },
    {
      title: "Health Educator",
      company: "The Coquille Indian Tribe",
      date: "July 2022 – Sept 2022",
      description: "Created culturally relevant educational materials using Figma, applying user research and design strategy to ensure accuracy, cultural relevance, and engagement. Gained experience in community-centered design approaches."
    }
  ];

  return (
    <>
      <Navbar />

      {/* Image Modal */}
      {modalOpen && selectedImage && (
        <div 
          onClick={closeImageModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            padding: "20px",
            backdropFilter: "blur(5px)"
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "85vw",
              maxHeight: "85vh",
              backgroundColor: "white",
              borderRadius: "20px",
              overflow: "auto",
              position: "relative",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            }}
          >
            <button
              onClick={closeImageModal}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background: "white",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                fontSize: "20px",
                cursor: "pointer",
                zIndex: 2,
                boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.backgroundColor = "#f0f0f0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.backgroundColor = "white";
              }}
            >
              ✕
            </button>
            <div style={{
              padding: "20px",
              textAlign: "center",
              backgroundColor: "white"
            }}>
              <h3 style={{ 
                margin: "0 0 16px 0", 
                color: "var(--text-dark)",
                fontSize: "1.5rem"
              }}>
                {selectedImage.title}
              </h3>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "8px"
                }}
              />
              <p style={{
                margin: "16px 0 0 0",
                color: "var(--text-body)",
                fontSize: "0.9rem"
              }}>
                Click anywhere outside to close
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Section Navigation Sidebar */}
      <div className="section-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`section-nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => scrollToSection(item.id)}
            aria-label={`Scroll to ${item.label} section`}
          >
            <span className="section-icon">{item.icon}</span>
            <span className="section-label">{item.label}</span>
          </button>
        ))}
      </div>

      {/* HERO SECTION - Aligned with main content layout */}
      <section className="hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="hero-text-wrapper mb-5 text-start">
                <h1 className="hero-title mb-4">About Me</h1>
                <p className="hero-description" style={{ maxWidth: "100%", marginLeft: 0 }}>
                  UX/UI Designer and Front-End Developer focused on accessibility,
                  WCAG standards, and building intuitive digital experiences.
                </p>
              </div>

              <div className="row align-items-center g-5 mb-5">
                {/* Left Column - Text Content */}
                <div className="col-lg-7">
                  <p className="mb-4" style={{ fontSize: "1rem", lineHeight: "1.7", color: "var(--text-body)" }}>
                    I'm Betzy, a passionate designer and developer who believes that great design should be accessible to everyone. 
                    With a background in community-centered work and a deep commitment to inclusive design, I create digital experiences 
                    that work for all users, regardless of their abilities or circumstances.
                  </p>
                  <p className="mb-4" style={{ fontSize: "1rem", lineHeight: "1.7", color: "var(--text-body)" }}>
                    My journey from APS Investigator to UX Designer gives me a unique perspective on how thoughtful design can remove barriers 
                    and improve access to important information. I combine research-driven insights with creative problem-solving to deliver 
                    solutions that are both beautiful and functional.
                  </p>
                  <div className="d-flex gap-3 mt-4">
                    <button
                      className="btn btn-dark btn-lg px-5 py-3 rounded-pill"
                      onClick={() => scrollToSection("skills")}
                    >
                      Explore My Skills
                    </button>
                    <button
                      className="btn btn-outline-dark btn-lg px-5 py-3 rounded-pill"
                      onClick={() => window.location.href = "mailto:maya.betzaida@gmail.com"}
                    >
                      Contact Me
                    </button>
                  </div>
                </div>

                {/* Right Column - Image */}
                <div className="col-lg-5">
                  <div
                    className="about-image-container"
                    style={{
                      borderRadius: "24px",
                      overflow: "hidden",
                      cursor: "pointer",
                      border: "3px solid var(--accent-purple)",
                      boxShadow: "12px 12px 0 var(--shadow-color)",
                      transition: "all 0.3s ease"
                    }}
                    onClick={() => openImageModal(aboutImage, "Betzy - UX/UI Designer & Front-End Developer")}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = "16px 16px 0 var(--shadow-color)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "12px 12px 0 var(--shadow-color)";
                    }}
                  >
                    <img
                      src={aboutImage}
                      alt="Betzy - UX/UI Designer & Front-End Developer"
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        transition: "transform 0.2s ease"
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Info Cards Row - Consistent with project pages */}
              <div className="project-info-row row g-4 mt-4">
                <div className="col-md-4 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Experience</span>
                    <span>3+ Years in UX/UI Design</span>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Focus</span>
                    <span>Accessibility & WCAG Standards</span>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Expertise</span>
                    <span>UX/UI, App Development, Project Management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="main-content-container">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              
              {/* SKILLS SECTION */}
              <section id="skills" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Skills & Expertise</h2>
                <h3 className="fw-bold mb-4">What I bring to the table</h3>

                <div className="row g-4 mb-5">
                  {skills.map((skill, index) => (
                    <div className="col-md-6" key={index}>
                      <div className="objective-card p-4 rounded-4 h-100">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h5 className="fw-bold mb-0" style={{ color: "var(--text-dark)" }}>{skill.name}</h5>
                          <span className="fw-bold" style={{ color: skill.color }}>{skill.level}%</span>
                        </div>
                        <div className="progress" style={{ height: "8px", borderRadius: "10px", background: "#e9ecef" }}>
                          <div 
                            className="progress-bar" 
                            style={{ 
                              width: `${skill.level}%`, 
                              background: skill.color,
                              borderRadius: "10px",
                              transition: "width 0.6s ease"
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                <div className="mt-5">
                  <h4 className="fw-bold mb-3" style={{ fontSize: "1.3rem", color: "var(--text-dark)" }}>Tech Stack</h4>
                  <div className="p-4 rounded-4" style={{ 
                    background: "var(--pastel-mint)",
                    border: "2px solid var(--accent-green)",
                    boxShadow: "8px 8px 0 var(--shadow-color)"
                  }}>
                    <div className="d-flex flex-wrap gap-2">
                      {["Figma", "React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind", "Git", "VS Code", "React Native", "Node.js"].map((tech, index) => (
                        <span key={index} className="custom-badge" style={{ 
                          background: "white",
                          color: "var(--text-dark)",
                          border: "1px solid var(--accent-purple)",
                          fontSize: "0.9rem",
                          padding: "0.5rem 1rem"
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* EXPERIENCE SECTION */}
              <section id="experience" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Professional Experience</h2>
                <h3 className="fw-bold mb-4">Where I've been and what I've done</h3>

                <div className="row g-4">
                  {experiences.map((exp, index) => (
                    <div className="col-12" key={index}>
                      <div className="challenge-card p-4 rounded-4" style={{ 
                        background: "white",
                        border: "2px solid var(--accent-purple)",
                        boxShadow: "8px 8px 0 var(--shadow-color)",
                        transition: "all 0.3s ease"
                      }}>
                        <div className="d-flex justify-content-between align-items-start mb-3 flex-wrap gap-2">
                          <h4 className="fw-bold mb-0" style={{ color: "var(--text-dark)", fontSize: "1.25rem" }}>{exp.title}</h4>
                          <span className="badge p-2" style={{ 
                            background: "var(--accent-green)",
                            color: "white",
                            fontSize: "0.8rem",
                            padding: "6px 12px"
                          }}>{exp.date}</span>
                        </div>
                        <h5 className="mb-3" style={{ color: "var(--accent-purple)", fontSize: "1rem" }}>{exp.company}</h5>
                        <p className="mb-0" style={{ color: "var(--text-body)", lineHeight: "1.7", fontSize: "0.95rem" }}>{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* OTHER PROJECTS SECTION */}
              <section id="other" className="mb-5">
                <h2 className="text-uppercase small fw-bold mb-4">Other Projects</h2>
                <h3 className="fw-bold mb-4">Explore more of my work</h3>

                <div className="mb-4">
                  <ul className="nav nav-tabs project-tabs">
                    <li className="nav-item">
                      <button className={`nav-link ${activeProjectTab === "ux" ? "active" : ""}`} onClick={() => setActiveProjectTab("ux")}>UX Design</button>
                    </li>
                    <li className="nav-item">
                      <button className={`nav-link ${activeProjectTab === "dev" ? "active" : ""}`} onClick={() => setActiveProjectTab("dev")}>Development</button>
                    </li>
                  </ul>
                </div>

                <div className="row g-4">
                  {activeProjectTab === "ux" && (
                    uxProjects.map((project) => (
                      <div className="col-md-6 col-lg-6" key={project.id}>
                        <div className="project-card h-100">
                          <div className="project-image-container">
                            <img src={project.image} className="project-image w-100" alt={project.alt} style={{ height: "200px", objectFit: "cover" }} />
                          </div>
                          <div className="p-4">
                            <div className="d-flex flex-wrap gap-1 mb-2">
                              {project.tags.map((tag, idx) => (<span key={idx} className="badge bg-light text-dark small-tag">{tag}</span>))}
                            </div>
                            <h5 className="fw-bold mb-2 project-card-title">{project.title}</h5>
                            <p className="text-muted mb-3 project-card-desc">{project.description}</p>
                            <Link to={project.link} className="btn btn-dark w-100 py-2 rounded-pill project-card-btn">View Case Study →</Link>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                  {activeProjectTab === "dev" && (
                    devProjects.map((project) => (
                      <div className="col-md-6 col-lg-6" key={project.id}>
                        <div className="project-card h-100">
                          <div className="project-image-container">
                            <img src={project.image} className="project-image w-100" alt={project.alt} style={{ height: "200px", objectFit: "cover" }} />
                          </div>
                          <div className="p-4">
                            <div className="d-flex flex-wrap gap-1 mb-2">
                              {project.tags.map((tag, idx) => (<span key={idx} className="badge bg-light text-dark small-tag">{tag}</span>))}
                            </div>
                            <h5 className="fw-bold mb-2 project-card-title">{project.title}</h5>
                            <p className="text-muted mb-3 project-card-desc">{project.description}</p>
                            <Link to={project.link} className="btn btn-dark w-100 py-2 rounded-pill project-card-btn">View Project →</Link>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </section>

              <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-5">
                <Link to="/" className="btn btn-outline-dark btn-lg px-5 py-3 rounded-pill back-home-btn">← Back Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;