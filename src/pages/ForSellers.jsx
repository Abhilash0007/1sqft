import React from 'react';

export default function ForSellers() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">For Sellers</h1>
      <p className="mt-3 text-slate-600">Meet buyers with clear intent — goals, budget bands, and faster closures.</p>

      <section className="mt-6 space-y-4">
        <p className="text-sm">List property details, choose verification, optionally buy premium credits to boost visibility.</p>
        <div className="flex gap-3">
          <button className="btn-black">List a property</button>
          <button className="btn-link">Talk to seller team</button>
        </div>
      </section>
    </div>
  );
}
