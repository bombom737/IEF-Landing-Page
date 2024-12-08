import { useState, useEffect } from 'react';
import IEFLogoDay from './images/ief-logo-day.jpg';
import IEFLogoNight from './images/ief-logo-night.jpg';
import SunIcon from './images/sun.png';
import MoonIcon from './images/moon.png';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    () => localStorage.getItem('theme') === 'dark'
  );
  const [isNavbarSmall, setIsNavbarSmall] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleScroll = () => {
    setIsNavbarSmall(window.scrollY > 50); 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentThemeIcon = isDarkMode ? SunIcon : MoonIcon;
  const currentThemeLogo = isDarkMode ? IEFLogoNight : IEFLogoDay;

  return (
    <div className="container">
      <div className={`navbar ${isNavbarSmall ? 'navbar-small' : ''}`}>
        <a id="ief-logo" href="https://ief.wiki/wiki/Main_Page">
          <img src={currentThemeLogo} alt="Impact Evaluation Foundation Logo" />
        </a>
        <button
          id="theme-toggle"
          aria-label="Toggle Theme"
          onClick={toggleTheme}
        >
          <img src={currentThemeIcon} alt="Toggle Theme Icon" />
        </button>
      </div>
      <div className="hero">
        <div className="hero-content">
          <div className="video-section">
            <iframe
              id="video-frame"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/wsXNKD9PCKQ"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <a href="https://ief.wiki/wiki/Main_Page" className="btn">
            Explore the Knowledge Base
          </a>
        </div>
      </div>
      <div className="description">
        <p>
          The Impact Evaluation Foundation's wiki knowledge base is a
          comprehensive resource designed to aid professionals in evaluating
          the impact of various initiatives. By providing access to
          cutting-edge research, methodologies, and case studies, we empower
          individuals and organizations to make informed decisions that drive
          meaningful change.
        </p>
      </div>
    </div>
  );
}

export default App;
