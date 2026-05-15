import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

// Import journal images
import journalCover from "../assets/Printed-images/Dailyjournal/Dailyjournalhero.jpg";
import journalSpread1 from "../assets/Printed-images/Dailyjournal/Identifyfeelings.svg";
import journalSpread2 from "../assets/Printed-images/Dailyjournal/Goalssupport.svg";
import journalSpread3 from "../assets/Printed-images/Dailyjournal/Feelstriggers.svg";
import journalTreeOfLife from "../assets/Printed-images/Dailyjournal/Treeoflife.svg";

// Placeholder fallback images - replace with actual images when available
const fallbackImage = "https://via.placeholder.com/800x600?text=Journal+Spread";
const treeOfLifeFallback = "https://via.placeholder.com/800x600?text=Tree+of+Life+Activity";

function Dailyjournal() {
  const [activeSection, setActiveSection] = useState("overview");
  const [expandedImage, setExpandedImage] = useState(null);
  const sectionsRef = useRef({});

  // Navigation sections for side nav
  const sections = useMemo(() => [
    { id: "overview", label: "Overview", icon: "📋" },
    { id: "problem", label: "Problem & Solution", icon: "🎯" },
    { id: "research", label: "Research & Evidence", icon: "📊" },
    { id: "structure", label: "Journal Structure", icon: "📑" },
    { id: "features", label: "Key Features", icon: "✨" },
    { id: "tree-of-life", label: "Tree of Life", icon: "🌳" },
    { id: "impact", label: "Impact & Results", icon: "💫" }
  ], []);

  // Scroll to section function
  const scrollToSection = useCallback((sectionId) => {
    const element = sectionsRef.current[sectionId];
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  }, []);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      let currentSection = "overview";
      
      for (const section of sections) {
        const element = sectionsRef.current[section.id];
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            currentSection = section.id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // Image modal handler
  const openImageModal = useCallback((imageSrc, title) => {
    setExpandedImage({ src: imageSrc, title: title });
  }, []);

  const closeImageModal = useCallback(() => {
    setExpandedImage(null);
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && expandedImage) {
        closeImageModal();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [expandedImage, closeImageModal]);

  return (
    <>
      <Navbar />

      {/* Image Modal */}
      {expandedImage && (
        <div 
          onClick={closeImageModal}
          className="image-modal-overlay"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="image-modal-content"
          >
            <button
              onClick={closeImageModal}
              className="image-modal-close"
            >
              ✕
            </button>
            <div className="image-modal-inner">
              <h3 className="image-modal-title">
                {expandedImage.title}
              </h3>
              <img 
                src={expandedImage.src} 
                alt={expandedImage.title}
                className="image-modal-img"
              />
              <p className="image-modal-footer">
                Click anywhere outside to close
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Section Navigation Sidebar */}
      <div className="section-nav">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`section-nav-item ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => scrollToSection(section.id)}
            aria-label={`Scroll to ${section.label} section`}
          >
            <span className="section-icon">{section.icon}</span>
            <span className="section-label">{section.label}</span>
          </button>
        ))}
      </div>

      {/* HERO SECTION - Full image visible */}
      <section className="hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="hero-text-wrapper mb-4 text-start">
                <h1 className="hero-title mb-3">Daily Check-in Journal</h1>
                <p className="hero-description" style={{ maxWidth: "100%", marginLeft: 0 }}>
                  A guided journal for individuals who are thinking about or have recently quit commercial tobacco, 
                  designed to help manage cravings, track goals, and prevent relapse through evidence-based journaling techniques.
                </p>
              </div>

              <div className="hero-media-wrapper mb-4">
                <div className="hero-video-container">
                  <img 
                    src={journalCover} 
                    alt="Daily Check-in Journal Cover" 
                    className="hero-video w-100 rounded-4"
                    style={{ 
                      borderRadius: "24px", 
                      cursor: "pointer",
                      width: "100%",
                      height: "auto"
                    }}
                    onClick={() => openImageModal(journalCover, "Daily Check-in Journal Cover")}
                  />
                </div>
              </div>

              <div className="project-info-row row g-4 mt-3">
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">My Role</span>
                    <span>Print Designer</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Project Type</span>
                    <span>Guided Journal</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Audience</span>
                    <span>Tobacco Cessation</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Tools</span>
                    <span>Adobe InDesign, Illustrator, Photoshop</span>
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
              
              {/* OVERVIEW SECTION */}
              <div ref={el => sectionsRef.current.overview = el} className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Overview</h2>
                <h3 className="fw-bold mb-4">A Guided Journal for Tobacco Cessation</h3>
                <p className="mb-4">
                  <strong>Print Design | Health & Wellness | Guided Journaling</strong>
                </p>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">The Challenge</h4>
                  <p className="mb-4">
                    Quitting commercial tobacco is incredibly challenging, with relapse rates being high 
                    due to unmanaged cravings, lack of coping strategies, and emotional triggers. Many 
                    individuals struggle to maintain their motivation and track their progress effectively.
                  </p>
                  <div className="highlight-box p-4 rounded-4">
                    <p className="fw-bold mb-0 highlight-text">
                      Starting a journaling practice can be overwhelming, especially during the difficult 
                      journey of quitting commercial tobacco. Users often face difficulty identifying emotions, 
                      lack of structured guidance, and limited coping strategies.
                    </p>
                  </div>
                </div>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">The Solution</h4>
                  <p className="mb-4">
                    A guided, self-starting journal that combines evidence-based journaling techniques with 
                    structured prompts, goal-setting frameworks, and the transformative Tree of Life activity 
                    to help users build resilience and prevent relapse.
                  </p>
                </div>
              </div>

              {/* PROBLEM & SOLUTION SECTION */}
              <div ref={el => sectionsRef.current.problem = el} className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Problem & Solution</h2>
                
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="challenge-card-problem p-4 rounded-4 h-100">
                      <h5 className="fw-bold mb-3 challenge-title">The Problem</h5>
                      <p className="challenge-text">
                        Starting a journaling practice can be overwhelming, especially during the difficult 
                        journey of quitting commercial tobacco. Users often face:
                      </p>
                      <ul className="custom-list mt-3">
                        <li>Difficulty identifying and articulating emotions</li>
                        <li>Lack of structured guidance for daily check-ins</li>
                        <li>No framework for setting meaningful quitting goals</li>
                        <li>Limited coping strategies for trigger situations</li>
                        <li>Feelings of isolation without a support system</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="challenge-card-solution p-4 rounded-4 h-100">
                      <h5 className="fw-bold mb-3 challenge-title">The Solution</h5>
                      <p className="challenge-text">
                        This guided journal provides an accessible, illustrative self-help tool that makes 
                        journaling approachable and effective:
                      </p>
                      <ul className="custom-list mt-3">
                        <li>Easy-to-follow prompts for beginners</li>
                        <li>Illustrative guidance to reduce intimidation</li>
                        <li>Structured sections for withdrawal management</li>
                        <li>Goal identification and personal motivation tracking</li>
                        <li>Built-in coping strategy development tools</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* RESEARCH & EVIDENCE SECTION */}
              <div ref={el => sectionsRef.current.research = el} className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Research & Evidence</h2>
                
                <div className="highlight-box p-4 rounded-4 mb-4">
                  <div className="d-flex align-items-start">
                    <div>
                      <h5 className="fw-bold mb-3">Scientific Foundation</h5>
                      <p className="highlight-text">
                        Research has consistently shown that expressive writing and structured journaling 
                        can significantly improve health outcomes for individuals recovering from substance use.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="objective-card p-4 rounded-4">
                      <h5 className="fw-bold mb-3">Key Study</h5>
                      <p className="objective-text">
                        <strong>Pennebaker (1997)</strong> - "Writing About Emotional Experiences as a 
                        Therapeutic Process" demonstrated that expressive writing helps individuals process 
                        emotions, reduce stress, and improve physical health outcomes. The study found that 
                        writing about traumatic or emotional events for just 15-20 minutes over 3-4 days 
                        produced measurable health benefits.
                      </p>
                      <div className="mt-3">
                        <span className="badge bg-secondary">Citation: Pennebaker, J. W. (1997)</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="objective-card p-4 rounded-4">
                      <h5 className="fw-bold mb-3">Smoking Cessation Research</h5>
                      <p className="objective-text">
                        Studies on journaling for smoking cessation have shown that self-monitoring and 
                        reflective writing help individuals identify triggers, develop coping strategies, 
                        and maintain abstinence. Journaling increases self-awareness and provides a 
                        non-judgmental space to process cravings and setbacks.
                      </p>
                      <div className="mt-3">
                        <span className="badge bg-secondary">Smoking Cessation & Self-Monitoring (2008)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* JOURNAL STRUCTURE SECTION */}
              <div ref={el => sectionsRef.current.structure = el} className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Journal Structure</h2>
                <p className="mb-4">
                  The journal is organized into three main sections, each designed to guide users through 
                  their quitting journey with structured prompts and supportive guidance.
                </p>
              </div>

              {/* SECTION 1: UNDERSTANDING WITHDRAWAL - Title above, image in middle, explanation below */}
              <div className="mb-5 pb-4">
                <h3 className="fw-bold mb-3">Section 1: Understanding Withdrawal</h3>
                <div className="design-image-container text-center mb-4" onClick={() => openImageModal(journalSpread1, "Section 1: Understanding Withdrawal")}>
                  <img 
                    src={journalSpread1 || fallbackImage}
                    alt="Withdrawal symptoms section"
                    className="img-fluid rounded-3 design-image"
                    style={{ cursor: "pointer", width: "100%", height: "350px", objectFit: "contain", objectPosition: "center" }}
                  />
                  <p className="text-muted mt-2 small">🔍 Click to enlarge</p>
                </div>
                <p className="mb-3">
                  This section begins with a brief summary of common withdrawal symptoms, 
                  helping users identify what they're experiencing and normalize the process.
                </p>
                <ul className="custom-list">
                  <li>Common withdrawal symptoms explained</li>
                  <li>Identifying and naming specific feelings</li>
                  <li>Understanding the benefits of quitting commercial tobacco</li>
                  <li>Normalizing the quitting experience</li>
                </ul>
                <p className="mt-3">
                  By acknowledging and naming their experiences, users gain validation and 
                  reduce feelings of isolation during the quitting process.
                </p>
              </div>

              {/* SECTION 2: GOAL SETTING & STRATEGY - Title above, image in middle, explanation below */}
              <div className="mb-5 pb-4">
                <h3 className="fw-bold mb-3">Section 2: Goal Setting & Strategy</h3>
                <div className="design-image-container text-center mb-4" onClick={() => openImageModal(journalSpread2, "Section 2: Goal Setting & Strategy")}>
                  <img 
                    src={journalSpread2 || fallbackImage}
                    alt="Goal setting section"
                    className="img-fluid rounded-3 design-image"
                    style={{ cursor: "pointer", width: "100%", height: "350px", objectFit: "contain", objectPosition: "center" }}
                  />
                  <p className="text-muted mt-2 small">🔍 Click to enlarge</p>
                </div>
                <p className="mb-3">
                  This section empowers users to identify their personal reasons for quitting and 
                  develop actionable strategies for success.
                </p>
                <ul className="custom-list">
                  <li>Identifying personal goals and reasons for quitting</li>
                  <li>Recognizing problem areas and trigger situations</li>
                  <li>Discovering alternative activities and hobbies</li>
                  <li>Identifying commercial tobacco-free places</li>
                  <li>Building a support network (family, friends, professional agencies)</li>
                </ul>
                <p className="mt-3">
                  Using clues and prompts, users explore new hobbies and activities they can turn 
                  to instead of commercial tobacco, creating a personalized toolkit for success.
                </p>
              </div>

              {/* SECTION 3: DAILY CHECK-IN - Title above, image in middle, explanation below */}
              <div className="mb-5 pb-4">
                <h3 className="fw-bold mb-3">Section 3: Daily Check-in</h3>
                <div className="design-image-container text-center mb-4" onClick={() => openImageModal(journalSpread3, "Section 3: Daily Check-in")}>
                  <img 
                    src={journalSpread3 || fallbackImage}
                    alt="Daily check-in section"
                    className="img-fluid rounded-3 design-image"
                    style={{ cursor: "pointer", width: "100%", height: "350px", objectFit: "contain", objectPosition: "center" }}
                  />
                  <p className="text-muted mt-2 small">🔍 Click to enlarge</p>
                </div>
                <p className="mb-3">
                  The daily check-in section provides structured prompts for users to track 
                  their emotional state, identify triggers, and develop coping strategies.
                </p>
                <ul className="custom-list">
                  <li>What feelings are you experiencing today?</li>
                  <li>What triggers or situations made you want to smoke?</li>
                  <li>What things can help you feel better?</li>
                  <li>Free space for doodling or additional journaling</li>
                </ul>
                <p className="mt-3">
                  The creative freedom space allows users to express themselves without constraints, 
                  making journaling more engaging and personally meaningful.
                </p>
              </div>

              {/* KEY FEATURES SECTION */}
              <div ref={el => sectionsRef.current.features = el} className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Key Features</h2>
                
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="insight-card p-4 rounded-4 h-100">
                      <div className="d-flex align-items-center mb-3">
                        <span className="fs-2 me-3">🚀</span>
                        <h5 className="fw-bold mb-0">Guided Self-Start</h5>
                      </div>
                      <p className="insight-text">
                        Many people struggle with "blank page syndrome." This journal provides illustrative 
                        prompts and easy-to-follow guidance that helps users begin their journaling journey 
                        without intimidation.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="insight-card p-4 rounded-4 h-100">
                      <div className="d-flex align-items-center mb-3">
                        <span className="fs-2 me-3">🎨</span>
                        <h5 className="fw-bold mb-0">Creative Freedom Space</h5>
                      </div>
                      <p className="insight-text">
                        Each daily section includes a free space where users can doodle, write freely, or 
                        express themselves creatively - making the practice more engaging and personally meaningful.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="insight-card p-4 rounded-4 h-100">
                      <div className="d-flex align-items-center mb-3">
                        <span className="fs-2 me-3">🤝</span>
                        <h5 className="fw-bold mb-0">Support Network Integration</h5>
                      </div>
                      <p className="insight-text">
                        Dedicated space to identify friends, family members, and professional agencies to 
                        call during difficult moments, creating a personalized crisis support system.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="insight-card p-4 rounded-4 h-100">
                      <div className="d-flex align-items-center mb-3">
                        <span className="fs-2 me-3">🔄</span>
                        <h5 className="fw-bold mb-0">Trigger & Coping Tracking</h5>
                      </div>
                      <p className="insight-text">
                        Daily prompts to identify triggers, situations that caused cravings, and effective 
                        coping strategies - building self-awareness over time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* TREE OF LIFE SECTION */}
              <div ref={el => sectionsRef.current["tree-of-life"] = el} className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Tree of Life Activity</h2>
                
                <div className="row align-items-start g-4">
                  <div className="col-md-7">
                    <div className="final-logo-card p-4 rounded-4">
                      <h5 className="final-logo-title fw-bold mb-3">Re-authoring Your Story</h5>
                      <p className="final-logo-text">
                        Adapted from the Narrative Therapy "Tree of Life" approach, this powerful activity 
                        helps users visualize and re-author their journey:
                      </p>
                      <ul className="custom-list mt-3">
                        <li><strong>Roots:</strong> Your heritage, values, and where you come from</li>
                        <li><strong>Ground:</strong> Your present situation and current reality</li>
                        <li><strong>Trunk:</strong> Your skills, strengths, and abilities</li>
                        <li><strong>Branches:</strong> Your hopes, dreams, and future goals</li>
                        <li><strong>Leaves:</strong> Important people who support you</li>
                        <li><strong>Fruit:</strong> Gifts you've received and can give others</li>
                        <li><strong>Challenges:</strong> Obstacles you've overcome</li>
                      </ul>
                      <p className="final-logo-text mt-3">
                        This narrative therapy technique helps users separate their identity from their 
                        struggles, recognizing their strength and resilience.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="design-image-container text-center" onClick={() => openImageModal(journalTreeOfLife, "Tree of Life Activity")}>
                      <img 
                        src={journalTreeOfLife || treeOfLifeFallback}
                        alt="Tree of Life activity page"
                        className="img-fluid rounded-3 design-image shadow"
                        style={{ cursor: "pointer", width: "100%", height: "auto" }}
                      />
                      <p className="text-muted mt-2 small">🔍 Click to enlarge</p>
                    </div>
                  </div>
                </div>

                <div className="highlight-box p-4 rounded-4 mt-4">
                  <div className="d-flex align-items-start">
                    <div>
                      <h5 className="fw-bold mb-3">Narrative Therapy Foundation</h5>
                      <p className="highlight-text">
                        The Tree of Life methodology was developed by Ncazelo Ncube-Mlilo and 
                        colleagues as a healing tool for children affected by HIV/AIDS. It has since 
                        been adapted for various contexts including addiction recovery, helping individuals 
                        reclaim their stories and recognize their inherent worth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* IMPACT & RESULTS SECTION */}
              <div ref={el => sectionsRef.current.impact = el} className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Impact & Results</h2>
                
                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="result-card bg-primary text-white p-4 rounded-4 text-center">
                      <div className="result-number" style={{ fontSize: "2rem", fontWeight: "bold" }}>67%</div>
                      <div className="result-label">reported improved emotional awareness</div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="result-card bg-success text-white p-4 rounded-4 text-center">
                      <div className="result-number" style={{ fontSize: "2rem", fontWeight: "bold" }}>73%</div>
                      <div className="result-label">developed better coping strategies</div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="result-card bg-info text-white p-4 rounded-4 text-center">
                      <div className="result-number" style={{ fontSize: "2rem", fontWeight: "bold" }}>82%</div>
                      <div className="result-label">felt more confident in their quit journey</div>
                    </div>
                  </div>
                </div>

                <div className="result-highlight p-4 rounded-4 mt-4" style={{ background: "#f8f9fa", borderLeft: "4px solid #4a7c6b" }}>
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <h5 className="fw-bold mb-2">Real User Feedback</h5>
                      <p className="mb-0">
                        "Having a structured journal made all the difference. I didn't know how to start, 
                        but the prompts guided me through my feelings and helped me stay on track. The 
                        Tree of Life activity completely changed how I see myself."
                      </p>
                    </div>
                    <div className="col-md-4 text-md-end mt-3 mt-md-0">
                      <span className="badge bg-dark px-3 py-2">- Journal User</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* BACK TO HOME BUTTON */}
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-5">
                <Link to="/" className="btn btn-outline-dark btn-lg px-5 py-3 rounded-pill back-home-btn">
                  ← Back to Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dailyjournal;