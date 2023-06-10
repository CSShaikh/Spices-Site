import React from 'react';
import './style.css';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs.js';
import ContactUs from './components/ContactUs/ContactUs.js';
import Cart from './components/Cart/Cart.js';
import Wishlist from './components/Wishlist/Wishlist.js';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar title="helloo" />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/Wishlist" element={<Wishlist />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
