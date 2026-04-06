import React from 'react';
import { Link } from 'react-router-dom';

// Import project images
import wcagImage from '../assets/WCAG-images/WCAGmainhero.png';
import timeManagementImage from '../assets/Timemgmt-images/Timemgmt.png';
import rootsSoilImage from "../assets/Capstone-images/Capstonehero.png";
import secureleafImage from "../assets/Secureleaf-images/SecureleafHero.png";
import mealUImage from "../assets/MealU-images/MealUHero.png";
import lechaletImage from "../assets/Lechaletbymay-images/Lechaletbymay.png";
import reactWeatherImage from "../assets/Reactweather-images/Reactweatherhero.png";

function ProjectTabs({ projectTab, setProjectTab, excludeProject }) {
  
  // Define all projects
  const allProjects = [
    {
      id: "wcag",
      title: "WCAG 2.2 eLearning Platform",
      category: "ux",
      image: wcagImage,
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
      alt: "SecureLeaf - Bank loan application",
      description: "A mobile-first bank loan application transforming complex paper forms into an intuitive digital experience with step-by-step guidance.",
      link: "/secureleaf",
      tags: ["UX Design", "Brand Design", "Mobile App", "User Research"]
    },
    {
      id: "roots-soil",
      title: "Roots & Soil – Full-Stack E-Commerce",
      category: "fullstack",
      image: rootsSoilImage,
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
      alt: "React Weather App with 5-day forecast",
      description: "A responsive weather application built with React that displays real-time weather data, 5-day forecast, and location search.",
      link: "/react-weather",
      tags: ["React", "API Integration", "Front-End", "OpenWeatherMap"]
    }
  ];

  // Filter projects based on selected tab and exclude specified project if any
  const filteredProjects = allProjects.filter(project => {
    // Filter by tab
    if (projectTab === "ux" && project.category !== "ux") {
      return false;
    }
    if (projectTab === "frontend" && project.category !== "frontend" && project.category !== "fullstack") {
      return false;
    }
    if (projectTab === "all" && excludeProject && project.id === excludeProject) {
      return false;
    }
    if (projectTab === "all") {
      return true;
    }
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
      </ul>

      {/* Project Cards Grid */}
      <div className="row g-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <div className="card h-100 border-0 shadow-sm hover-shadow">
                {/* Fixed image container with consistent sizing */}
                <div 
                  className="card-img-top" 
                  style={{ 
                    height: '200px', 
                    overflow: 'hidden',
                    backgroundColor: '#f5f5f5'
                  }}
                >
                  <img 
                    src={project.image} 
                    className="w-100 h-100" 
                    alt={project.alt}
                    style={{ 
                      objectFit: 'cover',
                      objectPosition: 'center',
                      width: '100%',
                      height: '100%'
                    }}
                  />
                </div>
                <div className="card-body">
                  <div className="mb-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="badge bg-primary me-1">{tag}</span>
                    ))}
                  </div>
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="card-text text-muted">{project.description}</p>
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