import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Ordering.css';
import { useLanguage } from '../../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Ordering = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.ordering__content',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
        }
      );

      gsap.fromTo('.ordering__feature',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, stagger: 0.15, duration: 0.6,
          scrollTrigger: { trigger: '.ordering__features', start: 'top 85%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="order" ref={sectionRef} className="ordering section-padding">
      <div className="container">
        <div className="ordering__content">
          <span className="label">{t('orderingLabel')}</span>
          <h2 className="headline ordering__title">
            {t('orderingTitle1')}<br/>
            <span className="gold-text">{t('orderingTitle2')}</span>
          </h2>
          <p className="ordering__desc">
            {t('orderingDesc')}
          </p>
          <div className="ordering__actions">
            <a href="#" className="btn-primary">
              <span>{t('orderingStart')}</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" className="btn-outline">
              <span>{t('orderingLocation')}</span>
            </a>
          </div>
        </div>

        <div className="ordering__features">
          <div className="ordering__feature">
            <div className="ordering__feature-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="0.75"/>
                <path d="M14 7V14L18 18" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="ordering__feature-title">{t('orderingFeature1Title')}</span>
            <span className="ordering__feature-desc">{t('orderingFeature1Desc')}</span>
          </div>
          <div className="ordering__feature">
            <div className="ordering__feature-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="0.75"/>
                <path d="M10 14L13 17L18 11" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="ordering__feature-title">{t('orderingFeature2Title')}</span>
            <span className="ordering__feature-desc">{t('orderingFeature2Desc')}</span>
          </div>
          <div className="ordering__feature">
            <div className="ordering__feature-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="0.75"/>
                <path d="M9 15C9 15 11 17 14 17C17 17 19 15 19 15" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round"/>
                <circle cx="14" cy="11" r="2" stroke="currentColor" strokeWidth="0.75"/>
              </svg>
            </div>
            <span className="ordering__feature-title">{t('orderingFeature3Title')}</span>
            <span className="ordering__feature-desc">{t('orderingFeature3Desc')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ordering;
