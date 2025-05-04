import React from 'react';
import movieData from '../data/movieData';

// Map crew roles to icons (SVG, PNG, or emoji)
const crewIcons = {
  "Screenplay and Dialogue": "📝",
  "Cinematography": "🎥",
  "Editing": "✂️",
  "Music": "🎵",
  "Lyrics": "🖋️",
  "Sound Designing": "🔊",
  // fallback icon
  "default": "⭐"
};

const Crew = () => (
  <section className="section" id="crew" data-aos="fade-up">
    <div className="section-inner crew-section-inner">
      <h2 className="section-title">Crew</h2>
      <div className="crew-row">
        {movieData.crew.map((crewMember, index) => (
          <div className="crew-card" key={crewMember.role} data-aos="zoom-in" data-aos-delay={index * 100}>
            <div className="crew-icon-container">
              <span className="crew-icon" role="img" aria-label={crewMember.role}>
                {crewIcons[crewMember.role] || crewIcons["default"]}
              </span>
            </div>
            <h4 className="crew-role-title">{crewMember.role}</h4>
            <ul className="crew-names-list">
              {crewMember.names.map((name, nameIndex) => (
                <li key={nameIndex} className="crew-name">
                  <span className="bulletin">•</span> {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="production-company-row">
        <div className="production-container">
          <div className="production-logo-wrapper">
            <img
              src="/images/sathyajith-productions-logo.png"
              alt="Sathyajith Productions Logo"
              className="production-logo"
            />
            <div className="gloss"></div>
          </div>
          <span className="production-name">SATHYAJITH PRODUCTIONS</span>
        </div>
      </div>
      <style jsx>{`
        .crew-section-inner {
          padding-left: 2.5rem;
          padding-right: 2.5rem;
          padding-top: 4rem;
          padding-bottom: 2.5rem;
          max-width: 100vw;
          background: transparent;
        }
        .crew-row {
          display: flex;
          justify-content: center;
          align-items: stretch;
          gap: 1.2rem;
          width: 100%;
          margin: 0 auto 2rem auto;
          flex-wrap: nowrap;
          background: transparent;
          border: none;
          box-shadow: none;
        }
        .crew-card {
          background: #fff;
          border-radius: 1.2rem;
          box-shadow: 0 2px 12px rgba(34,34,34,0.07);
          padding: 1.2rem 0.7rem 0.7rem 0.7rem;
          min-width: 210px;
          max-width: 240px;
          flex: 1 1 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 2px solid #eee;
          transition: box-shadow 0.2s, transform 0.2s;
          text-align: center;
        }
        .crew-card:hover {
          box-shadow: 0 8px 24px 0 #FFD60033;
          transform: translateY(-4px) scale(1.03);
        }
        .crew-icon-container {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
          box-shadow: none;
        }
        .crew-icon {
          font-size: 1.5rem;
          line-height: 1;
        }
        .crew-role-title {
          font-size: 1.08rem;
          font-weight: 700;
          color: var(--accent);
          margin-bottom: 0.5rem;
          text-align: center;
        }
        .crew-names-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .crew-name {
          font-size: 1.02rem;
          color: #111;
          display: flex;
          align-items: center;
          font-weight: 500;
          white-space: nowrap;
          margin-bottom: 0.2em;
          justify-content: center;
        }
        .bulletin {
          color: var(--accent);
          font-size: 1.1em;
          margin-right: 0.3em;
          font-weight: bold;
          vertical-align: middle;
        }
        .production-company-row {
          width: 100vw;
          max-width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2.5rem;
          margin-left: 0;
          margin-right: 0;
          padding: 0;
          transform: none;
        }
        .production-container {
          width: 100vw;
          max-width: 100vw;
          background: #111;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2.2rem 0;
          box-shadow: none;
          border: none;
          border-radius: 0;
          position: relative;
          overflow: hidden;
        }
        .production-logo-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 130px;
          height: 130px;
          position: relative;
        }
        .production-logo {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          object-fit: cover;
          object-position: center 35%;
          background: #eaf0fa;
          box-shadow: 0 4px 24px rgba(110,193,228,0.10);
          display: block;
          margin: 0 auto 1.2rem auto;
          border: none;
          position: relative;
          z-index: 1;
        }
        .gloss {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(120deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.1) 60%);
          pointer-events: none;
          z-index: 2;
        }
        .production-name {
          font-size: 2.8rem;
          font-weight: 700;
          color: #C9AA71;
          letter-spacing: 5px;
          font-family: 'Montserrat', Arial, sans-serif;
          text-transform: uppercase;
          text-shadow: none;
          text-align: center;
        }
        @media (max-width: 1100px) {
          .crew-section-inner {
            padding-left: 0.2rem;
            padding-right: 0.2rem;
          }
          .crew-row {
            gap: 0.5rem;
            max-width: 98vw;
          }
          .crew-card {
            min-width: 150px;
            max-width: 170px;
            padding: 0.7rem 0.3rem 0.3rem 0.3rem;
          }
        }
        @media (max-width: 900px) {
          .crew-row {
            flex-wrap: wrap;
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  </section>
);

export default Crew;