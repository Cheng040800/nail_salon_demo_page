import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const team = [
    { name: 'Elena Vance', role: 'Founder & Creative Lead', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl05fbzwN-2uWmzzsGwF9eN1cYi_lur9KSsWzd_fw5-DqT_jS1gvpjZL9TpoKa9zhu3CKBT_JVezkamYAbDRJDQzQUOZR_euwrq5wVX69q9-zWgYhXFyy0ftDXPJZ2LyOuBgZeZHimLX-ggEFgc4j3AsY8TBSOiueVXS0Bujjhz3LayyMwuDprIoJIBtVoPapmQJC0Osgasy9yDVmeQLXSqkpemflEAsYTk4wcygo_4kxDOk3Eo4iflORwiQRS8lAjKDcRhAOklrcY' },
    { name: 'Julian Thorne', role: 'Master Technician', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjq4Xx3l2tXTaF8vFELFSvSHbkT9EG23o2WxLiT1khqHc6edQj6V52bae7HNwJ95T3eaI4sd4KCATOhujxmyS7cQvFrs082kymrkpx4mKz7awNO5iW4lBASSinIa8X06bvECgcFGPiLSa0wIQmeu85PsBXF_icXQdS6kPUx8BSN1uLS4XujSe8Bt2cpixFdIyr1lgQt-pR1ZHHwJ3lQx8oU4JqdHozsCPLNeLYmjh5DOlKtp2XVVGwQIagfsizBp-J9ceZmCJROJyo' },
    { name: 'Sasha Kim', role: 'Senior Nail Artist', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAewWZlkaN4MtdpzoXp1mLEcrPXEo-gyWKCM7woMRWdmUf2DowpC5FjhNfJPrBTlspPbNc70ZUij5vEjNL3flePKliXZpadmXuRuUror-509D1Z3phcAoE19w6zRl1aZ0HbqZDUJN3RLu3koHyqW4nhD7ZcES-80qkpoX5sLT-L8YTlmY774RmkBlWF3aQJHwRaN2heLieycNshutoA8g9JZ280H4sRITDthiTONS7xQJLyCoSroYy2GZOeyS-jsBcxg22kHLLnUtKh' },
    { name: 'Marcus Lee', role: 'Artisan Specialist', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAE2vAkWauquvBlwjfbmadA0j_K4E1KHWNVYDuWffOWs4eLtM5mzck_tdUT78OSoJ9mi5OAayKftbJTONXhxnWLFv_4Xz7ZqrAAjFMAIwxDJfwQ5qHNOTQqAOMJB5LxraOx2hUpshPcX-eqqad2QlQVDVqoPmk07LSeJqmNiLxeTdK9W7s9KbgCwT1TX5F16WOfHt9SfClylKszwVog54CzrOl_bpn4fVwcoYaW95WTIy5iY-Cjlq_s9DTiOIELNEJ6JzC1QDrSvmuy' }
  ];

  return (
    <main className="pt-32">
      <section className="max-w-7xl mx-auto px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-7">
            <span className="font-label uppercase tracking-[0.2em] text-xs text-primary mb-6 block">The Essence of Glow</span>
            <h1 className="font-headline text-6xl md:text-8xl text-on-surface leading-tight mb-12 -ml-1">Our Story</h1>
            <div className="space-y-8 max-w-xl text-lg text-on-surface-variant font-light leading-relaxed">
              <p>Founded on the principle of intentionality, Glow Nail Studio emerged as a response to the hurried nature of modern beauty. We envisioned a space where time slows down, and the focus returns to the individual.</p>
              <p>Our journey began with a single chair and a commitment to meticulous craftsmanship. Today, we are a sanctuary for those who seek more than just a service—they seek a ritual of restoration and self-expression.</p>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="aspect-[3/4] bg-surface-container overflow-hidden rounded-lg">
              <img 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ1l2-Ag1iXLrXg9sVqF8yiHiJ-N81hi_LnCj5eyz_ISbJ4TuDSs3OB293D2SV1Mr_4epoU94QogQcTtn4esyvpK022jxSPLzutze2Y8-buoLe_T0jjy3-QQcNy9mgDKVl_41SSq7fy3bdOgVG0ICnCabji3vAxRnHC2ygAgjpKMqe-JOQJ-_ecpoLTJoexUQ1snWYU0so8W41n8NFwbYx2k6V8lqwEdo-eui_UC3ErE-MjHtxV4SDpJ_nLOKRLqC50P23A3u1ZvU5" 
                alt="Studio Interior"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 hidden md:block w-48 h-48 bg-primary-container p-6 rounded-lg rotate-3 shadow-sm">
              <span className="font-headline text-4xl italic text-on-primary-container">Est. 2018</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-32 mb-32">
        <div className="max-w-7xl mx-auto px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="material-symbols-outlined text-primary text-4xl mb-8">spa</span>
            <h2 className="font-headline text-4xl md:text-5xl text-on-surface mb-8 italic">Elevating your natural beauty</h2>
            <p className="font-label uppercase tracking-[0.15em] text-sm text-outline mb-12">The Mission Statement</p>
            <div className="w-24 h-px bg-outline-variant mx-auto mb-12 opacity-30"></div>
            <p className="text-xl text-on-surface-variant font-light leading-relaxed italic">
              "We believe that nail care is an extension of wellness. Our goal is not to mask, but to enhance—utilizing premium, toxin-free materials to reveal the inherent radiance of your hands and feet."
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-12 mb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="font-label uppercase tracking-[0.2em] text-xs text-primary mb-4 block">Craftsmanship</span>
            <h2 className="font-headline text-5xl text-on-surface">Meet the Team</h2>
          </div>
          <p className="max-w-sm text-on-surface-variant font-light leading-relaxed">
            A curated collective of artists dedicated to the fine art of precision and care.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((member, i) => (
            <div key={i} className={cn("group", i % 2 !== 0 && "pt-12")}>
              <div className="aspect-[4/5] bg-surface-container rounded-sm overflow-hidden mb-6">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={member.img} 
                  alt={member.name}
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-headline text-xl mb-1">{member.name}</h3>
              <p className="font-label text-xs uppercase tracking-widest text-primary">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-12 mb-32">
        <div className="bg-primary-container p-16 md:p-24 rounded-lg flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="font-headline text-4xl text-on-primary-container mb-8">Philosophy in Practice</h2>
            <p className="text-on-primary-fixed-variant leading-relaxed text-lg mb-8">Our approach is defined by the three pillars of Glow: Purity of ingredients, Precision of form, and Peace of mind.</p>
            <Link className="inline-flex items-center text-on-primary-container border-b border-on-primary-container pb-1 hover:opacity-70 transition-opacity uppercase text-xs tracking-widest font-bold" to="/services">Discover our services</Link>
          </div>
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
            <div className="aspect-square bg-surface-container-lowest rounded-sm p-8 flex flex-col justify-center items-center text-center">
              <span className="font-headline text-3xl mb-2 text-primary">98%</span>
              <span className="font-label text-[10px] uppercase tracking-tighter text-outline">Natural Ingredients</span>
            </div>
            <div className="aspect-square bg-surface-container-lowest rounded-sm p-8 flex flex-col justify-center items-center text-center">
              <span className="font-headline text-3xl mb-2 text-primary">12+</span>
              <span className="font-label text-[10px] uppercase tracking-tighter text-outline">Years Expertise</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// Helper for conditional classes
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default About;
