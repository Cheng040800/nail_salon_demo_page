import React, { useState, useMemo } from 'react';
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  isSameMonth, 
  isSameDay, 
  addDays, 
  eachDayOfInterval,
  isBefore,
  startOfToday
} from 'date-fns';
import { cn } from '../lib/utils';
import { createBooking } from '../services/api';

interface Service {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    id: 'gel-nails',
    name: 'Signature Gel Nails',
    price: 120,
    duration: '60 min',
    description: 'Ultra-durable, high-shine gel finish using premium non-toxic resins.',
    icon: 'spa'
  },
  {
    id: 'classic-manicure',
    name: 'Classic Manicure',
    price: 80,
    duration: '45 min',
    description: 'Precision cuticle care and hand massage with a flawless finish.',
    icon: 'back_hand'
  },
  {
    id: 'spa-pedicure',
    name: 'Spa Pedicure',
    price: 95,
    duration: '60 min',
    description: 'Restorative foot soak and exfoliation for absolute tranquility.',
    icon: 'footprint'
  }
];

const morningTimes = ['09:00 AM', '10:30 AM'];
const afternoonTimes = ['01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'];

const Booking: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(services[0]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(addDays(startOfToday(), 1));
  const [selectedTime, setSelectedTime] = useState<string>('01:00 PM');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    notes: ''
  });
  const [isBooked, setIsBooked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const days = useMemo(() => {
    const start = startOfWeek(startOfMonth(currentMonth), { weekStartsOn: 1 });
    const end = endOfWeek(endOfMonth(currentMonth), { weekStartsOn: 1 });
    return eachDayOfInterval({ start, end });
  }, [currentMonth]);

  const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const handleBooking = async () => {
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      await createBooking({
        clientName: formData.name,
        phone: formData.phone,
        service: selectedService?.name || 'Nail Treatment',
        date: format(selectedDate, 'yyyy-MM-dd'),
        time: selectedTime,
        notes: formData.notes || '—',
        status: 'Pending'
      });

      setIsBooked(true);
    } catch (err: any) {
      setError(err.message || 'Failed to confirm booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (isBooked) {
    return (
      <main className="pt-48 pb-24 px-6 md:px-12 max-w-xl mx-auto text-center">
        <div className="bg-surface-container-lowest p-12 rounded-2xl shadow-xl border border-primary/10">
          <span className="material-symbols-outlined text-primary text-6xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          <h1 className="text-4xl font-headline mb-4">Reservation Confirmed</h1>
          <p className="text-on-surface-variant font-light mb-8">
            Thank you, <span className="font-semibold text-on-surface">{formData.name}</span>. Your appointment for <span className="font-semibold text-on-surface">{selectedService?.name}</span> is set for <span className="font-semibold text-on-surface">{format(selectedDate, 'EEEE, MMM do')}</span> at <span className="font-semibold text-on-surface">{selectedTime}</span>.
          </p>
          <p className="text-sm text-outline mb-12 italic">A confirmation detail has been sent to your phone. See you soon at Glow Studio.</p>
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full py-4 rounded-md bg-primary text-on-primary font-label uppercase tracking-widest text-sm"
          >
            Return to Home
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      {/* Header Section */}
      <header className="mb-20 text-center">
        <span className="block font-label text-xs uppercase tracking-[0.2em] text-outline mb-4">The Experience Begins Here</span>
        <h1 className="text-5xl md:text-6xl font-headline tracking-tight text-on-surface">Reserve Your Radiance</h1>
      </header>
      <div className="grid grid-cols-1 gap-16 items-start">
        {/* Booking Form Area */}
        <div className="space-y-24">
          {/* Step 1: Select Service */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-headline italic">1. Select Service</h2>
              <span className="text-[10px] font-label uppercase tracking-tighter text-outline-variant">Required</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <div 
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={cn(
                    "p-6 rounded-lg transition-all cursor-pointer group border-2",
                    selectedService?.id === service.id 
                      ? "bg-surface-container-lowest border-primary-container ring-4 ring-primary-container/10" 
                      : "bg-surface-container-low hover:bg-surface-container border-transparent"
                  )}
                >
                  <div className="flex justify-between items-start mb-4">
                    <span 
                      className={cn(
                        "material-symbols-outlined transition-colors",
                        selectedService?.id === service.id ? "text-primary" : "text-outline group-hover:text-primary"
                      )} 
                      style={{ fontVariationSettings: selectedService?.id === service.id ? "'FILL' 1" : undefined }}
                    >
                      {service.icon}
                    </span>
                    <span className={cn(
                      "text-xs font-label font-bold",
                      selectedService?.id === service.id ? "text-primary" : "text-on-surface-variant"
                    )}>RM {service.price}</span>
                  </div>
                  <h3 className="font-headline text-lg mb-2">{service.name}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Step 2 & 3: Calendar & Time Grid */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-headline italic">2. Choose Date</h2>
              </div>
              <div className="bg-surface-container-low p-8 rounded-lg">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-headline text-lg">{format(currentMonth, 'MMMM yyyy')}</span>
                  <div className="flex gap-4">
                    <button 
                      onClick={handlePrevMonth}
                      className="material-symbols-outlined cursor-pointer hover:text-primary p-1 rounded-full hover:bg-surface-container-highest transition-colors"
                    >
                      chevron_left
                    </button>
                    <button 
                      onClick={handleNextMonth}
                      className="material-symbols-outlined cursor-pointer hover:text-primary p-1 rounded-full hover:bg-surface-container-highest transition-colors"
                    >
                      chevron_right
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-7 text-center text-[10px] font-label uppercase tracking-widest text-outline-variant mb-4">
                  <div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div><div>Su</div>
                </div>
                <div className="grid grid-cols-7 gap-y-2 text-center text-sm">
                  {days.map((day, idx) => {
                    const isSelected = isSameDay(day, selectedDate);
                    const isCurrMonth = isSameMonth(day, currentMonth);
                    const isPast = isBefore(day, startOfToday());
                    
                    return (
                      <div 
                        key={idx}
                        onClick={() => !isPast && setSelectedDate(day)}
                        className={cn(
                          "py-3 cursor-pointer rounded-md transition-all relative",
                          !isCurrMonth && "text-outline-variant/30",
                          isPast && "text-outline-variant/20 cursor-not-allowed",
                          isSelected 
                            ? "bg-primary text-on-primary shadow-lg shadow-primary/20 scale-110 z-10" 
                            : !isPast && isCurrMonth && "hover:bg-white text-on-surface"
                        )}
                      >
                        {format(day, 'd')}
                        {isSameDay(day, startOfToday()) && !isSelected && (
                          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-headline italic">3. Time</h2>
              </div>
              <div className="space-y-8">
                <div>
                  <span className="text-[10px] font-label uppercase tracking-[0.1em] text-outline mb-4 block">Morning</span>
                  <div className="grid grid-cols-2 gap-3">
                    {morningTimes.map(t => (
                      <button 
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={cn(
                          "py-3 text-sm rounded-md transition-colors",
                          selectedTime === t 
                            ? "bg-primary text-on-primary shadow-sm" 
                            : "bg-surface-container-lowest hover:bg-primary-fixed"
                        )}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-label uppercase tracking-[0.1em] text-outline mb-4 block">Afternoon</span>
                  <div className="grid grid-cols-2 gap-3">
                    {afternoonTimes.map(t => (
                      <button 
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={cn(
                          "py-3 text-sm rounded-md transition-colors",
                          selectedTime === t 
                            ? "bg-primary text-on-primary shadow-sm" 
                            : "bg-surface-container-lowest hover:bg-primary-fixed"
                        )}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Step 4: Details */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-headline italic">4. Personal Details</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-label uppercase tracking-widest text-outline">Full Name</label>
                <input 
                  className="w-full bg-surface-container-low border-none rounded-md px-4 py-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none" 
                  placeholder="Evelyn Thorne" 
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-label uppercase tracking-widest text-outline">Phone Number</label>
                <input 
                  className="w-full bg-surface-container-low border-none rounded-md px-4 py-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none" 
                  placeholder="+60 12-345 6789" 
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-label uppercase tracking-widest text-outline">Notes or Preferences</label>
                <textarea 
                  className="w-full bg-surface-container-low border-none rounded-md px-4 py-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none" 
                  placeholder="Specific nail art requests or allergies..." 
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                ></textarea>
              </div>
            </div>
          </section>
          <div className="pt-8">
            {error && (
              <div className="mb-6 p-4 bg-error/10 border border-error/20 text-error text-xs rounded-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">error</span>
                {error}
              </div>
            )}
            <button 
              onClick={handleBooking}
              disabled={loading}
              className="w-full py-6 rounded-md bg-gradient-to-r from-primary to-primary-dim text-on-primary font-label uppercase tracking-[0.3em] text-sm shadow-xl shadow-primary/20 hover:scale-[1.01] transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Confirming Reservation...' : 'Confirm Booking'}
            </button>
            <p className="text-center text-xs text-outline-variant mt-6 italic">Secure payment will be handled at the studio. No deposit required for Signature services.</p>
          </div>
        </div>
      </div>

    </main>
  );
};

export default Booking;
