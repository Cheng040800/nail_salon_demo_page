import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <main className="pt-32 pb-24">
      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-12 mb-20">
        <div className="flex flex-col items-start gap-4">
          <span className="font-label uppercase tracking-[0.2em] text-xs text-primary font-semibold">The Art of Care</span>
          <h1 className="font-headline text-6xl md:text-8xl text-on-surface leading-tight tracking-tighter">Our Services</h1>
          <p className="max-w-xl text-lg text-on-surface-variant font-light mt-4">
            Meticulously curated treatments designed to restore your natural radiance and provide a moment of absolute tranquility in the heart of KL.
          </p>
        </div>
      </header>

      {/* Service Grid: Asymmetric Layout */}
      <section className="max-w-7xl mx-auto px-12 space-y-32">
        {/* Gel Nails (Featured Large) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 rounded-lg overflow-hidden relative group">
            <img 
              className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105 rounded-sm" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh8JQMGq4svyRntvwTXn1XAODVghzj1YHgEMzGmliOZ151ya6HQn6ZLJeb8Iotn1EX9v0mC_4xreT5B7O2WCpnM2XP6Cxgwn9luCxV9P0FAdV1zeDOpxkMOUT2s0XidpOIEEP9w27ph3vG8wAYtpdjP1bpNvrNWQA1ii7oQ-oc9OPuuBcjRY0WSNTlyd8U-TWHC8hfrDj2XB56pj9OeYtRRFbj4Ch-DF5pmVxDmrJ_NJvdr-FjAQEmLxVjkndi76a5sxM_1AvgMDEI" 
              alt="Gel Nails"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="md:col-span-5 space-y-6">
            <span className="font-label text-xs tracking-widest text-primary uppercase">Long Lasting Brilliance</span>
            <h2 className="font-headline text-4xl text-on-surface">Gel Nails</h2>
            <p className="text-on-surface-variant leading-relaxed">Experience the finest Gel Nails in KL. Using only premium non-toxic resins, we create a durable, diamond-like shine that protects and enhances your natural beauty.</p>
            <div className="flex items-baseline gap-2">
              <span className="font-label text-xs text-on-surface-variant">Starting from</span>
              <span className="font-headline text-2xl text-on-surface">RM 120</span>
            </div>
            <Link className="editorial-gradient text-on-primary px-8 py-4 rounded-md shadow-sm hover:shadow-xl transition-all duration-300 font-label uppercase tracking-[0.1em] text-xs inline-block text-center" to="/booking">Book Now</Link>
          </div>
        </div>

        {/* Manicure & Pedicure (Staggered Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Manicure */}
          <div className="space-y-8 mt-12">
            <div className="bg-surface-container-low p-4 rounded-lg">
              <img 
                className="w-full aspect-square object-cover rounded-sm" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkiqwVcjv02pDGhzN1j74GVrQhK3634vAT0d9K4hy1oTH_eKl-DNtrwuyXD21TakB2JACzOhYosNjWOTZHI_0Ielt6VUAXE9MaVxVem4AUpNVC-hv8aRj53RYnhLNARMIzCm5lhLmfBjNETne794a3ViwVhv8MKXyFGlyYLc7H9JXa1v0t3Smlr7uU3uhBzBYa3Gs7JEs0BpZvFqI_2duR0cmE43p5zYSxQ2cWYKjRWOEon2ilaWpzkS55oh-m4NGMo4H47DV1cOK3" 
                alt="Manicure"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4 px-2">
              <h2 className="font-headline text-3xl text-on-surface">Classic Manicure</h2>
              <p className="text-on-surface-variant font-light leading-relaxed">A sanctuary for your hands. Experience the finest manicure in KL with our signature hand massage and precision cuticle care.</p>
              <div className="flex justify-between items-center pt-4">
                <span className="font-headline text-xl text-on-surface">RM 80</span>
                <Link className="font-label text-xs uppercase tracking-widest text-primary hover:underline underline-offset-8 transition-all" to="/booking">Book Now</Link>
              </div>
            </div>
          </div>
          {/* Pedicure */}
          <div className="space-y-8 -mt-12">
            <div className="bg-surface-container-low p-4 rounded-lg">
              <img 
                className="w-full aspect-square object-cover rounded-sm" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx9eo06TFHX6ECxR5jsWsjFEg6d6fZlbkPoGRFmIVtD3uThmhRjzBF_l_9xn8sBgE4IFyAIjagmnTNPK0tUUQ245TnrE-e2ftf0LD5xJPUWJeJ--D01Wd3BnxZbxmZ5oEwcRa6Grn42Cvq-qvGySHryfKEM7Z8x2IJswOi0rDLe7-3f28RiU35w7eZSyVnv06pAMDhcJSBb1MrDjEy-Fg2SK5wtwOgxNuOA9FWc5TyhP7Tvm3Eq7E2cwG7cj_IdtSoPwsm27BDph8b" 
                alt="Pedicure"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4 px-2">
              <h2 className="font-headline text-3xl text-on-surface">Spa Pedicure</h2>
              <p className="text-on-surface-variant font-light leading-relaxed">Indulge in a revitalizing soak followed by meticulous care. Experience the finest pedicure in KL, designed to soothe and restore tired feet.</p>
              <div className="flex justify-between items-center pt-4">
                <span className="font-headline text-xl text-on-surface">RM 95</span>
                <Link className="font-label text-xs uppercase tracking-widest text-primary hover:underline underline-offset-8 transition-all" to="/booking">Book Now</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Nail Art (Asymmetric Right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center pt-12">
          <div className="md:col-span-5 md:order-1 space-y-6 md:text-right">
            <span className="font-label text-xs tracking-widest text-primary uppercase">Bespoke Design</span>
            <h2 className="font-headline text-4xl text-on-surface">Nail Art Design</h2>
            <p className="text-on-surface-variant leading-relaxed">Your nails are the canvas. Experience the finest nail art design in KL, from minimalist geometric lines to intricate hand-painted masterpieces.</p>
            <div className="flex items-baseline justify-end gap-2">
              <span className="font-label text-xs text-on-surface-variant">Per nail from</span>
              <span className="font-headline text-2xl text-on-surface">RM 15</span>
            </div>
            <Link className="editorial-gradient text-on-primary px-8 py-4 rounded-md shadow-sm hover:shadow-xl transition-all duration-300 font-label uppercase tracking-[0.1em] text-xs inline-block text-center" to="/booking">Consult Now</Link>
          </div>
          <div className="md:col-span-7 md:order-2 rounded-lg overflow-hidden bg-surface-container-low p-8">
            <img 
              className="w-full aspect-video object-cover rounded-sm shadow-2xl" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIeJ8GI34Qn04NjHM7jM4ywoZp0pE6wfPto_J-E81obXOskH3uIF5Xfq2wD8pYMasV-ZNrzALm05hp43dsxWarX4n08lbNV7hDenxLB_7L2yQ3yajlwM0Aet3JIN25jHxrVefzRFQ6HHlbnT24PusAoRCQkfWYWk-cC-0HjclYEAYuAOC8Km2a2wsSAh2PEGBVu2aUUXqJiMgX0pZIJ2bIX6hEv1p9F8oKV-LKMHrUjrA4KQrdljZEkjI_KJ9OAxkex7IHIk7Txv80" 
              alt="Nail Art Design"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-12 mt-48">
        <div className="bg-surface-container-lowest p-24 rounded-lg flex flex-col items-center text-center space-y-8 border-none relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="w-full h-full editorial-gradient"></div>
          </div>
          <h3 className="font-headline text-5xl text-on-surface max-w-2xl leading-tight">Elevate Your Everyday Ritual</h3>
          <p className="text-on-surface-variant font-light max-w-lg">Reserve your moment of peace. Our specialists are ready to curate your unique glow.</p>
          <Link className="bg-primary text-on-primary px-12 py-5 rounded-md hover:bg-primary-dim transition-all duration-300 font-label uppercase tracking-widest text-sm z-10 text-center" to="/booking">Reserve Your Appointment</Link>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a className="fixed bottom-12 right-12 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 flex items-center justify-center" href="https://wa.me/#">
        <svg fill="currentColor" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
        </svg>
      </a>
    </main>
  );
};

export default Services;
