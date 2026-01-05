import React from "react";

export default function App() {
  const year = new Date().getFullYear();

  return (
    <div className="font-[Inter] text-slate-900 bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/assets/company logo.png" alt="Keerthi Enterprises" className="h-16 w-16" />
            <div>
              <h1 className="text-xl font-bold">Keerthi Enterprises</h1>
              <p className="text-xs text-slate-500">Insurance Broking Services</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#services" className="hover:text-primary">Services</a>
            <a href="#stats" className="hover:text-primary">Why Us</a>
            <a href="#locations" className="hover:text-primary">Locations</a>
            <a href="#testimonials" className="hover:text-primary">Testimonials</a>
          </nav>
          <a href="#contact" className="bg-secondary text-white px-4 py-2 rounded-lg">Get Quote</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <img src="/assets/Background.png" alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-transparent" />
        </div>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center py-24">
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Protect What Matters Most</h2>
            <p className="text-lg text-white/90 mb-8">
              Expert broking for Life, Health, and Motor Insurance with fast claim support.
            </p>
            <div className="flex gap-4">
              <a href="#services" className="bg-white text-primary px-6 py-3 rounded-xl font-semibold">Explore Services</a>
              <a href="#contact" className="border border-white px-6 py-3 rounded-xl">Free Consultation</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Life", "Health", "Motor"].map((service) => (
              <div key={service} className="rounded-2xl border shadow-soft p-6 text-center">
                <img
                  src={`/assets/${service.toLowerCase()} insurance.png`}
                  alt={service}
                  className="mx-auto mb-4 max-w-xs"
                />
                <h3 className="text-xl font-semibold mb-2">{service} Insurance</h3>
                <p className="text-slate-600">
                  Comprehensive {service.toLowerCase()} insurance solutions tailored for you.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-6 text-center">
          {["2017", "30+", "2", "1000+"].map((item, i) => (
            <div key={i} className="bg-white/10 rounded-2xl p-6">
              <div className="text-4xl font-bold">{item}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Locations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-2xl p-6">Head Office – ECIL</div>
            <div className="border rounded-2xl p-6">Branch Office – Gajularamaram</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center text-sm text-white/80">
          © {year} Keerthi Enterprises. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
