import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Membership.css';

gsap.registerPlugin(ScrollTrigger);

const Membership = () => {
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
      name: 'Silver',
      price: 'Free',
      benefits: [
        'Points on every order',
        'Birthday reward',
        'Early access to new items',
        'Free delivery on orders over SAR 100',
      ],
    },
    {
      name: 'Gold',
      price: 'SAR 49/mo',
      benefits: [
        'Everything in Silver',
        '2x points multiplier',
        'Monthly exclusive item',
        'Priority order processing',
        'Free delivery always',
        'Exclusive Gold events',
      ],
      featured: true,
    },
    {
      name: 'Platinum',
      price: 'SAR 129/mo',
      benefits: [
        'Everything in Gold',
        '5x points multiplier',
        'Chef\'s table experience quarterly',
        'Personal order concierge',
        'Exclusive Platinum merchandise',
        'First access to limited drops',
        'Private events invitation',
      ],
    },
  ];

  return (
    <section id="membership" ref={sectionRef} className="membership section-padding">
      <div className="container">
        <div className="membership__header">
          <span className="label membership__label">The Club</span>
          <h2 className="headline membership__title">
            Join the inner circle.<br/>
            <span className="gold-text">Elevate everything.</span>
          </h2>
        </div>

        <div className="membership__grid">
          {tiers.map((tier, i) => (
            <div key={i} className={`membership__card ${tier.featured ? 'membership__card--featured' : ''}`}>
              {tier.featured && (
                <div className="membership__card-ribbon">Recommended</div>
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
                <span>{tier.price === 'Free' ? 'Join Free' : 'Subscribe'}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
