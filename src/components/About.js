import React from 'react';
import movieData from '../data/movieData';

const About = ({ language, setLanguage }) => {
  const handleLanguageChange = (lang) => setLanguage(lang);

  return (
    <section className="section" id="about" data-aos="fade-up">
      <div className="section-inner">
        <h2 className="section-title">About The Movie</h2>
        <div className="language-btns">
          <button 
            className={`language-btn ${language === 'english' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('english')}
          >English</button>
          <button 
            className={`language-btn ${language === 'french' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('french')}
          >French</button>
          <button 
            className={`language-btn ${language === 'spanish' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('spanish')}
          >Spanish</button>
        </div>
        <div className="about-content">
          <p>{movieData.description[language]}</p>
        </div>
      </div>
      <style jsx>{`
        .language-btns {
          margin-bottom: 1.5rem;
          text-align: center;
        }
        .language-btn {
          background: none;
          border: 2px solid var(--accent);
          color: var(--accent);
          font-weight: 600;
          padding: 0.4em 1.2em;
          border-radius: 20px;
          margin: 0 0.5em;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .language-btn.active,
        .language-btn:hover {
          background: var(--accent);
          color: #222;
        }
        .about-content {
          font-size: 1.1rem;
          line-height: 1.8;
          text-align: justify;
        }
      `}</style>
    </section>
  );
};

export default About;