import React from 'react';
import { UserCheck, FileText, MapPin, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  return (
    <div className="pt-24 pb-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black mb-4">How 1SQFT Works</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">A straightforward process to discover verified listings, review documents, and close with confidence.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 mb-12">
        <Step Icon={UserCheck} title="Create a Goal" desc="Set city, budget, and property type." />
        <Step Icon={MapPin} title="Browse Matches" desc="Handpicked, geo-verified listings appear in your feed." />
        <Step Icon={FileText} title="Review Verification" desc="Access documents and watermarked extracts before visits." />
        <Step Icon={CreditCard} title="Unlock & Close" desc="Use credits to unlock deal rooms and proceed to close." />
      </div>

      <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-100">
        <h3 className="font-bold mb-2">Got questions?</h3>
        <p className="text-slate-500 mb-4">Reach out to support or read the detailed guide on how credits and deal rooms work.</p>
        <Link to="/pricing" className="btn-link">Learn about credits</Link>
      </div>
    </div>
  );
}

function Step({ Icon, title, desc }) {
  return (
    <div className="card text-center">
      <div className="icon-large mx-auto mb-4"><Icon size={28} className="text-blue-600" /></div>
      <h4 className="font-bold mb-2">{title}</h4>
      <p className="text-slate-500 text-sm">{desc}</p>
    </div>
  );
}
