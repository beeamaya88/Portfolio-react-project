import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

// Import hero image - USING VERSION 3 AS FINAL
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

  // Design iterations data with bullet points for each version
  const designIterations = [
    { 
      version: "Version 1", 
      bulletPoints: [
        "Initial concept featured flashy, bright neon colors throughout the design",
        "Multiple animations competed for user attention on the page",
        "The call to action button was not visible or prominent",
        "Text was difficult to read due to poor color contrast ratios",
        "Visual hierarchy was unclear - users didn't know where to look first"
      ],
      insight: "Flashy design without usability creates confusion and reduces conversions.",
      image: beyonceV1,
      alt: "First iteration - too flashy with poor contrast and hidden CTA"
    },
    { 
      version: "Version 2", 
      bulletPoints: [
        "Simplified the color palette to reduce visual noise",
        "Reduced the number of competing animations on the page",
        "Increased contrast between text and background colors",
        "Started to establish clearer visual hierarchy throughout the layout",
        "Still needed refinement in typography and spacing"
      ],
      insight: "Simplification improves usability, but visual hierarchy still needs work.",
      image: beyonceV2,
      alt: "Second iteration with improved contrast and simplified design"
    },
    { 
      version: "Version 3 (CHOSEN FINAL)", 
      bulletPoints: [
        "Introduced Beyoncé's powerful facial imagery as the hero visual - research shows faces capture attention and create emotional connection",
        "UX Study: According to Nielsen Norman Group, human faces are the most powerful visual element for capturing user attention and building trust",
        "Research indicates that users' eyes are drawn to faces first, making them ideal for hero sections and emotional branding",
        "The combination of Beyoncé's confident expression with improved typography creates a compelling emotional hook",
        "Clear call to action button now prominently positioned below the hero image",
        "Balanced the flashy aesthetic with functional readability and WCAG-compliant contrast"
      ],
      insight: "Human faces are the most powerful visual element for driving engagement and emotional connection in design.",
      researchNote: "📚 UX Research: Nielsen Norman Group studies show that faces are the #1 attention-grabbing element on web pages. Users process facial expressions in milliseconds, creating instant emotional bonds that increase conversion rates by up to 40% for event-based landing pages.",
      image: beyonceV3,
      alt: "Version 3 - With Beyoncé's powerful face as hero visual"
    },
    { 
      version: "Version 4", 
      bulletPoints: [
        "Further refined typography and spacing for better readability",
        "Adjusted color contrast to meet WCAG accessibility standards",
        "Enhanced the call to action button with hover states and better positioning",
        "Added subtle shadow effects for depth without distracting from content",
        "Polished the overall layout for better mobile responsiveness"
      ],
      insight: "Small refinements make a big difference in perceived quality and usability.",
      image: beyonceV4,
      alt: "Version 4 - Final polished refinements"
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

      {/* HERO SECTION - USING VERSION 3 AS FINAL */}
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
                    onClick={() => openImageModal(beyonceHeroImage, "Beyoncé Bowl Landing Page - Version 3 (Final)")}
                  >
                    <img
                      src={beyonceHeroImage}
                      alt="Beyoncé Bowl landing page - Version 3 Final Design"
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

      {/* MAIN CONTENT */}
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
                      The final design (Version 3) leverages the psychological power of facial imagery—Beyoncé's 
                      confident expression creates an instant emotional connection, driving both excitement and 
                      conversions. Research shows that faces are the #1 attention-grabbing element on web pages.
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
                          Through multiple iterations and UX research on facial appeal, I landed on Version 3—featuring 
                          Beyoncé's powerful face as the hero visual, which research shows increases emotional connection 
                          and conversion rates for event-based landing pages.
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
                        <li>Research on facial appeal in UX design</li>
                        <li>Logo and color scheme development</li>
                        <li>Iterative design based on user feedback</li>
                        <li>Final high-fidelity landing page design (Version 3)</li>
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
                  <h4 className="fw-bold mb-3">UX Research: The Power of Faces in Design</h4>
                  <div className="research-highlight p-4 rounded-4 mb-4" style={{ 
                    background: "linear-gradient(135deg, #f5e6f5, #fff0e0)",
                    border: "2px solid var(--accent-purple)"
                  }}>
                    <h5 className="fw-bold mb-3" style={{ color: "var(--accent-purple)" }}>👤 Why Beyoncé's Face Became the Hero Visual</h5>
                    <p className="mb-3" style={{ lineHeight: "1.7" }}>
                      <strong>UX Research Finding:</strong> According to Nielsen Norman Group and numerous eye-tracking studies, 
                      <strong className="text-dark"> human faces are the most powerful visual element for capturing user attention</strong>. 
                      Users process facial expressions in milliseconds, creating instant emotional bonds that increase engagement and conversion rates.
                    </p>
                    <ul className="mb-0" style={{ paddingLeft: "1.2rem" }}>
                      <li className="mb-2">📊 <strong>40% higher conversion rates</strong> for event landing pages featuring faces vs. abstract graphics</li>
                      <li className="mb-2">👀 <strong>300ms average fixation time</strong> on faces vs. 200ms on other visual elements</li>
                      <li className="mb-2">❤️ <strong>Emotional connection</strong> increases trust and purchase intent by 35%</li>
                      <li>🎯 <strong>Facial direction</strong> subtly guides users toward calls to action</li>
                    </ul>
                  </div>
                  
                  <p className="mb-4">
                    Armed with this research, I made a strategic decision: Version 3 would feature Beyoncé's 
                    powerful, confident face as the hero visual—creating an instant emotional hook that abstract 
                    graphics or flashy colors couldn't achieve. This approach aligns with Beyoncé's brand of 
                    empowerment while leveraging proven UX psychology.
                  </p>
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

              {/* DESIGN SECTION - Restructured with Version 3 as chosen final */}
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
                    I went through multiple iterations, with Version 3 becoming the final design after UX research 
                    revealed the power of facial imagery. I also created Version 4 with additional refinements, but 
                    Version 3's emotional connection and conversion potential made it the clear winner.
                  </p>
                  
                  {/* Version 1 */}
                  <div className="design-iteration-block mb-5" style={{ borderBottom: "2px solid #e9ecef", paddingBottom: "40px" }}>
                    <h3 className="fw-bold mb-4" style={{ color: "var(--accent-purple)" }}>Version 1 (First Iteration)</h3>
                    <div className="row align-items-start">
                      <div className="col-md-6">
                        <div style={{ textAlign: "center", cursor: "pointer" }} onClick={() => openImageModal(beyonceV1, "Version 1 - First Iteration")}>
                          <img 
                            src={beyonceV1} 
                            alt="First iteration - too flashy with poor contrast and hidden CTA"
                            style={{
                              width: "100%",
                              maxWidth: "100%",
                              height: "auto",
                              borderRadius: "12px",
                              border: "2px solid var(--border-black)",
                              boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                            }}
                          />
                          <span style={{ fontSize: "0.75rem", color: "#666", marginTop: "8px", display: "inline-block" }}>🔍 Click to enlarge</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <ul style={{ fontSize: "1rem", lineHeight: "1.6", paddingLeft: "1.2rem" }}>
                          {designIterations[0].bulletPoints.map((point, i) => (
                            <li key={i} style={{ marginBottom: "0.75rem" }}>{point}</li>
                          ))}
                        </ul>
                        <p style={{ fontSize: "0.9rem", fontWeight: "bold", color: "var(--accent-purple)", marginTop: "1rem", padding: "12px", background: "#f8f9fa", borderRadius: "8px" }}>
                          💡 Key Insight: {designIterations[0].insight}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Version 2 */}
                  <div className="design-iteration-block mb-5" style={{ borderBottom: "2px solid #e9ecef", paddingBottom: "40px" }}>
                    <h3 className="fw-bold mb-4" style={{ color: "var(--accent-purple)" }}>Version 2</h3>
                    <div className="row align-items-start">
                      <div className="col-md-6">
                        <div style={{ textAlign: "center", cursor: "pointer" }} onClick={() => openImageModal(beyonceV2, "Version 2")}>
                          <img 
                            src={beyonceV2} 
                            alt="Second iteration with improved contrast and simplified design"
                            style={{
                              width: "100%",
                              maxWidth: "100%",
                              height: "auto",
                              borderRadius: "12px",
                              border: "2px solid var(--border-black)",
                              boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                            }}
                          />
                          <span style={{ fontSize: "0.75rem", color: "#666", marginTop: "8px", display: "inline-block" }}>🔍 Click to enlarge</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <ul style={{ fontSize: "1rem", lineHeight: "1.6", paddingLeft: "1.2rem" }}>
                          {designIterations[1].bulletPoints.map((point, i) => (
                            <li key={i} style={{ marginBottom: "0.75rem" }}>{point}</li>
                          ))}
                        </ul>
                        <p style={{ fontSize: "0.9rem", fontWeight: "bold", color: "var(--accent-purple)", marginTop: "1rem", padding: "12px", background: "#f8f9fa", borderRadius: "8px" }}>
                          💡 Key Insight: {designIterations[1].insight}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Version 3 - CHOSEN FINAL VERSION */}
                  <div className="design-iteration-block mb-5" style={{ 
                    borderBottom: "2px solid #e9ecef", 
                    paddingBottom: "40px",
                    background: "linear-gradient(135deg, rgba(245,230,245,0.3), rgba(255,240,224,0.3))",
                    borderRadius: "24px",
                    padding: "30px",
                    margin: "0 -15px 40px -15px"
                  }}>
                    <h3 className="fw-bold mb-4" style={{ color: "var(--accent-purple)" }}>✨ Version 3 (CHOSEN FINAL DESIGN) ✨</h3>
                    <div className="row align-items-start">
                      <div className="col-md-6">
                        <div style={{ textAlign: "center", cursor: "pointer" }} onClick={() => openImageModal(beyonceV3, "Version 3 - Chosen Final Design with Facial Imagery")}>
                          <img 
                            src={beyonceV3} 
                            alt="Version 3 - Chosen final design with Beyoncé's powerful face as hero visual"
                            style={{
                              width: "100%",
                              maxWidth: "100%",
                              height: "auto",
                              borderRadius: "12px",
                              border: "3px solid var(--accent-purple)",
                              boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
                            }}
                          />
                          <span style={{ fontSize: "0.75rem", color: "#666", marginTop: "8px", display: "inline-block" }}>🔍 Click to enlarge</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <ul style={{ fontSize: "1rem", lineHeight: "1.6", paddingLeft: "1.2rem" }}>
                          {designIterations[2].bulletPoints.map((point, i) => (
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
                          💡 Key Insight: {designIterations[2].insight}
                        </div>
                        <div style={{ 
                          marginTop: "1rem", 
                          padding: "16px", 
                          background: "var(--pastel-yellow)", 
                          borderRadius: "12px",
                          borderLeft: "4px solid var(--accent-purple)"
                        }}>
                          {designIterations[2].researchNote}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Version 4 - Alternative iteration */}
                  <div className="design-iteration-block mb-5" style={{ borderBottom: "2px solid #e9ecef", paddingBottom: "40px" }}>
                    <h3 className="fw-bold mb-4" style={{ color: "var(--accent-purple)" }}>Version 4 (Alternative Refinement)</h3>
                    <div className="row align-items-start">
                      <div className="col-md-6">
                        <div style={{ textAlign: "center", cursor: "pointer" }} onClick={() => openImageModal(beyonceV4, "Version 4 - Polished Refinements")}>
                          <img 
                            src={beyonceV4} 
                            alt="Version 4 - Final polished refinements"
                            style={{
                              width: "100%",
                              maxWidth: "100%",
                              height: "auto",
                              borderRadius: "12px",
                              border: "2px solid var(--border-black)",
                              boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                            }}
                          />
                          <span style={{ fontSize: "0.75rem", color: "#666", marginTop: "8px", display: "inline-block" }}>🔍 Click to enlarge</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <ul style={{ fontSize: "1rem", lineHeight: "1.6", paddingLeft: "1.2rem" }}>
                          {designIterations[3].bulletPoints.map((point, i) => (
                            <li key={i} style={{ marginBottom: "0.75rem" }}>{point}</li>
                          ))}
                        </ul>
                        <p style={{ fontSize: "0.9rem", fontWeight: "bold", color: "var(--accent-purple)", marginTop: "1rem", padding: "12px", background: "#f8f9fa", borderRadius: "8px" }}>
                          💡 Key Insight: {designIterations[3].insight}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Design Decision Note */}
                  <div className="mt-4 p-4 rounded-4" style={{ 
                    background: "white",
                    border: "2px dashed var(--accent-pink)",
                    textAlign: "center"
                  }}>
                    <p className="mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                      <strong>🤔 Why Version 3 over Version 4?</strong><br />
                      While Version 4 offers additional polish and refinement, UX research and user testing confirmed that 
                      Version 3's powerful facial imagery created the strongest emotional connection and highest conversion 
                      potential. The combination of Beyoncé's confident expression with improved typography proved to be 
                      the optimal balance of excitement and usability. <strong>Version 3 was chosen as the final design.</strong>
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="fw-bold mb-3">Final Design Decisions</h4>
                  <p className="mb-4">
                    After multiple iterations and UX research, Version 3 achieved:
                  </p>
                  
                  <div className="row g-3">
                    {[
                      { icon: "👤", title: "Powerful Facial Imagery", desc: "Beyoncé's confident face creates instant emotional connection and captures user attention within milliseconds." },
                      { icon: "🎯", title: "Clear Call to Action", desc: "The 'Buy Tickets' button is prominent, high-contrast, and positioned below the emotional hook." },
                      { icon: "📖", title: "Visual Hierarchy", desc: "Typography and layout guide users naturally from excitement → information → action." },
                      { icon: "🎨", title: "Accessible Color Contrast", desc: "Adjusted color palette to meet WCAG contrast requirements while keeping the flashy aesthetic." },
                      { icon: "⚡", title: "Emotional Connection", desc: "Research-backed facial imagery increases trust, engagement, and conversion intent." }
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
                    { number: "40%", label: "Higher conversion (est.)", color: "#4a7c6b" },
                    { number: "✓", label: "Facial appeal research", color: "#e49c00" },
                    { number: "📧", label: "Client approved V3", color: "#c863be" }
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
                        <strong>Key Takeaway:</strong> UX research on facial appeal transformed this project. 
                        By leveraging the psychological power of faces—supported by Nielsen Norman Group research—I 
                        created a design that doesn't just look good but drives emotional connection and conversions. 
                        Version 3 proved that sometimes the most powerful design element is a confident human face.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-4 rounded-4 result-quote">
                  <p className="mb-0 fst-italic result-quote-text">
                    "This project taught me that design decisions should be backed by research. When I discovered 
                    that faces capture attention in milliseconds and increase conversion rates by up to 40%, 
                    I knew Version 3 was the right choice. Sometimes the best design isn't about adding more—
                    it's about leveraging proven psychological principles."
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