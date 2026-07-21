import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Sauces.css';

gsap.registerPlugin(ScrollTrigger);

const Sauces = () => {
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
      name: 'Saffron Blaze',
      heat: 'Medium',
      description: 'A luxurious blend of saffron threads and mild chili, finished with a touch of cream. Our most iconic creation.',
      color: '#c9a84c',
    },
    {
      name: 'Smoked Ember',
      heat: 'Hot',
      description: 'Applewood smoked paprika meets habanero in this deeply complex, slow-burning masterpiece.',
      color: '#c0392b',
    },
    {
      name: 'Black Truffle Aioli',
      heat: 'Mild',
      description: 'Périgord black truffle folded into house-made garlic aioli. Pure umami indulgence.',
      color: '#8b7335',
    },
    {
      name: 'Rose Harissa',
      heat: 'Medium-Hot',
      description: 'Traditional North African harissa elevated with Damascus rose petals and Aleppo pepper.',
      color: '#d4a373',
    },
    {
      name: 'Wasabi Citrus',
      heat: 'Hot',
      description: 'Fresh wasabi root with yuzu zest and a hint of honey. An East-meets-West revelation.',
      color: '#6b8e23',
    },
  ];

  return (
    <section id="sauces" ref={sectionRef} className="sauces section-padding">
      <div className="container">
        <div className="sauces__layout">
          <div className="sauces__left">
            <span className="label sauces__label">Signature Sauces</span>
            <h2 className="headline sauces__title">
              Five sauces.<br/>
              <span className="gold-text">Five worlds.</span>
            </h2>
            <p className="sauces__desc">
              Each sauce is a journey. Developed over months of experimentation 
              by our culinary team, these are the flavors that define GOLDEN CRISP.
            </p>
            <a href="#order" className="btn-primary" style={{ marginTop: '2rem' }}>
              <span>Taste Them All</span>
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
                    <h3 className="sauces__item-name">{sauce.name}</h3>
                    <span className="sauces__item-heat">{sauce.heat}</span>
                  </div>
                  <p className="sauces__item-desc">{sauce.description}</p>
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
