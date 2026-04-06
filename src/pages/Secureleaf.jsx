import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

// Import hero video
import secureleafHeroVideo from "../videos/SLvideo.mp4";
// Import paper application image
import paperApplicationImage from "../assets/Secureleaf-images/SLpaperapplication.svg";
// Import logo and branding images
import secureleafLogo from "../assets/Secureleaf-images/SecureleafLogo.png";
import secureleafBranding from "../assets/Secureleaf-images/SecureleafBranding.png";
// Import user persona and journey map images
import userPersonaImage from "../assets/Secureleaf-images/SLuserpersona.svg";
import journeyMapImage from "../assets/Secureleaf-images/SLjourneymap.svg";
// Import user flow images
import userFlow1Image from "../assets/Secureleaf-images/SLuserflow1.png";
import userFlow2Image from "../assets/Secureleaf-images/SLuserflow2.png";
// Import wireframes - TWO IMAGES
import wireframe1Image from "../assets/Secureleaf-images/SLwireframe1.png";
import wireframe2Image from "../assets/Secureleaf-images/SLwireframe2.png";
// Import final design images
import signInHomeImage from "../assets/Secureleaf-images/SLhomepage.png";
import benefitsScreenImage from "../assets/Secureleaf-images/SLbenefits.png";
import applicationScreen1Image from "../assets/Secureleaf-images/SLapplyscreen.png";
import applicationScreen2Image from "../assets/Secureleaf-images/SLapplyscreen.png";
import confirmationScreenImage from "../assets/Secureleaf-images/SLconfirmation.png";
// Import other project images
import wcagHeroImage from "../assets/WCAG-images/WCAGmainhero.png";
import timeManagementImage from "../assets/Timemgmt-images/Timemgmt.png";
import mealUHeroImage from "../assets/MealU-images/MealUHero.png";
import reactWeatherHeroImage from "../assets/Reactweather-images/Reactweatherhero.png";
import lechaletHeroImage from "../assets/Lechaletbymay-images/Lechaletbymay.png";

