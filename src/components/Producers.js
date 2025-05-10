import React from 'react';
import movieData from '../data/movieData';

const Producers = () => (
  <section className="section" id="producers">
    <div className="section-inner">
      <div className="team-card producers-card">
        <h2 className="section-title">Producers</h2>
        <div className="profile-row-group">
          {movieData.producers.map((producer, index) => (
            <div className="producer-card" key={producer.name} data-aos="fade-left" data-aos-delay={index * 100}>
              <div className="profile-img-container">
                <img src={producer.image} alt={producer.name} className="profile-img" />
              </div>
              <span className="profile-name">{producer.name}</span>
              <span className="profile-role">{producer.role}</span>
              {producer.bio && <span className="profile-bio">{producer.bio}</span>}
              {producer.role !== "Co-Producer" && (
                <a
                  href={`/profile/${producer.name.toLowerCase().replace(/\s+/g, '')}`}
                  className="profile-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    <style jsx>{`
      .producers-card {
        margin: 0 auto;
        max-width: 900px;
      }
      .team-card {
        background: var(--primary-bg);
        border-radius: var(--border-radius);
        box-shadow: var(--shadow);
        padding: 2rem 1.5rem;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .section-title {
        margin-bottom: 1.5rem;
      }
      .profile-row-group {
        display: flex;
        gap: 2rem;
        width: 100%;
        justify-content: center;
        align-items: stretch;
      }
      .producer-card {
        background: #fff;
        border-radius: 1.2rem;
        box-shadow: 0 2px 12px rgba(34,34,34,0.07);
        padding: 2.5rem 2.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 520px;
        box-sizing: border-box;
        text-align: center;
      }
      .profile-img-container {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
        background: #eaf0fa;
        border: 3px solid var(--accent);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0;
        margin-left: auto;
        margin-right: auto;
        display: block;
      }
      .profile-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center 25%;
        display: block;
        margin: 0 auto;
      }
      .profile-name {
        font-size: 1.2rem;
        font-weight: 700;
        color: #111;
        margin-top: 1.2rem;
        margin-bottom: 0.2rem;
      }
      .profile-role {
        font-size: 1.05rem;
        color: var(--accent);
        margin-bottom: 0.7rem;
        font-weight: 600;
        width: 100%;
      }
      .profile-bio {
        font-size: 1rem;
        color: var(--text-secondary);
        margin-bottom: 0.5rem;
      }
      .profile-btn {
        margin-top: 0.7rem;
      }
      @media (max-width: 700px) {
        .profile-row-group {
          flex-direction: column;
          gap: 1.5rem;
        }
        .producer-card {
          max-width: 100%;
          width: 100%;
          padding: 1.2rem 0.7rem;
        }
        .profile-name, .profile-role {
          width: 100%;
        }
      }
    `}</style>
  </section>
);

export default Producers;