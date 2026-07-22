import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Sauces.css';
import { useLanguage } from '../../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Sauces = () => {
  const { t, lang } = useLanguage();
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.sauces__label',
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );

      gsap.fromTo('.sauces__title',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: '.sauces__title', start: 'top 85%' }
        }
      );

      gsap.utils.toArray('.sauces__item').forEach((item, i) => {
        gsap.fromTo(item,
          { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
          {
            opacity: 1, x: 0, duration: 0.8,
            scrollTrigger: { trigger: item, start: 'top 85%' }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const sauces = [
    {
      name: { en: 'Saffron Blaze', ar: 'زعفران حارق' },
      heat: t('saucesMedium'),
      description: { en: 'A luxurious blend of saffron threads and mild chili, finished with a touch of cream. Our most iconic creation.', ar: 'خيوط زعفران مع شطة خفيفة وكريمة. أغرب صوص سويته.' },
      color: '#c9a84c',
    },
    {
      name: { en: 'Smoked Ember', ar: 'جمرة مدخّرة' },
      heat: t('saucesHot'),
      description: { en: 'Applewood smoked paprika meets habanero in this deeply complex, slow-burning masterpiece.', ar: 'بابريكا مدخّرة مع هابانيرو. صلصة حارة تجنن.' },
      color: '#c0392b',
    },
    {
      name: { en: 'Black Truffle Aioli', ar: 'آيلي الكمأة' },
      heat: t('saucesMild'),
      description: { en: 'Périgord black truffle folded into house-made garlic aioli. Pure umami indulgence.', ar: 'كمأة سوداء مع آيلي ثوم منزلي. طعم خرافي.' },
      color: '#8b7335',
    },
    {
      name: { en: 'Rose Harissa', ar: 'هريسة الورد' },
      heat: t('saucesMediumHot'),
      description: { en: 'Traditional North African harissa elevated with Damascus rose petals and Aleppo pepper.', ar: 'هريسة شمال أفريقية مع ورد دمشقي وفلفل حلب. نكهة غريبة وحلوة.' },
      color: '#d4a373',
    },
    {
      name: { en: 'Wasabi Citrus', ar: 'واسابي حمضي' },
      heat: t('saucesHot'),
      description: { en: 'Fresh wasabi root with yuzu zest and a hint of honey. An East-meets-West revelation.', ar: 'جذر واسابي طازج مع قشر يوزو وعسل. حار ومليون.' },
      color: '#6b8e23',
    },
  ];

  return (
    <section id="sauces" ref={sectionRef} className="sauces section-padding">
      <div className="container">
        <div className="sauces__layout">
          <div className="sauces__left">
            <span className="label sauces__label">{t('saucesLabel')}</span>
            <h2 className="headline sauces__title">
              {t('saucesTitle1')}<br/>
              <span className="gold-text">{t('saucesTitle2')}</span>
            </h2>
            <p className="sauces__desc">
              {t('saucesDesc')}
            </p>
            <a href="#order" className="btn-primary" style={{ marginTop: '2rem' }}>
              <span>{t('saucesCTA')}</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="sauces__right">
            {sauces.map((sauce, i) => (
              <div key={i} className="sauces__item">
                <div className="sauces__item-color" style={{ background: sauce.color }}></div>
                <div className="sauces__item-content">
                  <div className="sauces__item-top">
                    <h3 className="sauces__item-name">{sauce.name[lang]}</h3>
                    <span className="sauces__item-heat">{sauce.heat}</span>
                  </div>
                  <p className="sauces__item-desc">{sauce.description[lang]}</p>
                </div>
                <div className="sauces__item-line" style={{ background: sauce.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sauces;
