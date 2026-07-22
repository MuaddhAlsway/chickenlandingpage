import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../context/LanguageContext';
import { menuItems, getLocalizedItem } from '../../data/menuData';
import './Menu.css';

gsap.registerPlugin(ScrollTrigger);

const Menu = () => {
  const sectionRef = useRef(null);
  const { t, lang, getRoute } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.menu__label',
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );

      gsap.fromTo('.menu__title',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: '.menu__title', start: 'top 85%' }
        }
      );

      gsap.utils.toArray('.menu__card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.8,
            delay: i * 0.1,
            scrollTrigger: { trigger: card, start: 'top 85%' }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const items = menuItems.slice(0, 6);

  return (
    <section id="menu" ref={sectionRef} className="menu section-padding">
      <div className="container">
        <div className="menu__header">
          <span className="label menu__label">{t('menuLabel')}</span>
          <h2 className="headline menu__title">
            {t('menuTitle1')}<br/>
            <span className="gold-text">{t('menuTitle2')}</span>
          </h2>
        </div>

        <div className="menu__grid">
          {items.map((item, i) => {
            const localized = getLocalizedItem(item, lang);
            return (
              <Link to={getRoute(`/menu/${item.id}`)} key={i} className="menu__card">
                <div className="menu__card-visual">
                  <img
                    src={item.image}
                    alt={localized.name}
                    className="menu__card-img"
                    loading="lazy"
                  />
                  <div className="menu__card-overlay"></div>
                  <span className="menu__card-tag">{localized.tag}</span>
                </div>
                <div className="menu__card-content">
                  <div className="menu__card-top">
                    <h3 className="menu__card-name">{localized.name}</h3>
                    <span className="menu__card-price">SAR {item.price}</span>
                  </div>
                  <p className="menu__card-desc">{localized.description}</p>
                  <div className="menu__card-bottom">
                    <span className="menu__card-category">{localized.category}</span>
                    <span className="menu__card-add">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M3 9H15M15 9L10.5 4.5M15 9L10.5 13.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="menu__footer">
          <Link to={getRoute('/menu')} className="btn-primary">
            <span>{t('menuViewFull')}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;
