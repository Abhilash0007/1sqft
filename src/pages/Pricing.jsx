import React from 'react';

export default function Pricing() {
  return (
    <div className="section container">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold mb-4 italic tracking-tight">Simple. Transparent.</h2>
        <p className="text-slate-500 italic mx-auto" style={{maxWidth: 720}}>
          Credits keep the platform clean. They reduce noise and improve matching — access signals, not property money.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8 mb-12">
        <Tier title="Basic" credits="500" desc="Full deal previews + shortlists" />
        <Tier title="Priority" credits="2,000" desc="Priority alerts + full disclosure" featured />
        <Tier title="Concierge" credits="5,000" desc="Multiple goals + visit scheduling" />
      </div>

      <div className="card p-8 rounded-2xl text-center">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Deal Closure Fee</h3>
        <p className="text-4xl font-bold italic mb-4">1% Buyer + 1% Seller</p>
        <p className="text-slate-500 text-sm italic underline">Only after the deal successfully closes.</p>
      </div>
    </div>
  );
}

const Tier = ({ title, credits, desc, featured = false }) => (
  <div className={`card p-6 rounded-2xl flex flex-col items-center ${featured ? 'border-2' : ''}`}>
    <h4 className="font-bold text-slate-400 mb-2 uppercase text-xs tracking-widest">{title}</h4>
    <p className="text-4xl font-black mb-4">{credits} credits</p>
    <p className="text-slate-500 text-center text-sm mb-8 leading-relaxed italic">{desc}</p>
    <button className="mt-auto btn-link" style={{border: '1px solid var(--border)', padding: '8px 18px', borderRadius: 999}}>
      Activate
    </button>
  </div>
);