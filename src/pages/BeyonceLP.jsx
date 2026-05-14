import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

// Import hero image - NOW USING VERSION 3
import beyonceHeroImage from "../assets/Mini-projects/Beyonce-images/Beyoncev3.svg";

// Import brainstorming images
import contentBS from "../assets/Mini-projects/Beyonce-images/ContentBS.svg";
import visualBS from "../assets/Mini-projects/Beyonce-images/VisualBS.svg";

// Import lo-fi wireframes
import loFiClickthrough from "../assets/Mini-projects/Beyonce-images/LoFiclickthrough.svg";
import loFiLeadgen from "../assets/Mini-projects/Beyonce-images/LoFileadgen.svg";

// Import logo
import beyonceLogo from "../assets/Mini-projects/Beyonce-images/Beyoncelogo.svg";

// Import design iterations
import beyonceV1 from "../assets/Mini-projects/Beyonce-images/Beyoncev1.svg";
import beyonceV2 from "../assets/Mini-projects/Beyonce-images/Beyoncev2.svg";
import beyonceV3 from "../assets/Mini-projects/Beyonce-images/Beyoncev3.svg";
import beyonceV4 from "../assets/Mini-projects/Beyonce-images/Beyoncev4.svg";

// Import other project images
import timeManagementImage from "../assets/Timemgmt-images/Timemgmt.png";
import mealUHeroImage from "../assets/MealU-images/MealUHero.png";
import reactWeatherHeroImage from "../assets/Reactweather-images/Reactweatherhero.png";
import lechaletHeroImage from "../assets/Lechaletbymay-images/Lechaletbymay.png";
import wcagHeroImage from "../assets/WCAG-images/WCAGmainhero.png";

