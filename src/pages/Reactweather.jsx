import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

// Import hero image
import weatherHeroImage from "../assets/Reactweatherhero.png";
// Import other project images
import wcagHeroImage from "../assets/WCAGmainhero.png";
import timeManagementImage from "../assets/Timemgmt.png";
import mealUHeroImage from "../assets/MealUHero.png";
import lechaletHeroImage from "../assets/Lechaletbymay.png";

function ReactWeather() {
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
      image: weatherHeroImage,
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
      const sections = ["overview", "development", "features", "challenges", "other"];
      
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
    { id: "development", label: "Development", icon: "⚛️" },
    { id: "features", label: "Features", icon: "✨" },
    { id: "challenges", label: "Challenges", icon: "🚀" },
    { id: "other", label: "Other Projects", icon: "📁" }
  ];

  // Tech stack data
  const techStack = [
    { name: "React", icon: "⚛️", description: "Front-end library for building UI components" },
    { name: "Vite", icon: "⚡", description: "Build tool and development server" },
    { name: "OpenWeatherMap API", icon: "🌤️", description: "Weather data and 5-day forecast" },
    { name: "Components", icon: "🧩", description: "Modular, reusable building blocks" },
    { name: "Event Handling", icon: "🎯", description: "User interaction management" },
    { name: "Axios", icon: "📡", description: "Promise-based HTTP client for API calls" },
    
  ];

  // Key features
  const keyFeatures = [
    { feature: "Search by Location", description: "Search by city/state, zip code, address, or landmark", emoji: "🔍" },
    { feature: "Current Weather", description: "Temperature, conditions, humidity, wind speed, and feels like", emoji: "🌡️" },
    { feature: "5-Day Forecast", description: "Daily temperature highs/lows and weather conditions", emoji: "📅" },
    { feature: "API Integration", description: "Data fetched from OpenWeatherMap using native JavaScript fetch() with secure environment variables", emoji: "🌐" },
    { feature: "Error Handling", description: "Graceful fallback to previous city if search fails, preventing app crashes", emoji: "⚠️" },
  ];

 // Technical challenges
