import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, LogOut } from 'lucide-react';
import AuthModal from './AuthModal';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [authState, setAuthState] = useState({ show: false, initialRole: 'buyer', initialTab: 'login' });
  const { isLoggedIn, credits, logout, user } = useAuth();
  const location = useLocation();
  const current = location.pathname;
  const isActive = (p) => current === p || (p !== '/' && current.startsWith(p));

  return (
    <nav className="nav">
      <div className="container flex items-center">
        <div className="left flex items-center">
          <Link to="/" className="logo flex items-center">
            <span className="font-black text-lg tracking-tighter">1SQFT</span>
            <span className="text-blue-600">.</span>
          </Link>
        </div>

        <div className="center hidden md:flex items-center justify-center flex-1">
          <div className="nav-links flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link to="/deals" className={`transition ${isActive('/deals') ? 'nav-link-active' : ''}`}>Verified Deals</Link>
            <Link to="/how-it-works" className={`transition ${isActive('/how-it-works') ? 'nav-link-active' : ''}`}>How It Works</Link>
            <Link to="/cities" className={`transition ${isActive('/cities') ? 'nav-link-active' : ''}`}>Cities</Link>
            <Link to="/trust" className={`transition ${isActive('/trust') ? 'nav-link-active' : ''}`}>Trust</Link>
            <Link to="/pricing" className={`transition ${isActive('/pricing') ? 'nav-link-active' : ''}`}>Pricing</Link>
          </div>
        </div>

        <div className="right flex items-center gap-4">
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                <span className="text-xs font-bold uppercase tracking-tight">{credits} Credits</span>
                <User size={18} />
                <span className="text-xs font-medium text-slate-600">{user?.username}</span>
              </div>
              <button 
                onClick={logout}
                className="btn-link flex items-center gap-2"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          ) : (
            <div style={{display: 'flex', gap: 8}}>
              <button type="button" onClick={() => setAuthState({ show: true, initialRole: 'buyer', initialTab: 'login' })} className="btn-black btn-small">Login </button>
            </div>
          )}
        </div>
      </div>

      {authState.show && (
        <AuthModal
          onClose={() => setAuthState({ ...authState, show: false })}
          initialRole={authState.initialRole}
          initialTab={authState.initialTab}
        />
      )}
    </nav>
  );
}