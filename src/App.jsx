import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import VerifiedDeals from './pages/VerifiedDeals';
import Pricing from './pages/Pricing';
import Cities from './pages/Cities';
import TrustVerification from './pages/TrustVerification';
import ForSellers from './pages/ForSellers';
import ForDevelopers from './pages/ForDevelopers';
import FAQs from './pages/FAQs';
import Legal from './pages/Legal';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import DealRoom from './pages/DealRoom';
import SellerConsole from './pages/SellerConsole';

export default function App() {
  // Logic for the 1sqft credit system
  const [isLoggedIn, _setIsLoggedIn] = useState(false);
  const [credits, _setCredits] = useState(0);

  return (
    <Router>
      <div className="app-wrapper">
        {/* These must be outside the <Routes> to show on every page */}
        <Navbar isLoggedIn={isLoggedIn} credits={credits} />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/deals" element={<VerifiedDeals />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/trust" element={<TrustVerification />} />
            <Route path="/sellers" element={<ForSellers />} />
            <Route path="/developers" element={<ForDevelopers />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/deal-room" element={<DealRoom />} />
            <Route path="/seller-console" element={<SellerConsole />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}