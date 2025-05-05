import React from 'react';
import movieData from '../data/movieData';

const WhyWatch = () => {
  return (
    <section className="section" id="why-watch" data-aos="fade-up">
      <div className="section-inner">
        <h2 className="section-title">Why You'll Love This Movie</h2>
        <div className="grid">
          {movieData.whyWatch.map((reason, index) => (
            <div key={index} className="card" data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="reason-emoji" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{reason.emoji}</div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>
        <div className="summary">
          <h3 className="summary-title">In short:</h3>
          <p className="summary-text">
            This is a film for those who love slow cinema, soulful journeys, and characters who grow through
            silence, service, and self-discovery. It's not about plot twists or spectacle—it's about feeling the
            world more deeply.
          </p>
        </div>
      </div>
      <style jsx>{`
        .section-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 0.2rem 2rem 0.2rem;
        }
        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 2.5rem;
          letter-spacing: 0.04em;
          color: #1a2340;
          text-shadow: 0 2px 16px rgba(30, 60, 120, 0.08);
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          margin: 2.5rem 0;
        }
        .card {
          background: #fff;
          border-radius: 1.2rem;
          box-shadow: 0 2px 12px rgba(34,34,34,0.07);
          padding: 2rem 1.2rem;
          text-align: center;
          transition: box-shadow 0.2s, transform 0.2s;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0;
        }
        .card:hover {
          box-shadow: 0 8px 24px 0 #FFD60033;
          transform: translateY(-4px) scale(1.03);
        }
        .reason-title {
          color: var(--accent, #FFD600);
          margin-bottom: 0.7rem;
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: 0.02em;
        }
        .reason-description {
          color: #3a3a3a;
          font-size: 1.05rem;
          margin: 0;
        }
        .summary {
          max-width: 800px;
          margin: 2.5rem auto 0 auto;
          text-align: center;
          padding: 2rem 1.5rem;
          background: var(--secondary-bg, #f8f6f2);
          border-radius: 1.2rem;
          box-shadow: 0 2px 12px rgba(34,34,34,0.04);
        }
        .summary-title {
          color: var(--accent, #FFD600);
          font-size: 1.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }
        .summary-text {
          font-size: 1.1rem;
          color: #1a2340;
          font-style: italic;
        }
        @media (max-width: 900px) {
          .grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 700px) {
          .section-inner {
            padding-left: 1.2rem;
            padding-right: 1.2rem;
          }
        }
        @media (max-width: 600px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyWatch;