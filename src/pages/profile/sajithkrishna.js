import React, { useState } from 'react';
import Navbar from '../../components/Navbar';

const SAJITH_PROFILE = {
  name: "Sajith Krishna",
  image: "/images/placeholder-producer2.jpg", // Update with actual path if needed
  description: {
    english: `Sajith Krishna is a seasoned film industry professional with over 25 years of experience in Indian cinema. He began his journey in 1998 with the production and distribution of the Malayalam film Mayajalam, and since then, he has played pivotal roles in shaping numerous successful projects.

Throughout his extensive career, Sajith has worn many hats — from Finance Controller and Project Designer to Executive Producer, Producer, Distributor, and Exhibitor. His contributions span both the Malayalam and Tamil film industries, showcasing his versatility and deep understanding of the cinematic landscape.

One of his most notable achievements is his involvement in the blockbuster film 20-20, a landmark project that was celebrated by audiences and critics alike.

Driven by a lifelong passion for filmmaking, Sajith remains deeply engaged in the evolving world of cinema. His dedication, vision, and rich experience continue to inspire and influence the future of Indian filmmaking.`,
    french: `Sajith Krishna est un professionnel chevronné de l'industrie cinématographique avec plus de 25 ans d'expérience dans le cinéma indien. Il a commencé son parcours en 1998 avec la production et la distribution du film malayalam Mayajalam, et depuis, il a joué des rôles clés dans de nombreux projets à succès.

Tout au long de sa carrière, Sajith a porté de nombreuses casquettes — de contrôleur financier et concepteur de projet à producteur exécutif, producteur, distributeur et exploitant. Ses contributions s'étendent aux industries cinématographiques malayalam et tamoule, démontrant sa polyvalence et sa profonde compréhension du paysage cinématographique.

L'une de ses réalisations les plus remarquables est sa participation au film à succès 20-20, un projet marquant salué par le public et la critique.

Animé par une passion de toujours pour le cinéma, Sajith reste profondément engagé dans le monde en évolution du cinéma. Son dévouement, sa vision et sa riche expérience continuent d'inspirer et d'influencer l'avenir du cinéma indien.`
  }
};

const RECENT_WORKS = [
  { title: "Udal", role: "Executive Producer" },
  { title: "Pappan", role: "Project Designer" },
  { title: "Namukku kodathiyil kanam", role: "Executive Producer" },
  { title: "Aazhi", role: "Producer" },
  { title: "JSK", role: "Line Producer" },
  { title: "Thankamany", role: "Project Designer" },
  { title: "Kummattikali", role: "Executive Producer" },
  { title: "Chiram", role: "Line Producer" }
];

