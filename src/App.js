import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Cast from './components/Cast';
import Crew from './components/Crew';
import Team from './components/Team';
import Directors from './components/Directors';
import Producers from './components/Producers';
import WhyWatch from './components/WhyWatch';
import Footer from './components/Footer';
import SindhuProfile from './pages/SindhuProfile';
import SathyajithProfile from './pages/profile/sathyajithnair';
import SajithKrishnaProfile from './pages/profile/sajithkrishna';
import Gallery from './pages/Gallery';

function MainPage({ language, setLanguage }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Remove the '#' and scroll to the element with that id
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About language={language} setLanguage={setLanguage} />
      <Team />
      <Cast />
      <Crew />
      <WhyWatch />
      <Footer />
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState('english');
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Remove the '#' and scroll to the element with that id
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <Routes>
      <Route
        path="/"
        element={<MainPage language={language} setLanguage={setLanguage} />}
      />
      <Route path="/SindhuProfile" element={<SindhuProfile />} />
      <Route path="/profile/sathyajithnair" element={<SathyajithProfile />} />
      <Route path="/profile/sajithkrishna" element={<SajithKrishnaProfile />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}

export default App;