import React from 'react';
import { ShieldCheck, FileText, Map, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TrustVerification() {
  const checks = [
    { id: 'identity', Icon: ShieldCheck, title: 'Seller identity', desc: 'KYC & ownership documents verified.' },
    { id: 'approvals', Icon: FileText, title: 'Approvals & EC', desc: 'Plan approvals, encumbrance checks where applicable.' },
    { id: 'geo', Icon: Map, title: 'Geo-tagged proof', desc: 'Site photos, video & inspector notes.' },
    { id: 'media', Icon: Camera, title: 'Inspection media', desc: 'Time-stamped photos and short video clips.' },
  ];

  return (
    <div className="container py-12">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold">Trust & Verification</h1>
        <p className="mt-3 text-slate-600">Verification you can see — document checks, geo-proof, and disclosure packs.</p>
      </div>

      <section className="verification-grid mt-8">
        {checks.map(c => (
          <article key={c.id} className="verification-card bg-white rounded shadow p-6">
            <div className="flex items-start gap-4">
              <div className="icon-wrap">
                <c.Icon size={28} className="text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold">{c.title}</h4>
                <p className="text-sm text-slate-500 mt-1">{c.desc}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-10 p-6 bg-slate-50 rounded">
        <h3 className="text-xl font-bold mb-3">Verification SOP</h3>
        <ul className="sop-list">
          <li>Document pack: watermarked extracts and key extracts.</li>
          <li>Geo evidence: time-stamped photos & short video clips.</li>
          <li>Secure sharing: watermarked Deal Room access for eligible users.</li>
          <li>Closure support: suggested steps and scheduling assistance.</li>
        </ul>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-slate-600">What we don't claim: Not legal advice — always do a final legal review.</div>
          <Link to="/deals" className="btn-black btn-small">Explore verified deals</Link>
        </div>
      </section>
    </div>
  );
}
