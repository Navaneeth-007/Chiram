import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Import the main Navbar

const GALLERY_IMAGES = [
  { src: '/images/sindhu/gallery1.jpg', desc: 'Certificate of Paper Presentation at SCERT on Tribal Student Education and Challenges faced on Teacher Education' },
  { src: '/images/sindhu/gallery2.jpg', desc: 'Certificate of Research Project' },
  { src: '/images/sindhu/gallery3.jpg', desc: 'With Crew at Chiram Movie Set' },
  { src: '/images/sindhu/gallery4.jpg', desc: 'With Crew at Chiram Movie Set' },
  { src: '/images/sindhu/gallery5.jpg', desc: 'With Crew at Chiram Movie Set' },
  { src: '/images/sindhu/gallery6.jpg', desc: 'With Crew at Chiram Movie Set' },
  // Add more images and descriptions as needed
];

const SINDHU_PROFILE = {
  name: "Sindhu Paradayil",
  image: "/images/placeholder-director1.jpg", // Update with actual path if needed
  description: {
    english: `Sindhu paradayil is a new director and screenwriter in the film industry. She has been serving in the Department of General Education for twenty years. She started as a high school teacher. She has written and directed mono act, story telling and drama in the Kerala School Kalatsavam, the largest art festival in Asia, and has trained children and achieved brilliant success at the state level with an 'A' grade. It was her confidence in this that led her to cinema. She is currently working as a Teacher Educator at the Institute of Teacher Education.

For the past ten years, she has been conducting studies among various tribal groups in Kerala, including Muthuvan, Malayaraya, Irula, Muduga, Kurumba and Cholanayka. Sindhu is one of the 10 teachers selected from among the teachers of Kerala to prepare a research project with academic financial assistance from the State Council of Education Research and Training (SCERT). The research topic was Empowering Chola Naika Students through local text books- An effective educational intervention.

They are also social activists who are constantly fighting for the upliftment of underprivileged people. They are actively involved in the problems of women, children and tribal groups. Sindhu was the scriptwriter and director of the one-hour film 'Akam Porul', which was prepared for the counseling program implemented in schools by the Department of General Education in 2013 to guide adolescent children on the right path. This film was widely noted.

The film Chiram was born from the perspective of using the art form of cinema effectively for social change. The desire to make one's own mark in the film industry by dealing with socially relevant issues is fulfilled through this film.`,
    french: `Sindhuparadayil est un nouveau réalisateur et scénariste dans l'industrie cinématographique. Il travaille au ministère de l'Éducation publique depuis vingt ans. Elle a commencé comme professeur de lycée. Il a formé des enfants à l'écriture et à la mise en scène de mono-actes, de contes et de théâtre au Kerala School Arts Festival, le plus grand festival artistique d'Asie, et a pu obtenir un brillant succès au niveau de l'État avec une note « A ». C'est cette confiance qui a conduit au film. Je travaille actuellement comme formateur d'enseignants à l'Institut de formation des enseignants.

Au cours des dix dernières années, des études ont été menées auprès de divers groupes tribaux du Kerala, notamment les tribus Muthuvan, Malayaraya, Irula, Muduga, Kurumba et Cholanayka. Sindhu est l'un des 10 enseignants du Kerala qui ont été sélectionnés pour préparer un projet de recherche avec l'aide financière académique du Conseil d'État pour la recherche et la formation en éducation (SCERT). Le sujet de recherche était l'autonomisation des étudiants Chola Naika grâce aux manuels scolaires locaux - Une intervention éducative efficace.

Ce sont également des activistes sociaux qui luttent constamment pour l'amélioration du sort des personnes défavorisées. Activement impliqué dans les questions des femmes, des enfants et des communautés tribales. Sindhu était le scénariste et le réalisateur du film d'une heure « Akam Porul », qui a été préparé pour le programme de conseil mis en œuvre dans les écoles par le ministère de l'Éducation générale en 2013 pour guider les adolescents sur le bon chemin. Ce film a reçu beaucoup d'attention.

Le film Chiram est né de la perspective d'utiliser efficacement la forme d'art du cinéma pour le changement social. Ce film répond au désir de laisser sa propre marque dans l'industrie cinématographique en abordant des questions socialement pertinentes.`
  }
};

