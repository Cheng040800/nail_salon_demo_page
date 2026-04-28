import React from 'react';
import { Link } from 'react-router-dom';

const Gallery: React.FC = () => {
  const galleryItems = [
    {
      title: 'The Quiet Luxury',
      category: 'Modern Nude',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChG0yuNoBYA5AfDv2d1ZOdub37ozxJKv0Plv7_wfnUdglerg-6s-uhIJwIeojGLui3umIVJaKoElZpQ-qzHGITNqUQCi1nqe3dAy2lFe-P_TV2ULfPAJYLJSYztr8iderDuM8ECm4oeKUPJRdu34TsNvmiF0EuOsLDGx40KGYAS_ZU9mWLUy2PqBWqTOJBqIvgBoUGgQUh_39H0-gDuo3lkC9S6wCiZci1e3g3s4rAEJr2jsiZ7d3Va7N-yPyctjhpAA9O0iOrqqjp'
    },
    {
      title: 'Velvet Spectrum',
      category: 'Prismatic',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPSpd8ntKcTqPkCuRgLQlAfl2p-rUKFsXLAfTUlezabkwTk-JnQsC-mYD3x0pTOqH-ETGbdYDfOcDSK9JtdhibdQJuTYYZatwRen1t7ed14Xc8hR0w6UD7yRZ3l3Cax4tZSouftE48KG6YdVNp_HEGl25enURjeddzCeRirF7K-lkLxXP3Zl5KpB-HuacvGGsXzJOM5YfK__bQJZxsFzU3qWWsOvoBAIFvNXbbR0U_RJp7YsDqNjA5GTZRWfyKN7U6qe6GHvnHAu7-'
    },
    {
      title: 'Daily Radiance',
      category: 'Essentials',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsvCB6sWTfwAw0pNSyCZAWm4V6Ji0cujdoxRAVqzg-tUwQjfd3DO8P40A0OxEtH0uC1mqJtWf19JchlC-p6-zGJD3hI9GcEMedDci622L73r_N5Zcc_zfL_Kh1BINvcjLBCoizzuhJ_HHJmtWFSMZbDurH07sSYWTfBr1G1vvvz9jsx07S9SG17CpERhe10ZFNYMkUqdQ2asgV4Ksx2z_9q2y1hvcF1o6_oCUDJBUrkRuTr0JobTygQEEg1M1uBRg_Ya9RZsYD_wT5'
    },
    {
      title: 'The Emerald Touch',
      category: 'Signature',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBV0qn2kQOso7yd1lCVpu8yNahWoQIDsZ8YQlRBP8v3Gxd_W5IVMW5YPZiDNpAjZrhv911P4zXXh8Y7AKoRybskDeLgNiXqDPwc_n4UPCekAvsbdGKOJQTXYynRqyMVeFQrz4hrTDgJjvO1-rP1q3CG4u2xaMstD2mafYurtu9x7aEo1cZgrBmcIbxHAI1gQwuEN0lsdahvUIqTlkcTW3XLpFVEPfsAvCBQGVozRUUIFwGoGzDiYRtYJRYSppRRbtz68f8aNufYz3zm'
    },
    {
      title: 'Pearl Essence',
      category: 'Bridal',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE0gYUSx5N7r1hFgyMixbHqsa2mHxYuv6PfxKQPg-qbNTRM8t1A_Lpn2qQMWyCVd-5hmIlnsaaKVntjDnSIeK7RZapZtFAaPEva-gULPfE5mj78niydpaHimigI8-tpL9LGReZFoH-joC48xvHaMkAx3cqmvAmWgFuSuMXBRijrv2O0BddEeYV8FOUu-j9vlAKlWvMjUvTAM9dT6Y1SSLXuezCDl2Wz5rbY53HlaxGpGs-8LHYgsQ7gVDFfx8hG8g0saTd_uILcxFw'
    },
    {
      title: 'Earth & Clay',
      category: 'Abstract',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC188ebfRAKsDovitpzUdxBE33aItIaBbcrtiHhVbkklIX1Tyenl1wRlSPqAoGGnLsyjX9UoYD_YbLONsr8Fr0Bdl-M80oLwLAxcOhGXoGBbp39TR7F00uBahzzHLla55T_Ie-NlM-4dXOf3JELKYiXik19PwL8e77Ynv8C-PMWUdBYgm884CBagvu9FCKRUZFUCQda2LWaUuLrXQOGVsX0tOkyIbSOaSOfD58iwZgJdzB-wKJaogyPy_hyMzXqhA-HAqXH1UaneR7u'
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section / Header */}
      <header className="pt-40 pb-20 px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-4 block">Curated Artistry</span>
            <h1 className="font-headline text-5xl md:text-7xl text-on-surface leading-tight tracking-tight">
              The <span className="italic font-light">Lookbook</span> of Radiance
            </h1>
          </div>
          <p className="font-body text-on-surface-variant max-w-sm text-lg leading-relaxed italic">
            A visual journey through our signature treatments, seasonal palettes, and bespoke nail artistry designed for the modern individual.
          </p>
        </div>
      </header>

      {/* Category Filters */}
      <section className="px-12 max-w-7xl mx-auto mb-16 overflow-x-auto">
        <div className="flex space-x-4 pb-4">
          <button className="px-6 py-2 rounded-full bg-primary text-on-primary text-sm font-label tracking-wide">All Art</button>
          <button className="px-6 py-2 rounded-full bg-surface-container text-on-surface-variant text-sm font-label tracking-wide hover:bg-surface-container-high transition-colors">Minimalist</button>
          <button className="px-6 py-2 rounded-full bg-surface-container text-on-surface-variant text-sm font-label tracking-wide hover:bg-surface-container-high transition-colors">Editorial</button>
          <button className="px-6 py-2 rounded-full bg-surface-container text-on-surface-variant text-sm font-label tracking-wide hover:bg-surface-container-high transition-colors">Bridal Luxe</button>
          <button className="px-6 py-2 rounded-full bg-surface-container text-on-surface-variant text-sm font-label tracking-wide hover:bg-surface-container-high transition-colors">Seasonal</button>
        </div>
      </section>

      {/* Gallery Masonry Grid */}
      <main className="px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-surface-container-low transition-all duration-500 group-hover:scale-[1.02]">
                <img 
                  className="w-full object-cover rounded-sm" 
                  src={item.img} 
                  alt={item.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-label text-white uppercase text-xs tracking-widest mb-1">{item.category}</p>
                    <h3 className="font-headline text-white text-xl italic">{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <a className="w-16 h-16 rounded-full bg-surface/80 glass-nav flex items-center justify-center text-primary border border-primary/10 shadow-xl hover:scale-110 transition-transform group" href="https://wa.me/#" target="_blank">
          <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
          <span className="absolute right-20 bg-primary text-on-primary px-4 py-2 rounded-md text-xs font-label uppercase tracking-widest opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
            Consult with us
          </span>
        </a>
      </div>

      {/* Appointment Bar */}
      <div className="fixed bottom-0 left-0 w-full p-6 md:hidden z-40 bg-surface/80 glass-nav">
        <Link className="w-full bg-primary text-on-primary py-4 rounded-md font-label text-sm uppercase tracking-widest inline-block text-center" to="/booking">
          Book Appointment
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
