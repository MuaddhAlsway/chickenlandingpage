import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { toggleLanguage, t, isRTL, getRoute } = useLanguage();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav ref={navRef} className={`navbar ${scrolled || !isHome ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
          <Link to={getRoute('/')} className="navbar__logo">
          <span className="navbar__logo-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 2L2 14L14 26L26 14L14 2Z" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="14" cy="14" r="4" fill="currentColor"/>
            </svg>
          </span>
          <span className="navbar__logo-text">GOLDEN CRISP</span>
        </Link>

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {isHome && (
            <>
              <a href="#sauces" className="navbar__link" onClick={() => setMenuOpen(false)}>{t('navSauces')}</a>
              <a href="#family" className="navbar__link" onClick={() => setMenuOpen(false)}>{t('navFamily')}</a>
              <a href="#membership" className="navbar__link" onClick={() => setMenuOpen(false)}>{t('navClub')}</a>
              <a href="#offers" className="navbar__link" onClick={() => setMenuOpen(false)}>{t('navOffers')}</a>
            </>
          )}
          <Link to={getRoute('/menu')} className="navbar__link" onClick={() => setMenuOpen(false)}>
            {t('navFullMenu')}
          </Link>
          <Link to={getRoute('/#order')} className="btn-primary navbar__cta" onClick={() => setMenuOpen(false)}>
            {t('navOrderNow')}
          </Link>
          <button className="navbar__lang" onClick={() => { toggleLanguage(); setMenuOpen(false); }}>
            {isRTL ? 'EN' : 'عربي'}
          </button>
        </div>

        <div className="navbar__right">
          <button className="navbar__lang navbar__lang--desktop" onClick={toggleLanguage}>
            {isRTL ? 'EN' : 'عربي'}
          </button>
          <button
            className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
