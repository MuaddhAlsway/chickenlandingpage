import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import translations from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isArabicPath = location.pathname.startsWith('/ar');
  const [lang, setLang] = useState(isArabicPath ? 'ar' : 'en');

  useEffect(() => {
    const shouldBeArabic = location.pathname.startsWith('/ar');
    setLang(shouldBeArabic ? 'ar' : 'en');
  }, [location.pathname]);

  const toggleLanguage = useCallback(() => {
    const currentPath = location.pathname;
    const currentSearch = location.search;
    const currentHash = location.hash;

    if (lang === 'en') {
      if (currentPath === '/') {
        navigate('/ar' + currentSearch + currentHash);
      } else if (currentPath === '/menu') {
        navigate('/ar/menu-ar' + currentSearch + currentHash);
      } else if (currentPath.startsWith('/menu/')) {
        const id = currentPath.split('/menu/')[1];
        navigate('/ar/menu-ar/' + id + currentSearch + currentHash);
      } else {
        navigate('/ar' + currentPath + currentSearch + currentHash);
      }
    } else {
      if (currentPath === '/ar') {
        navigate('/' + currentSearch + currentHash);
      } else if (currentPath === '/ar/menu-ar') {
        navigate('/menu' + currentSearch + currentHash);
      } else if (currentPath.startsWith('/ar/menu-ar/')) {
        const id = currentPath.split('/ar/menu-ar/')[1];
        navigate('/menu/' + id + currentSearch + currentHash);
      } else if (currentPath.startsWith('/ar/')) {
        navigate(currentPath.replace('/ar', '') + currentSearch + currentHash);
      } else {
        navigate(currentPath + currentSearch + currentHash);
      }
    }
  }, [lang, location, navigate]);

  const t = useCallback((key) => {
    return translations[lang]?.[key] || translations.en[key] || key;
  }, [lang]);

  const isRTL = lang === 'ar';

  const getRoute = useCallback((route) => {
    if (lang === 'ar') {
      if (route === '/') return '/ar';
      if (route === '/menu') return '/ar/menu-ar';
      if (route.startsWith('/menu/')) return '/ar/menu-ar' + route.replace('/menu', '');
      return '/ar' + route;
    }
    return route;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t, isRTL, getRoute }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
