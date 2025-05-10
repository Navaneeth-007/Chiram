import React from 'react';
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const handleSocialClick = (url) => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = 'mailto:chiramthemovie@gmail.com';
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-sections">
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a 
                href="https://www.instagram.com/chiram_movie_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
                aria-label="Instagram"
              >
                <FaInstagram className="social-icon" />
              </a>
              <a 
                href="https://www.facebook.com/share/1ArWpuHsWG/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
                aria-label="Facebook"
              >
                <FaFacebook className="social-icon" />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <button onClick={handleEmailClick} className="contact-link">
              <FaEnvelope className="contact-icon" />
              chiramthemovie@gmail.com
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Chiram | Sathyajith Productions.<br />
            <span className="rights">All rights reserved.</span>
          </div>
          <div className="developer-credit">
            Developed by <a href="https://navaneeth-portfolio-ebon.vercel.app/" target="_blank" rel="noopener noreferrer">Navaneeth</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #2c2c2c;
          padding: 2rem 0;
          margin-top: 3rem;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .footer-sections {
          display: flex;
          justify-content: center;
          gap: 4rem;
          margin-bottom: 1.5rem;
        }
        .footer-section {
          text-align: center;
        }
        .footer-section h3 {
          color: #fff;
          font-size: 1.1rem;
          margin-bottom: 0.8rem;
          font-weight: 600;
        }
        .social-links {
          display: flex;
          gap: 1.2rem;
          justify-content: center;
        }
        .social-button {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .social-icon {
          font-size: 1.5rem;
          color: #fff;
          transition: color 0.2s;
        }
        .social-icon:hover {
          color: var(--accent);
        }
        .contact-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #fff;
          text-decoration: none;
          font-size: 1rem;
          transition: color 0.2s;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          margin: 0 auto;
        }
        .contact-link:hover {
          color: var(--accent);
        }
        .contact-icon {
          font-size: 1.1rem;
        }
        .footer-bottom {
          text-align: center;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .copyright {
          color: #fff;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          line-height: 1.5;
        }
        .rights {
          display: block;
          margin-top: 0.2em;
        }
        .developer-credit {
          color: #fff;
          font-size: 0.85rem;
        }
        .developer-credit a {
          color: var(--accent);
          text-decoration: none;
          transition: color 0.2s;
        }
        .developer-credit a:hover {
          color: #FFB300;
        }
        @media (max-width: 700px) {
          .footer {
            padding: 1.5rem 0;
          }
          .footer-sections {
            flex-direction: column;
            gap: 1.5rem;
          }
          .footer-section h3 {
            font-size: 1rem;
          }
          .social-icon {
            font-size: 1.3rem;
          }
          .contact-link {
            font-size: 0.9rem;
          }
          .copyright {
            font-size: 0.8rem;
          }
          .developer-credit {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;