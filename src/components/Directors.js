import React from 'react';
import movieData from '../data/movieData';
import { Link } from 'react-router-dom';

const Directors = () => (
  <div className="team-card">
    <h2 className="section-title">Directors</h2>
    {movieData.directors.map((director, index) => (
      <div className="profile-row" key={director.name} data-aos="fade-right" data-aos-delay={index * 100}>
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
    ))}
    <style jsx>{`
      .team-card {
        background: var(--primary-bg);
        border-radius: var(--border-radius);
        box-shadow: var(--shadow);
        padding: 2rem 1.5rem;
        min-width: 340px;
        max-width: 420px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .section-title {
        margin-bottom: 1.5rem;
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
        margin-right: 1.5rem;
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
        align-items: flex-start;
        flex: 1;
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
        .profile-row {
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .profile-img-container {
          margin-right: 0;
          margin-bottom: 1rem;
        }
        .profile-info {
          align-items: center;
        }
      }
    `}</style>
  </div>
);

export default Directors;