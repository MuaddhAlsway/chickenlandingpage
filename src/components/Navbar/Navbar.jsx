import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

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

  const navLinks = [
    { label: 'Menu', to: '/menu' },
    { label: 'Sauces', href: '#sauces', showOnHome: true },
    { label: 'Family', href: '#family', showOnHome: true },
    { label: 'Club', href: '#membership', showOnHome: true },
    { label: 'Offers', href: '#offers', showOnHome: true },
  ];

  const visibleLinks = isHome
    ? navLinks
    : navLinks.filter(l => l.to);

  return (
    <nav ref={navRef} className={`navbar ${scrolled || !isHome ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 2L2 14L14 26L26 14L14 2Z" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="14" cy="14" r="4" fill="currentColor"/>
            </svg>
          </span>
          <span className="navbar__logo-text">GOLDEN CRISP</span>
        </Link>

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {isHome && navLinks.filter(l => l.href).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          {!isHome && navLinks.filter(l => l.href && l.showOnHome).map((link) => (
            <Link
              key={link.label}
              to={`/${link.href}`}
              className="navbar__link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/menu" className="navbar__link" onClick={() => setMenuOpen(false)}>
            Full Menu
          </Link>
          <Link to="/#order" className="btn-primary navbar__cta" onClick={() => setMenuOpen(false)}>
            Order Now
          </Link>
        </div>

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
    </nav>
  );
};

export default Navbar;
