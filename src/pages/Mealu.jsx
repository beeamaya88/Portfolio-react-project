import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

// Import hero image
import mealUHeroImage from "../assets/MealU-images/MealUHero.png";
// Import User Persona and Journey Map images
import userPersonaImage from "../assets/MealU-images/Userpersona.svg";
import journeyMapImage from "../assets/MealU-images/Journeymap.svg";
// Import Information Architecture and User Flow Images
import informationArchitectureImage from "../assets/MealU-images/MealUIA.png";
import userFlowImage from "../assets/MealU-images/MUuserflow.png";
import userFlow2Image from "../assets/MealU-images/MUuserflow2.png";
// Import UI Design Concept Images
import onboardingFlowImage from "../assets/MealU-images/Onboardingflow.png";
import rewardSystemImage from "../assets/MealU-images/Rewardsystem.png";
import accountManagementImage from "../assets/MealU-images/Accountmgmt.png";
import personalizationImage from "../assets/MealU-images/Personalization.png";
import mealSelectionImage from "../assets/MealU-images/Mealselection.png";
import mealSelection2Image from "../assets/MealU-images/Mealselection2.png";
import customerSupportImage from "../assets/MealU-images/Customersupport.png";
import checkOutImage from "../assets/MealU-images/MUcheckout.png";
// Import Branding & Style Guide Images
import initialBrandImage from "../assets/MealU-images/Initialbrand.png";
import finalBrandImage from "../assets/MealU-images/Finalbrand.png";
// Import other project images
import wcagHeroImage from "../assets/WCAG-images/WCAGmainhero.png";
import timeManagementImage from "../assets/Timemgmt-images/Timemgmt.png";
import reactWeatherHeroImage from "../assets/Reactweather-images/Reactweatherhero.png";
import lechaletHeroImage from "../assets/Lechaletbymay-images/Lechaletbymay.png";

