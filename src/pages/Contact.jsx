import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-3 text-slate-600">Reach out to the 1SQFT team for listings, partnerships, or support.</p>

      <div className="contact-grid mt-8 gap-8">
        <aside className="contact-info p-6 bg-white rounded shadow">
          <h3 className="font-semibold mb-3">Get in touch</h3>
          <p className="text-sm text-slate-500 mb-4">We're here to help with listings, partnerships, or product questions.</p>

          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-center gap-3"><Mail size={16} /> <span>hello@1sqft.in</span></li>
            <li className="flex items-center gap-3"><Phone size={16} /> <span>+91 98765 43210</span></li>
            <li className="flex items-center gap-3"><MapPin size={16} /> <span>Bengaluru, India</span></li>
          </ul>

          <div className="mt-6">
            <h4 className="text-sm font-semibold mb-1">Support hours</h4>
            <p className="text-xs text-slate-500">Mon — Fri, 10:00 — 18:00 IST</p>
          </div>
        </aside>

        <form className="contact-form p-6 bg-white rounded shadow max-w-md w-full">
          <label className="text-sm font-semibold">Name</label>
          <input className="input mt-2 mb-4" placeholder="Your name" aria-label="Name" />

          <label className="text-sm font-semibold">Email</label>
          <input className="input mt-2 mb-4" placeholder="you@domain.com" aria-label="Email" />

          <label className="text-sm font-semibold">Message</label>
          <textarea className="input mt-2 mb-4 h-28" placeholder="How can we help?" aria-label="Message" />

          <div className="flex items-center justify-between gap-4">
            <button type="submit" className="btn-black btn-small">Send message</button>
            <div className="text-xs text-slate-500">We typically reply within 1 business day.</div>
          </div>
        </form>
      </div>
    </div>
  );
}
