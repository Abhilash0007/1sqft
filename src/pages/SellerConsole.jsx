import React from 'react';

export default function SellerConsole() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">Seller Console</h1>
      <p className="mt-3 text-slate-600">Add listings, buy premium credits, manage timeline and leads (scaffold).</p>

      <div className="mt-6 space-y-4">
        <button className="btn-black">Add listing</button>
        <button className="btn-link">Buy Premium Credits</button>
      </div>
    </div>
  );
}
