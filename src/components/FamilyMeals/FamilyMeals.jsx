import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FamilyMeals.css';
import { useLanguage } from '../../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const FamilyMeals = () => {
  const { t, lang } = useLanguage();
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.family__label',
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );

      gsap.fromTo('.family__title',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: '.family__title', start: 'top 85%' }
        }
      );

      gsap.utils.toArray('.family__card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50, rotateY: -5 },
          {
            opacity: 1, y: 0, rotateY: 0, duration: 0.8,
            delay: i * 0.15,
            scrollTrigger: { trigger: card, start: 'top 85%' }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const meals = [
    {
      name: { en: 'The Gathering', ar: 'الوليمة العايلية' },
      serves: { en: '4-5 People', ar: '٤-٥ أشخاص' },
      pieces: { en: '12 Pieces', ar: '١٢ قطعة' },
      includes: { en: '3 Signature Sauces, Artisan Coleslaw, Brioche Buns, Truffle Fries', ar: '٣ صوصات مميزة، سلاو، حبّات بريوش، بطاطس كمأة' },
      price: 'SAR 189',
      popular: true,
    },
    {
      name: { en: 'Royal Feast', ar: 'مقرمشات ملكية' },
      serves: { en: '6-8 People', ar: '٦-٨ أشخاص' },
      pieces: { en: '20 Pieces', ar: '٢٠ قطعة' },
      includes: { en: '5 Signature Sauces, Double Sides, Cornbread, Premium Lemonade', ar: '٥ صوصات مميزة، أطباق مزدوجة، خبز ذرة، عصير ليمون' },
      price: 'SAR 299',
      popular: false,
    },
    {
      name: { en: "The Emperor's Banquet", ar: 'وليمة الإمبراطور' },
      serves: { en: '10-12 People', ar: '١٠-١٢ شخص' },
      pieces: { en: '36 Pieces', ar: '٣٦ قطعة' },
      includes: { en: 'All 5 Sauces, Full Sides Selection, Dessert Platter, Beverage Service', ar: 'جميع الـ ٥ صوصات، أطباق جانبية كاملة، طبق حلويات، خدمة مشروبات' },
      price: 'SAR 499',
      popular: false,
    },
  ];

  return (
    <section id="family" ref={sectionRef} className="family section-padding">
      <div className="container">
        <div className="family__header">
          <span className="label family__label">{t('familyLabel')}</span>
          <h2 className="headline family__title">
            {t('familyTitle1')}<br/>
            <span className="gold-text">{t('familyTitle2')}</span>
          </h2>
        </div>

        <div className="family__grid">
          {meals.map((meal, i) => (
            <div key={i} className={`family__card ${meal.popular ? 'family__card--popular' : ''}`}>
              {meal.popular && (
                <div className="family__card-badge">{t('familyMostPopular')}</div>
              )}
              <div className="family__card-header">
                <h3 className="family__card-name">{meal.name[lang]}</h3>
                <div className="family__card-meta">
                  <span>{meal.serves[lang]}</span>
                  <span className="family__card-dot"></span>
                  <span>{meal.pieces[lang]}</span>
                </div>
              </div>
              <div className="family__card-body">
                <p className="family__card-includes">{meal.includes[lang]}</p>
              </div>
              <div className="family__card-footer">
                <span className="family__card-price">{meal.price}</span>
                <button className="btn-primary family__card-btn">
                  <span>{t('familyAddToOrder')}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamilyMeals;
