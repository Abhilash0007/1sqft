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
  const [showCreditsModal, setShowCreditsModal] = useState(false);
  const [selectedCredits, setSelectedCredits] = useState(500);

  const handleBuyCredits = () => {
    setShowCreditsModal(true);
  };

  return (
    <Router>
      <div className="app-wrapper">
        {/* These must be outside the <Routes> to show on every page */}
        <Navbar isLoggedIn={isLoggedIn} credits={credits} />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/deals" element={<VerifiedDeals onBuyCredits={handleBuyCredits} />} />
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
            <Route path="/deal-room/:id?" element={<DealRoom onBuyCredits={handleBuyCredits} isLoggedIn={isLoggedIn} credits={credits} />} />
            <Route path="/seller-console" element={<SellerConsole />} />
          </Routes>
        </main>

        {showCreditsModal && (
     <div className="modal-overlay">
  <div className="modal">

    {/* HEADER */}
    <div className="modal-header">
      <div>
        <div className="modal-title">Buy Credits</div>
        <div className="modal-subtitle">
          Unlock deals and close transactions
        </div>
      </div>

      <button
        className="modal-close"
        onClick={() => setShowCreditsModal(false)}
        aria-label="Close modal"
      >
        ×
      </button>
    </div>

    {/* CONTENT */}
    <div className="modal-content">

      <div className="credit-plans">

        <CreditPlan
          credits={100}
          price="₹99"
          savings="₹0.99 / credit"
          selected={selectedCredits === 100}
          onClick={() => setSelectedCredits(100)}
        />

        <CreditPlan
          credits={500}
          price="₹399"
          savings="₹0.80 / credit"
          highlight
          selected={selectedCredits === 500}
          onClick={() => setSelectedCredits(500)}
        />

        <CreditPlan
          credits={1000}
          price="₹699"
          savings="₹0.70 / credit"
          selected={selectedCredits === 1000}
          onClick={() => setSelectedCredits(1000)}
        />

      </div>

      <div className="modal-note">
        <strong>Note:</strong> Unlock 1 deal room = 1 credit. Credits renew yearly.
        1% fee when you close.
      </div>

    </div>

    {/* FOOTER */}
    <div className="modal-actions">

      <button
        className="btn-primary"
        disabled={!selectedCredits}
      >
        Continue • {selectedCredits} Credits
      </button>

      <button
        className="btn-secondary"
        onClick={() => setShowCreditsModal(false)}
      >
        Cancel
      </button>

    </div>

  </div>
</div>



        )}

        <Footer />
      </div>
    </Router>
  );
}

const CreditPlan = ({ credits, price, savings, highlight, selected, onClick }) => (
  <div
    className={`credit-plan ${selected ? 'selected' : ''} ${highlight ? 'highlight' : ''}`}
    onClick={onClick}
    role="radio"
    aria-checked={selected}
    tabIndex={0}
  >
    <div className="plan-left">
      <h4>{credits.toLocaleString()} Credits</h4>
      <span>{savings}</span>
    </div>
    <div className="plan-price">{price}</div>
  </div>
);