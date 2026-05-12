import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

// Import hero image
import timeHeroImage from "../assets/Timemgmt-images/Timemgmt.png";
// Import character images
import femaleCharacter from "../assets/Timemgmt-images/Femalecharacter.png";
import maleCharacter from "../assets/Timemgmt-images/Malecharacter.png";
// Import other project images
import wcagHeroImage from "../assets/WCAG-images/WCAGmainhero.png";
import mealUHeroImage from "../assets/MealU-images/MealUHero.png";
import reactWeatherHeroImage from "../assets/Reactweather-images/Reactweatherhero.png";
import lechaletHeroImage from "../assets/Lechaletbymay-images/Lechaletbymay.png";

function TimeManagementProject() {
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
      image: timeHeroImage,
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

  // Kitchen characters data with actual images
  const kitchenCharacters = [
    {
      name: "Chef Tim",
      role: "Time Management Expert",
      quote: "Cooking up productivity, one recipe at a time!",
      image: maleCharacter,
      alt: "Chef Tim character illustration",
      color: "var(--accent-purple)",
      bgColor: "var(--pastel-purple)"
    },
    {
      name: "Sous Chef Sam",
      role: "Organization Specialist",
      quote: "Let's prep those tasks like ingredients!",
      image: femaleCharacter,
      alt: "Sous Chef Sam character illustration",
      color: "var(--accent-pink)",
      bgColor: "var(--pastel-pink)"
    }
  ];

  // Common kitchen problems
  const kitchenProblems = [
    { problem: "Procrastination", emoji: "⏰", analogy: "Putting off prep work until the last minute", color: "var(--pastel-pink)" },
    { problem: "Multitasking", emoji: "🍳", analogy: "Trying to cook too many dishes at once", color: "var(--pastel-yellow)" },
    { problem: "Unhealthy Habits", emoji: "🔥", analogy: "Burnout from poor workflow", color: "var(--pastel-purple)" },
    { problem: "Distractions", emoji: "📱", analogy: "Kitchen interruptions and noise", color: "var(--pastel-mint)" }
  ];

  // Recipe cards
  const recipes = [
    {
      name: "The Pomodoro Timer",
      technique: "Focused work sprints with breaks",
      analogy: "Cooking in timed intervals, taking rests between courses",
      emoji: "🍅",
      color: "var(--accent-pink)",
      ingredients: ["Timer", "Focus", "Short breaks", "Task list"]
    },
    {
      name: "Time Blocking",
      technique: "Scheduling specific tasks to dedicated time slots",
      analogy: "Prepping ingredients and scheduling when each dish goes in the oven",
      emoji: "📅",
      color: "var(--accent-green)",
      ingredients: ["Calendar", "Priorities", "Buffer time", "Boundaries"]
    },
    {
      name: "The Kanban Board",
      technique: "Visual workflow management",
      analogy: "Organizing ingredients by status: to-prep, in-progress, completed",
      emoji: "📋",
      color: "var(--accent-purple)",
      ingredients: ["Columns", "Tasks", "Progress tracking", "Team visibility"]
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
                <h1 className="hero-title mb-4">The Productivity Kitchen</h1>
                <p className="hero-description" style={{ maxWidth: "100%", marginLeft: 0 }}>
                  A recipe-based time management eLearning module for the State of Michigan IT Department. 
                  Transform productivity techniques into simple, repeatable recipes with two friendly chefs 
                  as your guides through the kitchen of efficient work.
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
                      background: "linear-gradient(135deg, #d8c7ff, #cfe3ff)",
                      padding: "20px"
                    }}
                    onClick={() => openImageModal(timeHeroImage, "The Productivity Kitchen - Time Management eLearning")}
                  >
                    <img
                      src={timeHeroImage}
                      alt="Time Management eLearning platform hero image"
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
                    <span>Junior UX Designer</span>
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
                    <span>Individual Project</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "white", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Tools</span>
                    <span>Figma, Miro, Zoom, Google Workspace</span>
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
                <h3 className="fw-bold mb-4">A Recipe-Based Productivity Adventure</h3>
                <p className="mb-4">
                  <strong>eLearning Design | UX Research | Junior UX Designer</strong> | 12 Weeks
                </p>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Overview</h4>
                  <p className="mb-4">
                    The State of Michigan IT department identified a critical need to support employees in developing stronger 
                    time management and productivity skills. In a fast-paced public sector environment with high workloads 
                    and stretched resources, employees reported feelings of overwhelm, difficulty prioritizing, and challenges 
                    maintaining work-life balance.
                  </p>
                  <div className="highlight-box p-4 rounded-4">
                    <p className="fw-bold mb-0 highlight-text">
                      The result provided a learning module that gives employees 
                      practical and actionable strategies to take control
                       of their time, improve productivity, 
                       and build sustainable work habits.
                    </p>
                  </div>
                </div>

                {/* Meet Your Chefs - Updated with larger images */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Meet Your Chefs</h4>
                  <div className="row g-4">
                    {kitchenCharacters.map((chef, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="chef-card h-100 p-4 rounded-4 text-center" style={{ 
                          background: chef.bgColor,
                          border: `3px solid ${chef.color}`,
                          boxShadow: "8px 8px 0 var(--shadow-color)"
                        }}>
                          <img 
                            src={chef.image} 
                            alt={chef.alt}
                            style={{ 
                              width: "200px", 
                              height: "200px", 
                              objectFit: "contain",
                              marginBottom: "1rem",
                              display: "block",
                              marginLeft: "auto",
                              marginRight: "auto"
                            }}
                          />
                          <h5 className="fw-bold mt-2" style={{ fontSize: "1.3rem", color: "var(--text-dark)" }}>{chef.name}</h5>
                          <p className="mb-2" style={{ fontSize: "0.9rem", color: "var(--accent-dark)" }}>{chef.role}</p>
                          <p className="mb-0 fst-italic" style={{ fontSize: "0.95rem", color: "var(--text-body)" }}>"{chef.quote}"</p>
                        </div>
                      </div>
                    ))}
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
                          IT employees lacked a structured approach to managing daily workload. Existing productivity training 
                          was either too generic or too theoretical, failing to address the specific challenges of government 
                          IT work environments.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="challenge-card p-4 rounded-4 h-100 challenge-card-solution">
                        <h5 className="fw-bold mb-3 challenge-title">The Solution:</h5>
                        <p className="mb-0 challenge-text">
                          Create an engaging, metaphor-driven learning module that transforms abstract time management concepts 
                          into memorable kitchen recipes—making techniques practical, repeatable, and easy to apply.
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
                        <strong>Junior UX Designer</strong> leading end-to-end project execution:
                      </p>
                      <ul className="custom-list">
                        <li>Conducted qualitative user interviews and thematic analysis</li>
                        <li>Performed competitive analysis of existing platforms</li>
                        <li>Synthesized research into design opportunities</li>
                        <li>Developed kitchen metaphor concept and content structure</li>
                        <li>Designed interactive learning experiences</li>
                      </ul>
                    </div>
                    <div className="col-md-5">
                      <div className="tools-card p-4 rounded-4">
                        <h5 className="fw-bold mb-3 tools-title">Tools Used</h5>
                        <div className="d-flex flex-wrap gap-2">
                          {["Figma", "Figjam", "Teams", "Google Workspace"].map((tool, index) => (
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
                  <h4 className="fw-bold mb-3">Competitive Analysis: Coursera</h4>
                  
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="research-card p-4 rounded-4 h-100" style={{ 
                        background: "white",
                        border: "2px solid var(--accent-green)",
                        boxShadow: "6px 6px 0 var(--shadow-color)"
                      }}>
                        <h5 className="fw-bold mb-3" style={{ color: "var(--accent-green)" }}>✅ Strengths</h5>
                        <ul className="custom-list">
                          <li>Strong foundational content covering essential frameworks</li>
                          <li>Flexible, self-paced learning</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="research-card p-4 rounded-4 h-100" style={{ 
                        background: "white",
                        border: "2px solid var(--accent-pink)",
                        boxShadow: "6px 6px 0 var(--shadow-color)"
                      }}>
                        <h5 className="fw-bold mb-3" style={{ color: "var(--accent-pink)" }}>❌ Gaps</h5>
                        <ul className="custom-list">
                          <li>Content too basic—described by users as "common sense"</li>
                          <li>Generic, one-size-fits-all approach</li>
                          <li>Passive learning model (video lectures)</li>
                          <li>No application to specific work contexts</li>
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
                    <strong>Key Insight:</strong> Existing solutions provide theoretical introductions but stop short of helping learners cross the line from <strong>knowing to doing</strong>.
                  </p>
                </div>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">User Interviews: Thematic Analysis</h4>
                  <p className="mb-4">
                    Conducted qualitative interviews with 5 tech professionals to understand their daily struggles:
                  </p>
                  
                  <div className="row g-3">
                    {[
                      { theme: "Struggle for Prioritization", insight: "Inbox overload and environmental distractions block deep work", emoji: "📧" },
                      { theme: "Fragmented Personal Systems", insight: "Everyone has systems, but they're reactive and inconsistent", emoji: "📋" },
                      { theme: "Boundary Challenges", insight: "Inability to say 'no' leads to overcommitment", emoji: "🚫" },
                      { theme: "Environment & Energy", insight: "Productivity depends on workspace and energy peaks", emoji: "⚡" }
                    ].map((item, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="objective-card p-4 rounded-4 h-100">
                          <div className="d-flex align-items-center gap-3 mb-2">
                            <span style={{ fontSize: "2rem" }}>{item.emoji}</span>
                            <h5 className="fw-bold mb-0" style={{ fontSize: "1rem" }}>{item.theme}</h5>
                          </div>
                          <p className="mb-0" style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>{item.insight}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="fw-bold mb-3">Synthesis: Design Opportunities</h4>
                  
                  <div className="row g-3">
                    {[
                      { finding: "Start to prioritize", opportunity: "Introduce techniques for categorizing, prioritzing, and batching tasks to help users take first step toward effective time manangement." },
                      { finding: "Users cannot say 'no'", opportunity: "Educate users on unhealthy work habits, helping them identify problem areas and practice setting boundaries." },
                      { finding: "Environmental distractions", opportunity: "Let users reorganize a simulated workspace and run focused sessions using time-blocking techniques." },
                      { finding: "Passive learning doesn't stick", opportunity: "Implement hands-on exercises, like creating a Kanban board, to practice proven productivity and time-management strategies." }
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

              {/* DESIGN SECTION */}
              <section id="design" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Design</h2>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">The Kitchen Concept</h4>
                  
                  <div className="concept-card p-4 rounded-4 mb-4" style={{ 
                    background: "var(--pastel-purple)",
                    border: "3px solid var(--accent-purple)",
                    boxShadow: "8px 8px 0 var(--shadow-color)"
                  }}>
                    <p className="mb-0">
                      “Designed a kitchen metaphor where two characters guide learners
                       to identify problem areas and apply proven, actionable time management 
                       strategies through interactive ‘recipe books.’”
                    </p>
                  </div>
                </div>

                {/* Part 1: Kitchen Concept Overview */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Part 1: Kitchen Concept Overview</h4>
                  <p className="mb-4">
                    Two chefs introduce the kitchen metaphor, explaining how learners can use practical strategies 
                    and tools to manage their time effectively, increase productivity, and engage with the module 
                    through illustrations of food and nutrition facts.
                  </p>
                </div>

                {/* Part 2: Historical Context */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Part 2: Historical Context</h4>
                  <p className="mb-4">
                    Learners explore the history and evolution of time management, understanding why effective 
                    techniques matter in modern work life.
                  </p>
                </div>

                {/* Part 3: Identifying Problem Areas */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Part 3: Identifying Problem Areas</h4>
                  <p className="mb-4">
                    Users learn to recognize common productivity challenges—six key "kitchen problems"—that can 
                    hinder effective time management.
                  </p>
                  <div className="row g-3">
                    {kitchenProblems.map((item, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="problem-card h-100 p-4 rounded-4" style={{ 
                          background: item.color,
                          border: "2px solid var(--accent-dark)",
                          boxShadow: "6px 6px 0 var(--shadow-color)"
                        }}>
                          <div className="d-flex align-items-center gap-3 mb-2">
                            <span style={{ fontSize: "2.5rem" }}>{item.emoji}</span>
                            <h5 className="fw-bold mb-0" style={{ fontSize: "1.2rem" }}>{item.problem}</h5>
                          </div>
                          <p className="mb-0" style={{ fontSize: "0.95rem" }}>{item.analogy}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Part 4: Recipe Collection of Strategies */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Part 4: Recipe Collection of Strategies</h4>
                  <p className="mb-4">
                    A virtual kitchen shelf presents a curated collection of "recipe books" containing actionable, 
                    proven time management techniques. Learners can select strategies that best address their 
                    identified problem areas.
                  </p>
                  <div className="row g-4">
                    {recipes.map((recipe, index) => (
                      <div className="col-md-4" key={index}>
                        <div className="recipe-card h-100 p-4 rounded-4" style={{ 
                          background: "white",
                          border: `3px solid ${recipe.color}`,
                          boxShadow: "8px 8px 0 var(--shadow-color)"
                        }}>
                          <div className="text-center mb-3">
                            <span style={{ fontSize: "3rem" }}>{recipe.emoji}</span>
                            <h5 className="fw-bold mt-2" style={{ fontSize: "1.2rem" }}>{recipe.name}</h5>
                          </div>
                          <p className="mb-2" style={{ fontSize: "0.9rem", fontWeight: "bold", color: recipe.color }}>
                            {recipe.technique}
                          </p>
                          <p className="mb-3" style={{ fontSize: "0.85rem", lineHeight: "1.5" }}>{recipe.analogy}</p>
                          <div>
                            <p className="fw-bold mb-2" style={{ fontSize: "0.85rem" }}>🧂 Ingredients:</p>
                            <div className="d-flex flex-wrap gap-1">
                              {recipe.ingredients.map((ingredient, i) => (
                                <span key={i} className="badge p-2" style={{ 
                                  background: "var(--pastel-yellow)",
                                  color: "var(--text-dark)",
                                  border: "1px solid var(--accent-dark)",
                                  fontSize: "0.7rem"
                                }}>
                                  {ingredient}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Part 5: Interactive Application */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Part 5: Interactive Application</h4>
                  <p className="mb-4">
                    Learners engage in a drag-and-drop exercise to match common productivity challenges with 
                    appropriate recipe strategies. This simulates real-world decision-making and reinforces 
                    learning through hands-on practice.
                  </p>
                  <div className="interactive-card p-4 rounded-4" style={{ 
                    background: "var(--pastel-mint)",
                    border: "3px solid var(--accent-green)",
                    boxShadow: "8px 8px 0 var(--shadow-color)"
                  }}>
                    <div className="row align-items-center">
                      <div className="col-md-8">
                        <h5 className="fw-bold mb-3" style={{ fontSize: "1.2rem" }}>
                          🎮 Matching Game: Ingredients to Steps
                        </h5>
                        <p className="mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                          Match productivity problems with the appropriate recipe solutions, reinforcing knowledge 
                          through active application.
                        </p>
                      </div>
                      <div className="col-md-4 text-center">
                        <div className="game-preview p-3 rounded-3" style={{ 
                          background: "white",
                          border: "2px solid var(--accent-purple)"
                        }}>
                          <span style={{ fontSize: "3rem" }}>🧩</span>
                          <p className="small mb-0 mt-2 fw-bold">Match the Ingredients</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Part 6: Knowledge Reinforcement */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Part 6: Knowledge Reinforcement</h4>
                  <p className="mb-4">
                    Learners apply the strategies to new scenarios, ensuring techniques are memorable, transferable, 
                    and ready to use in real-life workflow challenges.
                  </p>
                </div>

                <div>
                  <h4 className="fw-bold mb-3">Interface Design Concepts</h4>
                  
                  <div className="row g-3">
                    {[
                      { title: "Kitchen Dashboard", desc: "Welcome screen with chef characters", emoji: "🏠" },
                      { title: "Problem Identification", desc: "Kitchen mishaps interactive menu", emoji: "⚠️" },
                      { title: "Recipe Book", desc: "Collection of productivity techniques", emoji: "📖" },
                      { title: "Ingredients List", desc: "Step-by-step recipe instructions", emoji: "🥕" },
                      { title: "Matching Game", desc: "Drag-and-drop knowledge check", emoji: "🎮" },
                      { title: "Progress Tracker", desc: "Learner achievements and badges", emoji: "⭐" }
                    ].map((item, index) => (
                      <div className="col-md-6 col-lg-4" key={index}>
                        <div className="interface-card h-100 p-4 rounded-4 text-center" style={{ 
                          background: "white",
                          border: "2px solid var(--accent-purple)",
                          boxShadow: "6px 6px 0 var(--shadow-color)"
                        }}>
                          <span style={{ fontSize: "2.5rem" }}>{item.emoji}</span>
                          <h5 className="fw-bold mt-2" style={{ fontSize: "1rem" }}>{item.title}</h5>
                          <p className="mb-0" style={{ fontSize: "0.8rem" }}>{item.desc}</p>
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
                    { number: "5", label: "User interviews conducted", color: "#9a4b97" },
                    { number: "3", label: "Core recipe techniques", color: "#4a7c6b" },
                    { number: "12", label: "Week design process", color: "#e49c00" },
                    { number: "100%", label: "Research-driven design", color: "#c863be" }
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
                        <strong>Key Achievement:</strong> Transformed abstract time management concepts into memorable, 
                        actionable recipes tailored specifically for government IT employees' unique challenges.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-4 rounded-4 result-quote">
                  <p className="mb-0 fst-italic result-quote-text">
                    "This project taught me that the most effective 
                    learning experiences come from deep user research, 
                    and that I can design a solution that speaks directly 
                    to their needs. The kitchen metaphor makes productivity
                     feel approachable, not overwhelming."
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
                    uxProjects.filter(p => p.id !== "time").map((project) => (
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

export default TimeManagementProject;