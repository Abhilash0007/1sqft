import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import deal1 from '../assets/deal1.png';
import deal2 from '../assets/deal2.png';

export default function VerifiedDeals({ onBuyCredits }) {
  const deals = [
    { id: 1, corridor: 'Sarjapur', city: 'Bengaluru', type: 'Plot', size: '1200–1500', range: '₹X–₹Y', img: deal1 },
    { id: 2, corridor: 'Devanahalli', city: 'Bengaluru', type: 'Apartment', size: '1100–1300', range: '₹A–₹B', img: deal2 },
    { id: 3, corridor: 'Whitefield', city: 'Chennai', type: 'Apartment', size: '1100–1300', range: '₹C–₹D', img: deal2 },

  ];
  const [query, setQuery] = useState('');
  const location = useLocation();

  // Read query params to filter by city or corridor when coming from Cities page
  const params = new URLSearchParams(location.search);
  const cityParam = params.get('city') || '';
  const corridorParam = params.get('corridor') || '';

  const [selectedCity, setSelectedCity] = useState(cityParam);
  const [selectedType, setSelectedType] = useState('');

  const normalized = query.trim().toLowerCase();

  const cities = Array.from(new Set(deals.map(d => d.city))).filter(Boolean);
  const types = Array.from(new Set(deals.map(d => d.type))).filter(Boolean);

  // Start with city/corridor/type filtered list (if provided), then apply search query
  const activeCity = selectedCity || cityParam || '';
  const activeCorridor = corridorParam || '';
  const activeType = selectedType || '';

  const preFiltered = deals.filter(d => {
    if (activeCity && d.city) {
      if (d.city.toLowerCase() !== activeCity.toLowerCase()) return false;
    }
    if (activeCorridor) {
      if (d.corridor.toLowerCase() !== activeCorridor.toLowerCase()) return false;
    }
    if (activeType) {
      if (d.type.toLowerCase() !== activeType.toLowerCase()) return false;
    }
    return true;
  });

  const filteredDeals = normalized
    ? preFiltered.filter(d => (`${d.corridor} ${d.type} ${d.size} ${d.range} ${d.city || ''}`).toLowerCase().includes(normalized))
    : preFiltered;

  return (
    <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
      <div className="mb-8">
        {/* <div className="flex items-center justify-between gap-4 mb-6"> */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Explore verified deals</h2>
 <div className="filter-bar">

  {/* LEFT SIDE — Filters */}
  <div className="filter-left">

    <div className="filter-group">
      <select
        value={selectedCity}
        onChange={e => setSelectedCity(e.target.value)}
      >
        <option value="">All cities</option>
        {cities.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
    </div>

    <div className="filter-group">
      <select
        value={selectedType}
        onChange={e => setSelectedType(e.target.value)}
      >
        <option value="">All types</option>
        {types.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
    </div>

    <button
      className="filter-reset"
      onClick={() => {
        setSelectedCity('');
        setSelectedType('');
      }}
    >
      Reset
    </button>

  </div>


  {/* RIGHT SIDE — Search */}
  <div className="filter-right">
    <input
      aria-label="Search deals"
      placeholder="Search city, corridor or budget"
      className="search-input"
      value={query}
      onChange={e => setQuery(e.target.value)}
    />
  </div>

</div>

         

        {/* </div> */}

        <div className="flex flex-wrap gap-3 text-sm section-top-space">
          {['City', 'Corridor', 'Plot/Apartment', 'Size', 'Budget', 'Timeline'].map(filter => (
            <button key={filter} className="px-4 py-2 bg-white border border-slate-100 rounded-full hover:shadow-sm transition text-slate-600">{filter}</button>
          ))}
        </div>


      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDeals.length === 0 ? (
          <div className="text-center text-slate-500 py-12">No deals match your search.</div>
        ) : (
          filteredDeals.map(deal => (
          <article key={deal.id} className="deal-card">
            <div className="deal-thumb mb-4">
              <img src={deal.img} alt={`${deal.corridor} preview`} />
            </div>

            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <span className="deal-label">{deal.corridor}</span>
                <h3 className="text-xl font-bold mt-2">{deal.type} • {deal.size} sq ft</h3>
                <p className="text-slate-500 text-sm mt-1">Negotiated band: <span className="font-semibold text-slate-700">{deal.range}</span></p>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400">Updated • 3d</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <Badge label="Docs" />
              <Badge label="Geo" />
              <Badge label="Negotiated" />
            </div>

            <button onClick={onBuyCredits} className="btn-black">
              Unlock Deal Room
            </button>
          </article>
          ))
        )}
      </div>
    </div>
  );
}

const Badge = ({ label }) => (
  <span className="deal-badge">{label}</span>
);