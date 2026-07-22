import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../context/LanguageContext';
import './Membership.css';

gsap.registerPlugin(ScrollTrigger);

const Membership = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.membership__label',
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );

      gsap.fromTo('.membership__title',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: '.membership__title', start: 'top 85%' }
        }
      );

      gsap.fromTo('.membership__card',
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, stagger: 0.2, duration: 0.8,
          scrollTrigger: { trigger: '.membership__grid', start: 'top 80%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const tiers = [
    {
      name: t('membershipSilver'),
      price: 'Free',
      benefits: [
        t('membershipPoints'),
        t('membershipBirthday'),
        t('membershipEarlyAccess'),
        t('membershipFreeDelivery100'),
      ],
    },
    {
      name: t('membershipGold'),
      price: 'SAR 49/mo',
      benefits: [
        t('membershipPoints'),
        t('membership2x'),
        t('membershipMonthlyItem'),
        t('membershipPriority'),
        t('membershipFreeDelivery'),
        t('membershipGoldEvents'),
      ],
      featured: true,
    },
    {
      name: t('membershipPlatinum'),
      price: 'SAR 129/mo',
      benefits: [
        t('membershipPoints'),
        t('membership5x'),
        t('membershipChefsTable'),
        t('membershipConcierge'),
        t('membershipMerch'),
        t('membershipLimitedDrops'),
        t('membershipPrivateEvents'),
      ],
    },
  ];

  return (
    <section id="membership" ref={sectionRef} className="membership section-padding">
      <div className="container">
        <div className="membership__header">
          <span className="label membership__label">{t('membershipLabel')}</span>
          <h2 className="headline membership__title">
            {t('membershipTitle1')}<br/>
            <span className="gold-text">{t('membershipTitle2')}</span>
          </h2>
        </div>

        <div className="membership__grid">
          {tiers.map((tier, i) => (
            <div key={i} className={`membership__card ${tier.featured ? 'membership__card--featured' : ''}`}>
              {tier.featured && (
                <div className="membership__card-ribbon">{t('membershipRecommended')}</div>
              )}
              <div className="membership__card-header">
                <h3 className="membership__card-name">{tier.name}</h3>
                <span className="membership__card-price">{tier.price}</span>
              </div>
              <ul className="membership__card-list">
                {tier.benefits.map((benefit, j) => (
                  <li key={j} className="membership__card-benefit">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7L6 10L11 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <button className={tier.featured ? 'btn-primary' : 'btn-outline'} style={{ width: '100%', justifyContent: 'center' }}>
                <span>{tier.price === 'Free' ? t('membershipJoinFree') : t('membershipSubscribe')}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
