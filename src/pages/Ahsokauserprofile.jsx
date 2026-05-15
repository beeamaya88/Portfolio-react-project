import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

// Import hero image
import ahsokaHeroImage from "../assets/Mini-projects/Ahsoka-images/AhsokaUP.svg";

// Import user journey iterations
import firstDraftAT from "../assets/Mini-projects/Ahsoka-images/FirstdraftAT.svg";
import secondDraftAT from "../assets/Mini-projects/Ahsoka-images/SeconddraftAT.svg";
import finalUJ from "../assets/Mini-projects/Ahsoka-images/AhsokaUJ.svg";

// Import other project images
import timeManagementImage from "../assets/Timemgmt-images/Timemgmt.png";
import mealUHeroImage from "../assets/MealU-images/MealUHero.png";
import reactWeatherHeroImage from "../assets/Reactweather-images/Reactweatherhero.png";
import lechaletHeroImage from "../assets/Lechaletbymay-images/Lechaletbymay.png";
import wcagHeroImage from "../assets/WCAG-images/WCAGmainhero.png";

function AhsokaUserprofile() {
  const [activeSection, setActiveSection] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState("ux");

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
      const sections = ["overview", "research", "design", "results", "other"];
      
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

  // UX Projects data
  const uxProjects = [
    {
      id: "wcag",
      title: "WCAG eLearning Platform",
      image: wcagHeroImage,
      alt: "WCAG accessibility eLearning platform",
      description: "A gamified, space-themed platform teaching WCAG 2.2 guidelines through 86 hands-on challenges. Trained 250+ Fortune 500 learners.",
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

  // Navigation items
  const navItems = [
    { id: "overview", label: "Overview", icon: "📋" },
    { id: "research", label: "Research", icon: "🔍" },
    { id: "design", label: "Design", icon: "🎨" },
    { id: "results", label: "Results", icon: "📊" },
    { id: "other", label: "Other Projects", icon: "📁" }
  ];

  // User journey iterations data with bullet points
  const journeyIterations = [
    {
      version: "First Draft",
      bulletPoints: [
        "Used a clock layout to represent the passage of time in Ahsoka's journey",
        "Attempted to map key moments from The Clone Wars, Rebels, and live-action series",
        "Information was too crowded and visually overwhelming",
        "Users struggled to follow the chronological sequence",
        "Lacked clear visual hierarchy for different story arcs"
      ],
      insight: "Visual metaphors need to balance creativity with clarity.",
      image: firstDraftAT,
      alt: "First draft - clock layout with crowded information"
    },
    {
      version: "Second Draft",
      bulletPoints: [
        "Used the World Between Worlds portal circles to represent interconnected moments",
        "Circular layout created confusion about reading order",
        "Users didn't know where to start or how to progress through the journey",
        "Portal metaphor was visually appealing but functionally unclear",
        "Still suffered from information density issues"
      ],
      insight: "Circular layouts can disrupt natural reading patterns.",
      image: secondDraftAT,
      alt: "Second draft - World Between Worlds portal circles"
    },
    {
      version: "Final Draft Chosen",
      bulletPoints: [
        "Implemented F-Scan pattern based on established UX research",
        "Nielsen Norman Group eye-tracking research shows users scan content in an F-shaped pattern - left to right across the top, then down the left side",
        "This pattern matches natural reading behaviors in Western cultures",
        "Table layout guides users from left to right through Ahsoka's chronological journey",
        "Clear visual hierarchy separates different series (Clone Wars to Rebels to Mandalorian and Ahsoka)",
        "Information is now scannable, digestible, and logically structured"
      ],
      insight: "Respecting established reading patterns improves comprehension for complex timelines.",
      researchNote: "UX Research: Nielsen Norman Group's F-Shaped Pattern study reveals that users typically read in an F-shape: first horizontally across the top, then down the left side, then horizontally across again. This pattern accounts for 80 percent of user scanning behavior on content-heavy pages.",
      image: finalUJ,
      alt: "Final draft - F-Scan table layout with clear hierarchy"
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

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="hero-text-wrapper mb-5 text-start">
                <h1 className="hero-title mb-4">Ahsoka Tano: User Persona and Journey</h1>
                <p className="hero-description" style={{ maxWidth: "100%", marginLeft: 0 }}>
                  A character-focused UX exercise creating a user persona and journey map for Ahsoka Tano, 
                  one of Star Wars' most beloved characters. The goal was to highlight her defining characteristics 
                  while creating an engaging visual experience that captures her journey across multiple series.
                </p>
              </div>

              <div className="hero-media-wrapper mb-5">
                <div className="hero-video-container">
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "24px",
                      overflow: "hidden",
                      cursor: "pointer",
                      background: "linear-gradient(135deg, #1a1a2e, #16213e)",
                      padding: "20px"
                    }}
                    onClick={() => openImageModal(ahsokaHeroImage, "Ahsoka Tano User Persona with 3D Lightsaber Effect")}
                  >
                    <img
                      src={ahsokaHeroImage}
                      alt="Ahsoka Tano user persona with 3D lightsaber effect"
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        borderRadius: "16px",
                        transition: "transform 0.2s ease"
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: "16px",
                        right: "16px",
                        background: "rgba(0,0,0,0.6)",
                        borderRadius: "20px",
                        padding: "6px 12px",
                        fontSize: "0.75rem",
                        color: "white",
                        backdropFilter: "blur(4px)"
                      }}
                    >
                      Click to enlarge
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-info-row row g-4 mt-4">
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "white", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">My Role</span>
                    <span>UX Designer</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "white", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Timeline</span>
                    <span>2 Weeks</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "white", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Team</span>
                    <span>Individual Project</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "white", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Tools</span>
                    <span>Figma, Canva, Illustrator</span>
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
              
              {/* PROJECT OVERVIEW SECTION */}
              <section id="overview" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Project Overview</h2>
                <h3 className="fw-bold mb-4">User Persona and Journey: Ahsoka Tano</h3>
                <p className="mb-4">
                  <strong>UX Research | Persona Design | Journey Mapping</strong> | 2 Weeks
                </p>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Overview</h4>
                  <p className="mb-4">
                    I was tasked with creating a user persona and user journey for a character of my choice. 
                    I chose <strong>Ahsoka Tano</strong> from the Star Wars franchise. She is one of my favorite characters 
                    because of her powerful female representation in a traditionally male-dominated franchise. 
                    From her introduction as Anakin Skywalker's Padawan to her emergence as a standalone hero, 
                    Ahsoka represents growth, resilience, and breaking barriers.
                  </p>
                  <div className="highlight-box p-4 rounded-4">
                    <p className="fw-bold mb-0 highlight-text">
                      The persona design features a 3D lightsaber effect that breaks out of the frame, creating 
                      visual appeal and <strong>visual interest</strong>. This is a UX principle where unexpected design 
                      elements capture attention and increase engagement by breaking conventional layout patterns.
                    </p>
                  </div>
                </div>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">The Challenge</h4>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="challenge-card p-4 rounded-4 h-100 challenge-card-problem">
                        <h5 className="fw-bold mb-3 challenge-title">The Problem:</h5>
                        <p className="mb-0 challenge-text">
                          Ahsoka's journey spans multiple series (The Clone Wars, Rebels, The Mandalorian, Ahsoka) 
                          across decades. How do you condense her complex character arc into a scannable, engaging 
                          user journey without overwhelming the viewer?
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="challenge-card p-4 rounded-4 h-100 challenge-card-solution">
                        <h5 className="fw-bold mb-3 challenge-title">The Solution:</h5>
                        <p className="mb-0 challenge-text">
                          Through iterative design and UX research on reading patterns, I developed a table-based 
                          F-Scan layout that respects how users naturally consume information. Left to right, 
                          top to bottom, resulting in a clear, scannable journey map.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">My Role</h4>
                  <div className="row">
                    <div className="col-md-7">
                      <p className="mb-3">
                        <strong>UX Designer</strong> leading end-to-end project execution:
                      </p>
                      <ul className="custom-list">
                        <li>Character research across multiple Star Wars series</li>
                        <li>User persona design with 3D visual effects</li>
                        <li>Journey map iteration based on UX research</li>
                        <li>F-Scan pattern implementation for readability</li>
                        <li>Final high-fidelity persona and journey design</li>
                      </ul>
                    </div>
                    <div className="col-md-5">
                      <div className="tools-card p-4 rounded-4">
                        <h5 className="fw-bold mb-3 tools-title">Tools Used</h5>
                        <div className="d-flex flex-wrap gap-2">
                          {["Figma", "Canva", "Adobe Illustrator", "Photoshop"].map((tool, index) => (
                            <span key={index} className="custom-badge">{tool}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* RESEARCH SECTION */}
              <section id="research" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Research</h2>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Why Ahsoka Tano?</h4>
                  <p className="mb-4">
                    Ahsoka Tano represents everything I admire in character design. Growth, independence, and 
                    breaking expectations. When introduced in 2008's <em>The Clone Wars</em> movie, fans were skeptical. 
                    But over seven seasons, she evolved from an annoying Padawan to a fan-favorite Jedi and beyond.
                  </p>
                  
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="insight-card p-4 rounded-4 h-100">
                        <h5 className="fw-bold mb-3 insight-title">Character Significance:</h5>
                        <ul className="custom-list">
                          <li>First female Jedi to lead a Star Wars animated series</li>
                          <li>Survived Order 66 without becoming a Jedi Knight</li>
                          <li>Bridged multiple eras of Star Wars storytelling</li>
                          <li>Represented growth from sidekick to independent hero</li>
                          <li>Became a symbol of resilience and identity</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="concept-card p-4 rounded-4 h-100">
                        <h5 className="fw-bold mb-3 concept-title">Persona Goals:</h5>
                        <ul className="custom-list">
                          <li>Highlight her defining characteristics like bravery, loyalty, and wit</li>
                          <li>Create visual appeal through 3D pop-out effect</li>
                          <li>Showcase her iconic white lightsabers prominently</li>
                          <li>Balance information density with visual interest</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">UX Psychology: Visual Interest and Breakout Effects</h4>
                  <div className="research-highlight p-4 rounded-4 mb-4" style={{ 
                    background: "linear-gradient(135deg, #1a1a2e, #16213e)",
                    border: "2px solid #00d8ff",
                    color: "white"
                  }}>
                    <h5 className="fw-bold mb-3" style={{ color: "#00d8ff" }}>The 3D Lightsaber Effect</h5>
                    <p className="mb-3" style={{ lineHeight: "1.7" }}>
                      <strong>UX Principle: Visual Interest and Breakout Effects</strong><br />
                      Research shows that elements breaking out of their expected boundaries, often called 
                      <strong className="text-white"> breakout or pop-out effects</strong>, capture user attention 
                      by violating the principle of <strong>visual constancy</strong>. When our eyes expect elements 
                      to stay within frames, this unexpected visual creates a <strong>salience boost</strong>, 
                      increasing engagement.
                    </p>
                    <ul className="mb-0" style={{ paddingLeft: "1.2rem" }}>
                      <li className="mb-2"><strong>Attention Capture:</strong> Breakout elements are processed faster than in-frame elements</li>
                      <li className="mb-2"><strong>Emotional Response:</strong> Unexpected visuals trigger dopamine release, increasing memorability</li>
                      <li className="mb-2"><strong>Focal Point:</strong> Pop-out effects naturally guide users' eyes to key information</li>
                      <li><strong>Brand Differentiation:</strong> Breakout designs feel premium and memorable</li>
                    </ul>
                  </div>
                  
                  <p className="mb-4">
                    I applied this principle to Ahsoka's persona design. Her white lightsabers literally break 
                    out of the persona card, creating a dynamic, engaging visual that signals her power and 
                    uniqueness as a character.
                  </p>
                </div>
              </section>

              {/* DESIGN SECTION */}
              <section id="design" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Design</h2>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">User Persona: Ahsoka Tano</h4>
                  <p className="mb-4">
                    The persona design needed to capture Ahsoka's essence. Her Togruta montrals (head-tails), 
                    white lightsabers, and confident stance. I created a 3D pop-out effect where her lightsabers 
                    break the frame, applying UX principles of visual interest and salience.
                  </p>

                  <div className="final-persona-card p-4 rounded-4 mb-4" style={{
                    background: "linear-gradient(135deg, #1a1a2e, #16213e)",
                    border: "2px solid #00d8ff"
                  }}>
                    <div className="text-center">
                      <h5 className="fw-bold mb-3" style={{ color: "#00d8ff" }}>The Persona Design</h5>
                      <div style={{ 
                        cursor: "pointer",
                        display: "inline-block",
                        position: "relative"
                      }} onClick={() => openImageModal(ahsokaHeroImage, "Ahsoka Tano User Persona with 3D Lightsaber Effect")}>
                        <img 
                          src={ahsokaHeroImage} 
                          alt="Ahsoka Tano Persona"
                          style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: "16px",
                            border: "1px solid #00d8ff",
                            boxShadow: "0 8px 20px rgba(0,0,0,0.3)"
                          }}
                        />
                        <span style={{ fontSize: "0.75rem", color: "#00d8ff", marginTop: "8px", display: "inline-block" }}>Click to enlarge</span>
                      </div>
                      <p className="mt-4 mb-0" style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.9rem" }}>
                        <strong>Design Choice:</strong> The lightsabers breaking the frame create a <strong>breakout effect</strong>. This is a UX principle 
                        where elements violating expected boundaries capture attention and signal importance. This visual 
                        metaphor represents how Ahsoka herself broke out of expected character archetypes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">User Journey: Iterative Process</h4>
                  <p className="mb-4">
                    Creating Ahsoka's user journey required multiple iterations. Her story spans multiple series 
                    across decades. I needed a layout that could handle complex information without overwhelming viewers.
                  </p>
                  
                  {/* First Draft */}
                  <div className="design-iteration-block mb-5" style={{ borderBottom: "2px solid #e9ecef", paddingBottom: "40px" }}>
                    <h3 className="fw-bold mb-4" style={{ color: "var(--accent-purple)" }}>First Draft (Clock Layout)</h3>
                    <div className="row align-items-start">
                      <div className="col-md-6">
                        <div style={{ textAlign: "center", cursor: "pointer" }} onClick={() => openImageModal(firstDraftAT, "First Draft Clock Layout")}>
                          <img 
                            src={firstDraftAT} 
                            alt="First draft - clock layout with crowded information"
                            style={{
                              width: "100%",
                              maxWidth: "100%",
                              height: "auto",
                              borderRadius: "12px",
                              border: "2px solid var(--border-black)",
                              boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                            }}
                          />
                          <span style={{ fontSize: "0.75rem", color: "#666", marginTop: "8px", display: "inline-block" }}>Click to enlarge</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <ul style={{ fontSize: "1rem", lineHeight: "1.6", paddingLeft: "1.2rem" }}>
                          {journeyIterations[0].bulletPoints.map((point, i) => (
                            <li key={i} style={{ marginBottom: "0.75rem" }}>{point}</li>
                          ))}
                        </ul>
                        <p style={{ fontSize: "0.9rem", fontWeight: "bold", color: "var(--accent-purple)", marginTop: "1rem", padding: "12px", background: "#f8f9fa", borderRadius: "8px" }}>
                          Key Insight: {journeyIterations[0].insight}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Second Draft */}
                  <div className="design-iteration-block mb-5" style={{ borderBottom: "2px solid #e9ecef", paddingBottom: "40px" }}>
                    <h3 className="fw-bold mb-4" style={{ color: "var(--accent-purple)" }}>Second Draft (World Between Worlds)</h3>
                    <div className="row align-items-start">
                      <div className="col-md-6">
                        <div style={{ textAlign: "center", cursor: "pointer" }} onClick={() => openImageModal(secondDraftAT, "Second Draft World Between Worlds Portal Layout")}>
                          <img 
                            src={secondDraftAT} 
                            alt="Second draft - World Between Worlds portal circles"
                            style={{
                              width: "100%",
                              maxWidth: "100%",
                              height: "auto",
                              borderRadius: "12px",
                              border: "2px solid var(--border-black)",
                              boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                            }}
                          />
                          <span style={{ fontSize: "0.75rem", color: "#666", marginTop: "8px", display: "inline-block" }}>Click to enlarge</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <ul style={{ fontSize: "1rem", lineHeight: "1.6", paddingLeft: "1.2rem" }}>
                          {journeyIterations[1].bulletPoints.map((point, i) => (
                            <li key={i} style={{ marginBottom: "0.75rem" }}>{point}</li>
                          ))}
                        </ul>
                        <p style={{ fontSize: "0.9rem", fontWeight: "bold", color: "var(--accent-purple)", marginTop: "1rem", padding: "12px", background: "#f8f9fa", borderRadius: "8px" }}>
                          Key Insight: {journeyIterations[1].insight}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Final Draft - F-Scan Table Layout - DESCRIPTION BELOW IMAGE */}
                  <div className="design-iteration-block mb-5" style={{ 
                    borderBottom: "2px solid #e9ecef", 
                    paddingBottom: "40px",
                    background: "linear-gradient(135deg, rgba(245,230,245,0.3), rgba(255,240,224,0.3))",
                    borderRadius: "24px",
                    padding: "30px",
                    margin: "0 -15px 40px -15px"
                  }}>
                    <h3 className="fw-bold mb-4" style={{ color: "var(--accent-purple)" }}>Final Draft (F-Scan Table Layout) Chosen</h3>
                    <div className="row">
                      <div className="col-12">
                        <div style={{ textAlign: "center", cursor: "pointer", marginBottom: "30px" }} onClick={() => openImageModal(finalUJ, "Final Draft F-Scan Table Layout")}>
                          <img 
                            src={finalUJ} 
                            alt="Final draft - F-Scan table layout with clear hierarchy"
                            style={{
                              width: "100%",
                              maxWidth: "100%",
                              height: "auto",
                              borderRadius: "12px",
                              border: "3px solid var(--accent-purple)",
                              boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
                            }}
                          />
                          <span style={{ fontSize: "0.75rem", color: "#666", marginTop: "8px", display: "inline-block" }}>Click to enlarge</span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <ul style={{ fontSize: "1rem", lineHeight: "1.6", paddingLeft: "1.2rem" }}>
                          {journeyIterations[2].bulletPoints.map((point, i) => (
                            <li key={i} style={{ marginBottom: "0.75rem" }}>{point}</li>
                          ))}
                        </ul>
                        <div style={{ 
                          fontSize: "0.9rem", 
                          fontWeight: "bold", 
                          color: "var(--accent-purple)", 
                          marginTop: "1rem", 
                          padding: "12px", 
                          background: "#f8f9fa", 
                          borderRadius: "8px",
                          border: "1px solid var(--accent-purple)"
                        }}>
                          Key Insight: {journeyIterations[2].insight}
                        </div>
                        <div style={{ 
                          marginTop: "1rem", 
                          padding: "16px", 
                          background: "var(--pastel-yellow)", 
                          borderRadius: "12px",
                          borderLeft: "4px solid var(--accent-purple)"
                        }}>
                          {journeyIterations[2].researchNote}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Design Decision Note - LEFT ALIGNED */}
                  <div className="mt-4 p-4 rounded-4" style={{ 
                    background: "white",
                    border: "2px dashed var(--accent-pink)"
                  }}>
                    <p className="mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6", textAlign: "left" }}>
                      <strong>Why the F-Scan Table Layout?</strong><br />
                      While the clock and portal circles were visually creative, user testing revealed that 
                      viewers struggled to follow the chronological sequence. The F-Scan table layout respects 
                      natural reading patterns. Users scan left to right across the top for The Clone Wars era, 
                      then down the left side, then horizontally again for Rebels era. This matches how 80 percent of 
                      users consume content, making Ahsoka's complex journey instantly scannable.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="fw-bold mb-3">Final Design Decisions</h4>
                  <p className="mb-4">
                    After multiple iterations and UX research, the final design achieved:
                  </p>
                  
                  <div className="row g-3">
                    {[
                      { title: "3D Lightsaber Effect", desc: "Breakout visual creates salience and captures attention through unexpected boundary violation." },
                      { title: "F-Scan Pattern", desc: "Table layout respects natural reading behavior. Left to right, top to bottom, improving comprehension." },
                      { title: "Clear Information Hierarchy", desc: "Separate columns for Clone Wars, Rebels, and live-action eras." },
                      { title: "Reduced Cognitive Load", desc: "Scannable format prevents overwhelming viewers with dense information." },
                      { title: "Chronological Clarity", desc: "Users can easily follow Ahsoka's journey from Padawan to standalone hero." }
                    ].map((item, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="objective-card p-4 rounded-4 h-100">
                          <div className="d-flex align-items-center gap-3 mb-2">
                            <h5 className="fw-bold mb-0" style={{ fontSize: "1rem" }}>{item.title}</h5>
                          </div>
                          <p className="mb-0" style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* RESULTS SECTION */}
              <section id="results" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Results and Takeaways</h2>
                
                <div className="row g-3 text-center mb-4">
                  {[
                    { number: "3", label: "Design iterations", color: "#9a4b97" },
                    { number: "Better", label: "comprehension", color: "#4a7c6b" },
                    { number: "F-Scan", label: "UX research applied", color: "#e49c00" },
                    { number: "Yes", label: "Visual interest achieved", color: "#c863be" }
                  ].map((item, index) => (
                    <div className="col-md-3" key={index}>
                      <div className="result-card p-4 rounded-4" style={{ 
                        background: item.color,
                        color: "white"
                      }}>
                        <div className="result-number" style={{ color: "white" }}>{item.number}</div>
                        <div className="result-label" style={{ color: "rgba(255, 255, 255, 0.9)" }}>{item.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="row g-3 mb-4">
                  <div className="col-12">
                    <div className="result-highlight p-4 rounded-4">
                      <p className="mb-0 result-highlight-text">
                        <strong>Key Takeaway:</strong> Creative visual metaphors like clocks and portals must serve 
                        function, not just form. The F-Scan table layout, backed by Nielsen Norman Group research, 
                        proved that respecting natural reading patterns leads to better comprehension. Meanwhile, 
                        the 3D lightsaber effect successfully applied breakout principles to create visual interest 
                        without sacrificing clarity.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-4 rounded-4 result-quote">
                  <p className="mb-0 fst-italic result-quote-text">
                    This project taught me that UX design is about balancing creativity with psychology. 
                    The clock and portal layouts were visually exciting, but they failed users. The F-Scan 
                    table succeeded because it respected how humans naturally read. Sometimes the best design 
                    is not the most creative. It is the most usable.
                  </p>
                </div>
              </section>

              {/* OTHER PROJECTS SECTION */}
              <section id="other" className="mb-5">
                <h2 className="text-uppercase small fw-bold mb-4">Other Projects</h2>

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

export default AhsokaUserprofile;