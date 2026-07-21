import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/:id" element={<ItemDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
