import React from 'react';
import Directors from './Directors';
import Producers from './Producers';

const Team = () => (
  <section className="section team-section" id="team" data-aos="fade-up">
    <div className="team-row">
      <Directors />
      <Producers />
    </div>
    <style jsx>{`
      .team-section {
        background: var(--secondary-bg);
        border-radius: var(--border-radius);
        box-shadow: var(--shadow);
        padding: 2.5rem 1.5rem;
        margin: 3rem auto;
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .team-row {
        display: flex;
        gap: 2.5rem;
        width: 100%;
        justify-content: center;
        align-items: flex-start;
      }
      @media (max-width: 900px) {
        .team-row {
          flex-direction: column;
          gap: 2rem;
        }
      }
      @media (max-width: 700px) {
        .team-section {
          padding-left: 1.2rem;
          padding-right: 1.2rem;
        }
      }
    `}</style>
  </section>
);

export default Team;