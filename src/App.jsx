import { useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WcagProject from './pages/WcagProject';
import TimeManagementProject from "./pages/Timemgmt";
import MealU from "./pages/Mealu";
import ReactWeather from "./pages/Reactweather";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Lechaletbymay from "./pages/Lechaletbymay";
import RootsSoilProject from "./pages/RootsSoil";
import Secureleaf from "./pages/Secureleaf";
import Dailyjournal from "./pages/Dailyjournal";
import Ecigposter from "./pages/Ecigposter";
import Quickquitbooklet from "./pages/Quickquitbooklet";
import Sacredtobaccopamphlet from "./pages/Sacredtobaccopamphlet";

// Import project images
import mealUHeroImage from "./assets/MealU-images/MealUHero.png";
import reactWeatherHeroImage from "./assets/Reactweather-images/Reactweatherhero.png"; 
import lechaletHeroImage from "./assets/Lechaletbymay-images/Lechaletbymay.png";
import rootsSoilImage from "./assets/Capstone-images/Capstonehero.png";
import secureleafHeroImage from "./assets/Secureleaf-images/SecureleafHero.png";

// Import print project images
import ecigPosterImage from "./assets/Printed-images/Kokwellposter.svg";
import quickguideImage from "./assets/Printed-images/Quickguidecover.svg";
import sacredPamphletImage from "./assets/Printed-images/Sacredpamphletcover.svg";
import dailyJournalImage from "./assets/Printed-images/Dailyjournal.svg";

// Import project videos
import wcagProjectVideo from "./videos/Wcagvid.mp4";
import timeManagementVideo from "./videos/Timemgmtvideo.mp4";

// Import Mini Projects assets
import beyoncebowlImage from "./assets/Mini-projects/Beyoncebowl.svg";
import emailConfirmationImage from "./assets/Mini-projects/Emailconfirmationcover.svg";
import userPersonaImage from "./assets/Mini-projects/Userpersona.svg";

function App() {
  const [activeProjectTab, setActiveProjectTab] = useState("ux");

  // Helper function to scroll to a section smoothly
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = 80;
      const sectionTop = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth"
      });
    }
  };

  // Mini Projects data
  const miniProjects = [
    {
      id: "beyoncebowl",
      title: "Beyoncé Bowl",
      image: beyoncebowlImage,
      alt: "Beyoncé Bowl landing page design",
      description: "A vibrant landing page concept celebrating Beyoncé's iconic halftime performance with dynamic typography and immersive visuals.",
      category: "Landing Page"
    },
    {
      id: "emailconfirmation",
      title: "Email Confirmation",
      image: emailConfirmationImage,
      alt: "Email confirmation design cover",
      description: "A clean, user-friendly email confirmation template that guides users through post-signup verification with clarity and brand consistency.",
      category: "Email Design"
    },
    
    {
      id: "userpersona",
      title: "User Persona and User Journey",
      image: userPersonaImage,
      alt: "User persona and user journey template design",
      description: "A detailed user persona template combined with user journey mapping, capturing demographics, goals, frustrations, and behavioral patterns for comprehensive audience research.",
      category: "User Persona & User Journey"
    }
  ];

  // Project data
  const uxProjects = [
    {
      id: "wcag",
      title: "WCAG eLearning Platform",
      image: wcagProjectVideo,
      isVideo: true,
      alt: "WCAG 2.2 eLearning module",
      description: "A gamified, space-themed accessibility platform with 86 hands-on challenges. Trained 250+ Fortune 500 learners.",
      tags: ["UX Design", "eLearning", "Accessibility", "WCAG 2.2"],
      link: "/wcag-project"
    },
    {
      id: "time",
      title: "Time Management eLearning",
      image: timeManagementVideo,
      isVideo: true,
      alt: "Time Management eLearning module",
      description: "Recipe-based productivity module for the State of Michigan IT Department, transforming techniques into simple, repeatable recipes.",
      tags: ["UX Design", "eLearning", "Productivity", "Research"],
      link: "/time-management-case-study"
    },
    {
      id: "mealu",
      title: "Meal U: Student Meal Delivery",
      image: mealUHeroImage,
      isVideo: false,
      alt: "Meal U - Affordable meal delivery for college students",
      description: "Student-focused meal delivery service with affordable pricing, 5-step easy meals, and personalized options designed for dorm living.",
      tags: ["UX Design", "User Research", "Brand Design", "Mobile App"],
      link: "/meal-u"
    },
    {
      id: "secureleaf",
      title: "SecureLeaf: Bank Loan Application",
      image: secureleafHeroImage,
      isVideo: false,
      alt: "SecureLeaf - Bank loan application",
      description: "A mobile-first bank loan application transforming complex paper forms into an intuitive digital experience with step-by-step guidance.",
      tags: ["UX Design", "Brand Design", "Mobile App", "User Research"],
      link: "/secureleaf"
    }
  ];

  const devProjects = [
    {
      id: "weather",
      title: "React Weather App",
      image: reactWeatherHeroImage,
      isVideo: false,
      alt: "React Weather App with 5-day forecast",
      description: "A responsive weather application built with React that displays real-time weather data, 5-day forecast, and location search by city, zip, or landmark.",
      tags: ["React", "API Integration", "Front-End", "OpenWeatherMap"],
      link: "/react-weather"
    },
    {
      id: "lechalet",
      title: "Le Chalet by May",
      image: lechaletHeroImage,
      isVideo: false,
      alt: "Le Chalet by May Shopify redesign",
      description: "Custom Shopify redesign with hard-coded menu, wishlist, and mobile-first design.",
      tags: ["Shopify", "Front-End", "E-Commerce", "Custom Development"],
      link: "/le-chalet-by-may"
    },
    {
      id: "roots-soil",
      title: "Roots & Soil – Full-Stack E-Commerce",
      image: rootsSoilImage,
      isVideo: false,
      alt: "Roots & Soil plant shop e-commerce platform",
      description: "A full-stack e-commerce platform with JWT authentication, product search, shopping cart, Stripe payments, and admin dashboard. Built with React, Node.js, MongoDB.",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Full-Stack"],
      link: "/roots-soil"
    }
  ];

  const printProjects = [
    {
      id: "ecig-poster",
      title: "Ecig Poster",
      image: ecigPosterImage,
      isVideo: false,
      alt: "Ecig Poster design",
      description: "Bold and informative poster design for ecig awareness campaign.",
      tags: ["Print Design", "Poster", "Layout"],
      link: "/print/ecig-poster"
    },
    {
      id: "quickguide",
      title: "Quick Quit Pocket Booklet",
      image: quickguideImage,
      isVideo: false,
      alt: "Quick quit pocket booklet cover",
      description: "Compact, user-friendly pocket guide for smoking cessation support.",
      tags: ["Booklet", "Print", "Information Design"],
      link: "/print/quickguide"
    },
    {
      id: "sacred-tobacco",
      title: "Sacred Tobacco Pamphlet",
      image: sacredPamphletImage,
      isVideo: false,
      alt: "Sacred Tobacco pamphlet cover",
      description: "Culturally respectful pamphlet design covering traditional tobacco use.",
      tags: ["Pamphlet", "Print", "Editorial"],
      link: "/print/sacred-tobacco"
    },
    {
      id: "daily-journal",
      title: "Daily Check-in Journal",
      image: dailyJournalImage,
      isVideo: false,
      alt: "Daily Check-in Journal cover",
      description: "A supportive journal for people who are thinking about or have recently quit commercial tobacco, helping them manage cravings and track their goals.",
      tags: ["Journal", "Print", "Wellness", "Mental Health"],
      link: "/print/daily-journal"
    }
  ];

  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />

              {/* HERO SECTION WITH STATIC BACKGROUND */}
              <section id="home" className="hero-section-static">
                <div className="hero-static-background">
                  <div 
                    className="hero-background-overlay"
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "linear-gradient(135deg, #e8f0fe 0%, #f5e6f5 50%, #fff0e0 100%)",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      zIndex: 0
                    }}
                    aria-label="Portfolio hero background"
                  />
                </div>
                
                <div className="container hero-content">
                  <div className="row align-items-center" style={{ minHeight: '60vh' }}>
                    <div className="col-lg-8 mx-auto text-center">
                      <h1 className="hero-greeting">Hi, I'm Betzy!</h1>
                      <p className="lead mb-5 mx-auto" style={{ maxWidth: '700px' }}>
                        UX/UI Designer & Front-End Developer passionate about accessible design, 
                        WCAG standards, and building intuitive digital experiences.
                      </p>
                      <div className="d-flex gap-3 justify-content-center">
                        <button
                          className="btn btn-dark btn-lg px-5 py-3 rounded-pill"
                          onClick={() => scrollToSection("projects")}
                          aria-label="View projects section"
                        >
                          My Work
                        </button>
                        <button
                          className="btn btn-outline-dark btn-lg px-5 py-3 rounded-pill"
                          onClick={() => scrollToSection("mini-projects")}
                          aria-label="View mini projects section"
                        >
                          Mini Projects
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* PROJECTS SECTION */}
              <section id="projects" className="projects-section py-5" style={{ 
                background: "linear-gradient(135deg, #e8f0fe 0%, #f5e6f5 50%, #fff0e0 100%)"
              }}>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h2 className="text-uppercase small fw-bold mb-4">My Work</h2>
                      <p className="fs-3 fw-light mb-5">
                        From accessible platforms 
                        to interactive learning experiences and web applications, check out my work!
                      </p>
                    </div>
                  </div>

                  {/* Project Type Tabs */}
                  <div className="row justify-content-center mb-5">
                    <div className="col-lg-8">
                      <div className="d-flex gap-3">
                        <button
                          className={`btn ${activeProjectTab === 'ux' ? 'btn-dark' : 'btn-outline-dark'} px-4 py-2 rounded-pill`}
                          onClick={() => setActiveProjectTab('ux')}
                        >
                          UX Design
                        </button>
                        <button
                          className={`btn ${activeProjectTab === 'dev' ? 'btn-dark' : 'btn-outline-dark'} px-4 py-2 rounded-pill`}
                          onClick={() => setActiveProjectTab('dev')}
                        >
                          Development
                        </button>
                        <button
                          className={`btn ${activeProjectTab === 'print' ? 'btn-dark' : 'btn-outline-dark'} px-4 py-2 rounded-pill`}
                          onClick={() => setActiveProjectTab('print')}
                        >
                          Print
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Project Cards */}
                  <div className="row justify-content-center">
                    <div className="col-12">
                      <div className="row g-4">
                        {/* UX Projects */}
                        {activeProjectTab === 'ux' && (
                          <>
                            {uxProjects.map((project) => (
                              <div className="col-md-6" key={project.id}>
                                <div className="project-card">
                                  <div className="project-image-container" style={{
                                    height: '300px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden',
                                    backgroundColor: '#f5f5f5',
                                    padding: '10px'
                                  }}>
                                    {project.isVideo ? (
                                      <video 
                                        src={project.image} 
                                        aria-label={project.alt}
                                        style={{
                                          maxWidth: '100%',
                                          maxHeight: '100%',
                                          width: 'auto',
                                          height: 'auto',
                                          objectFit: 'contain'
                                        }}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                      />
                                    ) : (
                                      <img 
                                        src={project.image} 
                                        alt={project.alt}
                                        style={{
                                          objectFit: 'cover',
                                          objectPosition: 'center',
                                          width: '100%',
                                          height: '100%'
                                        }}
                                      />
                                    )}
                                  </div>
                                  <div className="p-3">
                                    <h6 className="fw-bold mb-1">{project.title}</h6>
                                    <div className="d-flex flex-wrap gap-1 mb-1">
                                      {project.tags.map((tag) => (
                                        <span key={tag} className="badge bg-light text-dark small-tag">
                                          {tag}
                                        </span>
                                      ))}
                                    </div>
                                    <p className="text-muted small mb-2">{project.description}</p>
                                    <button 
                                      className="btn btn-dark btn-sm w-100 py-2 rounded-pill"
                                      onClick={() => window.location.href = project.link}
                                    >
                                      View Case Study →
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </>
                        )}

                        {/* Dev Projects */}
                        {activeProjectTab === 'dev' && (
                          <>
                            {devProjects.map((project) => (
                              <div className="col-md-6" key={project.id}>
                                <div className="project-card">
                                  <div className="project-image-container">
                                    <img 
                                      src={project.image} 
                                      className="project-image w-100" 
                                      alt={project.alt}
                                    />
                                  </div>
                                  <div className="p-3">
                                    <h6 className="fw-bold mb-1">{project.title}</h6>
                                    <div className="d-flex flex-wrap gap-1 mb-1">
                                      {project.tags.map((tag) => (
                                        <span key={tag} className="badge bg-light text-dark small-tag">
                                          {tag}
                                        </span>
                                      ))}
                                    </div>
                                    <p className="text-muted small mb-2">{project.description}</p>
                                    <button 
                                      className="btn btn-dark btn-sm w-100 py-2 rounded-pill"
                                      onClick={() => window.location.href = project.link}
                                    >
                                      View Project →
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </>
                        )}

                        {/* Print Projects */}
                        {activeProjectTab === 'print' && (
                          <>
                            {printProjects.map((project) => (
                              <div className="col-md-6" key={project.id}>
                                <div className="project-card">
                                  <div className="project-image-container">
                                    <img 
                                      src={project.image} 
                                      className="project-image w-100" 
                                      alt={project.alt}
                                    />
                                  </div>
                                  <div className="p-3">
                                    <h6 className="fw-bold mb-1">{project.title}</h6>
                                    <div className="d-flex flex-wrap gap-1 mb-1">
                                      {project.tags.map((tag) => (
                                        <span key={tag} className="badge bg-light text-dark small-tag">
                                          {tag}
                                        </span>
                                      ))}
                                    </div>
                                    <p className="text-muted small mb-2">{project.description}</p>
                                    <button 
                                      className="btn btn-dark btn-sm w-100 py-2 rounded-pill"
                                      onClick={() => window.location.href = project.link}
                                    >
                                      View Project →
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* PROCESS SECTION */}
              <section id="process" className="process-section py-5" style={{ 
                background: "linear-gradient(135deg, #ffe6ec 0%, #fff2d9 50%, #d8eed8 100%)"
              }}>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h2 className="text-uppercase small fw-bold mb-4">Process</h2>
                      <p className="fs-3 fw-light mb-5">
                        Every day sketches, brainstorm and ideas flying around. 
                        I hope they can inspire or help someone out there.
                      </p>
                      
                      <div className="process-steps" style={{ maxWidth: '100%', marginLeft: 0, marginRight: 0 }}>
                        <div className="d-flex gap-4 mb-4">
                          <span className="fw-bold text-primary">01</span>
                          <div>
                            <h5 className="fw-bold">Research & Discovery</h5>
                            <p className="text-muted small">Understanding user needs and accessibility requirements</p>
                          </div>
                        </div>
                        <div className="d-flex gap-4 mb-4">
                          <span className="fw-bold text-primary">02</span>
                          <div>
                            <h5 className="fw-bold">Design & Prototype</h5>
                            <p className="text-muted small">Creating inclusive, user-centered designs</p>
                          </div>
                        </div>
                        <div className="d-flex gap-4">
                          <span className="fw-bold text-primary">03</span>
                          <div>
                            <h5 className="fw-bold">Build & Iterate</h5>
                            <p className="text-muted small">Developing and refining based on feedback</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

         {/* MINI PROJECTS SECTION - Responsive Grid (3 per row) */}
<section id="mini-projects" className="mini-projects-section py-5">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <h2 className="text-uppercase small fw-bold mb-4">Mini Projects</h2>
        <p className="fs-3 fw-light mb-5">
          Discover landing pages, email confirmations to fun user personas and journeys.
        </p>
      </div>
    </div>

    {/* Responsive Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
    <div className="row g-5">
      {miniProjects.map((project) => (
        <div className="col-lg-4 col-md-6 col-sm-12" key={project.id}>
          <div className="mini-project-grid-item">
            <div 
              className="illustrative-image-wrapper"
              onClick={() => console.log(`Opening: ${project.title}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && console.log(`Opening: ${project.title}`)}
              aria-label={`View ${project.title}`}
            >
              <img 
                src={project.image} 
                alt={project.alt}
                className="illustrative-image"
              />
            </div>
            <div className="illustrative-caption">
              <h5 className="illustrative-title">{project.title}</h5>
              <p className="illustrative-description">{project.description}</p>
              <span className="illustrative-badge">{project.category}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

              {/* FOOTER */}
              <footer className="footer-section py-5 bg-dark text-white">
                <div className="container">
                  <div className="row justify-content-center text-center">
                    <div className="col-lg-6">
                      <h3 className="fw-bold mb-4">@betzy_design</h3>
                      <div className="d-flex justify-content-center gap-4 mb-4">
                        <a href="#" className="text-white text-decoration-none">Instagram</a>
                        <a href="#" className="text-white text-decoration-none">LinkedIn</a>
                        <a href="#" className="text-white text-decoration-none">GitHub</a>
                      </div>
                      <p className="text-white-50 small">© 2024 Betzy. All rights reserved.</p>
                    </div>
                  </div>
                </div>
              </footer>
            </>
          }
        />

        {/* Routes for project pages */}
        <Route path="/wcag-project" element={<WcagProject />} />
        <Route path="/time-management-case-study" element={<TimeManagementProject />} />
        <Route path="/meal-u" element={<MealU />} />
        <Route path="/react-weather" element={<ReactWeather />} />
        <Route path="/le-chalet-by-may" element={<Lechaletbymay />} />
        <Route path="/roots-soil" element={<RootsSoilProject />} />
        <Route path="/secureleaf" element={<Secureleaf />} />
        <Route path="/print/daily-journal" element={<Dailyjournal />} />
        <Route path="/print/ecig-poster" element={<Ecigposter />} />
        <Route path="/print/quickguide" element={<Quickquitbooklet />} />
        <Route path="/print/sacred-tobacco" element={<Sacredtobaccopamphlet />} />
        <Route path="/about-page" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;