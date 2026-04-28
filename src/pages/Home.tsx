import React from 'react';
import { Link } from 'react-router-dom';
import { Quote, MapPin, Clock } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover object-center scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuHy-6GmKjkOHScx6E1i7oCBti0TNANXOvkY_ck459YRiY9svH86yqEbuKprSk0IJCfp03GN5e83TqWYxvK0gNvsb0TCONP2c3M_HIEQvGfA-0jQ57cAiNdvbpVbt9f4VXhHmjNyKifOtebNhzc8yLLgiWPcncSHXUeAwOP5Iqroa3kKMLrXFQTQhz64AJu-Q9t-HJvr_0Yyy6lTtXTvON67SFXvOALsHWbLqEdQC6lsnuV8_322nXwCswCvsWSkLpSUAl4XaIc2ua" 
            alt="Ultra high-end close up of minimalist pearl nail art"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/10"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-surface/60 backdrop-blur-xl p-12 rounded-lg border border-white/10 ambient-shadow">
            <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-6 block">Kuala Lumpur • Nail Salon</span>
            <h1 className="font-headline text-5xl md:text-7xl text-on-surface leading-tight mb-8">
              Nail Salon Studio— <br/><span className="italic font-light">Premium Artistry</span>
            </h1>
            <p className="text-on-surface-variant text-lg mb-12 max-w-md leading-relaxed font-light">
              Elevated gel nails and meticulous manicures in the heart of Kuala Lumpur. We define beauty through precision and tranquility.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/booking" className="editorial-gradient text-on-primary px-10 py-5 rounded-md font-label text-sm uppercase tracking-widest shadow-xl shadow-primary/10 hover:opacity-90 transition-all text-center">
                Book Appointment
              </Link>
              <button disabled className="px-10 py-5 rounded-md font-label text-sm uppercase tracking-widest border border-primary/20 text-primary cursor-default text-center">
                View Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Highlights */}
      <section className="py-32 px-12 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto text-[#8B7E74]">
          <div className="mb-20 flex justify-between items-end">
            <div>
              <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-4 block underline underline-offset-8">Our Specialty</span>
              <h2 className="font-headline text-4xl text-inherit">Signature Highlights</h2>
            </div>
            <div className="hidden md:block w-1/3 h-[1px] bg-[#8B7E74]/20 mb-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {/* Card 1 */}
            <div className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-lg mb-8 ambient-shadow">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgr4cl1rwfc_TFMme3rN9pDLiyrsgQVy9CmWyCJE0R4hIGnBjXxXcRJs90RDmLq0xCpkKc5cbtJDwH9BHAovRWpG4r1iRulCph7209HhHvp52VMuQKMwtI3e6q4mdjw9kbaoJnbU3tq5ftzKBNOUfDjDmgc0O8cOzKM3JSCCBAXUg1BqMOfNYM7Bd-t6pl0i420a567QCSioip7aP-D9YqZZxljn5sKjUstkaOZ2qH4yXwWGJwrvEsyyRnMCESNkfxr7rRNDc3fx41" 
                  alt="Bespoke Hand-Painted Art"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-headline text-2xl mb-4 text-on-surface">Bespoke Hand-Painted Art</h3>
              <p className="text-on-surface-variant font-light leading-relaxed mb-6">Intricate, custom-designed nail artistry featuring fine lines and elegant details.</p>
              <span className="font-label text-xs uppercase tracking-widest text-primary border-b border-primary/20 pb-1 cursor-default">Explore Portfolio</span>
            </div>
            {/* Card 2 */}
            <div className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-lg mb-8 ambient-shadow">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0lPG5kCt9t6HEgiKH3HaoPK6F9pz7vcW-j7vQhqO2mysEvW428O7kyG79KZYtUfT4oiYbcQkFqcfGnN0spGN2EXCQBeXwuogSF95r1XuAkGZp8jqJvkEs6_yvHI5XJPjD6ICwo7v1frZimgWOANUpLiSyKioSBZR2ScWi9TAP842uPmqLtY898KVUZtB0n2JNtYSx9sKobWgc20EzlNra3BYzwExk6Y9csi4Dbst2I1tVwm3GrCMwGdaaldXvHF4eyAvD99R9Zjee" 
                  alt="Signature Soft Gel"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-headline text-2xl mb-4 text-on-surface">Signature Soft Gel</h3>
              <p className="text-on-surface-variant font-light leading-relaxed mb-6">Flawless application using premium Japanese and Korean gels for a translucent, jelly-like finish.</p>
              <span className="font-label text-xs uppercase tracking-widest text-primary border-b border-primary/20 pb-1 cursor-default">Service Details</span>
            </div>
            {/* Card 3 */}
            <div className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-lg mb-8 ambient-shadow">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwXQOw4CrGRnOR7ab7BmBDExJCBP2W77a3Zj_682sQ0QzgaL6SrBpvIdHzCrRoJVOq0E5bfZOYeAmRPlTVg3l6txMdsH_r8tFPXP2Rc_Q7Bh-2kCKoFKm0flisdpQ4kFnL2PD1KwjZTfquZ6aeMif_1kRg_t0eHXnqNNGF_l4gQSesjFDwsdsatrmcSQccJA2S0hnCi3Q-8luCCZITdOpc0KAwFq__DfEUULYHoEzPrNQ5NwOnJZHEZzWJHA-bvdidIcfiKgRJFoNS" 
                  alt="Structural Extensions"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-headline text-2xl mb-4 text-on-surface">Structural Extensions</h3>
              <p className="text-on-surface-variant font-light leading-relaxed mb-6">Lightweight, natural-looking extensions with perfect apex shaping for long-lasting wear.</p>
              <span className="font-label text-xs uppercase tracking-widest text-primary border-b border-primary/20 pb-1 cursor-default">Pricing Tiers</span>
            </div>
          </div>
          <div className="flex justify-center">
            <button disabled className="bg-[#8B7E74] text-white px-12 py-5 rounded-md font-label text-sm uppercase tracking-widest cursor-default shadow-lg text-center">
              View Full Service Menu
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-primary-container/20">
        <div className="max-w-5xl mx-auto px-12 text-center text-[#8B7E74]">
          <Quote className="text-primary w-12 h-12 mb-12 mx-auto" fill="currentColor" />
          <div className="mb-16">
            <p className="font-headline text-3xl md:text-4xl text-on-surface leading-relaxed italic font-light mb-10">
              "The most serene experience I've had in Kuala Lumpur. Glow doesn't just do nails; they curate a moment of absolute peace. My gel set lasted four weeks without a single chip."
            </p>
            <div>
              <p className="font-label text-sm uppercase tracking-[0.2em] font-semibold text-on-surface mb-1">Sophia Chen</p>
              <p className="font-label text-xs uppercase tracking-[0.1em] text-on-surface-variant"><br/></p>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="w-2 h-2 rounded-full bg-outline-variant/30"></div>
            <div className="w-2 h-2 rounded-full bg-outline-variant/30"></div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-32 px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 items-center">
          <div className="text-center">
            <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-6 block"><br/></span>
            <h2 className="font-headline text-5xl mb-12 text-on-surface">Find Your Radiance</h2>
            <div className="space-y-10 flex flex-col items-center">
              <div className="flex flex-col items-center">
                <MapPin className="text-primary w-6 h-6 mb-2" />
                <div>
                  <p className="font-semibold text-on-surface mb-2">The Gardens Mall</p>
                  <p className="text-on-surface-variant font-light">Level 3, Unit 12-B, Mid Valley City<br/>Kuala Lumpur, 59200</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="text-primary w-6 h-6 mb-2" />
                <div>
                  <p className="font-semibold text-on-surface mb-2">Opening Hours</p>
                  <p className="text-on-surface-variant font-light">Mon - Sun: 10:00 AM - 10:00 PM<br/>By Appointment Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
