import React from 'react';
import { Link } from 'react-router-dom';
import deal1 from '../assets/deal1.png';
import deal2 from '../assets/deal2.png';
import deal3 from '../assets/deal3.png';
import deal4 from '../assets/deal4.png';



export default function Cities() {
  const corridors = [
    { id: 'HSR layout', name: 'Sarjapur', city: 'Bengaluru', img: deal1, note: 'Growth corridor — plots' },
    { id: 'devanahalli', name: 'Devanahalli', city: 'Bengaluru', img: deal2, note: 'Airport-adjacent listings' },
    { id: 'whitefield', name: 'Whitefield', city: 'Bengaluru', img: deal1, note: 'IT corridor — apartments ' },
    { id: 'hebbal', name: 'Hebbal', city: 'Bengaluru', img: deal3, note: 'Connectivity and ready projects' },
     { id: 'sarjapur', name: 'Sarjapur', city: 'Bengaluru', img: deal4, note: 'Growth corridor — plots' },
    { id: 'jayanagar', name: 'Jayanagar', city: 'Bengaluru', img: deal2, note: 'Historic neighborhood — ready projects' },
    { id: 'BTM layout', name: 'BTM Layout', city: 'Bengaluru', img: deal3, note: 'IT corridor — apartments ' },
    { id: 'MG road', name: 'MG Road', city: 'Bengaluru', img: deal4, note: 'Connectivity and ready projects' },
     { id: 'kengeri', name: 'Kengeri', city: 'Bengaluru', img: deal1, note: 'Growth corridor — plots' },
    { id: 'Electronic city', name: 'Electronic City', city: 'Bengaluru', img: deal2, note: 'Airport-adjacent listings' },
    { id: 'whitefield', name: 'Whitefield', city: 'Bengaluru', img: deal3, note: 'IT corridor — apartments ' },
    { id: 'hebbal', name: 'Hebbal', city: 'Bengaluru', img: deal4, note: 'Connectivity and ready projects' },
  ];

  return (
    <div className="container py-12">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold">Cities & Corridors</h1>
        <p className="mt-3 text-slate-600">Start exploring by city. Featured: Bengaluru — Sarjapur, Devanahalli.</p>
      </div>

      <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {corridors.map(c => (
          <article key={c.id} className="city-card bg-white rounded shadow p-4">
            <div className="city-thumb mb-3">
              <img src={c.img} alt={c.name} className="w-full h-36 object-cover rounded" />
            </div>

            <div>
              <h3 className="font-semibold text-lg">{c.name}</h3>
              <div className="text-sm text-slate-500">{c.city} • {c.note}</div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <Link to={`/deals?city=${c.city}&corridor=${c.id}`} className="btn-link">Explore deals</Link>
              <Link to={`/deals?corridor=${c.id}`} className="btn-black btn-small">View</Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