function Secureleaf() {
  const [activeSection, setActiveSection] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState("ux");
  const [heroVideoPlaying, setHeroVideoPlaying] = useState(true);
  const heroVideoRef = useRef(null);

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

  // Toggle hero video play/pause
  const toggleHeroVideo = () => {
    if (heroVideoRef.current) {
      if (heroVideoPlaying) {
        heroVideoRef.current.pause();
        setHeroVideoPlaying(false);
      } else {
        heroVideoRef.current.play();
        setHeroVideoPlaying(true);
      }
    }
  };

  // Navigation items
  const navItems = [
    { id: "overview", label: "Overview", icon: "📋" },
    { id: "research", label: "Research", icon: "🔍" },
    { id: "design", label: "Design", icon: "🎨" },
    { id: "results", label: "Results", icon: "📊" },
    { id: "other", label: "Other Projects", icon: "📁" }
  ];

  // Final designs data
  const finalDesigns = [
    { 
      title: "Sign In & Home Screen", 
      desc: "Secure login with biometric options and personalized dashboard showing loan eligibility", 
      emoji: "🔐",
      image: signInHomeImage,
      alt: "SecureLeaf sign in screen with email/password fields and home dashboard showing loan options and eligibility amount"
    },
    { 
      title: "Benefits Screen", 
      desc: "Clear list of loan benefits to entice users to apply - low rates, fast approval, no hidden fees", 
      emoji: "✨",
      image: benefitsScreenImage,
      alt: "Benefits screen showing loan advantages including competitive rates, quick approval process, flexible terms, and no prepayment penalties"
    },
    { 
      title: "Application Screen - Part 1", 
      desc: "Personal information and employment details section of the loan application", 
      emoji: "📝",
      image: applicationScreen1Image,
      alt: "Loan application screen one showing personal information fields: full name, address, phone number, and employment details"
    },
    { 
      title: "Application Screen - Part 2", 
      desc: "Loan amount selection, income verification, and electronic signature", 
      emoji: "💰",
      image: applicationScreen2Image,
      alt: "Loan application screen two showing loan amount selector, income verification upload, and electronic signature pad"
    },
    { 
      title: "Loan Confirmation Screen", 
      desc: "Final confirmation with loan details, approval status, and next steps", 
      emoji: "✅",
      image: confirmationScreenImage,
      alt: "Loan confirmation screen showing approved loan amount, interest rate, repayment terms, and next steps for fund disbursement"
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

      {/* HERO SECTION - WITH VIDEO BACKGROUND */}
      <section className="hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="hero-text-wrapper mb-5 text-start">
                <h1 className="hero-title mb-4">SecureLeaf: Bank Loan Application</h1>
                <p className="hero-description" style={{ maxWidth: "100%", marginLeft: 0 }}>
                  A mobile-first bank loan application designed to simplify the complex paper form 
                  process into a seamless digital experience. Transforming a lengthy, complicated 
                  paper application into an intuitive, accessible mobile loan application.
                </p>
              </div>

              <div className="hero-media-wrapper mb-5">
                <div className="hero-video-container">
                  <video
                    ref={heroVideoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video w-100 rounded-4"
                    style={{ borderRadius: "24px" }}
                  >
                    <source src={secureleafHeroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <button onClick={toggleHeroVideo} className="hero-video-control">
                    <span>{heroVideoPlaying ? "⏸️" : "▶️"}</span>
                  </button>
                </div>
              </div>

              <div className="project-info-row row g-4 mt-4">
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">My Role</span>
                    <span>UX/UI Designer</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Timeline</span>
                    <span>8 Weeks</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Team</span>
                    <span>Individual Project</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Tools</span>
                    <span>Figma, Miro, Google Forms, Illustrator</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT - ALIGNED WITH HERO */}
      <div className="main-content-container">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              
              {/* PROJECT OVERVIEW SECTION */}
              <section id="overview" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Project Overview</h2>
                <h3 className="fw-bold mb-4">From Paper to Digital: Simplifying Loan Applications</h3>
                <p className="mb-4">
                  <strong>UX/UI Design | Brand Development | User Research</strong> | 8 Weeks
                </p>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">The Challenge</h4>
                  <p className="mb-4">
                    A bank needed to convert their lengthy, complicated paper loan application form into 
                    a digital format. The existing paper process was overwhelming for customers, leading 
                    to high abandonment rates and frustrated applicants. I was tasked with creating a 
                    mobile-first bank loan application that makes the application process easy, intuitive, 
                    and accessible.
                  </p>
                  
                  {/* Paper Application Image */}
                  <div className="paper-application-container mb-4" onClick={() => openImageModal(paperApplicationImage, "Original Paper Loan Application Form")}>
                    <img 
                      src={paperApplicationImage} 
                      alt="Original lengthy paper loan application form showing multiple pages of complex financial questions, confusing jargon, and dense text layout that overwhelmed customers"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "16px",
                        cursor: "pointer",
                        border: "2px solid var(--accent-purple)",
                        boxShadow: "8px 8px 0 var(--shadow-color)",
                        transition: "transform 0.2s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.01)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                    <div className="text-center mt-2">
                      <span style={{ 
                        fontSize: "0.75rem", 
                        color: "var(--accent-purple)",
                        display: "inline-block",
                        padding: "4px 12px",
                        background: "#f8f9fa",
                        borderRadius: "20px"
                      }}>
                        🔍 Click to enlarge original paper application
                      </span>
                    </div>
                  </div>

                  <div className="highlight-box p-4 rounded-4 mt-4">
                    <p className="fw-bold mb-0 highlight-text">
                      The result is SecureLeaf: a digital loan application that transforms a complex 
                      multi-page paper form into an intuitive, step-by-step mobile experience that 
                      reduces anxiety and increases completion rates.
                    </p>
                  </div>
                </div>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">The Problem & Solution</h4>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="challenge-card p-4 rounded-4 h-100 challenge-card-problem">
                        <h5 className="fw-bold mb-3 challenge-title">The Problem:</h5>
                        <p className="mb-0 challenge-text">
                          Long, confusing paper applications overwhelm customers. Complex financial jargon 
                          creates barriers. No guidance or support during application. High abandonment rates 
                          due to frustration and confusion.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="challenge-card p-4 rounded-4 h-100 challenge-card-solution">
                        <h5 className="fw-bold mb-3 challenge-title">The Solution:</h5>
                        <p className="mb-0 challenge-text">
                          A mobile-first digital loan application with step-by-step guidance, clear 
                          language with tooltips, progress tracking, and integrated support resources 
                          to facilitate the loan process.
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
                        <strong>UX/UI Designer</strong> responsible for:
                      </p>
                      <ul className="custom-list">
                        <li>Competitive analysis of online banking platforms</li>
                        <li>User research and persona development</li>
                        <li>Brand identity and logo design</li>
                        <li>User journey mapping</li>
                        <li>User flow creation</li>
                        <li>Wireframing and high-fidelity UI design</li>
                      </ul>
                    </div>
                    <div className="col-md-5">
                      <div className="tools-card p-4 rounded-4">
                        <h5 className="fw-bold mb-3 tools-title">Tools Used</h5>
                        <div className="d-flex flex-wrap gap-2">
                          {["Figma", "Miro", "Google Forms", "Adobe Illustrator", "Photoshop"].map((tool, index) => (
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
                  <h4 className="fw-bold mb-3">Competitive Analysis</h4>
                  <p className="mb-4">
                    I analyzed three leading online banking platforms to understand their UX/UI patterns, 
                    identify strengths and weaknesses, and uncover opportunities for SecureLeaf:
                  </p>
                  
                  <div className="row g-4 mb-4">
                    {/* Rocket Money */}
                    <div className="col-md-4">
                      <div className="objective-card p-4 rounded-4 h-100">
                        <div className="text-center mb-3">
                          <span style={{ fontSize: "2.5rem" }}>🚀</span>
                        </div>
                        <h5 className="fw-bold text-center mb-3" style={{ fontSize: "1rem" }}>Rocket Money</h5>
                        <div className="mb-3">
                          <p className="small mb-1"><strong>✅ UX/UI Layout:</strong> Clean, intuitive navigation with strong visual hierarchy</p>
                          <p className="small mb-1"><strong>✅ UI Controls:</strong> Simple buttons, clear CTAs, minimal clutter</p>
                          <p className="small mb-0"><strong>⚠️ Weakness:</strong> Loan application process buried within settings, not prominently featured</p>
                        </div>
                      </div>
                    </div>

                    {/* Marcus by Goldman Sachs */}
                    <div className="col-md-4">
                      <div className="objective-card p-4 rounded-4 h-100">
                        <div className="text-center mb-3">
                          <span style={{ fontSize: "2.5rem" }}>💼</span>
                        </div>
                        <h5 className="fw-bold text-center mb-3" style={{ fontSize: "1rem" }}>Marcus by Goldman Sachs</h5>
                        <div className="mb-3">
                          <p className="small mb-1"><strong>✅ UX/UI Layout:</strong> Minimalist design, transparent fee structure</p>
                          <p className="small mb-1"><strong>✅ UI Controls:</strong> High trust factor, clear progress indicators</p>
                          <p className="small mb-0"><strong>⚠️ Weakness:</strong> Limited loan product options, slower application flow</p>
                        </div>
                      </div>
                    </div>

                    {/* SoFi */}
                    <div className="col-md-4">
                      <div className="objective-card p-4 rounded-4 h-100">
                        <div className="text-center mb-3">
                          <span style={{ fontSize: "2.5rem" }}>🏦</span>
                        </div>
                        <h5 className="fw-bold text-center mb-3" style={{ fontSize: "1rem" }}>SoFi</h5>
                        <div className="mb-3">
                          <p className="small mb-1"><strong>✅ UX/UI Layout:</strong> Comprehensive financial ecosystem</p>
                          <p className="small mb-1"><strong>✅ UI Controls:</strong> Excellent member benefits, tooltips for complex terms</p>
                          <p className="small mb-0"><strong>⚠️ Weakness:</strong> Overwhelming information on home screen, steep learning curve</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Insights from Competitive Analysis */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Key Research Insights</h4>
                  <div className="row g-3">
                    {[
                      { insight: "Clean, minimalist UI reduces cognitive load", source: "Rocket Money", icon: "🎯" },
                      { insight: "Progress indicators reduce abandonment", source: "Marcus", icon: "📊" },
                      { insight: "Tooltips and explainers build trust", source: "SoFi", icon: "💡" },
                      { insight: "Step-by-step workflows prevent overwhelm", source: "All platforms", icon: "📝" }
                    ].map((item, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="insight-card p-3 rounded-4 d-flex align-items-center gap-3">
                          <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
                          <div>
                            <p className="mb-0 insight-text" style={{ fontSize: "0.9rem" }}>{item.insight}</p>
                            <small className="text-muted">— {item.source}</small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* User Persona */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">User Persona: Lana Turner</h4>
                  
                  <div className="persona-image-container mb-4">
                    <div 
                      className="persona-image-wrapper"
                      onClick={() => openImageModal(userPersonaImage, "User Persona - Lana Turner, Single Mom Seeking Loan Assistance")}
                      style={{ cursor: "pointer" }}
                    >
                      <img 
                        src={userPersonaImage} 
                        alt="User Persona: Lana Turner - 35 year old full-time elementary school counselor and single mom. Goals: find loan to alleviate costs, get fast approval, complete loan quickly, have support resources. Pain points: overwhelming application process, confusing loan jargon, lack of support. Personality: responsible, hardworking, extrovert, analytical."
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "16px",
                          transition: "transform 0.2s ease",
                          border: "2px solid var(--accent-purple)",
                          boxShadow: "8px 8px 0 var(--shadow-color)"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.01)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      />
                      <div className="text-center mt-2">
                        <span style={{ 
                          fontSize: "0.75rem", 
                          color: "var(--accent-purple)",
                          display: "inline-block",
                          padding: "4px 12px",
                          background: "#f8f9fa",
                          borderRadius: "20px"
                        }}>
                          🔍 Click to enlarge
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* User Journey Map */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">User Journey Map</h4>
                  <p className="mb-4">
                    Lana just got off an 8-hour shift and comes home to her baby and a pile of overdue bills, 
                    including a letter from her landlord about possible eviction. As an existing SecureLeaf 
                    bank member, she's ready to apply for a loan.
                  </p>
                  
                  <div className="journey-map-container">
                    <div 
                      className="journey-map-wrapper"
                      onClick={() => openImageModal(journeyMapImage, "User Journey Map - Lana's Loan Application Journey")}
                      style={{ cursor: "pointer" }}
                    >
                      <img 
                        src={journeyMapImage} 
                        alt="User Journey Map showing Lana's journey from frustration to satisfaction: Actions include logging into SecureLeaf app, clicking add new loan button, confirming understanding. Goals include checking bank statement, applying for loan, receiving confirmation. Touchpoints: unlock, discover, navigation, review. Emotions: frustration → curiosity → hopefulness → happy/satisfied."
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "16px",
                          transition: "transform 0.2s ease",
                          border: "2px solid var(--accent-green)",
                          boxShadow: "8px 8px 0 var(--shadow-color)"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.01)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      />
                      <div className="text-center mt-2">
                        <span style={{ 
                          fontSize: "0.75rem", 
                          color: "var(--accent-purple)",
                          display: "inline-block",
                          padding: "4px 12px",
                          background: "#f8f9fa",
                          borderRadius: "20px"
                        }}>
                          🔍 Click to enlarge
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Opportunities from Journey Map */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Opportunities Identified</h4>
                  <div className="row g-3">
                    {[
                      { opportunity: "Notification of new loan application done online", icon: "🔔" },
                      { opportunity: "Advertise option for new low rates", icon: "📢" },
                      { opportunity: "Include suggestions on how much Lana can qualify for (income suggestions)", icon: "💰" },
                      { opportunity: "Integrate notifications of loan status reminders to keep Lana up to date", icon: "⏰" }
                    ].map((item, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="synthesis-card p-3 rounded-4" style={{ 
                          background: index % 2 === 0 ? "var(--pastel-mint)" : "var(--pastel-yellow)",
                          border: "2px solid var(--accent-green)",
                          boxShadow: "4px 4px 0 var(--shadow-color)"
                        }}>
                          <div className="d-flex align-items-center gap-3">
                            <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
                            <p className="mb-0" style={{ fontSize: "0.9rem" }}>{item.opportunity}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* DESIGN SECTION */}
              <section id="design" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Design</h2>

                {/* Brand Identity */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Brand Identity: SecureLeaf</h4>
                  <p className="mb-4">
                    The name "SecureLeaf" combines financial security with natural growth—representing 
                    both protection and financial wellness. The brand identity was designed to feel 
                    trustworthy, approachable, and nurturing.
                  </p>
                  
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="tools-card p-4 rounded-4 h-100 text-center">
                        <h5 className="fw-bold mb-3">Logo Symbolism</h5>
                        <div className="mb-3">
                          <img src={secureleafLogo} alt="SecureLeaf Logo" style={{ maxWidth: "120px", height: "auto" }} />
                        </div>
                        <p className="small mb-0">The logo combines a leaf representing fertility and growth with a circle symbolizing wholeness and financial security.</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tools-card p-4 rounded-4 h-100">
                        <h5 className="fw-bold mb-3">Typography: Inria Serif</h5>
                        <p className="small mb-3" style={{ fontFamily: "Inria Serif", fontSize: "1.2rem" }}>
                          Inria Serif was chosen for its clean, readable letterforms that convey 
                          professionalism while remaining approachable and warm.
                        </p>
                        <p className="small mb-0"><strong>Why Inria Serif?</strong> Its clean lines and excellent readability across devices make it perfect for financial applications where clarity and trust are essential.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="branding-container mt-4" onClick={() => openImageModal(secureleafBranding, "SecureLeaf Brand Identity - Logo, Typography, and Color Palette")}>
                    <img src={secureleafBranding} alt="SecureLeaf brand identity including logo design, Inria Serif typography, and color palette with green and neutral tones representing growth and security" className="img-fluid rounded-3 architecture-image" />
                    <div className="mt-3"><span className="enlarge-hint">🔍 Click to enlarge branding guide</span></div>
                  </div>
                </div>

                {/* User Flows */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">User Flows</h4>
                  <p className="mb-4">
                    Based on the research and journey map, I created streamlined user flows that guide 
                    Lana from loan discovery to application completion with minimal friction.
                  </p>
                  
                  {/* User Flow 1 */}
                  <div className="mb-4">
                    <h5 className="fw-bold mb-3" style={{ fontSize: "1rem", color: "var(--accent-purple)" }}>📊 User Flow 1: Account Creation → Loan Application</h5>
                    <div className="userflow-container" onClick={() => openImageModal(userFlow1Image, "SecureLeaf User Flow - Account Creation to Loan Application")}>
                      <img src={userFlow1Image} alt="User flow diagram showing the account creation and loan application process: Download App → Sign Up → Verify Identity → Dashboard → Select Loan Product → Begin Application" className="img-fluid rounded-3 architecture-image" />
                      <div className="mt-3"><span className="enlarge-hint">🔍 Click to enlarge user flow 1</span></div>
                    </div>
                  </div>

                  {/* User Flow 2 */}
                  <div className="mb-4">
                    <h5 className="fw-bold mb-3" style={{ fontSize: "1rem", color: "var(--accent-green)" }}>✅ User Flow 2: Application → Approval → Confirmation</h5>
                    <div className="userflow-container" onClick={() => openImageModal(userFlow2Image, "SecureLeaf User Flow - Application to Approval")}>
                      <img src={userFlow2Image} alt="User flow diagram showing the loan completion process: Fill Application → Upload Documents → Review Details → Submit → Credit Check → Approval → Sign Documents → Fund Disbursement → Confirmation" className="img-fluid rounded-3 architecture-image" />
                      <div className="mt-3"><span className="enlarge-hint">🔍 Click to enlarge user flow 2</span></div>
                    </div>
                  </div>
                </div>

                {/* Wireframes - TWO IMAGES */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Wireframes</h4>
                  <p className="mb-4">
                    Low-fidelity wireframes were created to establish layout, information hierarchy, 
                    and user flow before moving to high-fidelity designs.
                  </p>
                  
                  {/* Wireframe 1 */}
                  <div className="mb-4">
                    <h5 className="fw-bold mb-3" style={{ fontSize: "1rem", color: "var(--accent-purple)" }}>📐 Wireframe Set 1: Dashboard & Loan Selection</h5>
                    <div className="wireframes-container" onClick={() => openImageModal(wireframe1Image, "SecureLeaf Wireframes - Dashboard and Loan Selection Screens")}>
                      <img src={wireframe1Image} alt="Wireframe set 1 showing dashboard layout, loan product selection screen, and application progress tracker" className="img-fluid rounded-3 architecture-image" />
                      <div className="mt-3"><span className="enlarge-hint">🔍 Click to enlarge wireframe set 1</span></div>
                    </div>
                  </div>

                  {/* Wireframe 2 */}
                  <div className="mb-4">
                    <h5 className="fw-bold mb-3" style={{ fontSize: "1rem", color: "var(--accent-green)" }}>📝 Wireframe Set 2: Application Form & Review</h5>
                    <div className="wireframes-container" onClick={() => openImageModal(wireframe2Image, "SecureLeaf Wireframes - Application Form and Review Screens")}>
                      <img src={wireframe2Image} alt="Wireframe set 2 showing multi-step application form fields, income verification screen, document upload interface, and final review page before submission" className="img-fluid rounded-3 architecture-image" />
                      <div className="mt-3"><span className="enlarge-hint">🔍 Click to enlarge wireframe set 2</span></div>
                    </div>
                  </div>
                </div>

                {/* Final Designs */}
                <div>
                  <h4 className="fw-bold mb-3">Final Interface Designs</h4>
                  <p className="mb-4">
                    The final high-fidelity designs bring the SecureLeaf brand to life with a clean, 
                    approachable interface that guides users through each step of the loan application 
                    process with confidence.
                  </p>
                  
                  <div className="final-designs-vertical">
                    {finalDesigns.map((item, index) => (
                      <div key={index} className="design-item mb-5">
                        <div className="design-header mb-3">
                          <h5 className="fw-bold design-title">{item.emoji} {item.title}</h5>
                          <p className="mb-2 design-desc">{item.desc}</p>
                        </div>
                        <div className="design-image-container" onClick={() => openImageModal(item.image, item.title)}>
                          <img src={item.image} alt={item.alt} className="img-fluid rounded-3 design-image" />
                          <div className="mt-3"><span className="enlarge-hint">🔍 Click to enlarge</span></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* RESULTS SECTION */}
              <section id="results" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Results & Impact</h2>
                
                <div className="row g-3 text-center mb-4">
                  {[
                    { number: "100%", label: "Digital transformation", color: "#9a4b97", desc: "From paper to mobile" },
                    { number: "3", label: "Competitors analyzed", color: "#4a7c6b", desc: "For best practices" },
                    { number: "1", label: "User persona", color: "#e49c00", desc: "Lana Turner" },
                    { number: "4", label: "Key opportunities", color: "#c863be", desc: "For improvement" }
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
                    <div className="result-highlight p-4 rounded-4">
                      <p className="mb-0 result-highlight-text">
                        <strong>Key Achievement:</strong> Successfully transformed a complex paper loan application 
                        into an intuitive, mobile-first digital experience that reduces user anxiety, 
                        provides clear guidance, and empowers customers to complete loan applications confidently.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-4 rounded-4 result-quote">
                  <p className="mb-0 fst-italic result-quote-text">
                    "This project taught me the importance of breaking down complex processes into digestible steps. 
                    By understanding user pain points through research and journey mapping, I could design a solution 
                    that truly addresses customer needs—making financial services more accessible and less intimidating."
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

export default Secureleaf;