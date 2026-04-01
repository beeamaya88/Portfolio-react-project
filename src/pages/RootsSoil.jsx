import React, { useState, useEffect} from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

// Import hero image from Capstone-images folder
import plantShopHeroImage from "../assets/Capstone-images/Capstonehero.png";
// Import project images (update these paths with your actual images)
import productCatalogImage from "../assets/Capstone-images/Productcatalog.png";
import shoppingCartImage from "../assets/Capstone-images/Shoppingcart.png";
import adminDashboardImage from "../assets/Capstone-images/Admindashboard.png";
import checkoutImage from "../assets/Capstone-images/Checkout.png";
import architectureImage from "../assets/Capstone-images/Capstonehero.png";
// Import Add Product and View Orders
import addProductFormImage from "../assets/Capstone-images/Addaproduct.png"; 
import viewOrdersImage from "../assets/Capstone-images/Vieworders.png"; 
import userOrderHistoryImage from "../assets/Capstone-images/UserOrderHistory.png"


import wcagHeroImage from "../assets/WCAGmainhero.png";
import timeManagementImage from "../assets/Timemgmt.png";
import mealUHeroImage from "../assets/MealUHero.png";
import reactWeatherHeroImage from "../assets/Reactweatherhero.png";
import lechaletHeroImage from "../assets/Lechaletbymay.png";

