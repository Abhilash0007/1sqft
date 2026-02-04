import React from 'react';

export default function Legal() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">Legal & Policies</h1>
      <p className="mt-3 text-slate-600">Terms, Privacy, Refunds and Disclosures related to credits and deal access.</p>

      <section className="mt-6 space-y-4">
        <article className="p-4 bg-white rounded shadow">
          <h4 className="font-semibold">Terms & Conditions</h4>
          <p className="text-sm text-slate-600 mt-1">Platform usage terms and deal-room conduct.</p>
        </article>

        <article className="p-4 bg-white rounded shadow">
          <h4 className="font-semibold">Privacy Policy</h4>
          <p className="text-sm text-slate-600 mt-1">How we handle data and KYC information.</p>
        </article>
      </section>
    </div>
  );
}
