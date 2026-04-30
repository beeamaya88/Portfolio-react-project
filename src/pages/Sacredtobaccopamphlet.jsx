import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

// Import pamphlet images
import stCover from "../assets/Printed-images/STpamphlet-images/STcover.svg";
import stPart1 from "../assets/Printed-images/STpamphlet-images/STpart1.svg";
import stPart2 from "../assets/Printed-images/STpamphlet-images/STpart2.svg";
import stPart3 from "../assets/Printed-images/STpamphlet-images/STpart3.svg";
import stPart4 from "../assets/Printed-images/STpamphlet-images/STpart4.svg";
import stPart5 from "../assets/Printed-images/STpamphlet-images/STpart5.svg";
import stBackCover from "../assets/Printed-images/STpamphlet-images/STbackcover.svg";

function Sacredtobaccopamphlet() {
  const [activeSection, setActiveSection] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const navItems = [
    { id: "overview", label: "Overview", icon: "📖" },
    { id: "sacred", label: "Understanding Dahai", icon: "🌿" },
    { id: "commercial", label: "Commercial Tobacco", icon: "⚠️" },
    { id: "pledge", label: "The Pledge", icon: "🤝" },
    { id: "future", label: "Future Generations", icon: "👧🏽" },
    { id: "impact", label: "Impact", icon: "📊" }
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
      const sections = ["overview", "sacred", "commercial", "pledge", "future", "impact"];
      
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
                <h1 className="hero-title mb-4">Dahai: Sacred Tobacco</h1>
                <p className="hero-description" style={{ maxWidth: "100%", marginLeft: 0 }}>
                  A culturally grounded pamphlet that highlights the sacred importance of traditional tobacco 
                  and how it is different from commercial tobacco.
                </p>
              </div>

              <div className="hero-media-wrapper mb-5">
                <div className="hero-video-container" style={{ maxWidth: "50%", margin: "0 auto" }}>
                  <img 
                    src={stCover} 
                    alt="Dahai Sacred Tobacco pamphlet cover" 
                    className="hero-video w-100 rounded-4"
                    style={{ borderRadius: "24px", cursor: "pointer" }}
                    onClick={() => openImageModal(stCover, "Dahai Sacred Tobacco Cover")}
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
                    <span>Cultural Pamphlet</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Audience</span>
                    <span>Tribal Community</span>
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
                <h3 className="fw-bold mb-4">Honoring Sacred Traditions</h3>
                <p className="mb-4">
                  <strong>Cultural Design | Community Education | Tribal Collaboration</strong>
                </p>
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Overview</h4>
                  <p className="mb-4">
                    This pamphlet was designed to show the cultural importance of sacred tobacco and clearly 
                    explain how it is different from commercial tobacco. I worked with a cultural expert at 
                    the Tribal Nation to share authentic knowledge gathered from historical preserved books.
                  </p>
                  <div className="highlight-box p-4 rounded-4">
                    <p className="fw-bold mb-0 highlight-text">
                      Dahai is the Coosan language word for sacred tobacco.
                    </p>
                  </div>
                </div>
                <div className="mb-5">
                  <h4 className="fw-bold mb-3">The Collaboration</h4>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="challenge-card-problem p-4 rounded-4 h-100">
                        <h5 className="fw-bold mb-3 challenge-title">The Problem</h5>
                        <p className="mb-0 challenge-text">
                          Many community members confuse sacred tobacco with commercial products.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="challenge-card-solution p-4 rounded-4 h-100">
                        <h5 className="fw-bold mb-3 challenge-title">The Solution</h5>
                        <p className="mb-0 challenge-text">
                          Create an image-heavy pamphlet that resonates with community members.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* UNDERSTANDING DAHAI SECTION */}
              <section id="sacred" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Understanding Dahai</h2>
                
                {/* Image 1 - Sacred Tobacco Defined */}
                <div className="row mb-5">
                  <div className="col-md-6">
                    
                    <div className="design-image-container" onClick={() => openImageModal(stPart1, "Sacred Tobacco Defined")}>
                      <img 
                        src={stPart1} 
                        alt="Sacred tobacco and tribal spiritual use" 
                        className="img-fluid rounded-3 design-image"
                        style={{ cursor: "pointer", width: "100%", height: "auto", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
                      />
                      <p className="text-muted mt-2 small">Click to enlarge</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p style={{ lineHeight: "1.7", marginTop: "0" }}>
                      I wanted to introduce the traditional stories and American Indian traditions surrounding sacred tobacco. 
                      Dahai is a gift and a sign of respect, representing the deep connection between Indigenous spirituality 
                      and physical traditions. I worked with a cultural expert who gathered this information from historical 
                      preserved books to ensure authenticity. Together we highlighted some of the indigenous meaning recorded 
                      throughout history for sacred tobacco.
                    </p>
                  </div>
                </div>

                {/* Image 2 - Historical Prohibition */}
                <section id="sacred" className="mb-5 pb-4"/>
                <h2 className="text-uppercase small fw-bold mb-4">Understanding Dahai</h2>
                <div className="row mb-5">
                  <div className="col-md-6">
                                        
                    <div className="design-image-container" onClick={() => openImageModal(stPart2, "Historical Prohibition")}>
                      <img 
                        src={stPart2} 
                        alt="Historical prohibition of sacred tobacco" 
                        className="img-fluid rounded-3 design-image"
                        style={{ cursor: "pointer", width: "100%", height: "auto", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
                      />
                      <p className="text-muted mt-2 small">Click to enlarge</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p style={{ lineHeight: "1.7", marginTop: "0" }}>
                      Unfortunately, sacred tobacco was historically prohibited. These laws and policies disrupted 
                      traditional practices that had existed for thousands of years. The prohibition separated 
                      Indigenous people from their spiritual traditions and the language used to refer to Sacred Tobacco. This created confusion about the true 
                      purpose of sacred tobacco. Using historical references, we brought back what sacred tobacco meant in the Coosan language. Studies reveal
                      that language is strongly tied with culture and its traditions.
                    </p>
                  </div>
                </div>
              </section>

              {/* COMMERCIAL TOBACCO SECTION */}
              <section id="commercial" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Commercial Tobacco</h2>
                
                {/* Image 3 - What is Commercial Tobacco */}
                <div className="row mb-5">
                  <div className="col-md-6">
                    <div className="design-image-container" onClick={() => openImageModal(stPart3, "What is Commercial Tobacco")}>
                      <img 
                        src={stPart3} 
                        alt="Definition of commercial tobacco" 
                        className="img-fluid rounded-3 design-image"
                        style={{ cursor: "pointer", width: "100%", height: "auto", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
                      />
                      <p className="text-muted mt-2 small">Click to enlarge</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p style={{ lineHeight: "1.7", marginTop: "0" }}>
                      I wanted to highlight and bring awareness what commercial tobacco is and how it differs from sacred tobacco. 
                      Commercial tobacco is mass produced with hundreds of harmful chemicals, heavily marketed 
                      for profit, and has no spiritual purpose. Unlike Dahai, which is used as an offering and 
                      prayer, commercial tobacco causes addiction, disease, and death.
                    </p>
                  </div>
                </div>

                {/* Image 4 - Health Effects */}
                <section id="sacred" className="mb-5 pb-4"/>
                <h2 className="text-uppercase small fw-bold mb-4">Health Effects</h2>
                <div className="row mb-5">
                  <div className="col-md-6">
                    <div className="design-image-container" onClick={() => openImageModal(stPart4, "Health Effects")}>
                      <img 
                        src={stPart4} 
                        alt="Health impacts of commercial tobacco" 
                        className="img-fluid rounded-3 design-image"
                        style={{ cursor: "pointer", width: "100%", height: "auto", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
                      />
                      <p className="text-muted mt-2 small">Click to enlarge</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p style={{ lineHeight: "1.7", marginTop: "0" }}>
                      Commercial tobacco is the leading cause of preventable death in Indigenous communities. 
                      The difference between sacred and commercial tobacco is not the plant itself but the 
                      purpose and how it is processed. Understanding this distinction is vital for community 
                      members as they work to reclaim traditional practices while rejecting harmful commercial 
                      products.
                    </p>
                  </div>
                </div>
              </section>

              {/* THE PLEDGE SECTION */}
              <section id="pledge" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">The Pledge</h2>
                
                <div className="row mb-5">
                  <div className="col-md-6">
                    <div className="design-image-container" onClick={() => openImageModal(stPart5, "The Pledge")}>
                      <img 
                        src={stPart5} 
                        alt="Pledge to keep tobacco sacred" 
                        className="img-fluid rounded-3 design-image"
                        style={{ cursor: "pointer", width: "100%", height: "auto", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
                      />
                      <p className="text-muted mt-2 small">Click to enlarge</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p style={{ lineHeight: "1.7", marginTop: "0" }}>
                      The pledge is a commitment to keep culture alive. It represents healing for families 
                      and communities and is vital for the survival of future generations. By pledging to keep 
                      tobacco sacred, we honor  ancestors, protect  children, and ensure that traditional 
                      knowledge is passed down. This is how communities heal together.
                    </p>
                    <p className="mt-3" style={{ lineHeight: "1.7", fontStyle: "italic", color: "var(--accent-purple)" }}>
                      "When we keep tobacco sacred, we honor our ancestors and protect our children. This is how we heal."
                    </p>
                  </div>
                </div>
              </section>

              {/* FUTURE GENERATIONS SECTION */}
              <section id="future" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Future Generations</h2>
                
                <div className="row mb-5">
                  <div className="col-md-6">
                    <div className="design-image-container" onClick={() => openImageModal(stBackCover, "Future Generations")}>
                      <img 
                        src={stBackCover} 
                        alt="Children playing and preserving sacred tobacco knowledge" 
                        className="img-fluid rounded-3 design-image"
                        style={{ cursor: "pointer", width: "100%", height: "auto", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
                      />
                      <p className="text-muted mt-2 small">Click to enlarge</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p style={{ lineHeight: "1.7", marginTop: "0" }}>
                      The back cover shows children playing, a powerful reminder that this knowledge must be 
                      passed down to protect the next seven generations. This pamphlet is a starting point 
                      for educational purpose to highlight the difference between sacred and commercial tobacco. By 
                      starting this conversation now, we ensure traditional knowledge is honored and protected 
                      for generations to come.
                    </p>
                    <p className="mt-3" style={{ lineHeight: "1.7", fontStyle: "italic", color: "var(--accent-purple)" }}>
                      "Our children are the ones who will carry this knowledge forward. When they understand 
                      what is sacred and what is not, they protect themselves and their communities."
                    </p>
                  </div>
                </div>
              </section>

              {/* IMPACT SECTION */}
              <section id="impact" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Impact</h2>
                
                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="result-card bg-primary text-white p-4 rounded-4 text-center">
                      <div className="result-number" style={{ fontSize: "2rem", fontWeight: "bold" }}>1</div>
                      <div className="result-label">Tribal Nation Partner</div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="result-card bg-success text-white p-4 rounded-4 text-center">
                      <div className="result-number" style={{ fontSize: "2rem", fontWeight: "bold" }}>Cultural</div>
                      <div className="result-label">Expert Collaboration</div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="result-card bg-info text-white p-4 rounded-4 text-center">
                      <div className="result-number" style={{ fontSize: "2rem", fontWeight: "bold" }}>Image</div>
                      <div className="result-label">Heavy Design</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <p style={{ lineHeight: "1.7" }}>
                    This pamphlet was designed to help community members reconnect with sacred traditions 
                    and understand the critical difference between Dahai and commercial tobacco.
                  </p>
                </div>

                <div className="result-quote p-4 rounded-4 mt-4">
                  <p className="mb-0 fst-italic result-quote-text">
                    "This pamphlet helps our people remember who they are and protect the next seven generations."
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

export default Sacredtobaccopamphlet;