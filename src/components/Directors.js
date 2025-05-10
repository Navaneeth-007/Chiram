import React from 'react';
import movieData from '../data/movieData';
import { Link } from 'react-router-dom';

const Directors = () => (
  <section className="section" id="directors">
    <div className="section-inner">
      <div className="team-card directors-card">
        <h2 className="section-title">Directors</h2>
        <div className="profile-row-group">
          {movieData.directors.map((director, index) => (
            <div className="director-card" key={director.name} data-aos="fade-right" data-aos-delay={index * 100}>
              <div className="profile-row">
                <div className="profile-img-container">
                  <img src={director.image} alt={director.name} className="profile-img" />
                </div>
                <div className="profile-info">
                  <span className="profile-name">{director.name}</span>
                  <span className="profile-role">{director.role}</span>
                  {director.bio && <span className="profile-bio">{director.bio}</span>}
                  {director.name === "Sindhu Paradayil" && (
                    <Link
                      to="/SindhuProfile"
                      className="profile-btn"
                      target="_blank"
                    >
                      View Profile
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <style jsx>{`
      .directors-card {
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
      .director-card {
        background: #fff;
        border-radius: 1.2rem;
        box-shadow: 0 2px 12px rgba(34,34,34,0.07);
        padding: 1.5rem 1.2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 340px;
        box-sizing: border-box;
      }
      .profile-row {
        display: flex;
        align-items: center;
        margin-bottom: 1.5rem;
        width: 100%;
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
        margin-right: 0.7rem;
        flex-shrink: 0;
      }
      .profile-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center 25%;
      }
      .profile-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        text-align: center;
      }
      .profile-name {
        font-size: 1.2rem;
        font-weight: 700;
        color: #111;
        margin-bottom: 0.3rem;
      }
      .profile-bio {
        font-size: 1rem;
        color: var(--text-secondary);
        margin-bottom: 0.5rem;
      }
      .profile-btn {
        display: inline-block;
        margin-top: 0.3rem;
        padding: 0.5em 1.2em;
        background: var(--accent);
        color: #222;
        border-radius: 4px;
        font-weight: 600;
        text-decoration: none;
        transition: background 0.2s;
      }
      .profile-btn:hover {
        background: #FFB300;
        color: #222;
      }
      @media (max-width: 700px) {
        .profile-row-group {
          flex-direction: column;
          gap: 1.5rem;
        }
        .director-card {
          max-width: 100%;
          width: 100%;
        }
      }
    `}</style>
  </section>
);

export default Directors;