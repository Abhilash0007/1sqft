import React, { useState } from 'react';
import { Lock, FileText, Map, Camera, Calendar } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import AuthModal from '../components/AuthModal';

export default function DealRoom({ onBuyCredits }) {
  const { isLoggedIn, credits } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const isUnlocked = isLoggedIn && credits >= 1;

  if (!isUnlocked) {
    return (
      <div className="pt-48 pb-20 px-6 text-center max-w-xl mx-auto">
        <div className="inline-flex p-8 bg-slate-50 rounded-full mb-8">
          <Lock size={48} className="text-slate-200" />
        </div>
        <h2 className="text-4xl font-bold mb-4 italic">Unlock the Deal Room.</h2>
        <p className="text-slate-500 mb-8 leading-relaxed">
          Access requires login, KYC, active credits, and a set goal. Exact location and documents are shared securely inside.
        </p>
        {!isLoggedIn ? (
          <button onClick={() => setShowAuthModal(true)} className="px-10 py-4 bg-black text-white rounded-full font-bold shadow-xl hover:bg-slate-900 transition">
            Login to Unlock
          </button>
        ) : (
          <button onClick={onBuyCredits} className="px-10 py-4 bg-black text-white rounded-full font-bold shadow-xl hover:bg-slate-900 transition">
            Buy Credits & Unlock
          </button>
        )}
        {showAuthModal && (
          <AuthModal
            onClose={() => setShowAuthModal(false)}
            initialRole="buyer"
            initialTab="login"
          />
        )}
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-2 italic">Everything you need. In one place.</h2>
      <p className="text-slate-500 mb-12 italic">Exact location, negotiated terms, and verification—shared securely.</p>
      
      <div className="grid md:grid-cols-2 gap-10">
        <DataBlock Icon={Map} title="Negotiated Terms" desc="Full price and validity window." />
        <DataBlock Icon={FileText} title="Verification Pack" desc="Document checklist + watermarked extracts." />
        <DataBlock Icon={Camera} title="Geo-tagged Proof" desc="Site photos, videos, and notes." />
        <DataBlock Icon={Calendar} title="Next Steps" desc="Book a visit or ask a question." />
      </div>
    </div>
  );
}

const DataBlock = ({ Icon, title, desc }) => (
  <div className="p-8 border border-slate-100 rounded-[1rem] bg-white">
    {Icon && <Icon size={24} className="text-blue-600 mb-4" />}
    <h3 className="text-xl font-bold mb-1">{title}</h3>
    <p className="text-slate-500 text-sm italic">{desc}</p>
  </div>
);