import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

// Import booklet images
import bookletCover from "../assets/Printed-images/Quickquit-images/QBcover.svg";
import qbPart1 from "../assets/Printed-images/Quickquit-images/QBPart1.svg";
import qbPart2 from "../assets/Printed-images/Quickquit-images/QBpart2.svg";
import qbPart3 from "../assets/Printed-images/Quickquit-images/QBpart3.svg";
import qbPart4 from "../assets/Printed-images/Quickquit-images/QBpart4.svg";
import qbPart5 from "../assets/Printed-images/Quickquit-images/QBPart5.svg";
import qbPart6 from "../assets/Printed-images/Quickquit-images/QBpart6.svg";
import qbPart7 from "../assets/Printed-images/Quickquit-images/QBpart7.svg";

function Quickquitbooklet() {
  const [activeSection, setActiveSection] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const navItems = [
    { id: "overview", label: "Overview", icon: "📖" },
    { id: "prepare", label: "Prepare & Quit", icon: "📅" },
    { id: "relapse", label: "Understanding Relapse", icon: "🔄" },
    { id: "cravings", label: "Plan to Handle Cravings", icon: "💪" },
    { id: "affirmation", label: "Words of Affirmation", icon: "💚" },
    { id: "progress", label: "Progress & Health", icon: "📈" },
    { id: "resources", label: "Resources & Support", icon: "📞" },
    { id: "impact", label: "Impact & Reach", icon: "📊" }
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -90;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "prepare", "relapse", "cravings", "affirmation", "progress", "resources", "impact"];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const openImageModal = (imageSrc, imageTitle) => {
    setSelectedImage({ src: imageSrc, title: imageTitle });
    setModalOpen(true);
  };

  const closeImageModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const healthBenefits = [
    { time: "20 minutes", benefit: "Blood pressure and heart rate drop to normal levels" },
    { time: "12 hours", benefit: "Carbon monoxide levels return to normal" },
    { time: "2 weeks - 3 months", benefit: "Circulation improves and lung function increases" },
    { time: "1 - 9 months", benefit: "Coughing and shortness of breath decrease" },
    { time: "1 year", benefit: "Risk of heart disease drops by half" },
    { time: "5 years", benefit: "Stroke risk falls to that of a non-smoker" },
    { time: "10 years", benefit: "Lung cancer risk drops by half" },
    { time: "15 years", benefit: "Heart disease risk equals that of a non-smoker" }
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
          role="dialog"
          aria-modal="true"
          aria-label={"Enlarged view of " + selectedImage.title}
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
              aria-label="Close image viewer"
            >
              ✕
            </button>
            <div style={{ padding: "20px", textAlign: "center", backgroundColor: "white" }}>
              <h3 style={{ margin: "0 0 16px 0", color: "var(--text-dark)", fontSize: "1.5rem" }}>
                {selectedImage.title}
              </h3>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }}
              />
              <p style={{ margin: "16px 0 0 0", color: "var(--text-body)", fontSize: "0.9rem" }}>
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
            className={`section-nav-item ${activeSection === item.id ? "active" : ""}`}
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
                <h1 className="hero-title mb-4">Quick Quit Pocket Booklet</h1>
                <p className="hero-description" style={{ maxWidth: "100%", marginLeft: 0 }}>
                  A pocket-sized guide designed for individuals ready to quit commercial tobacco. 
                  Provides step-by-step guidance, coping strategies, and proven resources to support 
                  your journey to becoming tobacco-free.
                </p>
              </div>

              <div className="hero-media-wrapper mb-5">
                <div className="hero-video-container">
                  <img 
                    src={bookletCover} 
                    alt="Quick Quit Pocket Booklet cover" 
                    className="hero-video w-100 rounded-4"
                    style={{ borderRadius: "24px", cursor: "pointer" }}
                    onClick={() => openImageModal(bookletCover, "Quick Quit Pocket Booklet - Cover")}
                  />
                </div>
              </div>

              <div className="project-info-row row g-4 mt-4">
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">My Role</span>
                    <span>Print Designer</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Project Type</span>
                    <span>Pocket Guide / Booklet</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Audience</span>
                    <span>Individuals Ready to Quit</span>
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

      {/* MAIN CONTENT */}
      <div className="main-content-container">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              
              {/* OVERVIEW SECTION */}
              <section id="overview" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Project Overview</h2>
                <h3 className="fw-bold mb-4">Your Pocket-Sized Quit Companion</h3>
                <p className="mb-4">
                  <strong>Print Design | Health Education | Tobacco Cessation</strong>
                </p>
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Overview</h4>
                  <p className="mb-4">
                    The Quick Quit Pocket Booklet is a compact, portable guide designed specifically for individuals 
                    who are ready to quit commercial tobacco. Recognizing that quitting is a challenging journey, 
                    this booklet breaks down the process into manageable sections, providing practical advice, 
                    emotional support, and proven strategies—all in a format that fits in your pocket.
                  </p>
                  <div className="highlight-box p-4 rounded-4">
                    <p className="fw-bold mb-0 highlight-text">
                      From preparing for your quit date to celebrating your progress, this booklet walks you through 
                      every step of your journey to becoming tobacco-free.
                    </p>
                  </div>
                </div>
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">The Challenge</h4>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="challenge-card-problem p-4 rounded-4 h-100">
                        <h5 className="fw-bold mb-3 challenge-title">The Problem:</h5>
                        <p className="mb-0 challenge-text">
                          Many individuals who want to quit commercial tobacco lack accessible, easy-to-follow guidance. 
                          Traditional resources can be overwhelming, and people need practical support they can 
                          reference anytime, especially during moments of craving.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="challenge-card-solution p-4 rounded-4 h-100">
                        <h5 className="fw-bold mb-3 challenge-title">The Solution:</h5>
                        <p className="mb-0 challenge-text">
                          Create a pocket-sized booklet that breaks the quitting journey into clear, actionable steps. 
                          Designed to be carried everywhere, it provides on-the-spot guidance, coping strategies, 
                          and encouragement exactly when needed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* PREPARE & QUIT SECTION */}
              <section id="prepare" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Prepare & Quit</h2>
                <div className="design-image-container text-center mb-5" onClick={() => openImageModal(qbPart1, "Quick Quit Booklet - Part 1")}>
                  <img 
                    src={qbPart1} 
                    alt="Booklet spread showing preparation steps" 
                    className="img-fluid rounded-3 design-image"
                    style={{ cursor: "pointer", width: "100%", height: "auto", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
                  />
                  <p className="text-muted mt-2 small">Click to enlarge</p>
                </div>
                <div className="design-explanation-box p-4 rounded-4 mb-4" style={{ 
                  background: "linear-gradient(135deg, #e8f0fe 0%, #f5e6f5 100%)", 
                  border: "2px solid var(--border-black)",
                  borderRadius: "16px"
                }}>
                  <div className="d-flex align-items-start gap-3">
                    <span className="display-6" aria-hidden="true">📅</span>
                    <div>
                      <h4 className="fw-bold mb-3" style={{ color: "var(--accent-purple)" }}>Why Choose a Quit Date?</h4>
                      <p className="mb-3" style={{ lineHeight: "1.7" }}>
                        I started this booklet by emphasizing the importance of choosing a specific quit date because 
                        research has shown that setting a concrete date creates accountability and increases success rates. 
                        This single action transforms a vague intention into a committed goal.
                      </p>
                      <p className="mb-0" style={{ lineHeight: "1.7" }}>
                        The booklet then provides an overview of the easiest next steps to take once you have chosen your quit date. 
                        This sets the theme for the entire book: breaking down the quitting journey into simple, actionable 
                        tasks that feel achievable rather than overwhelming.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="highlight-box p-4 rounded-4 mt-4">
                  <p className="fw-bold mb-0 highlight-text">
                    Right after you quit, focus on both mental and physical health. Stay hydrated, practice deep breathing, 
                    and remind yourself why you started this journey.
                  </p>
                </div>
              </section>

              {/* UNDERSTANDING RELAPSE SECTION */}
              <section id="relapse" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Understanding Relapse</h2>
                <div className="design-image-container text-center mb-5" onClick={() => openImageModal(qbPart2, "Quick Quit Booklet - Part 2")}>
                  <img 
                    src={qbPart2} 
                    alt="Booklet spread about relapse" 
                    className="img-fluid rounded-3 design-image"
                    style={{ cursor: "pointer", width: "100%", height: "auto", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
                  />
                  <p className="text-muted mt-2 small">Click to enlarge</p>
                </div>
                <div className="design-explanation-box p-4 rounded-4 mb-4" style={{ 
                  background: "linear-gradient(135deg, #f8f5f0 0%, #f0edf5 100%)", 
                  border: "2px solid var(--border-black)",
                  borderRadius: "16px"
                }}>
                  <div className="d-flex align-items-start gap-3">
                    <span className="display-6" aria-hidden="true">🔄</span>
                    <div>
                      <h4 className="fw-bold mb-3" style={{ color: "var(--accent-purple)" }}>Environment & Habit Change</h4>
                      <p className="mb-3" style={{ lineHeight: "1.7" }}>
                        Choosing a quit date means recognizing that your environment and daily habits may also need to change 
                        to support your success. Research shows that modifying your surroundings and developing sensitivity 
                        to new smells can be powerful tools in combating relapse.
                      </p>
                      <p className="mb-0" style={{ lineHeight: "1.7" }}>
                        Studies have found that when individuals change their environment. This includes removing triggers, avoiding 
                        high-risk situations, and creating smoke-free spaces. Smoke-free spaces significantly reduce chances 
                        of returning to commercial tobacco use.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* PLAN TO HANDLE CRAVINGS SECTION */}
              <section id="cravings" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Plan to Handle Cravings</h2>
                <div className="design-image-container text-center mb-5" onClick={() => openImageModal(qbPart3, "Quick Quit Booklet - Part 3")}>
                  <img 
                    src={qbPart3} 
                    alt="Booklet spread about cravings" 
                    className="img-fluid rounded-3 design-image"
                    style={{ cursor: "pointer", width: "100%", height: "auto", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
                  />
                  <p className="text-muted mt-2 small">Click to enlarge</p>
                </div>
                <div className="design-explanation-box p-4 rounded-4 mb-4" style={{ 
                  background: "linear-gradient(135deg, #e8f0fe 0%, #f5e6f5 100%)", 
                  border: "2px solid var(--border-black)",
                  borderRadius: "16px"
                }}>
                  <div className="d-flex align-items-start gap-3">
                    <span className="display-6" aria-hidden="true">💭</span>
                    <div>
                      <h4 className="fw-bold mb-3" style={{ color: "var(--accent-purple)" }}>Reflective Planning</h4>
                      <p className="mb-3" style={{ lineHeight: "1.7" }}>
                        This section was designed for the reader to be reflective to pause and consider what they might be 
                        thinking when they consider having just one cigarette. It encourages readers to recognize the
                        real progress they have already made and to weigh that against a momentary craving.
                      </p>
                      <p className="mb-0" style={{ lineHeight: "1.7" }}>
                        The booklet provides space for readers to identify their <strong>personal triggers</strong> and the 
                         <strong>consequences they want to avoid</strong>. Research shows that identifying problems before they arise 
                        helps handle cravings more effectively and empowers the reader to take control of their journey.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="design-image-container text-center mt-5" onClick={() => openImageModal(qbPart4, "Quick Quit Booklet - Part 4")}>
                  <img 
                    src={qbPart4} 
                    alt="Booklet spread with action planning" 
                    className="img-fluid rounded-3 design-image"
                    style={{ cursor: "pointer", width: "100%", height: "auto", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
                  />
                  <p className="text-muted mt-2 small">Click to enlarge</p>
                </div>
                <div className="design-explanation-box p-4 rounded-4 mt-4" style={{ 
                  background: "linear-gradient(135deg, #f8f5f0 0%, #f0edf5 100%)", 
                  border: "2px solid var(--border-black)",
                  borderRadius: "16px"
                }}>
                  <div className="d-flex align-items-start gap-3">
                    <span className="display-6" aria-hidden="true">✏️</span>
                    <div>
                      <h4 className="fw-bold mb-3" style={{ color: "var(--accent-purple)" }}>Personalized Action Plan</h4>
                      <p className="mb-0" style={{ lineHeight: "1.7" }}>
                        The reader is given the chance to <strong>list activities they are interested in</strong> under the booklet suggestions. 
                        They can identify places they can go when cravings hit, people they commonly face who might trigger 
                        cravings, and things to say to remove themselves from tempting situations. This 
                        personalizes the experience for each reader.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* WORDS OF AFFIRMATION SECTION */}
              <section id="affirmation" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Words of Affirmation</h2>
                <div className="design-image-container text-center mb-5" onClick={() => openImageModal(qbPart5, "Quick Quit Booklet - Part 5")}>
                  <img 
                    src={qbPart5} 
                    alt="Booklet spread with affirmations" 
                    className="img-fluid rounded-3 design-image"
                    style={{ cursor: "pointer", width: "100%", height: "auto", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
                  />
                  <p className="text-muted mt-2 small">Click to enlarge</p>
                </div>
                <div className="design-explanation-box p-4 rounded-4 mb-4" style={{ 
                  background: "linear-gradient(135deg, #e8f0fe 0%, #d8eed8 100%)", 
                  border: "2px solid var(--border-black)",
                  borderRadius: "16px"
                }}>
                  <div className="d-flex align-items-start gap-3">
                    <span className="display-6" aria-hidden="true">💚</span>
                    <div>
                      <h4 className="fw-bold mb-3" style={{ color: "var(--accent-purple)" }}>Giving Hope & Encouragement</h4>
                      <p className="mb-0" style={{ lineHeight: "1.7" }}>
                        I wanted this section to give hope to the reader, to acknowledge that taking the step to quit is a 
                        great accomplishment worthy of pride. This section helps readers <strong>redirect perceived failures into success</strong>. 
                        If a relapse occurs, the message is clear: forgive yourself, learn from it, and <strong>get back on track immediately</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* PROGRESS & HEALTH BENEFITS SECTION */}
              <section id="progress" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Progress & Health Benefits</h2>
                <div className="design-image-container text-center mb-5" onClick={() => openImageModal(qbPart6, "Quick Quit Booklet - Part 6")}>
                  <img 
                    src={qbPart6} 
                    alt="Health benefits timeline" 
                    className="img-fluid rounded-3 design-image"
                    style={{ cursor: "pointer", width: "100%", height: "auto", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
                  />
                  <p className="text-muted mt-2 small">Click to enlarge</p>
                </div>
                <div className="design-explanation-box p-4 rounded-4 mb-4" style={{ 
                  background: "linear-gradient(135deg, #f8f5f0 0%, #fff0e0 100%)", 
                  border: "2px solid var(--border-black)",
                  borderRadius: "16px"
                }}>
                  <div className="d-flex align-items-start gap-3">
                    <span className="display-6" aria-hidden="true">📊</span>
                    <div>
                      <h4 className="fw-bold mb-3" style={{ color: "var(--accent-purple)" }}>Attainable & Accessible Goals</h4>
                      <p className="mb-3" style={{ lineHeight: "1.7" }}>
                        This section breaks down the <strong>health benefits of quitting commercial tobacco over time</strong>, 
                        from 20 minutes after the last cigarette to 15 years smoke-free. These are 
                        attainable and accessible goals and readers can see exactly what improvements to expect and when.
                      </p>
                      <p className="mb-0" style={{ lineHeight: "1.7" }}>
                        The section also emphasizes that quitting protects more than just the individual, it saves lives
                        by reducing or eliminating secondhand smoke exposure to family, friends, and loved ones.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row g-4">
                  {healthBenefits.map((benefit, index) => (
                    <div className="col-md-6" key={index}>
                      <div className="result-card bg-success text-white p-3 rounded-4">
                        <div className="fw-bold" style={{ fontSize: "1rem" }}>{benefit.time}</div>
                        <div className="small" style={{ opacity: 0.9 }}>{benefit.benefit}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* RESOURCES & SUPPORT SECTION */}
              <section id="resources" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Resources & Support</h2>
                <div className="design-image-container text-center mb-5" onClick={() => openImageModal(qbPart7, "Quick Quit Booklet - Part 7")}>
                  <img 
                    src={qbPart7} 
                    alt="Resources and references" 
                    className="img-fluid rounded-3 design-image"
                    style={{ cursor: "pointer", width: "100%", height: "auto", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
                  />
                  <p className="text-muted mt-2 small">Click to enlarge</p>
                </div>
                <div className="design-explanation-box p-4 rounded-4 mb-4" style={{ 
                  background: "linear-gradient(135deg, #e8f0fe 0%, #f5e6f5 100%)", 
                  border: "2px solid var(--border-black)",
                  borderRadius: "16px"
                }}>
                  <div className="d-flex align-items-start gap-3">
                    <span className="display-6" aria-hidden="true">📚</span>
                    <div>
                      <h4 className="fw-bold mb-3" style={{ color: "var(--accent-purple)" }}>Evidence-Based Resources</h4>
                      <p className="mb-0" style={{ lineHeight: "1.7" }}>
                        It was important to offer already proven, evidence-based resources to readers. This section provides 
                        information on how readers can <strong>connect with others and build a support network</strong>, even 
                        if they do not have friends or family who can support them. The booklet also includes 
                        references to the research and clinical guidelines used to create its content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="final-logo-card p-4 rounded-4">
                  <h5 className="final-logo-title fw-bold mb-3">📚 References</h5>
                  <p className="final-logo-text small mb-2">
                    This booklet was created using evidence-based research from:
                  </p>
                  <ul className="small" style={{ color: "var(--text-body)", paddingLeft: "1.2rem" }}>
                    <li>CDC - Tips From Former Smokers</li>
                    <li>National Institute on Drug Abuse</li>
                    <li>World Health Organization - Tobacco Free Initiative</li>
                    <li>American Lung Association</li>
                    <li>Evidence-based tobacco cessation clinical guidelines</li>
                  </ul>
                </div>
              </section>

              {/* IMPACT & REACH SECTION */}
              <section id="impact" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Impact & Reach</h2>
                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="result-card bg-primary text-white p-4 rounded-4 text-center">
                      <div className="result-number" style={{ fontSize: "2rem", fontWeight: "bold" }}>7</div>
                      <div className="result-label">Sections of Guidance</div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="result-card bg-success text-white p-4 rounded-4 text-center">
                      <div className="result-number" style={{ fontSize: "2rem", fontWeight: "bold" }}>8+</div>
                      <div className="result-label">Health Milestones</div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="result-card bg-info text-white p-4 rounded-4 text-center">
                      <div className="result-number" style={{ fontSize: "2rem", fontWeight: "bold" }}>Pocket</div>
                      <div className="result-label">Sized & Portable</div>
                    </div>
                  </div>
                </div>
                <div className="design-explanation-box p-4 rounded-4 mt-4" style={{ 
                  background: "linear-gradient(135deg, #f8f5f0 0%, #f0edf5 100%)", 
                  border: "2px solid var(--border-black)",
                  borderRadius: "16px"
                }}>
                  <div className="d-flex align-items-start gap-3">
                    <span className="display-6" aria-hidden="true">📏</span>
                    <div>
                      <h4 className="fw-bold mb-3" style={{ color: "var(--accent-purple)" }}>Designed for Real Life</h4>
                      <p className="mb-0" style={{ lineHeight: "1.7" }}>
                        This booklet was purposefully designed to be <strong>carried, usable, and discreet</strong>. Its pocket-sized format 
                        means it can go everywhere the reader goes. The <strong>discreet design</strong> allows readers to reference their 
                        personalized quit plan in any setting without feeling self-conscious, empowering readers to have their 
                        "steps to success" literally <strong>in the comfort of their own hands</strong> whenever they need support.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="highlight-box p-4 rounded-4 mt-4 text-center">
                  <p className="fw-bold mb-0 highlight-text">
                    Designed to fit in your pocket—so your quit plan is always within reach.
                  </p>
                </div>
              </section>

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

export default Quickquitbooklet;