const SindhuProfile = () => {
  const [lang, setLang] = useState('english');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIdx, setModalIdx] = useState(null);

  const openModal = (idx) => {
    setModalIdx(idx);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalIdx(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setModalIdx((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setModalIdx((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="profile-page">
      <Navbar />
      <div className="profile-card" data-aos="fade-up">
        <img src={SINDHU_PROFILE.image} alt={SINDHU_PROFILE.name} className="profile-img" />
        <h2 className="profile-name">{SINDHU_PROFILE.name}</h2>
        <div className="lang-toggle">
          <button
            className={lang === 'english' ? 'active' : ''}
            onClick={() => setLang('english')}
          >
            English
          </button>
          <button
            className={lang === 'french' ? 'active' : ''}
            onClick={() => setLang('french')}
          >
            French
          </button>
        </div>
        <div className="profile-bio">
          {SINDHU_PROFILE.description[lang]
            .split('\n\n')
            .map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
        </div>
      </div>
      <div className="gallery-section" data-aos="fade-up">
        <h3 className="gallery-title">Gallery</h3>
        <div className="gallery-grid">
          {GALLERY_IMAGES.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.desc}
              className="gallery-img"
              onClick={() => openModal(idx)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-arrow left" onClick={showPrev}>&#8592;</button>
            <img src={GALLERY_IMAGES[modalIdx].src} alt="Large view" className="modal-img" />
            <button className="modal-arrow right" onClick={showNext}>&#8594;</button>
            <div className="modal-desc">{GALLERY_IMAGES[modalIdx].desc}</div>
            <button className="modal-close" onClick={closeModal}>&times;</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .profile-page {
          min-height: 100vh;
          background: var(--primary-bg);
          padding: 3rem 0 2rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .profile-card {
          margin-top: 90px;
          background: var(--glass-bg, #fff);
          border-radius: var(--border-radius, 1.2rem);
          box-shadow: var(--shadow, 0 2px 12px rgba(34,34,34,0.07));
          padding: 2.5rem 1.2rem;
          text-align: center;
          width: 100%;
          max-width: 1100px;
          margin-bottom: 2.5rem;
          margin-left: 0;
          margin-right: 0;
        }
        .profile-img {
          width: 220px;
          height: 220px;
          border-radius: 50%;
          object-fit: cover;
          object-position: center 25%;
          border: 3px solid var(--accent-color, #FFD600);
          margin-bottom: 1.2rem;
        }
        .profile-name {
          font-size: 2rem;
          color: var(--accent-color, #FFD600);
          margin-bottom: 1.2rem;
        }
        .lang-toggle {
          margin-bottom: 1.2rem;
        }
        .lang-toggle button {
          background: none;
          border: 2px solid var(--accent-color, #FFD600);
          color: var(--accent-color, #FFD600);
          font-weight: 600;
          padding: 0.4em 1.2em;
          border-radius: 20px;
          margin: 0 0.5em;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .lang-toggle button.active,
        .lang-toggle button:hover {
          background: var(--accent-color, #FFD600);
          color: #222;
        }
        .profile-bio p {
          font-size: 1.08rem;
          color: var(--text-main, #222);
          margin-top: 1.2rem;
          text-align: justify;
          line-height: 1.7;
          margin-bottom: 1.2em;
        }
        .gallery-section {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
        }
        .gallery-title {
          font-size: 1.5rem;
          color: var(--accent-color, #FFD600);
          margin-bottom: 1.2rem;
          text-align: center;
        }
        .gallery-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: center;
        }
        .gallery-img {
          width: 220px;
          height: 160px;
          object-fit: cover;
          border-radius: 14px;
          box-shadow: 0 4px 24px rgba(255, 214, 0, 0.10);
          transition: transform 0.3s;
          cursor: pointer;
        }
        .gallery-img:hover {
          transform: scale(1.05);
        }
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }
        .modal-content {
          position: relative;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(16px);
          border-radius: 12px;
          padding: 1.5rem 2.5rem;
          box-shadow: 0 8px 32px rgba(0,0,0,0.25);
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 320px;
        }
        .modal-img {
          max-width: 80vw;
          max-height: 60vh;
          border-radius: 10px;
        }
        .modal-desc {
          margin-top: 1rem;
          font-size: 1.1rem;
          color: #fff;
          text-align: center;
        }
        .modal-close {
          position: absolute;
          top: 0.5rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 2.2rem;
          color: #333;
          cursor: pointer;
        }
        .modal-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.7);
          border: none;
          font-size: 2.5rem;
          color: #222;
          cursor: pointer;
          padding: 0.2em 0.5em;
          border-radius: 50%;
          z-index: 2;
          transition: background 0.2s;
        }
        .modal-arrow.left {
          left: -2.5rem;
        }
        .modal-arrow.right {
          right: -2.5rem;
        }
        .modal-arrow:hover {
          background: #FFD600;
          color: #111;
        }
        @media (max-width: 700px) {
          .profile-card {
            padding: 1.2rem 0.7rem;
            max-width: 100vw;
          }
          .gallery-img {
            width: 90vw;
            max-width: 320px;
            height: 160px;
          }
          .modal-content {
            padding: 1rem 0.2rem;
            min-width: 0;
          }
          .modal-arrow.left {
            left: 0.2rem;
          }
          .modal-arrow.right {
            right: 0.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SindhuProfile;