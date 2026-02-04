import React from 'react';
import { ShieldCheck, MapPin, BadgePercent, ArrowRight, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
const heroBg = new URL('../assets/hero-bg.svg', import.meta.url).href;
const deal1 = new URL('../assets/deal1.png', import.meta.url).href;
const deal2 = new URL('../assets/deal2.png', import.meta.url).href;
const deal3 = new URL('../assets/deal3.png', import.meta.url).href;
const deal4 = new URL('../assets/deal4.png', import.meta.url).href;

export default function Home() {
  const featuredDeals = [
    { id: 1, corridor: 'Sarjapur', type: 'Plot', size: '1200–1500', range: '₹X–₹Y', img: deal1 },
    { id: 2, corridor: 'Devanahalli', type: 'Apartment', size: '1100–1300', range: '₹A–₹B', img: deal2 },
    { id: 3, corridor: 'Sarjapur', type: 'Plot', size: '900–1100', range: '₹C–₹D', img: deal3 },
    { id: 4, corridor: 'Devanahalli', type: 'Villa', size: '2000–2500', range: '₹E–₹F', img: deal4 },
    { id: 5, corridor: 'Sarjapur', type: 'Apartment', size: '700–900', range: '₹G–₹H', img: deal1 },
    { id: 6, corridor: 'Devanahalli', type: 'Plot', size: '1500–1800', range: '₹I–₹J', img: deal2 },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero pt-24 pb-12">
        <img src={heroBg} alt="" aria-hidden="true" className="hero-bg-img" />
        <div className="max-w-5xl mx-auto text-center px-6">
          <div className="mb-4 hero-heading">
            <h1 className="hero-main">1SQFT<span className="tm">™</span></h1>
            <div className="sub-hero-tagline">1SQFT. Your SQFT.</div>
          </div>

          <p className="mb-8 leading-relaxed hero-sub">Set a goal, collect credits, and close with confidence. Verified, negotiated-price properties—built on clarity. </p>

          <div className="btn-group mb-8">
            <Link to="/deals" className="btn-black" aria-label="Start with a goal">
              Start with a goal <ArrowRight size={16} style={{marginLeft: 8}} />
            </Link>
            <Link to="/deals" className="btn-link" aria-label="Explore verified deals">
              Explore verified deals
            </Link>
          </div>

          <p className="text-sm text-slate-400 mb-8 italic">
            ₹1 = 1 credit • Credits renew yearly • 1% only when you close
          </p>

          <div className="hashtag-line section-bottom-space section-top-space">#1sqft4future &nbsp; • &nbsp; #Own1sqft &nbsp; • &nbsp; #1SqFtCtrl</div>
        </div>
      </section>

      {/* How it works for buyers - step-by-step */}
      <section className="py-12 buyers-steps bg-white no-top-gap section-top-space">
        <div className="max-w-6xl mx-auto px-6 text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">How it works for buyers</h2>
          <p className="text-slate-500">A simple, step-by-step flow to find, verify and close trusted listings.</p>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="steps-inline" role="list">
            <div className="step" role="listitem">
              <div className="step-number">1</div>
              <div className="step-body"><div className="step-title">Sign up</div><div className="step-desc">Create goal</div></div>
            </div>

            <div className="step-arrow" aria-hidden>›</div>

            <div className="step" role="listitem">
              <div className="step-number">2</div>
              <div className="step-body"><div className="step-title">Browse</div><div className="step-desc">Handpicked listings</div></div>
            </div>

            <div className="step-arrow" aria-hidden>›</div>

            <div className="step" role="listitem">
              <div className="step-number">3</div>
              <div className="step-body"><div className="step-title">Verify</div><div className="step-desc">View docs & extracts</div></div>
            </div>

            <div className="step-arrow" aria-hidden>›</div>

            <div className="step" role="listitem">
              <div className="step-number">4</div>
              <div className="step-body"><div className="step-title">Unlock</div><div className="step-desc">Use credits to close</div></div>
            </div>
          </div>
        </div>
      </section>


{/* How it works — For sellers */}
<section className="py-12 buyers-steps bg-white no-top-gap section-top-space">
  <div className="max-w-6xl mx-auto px-6 text-center mb-8">
    <h2 className="text-3xl font-bold mb-2">How it works for sellers</h2>
    <p className="text-slate-500">List with clarity. Reach verified buyers. Close faster.</p>
  </div>

  <div className="max-w-7xl mx-auto px-6">
    <div className="steps-inline" role="list">

      <div className="step" role="listitem">
        <div className="step-number">1</div>
        <div className="step-body">
          <div className="step-title">List property</div>
          <div className="step-desc">Share property details</div>
        </div>
      </div>

      <div className="step-arrow" aria-hidden>›</div>

      <div className="step" role="listitem">
        <div className="step-number">2</div>
        <div className="step-body">
          <div className="step-title">Verification</div>
          <div className="step-desc">Upload docs & site proof</div>
        </div>
      </div>

      <div className="step-arrow" aria-hidden>›</div>

      <div className="step" role="listitem">
        <div className="step-number">3</div>
        <div className="step-body">
          <div className="step-title">Price alignment</div>
          <div className="step-desc">Agree on negotiated band</div>
        </div>
      </div>

      <div className="step-arrow" aria-hidden>›</div>

      <div className="step" role="listitem">
        <div className="step-number">4</div>
        <div className="step-body">
          <div className="step-title">Meet verified buyers</div>
          <div className="step-desc">Close with serious intent</div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* What you get */}
      <section className="py-14 no-top-gap">
        <div className="max-w-5xl mx-auto px-6 text-center section-top-space">
          <h2 className="text-2xl font-bold mb-3">What you get</h2>
          <p className="text-slate-600 mb-6">Verified. Negotiated. Ready to close.</p>

       
        </div>
      </section>

      {/* Proof Pillars */}
      <section className="">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 px-6 ">
          <div className=" card">
            <ShieldCheck className="text-blue-600 mb-4" size={36} />
            <h3 className="text-xl font-bold mb-2">Verified Documents</h3>
            <p className="text-slate-500 italic">Key checks. Clean disclosures.</p>
          </div>

          <div className=" card">
            <MapPin className="text-blue-600 mb-4" size={36} />
            <h3 className="text-xl font-bold mb-2">Geo-tagged Site Proof</h3>
            <p className="text-slate-500 italic">Photos. Videos. Notes.</p>
          </div>

          <div className=" card">
            <BadgePercent className="text-blue-600 mb-4" size={36} />
            <h3 className="text-xl font-bold mb-2">Negotiated Price</h3>
            <p className="text-slate-500 italic">Seller-agreed. Time-bound.</p>
          </div>
        </div>
      </section>

      {/* Featured deals teaser */}
      <section className="py-12 bg-slate-50 mb-12 section-top-space ">
        <div className="max-w-7xl mx-auto px-6 ">
          <div className="flex items-center justify-between mb-6 ">
            <div className="section-top-space ">
              <h3 className="text-2xl font-bold">Verified deals, across corridors.</h3>
              <p className="text-slate-500 text-sm">Sarjapur • Devanahalli • and more</p>
            </div>
            <Link to="/deals" className="btn-link">Explore all deals</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {featuredDeals.slice(0, 4).map(d => (
              <article key={d.id} className="teaser-card p-4 bg-white rounded shadow section-bottom-space ">
                <div className="mb-3">
                  <img src={d.img} alt="preview" className="w-full h-36 object-cover rounded" />
                </div>

                <div className="mb-3">
                  <span className="deal-label">{d.corridor}</span>
                  <h4 className="font-bold mt-2">{d.type} • {d.size} sq ft</h4>
                  <div className="text-sm text-slate-500 mt-1">Negotiated band: <span className="font-semibold text-slate-700">{d.range}</span></div>
                </div>

                <div className="flex items-center justify-between ">
                  <div className="flex gap-2">
                    <span className="deal-badge">Docs</span>
                    <span className="deal-badge">Geo</span>
                    <span className="deal-badge">Negotiated</span>
                  </div>
                  <Link to={`/deal-room/${d.id}`} className="btn-black btn-small">Unlock </Link>
                </div>
              </article>
            ))}
          </div>

         
        </div>
      </section>

      {/* For sellers snippet */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-2">Sell to clarity.</h3>
          <p className="text-slate-600 mb-4">Not window shoppers — buyers with goals, budget bands and intent.</p>
          <div className="flex items-center justify-center gap-3">
            <Link to="/sellers" className="btn-black">List a property</Link>
            <Link to="/contact" className="btn-link">Talk to seller team</Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">How it works</h2>
          <p className="text-slate-500">Simple steps to discover, verify, and close trusted deals.</p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          <div className="card text-center">
            <div className="icon-large mx-auto mb-4"><Users size={36} /></div>
            <h4 className="font-bold mb-2">Set your goal</h4>
            <p className="text-slate-500 text-sm">Tell us budget, type and timeline — we surface matches.</p>
          </div>

          <div className="card text-center">
            <div className="icon-large mx-auto mb-4"><ShieldCheck size={36} className="text-blue-600" /></div>
            <h4 className="font-bold mb-2">We verify</h4>
            <p className="text-slate-500 text-sm">Documents, geo-proof and negotiated terms — consolidated for you.</p>
          </div>

          <div className="card text-center">
            <div className="icon-large mx-auto mb-4"><Clock size={36} className="text-blue-600" /></div>
            <h4 className="font-bold mb-2">Close confidently</h4>
            <p className="text-slate-500 text-sm">Use credits to unlock deal rooms and complete transaction securely.</p>
          </div>
        </div>
      </section>

      {/* (Removed Featured neighborhoods + stats panel per request) */}

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-2xl font-bold mb-4">Ready to start?</h3>
          <p className="text-slate-500 mb-6">Set a goal and unlock verified listings with straightforward credits.</p>
          <div className="btn-group justify-center">
            <Link to="/deals" className="btn-black">Start with a goal</Link>
            <Link to="/pricing" className="btn-link">View pricing</Link>
          </div>
        </div>
      </section>
      {/* Contact Form Section */}
<section className="contact-section">
  <div className="contact-container">

    <div className="contact-header">
      <h3>Talk to our team</h3>
      <p>Have questions? Want help choosing the right property? We’re here.</p>
    </div>

    <form className="contact-form">

      <div className="form-row">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input type="tel" placeholder="Enter phone number" />
        </div>
      </div>

      <div className="form-group">
        <label>Email</label>
        <input type="email" placeholder="Enter email" />
      </div>

      <div className="form-group">
        <label>Message</label>
        <textarea rows="4" placeholder="Tell us what you are looking for..."></textarea>
      </div>

      <button type="submit" className="contact-btn">
        Submit enquiry
      </button>

    </form>
  </div>
</section>

    </div>
  );
}