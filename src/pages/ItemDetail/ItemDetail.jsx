import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useLanguage } from '../../context/LanguageContext';
import { getItemById, menuItems, getLocalizedItem } from '../../data/menuData';
import './ItemDetail.css';

const ItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, lang, getRoute } = useLanguage();
  const item = getItemById(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (!item) return;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.detail__hero-img', { opacity: 0, scale: 1.05 }, { opacity: 1, scale: 1, duration: 0.8 })
      .fromTo('.detail__info', { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.7 }, '-=0.4')
      .fromTo('.detail__tag', { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.4 }, '-=0.3')
      .fromTo('.detail__breadcrumb', { opacity: 0 }, { opacity: 1, duration: 0.3 }, '-=0.2');
  }, [item]);

  if (!item) {
    return (
      <div className="detail detail--notfound">
        <div className="container">
          <h2 className="headline">{t('detailNotFound')}</h2>
          <Link to={getRoute('/menu')} className="btn-primary" style={{ marginTop: '2rem' }}>
            <span>{t('detailBack')}</span>
          </Link>
        </div>
      </div>
    );
  }

  const spiceDisplay = Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={`detail__spice-dot ${i < item.spiceLevel ? 'detail__spice-dot--active' : ''}`}></span>
  ));

  const localized = getLocalizedItem(item, lang);

  const relatedItems = menuItems
    .filter(i => i.category === item.category && i.id !== item.id)
    .slice(0, 3);

  return (
    <div className="detail">
      <div className="detail__breadcrumb container">
        <Link to={getRoute('/menu')} className="detail__breadcrumb-link">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>{t('detailBack')}</span>
        </Link>
      </div>

      <section className="detail__hero section-padding">
        <div className="container">
          <div className="detail__layout">
            <div className="detail__visual">
              <div className="detail__hero-img-wrapper">
                <img src={item.image} alt={localized.name} className="detail__hero-img" />
                <div className="detail__hero-overlay"></div>
              </div>
            </div>

            <div className="detail__info">
              <span className="label detail__tag">{localized.tag}</span>
              <h1 className="headline detail__name">{localized.name}</h1>
              <p className="detail__desc">{localized.longDescription}</p>

              <div className="detail__meta">
                <div className="detail__meta-item">
                  <span className="detail__meta-label">{t('detailPrice')}</span>
                  <span className="detail__meta-value detail__meta-value--price">SAR {item.price}</span>
                </div>
                <div className="detail__meta-item">
                  <span className="detail__meta-label">{t('detailCategory')}</span>
                  <span className="detail__meta-value">{localized.category}</span>
                </div>
                <div className="detail__meta-item">
                  <span className="detail__meta-label">{t('detailPrepTime')}</span>
                  <span className="detail__meta-value">{localized.prepTime}</span>
                </div>
                <div className="detail__meta-item">
                  <span className="detail__meta-label">{t('detailCalories')}</span>
                  <span className="detail__meta-value">{item.calories}</span>
                </div>
              </div>

              <div className="detail__spice">
                <span className="detail__spice-label">{t('detailHeat')}</span>
                <div className="detail__spice-bar">{spiceDisplay}</div>
              </div>

              <div className="detail__ingredients">
                <span className="detail__ingredients-label">{t('detailIngredients')}</span>
                <ul className="detail__ingredients-list">
                  {localized.ingredients.map((ing, i) => (
                    <li key={i} className="detail__ingredient">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="detail__actions">
                <button className="btn-primary">
                  <span>{t('detailAdd')}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <Link to={getRoute('/menu')} className="btn-outline">
          <span>{t('detailBack')}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedItems.length > 0 && (
        <section className="detail__related section-padding">
          <div className="container">
            <span className="label">{t('detailRelated')}</span>
            <div className="detail__related-grid">
              {relatedItems.map((ri) => {
                const rLocalized = getLocalizedItem(ri, lang);
                return (
                  <Link to={getRoute(`/menu/${ri.id}`)} key={ri.id} className="detail__related-card">
                    <div className="detail__related-img-wrapper">
                      <img src={ri.image} alt={rLocalized.name} className="detail__related-img" loading="lazy" />
                      <div className="detail__related-overlay"></div>
                    </div>
                    <div className="detail__related-content">
                      <h4 className="detail__related-name">{rLocalized.name}</h4>
                      <span className="detail__related-price">SAR {ri.price}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ItemDetail;
