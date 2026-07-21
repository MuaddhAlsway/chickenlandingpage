import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(overlayRef.current,
        { scaleY: 1 },
        { scaleY: 0, duration: 1.4, ease: 'power4.inOut' }
      )
      .fromTo('.hero__label',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(headlineRef.current,
        { opacity: 0, y: 60, clipPath: 'inset(100% 0 0 0)' },
        { opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)', duration: 1.2, ease: 'power4.out' },
        '-=0.5'
      )
      .fromTo('.hero__headline-accent',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(subRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.4'
      )
      .fromTo(ctaRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.6 },
        '-=0.3'
      )
      .fromTo(imageRef.current,
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.out' },
        '-=1.2'
      )
      .fromTo(scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        '-=0.4'
      );

      gsap.to('.hero__scroll-line', {
        scaleY: 1,
        duration: 1.5,
        repeat: -1,
        ease: 'power1.inOut',
        yoyo: true,
      });

      gsap.to(headlineRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: -80,
        opacity: 0.3,
      });

      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: 60,
        scale: 1.05,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero">
      <div ref={overlayRef} className="hero__overlay"></div>

      <div className="hero__bg">
        <div ref={imageRef} className="hero__bg-image">
          <div className="hero__bg-gradient"></div>
        </div>
      </div>

      <div className="hero__content container">
        <div className="hero__text">
          <span className="label hero__label">Est. 2024 &mdash; Riyadh, Saudi Arabia</span>
          <h1 ref={headlineRef} className="headline hero__headline">
            Redefining<br/>
            <span className="hero__headline-accent">Fried Chicken.</span>
          </h1>
          <p ref={subRef} className="hero__sub">
            Where premium craftsmanship meets culinary artistry.<br/>
            Every piece tells a story of perfection.
          </p>
          <div ref={ctaRef} className="hero__cta">
            <a href="#order" className="btn-primary">
              <span>Order Now</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#menu" className="btn-outline">
              <span>Explore Menu</span>
            </a>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="hero__scroll">
        <div className="hero__scroll-line"></div>
        <span className="hero__scroll-text">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
