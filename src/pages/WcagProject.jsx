import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

// Import the hero image from assets
import wcagHeroImage from "../assets/WCAG-images/wcagmainhero.png";
// Import hero video
import wcagHeroVideo from "../videos/Wcagherovid.mp4";
// Import the final logo (SVG)
import finalLogo from "../assets/WCAG-images/Finallogo.svg";
// Import pre-logo SVGs
import prelogo1 from "../assets/WCAG-images/Prelogo1.svg";
import prelogo2 from "../assets/WCAG-images/Prelogo2.svg";
import prelogo3 from "../assets/WCAG-images/Prelogo3.svg";
import prelogo4 from "../assets/WCAG-images/Prelogo4.svg";
// Import final design images
import wcagHome from "../assets/WCAG-images/Wcaghome.svg";
import wcagProfile from "../assets/WCAG-images/Wcagprofile.svg";
import operableGalaxy from "../assets/WCAG-images/Operablegalaxy.svg";
import solarSystemView from "../assets/WCAG-images/Solarsystemview.svg";
import understandableGalaxy from "../assets/WCAG-images/Understandablegalaxy.svg";
import wcagExploration from "../assets/WCAG-images/Wcagexploration.svg";
// Import visual architecture image
import galaxyArchitecture from "../assets/WCAG-images/Galaxyarchitecture.svg";
// Import lesson sample video from videos folder
import lessonSampleVideo from "../videos/Lessonsample2.mp4";
// Import other project images
import timeManagementImage from "../assets/Timemgmt-images/Timemgmt.png";
import mealUHeroImage from "../assets/MealU-images/MealUHero.png";
import reactWeatherHeroImage from "../assets/Reactweather-images/Reactweatherhero.png";
import lechaletHeroImage from "../assets/Lechaletbymay-images/Lechaletbymay.png";

