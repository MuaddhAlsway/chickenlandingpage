import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 2L2 14L14 26L26 14L14 2Z" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="14" cy="14" r="4" fill="currentColor"/>
              </svg>
              <span className="footer__logo-text">GOLDEN CRISP</span>
            </div>
            <p className="footer__tagline">Redefining Fried Chicken.</p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="1" y="1" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="13.5" cy="4.5" r="1" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M16 1L8 10M8 10L16 17H13L5 10M8 10L5 17H2L10 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="TikTok">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M12 1V11C12 13.2 10.2 15 8 15C5.8 15 4 13.2 4 11C4 8.8 5.8 7 8 7V14C9.7 14 11 12.7 11 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Snapchat">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2C6 2 4 4.5 4 7V10C3 10 2 10.5 2 11C2 11.5 3 12 4 12.5C4.5 15 5 16 9 16C13 16 13.5 15 14 12.5C15 12 16 11.5 16 11C16 10.5 15 10 14 10V7C14 4.5 12 2 9 2Z" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Menu</h4>
            <a href="#menu" className="footer__link">Signature Items</a>
            <a href="#sauces" className="footer__link">Sauces</a>
            <a href="#family" className="footer__link">Family Meals</a>
            <a href="#" className="footer__link">Beverages</a>
            <a href="#" className="footer__link">Desserts</a>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Company</h4>
            <a href="#" className="footer__link">Our Story</a>
            <a href="#" className="footer__link">Careers</a>
            <a href="#" className="footer__link">Press</a>
            <a href="#" className="footer__link">Sustainability</a>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Support</h4>
            <a href="#" className="footer__link">Contact Us</a>
            <a href="#membership" className="footer__link">The Club</a>
            <a href="#" className="footer__link">Gift Cards</a>
            <a href="#" className="footer__link">Catering</a>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Connect</h4>
            <a href="#order" className="footer__link">Order Online</a>
            <a href="#" className="footer__link">Find a Location</a>
            <a href="#" className="footer__link">Download App</a>
          </div>
        </div>

        <div className="footer__newsletter">
          <div className="footer__newsletter-content">
            <span className="label">Stay Golden</span>
            <p className="footer__newsletter-desc">
              Get exclusive offers, new menu drops, and golden moments delivered to your inbox.
            </p>
          </div>
          <div className="footer__newsletter-form">
            <input type="email" placeholder="Your email address" className="footer__newsletter-input" />
            <button className="btn-primary footer__newsletter-btn">
              <span>Subscribe</span>
            </button>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copyright">
            &copy; 2024 GOLDEN CRISP. All rights reserved.
          </span>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
