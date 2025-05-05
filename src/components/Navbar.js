import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (e, sectionId) => {
    e.preventDefault();
    if (window.location.pathname === "/") {
      // Already on main page, just scroll
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Not on main page, go to main page with hash
      window.location.href = `/#${sectionId}`;
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <div className="logo-tagline">
          <span className="logo">CHIRAM</span>
          <span className="navbar-tagline">Beyond the Horizon of Time</span>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-button ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>}

        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          {/* Close button for mobile menu */}
          {isMobileMenuOpen && (
            <button className="mobile-menu-close" onClick={closeMobileMenu} aria-label="Close menu">&times;</button>
          )}
          <a href="#hero" className="nav-link" onClick={e => handleNav(e, "hero")}>Home</a>
          <a className="nav-link" href="#about" onClick={e => handleNav(e, "about")}>About</a>
          <a href="#team" className="nav-link" onClick={e => handleNav(e, "team")}>Director & Producer</a>
          <a className="nav-link" href="#cast" onClick={e => handleNav(e, "cast")}>Cast & Crew</a>
          <a className="nav-link" href="/gallery" onClick={closeMobileMenu}>Gallery</a>
          <a href="#why-watch" className="nav-link" onClick={e => handleNav(e, "why-watch")}>Why Watch</a>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          width: 100vw;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 100;
          background: rgba(30, 30, 40, 0.35); /* semi-transparent dark */
          backdrop-filter: blur(12px);
          box-shadow: 0 2px 16px rgba(0,0,0,0.07);
          transition: all 0.3s ease;
        }
        .navbar.scrolled {
          background: rgba(30, 30, 40, 0.85);
        }
        .navbar-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: 0.7rem 2vw;
        }
        .logo-tagline {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-width: 170px;
        }
        .logo {
          font-size: 2rem;
          font-weight: 900;
          letter-spacing: 0.15em;
          color: #fff;
          font-family: 'Montserrat', Arial, sans-serif;
        }
        .navbar-tagline {
          font-size: 1rem;
          color: #eee;
          font-style: italic;
          margin-top: -0.2rem;
        }
        .nav-links {
          display: flex;
          flex-direction: row;
          gap: 2.2rem;
          justify-content: center;
          align-items: center;
          flex: 1;
        }
        .nav-link {
          color: #fff;
          font-weight: 600;
          text-decoration: none;
          font-size: 1.08rem;
          padding: 0.3em 0.7em;
          border-radius: 20px;
          transition: background 0.2s, color 0.2s;
          letter-spacing: 0.03em;
        }
        .nav-link:hover, .nav-link.active {
          background: rgba(255,255,255,0.12);
          color: #FFD600;
        }
        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          z-index: 102;
        }
        .mobile-menu-button span {
          display: block;
          width: 25px;
          height: 2px;
          background-color: #fff;
          margin: 5px 0;
          transition: all 0.3s ease;
        }
        .mobile-menu-overlay {
          display: none;
        }
        @media (max-width: 900px) {
          .mobile-menu-button {
            display: block;
          }
          .mobile-menu-button.open span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
          }
          .mobile-menu-button.open span:nth-child(2) {
            opacity: 0;
          }
          .mobile-menu-button.open span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
          }
          .mobile-menu-overlay {
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0,0,0,0.45);
            z-index: 101;
          }
          .nav-links {
            position: fixed;
            top: 0;
            left: -100vw;
            width: 100vw;
            height: 100vh;
            background: rgba(30, 30, 40, 0.97);
            backdrop-filter: blur(12px);
            flex-direction: column;
            justify-content: center;
            gap: 2rem;
            transition: left 0.3s ease;
            padding: 2rem 0;
            align-items: center;
            z-index: 102;
          }
          .nav-links.open {
            left: 0;
          }
          .mobile-menu-close {
            position: absolute;
            top: 1.2rem;
            right: 1.5rem;
            background: none;
            border: none;
            color: #fff;
            font-size: 2.5rem;
            z-index: 103;
            cursor: pointer;
            padding: 0.2em 0.5em;
            border-radius: 50%;
            transition: background 0.2s;
          }
          .mobile-menu-close:hover {
            background: rgba(255,255,255,0.12);
            color: #FFD600;
          }
          .logo-tagline {
            align-items: flex-start;
            margin-bottom: 0;
          }
          .navbar-inner {
            padding: 0.7rem 4vw;
          }
        }
        @media (max-width: 480px) {
          .logo {
            font-size: 1.5rem;
          }
          .navbar-tagline {
            font-size: 0.8rem;
          }
          .nav-links {
            width: 100vw;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;