const technicalChallenges = [
  { challenge: "API Key Security", solution: "Used .env file with Vite's import.meta.env to hide API keys from version control", emoji: "🔐" },
  { challenge: "City Search Fallback", solution: "Implemented fallback logic that reverts to the last valid city when a search fails", emoji: "🔄" },
  { challenge: "Forecast Data Processing", solution: "Created custom logic to average 3-hour forecast data into daily summaries and identify dominant weather patterns", emoji: "📊" },
  { challenge: "Error Handling", solution: "Added catch blocks to gracefully handle API failures without crashing the app", emoji: "⚠️" },
  { challenge: "State Management", solution: "Used useState hooks for weather data, forecast data, city, and search input with useEffect triggering API calls on city changes", emoji: "📦" },
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
                <h1 className="hero-title mb-4">React Weather App</h1>
                <p className="hero-description" style={{ maxWidth: "100%", marginLeft: 0 }}>
                  A fully-featured weather application built with React that provides real-time 
                  weather data and 5-day forecasts for any location. Users can search by city, 
                  zip code, address, or landmark, with data powered by the OpenWeatherMap API.
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
                    onClick={() => openImageModal(weatherHeroImage, "React Weather App Interface")}
                  >
                    <img
                      src={weatherHeroImage}
                      alt="React Weather App - Weather forecast interface"
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
                    <span>Front-End Developer</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "white", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Timeline</span>
                    <span>February 2026</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "white", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Team</span>
                    <span>Individual Project</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3 w-100" style={{ background: "white", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Tools</span>
                    <span>React, Vite, OpenWeatherMap, Axios</span>
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
                <h3 className="fw-bold mb-4">Real-Time Weather at Your Fingertips</h3>
                <p className="mb-4">
                  <strong>React Development | API Integration | Front-End Engineering</strong> | February 2026
                </p>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Overview</h4>
                  <p className="mb-4">
                   I was tasked with creating a weather application using React and Vite
                    that allows users to search for any location and view current 
                    weather details using OpenWeather API integration. 
                    Building on these requirements, I expanded the functionality 
                    to include a 5-day forecast, resulting in a comprehensive 
                    weather application that delivers a complete picture of
                     upcoming conditions.
                  </p>
                  <div className="highlight-box p-4 rounded-4">
                    <p className="fw-bold mb-0 highlight-text">
                      The result is a fully functional weather app that handles search by any location 
                      type, displays detailed weather information, and provides a 5-day forecast with 
                      clean, responsive UI.
                    </p>
                  </div>
                </div>

                {/* Project Requirements */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Project Requirements</h4>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="challenge-card p-4 rounded-4 h-100 challenge-card-problem">
                        <h5 className="fw-bold mb-3 challenge-title">Core Requirements:</h5>
                        <ul className="custom-list" style={{ fontSize: "0.95rem" }}>
                          <li>Load one-day weather details for the default location on initial render</li>
                          <li>A search bar that allows a user to specify a new location</li>
                          <li>Multiple components with destructured props</li>
                          <li>API calls using fetch</li>
                          
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="challenge-card p-4 rounded-4 h-100 challenge-card-solution">
                        <h5 className="fw-bold mb-3 challenge-title">Bonus Features:</h5>
                        <ul className="custom-list" style={{ fontSize: "0.95rem" }}>
                          <li>5-day forecast API integration</li>
                          <li>Loading states and error handling</li>
                          <li>User friendly UI and weather icons based on current conditions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Tech Stack</h4>
                  <div className="row g-3">
                    {techStack.map((tech, index) => (
                      <div className="col-md-4" key={index}>
                        <div className="objective-card p-3 rounded-4 text-center h-100">
                          <span style={{ fontSize: "2rem" }}>{tech.icon}</span>
                          <h5 className="fw-bold mt-2 mb-2" style={{ fontSize: "1rem" }}>{tech.name}</h5>
                          <p className="mb-0" style={{ fontSize: "0.85rem" }}>{tech.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* My Role */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">My Role</h4>
                  <div className="row">
                    <div className="col-md-7">
                      <p className="mb-3">
                        <strong>Front-End Developer</strong> responsible for:
                      </p>
                      <ul className="custom-list">
                        <li>Building React components and state management</li>
                        <li>Integrating OpenWeatherMap API for weather data</li>
                        <li>Handling API and loading states</li>
                        <li>Managing environment variables for API security</li>
                      </ul>
                    </div>
                    <div className="col-md-5">
                      <div className="tools-card p-4 rounded-4">
                        <h5 className="fw-bold mb-3 tools-title">Tools & Technologies</h5>
                        <div className="d-flex flex-wrap gap-2">
                          {["React", "Axios", "Vite", "OpenWeatherMap", "API Integration"].map((tool, index) => (
                            <span key={index} className="custom-badge">{tool}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* DEVELOPMENT SECTION */}
              <section id="development" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Development Process</h2>

                {/* API Integration */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">API Integration</h4>
                  <p className="mb-4">
                    The app integrates OpenWeatherMap API to provide comprehensive weather data:
                  </p>
                  
                  <div className="row g-4 mb-4">
                    <div className="col-md-6">
                      <div className="insight-card p-4 rounded-4 h-100">
                        <div className="text-center mb-3">
                          <span style={{ fontSize: "2rem" }}>🌤️</span>
                        </div>
                        <h5 className="fw-bold text-center mb-3 insight-title">OpenWeatherMap API</h5>
                        <p className="mb-2 insight-text"><strong>Endpoints used:</strong></p>
                        <ul className="small" style={{ fontSize: "0.85rem" }}>
                          <li>Current Weather: <code>/forecast?q={"{city}"}&units=imperial&appid={"{API_KEY}"}</code></li>
                           </ul>
                        <p className="mt-2 mb-0 small insight-text">
                          <strong>Data provided:</strong> Real-time temperature, humidity, wind speed, pressure, weather conditions
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="concept-card p-4 rounded-4 h-100">
                        <div className="text-center mb-3">
                          <span style={{ fontSize: "2rem" }}>📅</span>
                        </div>
                        <h5 className="fw-bold text-center mb-3 concept-title">5-Day Forecast</h5>
                        <p className="mb-2 concept-text"><strong>Endpoint used:</strong></p>
                        <ul className="small" style={{ fontSize: "0.85rem" }}>
                          <li>Current and future forecast: <code>/forecast?q={"{city}"}&units=imperial&appid={"{API_KEY}"}</code></li>
                        </ul>
                        <p className="mt-2 mb-0 small concept-text">
                          <strong>Converts:</strong> 3-hour interval forecasts processed into daily averages and dominant weather patterns
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Environment Variables */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">API Security</h4>
                  <div className="security-card p-4 rounded-4" style={{ 
                    background: "var(--pastel-mint)",
                    border: "2px solid var(--accent-green)",
                    boxShadow: "6px 6px 0 var(--shadow-color)"
                  }}>
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <span style={{ fontSize: "2rem" }}>🔐</span>
                      <h5 className="fw-bold mb-0" style={{ fontSize: "1.1rem" }}>Environment Variables</h5>
                    </div>
                    <p className="mb-3">
                      API keys were stored securely using a <code>.env.local</code> file to prevent exposure:
                    </p>
                    <div className="code-block p-3 rounded-3 mb-3" style={{ 
                      background: "#1a1a1a",
                      color: "#e0e0e0",
                      fontFamily: "monospace",
                      fontSize: "0.8rem"
                    }}>
                      <pre style={{ margin: 0 }}>VITE_WEATHER_API_KEY=your_api_key_here</pre>
                    </div>
                    <p className="mb-0 small text-muted">✅ <strong>.gitignore</strong> configured to exclude .env.local from commits</p>
                  </div>
                </div>
              </section>

              {/* FEATURES SECTION */}
              <section id="features" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Key Features</h2>

                <div className="row g-3 mb-4">
                  {keyFeatures.map((feature, index) => (
                    <div className="col-md-6" key={index}>
                      <div className="feature-card h-100 p-4 rounded-4" style={{ 
                        background: "white",
                        border: "2px solid var(--accent-purple)",
                        boxShadow: "6px 6px 0 var(--shadow-color)"
                      }}>
                        <div className="d-flex align-items-center gap-3 mb-2">
                          <span style={{ fontSize: "2rem" }}>{feature.emoji}</span>
                          <h5 className="fw-bold mb-0" style={{ fontSize: "1.1rem" }}>{feature.feature}</h5>
                        </div>
                        <p className="mb-0" style={{ fontSize: "0.9rem" }}>{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* CHALLENGES SECTION */}
              <section id="challenges" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Challenges & Solutions</h2>

                <div className="row g-3 mb-4">
                  {technicalChallenges.map((item, index) => (
                    <div className="col-md-6" key={index}>
                      <div className="challenge-solution-card h-100 p-4 rounded-4" style={{ 
                        background: "white",
                        border: `2px solid ${index % 2 === 0 ? 'var(--accent-pink)' : 'var(--accent-green)'}`,
                        boxShadow: "6px 6px 0 var(--shadow-color)"
                      }}>
                        <div className="d-flex align-items-center gap-3 mb-3">
                          <span style={{ fontSize: "2rem" }}>{item.emoji}</span>
                          <h5 className="fw-bold mb-0" style={{ fontSize: "1.1rem" }}>{item.challenge}</h5>
                        </div>
                        <p className="mb-0" style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
                          <strong>Solution:</strong> {item.solution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* RESULTS SECTION */}
<section id="results" className="mb-5 pb-4">
  <h2 className="text-uppercase small fw-bold mb-4">Results & Key Learnings</h2>
  
  <div className="row g-3 text-center mb-4">
    {[
      { number: "2", label: "API endpoints integrated", color: "#9a4b97" },
      { number: "1", label: "Single API (OpenWeatherMap)", color: "#4a7c6b" },
      { number: "5", label: "Day forecast", color: "#e49c00" },
      { number: "100%", label: "No console errors", color: "#c863be" }
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
          <strong>Project Completion:</strong> Successfully delivered a fully functional weather app 
          meeting all core requirements, with bonus features including a 5-day forecast, dynamic weather icons, 
          sunrise/sunset times, and precipitation data. The app includes smart fallback handling that 
          reverts to the last valid city when a search fails.
        </p>
      </div>
    </div>
  </div>
  
  <div className="mt-4 p-4 rounded-4 result-quote">
    <p className="mb-0 fst-italic result-quote-text">
      This project deepened my understanding of React hooks (useState, useEffect), 
      API integration with fetch(), and state management. I gained experience with 
      error handling fallbacks, securing API keys via Vite environment variables,
       and transforming raw data into user-friendly formats. The 5-day forecast 
       required custom logic to average 3-hour intervals into daily summaries with
        dominant weather patterns.
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
                    devProjects.filter(p => p.id !== "weather").map((project) => (
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

export default ReactWeather;