import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../context/LanguageContext';
import './Offers.css';

gsap.registerPlugin(ScrollTrigger);

const Offers = () => {
  const { t, lang } = useLanguage();
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.offers__label',
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );

      gsap.fromTo('.offers__title',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: '.offers__title', start: 'top 85%' }
        }
      );

      gsap.utils.toArray('.offers__card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.8,
            delay: i * 0.1,
            scrollTrigger: { trigger: card, start: 'top 85%' }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const offers = [
    {
      badge: { en: 'New', ar: 'جديد' },
      title: { en: 'First Order', ar: 'طلب أول' },
      discount: '25% OFF',
      description: { en: 'On your first order. Welcome to the family.', ar: 'على طلبك الأول. أهلاً بك في العائلة.' },
      code: 'WELCOME25',
      expires: { en: 'Valid until Dec 31', ar: 'صالح حتى ٣١ ديسمبر' },
    },
    {
      badge: { en: 'Limited', ar: 'محدود' },
      title: { en: 'Midnight Drop', ar: 'عرض منتصف الليل' },
      discount: 'Buy 1 Get 1',
      description: { en: 'Every Friday & Saturday, 11PM-2AM. Exclusive late-night menu.', ar: 'كل جمعة وسبت، ١١ مساءً - ٢ صباحًا. قائمة ليلية حصرية.' },
      code: 'MIDNIGHT',
      expires: { en: 'Every Weekend', ar: 'كل عطلة نهاية الأسبوع' },
    },
    {
      badge: { en: 'Members', ar: 'أعضاء' },
      title: { en: 'Gold Weekend', ar: 'عطلة الذهبية' },
      discount: '30% OFF',
      description: { en: 'Gold & Platinum members enjoy exclusive weekend pricing.', ar: 'أعضاء الذهبي والبلاتيني يستمتعون بأسعار حصرية في عطلة نهاية الأسبوع.' },
      code: 'GOLD30',
      expires: { en: 'Members Only', ar: 'للأعضاء فقط' },
    },
  ];

  return (
    <section id="offers" ref={sectionRef} className="offers section-padding">
      <div className="container">
        <div className="offers__header">
          <span className="label offers__label">{t('offersLabel')}</span>
          <h2 className="headline offers__title">
            {t('offersTitle1')}<br/>
            <span className="gold-text">{t('offersTitle2')}</span>
          </h2>
        </div>

        <div className="offers__grid">
          {offers.map((offer, i) => (
            <div key={i} className="offers__card">
              <div className="offers__card-badge">{offer.badge[lang]}</div>
              <div className="offers__card-content">
                <span className="offers__card-title">{offer.title[lang]}</span>
                <span className="offers__card-discount">{offer.discount}</span>
                <p className="offers__card-desc">{offer.description[lang]}</p>
                <div className="offers__card-code">
                  <span className="offers__card-code-label">{t('offersCode')}</span>
                  <span className="offers__card-code-value">{offer.code}</span>
                </div>
                <span className="offers__card-expires">{offer.expires[lang]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
