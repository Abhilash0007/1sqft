import React from 'react';

export default function Dashboard() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-3 text-slate-600">Authenticated dashboard: goals, credits, shortlists, and alerts (scaffold).</p>

      <section className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="p-4 bg-white rounded shadow">My Goals</div>
        <div className="p-4 bg-white rounded shadow">My Credits</div>
        <div className="p-4 bg-white rounded shadow">My Shortlists</div>
      </section>
    </div>
  );
}
