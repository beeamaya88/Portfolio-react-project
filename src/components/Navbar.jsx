import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Home-images/Logo1.svg";
import BackButton from "./BackButton";

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check if we're on the home page
  const isHomePage = location.pathname === "/";

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Nav items
  const navItems = [
    { name: "home", path: "/" },
    { name: "about", path: "/about-page" }
  ];

  return (
    <>
      {/* Skip link for screen readers */}
      <a
        href="#main-content"
        className="visually-hidden-focusable"
        style={{
          position: "absolute",
          top: "-40px",
          left: "0",
          background: "#1a3a2e",
          color: "#fff",
          padding: "12px 20px",
          zIndex: 1100,
          textDecoration: "none",
          fontWeight: "600",
          borderRadius: "0 0 8px 0",
        }}
        onFocus={(e) => (e.target.style.top = "0px")}
        onBlur={(e) => (e.target.style.top = "-40px")}
      >
        Skip to main content
      </a>

      {/* Back Button - Only show on non-home pages */}
      {!isHomePage && <BackButton />}

      <div className="container-fluid bg-white navbar-custom">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between py-3">
            {/* Logo - On mobile (< 768px), this will be on the right side */}
            <div className="order-2 order-md-1">
              {location.pathname === "/" ? (
                <a
                  href="#home"
                  className="navbar-brand d-flex align-items-center text-decoration-none"
                >
                  <img
                    src={logo}
                    alt="Betzy Maya Logo - BM monogram with bee"
                    width="70"
                    height="70"
                    className="d-inline-block align-text-top me-3"
                    style={{ objectFit: "contain" }}
                  />
                  <span className="fw-bold brand-name" style={{ fontSize: "1.5rem" }}>
                    Betzy
                  </span>
                </a>
              ) : (
                <Link
                  to="/"
                  className="navbar-brand d-flex align-items-center text-decoration-none"
                >
                  <img
                    src={logo}
                    alt="Betzy Maya Logo - BM monogram with bee"
                    width="70"
                    height="70"
                    className="d-inline-block align-text-top me-3"
                    style={{ objectFit: "contain" }}
                  />
                  <span className="fw-bold brand-name" style={{ fontSize: "1.5rem" }}>
                    Betzy
                  </span>
                </Link>
              )}
            </div>

            {/* Hamburger Menu Button - Visible on mobile only (screen width < 768px) */}
            <button
              className="navbar-toggler d-md-none order-1"
              onClick={toggleMenu}
              style={{
                background: "transparent",
                border: "2px solid var(--accent-purple)",
                borderRadius: "8px",
                padding: "8px 12px",
                cursor: "pointer"
              }}
              aria-label="Toggle navigation menu"
            >
              <div style={{ width: "24px", display: "flex", flexDirection: "column", gap: "5px" }}>
                <span style={{ height: "3px", background: "var(--accent-purple)", borderRadius: "2px" }}></span>
                <span style={{ height: "3px", background: "var(--accent-purple)", borderRadius: "2px" }}></span>
                <span style={{ height: "3px", background: "var(--accent-purple)", borderRadius: "2px" }}></span>
              </div>
            </button>

            {/* Desktop Navigation - Hidden on mobile (< 768px), visible on tablet and desktop (≥ 768px) */}
            <ul className="nav nav-pills d-none d-md-flex order-2">
              {navItems.map((item) => {
                const isActive =
                  location.pathname === item.path ? "active" : "";
                return (
                  <li className="nav-item ms-2" key={item.name}>
                    <Link
                      to={item.path}
                      className={`nav-link ${isActive} custom-nav-btn`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Dropdown Menu - Only visible when hamburger is clicked on screens < 768px */}
            <div
              className={`mobile-menu d-md-none ${isMenuOpen ? "open" : ""}`}
              style={{
                position: "fixed",
                top: "80px",
                left: 0,
                right: 0,
                background: "white",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                padding: isMenuOpen ? "20px" : "0",
                maxHeight: isMenuOpen ? "300px" : "0",
                overflow: "hidden",
                transition: "all 0.3s ease",
                zIndex: 999,
                borderBottom: isMenuOpen ? "2px solid var(--accent-purple)" : "none"
              }}
            >
              <ul className="nav flex-column gap-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {navItems.map((item) => {
                  const isActive =
                    location.pathname === item.path ? "active" : "";
                  return (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className={`nav-link ${isActive} custom-nav-btn`}
                        onClick={closeMenu}
                        style={{
                          fontSize: "1.2rem",
                          padding: "12px 20px",
                          display: "block",
                          textAlign: "center",
                          borderRadius: "30px"
                        }}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;