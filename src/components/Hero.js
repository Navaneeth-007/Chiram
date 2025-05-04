import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">CHIRAM</h1>
        <p className="hero-tagline">Beyond the Horizon of Time</p>
        <div className="hero-cta">
          <a href="#about" className="btn btn-primary">Discover the Story</a>
        </div>
      </div>
      
      <style jsx>{`
        .hero {
          width: 100vw;
          min-height: 100vh;
          height: 100svh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          overflow: hidden;
          background-image: 
            linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)),
            url('/images/Background2.jpg');
          background-size: cover;
          background-position: center 40%;
          background-repeat: no-repeat;
        }
        
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.4)
          );
        }
        
        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          padding: 0 2rem;
        }
        
        .hero-title {
          font-size: 5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          letter-spacing: 5px;
          animation: fadeInDown 1.5s;
        }
        
        .hero-tagline {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          opacity: 0.9;
          animation: fadeIn 2s;
        }
        
        .hero-cta {
          animation: fadeInUp 2.5s;
        }
        
        .hero-cta .btn,
        .hero-cta .btn-primary,
        .hero-cta a {
          text-decoration: none !important;
        }
        
        .hero-cta .btn {
          font-size: 1.1rem;
          padding: 1rem 2rem;
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }
          
          .hero-tagline {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;