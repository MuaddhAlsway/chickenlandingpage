import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Philosophy.css';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.philosophy__label',
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );

      gsap.fromTo('.philosophy__title',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: '.philosophy__title', start: 'top 85%' }
        }
      );

      gsap.fromTo('.philosophy__item',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, stagger: 0.2, duration: 0.8,
          scrollTrigger: { trigger: '.philosophy__grid', start: 'top 80%' }
        }
      );

      gsap.fromTo('.philosophy__stats-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, stagger: 0.15, duration: 0.6,
          scrollTrigger: { trigger: '.philosophy__stats', start: 'top 85%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pillars = [
    {
      number: '01',
      title: 'Premium Sourcing',
      description: 'Hand-selected ingredients from the finest farms. Every spice blend is crafted by master chefs using centuries-old techniques with modern precision.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="0.75"/>
          <path d="M16 8V24M8 16H24" stroke="currentColor" strokeWidth="0.75"/>
        </svg>
      )
    },
    {
      number: '02',
      title: 'Fresh Preparation',
      description: 'Never frozen, always fresh. Each piece is prepared to order using our proprietary 48-hour marination process for unmatched flavor depth.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="0.75"/>
          <path d="M11 16L15 20L21 12" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: '03',
      title: 'Luxury Presentation',
      description: 'Presentation is everything. From custom gold-foil packaging to temperature-controlled delivery, the experience begins before the first bite.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="0.75"/>
          <path d="M12 20L16 12L20 20" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="13" y1="18" x2="19" y2="18" stroke="currentColor" strokeWidth="0.75"/>
        </svg>
      )
    },
  ];

  const stats = [
    { value: '48h', label: 'Marination Process' },
    { value: '100%', label: 'Fresh Daily' },
    { value: '12', label: 'Signature Spices' },
    { value: '4.9', label: 'Customer Rating' },
  ];

  return (
    <section ref={sectionRef} className="philosophy section-padding">
      <div className="container">
        <div className="philosophy__header">
          <span className="label philosophy__label">Our Philosophy</span>
          <h2 className="headline philosophy__title">
            Crafted with obsession.<br/>
            <span className="gold-text">Served with pride.</span>
          </h2>
        </div>

        <div className="philosophy__grid">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="philosophy__item">
              <div className="philosophy__item-top">
                <span className="philosophy__item-number">{pillar.number}</span>
                <div className="philosophy__item-icon">{pillar.icon}</div>
              </div>
              <h3 className="philosophy__item-title">{pillar.title}</h3>
              <p className="philosophy__item-desc">{pillar.description}</p>
              <div className="philosophy__item-line"></div>
            </div>
          ))}
        </div>

        <div className="philosophy__stats">
          {stats.map((stat, i) => (
            <div key={i} className="philosophy__stats-item">
              <span className="philosophy__stats-value">{stat.value}</span>
              <span className="philosophy__stats-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
