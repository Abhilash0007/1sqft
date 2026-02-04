import React from 'react';

export default function ForDevelopers() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">For Developers / Builders</h1>
      <p className="mt-3 text-slate-600">Optional but powerful: connect curated listings to verified buyer goals.</p>

      <section className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="p-4 bg-white rounded shadow">
          <h4 className="font-semibold">Priority access</h4>
          <p className="text-sm text-slate-600 mt-1">Use premium credits to surface inventory to serious buyers.</p>
        </div>
      </section>
    </div>
  );
}
