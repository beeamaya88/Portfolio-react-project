import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

// Import hero image
import emailHeroImage from "../assets/Mini-projects/Emailconfirmationcover.svg";

// Import iteration images
import firstDraft from "../assets/Mini-projects/Email-images/Firstdraft.svg";
import secondDraft from "../assets/Mini-projects/Email-images/Seconddraft.svg";
import thirdDraft from "../assets/Mini-projects/Email-images/Thirddraft.svg";
import finalDraft from "../assets/Mini-projects/Email-images/Finaldraftec.svg";

// Import other project images
import timeManagementImage from "../assets/Timemgmt-images/Timemgmt.png";
import mealUHeroImage from "../assets/MealU-images/MealUHero.png";
import reactWeatherHeroImage from "../assets/Reactweather-images/Reactweatherhero.png";
import lechaletHeroImage from "../assets/Lechaletbymay-images/Lechaletbymay.png";
import wcagHeroImage from "../assets/WCAG-images/WCAGmainhero.png";

function EmailConfirmation() {
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
      version: "First Draft", 
      bulletPoints: [
        "Initial concept focused solely on receipt confirmation",
        "Displayed purchase details, shipping and billing addresses, and order total",
        "However, there was no call-to-action to continue shopping or re-engage with the store",
        "The logo was also too plain and lacked brand personality"
      ],
      insight: "Users need a clear next step after purchase confirmation.",
      image: firstDraft,
      alt: "First draft - receipt only, no call to action"
    },
    { 
      version: "Second Draft", 
      bulletPoints: [
        "Redesigned the logo to be more vibrant and noticeable",
        "Added illustration elements and a clear call-to-action button",
        "However, the shipping address and expected delivery date were placed in two different sections, making them easy to miss",
        "The focus shifted too heavily toward visuals rather than serving customer needs like order management"
      ],
      insight: "Visual appeal shouldn't sacrifice information hierarchy.",
      image: secondDraft,
      alt: "Second draft - better visuals but scattered shipping information"
    },
    { 
      version: "Third Draft", 
      bulletPoints: [
        "Consolidated shipping and billing addresses into one dedicated area for easier scanning",
        "Added an order summary with line items and total price",
        "Introduced a 'Manage Order' button to support customer self-service",
        "However, the 'Continue Shopping' button was removed, missing an opportunity for post-purchase engagement"
      ],
      insight: "Post-purchase engagement is just as important as order management.",
      image: thirdDraft,
      alt: "Third draft - consolidated addresses and manage order button"
    },
    { 
      version: "Final Draft", 
      bulletPoints: [
        "Combined both 'Manage Order' and 'Continue Shopping' buttons to support both customer service needs and business retention goals",
        "Added a soft background to visually separate the order summary and total price section",
        "Shipping and billing addresses remain consolidated, with clear expected delivery notification",
        "The result balances transaction confirmation with ongoing brand engagement"
      ],
      insight: "The best post-purchase experience serves both the customer and the business.",
      image: finalDraft,
      alt: "Final draft - both buttons, soft background, balanced design"
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
                <h1 className="hero-title mb-4">Email Confirmation: Toy Store Purchase Receipt</h1>
                <p className="hero-description" style={{ maxWidth: "100%", marginLeft: 0 }}>
                  A post-purchase email confirmation design for a toy store that balances transaction confirmation 
                  with ongoing brand engagement. The goal was to provide users with a clear receipt while 
                  encouraging them to continue shopping and stay connected with the store.
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
                    onClick={() => openImageModal(emailHeroImage, "Email Confirmation - Toy Store Purchase Receipt")}
                  >
                    <img
                      src={emailHeroImage}
                      alt="Email confirmation final design"
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
                <h3 className="fw-bold mb-4">Post-Purchase Email Confirmation for a Toy Store</h3>
                <p className="mb-4">
                  <strong>Email Design | UX Research | Visual Design</strong> | 2 Weeks
                </p>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Overview</h4>
                  <p className="mb-4">
                    I was tasked with designing a post-purchase email confirmation that serves two purposes: 
                    confirm the user's purchase with a clear receipt, and encourage continued engagement with 
                    the store. The client—a toy store—wanted customers to feel confident about their order 
                    while also being motivated to return and shop again.
                  </p>
                  <div className="highlight-box p-4 rounded-4">
                    <p className="fw-bold mb-0 highlight-text">
                      The final design balances transaction confirmation with customer retention, featuring 
                      clear order details, a soft background for visual hierarchy, and dual calls-to-action 
                      for both order management and continued shopping.
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
                          Post-purchase emails often focus only on confirming the transaction, missing the 
                          opportunity to retain customers. Users need to verify their order details and 
                          track delivery, but businesses also want to encourage repeat purchases and brand loyalty.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="challenge-card p-4 rounded-4 h-100 challenge-card-solution">
                        <h5 className="fw-bold mb-3 challenge-title">The Solution:</h5>
                        <p className="mb-0 challenge-text">
                          Design an email that serves both the customer's need for order confirmation and 
                          the business's need for customer retention—through clear information hierarchy, 
                          dual calls-to-action, and a soft visual design that highlights key information.
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
                        <li>Brand identity development (logo redesign)</li>
                        <li>Information architecture for order details</li>
                        <li>Visual hierarchy and layout design</li>
                        <li>Iterative testing and refinement</li>
                        <li>Final high-fidelity email design</li>
                      </ul>
                    </div>
                    <div className="col-md-5">
                      <div className="tools-card p-4 rounded-4">
                        <h5 className="fw-bold mb-3 tools-title">Tools Used</h5>
                        <div className="d-flex flex-wrap gap-2">
                          {["Figma", "Canva", "Adobe Illustrator"].map((tool, index) => (
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
                <h2 className="text-uppercase small fw-bold mb-4">Research & Discovery</h2>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">User Needs Assessment</h4>
                  <p className="mb-4">
                    Before designing, I identified the core needs of both users and the business:
                  </p>
                  
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="insight-card p-4 rounded-4 h-100">
                        <h5 className="fw-bold mb-3 insight-title">👤 User Needs:</h5>
                        <ul className="custom-list">
                          <li>Clear confirmation that purchase was successful</li>
                          <li>Easy access to order summary and total</li>
                          <li>Shipping and billing address verification</li>
                          <li>Expected delivery date</li>
                          <li>Ability to manage or track order</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="concept-card p-4 rounded-4 h-100">
                        <h5 className="fw-bold mb-3 concept-title">🏢 Business Needs:</h5>
                        <ul className="custom-list">
                          <li>Encourage repeat purchases</li>
                          <li>Build brand loyalty post-purchase</li>
                          <li>Reduce customer service inquiries</li>
                          <li>Create a memorable brand experience</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="fw-bold mb-3">Design Opportunities</h4>
                  <div className="row g-3">
                    {[
                      { finding: "Receipt-only emails feel transactional", opportunity: "Add visual warmth and brand personality to create emotional connection" },
                      { finding: "Scattered shipping information causes confusion", opportunity: "Consolidate all address information into one dedicated section" },
                      { finding: "No clear next step after purchase", opportunity: "Include both 'Manage Order' and 'Continue Shopping' buttons" },
                      { finding: "Order details get lost in long emails", opportunity: "Use soft background to visually separate order summary" }
                    ].map((item, index) => (
                      <div className="col-12" key={index}>
                        <div className="synthesis-card p-3 rounded-4" style={{ 
                          background: index % 2 === 0 ? "var(--pastel-mint)" : "var(--pastel-yellow)",
                          border: "2px solid var(--accent-green)",
                          boxShadow: "4px 4px 0 var(--shadow-color)"
                        }}>
                          <div className="row align-items-center">
                            <div className="col-md-5">
                              <p className="fw-bold mb-0" style={{ fontSize: "0.9rem" }}>
                                <span className="badge bg-dark me-2">🔍</span> {item.finding}
                              </p>
                            </div>
                            <div className="col-md-7">
                              <p className="mb-0" style={{ fontSize: "0.9rem" }}>
                                <span className="badge bg-dark me-2">✨</span> {item.opportunity}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* DESIGN SECTION - Restructured with image and text side by side */}
              <section id="design" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Design Iterations</h2>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Iterative Design Process</h4>
                  <p className="mb-4">
                    I went through four major iterations based on user feedback and design principles:
                  </p>
                  
                  {/* First Draft - Image and text side by side */}
                  <div className="design-iteration-block mb-5" style={{ borderBottom: "2px solid #e9ecef", paddingBottom: "40px" }}>
                    <h3 className="fw-bold mb-4" style={{ color: "var(--accent-purple)" }}>First Draft</h3>
                    <div className="row align-items-start">
                      <div className="col-md-6">
                        <div style={{ textAlign: "center", cursor: "pointer" }} onClick={() => openImageModal(firstDraft, "First Draft - Email Confirmation")}>
                          <img 
                            src={firstDraft} 
                            alt="First draft - receipt only, no call to action"
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

                  {/* Second Draft - Image and text side by side */}
                  <div className="design-iteration-block mb-5" style={{ borderBottom: "2px solid #e9ecef", paddingBottom: "40px" }}>
                    <h3 className="fw-bold mb-4" style={{ color: "var(--accent-purple)" }}>Second Draft</h3>
                    <div className="row align-items-start">
                      <div className="col-md-6">
                        <div style={{ textAlign: "center", cursor: "pointer" }} onClick={() => openImageModal(secondDraft, "Second Draft - Email Confirmation")}>
                          <img 
                            src={secondDraft} 
                            alt="Second draft - better visuals but scattered shipping information"
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

                  {/* Third Draft - Image and text side by side */}
                  <div className="design-iteration-block mb-5" style={{ borderBottom: "2px solid #e9ecef", paddingBottom: "40px" }}>
                    <h3 className="fw-bold mb-4" style={{ color: "var(--accent-purple)" }}>Third Draft</h3>
                    <div className="row align-items-start">
                      <div className="col-md-6">
                        <div style={{ textAlign: "center", cursor: "pointer" }} onClick={() => openImageModal(thirdDraft, "Third Draft - Email Confirmation")}>
                          <img 
                            src={thirdDraft} 
                            alt="Third draft - consolidated addresses and manage order button"
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
                          {designIterations[2].bulletPoints.map((point, i) => (
                            <li key={i} style={{ marginBottom: "0.75rem" }}>{point}</li>
                          ))}
                        </ul>
                        <p style={{ fontSize: "0.9rem", fontWeight: "bold", color: "var(--accent-purple)", marginTop: "1rem", padding: "12px", background: "#f8f9fa", borderRadius: "8px" }}>
                          💡 Key Insight: {designIterations[2].insight}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Final Draft - Image and text side by side */}
                  <div className="design-iteration-block mb-5" style={{ paddingBottom: "20px" }}>
                    <h3 className="fw-bold mb-4" style={{ color: "var(--accent-purple)" }}>Final Draft</h3>
                    <div className="row align-items-start">
                      <div className="col-md-6">
                        <div style={{ textAlign: "center", cursor: "pointer" }} onClick={() => openImageModal(finalDraft, "Final Draft - Email Confirmation")}>
                          <img 
                            src={finalDraft} 
                            alt="Final draft - both buttons, soft background, balanced design"
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
                </div>

                <div>
                  <h4 className="fw-bold mb-3">Final Design Decisions</h4>
                  <p className="mb-4">
                    After four iterations and user feedback, the final design achieved:
                  </p>
                  
                  <div className="row g-3">
                    {[
                      { icon: "🎯", title: "Dual Calls-to-Action", desc: "Both 'Manage Order' and 'Continue Shopping' buttons support customer service and business retention." },
                      { icon: "📖", title: "Consolidated Information", desc: "Shipping and billing addresses grouped together for easy verification." },
                      { icon: "🎨", title: "Visual Hierarchy", desc: "Soft background highlights order summary and total price without overwhelming the user." },
                      { icon: "🔔", title: "Expected Delivery Notification", desc: "Clear communication about when items will be shipped, reducing customer anxiety." },
                      { icon: "🏷️", title: "Vibrant Brand Identity", desc: "Redesigned logo adds personality and makes the email feel less transactional." },
                      { icon: "⚡", title: "Reduced Clutter", desc: "Removed unnecessary elements that distracted from key information." }
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
                    { number: "2", label: "Calls-to-action", color: "#4a7c6b" },
                    { number: "✓", label: "Clear order summary", color: "#e49c00" },
                    { number: "📧", label: "Post-purchase engagement", color: "#c863be" }
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
                        <strong>Key Takeaway:</strong> Post-purchase emails are a critical touchpoint for customer retention. 
                        By balancing transaction confirmation with brand engagement, businesses can reduce customer 
                        anxiety about orders while encouraging repeat purchases. The final design serves both the 
                        customer's need for clarity and the business's need for loyalty.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-4 rounded-4 result-quote">
                  <p className="mb-0 fst-italic result-quote-text">
                    "This project taught me that every touchpoint is an opportunity for engagement. 
                    A confirmation email shouldn't just confirm—it should connect. The iterative process 
                    revealed that users want both control (manage order) and inspiration (continue shopping), 
                    and the best design gives them both."
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

export default EmailConfirmation;