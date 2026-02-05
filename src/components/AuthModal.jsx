import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useAuth } from '../context/AuthContext';

export default function AuthModal({ onClose, initialRole = 'buyer', initialTab = 'login' }) {
  const [tab, setTab] = useState(initialTab);
  const [role, setRole] = useState(initialRole);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();

  const content = (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal card p-6 rounded-2xl">
          <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold">{tab === 'login' ? 'Login' : 'Sign up'}</h3>
            <p className="text-slate-500 text-sm">{tab === 'login' ? 'Welcome back — sign in to continue.' : 'Create an account to get started.'}</p>
          </div>
          <button onClick={onClose} aria-label="Close" className="btn-icon">✕</button>
        </div>

        <div className="gap-4 mb-4" style={{display: 'flex', alignItems: 'center'}}>
          <div style={{display: 'flex', gap: 8}}>
            <button className={`btn-small ${tab === 'login' ? 'btn-black' : 'btn-link'}`} onClick={() => setTab('login')}>
              Login
            </button>
            <button className={`btn-small ${tab === 'signup' ? 'btn-black' : 'btn-link'}`} onClick={() => setTab('signup')}>
              Sign up
            </button>
          </div>

          <div style={{marginLeft: 'auto', display: 'flex', gap: 8}} aria-label="Account type">
            <button
              className={`btn-small ${role === 'buyer' ? 'btn-black' : 'btn-link'}`}
              onClick={() => setRole('buyer')}
              type="button"
            >
              Buyer
            </button>
            <button
              className={`btn-small ${role === 'seller' ? 'btn-black' : 'btn-link'}`}
              onClick={() => setRole('seller')}
              type="button"
            >
              Seller
            </button>
          </div>
        </div>

        {tab === 'login' ? (
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setLoading(true);
              setError('');
              const form = e.target;
              const username = form.querySelector('input[type="text"]').value;
              const password = form.querySelector('input[type="password"]').value;
              
              // Use local authentication
              if (login(username, password, role)) {
                alert('Login successful');
                onClose();
              } else {
                setError('Invalid username or password');
              }
              setLoading(false);
            }}
          >
            {error && <div className="text-red-600 text-sm font-medium">{error}</div>}
            <input className="input" placeholder="Username" type="text" required />
            <input className="input" placeholder="Password" type="password" required />
            <div className="flex justify-between items-center">
              <button className="btn-black" type="submit" disabled={loading}>{loading ? 'Signing in…' : 'Sign in'}</button>
            </div>
            {role === 'buyer' && <p className="text-xs text-slate-500 mt-2">Demo: username: <strong>buyer</strong>, password: <strong>adminbuyer</strong></p>}
            {role === 'seller' && <p className="text-xs text-slate-500 mt-2">Demo: username: <strong>seller</strong>, password: <strong>adminseller</strong></p>}
          </form>
        ) : (
          <form
            className="flex flex-col gap-4"
            onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);
              const form = e.target;
              const fullName = form.querySelector('input[placeholder="Full name"]').value;
              const email = form.querySelector('input[type="email"]').value;
              const password = form.querySelector('input[type="password"]').value;
              const company = role === 'seller' ? form.querySelector('input[placeholder="Company name"]').value : undefined;
              try {
                const res = await fetch('/api/auth/signup', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ role, fullName, email, password, company }),
                });
                if (!res.ok) throw new Error(await res.text());
                alert('Signup successful');
                onClose();
              } catch (err) {
                alert('Signup failed: ' + err.message);
              } finally {
                setLoading(false);
              }
            }}
          >
            <input className="input" placeholder="Full name" type="text" required />
            {role === 'seller' && (
              <>
                <input className="input" placeholder="Company name" type="text" required />
                <input className="input" placeholder="Business phone" type="tel" />
              </>
            )}
            <input className="input" placeholder="Email" type="email" required />
            <input className="input" placeholder="Password" type="password" required />
            <div className="flex justify-end">
              <button className="btn-black" type="submit" disabled={loading}>{loading ? 'Creating…' : 'Create account'}</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );

  if (typeof document === 'undefined') return null;
  return createPortal(content, document.body);
}
