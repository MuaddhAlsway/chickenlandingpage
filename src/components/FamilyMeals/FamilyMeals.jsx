import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FamilyMeals.css';

gsap.registerPlugin(ScrollTrigger);

const FamilyMeals = () => {
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
      name: 'The Gathering',
      serves: '4-5 People',
      pieces: '12 Pieces',
      includes: '3 Signature Sauces, Artisan Coleslaw, Brioche Buns, Truffle Fries',
      price: 'SAR 189',
      popular: true,
    },
    {
      name: 'Royal Feast',
      serves: '6-8 People',
      pieces: '20 Pieces',
      includes: '5 Signature Sauces, Double Sides, Cornbread, Premium Lemonade',
      price: 'SAR 299',
      popular: false,
    },
    {
      name: 'The Emperor\'s Banquet',
      serves: '10-12 People',
      pieces: '36 Pieces',
      includes: 'All 5 Sauces, Full Sides Selection, Dessert Platter, Beverage Service',
      price: 'SAR 499',
      popular: false,
    },
  ];

  return (
    <section id="family" ref={sectionRef} className="family section-padding">
      <div className="container">
        <div className="family__header">
          <span className="label family__label">Family Meals</span>
          <h2 className="headline family__title">
            Gather together.<br/>
            <span className="gold-text">Feast together.</span>
          </h2>
        </div>

        <div className="family__grid">
          {meals.map((meal, i) => (
            <div key={i} className={`family__card ${meal.popular ? 'family__card--popular' : ''}`}>
              {meal.popular && (
                <div className="family__card-badge">Most Popular</div>
              )}
              <div className="family__card-header">
                <h3 className="family__card-name">{meal.name}</h3>
                <div className="family__card-meta">
                  <span>{meal.serves}</span>
                  <span className="family__card-dot"></span>
                  <span>{meal.pieces}</span>
                </div>
              </div>
              <div className="family__card-body">
                <p className="family__card-includes">{meal.includes}</p>
              </div>
              <div className="family__card-footer">
                <span className="family__card-price">{meal.price}</span>
                <button className="btn-primary family__card-btn">
                  <span>Add to Order</span>
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
