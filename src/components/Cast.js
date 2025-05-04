import React from 'react';
import movieData from '../data/movieData';

const Cast = () => {
  return (
    <section className="section" id="cast" data-aos="fade-up">
      <div className="section-inner">
        <h2 className="section-title">Cast</h2>
        <div className="cast-container">
          {movieData.cast.map((actor, index) => (
            <div key={index} className="cast-member">
              <div className="cast-img-container">
                <img 
                  src={actor.image} 
                  alt={actor.name} 
                  className="cast-img" 
                />
              </div>
              <h3 className="cast-name">{actor.name}</h3>
              {actor.character && (
                <p className="cast-character">as {actor.character}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .cast-container {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 3rem;
          background: #fff;
          border-radius: 1.2rem;
          padding: 2rem 1rem;
          margin: 0 auto;
          width: 100%;
          max-width: 1200px;
          min-height: 220px;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
        }
        .cast-member {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 140px;
          max-width: 180px;
          flex: 1 1 0;
        }
        .cast-img-container {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 1rem;
          border: 3px solid #FFD600;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cast-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 25%;
        }
        .cast-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: #111;
          margin-bottom: 0.2rem;
          text-align: center;
          word-break: break-word;
          line-height: 1.2;
        }
        .cast-character {
          color: var(--accent);
          font-style: italic;
          font-size: 0.95rem;
          text-align: center;
        }
        @media (max-width: 900px) {
          .cast-container {
            gap: 1.2rem;
            padding: 1.2rem 0.5rem 1rem 0.5rem;
            min-height: 150px;
            max-width: 98vw;
          }
          .cast-img-container {
            width: 80px;
            height: 80px;
          }
        }
        @media (max-width: 700px) {
          .cast-container {
            flex-wrap: wrap;
            justify-content: center;
            padding: 1rem 0.2rem;
            min-height: unset;
          }
          .cast-member {
            min-width: 90px;
            max-width: 120px;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Cast;