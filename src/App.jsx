import React, { useState } from "react";

export default function App() {
  const year = new Date().getFullYear();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const services = [
    {
      title: "Life Insurance",
      img: "./assets/life insurance.png",
      desc: "Secure your family's future with comprehensive life insurance plans.",
      points: [
        "Term Life Coverage",
        "Whole Life Plans",
        "Investment Options",
        "Family Protection",
      ],
    },
    {
      title: "Health Insurance",
      img: "./assets/health insurance.png",
      desc: "Complete healthcare coverage with cashless hospitalization.",
      points: [
        "Family Floater Plans",
        "Critical Illness Cover",
        "Cashless Treatment",
        "Wellness Benefits",
      ],
    },
    {
      title: "Motor Insurance",
      img: "./assets/Motor insurance.png",
      desc: "Reliable coverage for your vehicle with quick claims.",
      points: [
        "Comprehensive & Third-Party",
        "Zero Depreciation",
        "24/7 Roadside Assistance",
        "Cashless Repairs",
      ],
    },
  ];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We'll contact you soon.`);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="./assets/company logo.png"
              alt="Keerthi Enterprises"
              className="h-16 w-16"
            />
            <div>
              <h1 className="text-xl font-bold">Keerthi Enterprises</h1>
              <p className="text-xs text-slate-500">
                Insurance Broking Services
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6 text-sm">
              <a href="#services" className="hover:text-primary">Services</a>
              <a href="#stats" className="hover:text-primary">Why Choose Us</a>
              <a href="#locations" className="hover:text-primary">Locations</a>
              <a href="#testimonials" className="hover:text-primary">Testimonials</a>
            </nav>

            <a
              href="#contact"
              className="bg-secondary text-white px-5 py-2 rounded-lg text-sm font-semibold"
            >
              Get Quote
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative min-h-[90vh]"
        style={{
          backgroundImage: "url('./assets/Background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-transparent"></div>

        {/* Content */}
        <div className="container mx-auto px-5 sm:px-6 lg:px-9 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center py-24">
            {/* LEFT SIDE */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-3 py-1 text-xs mb-6">
                🛡️ Trusted Insurance Partner Since 2017
              </div>

              <h2 className="text-6xl md:text-7xl font-extrabold leading-tight mb-4">
                Protect What Matters Most
              </h2>

              <p className="text-white/90 text-lg mb-8 max-w-prose">
                Expert broking for Life, Health, and Motor Insurance. Personalized
                advice, seamless onboarding, and fast claim support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#services"
                  className="bg-white text-primary hover:opacity-90 rounded-xl px-6 py-3 font-semibold text-center"
                >
                  Explore Services
                </a>

                <a
                  href="#contact"
                  className="border border-white/80 text-white hover:bg-white/10 rounded-xl px-6 py-3 font-semibold text-center"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="hidden md:block">
              <div className="bg-white/10 rounded-2xl p-6 shadow-soft backdrop-blur">
                <h3 className="text-white text-xl font-semibold">
                  Why Choose Us?
                </h3>

                <ul className="mt-4 space-y-3 text-white/90">
                  <li>• 30+ expert team members</li>
                  <li>• Offices at ECIL & Gajularamaram</li>
                  <li>• Strong network with leading insurers</li>
                  <li>• Fast claim assistance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="text-slate-600 mt-2">
              Comprehensive solutions tailored for your needs
            </p>
          </div>

        <section id="services" className="py-20 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold">Our Services</h2>
      <p className="text-slate-600 mt-2">
        Comprehensive solutions tailored for your needs
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-6">
      {services.map((service) => (
        <div
          key={service.title}
          className="rounded-2xl border shadow-soft p-6 bg-white"
        >
          {/* IMAGE + TEXT SIDE BY SIDE */}
          <div className="flex items-start gap-6">

            {/* IMAGE */}
            <img
              src={service.img}
              alt={service.title}
              className="w-36 h-auto flex-shrink-0"
            />

            {/* TEXT */}
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-slate-600 mb-3">
                {service.desc}
              </p>

              <ul className="text-sm text-slate-600 space-y-1">
                {service.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
            </div>
          </div>  
      ))}
      </div>
    </div>
      </section>
  </div>
</section>


      {/* STATS */}
      <section id="stats" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Choose us?</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-white/10 rounded-2xl backdrop-blur">
              <div className="text-4xl font-bold">2017</div>
              <div className="mt-1 text-white/80">Established</div>
            </div>

            <div className="p-6 bg-white/10 rounded-2xl backdrop-blur">
              <div className="text-4xl font-bold">30+</div>
              <div className="mt-1 text-white/80">Expert Team Members</div>
            </div>

            <div className="p-6 bg-white/10 rounded-2xl backdrop-blur">
              <div className="text-4xl font-bold">2</div>
              <div className="mt-1 text-white/80">Branches in Hyderabad</div>
            </div>

            <div className="p-6 bg-white/10 rounded-2xl backdrop-blur">
              <div className="text-4xl font-bold">1000+</div>
              <div className="mt-1 text-white/80">Happy Customers</div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/80">We work with leading insurers:</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 font-semibold text-white">
              <span>• LIC</span>
              <span>• Star Health</span>
              <span>• ICICI</span>
              <span>• TATA AIG</span>
              <span>• Royal Sundaram</span>
              <span>• Magam</span>
              <span>• And Many More</span>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section id="locations" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Locations</h2>
            <p className="text-slate-600 mt-2">Visit our offices in Hyderabad</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Head Office - ECIL */}
            <div className="rounded-2xl border shadow-soft p-6 flex flex-col">
              <h3 className="text-xl font-semibold">Head Office - ECIL</h3>

              <div className="mt-4 space-y-2 text-slate-700">
                <p>
                  📍{" "}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=H.NO:+1-7-12/1/1,+New+Municipal+Office+Line,+South+Kamala+Nagar,+M+J+Colony,+Moula+Ali,+Secunderabad+500062"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline"
                  >
                    H.NO: 1-7-12/1/1, New Municipal Office Line, South Kamala Nagar,
                    M J Colony, Moula Ali, Secunderabad – 500062
                  </a>
                </p>

                <p>📌 GSTIN: 36AMZPL3954H1ZC</p>
                <p>🧾 MSME No: UDYAM-TS-02-0029886</p>
                <p>📞 +91 63098 32224</p>
                <p>✉️ keerthienterpriseshyd1972@gmail.com</p>
                <p>🕘 Mon–Sat: 9:00 AM – 6:00 PM</p>
              </div>

              <a
                href="https://www.google.com/maps?q=17.4723056,78.5643889"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center mt-5 self-start rounded-lg bg-primary text-white text-sm font-semibold px-4 py-2 shadow-soft hover:shadow-medium hover:bg-primary/90 transition"
              >
                📍 Open in Google Maps ↗
              </a>

              <div className="mt-4 w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?hl=en&q=17.4723056,78.5643889&t=m&z=17&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  title="ECIL Location"
                ></iframe>
              </div>
            </div>

            {/* Branch Office - Gajularamaram */}
            <div className="rounded-2xl border shadow-soft p-6 flex flex-col">
              <h3 className="text-xl font-semibold">Branch Office - Gajularamaram</h3>

              <div className="mt-4 space-y-2 text-slate-700">
                <p>
                  📍{" "}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=H.No.+266,+1st+Floor,+Gajularamaram+Road,+Near+UMCC+Hospital,+Hyderabad+500055"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline"
                  >
                    H.No. 266, 1st Floor, Gajularamaram Road, Near UMCC Hospital,
                    Hyderabad – 500055
                  </a>
                </p>

                <p>📞 +91 63098 32224</p>
                <p>✉️ keerthienterpriseshyd1972@gmail.com</p>
                <p>🕘 Mon–Sat: 9:00 AM – 6:00 PM</p>
              </div>

              <a
                href="https://www.google.com/maps?q=17.5193611,78.42775"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center mt-5 self-start rounded-lg bg-primary text-white text-sm font-semibold px-4 py-2 shadow-soft hover:shadow-medium hover:bg-primary/90 transition"
              >
                📍 Open in Google Maps ↗
              </a>

              <div className="mt-4 w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=17.5193611,78.42775&z=17&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  title="Gajularamaram Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">What Our Clients Say</h2>
            <p className="text-slate-600 mt-2">
              Trusted by thousands of satisfied customers across Hyderabad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Rajesh Kumar",
                role: "Business Owner",
                text:
                  "Keerthi Enterprises provided excellent guidance for my company's group health insurance. The onboarding was smooth and the claim process was fast.",
              },
              {
                name: "Priya Sharma",
                role: "Software Engineer",
                text:
                  "I've been with Keerthi Enterprises for 3 years now. Their team is responsive and always helps me understand the best options for my family.",
              },
              {
                name: "Joshua",
                role: "Entrepreneur",
                text:
                  "Professional and reliable! They handled my motor insurance claim quickly and kept me updated at every step.",
              },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl border shadow-soft bg-white p-6">
                <div className="flex gap-1 mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-slate-700">{t.text}</p>
                <div className="border-t mt-4 pt-4">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-white">
        <div
          id="contact"
          className="container mx-auto px-4 py-12 grid md:grid-cols-4 gap-8"
        >
          <div>
            <h3 className="text-xl font-bold mb-4">Keerthi Enterprises</h3>
            <p className="text-white/90 text-sm">
              Your trusted insurance partner since 2017. We provide comprehensive
              insurance solutions with personalized service and expert guidance.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>

            <ul className="space-y-2 text-sm text-white/90">
              <li>
                📍 Head Office – ECIL (
                <a
                  href="https://www.google.com/maps?q=17.4723056,78.5643889"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-white"
                >
                  View on Map
                </a>
                )
              </li>

              <li>
                📍 Branch Office – Gajularamaram (
                <a
                  href="https://www.google.com/maps?q=17.5193611,78.42775"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-white"
                >
                  View on Map
                </a>
                )
              </li>

              <li>📞 +91 63098 32224</li>

              <li>
                ✉️{" "}
                <a
                  href="mailto:keerthienterpriseshyd1972@gmail.com"
                  className="underline hover:text-white"
                >
                  keerthienterpriseshyd1972@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services">Services</a></li>
              <li><a href="#stats">Why Choose Us</a></li>
              <li><a href="#locations">Locations</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>

          {/* GET A QUOTE */}
          <div>
            <h4 className="font-semibold mb-4">Get a Quote</h4>
            <div className="space-y-3">
              <input
                className="w-full px-3 py-2 rounded text-slate-900"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input
                className="w-full px-3 py-2 rounded text-slate-900"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <input
                className="w-full px-3 py-2 rounded text-slate-900"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              <button 
                onClick={handleSubmit}
                className="w-full bg-white text-primary font-semibold py-2 rounded hover:bg-slate-100 transition"
              >
                Request Call
              </button>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/20 py-4 text-center text-sm">
          © {year} Keerthi Enterprises. All rights reserved.
        </div>
      </footer>
    </>
  );
}