const FILMOGRAPHY = [
  { title: "Meenakshi kallyanam", designation: "Distribution", actors: "Mukesh, Mohini", director: "Jose Thomas", year: 1998 },
  { title: "Pranaya Nilavu", designation: "Distribution", actors: "Dileep, Mohini", director: "Vinayan", year: 1999 },
  { title: "Chandranudikkunnathikil", designation: "Distribution", actors: "Dileep, Kaya Madhavan", director: "Lal Jose", year: 1999 },
  { title: "Tokkyo Nagarile Visheshal", designation: "Distribution", actors: "Jagathy, Mukesh", director: "Jose Thomas", year: 1999 },
  { title: "Darling Darling", designation: "Production and Distribution", actors: "Dileep, Vineeth", director: "Rajasenan", year: 2000 },
  { title: "Dhosth", designation: "Distribution", actors: "Dileep, Kunchako Boban", director: "Thulasi Das", year: 2001 },
  { title: "Twenty-20", designation: "Purchase manager", actors: "Mohan Lal, Mammootty, Suresh Gopi", director: "Joshi", year: 2008 },
  { title: "Red Chillies", designation: "Finance Controller", actors: "Mohan Lal, Thilakan", director: "Shaji Kailas", year: 2009 },
  { title: "Ee Pattanathil Bhootham", designation: "Project Designer", actors: "Mammootty, Kavya Madhavan", director: "Jhony Antony", year: 2009 },
  { title: "My Big Father", designation: "Finance Controller", actors: "Jayaram, Guinnes Pakru", director: "S P Mahesh", year: 2009 },
  { title: "Rama Ravanan", designation: "Project Designer", actors: "Suresh Gopi, Mithra Kuriyan", director: "Biju Vattappara", year: 2010 },
  { title: "Swantham Bharya Zindabad", designation: "Project Designer", actors: "Gunnies Pakru", director: "Biju Vattappara", year: 2010 },
  { title: "Oridathoru Postman", designation: "Finance Controller", actors: "Kuchako Boban, Sharth Kumar", director: "Shaji Azeez", year: 2010 },
  { title: "Bhakathajangalude Sradhakku", designation: "Finance Controller", actors: "Kavya Madhavan, Irshad", director: "Priyanandhan", year: 2011 },
  { title: "Melvilasam", designation: "Project Designer", actors: "Suresh Gopi, Parthiban", director: "Madhav Ramadasan", year: 2011 },
  { title: "Trivandrum Lodge", designation: "Project Designer", actors: "Anoop Menon, Jayasurya", director: "V K Prakash", year: 2012 },
  { title: "Idiot", designation: "Project Designer", actors: "Asif Ali, Sanusha", director: "K S Bava", year: 2012 },
  { title: "Hotel California", designation: "Project Designer", actors: "Jayasury, Anoop Menon", director: "Aji Jhon", year: 2013 },
  { title: "Kuttyium Kolum", designation: "Project Designer", actors: "Gunnies Pakru, Vijayraghavan", director: "Gunnies Pakru", year: 2013 },
  { title: "Apothicary", designation: "Project Designer", actors: "Suresh Gopi, Jayasurya", director: "Madhav Ramadasan", year: 2014 },
  { title: "Njagalude veetile adhithikal", designation: "Project Designer", actors: "Jayaram, Priyamani", director: "Sibi Malayil", year: 2014 },
  { title: "Lal Bahadur Sasthri", designation: "Project Designer", actors: "Jayasury, Nedumudi Venu", director: "Rejish Mihila", year: 2014 },
  { title: "Fireman", designation: "Project Designer", actors: "Mammootty, Nyla Usha", director: "Deepu Karunakaran", year: 2015 },
  { title: "Nirnayakam", designation: "Project Designer", actors: "Asif Ali, Malavika Mohanan", director: "V K Prakash", year: 2015 },
  { title: "Compartment", designation: "Project Designer", actors: "Salim Kumar", director: "Salim Kumar", year: 2015 },
  { title: "Thoppil Joppan", designation: "Project Designer", actors: "Mammootty, Mamtha Mohan Das", director: "Jhony Antony", year: 2016 },
  { title: "Kuttikal and sukshikuka", designation: "Project Designer", actors: "Anoop Menon, Bhavana", director: "Kalavoor Ravikumar", year: 2016 },
  { title: "Ithu Thanada Police", designation: "Project Designer", actors: "Asif Ali, Jannai Ayer", director: "Manoj Palodan", year: 2016 },
  { title: "Overtake", designation: "Project Designer", actors: "Vijaya Babu, Parvathi Nair", director: "Jhon Joseph", year: 2017 },
  { title: "Aadham Jhon", designation: "Project Designer", actors: "Prithviraj, Mishti", director: "Jinu Abhraham", year: 2017 },
  { title: "Shikkari Shambu", designation: "Project Designer", actors: "Kuchako Boban, Vishnu Unnikrishnan", director: "Sugeeth", year: 2018 },
  { title: "Ilyaraja", designation: "Producer", actors: "Gunnies Pakru, Gokul Suesh", director: "Madhav Ramadasan", year: 2018 },
  { title: "Children's Park", designation: "Executive Producer", actors: "Vishnu Unnikrishnan, Druvan", director: "Shafi", year: 2019 },
  { title: "Fancy Dress", designation: "Project Designer", actors: "Gunnies Pakru, Swetha Menon", director: "Ranjith Sakaria", year: 2019 },
  { title: "My Santa", designation: "Producer", actors: "Dileep, Ausree", director: "Sugeeth", year: 2019 }
];

