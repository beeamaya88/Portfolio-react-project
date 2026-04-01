import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

// Import hero image
import lechaletHeroImage from "../assets/Lechaletbymay-images/Lechaletbymay.png";
// Import other project images
import wcagHeroImage from "../assets/WCAG-images/WCAGmainhero.png";
import timeManagementImage from "../assets/Timemgmt-images/Timemgmt.png";
import mealUHeroImage from "../assets/MealU-images/MealUHero.png";
import reactWeatherHeroImage from "../assets/Reactweather-images/Reactweatherhero.png";

function Lechaletbymay() {
  const [activeSection, setActiveSection] = useState("overview");
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
      const sections = ["overview", "discovery", "execution", "training", "results", "other"];
      
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

  // Navigation items
  const navItems = [
    { id: "overview", label: "Overview", icon: "📋" },
    { id: "discovery", label: "Discovery", icon: "💡" },
    { id: "execution", label: "Execution", icon: "⚙️" },
    { id: "training", label: "Training", icon: "📚" },
    { id: "results", label: "Results", icon: "📊" },
    { id: "other", label: "Other Projects", icon: "📁" }
  ];

  // Custom menu features
  const menuFeatures = [
    {
      title: "Mega-Menu Layout",
      desc: "Multi-column layout with high-resolution imagery for rich product discovery",
      icon: "📸"
    },
    {
      title: "Smooth Animations",
      desc: "CSS-powered transitions for an elegant, professional browsing experience",
      icon: "✨"
    },
    {
      title: "Mobile-Optimized",
      desc: "Transforms into a user-friendly drawer menu on mobile devices",
      icon: "📱"
    },
    {
      title: "Shopify Integration",
      desc: "Dynamically pulls native Shopify data for fast, up-to-date performance",
      icon: "⚡"
    }
  ];

  // Wishlist features
  const wishlistFeatures = [
    {
      title: "Ajax-Powered",
      desc: "Save products without page reloads for a seamless experience",
      icon: "🔄"
    },
    {
      title: "Zero Recurring Fees",
      desc: "No third-party apps—fully custom solution that saves monthly costs",
      icon: "💰"
    },
    {
      title: "Native Integration",
      desc: "Interact with icons across header, product cards, and product detail pages",
      icon: "🎨"
    },
    {
      title: "Account Synced",
      desc: "Saves wishlist items to customer accounts for cross-device access",
      icon: "👤"
    }
  ];

  // Training topics
  const trainingTopics = [
    "Shopify inventory management (adding and organizing products)",
    "Collection creation and categorization",
    "Custom menu navigation-understanding how products and collections populate the mega menu",
    "Wishlist page logic and customer support basics"
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
                <h1 className="hero-title mb-4">Le Chalet by May</h1>
                <p className="hero-description" style={{ maxWidth: "100%", marginLeft: 0 }}>
                  A complete Shopify redesign featuring a custom extended mega menu, wishlist
                   page and functionality, and comprehensive menu category organization. 
                   I transformed a generic template into a distinctive brand experience.
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
                      background: "linear-gradient(135deg, #e8f0fe, #f5e6f5)",
                      padding: "20px"
                    }}
                    onClick={() => openImageModal(lechaletHeroImage, "Le Chalet by May - Shopify Store Redesign")}
                  >
                    <img
                      src={lechaletHeroImage}
                      alt="Le Chalet by May Shopify store redesign"
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
                    <span>Web Designer & Front-End Developer</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "white", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Timeline</span>
                    <span>30 Weeks</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "white", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Client</span>
                    <span>Le Chalet by May</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "white", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Tools</span>
                    <span>Shopify Liquid, HTML5, CSS3, JavaScript, Figma</span>
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
                <h3 className="fw-bold mb-4"> Brand Identity Enhancement & Custom Development</h3>
                <p className="mb-4">
                  <strong>Web Designer | Front-End Developer | Shopify Consultant</strong> | 30 Weeks
                </p>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">The Challenge</h4>
                  <p className="mb-4">
                   The client approached me with an existing Shopify store 
                   that felt generic and failed to capture their brand's 
                   unique aesthetic. Seeking to transition from Etsy to a more 
                   interactive website, they found that standard Shopify themes 
                   limited their vision for a distinctive user experience.
                    They required a redesign that would elevate the visual identity 
                    while introducing functionality beyond what pre-built themes 
                    could support.
                  </p>
                  
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="challenge-card p-4 rounded-4 h-100 challenge-card-problem">
                        <h5 className="fw-bold mb-3 challenge-title">The Problem:</h5>
                        <p className="mb-0 challenge-text">
                          Generic Shopify theme limiting brand expression. 
                          Standard menus lacked visual appeal and intuitive navigation. 
                          No native wishlist functionality. Poor mobile experience.
                          No category organization.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="challenge-card p-4 rounded-4 h-100 challenge-card-solution">
                        <h5 className="fw-bold mb-3 challenge-title">The Solution:</h5>
                        <p className="mb-0 challenge-text">
                          Custom intuitive extended mega menu with the ability to display images, custom coded wishlist page, 
                          mobile-first responsive design, 
                          and a streamlined category menu for a digestible navigation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Primary Objectives */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Primary Objectives</h4>
                  <div className="row g-3">
                    {[
                      { icon: "🍔", title: "Custom Navigation", desc: "Replace default menu with, visually engaging structure" },
                      { icon: "❤️", title: "Custom Wishlist", desc: "Fully functional wishlist without third-party apps" },
                      { icon: "📱", title: "Mobile-First Experience", desc: "Perfect responsive design for smartphone users" },
                      { icon: "📋", title: "Menu Architecture", desc: "Condensed menu structure and categorization to reduce user overwhelm" }
                    ].map((item, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="objective-card p-4 rounded-4 h-100">
                          <div className="d-flex align-items-center gap-3">
                            <span style={{ fontSize: "2rem" }}>{item.icon}</span>
                            <div>
                              <h5 className="fw-bold mb-1" style={{ fontSize: "1rem" }}>{item.title}</h5>
                              <p className="mb-0" style={{ fontSize: "0.85rem" }}>{item.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools Used */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Tools Used</h4>
                  <div className="tools-card p-4 rounded-4">
                    <div className="d-flex flex-wrap gap-2">
                      {["Shopify Liquid", "HTML5", "CSS3", "JavaScript", "Figma", "VS Code", "Shopify Ajax API"].map((tool, index) => (
                        <span key={index} className="custom-badge" style={{ padding: "0.5rem 1rem" }}>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* DISCOVERY & IDEATION SECTION */}
              <section id="discovery" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Discovery & Ideation</h2>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Brainstorming Session</h4>
                  <p className="mb-4">
                    I facilitated a collaborative brainstorming session with the business owner,
                     starting with their existing free Shopify theme as the foundation.
                      We discussed their "wishes," reviewed competitor sites for inspiration,
                       and identified specific user flow friction points on their old site. 
                       This session was crucial for translating abstract ideas into tangible 
                       features that could be seamlessly integrated into their existing theme 
                       structure.
                  </p>
                  <div className="highlight-box p-4 rounded-4">
                    <div className="d-flex align-items-center gap-3">
                      <span style={{ fontSize: "2rem" }}>💭</span>
                      <p className="mb-0 fst-italic highlight-text">
                        "From abstract ideas to tangible features, translating the owner's vision into actionable design requirements."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Wireframing</h4>
                  <p className="mb-4">
                    Based on our discussions, I created detailed wireframes for the menu, homepage, product pages, 
                    and the new custom wishlist page. These low-fidelity layouts allowed the owner to visualize 
                    the structure and user journey before any code was written.
                  </p>
                  <div className="insight-card p-4 rounded-4 text-center">
                    <div className="placeholder-image mb-3" style={{ 
                      background: "linear-gradient(135deg, #e9ecef, #dee2e6)",
                      height: "300px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "12px"
                    }}>
                      <div className="text-center">
                        <span style={{ fontSize: "3rem" }}>📐</span>
                        <p style={{ marginTop: "1rem", color: "#666" }}>Wireframe Image Coming Soon</p>
                        <small className="text-muted">Add your wireframe image to /assets/Wireframe.png</small>
                      </div>
                    </div>
                    <p className="mb-0 insight-text">
                      Wireframes for homepage, menu, product pages, and custom wishlist page
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="fw-bold mb-3">Additional Requests</h4>
                  <div className="row g-3">
                    
                    <div className="col-md-6">
                      <div className="concept-card p-4 rounded-4 h-100">
                        <span style={{ fontSize: "1.5rem" }}>🏷️</span>
                        <h5 className="fw-bold mt-2 mb-2" style={{ fontSize: "1rem" }}>Product Filtering Options</h5>
                        <p className="mb-0 concept-text">Enhanced product discovery with custom filters</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* EXECUTION SECTION */}
              <section id="execution" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Execution: Hard-Coded Customization</h2>
                <p className="mb-5">
                  Rather than relying on bloated third-party apps or restrictive drag-and-drop sections, 
                  I opted for a hard-coded approach to deliver maximum performance and design fidelity.
                </p>

                {/* Custom Menu */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">
                    <span style={{ marginRight: "0.5rem" }}>🍔</span> A. Custom Menu (Hard-Coded)
                  </h4>
                  <p className="mb-4">
                    I built a custom mega-menu from scratch using Liquid, 
                    HTML, CSS, and JavaScript, featuring high-resolution imagery,
                     multi-column layouts, and smooth animations powered by Shopify's 
                     native data. The menu integrates directly with Shopify's existing 
                     theme structure, pulling collections and products dynamically for 
                     effortless inventory management.
                  </p>
                  
                  <div className="row g-3 mb-4">
                    {menuFeatures.map((feature, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="objective-card p-3 rounded-4 d-flex align-items-center gap-3">
                          <span style={{ fontSize: "1.5rem" }}>{feature.icon}</span>
                          <div>
                            <h6 className="fw-bold mb-1" style={{ fontSize: "0.9rem" }}>{feature.title}</h6>
                            <p className="mb-0 small text-muted">{feature.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Custom Wishlist */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">
                    <span style={{ marginRight: "0.5rem" }}>❤️</span> B. Custom Wishlist Page (Hard-Coded)
                  </h4>
                  <p className="mb-4">
                    Instead of installing a paid app, I engineered a custom wishlist feature 
                    integrated directly into Shopify's existing theme using Liquid, HTML, CSS,
                     JavaScript, and Shopify's Ajax API. The wishlist icon 
                     was added to the theme header, product cards, and main product detail page, 
                     giving users multiple touchpoints to save items.
                  </p>
                  
                  <div className="highlight-box p-4 rounded-4 mb-4">
                    <p className="fw-bold mb-0 highlight-text">
                      ✨ Result: A seamless, native-feeling wishlist page with zero recurring app fees.
                    </p>
                  </div>

                  <div className="row g-3">
                    {wishlistFeatures.map((feature, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="objective-card p-3 rounded-4 d-flex align-items-center gap-3">
                          <span style={{ fontSize: "1.5rem" }}>{feature.icon}</span>
                          <div>
                            <h6 className="fw-bold mb-1" style={{ fontSize: "0.9rem" }}>{feature.title}</h6>
                            <p className="mb-0 small text-muted">{feature.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* TRAINING & HANDOVER SECTION */}
              <section id="training" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Value-Added Service: Shopify Training & Handover</h2>
                
                <div className="row g-4">
                  <div className="col-md-7">
                    <p className="mb-4">
                      A redesigned website is only effective if the client feels 
                      confident managing their products. In addition to the custom 
                      development, I guided the client through navigating Shopify's 
                      inventory and collection structure by helping them understand 
                      how to organize products and create collections to showcase their 
                      offerings.
                    </p>
                    
                    <div className="training-list mt-4">
                      <h5 className="fw-bold mb-3" style={{ fontSize: "1rem" }}>Training Covered:</h5>
                      {trainingTopics.map((topic, index) => (
                        <div key={index} className="d-flex align-items-center gap-2 mb-2">
                          <span style={{ color: "var(--accent-green)" }}>✓</span>
                          <span style={{ fontSize: "0.95rem" }}>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="col-md-5">
                    <div className="tools-card p-4 rounded-4 h-100">
                      <span style={{ fontSize: "2rem" }}>🎓</span>
                      <h5 className="fw-bold mt-2 mb-3" style={{ fontSize: "1.1rem" }}>Client Outcome:</h5>
                      <p className="mb-0" style={{ lineHeight: "1.6" }}>
                        "From dependency to autonomy—the client now possesses the skills and knowledge 
                        to manage their sophisticated new website independently."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* RESULTS SECTION */}
              <section id="results" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Results & Impact</h2>
                
                <div className="row g-3 text-center mb-4">
                  {[
                    { number: "100%", label: "Custom code", color: "#9a4b97", desc: "No bloated third-party apps" },
                    { number: "$0", label: "Recurring fees", color: "#4a7c6b", desc: "Saved on wishlist app costs" },
                    { number: "Mobile", label: "First", color: "#e49c00", desc: "Optimized for smartphone traffic" },
                    { number: "Full", label: "Autonomy", color: "#c863be", desc: "Client can manage site independently" }
                  ].map((item, index) => (
                    <div className="col-md-3" key={index}>
                      <div className="result-card p-4 rounded-4" style={{ 
                        background: item.color,
                        color: "white"
                      }}>
                        <div className="result-number" style={{ color: "white" }}>{item.number}</div>
                        <div className="result-label" style={{ color: "rgba(255, 255, 255, 0.9)" }}>{item.label}</div>
                        <p className="mb-0 mt-1 small" style={{ color: "rgba(255,255,255,0.7)" }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="row g-3 mb-4">
                  <div className="col-12">
                    <div className="result-highlight p-4 rounded-4 text-start">
                      <h5 className="fw-bold mb-2">✨ Unique Brand Identity</h5>
                      <p className="mb-3">The store now stands out from competitors with a custom menu and design concept not possible with standard Shopify themes.</p>
                      
                      <h5 className="fw-bold mb-2">❤️ Enhanced Engagement</h5>
                      <p className="mb-3">The hard-coded wishlist page encourages account creation and repeat visits.</p>
                      
                      <h5 className="fw-bold mb-2">📱 Improved Mobile Performance</h5>
                      <p className="mb-0">Mobile customization led to noticeable usability improvements for the core audience.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-4 rounded-4 result-quote">
                  <p className="mb-0 fst-italic result-quote-text">
                    "Through our training and collaborative brainstorming process, the owner now possesses the skills 
                    and knowledge to manage their sophisticated new website autonomously."
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
                    devProjects.filter(p => p.id !== "lechalet").map((project) => (
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

export default Lechaletbymay;