function MealU() {
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
      const sections = ["overview", "branding", "research", "design", "results", "other"];
      
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

  // Navigation items - Updated with branding section
  const navItems = [
    { id: "overview", label: "Overview", icon: "📋" },
    { id: "branding", label: "Branding", icon: "🎨" },
    { id: "research", label: "Research", icon: "🔍" },
    { id: "design", label: "Design", icon: "🎨" },
    { id: "results", label: "Results", icon: "📊" },
    { id: "other", label: "Other Projects", icon: "📁" }
  ];

  // Core values
  const coreValues = [
    { value: "Easy", description: "Simple, straightforward meal preparation", color: "var(--accent-green)" },
    { value: "Affordable", description: "Budget-friendly for college students", color: "var(--accent-purple)" },
    { value: "Convenient", description: "Grab-and-go or quick prep options", color: "var(--accent-pink)" },
    { value: "Accessible", description: "Available to all students regardless of kitchen setup", color: "var(--accent-yellow)" },
    { value: "Sustainable", description: "Eco-friendly packaging and practices", color: "var(--accent-dark)" }
  ];

  // UI Design Concepts data with images
  const uiDesigns = [
    { 
      title: "Onboarding Flow", 
      desc: "Welcome screen with student-focused messaging", 
      emoji: "👋",
      image: onboardingFlowImage,
      alt: "Onboarding flow screens showing welcome message, sign up options, and student-focused onboarding experience for Meal U app"
    },
    { 
      title: "Rewards System", 
      desc: "Points for consistent ordering and referrals", 
      emoji: "⭐",
      image: rewardSystemImage,
      alt: "Rewards system interface showing points accumulation, referral bonuses, and loyalty rewards for consistent Meal U customers"
    },
    { 
      title: "Account Management", 
      desc: "Subscription settings and delivery scheduling", 
      emoji: "👤",
      image: accountManagementImage,
      alt: "Account management screen showing subscription settings, delivery schedule preferences, and profile management options"
    },
    { 
      title: "Personalization", 
      desc: "Ingredient substitution options", 
      emoji: "🎨",
      image: personalizationImage,
      alt: "Personalization interface showing ingredient substitution options, dietary preferences, and meal customization features"
    },
    { 
      title: "Meal Selection - View 1", 
      desc: "Filter by dietary preferences, time, and budget", 
      emoji: "🍽️",
      image: mealSelectionImage,
      alt: "Meal selection screen showing filter options for dietary preferences, cooking time, budget, and available meal choices"
    },
    { 
      title: "Meal Selection - View 2", 
      desc: "Browse available meals with detailed information", 
      emoji: "📋",
      image: mealSelection2Image,
      alt: "Alternative meal selection view showing meal cards with nutritional information, pricing, and quick add to cart options"
    },
    { 
      title: "Customer Support", 
      desc: "In-app chat and help center", 
      emoji: "💬",
      image: customerSupportImage,
      alt: "Customer support interface showing in-app chat for Meal U users"
    },
    { 
      title: "Checkout", 
      desc: "Checkout payment form and confirmation", 
      emoji: "💳",
      image: checkOutImage,
      alt: "Checkout form with order summary, shipping address fields, payment method options, and payment confirmation screen showing successful order placement with order number."
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
              <div className="hero-text-wrapper text-start mb-5">
                <h1 className="hero-title mb-4">Meal U: Meal Delivery for College Students</h1>
                <p className="hero-description" style={{ maxWidth: "100%", marginLeft: 0 }}>
                  A student-focused meal delivery service addressing the gap in the market for affordable, 
                  healthy, and convenient meal solutions designed specifically for college students living 
                  in dorms with limited kitchen access.
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
                      background: "linear-gradient(135deg, #ffe6ec, #fff2d9)",
                      padding: "20px"
                    }}
                    onClick={() => openImageModal(mealUHeroImage, "Meal U - Affordable Meal Delivery for College Students")}
                  >
                    <img
                      src={mealUHeroImage}
                      alt="Meal U - Affordable meal delivery for college students"
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
                    <span>UX/UI Apprentice</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "white", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Timeline</span>
                    <span>12 Weeks</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "white", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Team</span>
                    <span>4 UX/UI Apprentices</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "white", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Tools</span>
                    <span>Figma, Figjam, Google Forms, Teams </span>
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
                <h3 className="fw-bold mb-4">Healthy Food = Healthy Brain</h3>
                <p className="mb-4">
                  <strong>UX/UI Design | Brand Development | User Research</strong> | 12 Weeks
                </p>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Overview</h4>
                  <p className="mb-4">
                   As part of my UX UI program capstone project, our team of 4 UX/UI apprentices was tasked 
                   to create a product that would identify a gap in the market.
                    We created a healthy, convenient, and budget-friendly 
                  meal solutions that accommodate the unique 
                    constraints of student life, including limited kitchen access,
                     time restrictions, and 
                    budget limitations.
                  </p>
                  <div className="highlight-box p-4 rounded-4">
                    <p className="fw-bold mb-0 highlight-text">
                      The result is a student-centered meal delivery service that combines affordability, 
                      convenience, and nutrition that is designed to help students thrive academically through better eating habits.
                    </p>
                  </div>
                </div>

                {/* Mission & Slogan */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Mission & Slogan</h4>
                  <div className="mission-card p-4 rounded-4" style={{ 
                    background: "var(--pastel-yellow)",
                    border: "2px solid var(--accent-yellow)",
                    boxShadow: "8px 8px 0 var(--shadow-color)"
                  }}>
                    <p className="fw-bold mb-2 text-center" style={{ fontSize: "1.5rem", color: "var(--text-dark)" }}>
                      "Healthy Food = Healthy Brain"
                    </p>
                    <p className="mb-0 text-center" style={{ fontSize: "1rem", color: "var(--text-body)" }}>
                      Empowering college students to fuel their academic success through accessible, 
                      nutritious, and convenient meal solutions.
                    </p>
                  </div>
                </div>

                {/* The Challenge */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">The Challenge</h4>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="challenge-card p-4 rounded-4 h-100 challenge-card-problem">
                        <h5 className="fw-bold mb-3 challenge-title">The Problem:</h5>
                        <p className="mb-0 challenge-text">
                          College students struggle to find affordable, healthy meal options that fit their 
                          limited time, budget, and kitchen resources. Existing meal delivery services are 
                          too expensive, require extensive cooking equipment, and aren't designed for dorm living and realities of college life.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="challenge-card p-4 rounded-4 h-100 challenge-card-solution">
                        <h5 className="fw-bold mb-3 challenge-title">The Solution:</h5>
                        <p className="mb-0 challenge-text">
                          Create a student-focused meal delivery service featuring 
                          affordable pricing, easy-to-follow steps, included cooking
                           utensils, flexible delivery options, and personalized 
                           ingredient substitutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* My Role */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">My Role</h4>
                  <div className="row">
                    <div className="col-md-7">
                      <p className="mb-3">
                        <strong>UX/UI Apprentice</strong> contributing to:
                      </p>
                      <ul className="custom-list">
                        <li>User research (qualitative interviews & quantitative surveys)</li>
                        <li>Competitive analysis and market mapping</li>
                        <li>Brand identity and style guide development</li>
                        <li>Persona creation and user journey mapping</li>
                        <li>Information architecture and user flow design</li>
                        <li>UI design and prototyping</li>
                      </ul>
                    </div>
                    <div className="col-md-5">
                      <div className="tools-card p-4 rounded-4">
                        <h5 className="fw-bold mb-3 tools-title">Tools Used</h5>
                        <div className="d-flex flex-wrap gap-2">
                          {["Figma", "Google Forms", "Miro", "Adobe Creative Suite", "Trello"].map((tool, index) => (
                            <span key={index} className="custom-badge">{tool}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* BRANDING & STYLE GUIDE SECTION */}
              <section id="branding" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Branding & Style Guide</h2>
                <h3 className="fw-bold mb-4">Brand Evolution: From Concept to Final Identity</h3>
                <p className="mb-4">
                  I developed the brand identity for Meal U, starting with an initial concept and evolving it into 
                  a refined, student-centered final design that better connects with the target audience.
                </p>

                {/* Side by Side Cards */}
                <div className="row g-4">
                  {/* Initial Brand Card */}
                  <div className="col-md-6">
                    <div className="branding-card h-100" style={{ 
                      background: "white",
                      border: "2px solid var(--accent-purple)",
                      borderRadius: "20px",
                      overflow: "hidden",
                      boxShadow: "8px 8px 0 var(--shadow-color)",
                      transition: "all 0.3s ease"
                    }}>
                      <div className="p-4" style={{ background: "var(--pastel-purple)", borderBottom: "2px solid var(--accent-purple)" }}>
                        <h5 className="fw-bold mb-0" style={{ fontSize: "1.1rem", color: "var(--text-dark)" }}>
                          📋 Initial: Meal University
                        </h5>
                      </div>
                      <div 
                        className="branding-image-container p-4"
                        onClick={() => openImageModal(initialBrandImage, "Initial Meal University Brand Style Guide - Mascot and Varsity Concept")}
                        style={{ cursor: "pointer" }}
                      >
                        <img 
                          src={initialBrandImage} 
                          alt="Initial Meal University brand style guide featuring Chefee the dog mascot holding M and U letters, varsity-style wordmark, slogan 'Healthy Food = Healthy Brain', multiple typography styles including Inter, Varsity, and Arial, and darker earth-toned color palette"
                          style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "12px",
                            transition: "transform 0.2s ease",
                            border: "1px solid #e9ecef"
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.02)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        />
                        <div className="text-center mt-2">
                          <span style={{ 
                            fontSize: "0.7rem", 
                            color: "var(--accent-purple)",
                            display: "inline-block",
                            padding: "2px 8px",
                            background: "#f8f9fa",
                            borderRadius: "20px"
                          }}>
                            🔍 Click to enlarge
                          </span>
                        </div>
                      </div>
                      <div className="p-4" style={{ background: "#f8f9fa" }}>
                        <p className="mb-0" style={{ fontSize: "0.85rem", lineHeight: "1.5", color: "var(--text-body)" }}>
                          <strong>Features:</strong> Mascot-driven logo (Chefee the dog), varsity-style wordmark, 
                          multiple typography styles (Inter, Varsity, Arial), darker earth-toned palette. 
                          <em className="d-block mt-2">Less cohesive and less versatile for modern digital use.</em>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Final Brand Card */}
                  <div className="col-md-6">
                    <div className="branding-card h-100" style={{ 
                      background: "white",
                      border: "2px solid var(--accent-green)",
                      borderRadius: "20px",
                      overflow: "hidden",
                      boxShadow: "8px 8px 0 var(--shadow-color)",
                      transition: "all 0.3s ease"
                    }}>
                      <div className="p-4" style={{ background: "var(--pastel-mint)", borderBottom: "2px solid var(--accent-green)" }}>
                        <h5 className="fw-bold mb-0" style={{ fontSize: "1.1rem", color: "var(--text-dark)" }}>
                          ✨ Final: Meal U
                        </h5>
                      </div>
                      <div 
                        className="branding-image-container p-4"
                        onClick={() => openImageModal(finalBrandImage, "Final Meal U Brand Style Guide - Nanum Brush Script, Vibrant Color Palette, and Graduation Cap Detail")}
                        style={{ cursor: "pointer" }}
                      >
                        <img 
                          src={finalBrandImage} 
                          alt="Final Meal U brand style guide featuring Nanum Brush Script handwritten typography, fresh vibrant color palette with energetic tones, graduation cap detail integrated into logo, simplified and cohesive brand identity that feels approachable, authentic, and student-centered"
                          style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "12px",
                            transition: "transform 0.2s ease",
                            border: "1px solid #e9ecef"
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.02)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        />
                        <div className="text-center mt-2">
                          <span style={{ 
                            fontSize: "0.7rem", 
                            color: "var(--accent-purple)",
                            display: "inline-block",
                            padding: "2px 8px",
                            background: "#f8f9fa",
                            borderRadius: "20px"
                          }}>
                            🔍 Click to enlarge
                          </span>
                        </div>
                      </div>
                      <div className="p-4" style={{ background: "#f8f9fa" }}>
                        <p className="mb-0" style={{ fontSize: "0.85rem", lineHeight: "1.5", color: "var(--text-body)" }}>
                          <strong>Features:</strong> Nanum Brush Script handwritten typography, fresh vibrant color 
                          palette, graduation cap detail, simplified graphics. 
                          <em className="d-block mt-2">More refined, cohesive, scalable, and student-centered.</em>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Summary Description */}
                <div className="mt-4 p-4 rounded-4" style={{ 
                  background: "linear-gradient(135deg, var(--pastel-yellow), var(--pastel-purple))",
                  border: "2px solid var(--accent-purple)",
                  boxShadow: "6px 6px 0 var(--shadow-color)"
                }}>
                  <p className="mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "var(--text-body)" }}>
                    <strong>💡 Brand Evolution Summary:</strong> The final Meal U design is more refined, cohesive, and scalable, 
                    using simplified graphics, a more energetic color palette, and the handwritten Nanum Brush Script style to create 
                    a stronger emotional connection, clearer brand identity, and a more modern, student-friendly feel. Combined with 
                    a fresh yet vibrant color palette and the graduation cap detail, the design clearly communicates a fun, nourishing, 
                    and accessible meal kit tailored to support college students' independence and everyday lifestyles.
                  </p>
                </div>
              </section>

              {/* RESEARCH SECTION - Now includes Persona and Journey Map */}
              <section id="research" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Research</h2>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Research Methodology</h4>
                  <div className="row g-4 mb-4">
                    <div className="col-md-6">
                      <div className="objective-card p-4 rounded-4 h-100">
                        <div className="text-center mb-3">
                          <span style={{ fontSize: "2.5rem" }}>🗣️</span>
                        </div>
                        <h5 className="fw-bold text-center mb-3" style={{ fontSize: "1.1rem" }}>Qualitative Interviews</h5>
                        <p className="text-center mb-0" style={{ fontSize: "0.9rem" }}>
                          5 in-depth interviews with college students to understand their eating habits, 
                          challenges, and needs
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="objective-card p-4 rounded-4 h-100">
                        <div className="text-center mb-3">
                          <span style={{ fontSize: "2.5rem" }}>📊</span>
                        </div>
                        <h5 className="fw-bold text-center mb-3" style={{ fontSize: "1.1rem" }}>Quantitative Survey</h5>
                        <p className="text-center mb-0" style={{ fontSize: "0.9rem" }}>
                          42 survey responses collected via Google Forms to validate findings and measure demand
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Research Themes */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Key Research Themes</h4>
                  <p className="mb-4">
                    From qualitative interviews, we identified key themes that shaped our design decisions:
                  </p>
                  
                  <div className="row g-3">
                    {[
                      { theme: "Nutrition Concerns", description: "Finding well-balanced meals in a high-pressure college environment", emoji: "🥗" },
                      { theme: "Lack of Time", description: "Quick meals that are easy to make with a restricted schedule", emoji: "⏰" },
                      { theme: "Affordability", description: "Budget-friendly options that don't compromise quality", emoji: "💰" },
                      { theme: "Convenience", description: "Pre-packaged meals with measured ingredients or grab-and-go options", emoji: "📦" },
                      { theme: "Personalization", description: "Option for ingredient substitutions", emoji: "🎨" },
                      { theme: "Findability", description: "Search engine, recommended products, or social media discovery", emoji: "🔍" }
                    ].map((item, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="objective-card p-4 rounded-4 h-100">
                          <div className="d-flex align-items-center gap-3 mb-2">
                            <span style={{ fontSize: "2rem" }}>{item.emoji}</span>
                            <h5 className="fw-bold mb-0" style={{ fontSize: "1rem" }}>{item.theme}</h5>
                          </div>
                          <p className="mb-0" style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quantitative Survey Results */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Quantitative Survey Results</h4>
                  <p className="mb-4">
                    A survey with <strong>42 respondents</strong> validated our qualitative findings:
                  </p>
                  
                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <div className="result-card p-4 rounded-4" style={{ 
                        background: "var(--accent-purple)",
                        color: "white",
                        textAlign: "center"
                      }}>
                        <div className="result-number" style={{ color: "white", fontSize: "2rem" }}>78%</div>
                        <div className="result-label" style={{ color: "rgba(255,255,255,0.9)" }}>of students reported skipping meals due to time constraints</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="result-card p-4 rounded-4" style={{ 
                        background: "var(--accent-green)",
                        color: "white",
                        textAlign: "center"
                      }}>
                        <div className="result-number" style={{ color: "white", fontSize: "2rem" }}>85%</div>
                        <div className="result-label" style={{ color: "rgba(255,255,255,0.9)" }}>said affordability was the most important factor in meal choices</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Competitive Analysis */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Competitive Analysis</h4>
                  <div className="row g-3">
                    {[
                      { name: "HelloFresh", issues: "Needs well-equipped kitchen, expensive, not convenient for quick cooking" },
                      { name: "Blue Apron", issues: "Requires cooking time and preparation, needs cooking tools" },
                      { name: "Dinnerly", issues: "No meal cards, instructions only on website/app, limited state availability" },
                      { name: "UberEats", issues: "Limited restaurant selection, need to switch to Yelp for reviews" }
                    ].map((competitor, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="insight-card p-4 rounded-4 h-100">
                          <h5 className="fw-bold mb-3 insight-title">{competitor.name}</h5>
                          <p className="mb-0 insight-text"><strong>Issues:</strong> {competitor.issues}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Opportunities */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Key Opportunities Identified</h4>
                  <div className="row g-3">
                    {[
                      "Provide flexibility for delivery at convenient times",
                      "Learn from competitors' mistakes",
                      "Fewer ingredients per dish",
                      "Automatic delivery of 3 weeknight meals in one box",
                      "Create 5 easy-step meals",
                      "Offer more affordable options"
                    ].map((opportunity, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="synthesis-card p-3 rounded-4" style={{ 
                          background: index % 2 === 0 ? "var(--pastel-mint)" : "var(--pastel-yellow)",
                          border: "2px solid var(--accent-green)",
                          boxShadow: "4px 4px 0 var(--shadow-color)"
                        }}>
                          <div className="d-flex align-items-center gap-3">
                            <span style={{ fontSize: "1.5rem" }}>💡</span>
                            <p className="mb-0" style={{ fontSize: "0.9rem" }}>{opportunity}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* User Persona - Moved to Research Section */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">User Persona: Barbara</h4>
                  
                  <div className="persona-image-container mb-4">
                    <div 
                      className="persona-image-wrapper"
                      onClick={() => openImageModal(userPersonaImage, "User Persona - Barbara, College Student")}
                      style={{ cursor: "pointer" }}
                    >
                      <img 
                        src={userPersonaImage} 
                        alt="User Persona: Barbara - 19 year old full-time college student living in on-campus dormitory. Goals: graduate college, develop better eating habits, incorporate healthier options. Pain points: skipping meals, limited time, no kitchen access, unhealthy diet."
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

                {/* User Journey Map - Moved to Research Section */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">User Journey Map</h4>
                  <p className="mb-4">
                    I mapped out Barbara's journey to identify pain points and opportunities throughout her experience 
                    with Meal U, from discovery to ongoing engagement.
                  </p>
                  
                  <div className="journey-map-container">
                    <div 
                      className="journey-map-wrapper"
                      onClick={() => openImageModal(journeyMapImage, "User Journey Map - Barbara's Meal U Experience")}
                      style={{ cursor: "pointer" }}
                    >
                      <img 
                        src={journeyMapImage} 
                        alt="User Journey Map showing Barbara's experience with Meal U across 6 stages: Discovery, Sign Up, Meal Selection, Checkout, Delivery, and Ongoing Use. Includes touchpoints, pain points, and opportunities for each stage."
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
              </section>

              {/* DESIGN SECTION - Includes IA, User Flows, Core Values, and UI Designs */}
              <section id="design" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Design</h2>

                {/* Core Values */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Core Values</h4>
                  <div className="row g-3">
                    {coreValues.map((value, index) => (
                      <div className="col-md-4" key={index}>
                        <div className="result-card p-4 rounded-4 text-center h-100" style={{ 
                          background: value.color,
                          color: "white"
                        }}>
                          <div className="result-number" style={{ color: "white", fontSize: "1.3rem" }}>{value.value}</div>
                          <div className="result-label" style={{ color: "rgba(255,255,255,0.9)" }}>{value.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Information Architecture Section - NEW */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Information Architecture (IA)</h4>
                  <p className="mb-4">
                    Before designing the user flows, I first established the Information Architecture to organize 
                    how Meal U's content and features would be structured. The IA defines the hierarchy and 
                    relationship between different sections of the app, ensuring users can easily find what they need.
                  </p>
                  
                  <div className="ia-container">
                    <div 
                      className="ia-wrapper"
                      onClick={() => openImageModal(informationArchitectureImage, "Meal U Information Architecture - Site Structure and Content Organization")}
                      style={{ cursor: "pointer" }}
                    >
                      <img 
                        src={informationArchitectureImage} 
                        alt="Meal U Information Architecture diagram showing the app's structure including: Home, Meal Selection, Meal Details, Cart, Checkout, Order Confirmation, Account (Profile, Payment Methods, Order History), and Support sections"
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

                {/* User Flows Section - NEW */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">User Flows</h4>
                  <p className="mb-4">
                    Based on the Information Architecture, I mapped out the key user flows showing how users 
                    navigate through Meal U to complete their goals. The primary flow follows a user's journey 
                    from account creation to meal selection, checkout, and order confirmation.
                  </p>
                  
                  <div className="row g-4">
                    {/* User Flow 1 */}
                    <div className="col-md-6">
                      <div className="userflow-card h-100" style={{ 
                        background: "white",
                        border: "2px solid var(--accent-pink)",
                        borderRadius: "20px",
                        overflow: "hidden",
                        boxShadow: "8px 8px 0 var(--shadow-color)",
                        transition: "all 0.3s ease"
                      }}>
                        <div className="p-3" style={{ background: "var(--pastel-pink)", borderBottom: "2px solid var(--accent-pink)" }}>
                          <h5 className="fw-bold mb-0" style={{ fontSize: "1rem", color: "var(--text-dark)" }}>
                            📍 User Flow: Account Creation → Meal Selection
                          </h5>
                        </div>
                        <div 
                          className="userflow-image-container p-3"
                          onClick={() => openImageModal(userFlowImage, "Meal U User Flow - Account Creation to Meal Selection")}
                          style={{ cursor: "pointer" }}
                        >
                          <img 
                            src={userFlowImage} 
                            alt="User flow diagram showing the path from account creation and onboarding through browsing meals, filtering options, and selecting a meal to add to cart"
                            style={{
                              width: "100%",
                              height: "auto",
                              borderRadius: "12px",
                              transition: "transform 0.2s ease",
                              border: "1px solid #e9ecef"
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = "scale(1.02)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "scale(1)";
                            }}
                          />
                          <div className="text-center mt-2">
                            <span style={{ 
                              fontSize: "0.7rem", 
                              color: "var(--accent-purple)",
                              display: "inline-block",
                              padding: "2px 8px",
                              background: "#f8f9fa",
                              borderRadius: "20px"
                            }}>
                              🔍 Click to enlarge
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* User Flow 2 */}
                    <div className="col-md-6">
                      <div className="userflow-card h-100" style={{ 
                        background: "white",
                        border: "2px solid var(--accent-green)",
                        borderRadius: "20px",
                        overflow: "hidden",
                        boxShadow: "8px 8px 0 var(--shadow-color)",
                        transition: "all 0.3s ease"
                      }}>
                        <div className="p-3" style={{ background: "var(--pastel-mint)", borderBottom: "2px solid var(--accent-green)" }}>
                          <h5 className="fw-bold mb-0" style={{ fontSize: "1rem", color: "var(--text-dark)" }}>
                            ✅ User Flow: Checkout → Order Confirmation
                          </h5>
                        </div>
                        <div 
                          className="userflow-image-container p-3"
                          onClick={() => openImageModal(userFlow2Image, "Meal U User Flow - Checkout to Order Confirmation")}
                          style={{ cursor: "pointer" }}
                        >
                          <img 
                            src={userFlow2Image} 
                            alt="User flow diagram showing the checkout process including cart review, payment method selection, shipping address entry, order submission, and final order confirmation with order number"
                            style={{
                              width: "100%",
                              height: "auto",
                              borderRadius: "12px",
                              transition: "transform 0.2s ease",
                              border: "1px solid #e9ecef"
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = "scale(1.02)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "scale(1)";
                            }}
                          />
                          <div className="text-center mt-2">
                            <span style={{ 
                              fontSize: "0.7rem", 
                              color: "var(--accent-purple)",
                              display: "inline-block",
                              padding: "2px 8px",
                              background: "#f8f9fa",
                              borderRadius: "20px"
                            }}>
                              🔍 Click to enlarge
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* UI Design Concepts */}
                <div>
                  <h4 className="fw-bold mb-3">UX/UI Final Design Concepts</h4>
                  <p className="mb-4">
                    I designed these key screens to address the specific needs of college students, focusing on 
                    affordability, convenience, and ease of use.
                  </p>
                  
                  <div className="row g-4">
                    {uiDesigns.map((design, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="ui-design-card h-100" style={{ 
                          background: "white",
                          border: "2px solid var(--accent-purple)",
                          borderRadius: "20px",
                          overflow: "hidden",
                          boxShadow: "6px 6px 0 var(--shadow-color)",
                          transition: "all 0.3s ease"
                        }}>
                          {/* Image Section */}
                          <div 
                            className="ui-design-image-container"
                            onClick={() => openImageModal(design.image, `${design.title} - Meal U UI Design`)}
                            style={{ cursor: "pointer" }}
                          >
                            <img 
                              src={design.image} 
                              alt={design.alt}
                              style={{
                                width: "100%",
                                height: "250px",
                                objectFit: "cover",
                                objectPosition: "top",
                                display: "block",
                                transition: "transform 0.2s ease"
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.02)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                              }}
                            />
                          </div>
                          
                          {/* Text Section */}
                          <div className="p-4 text-center">
                            <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
                              <span style={{ fontSize: "1.5rem" }}>{design.emoji}</span>
                              <h5 className="fw-bold mb-0" style={{ fontSize: "1rem", color: "var(--text-dark)" }}>{design.title}</h5>
                            </div>
                            <p className="mb-0" style={{ fontSize: "0.85rem", color: "var(--text-body)" }}>{design.desc}</p>
                            <div className="mt-2">
                              <span style={{ 
                                fontSize: "0.7rem", 
                                color: "var(--accent-purple)",
                                display: "inline-block",
                                padding: "2px 8px",
                                background: "#f8f9fa",
                                borderRadius: "20px"
                              }}>
                                🔍 Click to enlarge
                              </span>
                            </div>
                          </div>
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
                    { number: "42", label: "Survey respondents", color: "#9a4b97" },
                    { number: "9", label: "Key research themes", color: "#4a7c6b" },
                    { number: "5", label: "Competitors analyzed", color: "#e49c00" },
                    { number: "4", label: "Team members", color: "#c863be" }
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
                        <strong>Key Achievement:</strong> Designed a student-centered meal delivery service that addresses 
                        the unique needs of college students—combining affordability, convenience, and nutrition 
                        with minimal cooking requirements.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-4 rounded-4 result-quote">
                  <p className="mb-0 fst-italic result-quote-text">
                    "This project taught me the importance of deep user research in creating meaningful solutions. 
                    By understanding the specific challenges college students face—time constraints, limited budgets, 
                    and lack of kitchen resources—we could design a service that truly meets their needs. The 
                    slogan 'Healthy Food = Healthy Brain' captures our mission to support academic success through 
                    better nutrition."
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
                    uxProjects.filter(p => p.id !== "mealu").map((project) => (
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

export default MealU;