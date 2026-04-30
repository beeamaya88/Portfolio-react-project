import { useState, useRef, useEffect } from "react";
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
import wcagHeroImage from "./assets/WCAG-images/WCAGmainhero.png";
import timeManagementImage from "./assets/Timemgmt-images/Timemgmt.png";
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

// Import hero video and static hero image
import portfolioHeroVideo from "./videos/Portfolioherovid.mp4";
import heroStaticImage from "./assets/Home-images/Heroimage.png";

function App() {
  const [activeProjectTab, setActiveProjectTab] = useState("ux");
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [useVideo, setUseVideo] = useState(true);
  const videoRef = useRef(null);

  // Check screen size to determine if video should be shown
  useEffect(() => {
    const checkScreenSize = () => {
      // Use static image for screens 1024px and below
      // Use video for screens 1025px and above
      const showVideo = window.innerWidth >= 1025;
      setUseVideo(showVideo);
      
      // Optional: Add console log for debugging
      console.log(`Screen width: ${window.innerWidth}px - ${showVideo ? 'Showing VIDEO' : 'Showing STATIC IMAGE'}`);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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

  // Toggle video play/pause for accessibility
  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    }
  };

  // Project data
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
    },
    {
      id: "secureleaf",
      title: "SecureLeaf: Bank Loan Application",
      image: secureleafHeroImage,
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
      alt: "React Weather App with 5-day forecast",
      description: "A responsive weather application built with React that displays real-time weather data, 5-day forecast, and location search by city, zip, or landmark.",
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
    },
    {
      id: "roots-soil",
      title: "Roots & Soil – Full-Stack E-Commerce",
      image: rootsSoilImage,
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
      alt: "Ecig Poster design",
      description: "Bold and informative poster design for ecig awareness campaign.",
      tags: ["Print Design", "Poster", "Layout"],
      link: "/print/ecig-poster"
    },
    {
      id: "quickguide",
      title: "Quick Quit Pocket Booklet",
      image: quickguideImage,
      alt: "Quick quit pocket booklet cover",
      description: "Compact, user-friendly pocket guide for smoking cessation support.",
      tags: ["Booklet", "Print", "Information Design"],
      link: "/print/quickguide"
    },
    {
      id: "sacred-tobacco",
      title: "Sacred Tobacco Pamphlet",
      image: sacredPamphletImage,
      alt: "Sacred Tobacco pamphlet cover",
      description: "Culturally respectful pamphlet design covering traditional tobacco use.",
      tags: ["Pamphlet", "Print", "Editorial"],
      link: "/print/sacred-tobacco"
    },
    {
      id: "daily-journal",
      title: "Daily Check-in Journal",
      image: dailyJournalImage,
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

              {/* HERO SECTION WITH VIDEO/STATIC BACKGROUND */}
              <section id="home" className="hero-section-video">
                {/* Dynamic Background - Video or Image */}
                <div className="hero-video-background">
                  {useVideo ? (
                    <>
                      <video
                        ref={videoRef}
                        autoPlay
                        muted
                        playsInline
                        loop
                        aria-label="Portfolio introduction video showing design work"
                        className="hero-background-video"
                      >
                        <source src={portfolioHeroVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Accessible Play/Pause Button - Only for video */}
                      <button
                        onClick={toggleVideo}
                        className="hero-video-toggle"
                        aria-label={isVideoPlaying ? "Pause background video" : "Play background video"}
                        title={isVideoPlaying ? "Pause video" : "Play video"}
                      >
                        <span aria-hidden="true">{isVideoPlaying ? "⏸️" : "▶️"}</span>
                      </button>
                    </>
                  ) : (
                    <img
                      src={heroStaticImage}
                      alt="Portfolio hero image showing design work"
                      className="hero-background-image"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center"
                      }}
                    />
                  )}
                </div>
                
                {/* Content overlay */}
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
                          onClick={() => scrollToSection("playground")}
                          aria-label="View playground section"
                        >
                          Playground
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* PROJECTS SECTION - WITH GRADIENT BACKGROUND */}
              <section id="projects" className="projects-section py-5" style={{ 
                background: "linear-gradient(135deg, #e8f0fe 0%, #f5e6f5 50%, #fff0e0 100%)"
              }}>
                <div className="container">
                  {/* Title row */}
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
                          aria-label="Show UX design projects"
                        >
                          UX Design
                        </button>
                        <button
                          className={`btn ${activeProjectTab === 'dev' ? 'btn-dark' : 'btn-outline-dark'} px-4 py-2 rounded-pill`}
                          onClick={() => setActiveProjectTab('dev')}
                          aria-label="Show development projects"
                        >
                          Development
                        </button>
                        <button
                          className={`btn ${activeProjectTab === 'print' ? 'btn-dark' : 'btn-outline-dark'} px-4 py-2 rounded-pill`}
                          onClick={() => setActiveProjectTab('print')}
                          aria-label="Show print projects"
                        >
                          Print
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Project Cards - Responsive grid: 1 on mobile, 2 on tablet, 3 on desktop */}
                  <div className="row justify-content-center">
                    <div className="col-12">
                      <div className="row g-4">
                        {/* UX Projects */}
                        {activeProjectTab === 'ux' && (
                          <>
                            {uxProjects.map((project) => (
                              <div className="col-md-6 col-xl-4" key={project.id}>
                                <div className="project-card">
                                  <div className="project-image-container">
                                    <img 
                                      src={project.image} 
                                      className="project-image w-100" 
                                      alt={project.alt}
                                    />
                                  </div>
                                  <div className="p-3">
                                    <h6 className="fw-bold mb-2">{project.title}</h6>
                                    <p className="text-muted small mb-2">{project.description}</p>
                                    <div className="d-flex flex-wrap gap-1 mb-3">
                                      {project.tags.map((tag) => (
                                        <span key={tag} className="badge bg-light text-dark small-tag">
                                          {tag}
                                        </span>
                                      ))}
                                    </div>
                                    <button 
                                      className="btn btn-dark btn-sm w-100 py-2 rounded-pill"
                                      onClick={() => window.location.href = project.link}
                                      aria-label={`View case study for ${project.title}`}
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
                              <div className="col-md-6 col-xl-4" key={project.id}>
                                <div className="project-card">
                                  <div className="project-image-container">
                                    <img 
                                      src={project.image} 
                                      className="project-image w-100" 
                                      alt={project.alt}
                                    />
                                  </div>
                                  <div className="p-3">
                                    <h6 className="fw-bold mb-2">{project.title}</h6>
                                    <p className="text-muted small mb-2">{project.description}</p>
                                    <div className="d-flex flex-wrap gap-1 mb-3">
                                      {project.tags.map((tag) => (
                                        <span key={tag} className="badge bg-light text-dark small-tag">
                                          {tag}
                                        </span>
                                      ))}
                                    </div>
                                    <button 
                                      className="btn btn-dark btn-sm w-100 py-2 rounded-pill"
                                      onClick={() => window.location.href = project.link}
                                      aria-label={`View project for ${project.title}`}
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
                              <div className="col-md-6 col-xl-4" key={project.id}>
                                <div className="project-card">
                                  <div className="project-image-container">
                                    <img 
                                      src={project.image} 
                                      className="project-image w-100" 
                                      alt={project.alt}
                                    />
                                  </div>
                                  <div className="p-3">
                                    <h6 className="fw-bold mb-2">{project.title}</h6>
                                    <p className="text-muted small mb-2">{project.description}</p>
                                    <div className="d-flex flex-wrap gap-1 mb-3">
                                      {project.tags.map((tag) => (
                                        <span key={tag} className="badge bg-light text-dark small-tag">
                                          {tag}
                                        </span>
                                      ))}
                                    </div>
                                    <button 
                                      className="btn btn-dark btn-sm w-100 py-2 rounded-pill"
                                      onClick={() => {
                                        if (project.link === "#") {
                                          alert("Project details coming soon!");
                                        } else {
                                          window.location.href = project.link;
                                        }
                                      }}
                                      aria-label={`View project for ${project.title}`}
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

              {/* PROCESS SECTION - WITH GRADIENT BACKGROUND */}
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

              {/* PLAYGROUND SECTION */}
              <section id="playground" className="playground-section py-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                      <h2 className="display-4 fw-bold mb-4">Playground</h2>
                      <p className="fs-4 mb-5">Experiments, sketches, and creative explorations</p>
                      
                      <div className="row g-4">
                        <div className="col-md-4">
                          <div className="playground-item p-4 bg-light rounded-4">
                            <span className="display-1 mb-3 d-block">🎨</span>
                            <h5 className="fw-bold">UI Experiments</h5>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="playground-item p-4 bg-light rounded-4">
                            <span className="display-1 mb-3 d-block">✏️</span>
                            <h5 className="fw-bold">Sketches</h5>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="playground-item p-4 bg-light rounded-4">
                            <span className="display-1 mb-3 d-block">🤖</span>
                            <h5 className="fw-bold">AI Tools</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* FOOTER / SOCIAL */}
              <footer className="footer-section py-5 bg-dark text-white">
                <div className="container">
                  <div className="row justify-content-center text-center">
                    <div className="col-lg-6">
                      <h3 className="fw-bold mb-4">@betzy_design</h3>
                      <div className="d-flex justify-content-center gap-4 mb-4">
                        <a href="#" className="text-white text-decoration-none" aria-label="Instagram">Instagram</a>
                        <a href="#" className="text-white text-decoration-none" aria-label="LinkedIn">LinkedIn</a>
                        <a href="#" className="text-white text-decoration-none" aria-label="GitHub">GitHub</a>
                      </div>
                      <p className="text-white-50 small">© 2024 Betzy. All rights reserved.</p>
                    </div>
                  </div>
                </div>
              </footer>
            </>
          }
        />

        {/* WCAG Project Page */}
        <Route path="/wcag-project" element={<WcagProject />} />

        {/* Time Management Project Page */}
        <Route path="/time-management-case-study" element={<TimeManagementProject />} />

        {/* Meal U Project Page */}
        <Route path="/meal-u" element={<MealU />} />

        {/* React Weather App Page */}
        <Route path="/react-weather" element={<ReactWeather />} />
    
        {/* Le Chalet by May Project Page */}
        <Route path="/le-chalet-by-may" element={<Lechaletbymay />} />
        
        {/* Roots & Soil Project Page */}
        <Route path="/roots-soil" element={<RootsSoilProject />} />

        {/* SecureLeaf Project Page */}
        <Route path="/secureleaf" element={<Secureleaf />} />

        {/* Daily Check-in Journal Page */}
        <Route path="/print/daily-journal" element={<Dailyjournal />} />\

        {/* E-cig Poster and postcard */}
        <Route path="/print/ecig-poster" element={<Ecigposter />} />

        {/* Quick quit guide booklet */}
        <Route path="/print/quickguide" element={<Quickquitbooklet />} />

        {/* Sacred Tobacco Pamphlet */}
        <Route path="/print/sacred-tobacco" element={<Sacredtobaccopamphlet />} />

        {/* About Page */}
        <Route path="/about-page" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;