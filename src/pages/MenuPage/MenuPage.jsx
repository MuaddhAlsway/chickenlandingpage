import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { menuItems, categories } from '../../data/menuData';
import './MenuPage.css';

gsap.registerPlugin(ScrollTrigger);

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredItems, setFilteredItems] = useState(menuItems);
  const gridRef = useRef(null);
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const items = activeCategory === 'All'
      ? menuItems
      : menuItems.filter(item => item.category === activeCategory);
    setFilteredItems(items);
  }, [activeCategory]);

  useEffect(() => {
    gsap.fromTo('.menu-page__hero-title',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );
    gsap.fromTo('.menu-page__hero-sub',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.2 }
    );
  }, []);

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(gridRef.current.children,
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1,
          stagger: 0.06,
          duration: 0.5,
          ease: 'power2.out',
          clearProps: 'all',
        }
      );
    }
  }, [filteredItems]);

  return (
    <div ref={pageRef} className="menu-page">
      <section className="menu-page__hero">
        <div className="container">
          <span className="label">The Menu</span>
          <h1 className="headline menu-page__hero-title">
            Every piece, a<br />
            <span className="gold-text">masterpiece.</span>
          </h1>
          <p className="menu-page__hero-sub">
            Explore our full collection of signature fried chicken, artisan sauces, and family feasts.
          </p>
        </div>
      </section>

      <section className="menu-page__filter section-padding">
        <div className="container">
          <div className="menu-page__categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`menu-page__cat-btn ${activeCategory === cat ? 'menu-page__cat-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="menu-page__count">
            <span>{filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}</span>
          </div>

          <div ref={gridRef} className="menu-page__grid">
            {filteredItems.map((item) => (
              <Link to={`/menu/${item.id}`} key={item.id} className="menu-page__card">
                <div className="menu-page__card-visual">
                  <img src={item.image} alt={item.name} className="menu-page__card-img" loading="lazy" />
                  <div className="menu-page__card-overlay"></div>
                  <span className="menu-page__card-tag">{item.tag}</span>
                  {item.spiceLevel > 0 && (
                    <span className="menu-page__card-spice">
                      {Array.from({ length: item.spiceLevel }, (_, i) => '🌶').join('')}
                    </span>
                  )}
                </div>
                <div className="menu-page__card-content">
                  <div className="menu-page__card-top">
                    <h3 className="menu-page__card-name">{item.name}</h3>
                    <span className="menu-page__card-price">SAR {item.price}</span>
                  </div>
                  <p className="menu-page__card-desc">{item.description}</p>
                  <div className="menu-page__card-bottom">
                    <span className="menu-page__card-category">{item.category}</span>
                    <span className="menu-page__card-view">
                      View
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="menu-page__empty">
              <p>No items found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
