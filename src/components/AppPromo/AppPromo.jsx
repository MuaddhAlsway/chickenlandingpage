import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../context/LanguageContext';
import './AppPromo.css';

gsap.registerPlugin(ScrollTrigger);

const AppPromo = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
      });

      tl.fromTo('.coming-soon__label',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
      .fromTo('.coming-soon__title',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.3'
      )
      .fromTo('.coming-soon__subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.4'
      )
      .fromTo('.coming-soon__line',
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: 'power2.inOut' },
        '-=0.3'
      )
      .fromTo('.coming-soon__features .coming-soon__feature',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.5 },
        '-=0.3'
      )
      .fromTo('.coming-soon__notify',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.2'
      );

      gsap.to('.coming-soon__glow', {
        scale: 1.2,
        opacity: 0.5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="coming-soon section-padding">
      <div className="coming-soon__glow"></div>
      <div className="container">
        <div className="coming-soon__content">
          <span className="label coming-soon__label">{t('appLabel')}</span>
          <h2 className="headline coming-soon__title">
            {t('appTitle1')}<br/>
            <span className="gold-text">{t('appTitle2')}</span>
          </h2>
          <p className="coming-soon__subtitle">
            {t('appDesc')}
          </p>

          <div className="coming-soon__line"></div>

          <div className="coming-soon__features">
            <div className="coming-soon__feature">
              <div className="coming-soon__feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="coming-soon__feature-text">{t('appFeature1')}</span>
            </div>
            <div className="coming-soon__feature">
              <div className="coming-soon__feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="coming-soon__feature-text">{t('appFeature2')}</span>
            </div>
            <div className="coming-soon__feature">
              <div className="coming-soon__feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20 12V22H4V12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 7H2V12H22V7Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  <path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="coming-soon__feature-text">{t('appFeature3')}</span>
            </div>
            <div className="coming-soon__feature">
              <div className="coming-soon__feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15V3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="coming-soon__feature-text">{t('appFeature4')}</span>
            </div>
          </div>

          <div className="coming-soon__notify">
            <p className="coming-soon__notify-text">{t('appNotify')}</p>
            <div className="coming-soon__notify-form">
              <input type="email" placeholder={t('appEmail')} className="coming-soon__notify-input" />
              <button className="btn-primary coming-soon__notify-btn">
                <span>{t('appNotifyBtn')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromo;
