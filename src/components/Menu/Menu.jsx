import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Menu.css';

gsap.registerPlugin(ScrollTrigger);

const Menu = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.menu__label',
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );

      gsap.fromTo('.menu__title',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: '.menu__title', start: 'top 85%' }
        }
      );

      gsap.utils.toArray('.menu__card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.8,
            delay: i * 0.1,
            scrollTrigger: { trigger: card, start: 'top 85%' }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const items = [
    {
      name: 'The Royal Piece',
      description: 'Double-brined, herb-crusted thigh with gold-infused honey drizzle and edible flowers.',
      price: 'SAR 42',
      tag: 'Signature',
      category: 'Single',
      image: '/images/royal-piece.jpg',
    },
    {
      name: 'Crispy Crown',
      description: 'Our legendary breast piece with 12-spice signature blend and truffle aioli.',
      price: 'SAR 38',
      tag: 'Chef\'s Pick',
      category: 'Single',
      image: '/images/crispy-crown.jpg',
    },
    {
      name: 'Golden Tower',
      description: 'Three pieces of our finest cuts stacked with artisan pickles and brioche toast points.',
      price: 'SAR 89',
      tag: 'Premium',
      category: 'Platter',
      image: '/images/golden-tower.jpg',
    },
    {
      name: 'Wing Dynasty',
      description: 'Six bone-in wings tossed in our exclusive saffron-chili glaze with citrus zest.',
      price: 'SAR 56',
      tag: 'Popular',
      category: 'Wings',
      image: '/images/wing-dynasty.jpg',
    },
    {
      name: 'The Emperor\'s Box',
      description: 'Five premium pieces, three signature sauces, artisan slaw, and truffle mashed potatoes.',
      price: 'SAR 149',
      tag: 'Exclusive',
      category: 'Platter',
      image: '/images/emperors-box.jpg',
    },
    {
      name: 'Midnight Crunch',
      description: 'Late-night exclusive: Nashville hot-style with dark spice blend and bourbon glaze.',
      price: 'SAR 48',
      tag: 'Limited',
      category: 'Single',
      image: '/images/midnight-crunch.jpg',
    },
  ];

  return (
    <section id="menu" ref={sectionRef} className="menu section-padding">
      <div className="container">
        <div className="menu__header">
          <span className="label menu__label">The Menu</span>
          <h2 className="headline menu__title">
            Every piece, a<br/>
            <span className="gold-text">masterpiece.</span>
          </h2>
        </div>

        <div className="menu__grid">
          {items.map((item, i) => (
            <Link to={`/menu/${item.id}`} key={i} className="menu__card">
              <div className="menu__card-visual">
                <img
                  src={item.image}
                  alt={item.name}
                  className="menu__card-img"
                  loading="lazy"
                />
                <div className="menu__card-overlay"></div>
                <span className="menu__card-tag">{item.tag}</span>
              </div>
              <div className="menu__card-content">
                <div className="menu__card-top">
                  <h3 className="menu__card-name">{item.name}</h3>
                  <span className="menu__card-price">{item.price}</span>
                </div>
                <p className="menu__card-desc">{item.description}</p>
                <div className="menu__card-bottom">
                  <span className="menu__card-category">{item.category}</span>
                  <span className="menu__card-add">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3 9H15M15 9L10.5 4.5M15 9L10.5 13.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="menu__footer">
          <Link to="/menu" className="btn-primary">
            <span>View Full Menu</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;
