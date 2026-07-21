import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Offers.css';

gsap.registerPlugin(ScrollTrigger);

const Offers = () => {
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
      badge: 'New',
      title: 'First Order',
      discount: '25% OFF',
      description: 'On your first order. Welcome to the family.',
      code: 'WELCOME25',
      expires: 'Valid until Dec 31',
    },
    {
      badge: 'Limited',
      title: 'Midnight Drop',
      discount: 'Buy 1 Get 1',
      description: 'Every Friday & Saturday, 11PM-2AM. Exclusive late-night menu.',
      code: 'MIDNIGHT',
      expires: 'Every Weekend',
    },
    {
      badge: 'Members',
      title: 'Gold Weekend',
      discount: '30% OFF',
      description: 'Gold & Platinum members enjoy exclusive weekend pricing.',
      code: 'GOLD30',
      expires: 'Members Only',
    },
  ];

  return (
    <section id="offers" ref={sectionRef} className="offers section-padding">
      <div className="container">
        <div className="offers__header">
          <span className="label offers__label">Exclusive Offers</span>
          <h2 className="headline offers__title">
            Reserved for those<br/>
            <span className="gold-text">who know.</span>
          </h2>
        </div>

        <div className="offers__grid">
          {offers.map((offer, i) => (
            <div key={i} className="offers__card">
              <div className="offers__card-badge">{offer.badge}</div>
              <div className="offers__card-content">
                <span className="offers__card-title">{offer.title}</span>
                <span className="offers__card-discount">{offer.discount}</span>
                <p className="offers__card-desc">{offer.description}</p>
                <div className="offers__card-code">
                  <span className="offers__card-code-label">Code</span>
                  <span className="offers__card-code-value">{offer.code}</span>
                </div>
                <span className="offers__card-expires">{offer.expires}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
