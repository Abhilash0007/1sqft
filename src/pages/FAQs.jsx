import React from 'react';

export default function FAQs() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">FAQs</h1>
      <section className="mt-6 space-y-4">
        <details className="p-4 bg-white rounded shadow">
          <summary className="font-semibold">What are credits?</summary>
          <p className="text-sm text-slate-600 mt-2">₹1 = 1 credit. Credits are platform access and renew yearly.</p>
        </details>

        <details className="p-4 bg-white rounded shadow">
          <summary className="font-semibold">When do fees apply?</summary>
          <p className="text-sm text-slate-600 mt-2">1% buyer and 1% seller fee apply only after successful closure.</p>
        </details>
      </section>
    </div>
  );
}
