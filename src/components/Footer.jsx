import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-sm text-slate-600">
          <div className="col-span-2">
            <h2 className="text-xl font-bold text-black mb-3">1SQFT.</h2>
            <p className="max-w-xs italic text-slate-500">Verified, negotiated-price properties. Built on clarity.</p>
            <p className="text-xs text-slate-400 mt-4">© {new Date().getFullYear()} 1SQFT — All rights reserved.</p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-black font-bold mb-2">Platform</h4>
            <a href="/deals" className="hover:text-black transition">Verified Deals</a>
            <a href="/trust" className="hover:text-black transition">Trust & Verification</a>
            <a href="/faqs" className="hover:text-black transition">FAQs</a>
            <a href="/pricing" className="hover:text-black transition">Pricing</a>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-black font-bold mb-2">Legal</h4>
            <p className="text-[10px] uppercase text-slate-400">Credits are access signals, not ownership.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}