function WcagProject() {
  const [activeSection, setActiveSection] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState("ux");
  const [heroVideoPlaying, setHeroVideoPlaying] = useState(true);
  const videoRef = useRef(null);
  const heroVideoRef = useRef(null);

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
    if (modalOpen || videoModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen, videoModalOpen]);

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

  // Open video modal
  const openVideoModal = (videoSrc, videoTitle) => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    setSelectedVideo({ src: videoSrc, title: videoTitle });
    setVideoModalOpen(true);
  };

  // Close video modal
  const closeVideoModal = () => {
    setVideoModalOpen(false);
    setSelectedVideo(null);
  };

  // Toggle play/pause for preview video
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  // Toggle play/pause for hero video
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

  // UX Projects data
  const uxProjects = [
    {
      id: "wcag",
      title: "WCAG 2.2 eLearning Platform",
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

  // Final designs data
  const finalDesigns = [
    { 
      title: "Homepage", 
      desc: "Welcoming space-themed dashboard introducing the learning journey", 
      emoji: "🏠",
      image: wcagHome,
      alt: "WCAG eLearning platform homepage design"
    },
    { 
      title: "Profile Page", 
      desc: "Learner progress tracking across galaxies and planets", 
      emoji: "👤",
      image: wcagProfile,
      alt: "WCAG learner profile page with progress tracking"
    },
    { 
      title: "Operable Galaxy", 
      desc: "Main hub for operable principle guidelines", 
      emoji: "🌌",
      image: operableGalaxy,
      alt: "Operable galaxy interface showing WCAG operable guidelines"
    },
    { 
      title: "Solar System View", 
      desc: "Guideline-level navigation with progress indicators", 
      emoji: "☀️",
      image: solarSystemView,
      alt: "Solar system view showing guideline categories"
    },
    { 
      title: "Understandable Galaxy", 
      desc: "Clean, focused learning environment for understandable principle", 
      emoji: "🧠",
      image: understandableGalaxy,
      alt: "Understandable galaxy interface for cognitive accessibility"
    },
    { 
      title: "Planet Exploration", 
      desc: "Individual success criteria with interactive challenges", 
      emoji: "🪐",
      image: wcagExploration,
      alt: "Planet exploration view with interactive learning challenges"
    },
  ];

  // Pre-logo data
  const preLogos = [
    {
      id: 1,
      src: prelogo1,
      alt: "Ally typeface with ones logo concept",
      concept: '"Ally" typeface with ones',
      response: "67% confused by the number references",
      badgeColor: "danger"
    },
    {
      id: 2,
      src: prelogo2,
      alt: "Four colorful dots with person logo concept",
      concept: "Four colorful dots + person",
      response: "100% remembered the colorful dots",
      badgeColor: "success"
    },
    {
      id: 3,
      src: prelogo3,
      alt: "Letter A with Saturn ring logo concept",
      concept: "Letter A with Saturn ring",
      response: "100% associated with space",
      badgeColor: "success"
    },
    {
      id: 4,
      src: prelogo4,
      alt: "Ally with dashed outline logo concept",
      concept: '"Ally" with dashed outline',
      response: "60% interpreted as 'helping others'",
      badgeColor: "warning"
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

      {/* Video Modal */}
      {videoModalOpen && selectedVideo && (
        <div 
          onClick={closeVideoModal}
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
              backgroundColor: "black",
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            }}
          >
            <button
              onClick={closeVideoModal}
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
              backgroundColor: "black"
            }}>
              <h3 style={{ 
                margin: "0 0 16px 0", 
                color: "white",
                fontSize: "1.5rem"
              }}>
                {selectedVideo.title}
              </h3>
              <video 
                controls
                autoPlay
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "8px",
                  maxHeight: "70vh"
                }}
              >
                <source src={selectedVideo.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p style={{
                margin: "16px 0 0 0",
                color: "rgba(255,255,255,0.7)",
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

      {/* HERO SECTION - ALIGNED WITH MAIN CONTENT */}
      <section className="hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="hero-text-wrapper mb-5 text-start">
            <h1 className="hero-title mb-4">WCAG 2.2 eLearning Platform</h1>
            <p className="hero-description" style={{ maxWidth: "100%", marginLeft: 0 }}>
              A space-themed learning platform that turns WCAG 2.2 guidelines
              into an engaging cosmic journey. Features 86 hands-on challenges
              and has trained 250+ Fortune 500 learners
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
                    <source src={wcagHeroVideo} type="video/mp4" />
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
                    <span>Junior UX Designer</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Team</span>
                    <span>4 design collaborators</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Timeline</span>
                    <span>Jan – Oct 2024</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Tools</span>
                    <span>Articulate Storyline 360, Figma, Adobe Illustrator, Teams, VS Code</span>
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
                <h3 className="fw-bold mb-4">A Space-Themed Accessibility Adventure</h3>
                <p className="mb-4">
                  <strong>Learning Design | Web Design | Junior UX Designer</strong>
                </p>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Overview</h4>
                  <p className="mb-4">
                    A space-themed learning platform that transforms WCAG 2.2 guidelines
                    into an engaging cosmic journey, organizing content into galaxies, 
                    solar systems, and planets to help designers, developers, and testers
                    navigate accessibility without feeling overwhelmed.
                  </p>
                  <div className="highlight-box p-4 rounded-4">
                    <p className="fw-bold mb-0 highlight-text">
                      The result provided a training solution adopted by Fortune 500 companies, 
                      engaging 250+ learners through 86 hands-on challenges.
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
                          Learners consistently struggled to design, test, and evaluate web applications
                          against WCAG 2.2 guidelines. Existing resources were dense, jargon-heavy that
                          lacked visual examples, and left users feeling overwhelmed 
                          by the volume of information.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="challenge-card p-4 rounded-4 h-100 challenge-card-solution">
                        <h5 className="fw-bold mb-3 challenge-title">The Solution:</h5>
                        <p className="mb-0 challenge-text">
                          Create a practical, gamified learning platform that breaks down
                          accessibility guidelines into digestible, 
                          interactive experiences which in turn will make learning feel
                          like exploration rather than memorization.
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
                        <strong>Junior UX Designer</strong> contributing to:
                      </p>
                      <ul className="custom-list">
                        <li>Brand identity design</li>
                        <li>E-learning design and development</li>
                        <li>UI design</li>
                        <li>Content strategy and organization</li>
                        <li>Collaborative design iterations with senior team members</li>
                      </ul>
                    </div>
                    <div className="col-md-5">
                      <div className="tools-card p-4 rounded-4">
                        <h5 className="fw-bold mb-3 tools-title">Tools Used</h5>
                        <div className="d-flex flex-column gap-2">
                          {["Articulate Storyline 360", "Figma", "Adobe Illustrator", "Teams", "VS Code"].map((tool, index) => (
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
                  <h4 className="fw-bold mb-3">Learning Objectives</h4>
                  <p className="mb-4">By the end of this course, learners should be able to:</p>
                  <div className="row g-3">
                    {[
                      { number: "01", text: "<strong>Understand</strong> the importance of web accessibility and the principles guiding WCAG" },
                      { number: "02", text: "<strong>Apply</strong> WCAG 2.1 and 2.2 guidelines in web design, recognizing good and bad implementation examples" },
                      { number: "03", text: "<strong>Develop</strong> testing strategies to ensure WCAG compliance" },
                      { number: "04", text: "<strong>Troubleshoot</strong> common accessibility issues and maintain ongoing reviews" }
                    ].map((item, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="objective-card p-4 rounded-4 h-100">
                          <span className="badge mb-2 objective-badge">{item.number}</span>
                          <p className="mb-0 mt-2 objective-text" dangerouslySetInnerHTML={{ __html: item.text }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="fw-bold mb-3">Brand Research & Concept Development</h4>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="insight-card p-4 rounded-4 h-100">
                        <h5 className="fw-bold mb-3 insight-title">The Insight:</h5>
                        <p className="mb-0 insight-text">
                          Through user research and surveys, we discovered learners felt overwhelmed by scattered, text-heavy accessibility resources. They craved structure, visuals, and a welcoming environment.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="concept-card p-4 rounded-4 h-100">
                        <h5 className="fw-bold mb-3 concept-title">The Concept:</h5>
                        <p className="mb-0 concept-text">
                          I participated in a 12-week exploration of visual metaphors through iterative design and user testing. The space theme emerged as the clear winner—transforming abstract guidelines into a navigable universe.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* DESIGN SECTION */}
              <section id="design" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Design</h2>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Logo Development</h4>
                  <p className="mb-4">I helped conduct 5-second tests with users to refine our visual identity:</p>
                  
                  <div className="row g-3 mb-4">
                    {preLogos.map((logo) => (
                      <div className="col-md-6" key={logo.id}>
                        <div className="logo-card h-100 p-4 rounded-4">
                          <div className="text-center mb-3">
                            <img src={logo.src} alt={logo.alt} className="img-fluid" style={{ maxHeight: "80px", objectFit: "contain" }} />
                          </div>
                          <p className="fw-bold mb-2 text-center logo-concept">{logo.concept}</p>
                          <div className="text-center">
                            <span className={`badge p-2 rounded-pill logo-badge logo-badge-${logo.badgeColor}`}>
                              {logo.response}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="final-logo-card p-4 rounded-4">
                    <div className="row align-items-center">
                      <div className="col-md-8">
                        <h5 className="fw-bold mb-3 final-logo-title">✨ The Final Logo:</h5>
                        <p className="mb-0 final-logo-text">
                          A clean, space-inspired identity featuring "ally" resting on a planet with 
                          four orbiting colorful dots. Each dot represents both the four WCAG principles and 
                          our solar system metaphor.
                        </p>
                      </div>
                      <div className="col-md-4 text-center mt-3 mt-md-0">
                        <img src={finalLogo} alt="Final Logo" className="img-fluid rounded-3" style={{ maxWidth: "100%", maxHeight: "100px" }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Visual Architecture</h4>
                  <p className="mb-4">
                    The space theme isn't just aesthetic, it's functional information architecture that I helped develop. 
                    The visual hierarchy uses a cosmic metaphor to organize WCAG content into digestible chunks:
                  </p>

                  <div className="row g-3 mt-2">
                    {[
                      { emoji: "🌌", title: "Galaxies", desc: "The four core WCAG principles (Perceivable, Operable, Understandable, Robust)" },
                      { emoji: "☀️", title: "Solar Systems", desc: "Individual guidelines within each principle (e.g., Keyboard Accessible, Time-based Media)" },
                      { emoji: "🪐", title: "Planets", desc: "Specific success criteria and checkpoints at each level (A, AA, AAA)" },
                      { emoji: "🌠", title: "Universes", desc: "The complete learning ecosystem across all 86 challenges" }
                    ].map((item, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="architecture-card h-100 p-4 rounded-4 text-center">
                          <span className="architecture-emoji">{item.emoji}</span>
                          <h5 className="fw-bold mt-2 architecture-title">{item.title}</h5>
                          <p className="mb-0 architecture-desc">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <p className="mt-4">
                    This nested structure helped users visualize relationships between concepts without feeling buried in information. 
                    I contributed to organizing content into these digestible chunks and designing the visual hierarchy that makes 
                    complex accessibility guidelines feel intuitive and explorable.
                  </p>

                  <div className="architecture-image-container mt-4" onClick={() => openImageModal(galaxyArchitecture, "Galaxy Architecture - WCAG Content Structure")}>
                    <img src={galaxyArchitecture} alt="Galaxy Architecture" className="img-fluid rounded-3 architecture-image" />
                    <div className="mt-3"><span className="enlarge-hint">🔍 Click to enlarge</span></div>
                  </div>
                </div>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Content Creation</h4>
                  <p className="mb-4">With a team of designers, we designed <strong>86 unique interfaces</strong>, creating interactive and intuitive challenges.</p>
                  
                  <div className="content-card p-4 rounded-4 mb-4">
                    <h5 className="fw-bold mb-3 content-card-title">Sample Learning Challenge:</h5>
                    <p className="mb-3 content-card-text">
                      Each guideline includes an "Understand" and "Explore" page where learners encounter micro-learning of each lesson, followed by interactive testing scenarios. This transforms passive reading into active skill-building.
                    </p>
                    <p className="fw-bold mb-2 content-card-subtitle">Built in Articulate Storyline 360, each lesson combines:</p>
                    <ul className="custom-list content-card-list">
                      <li>Visual examples of accessibility principles</li>
                      <li>Interactive testing scenarios</li>
                      <li>Immediate feedback loops</li>
                      <li>Real-world application exercises</li>
                    </ul>
                  </div>
                  
                  <div className="mb-3"><p className="video-instruction">Press Play to see a sample of a lesson!</p></div>

                  <div className="video-container mb-4"
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "16px 16px 0 var(--shadow-color)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "8px 8px 0 var(--shadow-color)"; }}
                  >
                    <div className="video-wrapper">
                      <video ref={videoRef} className="sample-video" loop playsInline>
                        <source src={lessonSampleVideo} type="video/mp4" />
                      </video>
                      <button onClick={togglePlayPause} className="video-play-button"><span>{isPlaying ? "⏸️" : "▶️"}</span></button>
                      <button onClick={() => openVideoModal(lessonSampleVideo, "Sample Learning Challenge")} className="video-expand-button"><span>⛶</span></button>
                    </div>
                    <div className="mt-3"><span className="video-label">🎬 Sample Learning Challenge Demo</span></div>
                  </div>
                </div>

                <div>
                  <h4 className="fw-bold mb-3">Final Interface Designs</h4>
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
                  <p className="mt-4">I designed multiple interface screens, ensuring each UI interaction across every lesson adhered to WCAG principles.</p>
                </div>
              </section>

                            {/* RESULTS SECTION */}
              <section id="results" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Results</h2>
                
                <div className="row g-3 text-center mb-4">
                  {[
                    { number: "250+", label: "Fortune 500 learners trained", color: "#9a4b97" },
                    { number: "86", label: "Hands-on learning challenges", color: "#4a7c6b" },
                    { number: "4", label: "Galaxies", color: "#e49c00" },
                    { number: "13", label: "Solar Systems", color: "#c863be" }
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
                      <p className="mb-0 result-highlight-text"><strong>86 planets</strong> of content organized and delivered</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-4 rounded-4 result-quote">
                  <p className="mb-0 fst-italic result-quote-text">
                    As a junior UX designer on this project, I gained valuable experience in translating complex technical requirements into accessible, engaging learning experiences—while collaborating with a cross-functional team to deliver a product that makes web accessibility truly accessible.
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

export default WcagProject;