function BeyonceLP() {
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

  // Design iterations data
  const designIterations = [
    { 
      version: "Version 1", 
      desc: "Initial concept with flashy colors, multiple bright shades, and animated elements. The call to action button was not visible and text was difficult to read due to low contrast.", 
      image: beyonceV1,
      alt: "First iteration of Beyonce landing page - too flashy with poor contrast"
    },
    { 
      version: "Version 2", 
      desc: "Simplified color palette, reduced animations, and increased contrast. Started to establish visual hierarchy but still needed refinement.", 
      image: beyonceV2,
      alt: "Second iteration with improved contrast and simplified design"
    },
     { 
      version: "Version 3", 
      desc: "Further refined typography, adjusted spacing, and made the call to action button more prominent. Improved the overall flow and readability.", 
      image: beyonceV3,
      alt: "Third iteration with better typography and CTA placement"
    },
    { 
      version: "Version 4", 
      desc: "Final polished design with clear visual hierarchy, accessible color contrast, prominent call to action button, and a balanced layout that guides users naturally through the content.", 
      image: beyonceV4,
      alt: "Final polished version with clear hierarchy and accessible design"
    },
   
    
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

      {/* HERO SECTION - NOW USING VERSION 3 */}
      <section className="hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="hero-text-wrapper mb-5 text-start">
                <h1 className="hero-title mb-4">Beyoncé Bowl: Landing Page Design</h1>
                <p className="hero-description" style={{ maxWidth: "100%", marginLeft: 0 }}>
                  A promotional landing page for a local bowling alley's Beyoncé-themed bowling event. 
                  The goal was to drive ticket sales and create excitement through bold, energetic design 
                  that captured the spirit of both Beyoncé and bowling.
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
                      background: "linear-gradient(135deg, #f5e6f5, #fff0e0)",
                      padding: "20px"
                    }}
                    onClick={() => openImageModal(beyonceHeroImage, "Beyoncé Bowl Landing Page - Version 3")}
                  >
                    <img
                      src={beyonceHeroImage}
                      alt="Beyoncé Bowl landing page - Version 3"
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
                      🔍 Click to enlarge
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-info-row row g-4 mt-4">
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "white", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">My Role</span>
                    <span>UX/UI Designer</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "white", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Timeline</span>
                    <span>4 Weeks</span>
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
                    <span>Figma, Canva, Adobe Color</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT - Rest of the component remains the same */}
      <div className="main-content-container">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              
              {/* PROJECT OVERVIEW SECTION */}
              <section id="overview" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Project Overview</h2>
                <h3 className="fw-bold mb-4">A High-Energy Landing Page for a Beyoncé Bowling Event</h3>
                <p className="mb-4">
                  <strong>Landing Page Design | UX Research | Visual Design</strong> | 4 Weeks
                </p>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Overview</h4>
                  <p className="mb-4">
                    A local bowling alley approached me to design a landing page for their upcoming 
                    "Beyoncé Bowl" event—a night of bowling, music, and celebration inspired by Beyoncé's 
                    iconic performances. The client wanted something bold, flashy, and energetic that would 
                    appeal to young adults and drive ticket sales.
                  </p>
                  <div className="highlight-box p-4 rounded-4">
                    <p className="fw-bold mb-0 highlight-text">
                      The final design balanced excitement with usability, featuring a clear call to action, 
                      accessible color contrast, and a visual hierarchy that guides users from excitement 
                      to ticket purchase.
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
                          The client wanted an energetic, flashy design that captured Beyoncé's bold aesthetic, 
                          but the first iteration was overwhelming—too many bright colors, poor contrast, 
                          and a call to action button that users couldn't find.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="challenge-card p-4 rounded-4 h-100 challenge-card-solution">
                        <h5 className="fw-bold mb-3 challenge-title">The Solution:</h5>
                        <p className="mb-0 challenge-text">
                          Through multiple iterations and user feedback, I refined the design to balance 
                          flashy aesthetics with usability—using visual hierarchy, accessible color contrast, 
                          and a prominent call to action that drives conversions.
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
                        <strong>UX/UI Designer</strong> leading end-to-end project execution:
                      </p>
                      <ul className="custom-list">
                        <li>Content strategy and visual brainstorming</li>
                        <li>UX research on clickthrough vs lead generation pages</li>
                        <li>Logo and color scheme development</li>
                        <li>Iterative design based on user feedback</li>
                        <li>Final high-fidelity landing page design</li>
                      </ul>
                    </div>
                    <div className="col-md-5">
                      <div className="tools-card p-4 rounded-4">
                        <h5 className="fw-bold mb-3 tools-title">Tools Used</h5>
                        <div className="d-flex flex-wrap gap-2">
                          {["Figma", "Canva", "Adobe Color", "Google Forms"].map((tool, index) => (
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
                  <h4 className="fw-bold mb-3">Content & Visual Brainstorming</h4>
                  <p className="mb-4">
                    Before diving into design, I mapped out the content strategy and visual direction. 
                    I considered what information users needed (event date, time, location, ticket price) 
                    and how to present it in an exciting way that matched Beyoncé's brand energy.
                  </p>
                  
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="insight-card p-4 rounded-4 h-100">
                        <h5 className="fw-bold mb-3 insight-title">📝 Content Brainstorming</h5>
                        <div className="text-center mb-3">
                          <img 
                            src={contentBS} 
                            alt="Content Brainstorming"
                            style={{
                              width: "100%",
                              maxWidth: "300px",
                              height: "auto",
                              borderRadius: "12px",
                              border: "1px solid var(--border-black)",
                              cursor: "pointer"
                            }}
                            onClick={() => openImageModal(contentBS, "Content Brainstorming")}
                          />
                        </div>
                        <p className="mb-3 insight-text">
                          Mapped out key messaging, event details, and user motivations.
                        </p>
                        <div className="text-center mt-2">
                          <span 
                            className="enlarge-hint" 
                            style={{ cursor: "pointer" }}
                            onClick={() => openImageModal(contentBS, "Content Brainstorming")}
                          >
                            🔍 Click to enlarge
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="concept-card p-4 rounded-4 h-100">
                        <h5 className="fw-bold mb-3 concept-title">🎨 Visual Brainstorming</h5>
                        <div className="text-center mb-3">
                          <img 
                            src={visualBS} 
                            alt="Visual Brainstorming"
                            style={{
                              width: "100%",
                              maxWidth: "300px",
                              height: "auto",
                              borderRadius: "12px",
                              border: "1px solid var(--border-black)",
                              cursor: "pointer"
                            }}
                            onClick={() => openImageModal(visualBS, "Visual Brainstorming")}
                          />
                        </div>
                        <p className="mb-3 concept-text">
                          Explored color palettes, typography, and imagery that captured Beyoncé's bold, glamorous aesthetic.
                        </p>
                        <div className="text-center mt-2">
                          <span 
                            className="enlarge-hint" 
                            style={{ cursor: "pointer" }}
                            onClick={() => openImageModal(visualBS, "Visual Brainstorming")}
                          >
                            🔍 Click to enlarge
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Clickthrough vs. Lead Generation</h4>
                  <p className="mb-4">
                    I conducted research to decide between two landing page approaches:
                  </p>
                  
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="research-card p-4 rounded-4 h-100" style={{ 
                        background: "white",
                        border: "2px solid var(--accent-green)",
                        boxShadow: "6px 6px 0 var(--shadow-color)"
                      }}>
                        <h5 className="fw-bold mb-3" style={{ color: "var(--accent-green)" }}>🖱️ Clickthrough Page</h5>
                        <ul className="custom-list">
                          <li>Multiple steps with "Next" buttons</li>
                          <li>More information and storytelling</li>
                          <li>Lower conversion rate for event tickets</li>
                          <li>Better for complex decision-making</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="research-card p-4 rounded-4 h-100" style={{ 
                        background: "white",
                        border: "2px solid var(--accent-pink)",
                        boxShadow: "6px 6px 0 var(--shadow-color)"
                      }}>
                        <h5 className="fw-bold mb-3" style={{ color: "var(--accent-pink)" }}>📝 Lead Generation Page</h5>
                        <ul className="custom-list">
                          <li>Single page with clear CTA</li>
                          <li>All information visible at once</li>
                          <li>Higher conversion for event tickets</li>
                          <li>Better for simple, urgent actions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <p className="mt-4 p-3 rounded-4" style={{ 
                    background: "var(--pastel-purple)",
                    border: "2px solid var(--accent-purple)",
                    fontSize: "0.95rem",
                    lineHeight: "1.7"
                  }}>
                    <strong>UX Research Decision:</strong> Based on user testing and research, I chose the <strong>lead generation page</strong> approach. Event tickets are a simple, urgent purchase—users don't need multiple steps or complex information. A single page with all details visible and a prominent "Buy Tickets" button leads to higher conversion rates for time-sensitive events.
                  </p>
                </div>

                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="objective-card p-4 rounded-4 h-100">
                      <h5 className="fw-bold mb-3">📄 Clickthrough Wireframe</h5>
                      <div className="text-center mb-3">
                        <img 
                          src={loFiClickthrough} 
                          alt="Lo-Fi Wireframe: Clickthrough Page"
                          style={{
                            width: "100%",
                            maxWidth: "300px",
                            height: "auto",
                            borderRadius: "12px",
                            border: "1px solid var(--border-black)",
                            cursor: "pointer"
                          }}
                          onClick={() => openImageModal(loFiClickthrough, "Lo-Fi Wireframe: Clickthrough Page")}
                        />
                      </div>
                      <p className="mb-0 objective-text">Multi-step approach with sequential information delivery.</p>
                      <div className="text-center mt-3">
                        <span 
                          className="enlarge-hint" 
                          style={{ cursor: "pointer" }}
                          onClick={() => openImageModal(loFiClickthrough, "Lo-Fi Wireframe: Clickthrough Page")}
                        >
                          🔍 Click to enlarge
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="objective-card p-4 rounded-4 h-100">
                      <h5 className="fw-bold mb-3">🎯 Lead Generation Wireframe</h5>
                      <div className="text-center mb-3">
                        <img 
                          src={loFiLeadgen} 
                          alt="Lo-Fi Wireframe: Lead Generation Page"
                          style={{
                            width: "100%",
                            maxWidth: "300px",
                            height: "auto",
                            borderRadius: "12px",
                            border: "1px solid var(--border-black)",
                            cursor: "pointer"
                          }}
                          onClick={() => openImageModal(loFiLeadgen, "Lo-Fi Wireframe: Lead Generation Page")}
                        />
                      </div>
                      <p className="mb-0 objective-text">Single-page approach with clear, prominent call to action.</p>
                      <div className="text-center mt-3">
                        <span 
                          className="enlarge-hint" 
                          style={{ cursor: "pointer" }}
                          onClick={() => openImageModal(loFiLeadgen, "Lo-Fi Wireframe: Lead Generation Page")}
                        >
                          🔍 Click to enlarge
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* DESIGN SECTION */}
              <section id="design" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Design</h2>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Logo & Color Scheme</h4>
                  <p className="mb-4">
                    I designed a logo that combined Beyoncé's iconic Renaissance aesthetic with bowling imagery. 
                    The logo features bowling pins surrounding the text, with bright, flashy colors that convey 
                    energy and excitement.
                  </p>

                  <div className="final-logo-card p-4 rounded-4 mb-4">
                    <div className="row align-items-center">
                      <div className="col-md-8">
                        <h5 className="fw-bold mb-3 final-logo-title">✨ The Logo Design:</h5>
                        <p className="mb-0 final-logo-text">
                          Bowling pins surround the event title, creating a playful connection between bowling and 
                          Beyoncé's iconic Renaissance imagery. The bright, flashy colors were chosen to capture 
                          the high-energy feel of both a bowling alley and a Beyoncé concert.
                        </p>
                      </div>
                      <div className="col-md-4 text-center mt-3 mt-md-0">
                        <img 
                          src={beyonceLogo} 
                          alt="Beyoncé Bowl Logo" 
                          className="img-fluid rounded-3" 
                          style={{ 
                            maxWidth: "100%", 
                            maxHeight: "100px",
                            cursor: "pointer"
                          }}
                          onClick={() => openImageModal(beyonceLogo, "Beyoncé Bowl Logo")}
                        />
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <span 
                        className="enlarge-hint" 
                        style={{ cursor: "pointer" }}
                        onClick={() => openImageModal(beyonceLogo, "Beyoncé Bowl Logo")}
                      >
                        🔍 Click to enlarge
                      </span>
                    </div>
                  </div>

                  <div className="tools-card p-4 rounded-4">
                    <h5 className="fw-bold mb-3 tools-title">Color Palette Justification</h5>
                    <p className="mb-0">
                      The bright pink, purple, and gold colors were inspired by Beyoncé's Renaissance tour aesthetics. 
                      These colors convey excitement, glamour, and urgency—perfect for a limited-time event. 
                      However, early iterations taught me that flashy colors need careful contrast to remain readable.
                    </p>
                  </div>
                </div>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Iterative Design Process</h4>
                  <p className="mb-4">
                    I went through four major iterations based on user feedback and usability testing:
                  </p>
                  
                  <div className="row g-4">
                    {designIterations.map((item, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="design-item-card p-4 rounded-4 h-100" style={{ 
                          background: "white",
                          border: "2px solid var(--accent-purple)",
                          boxShadow: "6px 6px 0 var(--shadow-color)"
                        }}>
                          <div className="text-center mb-3">
                            <span style={{ fontSize: "2rem" }}>{item.emoji}</span>
                            <h5 className="fw-bold mt-2" style={{ fontSize: "1.1rem" }}>{item.version}</h5>
                          </div>
                          <div className="text-center mb-3">
                            <img 
                              src={item.image} 
                              alt={item.alt}
                              style={{
                                width: "100%",
                                maxWidth: "280px",
                                height: "auto",
                                borderRadius: "12px",
                                border: "1px solid var(--border-black)",
                                cursor: "pointer"
                              }}
                              onClick={() => openImageModal(item.image, `${item.version} - ${item.desc.substring(0, 50)}...`)}
                            />
                          </div>
                          <p className="mb-3" style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>{item.desc}</p>
                          <div className="text-center mt-2">
                            <span 
                              className="enlarge-hint" 
                              style={{ cursor: "pointer" }}
                              onClick={() => openImageModal(item.image, `${item.version} - ${item.desc.substring(0, 50)}...`)}
                            >
                              🔍 Click to enlarge
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="fw-bold mb-3">Final Design Decisions</h4>
                  <p className="mb-4">
                    After four iterations and multiple rounds of user feedback, the final design achieved:
                  </p>
                  
                  <div className="row g-3">
                    {[
                      { icon: "🎯", title: "Clear Call to Action", desc: "The 'Buy Tickets' button is now prominent, high-contrast, and positioned above the fold." },
                      { icon: "📖", title: "Visual Hierarchy", desc: "Typography and layout guide users naturally from excitement → information → action." },
                      { icon: "🎨", title: "Accessible Color Contrast", desc: "Adjusted color palette to meet WCAG contrast requirements while keeping the flashy aesthetic." },
                      { icon: "⚡", title: "Reduced Distractions", desc: "Removed unnecessary animations and competing visual elements." }
                    ].map((item, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="objective-card p-4 rounded-4 h-100">
                          <div className="d-flex align-items-center gap-3 mb-2">
                            <span style={{ fontSize: "2rem" }}>{item.icon}</span>
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
                <h2 className="text-uppercase small fw-bold mb-4">Results & Takeaways</h2>
                
                <div className="row g-3 text-center mb-4">
                  {[
                    { number: "4", label: "Design iterations", color: "#9a4b97" },
                    { number: "100%", label: "Contrast compliant", color: "#4a7c6b" },
                    { number: "1", label: "Clear CTA", color: "#e49c00" },
                    { number: "✓", label: "Client approved", color: "#c863be" }
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
                        <strong>Key Takeaway:</strong> Flashy design doesn't have to mean unusable design. 
                        Through iterative testing and feedback, I learned that bold aesthetics can coexist with 
                        accessibility and clear conversion goals. The final design excited users while guiding 
                        them confidently toward ticket purchase.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-4 rounded-4 result-quote">
                  <p className="mb-0 fst-italic result-quote-text">
                    "This project taught me that user research isn't just for complex products. Even a simple 
                    landing page benefits from testing and iteration. The first version was fun but failed 
                    users. The final version was fun AND functional."
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
                    uxProjects.filter(p => p.id !== "wcag").map((project) => (
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

export default BeyonceLP;