import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const GALLERY_IMAGES = [
  { src: '/images/gallery/g1.jpg', desc: '' },
  { src: '/images/gallery/g2.jpg', desc: '' },
  { src: '/images/gallery/g3.jpg', desc: '' },
  { src: '/images/gallery/g4.jpg', desc: 'Producer and Crew' },
  { src: '/images/gallery/g5.jpg', desc: 'Cast and Crew' },
  { src: '/images/gallery/g6.jpg', desc: '' },
  { src: '/images/gallery/g7.jpg', desc: '' },
  { src: '/images/gallery/g8.jpg', desc: '' },
  { src: '/images/gallery/g9.jpg', desc: '' },
  { src: '/images/gallery/g10.jpg', desc: '' },
  { src: '/images/gallery/g11.jpg', desc: '' },
  { src: '/images/gallery/g12.jpg', desc: '' },
  { src: '/images/gallery/g13.jpg', desc: '' },
  { src: '/images/gallery/g14.jpg', desc: '' },
  { src: '/images/gallery/g15.jpg', desc: '' },

  // Add more images as needed
];

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const openModal = idx => {
    setCurrentIdx(idx);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const nextImage = () => setCurrentIdx((currentIdx + 1) % GALLERY_IMAGES.length);
  const prevImage = () => setCurrentIdx((currentIdx - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);

  return (
    <div className="gallery-page">
      <Navbar />
      <div className="gallery-section" data-aos="fade-up">
        <h2 className="gallery-title">Gallery</h2>
        <div className="gallery-grid">
          {GALLERY_IMAGES.map((img, idx) => (
            <div className="gallery-item" key={idx} onClick={() => openModal(idx)}>
              <img src={img.src} alt={img.desc} />
            </div>
          ))}
        </div>
      </div>
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <button className="modal-arrow left" onClick={prevImage}>&#8592;</button>
            <img src={GALLERY_IMAGES[currentIdx].src} alt={GALLERY_IMAGES[currentIdx].desc} className="modal-img" />
            <button className="modal-arrow right" onClick={nextImage}>&#8594;</button>
            <div className="modal-desc">{GALLERY_IMAGES[currentIdx].desc}</div>
          </div>
        </div>
      )}
      <style jsx>{`
        .gallery-page {
          min-height: 100vh;
          background: var(--primary-bg, #f8f6f2);
        }
        .gallery-section {
          max-width: 1200px;
          margin: 100px auto 0 auto;
          padding: 2rem 1rem;
        }
        .gallery-title {
          text-align: center;
          font-size: 2.2rem;
          color: var(--accent-color, #FFD600);
          margin-bottom: 2rem;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }
        .gallery-item {
          cursor: pointer;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(34,34,34,0.07);
          transition: transform 0.2s;
        }
        .gallery-item:hover {
          transform: scale(1.04);
        }
        .gallery-item img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
        }
        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(30,30,30,0.6);
          backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-content {
          position: relative;
          background: rgba(30,30,30,0.7);
          border-radius: 1.2rem;
          padding: 2rem 2.5rem 1.5rem 2.5rem;
          box-shadow: 0 4px 32px rgba(0,0,0,0.18);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .modal-img {
          max-width: 70vw;
          max-height: 60vh;
          border-radius: 1rem;
          margin-bottom: 1.2rem;
        }
        .modal-desc {
          color: #fff;
          font-size: 1.1rem;
          margin-top: 0.5rem;
          text-align: center;
        }
        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1.5rem;
          background: none;
          border: none;
          color: #fff;
          font-size: 2rem;
          cursor: pointer;
        }
        .modal-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #FFD600;
          font-size: 2.5rem;
          cursor: pointer;
          z-index: 1;
        }
        .modal-arrow.left {
          left: 1rem;
        }
        .modal-arrow.right {
          right: 1rem;
        }
        @media (max-width: 700px) {
          .gallery-section {
            padding: 1rem 0.2rem;
          }
          .modal-content {
            padding: 1rem 0.5rem 1rem 0.5rem;
          }
          .modal-img {
            max-width: 95vw;
            max-height: 40vh;
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;