const SajithKrishnaProfile = () => {
  const [lang, setLang] = useState('english');
  const [showAll, setShowAll] = useState(false);

  // Show only first 10 if not showAll
  const displayedFilmography = showAll ? FILMOGRAPHY : FILMOGRAPHY.slice(0, 10);

  return (
    <div className="profile-page">
      <Navbar />
      <div className="profile-card" data-aos="fade-up">
        <img src={SAJITH_PROFILE.image} alt={SAJITH_PROFILE.name} className="profile-img" />
        <h2 className="profile-name">{SAJITH_PROFILE.name}</h2>
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
          {SAJITH_PROFILE.description[lang]
            .split('\n\n')
            .map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
        </div>
      </div>
      <div className="recent-works-section" data-aos="fade-up">
        <h3 className="recent-works-title">Recent Works</h3>
        <ul className="recent-works-list">
          {RECENT_WORKS.map((work, idx) => (
            <li key={idx}>
              <span className="work-title">{work.title}</span>
              <span className="work-role">({work.role})</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="filmography-section" data-aos="fade-up">
        <h3 className="filmography-title">Filmography</h3>
        <div className="filmography-table-wrapper">
          <table className="filmography-table">
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Title</th>
                <th>Designation</th>
                <th>Actors</th>
                <th>Director</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {displayedFilmography.map((film, idx) => (
                <tr key={idx}>
                  <td>{showAll ? idx + 1 : idx + 1}</td>
                  <td>{film.title}</td>
                  <td>{film.designation}</td>
                  <td>{film.actors}</td>
                  <td>{film.director}</td>
                  <td>{film.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {!showAll && FILMOGRAPHY.length > 10 && (
          <div className="view-more-wrapper">
            <button className="view-more-btn" onClick={() => setShowAll(true)}>
              View More
            </button>
          </div>
        )}
      </div>
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
        .recent-works-section {
          width: 100%;
          max-width: 700px;
          margin: 0 auto 2.5rem auto;
          background: #fff;
          border-radius: 1rem;
          box-shadow: 0 2px 12px rgba(34,34,34,0.07);
          padding: 2rem 1.2rem;
        }
        .recent-works-title {
          font-size: 1.3rem;
          color: var(--accent-color, #FFD600);
          margin-bottom: 1.2rem;
          text-align: center;
        }
        .recent-works-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }
        .work-title {
          font-weight: 600;
          color: #222;
        }
        .work-role {
          color: #888;
          margin-left: 0.5em;
        }
        .filmography-section {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        .filmography-title {
          font-size: 1.5rem;
          color: var(--accent-color, #FFD600);
          margin-bottom: 1.2rem;
          text-align: center;
        }
        .filmography-table-wrapper {
          overflow-x: auto;
        }
        .filmography-table {
          width: 100%;
          border-collapse: collapse;
          background: #fff;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(34,34,34,0.07);
        }
        .filmography-table th, .filmography-table td {
          padding: 0.7em 1em;
          border-bottom: 1px solid #eee;
          text-align: left;
          font-size: 1rem;
        }
        .filmography-table th {
          background: #f8f6f2;
          color: #222;
          font-weight: 700;
        }
        .filmography-table tr:last-child td {
          border-bottom: none;
        }
        .view-more-wrapper {
          text-align: center;
          margin-top: 1.2rem;
        }
        .view-more-btn {
          background: var(--accent-color, #FFD600);
          color: #222;
          border: none;
          border-radius: 20px;
          padding: 0.6em 2em;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(34,34,34,0.07);
          transition: background 0.2s, color 0.2s;
        }
        .view-more-btn:hover {
          background: #ffe066;
        }
        @media (max-width: 900px) {
          .filmography-table th, .filmography-table td {
            font-size: 0.95rem;
            padding: 0.5em 0.5em;
          }
        }
        @media (max-width: 700px) {
          .profile-card {
            padding: 1.2rem 0.7rem;
            max-width: 100vw;
          }
          .recent-works-section {
            padding: 1.2rem 0.7rem;
            max-width: 100vw;
          }
          .filmography-section {
            max-width: 100vw;
          }
          .filmography-table th, .filmography-table td {
            font-size: 0.85rem;
            padding: 0.4em 0.3em;
          }
        }
      `}</style>
    </div>
  );
};

export default SajithKrishnaProfile;
