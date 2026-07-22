import React, { useState, useCallback, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Philosophy from './components/Philosophy/Philosophy';
import Menu from './components/Menu/Menu';
import Sauces from './components/Sauces/Sauces';
import FamilyMeals from './components/FamilyMeals/FamilyMeals';
import Ordering from './components/Ordering/Ordering';
import Membership from './components/Membership/Membership';
import Offers from './components/Offers/Offers';
import AppPromo from './components/AppPromo/AppPromo';
import Footer from './components/Footer/Footer';
import MenuPage from './pages/MenuPage/MenuPage';
import ItemDetail from './pages/ItemDetail/ItemDetail';
import './App.css';

function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Menu />
      <Sauces />
      <FamilyMeals />
      <Ordering />
      <Membership />
      <Offers />
      <AppPromo />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const { isRTL } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = isRTL ? 'ar' : 'en';
  }, [isRTL]);

  const handleLoadComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <div className={`app ${isRTL ? 'app--rtl' : ''}`}>
      {loading && <LoadingScreen onComplete={handleLoadComplete} />}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ar" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/ar/menu-ar" element={<MenuPage />} />
        <Route path="/menu/:id" element={<ItemDetail />} />
        <Route path="/ar/menu-ar/:id" element={<ItemDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
