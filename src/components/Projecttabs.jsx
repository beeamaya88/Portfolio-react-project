import React from 'react';
import { Link } from 'react-router-dom';

// Import project images and videos
import wcagVideo from '../videos/Wcagprojectcard.mp4';
import timeManagementImage from '../assets/Timemgmt-images/Timemgmt.png';
import rootsSoilImage from "../assets/Capstone-images/Capstonehero.png";
import secureleafImage from "../assets/Secureleaf-images/SecureleafHero.png";
import mealUImage from "../assets/MealU-images/MealUHero.png";
import lechaletImage from "../assets/Lechaletbymay-images/Lechaletbymay.png";
import reactWeatherImage from "../assets/Reactweather-images/Reactweatherhero.png";

// Import print images
import ecigPosterImage from '../assets/Printed-images/Kokwellposter.svg';
import quickguideImage from '../assets/Printed-images/Quickguidecover.svg';
import sacredPamphletImage from '../assets/Printed-images/Sacredpamphletcover.svg';
import dailyJournalImage from '../assets/Printed-images/Dailyjournal.svg';

function ProjectTabs({ projectTab, setProjectTab, excludeProject }) {
  
  // Define all projects
  const allProjects = [
    {
      id: "wcag",
      title: "WCAG 2.2 eLearning Platform",
      category: "ux",
      image: wcagVideo,
      isVideo: true,
      alt: "WCAG accessibility eLearning platform",
      description: "A gamified, space-themed platform teaching WCAG 2.2 guidelines through 86 hands-on challenges. Trained 250+ Fortune 500 learners.",
      link: "/wcag-project",
      tags: ["UX Design", "eLearning", "Accessibility"]
    },
    {
      id: "time",
      title: "Time Management & Productivity",
      category: "ux",
      image: timeManagementImage,
      isVideo: false,
      alt: "Time management productivity kitchen module",
      description: "A recipe-based learning module for State of Michigan IT department. Transforms productivity techniques into simple, repeatable recipes.",
      link: "/time-management-case-study",
      tags: ["UX Design", "eLearning", "Productivity"]
    },
    {
      id: "mealu",
      title: "Meal U: Student Meal Delivery",
      category: "ux",
      image: mealUImage,
      isVideo: false,
      alt: "Meal U - Affordable meal delivery for college students",
      description: "Student-focused meal delivery service with affordable pricing, 5-step easy meals, and personalized options designed for dorm living.",
      link: "/meal-u",
      tags: ["UX Design", "User Research", "Brand Design", "Mobile App"]
    },
    {
      id: "secureleaf",
      title: "SecureLeaf: Bank Loan Application",
      category: "ux",
      image: secureleafImage,
      isVideo: false,
      alt: "SecureLeaf - Bank loan application",
      description: "A mobile-first bank loan application transforming complex paper forms into an intuitive digital experience with step-by-step guidance.",
      link: "/secureleaf",
      tags: ["UX Design", "Brand Design", "Mobile App", "User Research"]
    },
    {
      id: "roots-soil",
      title: "Roots & Soil – Full-Stack E-Commerce",
      category: "frontend",
      image: rootsSoilImage,
      isVideo: false,
      alt: "Roots & Soil plant shop e-commerce platform",
      description: "A full-stack e-commerce platform with JWT authentication, product search, shopping cart, Stripe payments, and admin dashboard. Built with React, Node.js, MongoDB.",
      link: "/roots-soil",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Full-Stack"]
    },
    {
      id: "lechalet",
      title: "Le Chalet by May",
      category: "frontend",
      image: lechaletImage,
      isVideo: false,
      alt: "Le Chalet by May Shopify redesign",
      description: "Custom Shopify redesign with hard-coded menu, wishlist, and mobile-first design.",
      link: "/le-chalet-by-may",
      tags: ["Shopify", "Front-End", "E-Commerce", "Custom Development"]
    },
    {
      id: "react",
      title: "React Weather App",
      category: "frontend",
      image: reactWeatherImage,
      isVideo: false,
      alt: "React Weather App with 5-day forecast",
      description: "A responsive weather application built with React that displays real-time weather data, 5-day forecast, and location search.",
      link: "/react-weather",
      tags: ["React", "API Integration", "Front-End", "OpenWeatherMap"]
    },
    {
      id: "ecig-poster",
      title: "Ecig Poster",
      category: "print",
      image: ecigPosterImage,
      isVideo: false,
      alt: "Ecig Poster design",
      description: "Bold and informative poster design for ecig awareness campaign.",
      link: "/print/ecig-poster",
      tags: ["Print Design", "Poster", "Layout"]
    },
    {
      id: "quickguide",
      title: "Quick Quit Pocket Booklet",
      category: "print",
      image: quickguideImage,
      isVideo: false,
      alt: "Quick quit pocket booklet cover",
      description: "Compact, user-friendly pocket guide for smoking cessation support.",
      link: "/print/quickguide",
      tags: ["Booklet", "Print", "Information Design"]
    },
    {
      id: "sacred-tobacco",
      title: "Sacred Tobacco Pamphlet",
      category: "print",
      image: sacredPamphletImage,
      isVideo: false,
      alt: "Sacred Tobacco pamphlet cover",
      description: "Culturally respectful pamphlet design covering traditional tobacco use.",
      link: "/print/sacred-tobacco",
      tags: ["Pamphlet", "Print", "Editorial"]
    },
    {
      id: "daily-journal",
      title: "Daily Check-in Journal",
      category: "print",
      image: dailyJournalImage,
      isVideo: false,
      alt: "Daily Check-in Journal cover",
      description: "A supportive journal for people who are thinking about or have recently quit commercial tobacco, helping them manage cravings and track their goals.",
      link: "/print/daily-journal",
      tags: ["Journal", "Print", "Wellness", "Mental Health"]
    }
  ];

  // Filter projects based on selected tab and exclude specified project if any
  const filteredProjects = allProjects.filter(project => {
    if (projectTab === "all") {
      return !excludeProject || project.id !== excludeProject;
    }
    if (projectTab === "ux") return project.category === "ux";
    if (projectTab === "frontend") return project.category === "frontend";
    if (projectTab === "print") return project.category === "print";
    return true;
  });

  return (
    <div className="project-tabs-container">
      {/* Tab Navigation */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${projectTab === "all" ? "active" : ""}`}
            onClick={() => setProjectTab("all")}
          >
            All Projects
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${projectTab === "ux" ? "active" : ""}`}
            onClick={() => setProjectTab("ux")}
          >
            UX Design
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${projectTab === "frontend" ? "active" : ""}`}
            onClick={() => setProjectTab("frontend")}
          >
            Development
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${projectTab === "print" ? "active" : ""}`}
            onClick={() => setProjectTab("print")}
          >
            Print
          </button>
        </li>
      </ul>

      {/* Project Cards Grid - 2 columns on tablet and desktop */}
      <div className="row g-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div className="col-md-6" key={project.id}>
              <div className="card h-100 border-0 shadow-sm hover-shadow">
                {/* Fixed image/video container with consistent sizing */}
                <div 
                  className="card-img-top d-flex align-items-center justify-content-center" 
                  style={{ 
                    height: '300px', 
                    overflow: 'hidden',
                    backgroundColor: '#f5f5f5',
                    padding: '10px'
                  }}
                >
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
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-1">{project.title}</h5>
                  <div className="mb-1">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="badge bg-primary me-1">{tag}</span>
                    ))}
                  </div>
                  <p className="card-text text-muted mb-2">{project.description}</p>
                  <Link to={project.link} className="btn btn-primary stretched-link">
                    View Case Study →
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <p className="text-muted">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Custom CSS for hover effects */}
      <style jsx>{`
        .hover-shadow {
          transition: all 0.3s ease;
        }
        .hover-shadow:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
        }
        .nav-tabs .nav-link {
          color: #495057;
          font-weight: 500;
        }
        .nav-tabs .nav-link.active {
          color: #0d6efd;
          font-weight: 600;
        }
        .card-img-top {
          border-top-left-radius: calc(0.25rem - 1px);
          border-top-right-radius: calc(0.25rem - 1px);
        }
      `}</style>
    </div>
  );
}

export default ProjectTabs;