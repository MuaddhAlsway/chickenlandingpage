import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const taglineRef = useRef(null);
  const progressRef = useRef(null);
  const progressFillRef = useRef(null);
  const percentageRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(loaderRef.current, {
            opacity: 0,
            duration: 0.6,
            ease: 'power2.inOut',
            onComplete: () => {
              if (loaderRef.current) {
                loaderRef.current.style.display = 'none';
              }
              onComplete();
            }
          });
        }
      });

      tl.fromTo(logoRef.current,
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
      .fromTo(taglineRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.3'
      )
      .fromTo(progressRef.current,
        { opacity: 0, scaleX: 0 },
        { opacity: 1, scaleX: 1, duration: 0.4, ease: 'power2.out' },
        '-=0.2'
      );

      gsap.to(progressFillRef.current, {
        width: '100%',
        duration: 2.2,
        ease: 'power1.inOut',
        onUpdate: function() {
          setProgress(Math.round(this.progress() * 100));
        },
        onComplete: () => {
          gsap.to(percentageRef.current, {
            opacity: 0,
            duration: 0.3
          });
        }
      });

      gsap.to('.loading__diamond', {
        rotation: 360,
        duration: 3,
        repeat: -1,
        ease: 'none'
      });

      gsap.to('.loading__ring', {
        scale: 1.1,
        opacity: 0.3,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, loaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={loaderRef} className="loading">
      <div className="loading__bg"></div>
      <div className="loading__content">
        <div className="loading__logo-wrapper">
          <div className="loading__ring"></div>
          <div className="loading__diamond">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M24 4L4 24L24 44L44 24L24 4Z" stroke="currentColor" strokeWidth="1"/>
              <circle cx="24" cy="24" r="6" fill="currentColor" opacity="0.8"/>
            </svg>
          </div>
        </div>

        <h1 ref={logoRef} className="loading__brand">GOLDEN CRISP</h1>
        <p ref={taglineRef} className="loading__tagline">Redefining Fried Chicken</p>

        <div ref={progressRef} className="loading__progress">
          <div className="loading__progress-track">
            <div ref={progressFillRef} className="loading__progress-fill"></div>
          </div>
          <span ref={percentageRef} className="loading__percentage">{progress}%</span>
        </div>
      </div>

      <div className="loading__corners">
        <span className="loading__corner loading__corner--tl"></span>
        <span className="loading__corner loading__corner--tr"></span>
        <span className="loading__corner loading__corner--bl"></span>
        <span className="loading__corner loading__corner--br"></span>
      </div>
    </div>
  );
};

export default LoadingScreen;