function RootsSoilProject() {
  const [activeSection, setActiveSection] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeProjectTab, setActiveProjectTab] = useState("ux");

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

  // Close video modal
  const closeVideoModal = () => {
    setVideoModalOpen(false);
    setSelectedVideo(null);
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
      description: "Custom Shopify redesign with custom-coded menu, wishlist, and mobile-first design.",
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

  // Final designs data - UPDATED with Add Product and View Orders
  const finalDesigns = [
    { 
      title: "Product Catalog", 
      desc: "Browse plants with images, prices, and category filtering", 
      emoji: "🌿",
      image: productCatalogImage,
      alt: "Product catalog with plant listings and category filters"
    },
    { 
      title: "Shopping Cart", 
      desc: "Add/remove items with persistent cart for logged-in users", 
      emoji: "🛒",
      image: shoppingCartImage,
      alt: "Shopping cart interface with item management"
    },
    { 
      title: "Checkout Flow", 
      desc: "Secure payment processing with Stripe test mode", 
      emoji: "💳",
      image: checkoutImage,
      alt: "Checkout flow with Stripe payment integration"
    },
    { 
      title: "Admin Dashboard", 
      desc: "Add and delete products, view orders with role-based access", 
      emoji: "🛠️",
      image: adminDashboardImage,
      alt: "Admin dashboard for product and order management"
    },
    // NEW: Add Product Form with Cloudinary
    { 
      title: "Add Product Form (Cloudinary Integration)", 
      desc: "Admin interface to add new products with image upload to Cloudinary, including product name, price, description, and category fields", 
      emoji: "📸",
      image: addProductFormImage,
      alt: "Add product form with Cloudinary image upload functionality"
    },
    // NEW: View Orders (Admin Order History)
    { 
      title: "View Orders - Admin & User History", 
      desc: "Admin dashboard showing all customer orders with status management, and user order history page displaying past purchases and order details", 
      emoji: "📋",
      image: viewOrdersImage,
      alt: "View orders interface showing admin order management and user order history"
    },

     // NEW: User Order History
    { 
      title: "User Order History", 
      desc: "Customer order history page displaying past purchases, order status, order details, and option to reorder previously purchased items", 
      emoji: "📜",
      image: userOrderHistoryImage, // You'll need to import this
      alt: "User order history page showing past orders and status"
    }
  
  ];

  // Tech stack data
  const techStack = [
    { name: "React", icon: "⚛️", description: "Front-end library for building UI components" },
    { name: "Vite", icon: "⚡", description: "Build tool and development server" },
    { name: "Node.js", icon: "🚀", description: "JavaScript runtime for backend API" },
    { name: "Express", icon: "⚙️", description: "Web framework for RESTful API design" },
    { name: "MongoDB", icon: "🍃", description: "NoSQL database for users, products, orders" },
    { name: "JWT", icon: "🔐", description: "JSON Web Tokens for authentication" },
    { name: "Stripe", icon: "💳", description: "Payment processing in test mode" },
    { name: "Cloudinary", icon: "☁️", description: "Image upload and management for product photos" },
    { name: "Tailwind CSS", icon: "🎨", description: "Utility-first CSS for responsive design" },
  ];

  // Key features data including search bar functionality - UPDATED with new features
  const keyFeatures = [
    { feature: "User Authentication", description: "Secure signup, login, logout with JWT", emoji: "👤" },
    { feature: "Product Catalog", description: "Browse plants with Cloudinary images, prices, and category filters", emoji: "🌿" },
    { feature: "Search Bar", description: "Search plants by name, category, or keyword for quick discovery", emoji: "🔍" },
    { feature: "Shopping Cart", description: "Add/remove items with cart persistence across sessions", emoji: "🛒" },
    { feature: "Secure Checkout", description: "Stripe test mode integration for mock payments", emoji: "💳" },
    { feature: "Admin Dashboard", description: "Role-based access to add/delete products and view orders", emoji: "🛠️" },
    { feature: "Add Product with Cloudinary", description: "Upload product images to Cloudinary with real-time preview", emoji: "📸" },
    { feature: "Order Management", description: "View order history for users and manage all orders for admin", emoji: "📋" },
    { feature: "Responsive Design", description: "Mobile-first layout with Tailwind CSS", emoji: "📱" },
  ];

  // Technical challenges data - UPDATED with Cloudinary and Order Management
  const technicalChallenges = [
    { challenge: "API Key Security", solution: "Used environment variables on Render to secure Stripe, Cloudinary, and JWT secrets", emoji: "🔐" },
    { challenge: "Cart Persistence", solution: "Stored cart in MongoDB for logged-in users with local storage fallback for guests", emoji: "🔄" },
    { challenge: "Role-Based Access", solution: "Implemented JWT middleware to verify user role before allowing admin operations", emoji: "👑" },
    { challenge: "Payment Integration", solution: "Integrated Stripe test mode with mock card numbers for safe checkout testing", emoji: "💳" },
    { challenge: "Cloudinary Image Uploads", solution: "Configured Cloudinary for secure product image uploads with automatic optimization and responsive delivery", emoji: "☁️" },
    { challenge: "Order Tracking", solution: "Created order schemas to track user purchases with status updates (pending, confirmed, shipped, delivered)", emoji: "📦" },
    { challenge: "Full-Stack Deployment", solution: "Deployed frontend and backend on Render with environment variable configuration", emoji: "🚀" },
  ];

  // Additional section for showing Add Product and Order functionality details
  const adminFeatures = [
    {
      title: "Add Product with Cloudinary",
      description: "Admins can upload new products with images stored securely in Cloudinary. Features include:",
      features: [
        "Image upload with preview before submission",
        "Cloudinary storage with automatic optimization",
        "Form validation for product name, price, and category",
        "Instant product addition to catalog without page refresh"
      ]
    },
    {
      title: "View Orders - Admin Dashboard",
      description: "Admins can manage all customer orders from a centralized dashboard:",
      features: [
        "View all orders with customer details and total amounts",
        "Update order status (pending → confirmed → shipped → delivered)",
        "Filter orders by status and date range",
        "View individual order line items and shipping information"
      ]
    },
    {
      title: "User Order History",
      description: "Users can track their purchase history:",
      features: [
        "View all past orders with dates and totals",
        "See order status updates in real-time",
        "Access order details including items purchased",
        "Option to reorder previously purchased items"
      ]
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

      {/* Video Modal (kept for compatibility but not used in this project) */}
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

      {/* HERO SECTION with Static Image */}
      <section className="hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="hero-text-wrapper mb-5 text-start">
                <h1 className="hero-title mb-4">Roots & Soil – Full-Stack E-Commerce Platform</h1>
                <p className="hero-description" style={{ maxWidth: "100%", marginLeft: 0 }}>
                  A full-stack e-commerce platform for a plant shop, featuring JWT authentication, 
                  product catalog with Cloudinary images, search bar functionality, shopping cart persistence, 
                  Stripe payment integration, admin dashboard with add product form, and comprehensive order management 
                  for both admins and users. Built as a capstone project to demonstrate end-to-end development skills.
                </p>
              </div>

              <div className="hero-media-wrapper mb-5">
                <div className="hero-image-container">
                  <img 
                    src={plantShopHeroImage} 
                    alt="Roots & Soil E-Commerce Platform Hero"
                    className="hero-image w-100 rounded-4"
                    style={{ borderRadius: "24px", width: "100%", height: "auto", objectFit: "cover" }}
                  />
                </div>
              </div>

              <div className="project-info-row row g-4 mt-4">
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">My Role</span>
                    <span>Full-Stack Developer</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Timeline</span>
                    <span>Capstone Project</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Frontend</span>
                    <span>React, Vite, Tailwind</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="project-info-column text-center p-3 rounded-3" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
                    <span className="info-label d-block fw-bold mb-2">Backend</span>
                    <span>Node.js, Express, MongoDB</span>
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
                <h3 className="fw-bold mb-4">A Full-Stack E-Commerce Experience</h3>
                <p className="mb-4">
                  <strong>Full-Stack Developer | Capstone Project</strong>
                </p>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Objective</h4>
                  <p className="mb-4">
                    Build a full-stack e-commerce platform to showcase end-to-end development skills. 
                    The app enables users to browse plants, search for specific items, manage carts, and complete secure payments, 
                    while featuring authentication, admin dashboards, and responsive design. Key goals 
                    included mastering state management, payment integration, API design, Cloudinary image uploads, and order tracking.
                  </p>
                  <div className="highlight-box p-4 rounded-4">
                    <p className="fw-bold mb-0 highlight-text">
                      The result is a fully functional e-commerce platform with JWT authentication, 
                      Stripe payment integration, Cloudinary image management, search bar functionality, 
                      role-based admin access, add product form with image upload, and comprehensive order management.
                    </p>
                  </div>
                </div>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Tech Stack</h4>
                  <div className="row g-3">
                    {techStack.map((tech, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="tech-card p-3 rounded-3 d-flex align-items-center gap-3" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
                          <span style={{ fontSize: "1.5rem" }}>{tech.icon}</span>
                          <div>
                            <strong>{tech.name}</strong>
                            <p className="mb-0 small text-muted">{tech.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Key Features</h4>
                  <div className="row g-3">
                    {keyFeatures.map((feature, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="feature-card p-3 rounded-3 d-flex align-items-start gap-3" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
                          <span style={{ fontSize: "1.5rem" }}>{feature.emoji}</span>
                          <div>
                            <strong>{feature.feature}</strong>
                            <p className="mb-0 small text-muted">{feature.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* RESEARCH SECTION */}
              <section id="research" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Research & Planning</h2>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">MVP Requirements</h4>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="challenge-card p-4 rounded-4 h-100 challenge-card-problem">
                        <h5 className="fw-bold mb-3 challenge-title">Core Features:</h5>
                        <ul className="mb-0 challenge-text">
                          <li>User authentication (signup, login, logout)</li>
                          <li>Product catalog with images, prices, descriptions</li>
                          <li>Filter by category</li>
                          <li>Search bar functionality for products</li>
                          <li>Shopping cart with add/remove items</li>
                          <li>Cart persistence across sessions</li>
                          <li>Checkout flow with Stripe test mode</li>
                          <li>Admin dashboard (add/delete products, view orders)</li>
                          <li>Cloudinary image upload for product management</li>
                          <li>Order history for users and order management for admins</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="challenge-card p-4 rounded-4 h-100 challenge-card-solution">
                        <h5 className="fw-bold mb-3 challenge-title">Learning Outcomes:</h5>
                        <ul className="mb-0 challenge-text">
                          <li>React components, state management, hooks</li>
                          <li>RESTful API design (CRUD operations)</li>
                          <li>JWT authentication & role-based access</li>
                          <li>MongoDB database modeling with relationships</li>
                          <li>Cloudinary integration for image uploads</li>
                          <li>Full-stack deployment on Render</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">System Architecture</h4>
                  <p className="mb-4">
                    I designed a RESTful API architecture with the following key components:
                  </p>
                  <div className="row g-3">
                    {[
                      { title: "User Routes", desc: "Registration, login, JWT token generation" },
                      { title: "Product Routes", desc: "CRUD operations with role-based access and Cloudinary integration" },
                      { title: "Cart Routes", desc: "Add, remove, update items with database persistence" },
                      { title: "Order Routes", desc: "Create and retrieve orders after checkout, update order status" },
                      { title: "Payment Routes", desc: "Stripe integration for mock payments" },
                      { title: "Auth Middleware", desc: "Protected routes with JWT verification and admin role checking" }
                    ].map((item, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="architecture-card p-3 rounded-3" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
                          <strong>{item.title}</strong>
                          <p className="mb-0 small text-muted">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="architecture-image-container mt-4" onClick={() => openImageModal(architectureImage, "System Architecture Diagram")}>
                    <img src={architectureImage} alt="System Architecture" className="img-fluid rounded-3 architecture-image" />
                    <div className="mt-3"><span className="enlarge-hint">🔍 Click to enlarge</span></div>
                  </div>
                </div>
              </section>

              {/* DESIGN SECTION */}
              <section id="design" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Design & Development</h2>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Database Schema Design</h4>
                  <p className="mb-4">
                    I designed MongoDB schemas to model relationships between users, products, carts, and orders:
                  </p>
                  <div className="row g-3">
                    {[
                      { name: "Users", fields: "Email, password (hashed), role (user/admin)" },
                      { name: "Products", fields: "Name, price, description, image URL (Cloudinary), category" },
                      { name: "Cart", fields: "User reference, items array (product ID, quantity)" },
                      { name: "Orders", fields: "User reference, items, total, status (pending/confirmed/shipped/delivered), payment details, date" }
                    ].map((schema, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="database-card p-3 rounded-3" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
                          <strong>📁 {schema.name}</strong>
                          <p className="mb-0 small text-muted">{schema.fields}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Frontend Development</h4>
                  <p className="mb-4">
                    I built the frontend using React with Vite for fast development and Tailwind CSS for responsive, mobile-first design. Key implementations include:
                  </p>
                  <ul className="custom-list mb-4">
                    <li>Component-based architecture (ProductCard, Cart, Checkout, Admin, AddProduct, OrderHistory)</li>
                    <li>State management with Zustand for products, cart, and user state</li>
                    <li>Search bar functionality for real-time product filtering</li>
                    <li>Cloudinary image upload with preview in Add Product form</li>
                    <li>Order management views for both admin and regular users</li>
                    <li>Responsive layout for seamless browsing across devices</li>
                  </ul>
                </div>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Authentication & Authorization</h4>
                  <p className="mb-4">
                    I implemented JWT-based authentication with:
                  </p>
                  <ul className="custom-list mb-4">
                    <li>Token generation on login</li>
                    <li>Middleware for protected routes</li>
                    <li>Role-based access (admin vs. regular users)</li>
                    <li>Secure password hashing with bcrypt</li>
                    <li>Persistent login with Zustand persist middleware</li>
                  </ul>
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
                </div>
              </section>

              {/* NEW SECTION: Admin Features Details */}
              <section id="admin-features" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Admin & Order Management</h2>
                
                {adminFeatures.map((section, idx) => (
                  <div key={idx} className="mb-5">
                    <h4 className="fw-bold mb-3">{section.title}</h4>
                    <p className="mb-3">{section.description}</p>
                    <ul className="custom-list mb-4">
                      {section.features.map((feature, fIdx) => (
                        <li key={fIdx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="highlight-box p-4 rounded-4 mt-4">
                  <p className="fw-bold mb-0 highlight-text">
                    💡 <strong>Key Implementation:</strong> The Add Product form uses Cloudinary's upload widget for seamless image uploads. 
                    The image URL is stored in MongoDB and instantly displayed in the product catalog. 
                    For orders, both admins and users can track order status from "pending" to "delivered" with real-time updates.
                  </p>
                </div>
              </section>

              {/* RESULTS SECTION */}
              <section id="results" className="mb-5 pb-4">
                <h2 className="text-uppercase small fw-bold mb-4">Results & Key Learnings</h2>
                
                <div className="row g-3 text-center mb-4">
                  {[
                    { number: "20+", label: "API Endpoints", color: "#9a4b97" },
                    { number: "4", label: "Database Schemas", color: "#4a7c6b" },
                    { number: "9", label: "Core Features", color: "#e49c00" },
                    { number: "100%", label: "No Console Errors", color: "#c863be" }
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
                        <strong>Technical Challenges & Solutions:</strong> Cart persistence for logged-in users with database storage, 
                        JWT middleware for role-based admin access, Stripe test mode for secure payment testing, 
                        search bar implementation for real-time filtering, Cloudinary image upload integration, 
                        order tracking with status updates, and full-stack deployment on Render with environment variables.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-5">
                  <h4 className="fw-bold mb-3">Technical Challenges Overcome</h4>
                  <div className="row g-3">
                    {technicalChallenges.map((challenge, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="challenge-card p-3 rounded-3 h-100" style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}>
                          <div className="d-flex align-items-center gap-2 mb-2">
                            <span style={{ fontSize: "1.2rem" }}>{challenge.emoji}</span>
                            <strong>{challenge.challenge}</strong>
                          </div>
                          <p className="mb-0 small text-muted">{challenge.solution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 p-4 rounded-4 result-quote">
                  <p className="mb-0 fst-italic result-quote-text">
                    This capstone project deepened my understanding of full-stack development—from database design 
                    and RESTful API architecture to frontend implementation and deployment. I gained hands-on experience 
                    with JWT authentication, Stripe payment integration, role-based access control, search functionality, 
                    Cloudinary image uploads, order management systems, and managing environment variables for secure API keys. 
                    The project demonstrates my ability to build secure, scalable, and user-friendly web applications ready for real-world use.
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
                    uxProjects.map((project) => (
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

export default RootsSoilProject;