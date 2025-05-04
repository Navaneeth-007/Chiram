import React, { useState } from 'react';
import Navbar from '../../components/Navbar';

const GALLERY_IMAGES = [
  { src: '/images/sathyajith/gallery1.jpg', desc: 'With Crew at Chiram Movie Set' },
  { src: '/images/sathyajith/gallery2.jpg', desc: ''},
  { src: '/images/sathyajith/gallery3.jpg', desc: '' },
  { src: '/images/sathyajith/gallery4.jpg', desc: 'With Family' },
  { src: '/images/sathyajith/gallery5.jpg', desc: 'With Crew at Chiram Movie Set' },
  { src: '/images/sathyajith/gallery6.jpg', desc: '' },
  // Add more images and descriptions as needed
];

const SATHYAJITH_PROFILE = {
  name: "Sathyajith Nair",
  image: "/images/placeholder-producer1.jpg", // Update with actual path if needed
  description: {
    english: `Sathyajith Nair, a dynamic entrepreneur and community leader, was born in Kerala, India, and spent his formative years in Bhilai. He later moved to the United States, where he pursued higher education in electrical engineering, earning both his undergraduate and master's degrees from the University of Oklahoma.

Sathyajith began his professional career in the field of information technology, serving for several years as the Director of IT at the Oklahoma University Medical Center. With a strong foundation in technology and management, he later transitioned into the healthcare sector, where he successfully established and operated several home health and hospice agencies.

Deeply rooted in his cultural heritage, Sathyajith has been an active and influential member of the Indian-American community. He played a significant role in the Kerala Hindu Society of Dallas and served as the General Secretary of Kerala Hindus of North America. He was also the President of the NSS (Nair Service Society) of North Texas and went on to serve as the General Secretary of NSS of North America. In addition, he has been instrumental in organizing multiple conventions for the World Malayalee Organization (WMO), showcasing his leadership and commitment to uniting the global Malayalee diaspora.

Currently, he is associated with the World Pravasi Malayalee community and continues to work on initiatives that support and connect Malayalees across the globe. In keeping with his passion for health and well-being, Sathyajith founded Pranaah Naturopathy Center with branches in Vavvukkad and Mannar, Kerala. The center promotes holistic wellness through lifestyle changes, natural therapies, diet modification, meditation, and exercise.

His entrepreneurial spirit also led him to open a restaurant focused on healthy eating. Moreover, he holds a partnership with Hala Medical Center in Kuwait, expanding his healthcare ventures internationally.

Sathyajith is also a generous philanthropist, contributing to numerous charitable causes, including annadanam (food donations) and other community support initiatives. His deep reverence for nature is not only reflected in his lifestyle and health practices but also in his creative pursuits, such as his involvement in the film Chiram, which highlights themes of nature preservation.

He lives with his wife and three children and continues to inspire others through his commitment to health, culture, service, and sustainability.`,
    french: `Sathyajith Nair, entrepreneur dynamique et leader communautaire, est né au Kerala, en Inde, et a passé ses années de formation à Bhilai. Il a ensuite déménagé aux États-Unis, où il a suivi des études supérieures en génie électrique et obtenu une licence et un master à l'Université d'Oklahoma.

Sathyajith a débuté sa carrière professionnelle dans le domaine des technologies de l'information, occupant pendant plusieurs années le poste de directeur informatique au Centre médical de l'Université d'Oklahoma. Fort de solides connaissances en technologie et en gestion, il s'est ensuite tourné vers le secteur de la santé, où il a créé et dirigé avec succès plusieurs agences de soins à domicile et de soins palliatifs.

Profondément ancré dans son héritage culturel, Sathyajith a été un membre actif et influent de la communauté indo-américaine. Il a joué un rôle important au sein de la Kerala Hindu Society de Dallas et a été secrétaire général des Kerala Hindus d'Amérique du Nord. Il a également été président de la NSS (Nair Service Society) du nord du Texas, avant d'occuper le poste de secrétaire général de la NSS d'Amérique du Nord. Il a également joué un rôle déterminant dans l'organisation de plusieurs congrès pour l'Organisation mondiale des Malayalee (OMM), démontrant ainsi son leadership et son engagement à fédérer la diaspora malayalee mondiale.

Il est actuellement associé à la communauté malayalee mondiale Pravasi et continue de travailler sur des initiatives qui soutiennent et connectent les Malayalee du monde entier. Fidèle à sa passion pour la santé et le bien-être, Sathyajith a fondé le centre de naturopathie Pranaah, avec des antennes à Vavvukkad et Mannar, au Kerala. Le centre promeut le bien-être holistique par le biais de changements de mode de vie, de thérapies naturelles, de modifications alimentaires, de méditation et d'exercice physique.

Son esprit d'entreprise l'a également conduit à ouvrir un restaurant axé sur une alimentation saine. De plus, il est partenaire du centre médical Hala au Koweït, développant ainsi ses activités de santé à l'international.

Sathyajith est également un généreux philanthrope, contribuant à de nombreuses causes caritatives, notamment l'annadanam (dons alimentaires) et d'autres initiatives de soutien communautaire. Son profond respect pour la nature se reflète non seulement dans son mode de vie et ses pratiques de santé, mais aussi dans ses activités créatives, comme sa participation au film Chiram, qui met en avant les thèmes de la préservation de la nature.

Il vit avec sa femme et ses trois enfants et continue d'inspirer les autres par son engagement en faveur de la santé, de la culture, du service et du développement durable.`
  }
};

const SathyajithProfile = () => {
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
        <img src={SATHYAJITH_PROFILE.image} alt={SATHYAJITH_PROFILE.name} className="profile-img" />
        <h2 className="profile-name">{SATHYAJITH_PROFILE.name}</h2>
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
          {SATHYAJITH_PROFILE.description[lang]
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
        /* Modal styles */
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
          color: #fff;
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

export default SathyajithProfile;
