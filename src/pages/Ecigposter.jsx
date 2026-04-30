import React, { useState, useEffect, } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

// Import hero images
import ecigPosterHero from "../assets/Printed-images/Dailyjournal/Ecigposter.svg";
import ecigPostcard from "../assets/Printed-images/Dailyjournal/Ecigpostcard.svg";

function Ecigposter() {
  const [activeSection, setActiveSection] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Navigation items
  const navItems = [
    { id: "overview", label: "Overview", icon: "📋" },
    { id: "myths", label: "Design Approach", icon: "🎨" },
    { id: "postcard", label: "Educational Postcard", icon: "📬" },
    { id: "impact", label: "Impact & Reach", icon: "📊" }
  ];

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -90;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "myths", "postcard", "impact"];
      
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
  const openImageModal = (imageSrc, imageTitle, imageDescription) => {
    setSelectedImage({ src: imageSrc, title: imageTitle, description: imageDescription });
    setModalOpen(true);
  };

  // Close image modal
  const closeImageModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Navbar />

      {/* Image Modal with improved accessibility */}
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
          aria-label={`Enlarged view of ${selectedImage.title}`}
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
                alt={selectedImage.description || selectedImage.title}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "8px"
                }}
              />
              {selectedImage.description && (
                <p style={{
                  margin: "16px 0 0 0",
                  color: "var(--text-body)",
                  fontSize: "0.9rem"
                }}>
                  {selectedImage.description}
                </p>
              )}
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
                <h1 className="hero-title mb-4">E-Cig Myths & Facts Poster</h1>
                <p className="hero-description" style={{ maxWidth: "100%", marginLeft: 0 }}>
                  An eye-catching educational poster designed to debunk common myths about e-cigarettes 
                  and raise awareness about their dangers, particularly targeting youth and families.
                </p>
              </div>

              <div className="hero-media-wrapper mb-5">
                <div className="hero-video-container">
                  <img 
                    src={ecigPosterHero} 
                    alt="Educational poster showing the 5 myths of e-cigarettes in a circular diagram. The center circle reads 'The 5 Myths of E-Cigarettes' with five surrounding myth circles connected to the center." 
                    className="hero-video w-100 rounded-4"
                    style={{ borderRadius: "24px", cursor: "pointer" }}
                    onClick={() => openImageModal(
                      ecigPosterHero, 
                      "E-Cig Myths & Facts Poster", 
                      "Circular diagram poster design: A central circle titled 'The 5 Myths of E-Cigarettes' connects to five surrounding circles, each containing one myth about e-cigarettes. This radial layout was designed to appeal to teen audiences by breaking away from traditional text-heavy health warnings."
                    )}
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
                    <span>Educational Poster</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Audience</span>
                    <span>Youth & Families</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Tools</span>
                    <span>Adobe Illustrator, Photoshop, InDesign</span>
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
                <h3 className="fw-bold mb-4">Debunking E-Cigarette Myths</h3>
                <p className="mb-4">
                  <strong>Educational Design | Public Health | Awareness Campaign</strong>
                </p>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Overview</h4>
                  <p className="mb-4">
                    This illustrative poster was created to highlight and debunk the 5 most common myths about 
                    e-cigarettes. With e-cigarettes being heavily marketed toward teens and adolescents, 
                    it was crucial to create an eye-catching design that not only appeals to youth but also 
                    educates families about the real dangers of vaping.
                  </p>
                  <div className="highlight-box p-4 rounded-4">
                    <p className="fw-bold mb-0 highlight-text">
                      The poster serves as a simple yet powerful tool for spreading awareness in schools, 
                      community centers, and health clinics, helping to prevent nicotine addiction before it starts.
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
                          Many young people believe e-cigarettes are harmless due to misleading marketing and 
                          widespread myths. Lack of accurate information leads to increased experimentation 
                          and potential nicotine addiction.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="challenge-card p-4 rounded-4 h-100 challenge-card-solution">
                        <h5 className="fw-bold mb-3 challenge-title">The Solution:</h5>
                        <p className="mb-0 challenge-text">
                          Create a visually engaging, easy-to-understand poster that presents scientific facts 
                          in an accessible way, making complex health information digestible for all ages.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* DESIGN APPROACH SECTION - Circular Diagram Explanation */}
              <section id="myths" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Design Approach</h2>
                
                <div className="design-image-container text-center mb-5" onClick={() => openImageModal(
                  ecigPosterHero, 
                  "E-Cig Myths & Facts Poster", 
                  "Circular diagram design: Central circle 'The 5 Myths of E-Cigarettes' with five surrounding circles. Each outer circle contains a common e-cigarette myth. The radial layout creates visual balance and encourages viewers to scan all myths at once."
                )}>
                  <img 
                    src={ecigPosterHero} 
                    alt="Circular diagram poster with central title circle and five surrounding myth circles" 
                    className="img-fluid rounded-3 design-image"
                    style={{ cursor: "pointer", width: "100%", height: "auto", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
                  />
                  <p className="text-muted mt-2 small">🔍 Click to enlarge - View the circular diagram design</p>
                </div>

                {/* Circular Diagram Explanation */}
                <div className="design-explanation-box p-4 rounded-4 mb-4" style={{ 
                  background: "linear-gradient(135deg, #f8f5f0 0%, #f0edf5 100%)", 
                  border: "2px solid var(--border-black)",
                  borderRadius: "16px"
                }}>
                  <div className="d-flex align-items-start gap-3">
                    <span className="display-6" aria-hidden="true">🖼️</span>
                    <div>
                      <h4 className="fw-bold mb-3" style={{ color: "var(--accent-purple)" }}>Why a Circular Diagram?</h4>
                      <p className="mb-3" style={{ lineHeight: "1.7" }}>
                        I designed this poster as a <strong>circular diagram</strong> with a central circle titled 
                        <strong> "The 5 Myths of E-Cigarettes"</strong> and five surrounding circles, each containing 
                        one myth. Each myth is centered within its own circle, creating a balanced, eye-catching 
                        composition that feels more like an infographic than a traditional health warning.
                      </p>
                      <p className="mb-3" style={{ lineHeight: "1.7" }}>
                        This radial layout was chosen specifically to appeal to <strong>teens and adolescents</strong>—the 
                        primary target audience for e-cigarette marketing. Research shows that young people are more 
                        likely to engage with visual, diagram-based information than dense text. The circular format 
                        allows viewers to scan all five myths at once, understanding the scope of misinformation at a 
                        single glance, rather than reading through a numbered list.
                      </p>
                      <p className="mb-0" style={{ lineHeight: "1.7" }}>
                        By presenting the myths in an interconnected circle, the poster emphasizes that these misconceptions 
                        are all equally important to address. The central "hub" reinforces that all five myths revolve 
                        around the same core topic, creating a memorable visual metaphor that sticks with viewers long 
                        after they've seen the poster.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* EDUCATIONAL POSTCARD SECTION */}
              <section id="postcard" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Educational Postcard</h2>
                
                <div className="design-image-container text-center mb-5" onClick={() => openImageModal(
                  ecigPostcard, 
                  "E-Cig Postcard - Front & Back", 
                  "Take-home educational postcard. Front compares nicotine levels across products. Back illustrates vape pen mechanics with battery and liquid container, plus safety warnings about lithium-ion batteries. Features Community Service Department and Kokwell Organization branding."
                )}>
                  <img 
                    src={ecigPostcard} 
                    alt="Educational postcard showing front nicotine comparison and back vape pen diagram" 
                    className="img-fluid rounded-3 design-image"
                    style={{ cursor: "pointer", width: "100%", height: "auto", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
                  />
                  <p className="text-muted mt-2 small">🔍 Click to enlarge - View the postcard front and back</p>
                </div>

                <div className="design-explanation-box p-4 rounded-4 mb-4" style={{ 
                  background: "linear-gradient(135deg, #e8f0fe 0%, #f5e6f5 100%)", 
                  border: "2px solid var(--border-black)",
                  borderRadius: "16px"
                }}>
                  <div className="d-flex align-items-start gap-3">
                    <span className="display-6" aria-hidden="true">📬</span>
                    <div>
                      <h4 className="fw-bold mb-3" style={{ color: "var(--accent-purple)" }}>A Take-Home Educational Tool</h4>
                      <p className="mb-3" style={{ lineHeight: "1.7" }}>
                        Beyond the poster, I designed an <strong>E-Cig Postcard</strong>—a compact, portable educational 
                        tool that can be easily distributed in schools, community centers, and health clinics. The 
                        postcard format is intentionally small and convenient, making it easy for students to slip 
                        into a pocket or backpack and take home to share with their families.
                      </p>
                      <p className="mb-3" style={{ lineHeight: "1.7" }}>
                        The <strong>front of the postcard</strong> visually compares nicotine levels across different 
                        products—traditional cigarettes, JUUL pods, Puff Bars, and Suorin pods—revealing that a single 
                        vape pod can contain as much nicotine as an entire pack of cigarettes. This shocking comparison 
                        is designed to grab attention and spark conversation.
                      </p>
                      <p className="mb-3" style={{ lineHeight: "1.7" }}>
                        The <strong>back of the postcard</strong> illustrates how vape pens work, showing the battery 
                        component and liquid container. It highlights critical safety warnings about lithium-ion battery 
                        explosion risks and features branding from the Community Service Department and Kokwell Organization, 
                        lending credibility to the health information presented.
                      </p>
                      <p className="mb-0" style={{ lineHeight: "1.7" }}>
                        <strong>Everyday usability was a key consideration</strong>—this postcard is designed to be 
                        <strong> hung on refrigerators, pinned to bulletin boards, or carried in a wallet</strong> as a 
                        constant reminder of the dangers of vaping. Its small size means it can go anywhere a teen goes, 
                        making health education portable and persistent.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="highlight-box p-4 rounded-4 mt-4">
                  <div className="d-flex align-items-start">
                    <div>
                      <h5 className="fw-bold mb-3">Health Risks of Nicotine</h5>
                      <p className="highlight-text">
                        Nicotine delivered through vape pens increases heart rate, raises blood pressure, 
                        and contributes to multiple serious health conditions including heart disease, 
                        digestive issues, reproductive health problems, cancer risk, and insulin resistance.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Critical Warning */}
                <div className="alert-card-outlined p-4 rounded-4 mt-4" style={{ 
                  background: "white", 
                  border: "3px solid #dc3545", 
                  borderRadius: "16px",
                  boxShadow: "0 4px 12px rgba(220, 53, 69, 0.15)"
                }}>
                  <div className="d-flex align-items-center gap-3">
                    <div className="display-4" style={{ color: "#dc3545" }} aria-hidden="true">⚠️</div>
                    <div>
                      <h5 className="fw-bold mb-1" style={{ color: "#dc3545" }}>Critical Warning</h5>
                      <p className="mb-0" style={{ color: "var(--text-body)" }}>
                        Vape pens are battery-powered devices that contain lithium-ion batteries, which can pose explosion 
                        risks if damaged or improperly charged. Always handle with care and follow manufacturer safety guidelines.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* IMPACT & RESULTS SECTION */}
              <section id="impact" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Impact & Reach</h2>
                
                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="result-card bg-primary text-white p-4 rounded-4 text-center">
                      <div className="result-number" style={{ fontSize: "2rem", fontWeight: "bold" }}>5</div>
                      <div className="result-label">Common Myths Debunked</div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="result-card bg-success text-white p-4 rounded-4 text-center">
                      <div className="result-number" style={{ fontSize: "2rem", fontWeight: "bold" }}>7+</div>
                      <div className="result-label">Health Risks Highlighted</div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="result-card bg-info text-white p-4 rounded-4 text-center">
                      <div className="result-number" style={{ fontSize: "2rem", fontWeight: "bold" }}>1000+</div>
                      <div className="result-label">Postcards Distributed</div>
                    </div>
                  </div>
                </div>

                <div className="highlight-box p-4 rounded-4 mt-4">
                  <div className="d-flex align-items-start">
                    <span className="display-6 me-3" aria-hidden="true">🎯</span>
                    <div>
                      <h5 className="fw-bold mb-3">Target Audience Strategy</h5>
                      <p className="highlight-text mb-0">
                        Designed specifically for teens, adolescents, and their families, this postcard makes 
                        complex health information accessible and memorable. By creating a physical object that 
                        can be kept and revisited, the message has staying power beyond a single classroom presentation 
                        or health fair visit.
                      </p>
                    </div>
                  </div>
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

export default Ecigposter;