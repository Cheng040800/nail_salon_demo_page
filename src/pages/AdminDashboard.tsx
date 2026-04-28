import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { fetchBookings, BookingData, updateBookingStatus, deleteBooking } from '../services/api';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('bookings');
  const [bookings, setBookings] = useState<BookingData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dropdownOpenId, setDropdownOpenId] = useState<string | null>(null);
  const [actionMenuOpenId, setActionMenuOpenId] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin');
      return;
    }

    const loadBookings = async () => {
      try {
        setLoading(true);
        const data = await fetchBookings(token);
        setBookings(data);
      } catch (err: any) {
        setError('Failed to load bookings. Please check your connection or login again.');
        if (err.message.includes('401')) {
          localStorage.removeItem('adminToken');
          navigate('/admin');
        }
      } finally {
        setLoading(false);
      }
    };

    loadBookings();
  }, [navigate]);

  useEffect(() => {
    const handleClickOutside = () => {
      setDropdownOpenId(null);
      setActionMenuOpenId(null);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleStatusChange = async (bookingId: string, newStatus: string) => {
    const token = localStorage.getItem('adminToken');
    if (!token) return;

    try {
      setUpdatingId(bookingId);
      await updateBookingStatus(bookingId, newStatus, token);
      setBookings(prev => prev.map(b => b.id === bookingId ? { ...b, status: newStatus } : b));
      setDropdownOpenId(null);
    } catch (err: any) {
      alert('Failed to update status. Please try again.');
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDeleteBooking = async (bookingId: string) => {
    console.log('Delete button clicked for:', bookingId);
    const token = localStorage.getItem('adminToken');
    if (!token) {
      console.error('No admin token found');
      return;
    }

    try {
      setDeletingId(bookingId);
      console.log('Sending DELETE request to Firebase...');
      await deleteBooking(bookingId, token);
      console.log('Delete successful');
      
      setBookings(prev => prev.filter(b => b.id !== bookingId));
      setActionMenuOpenId(null);
    } catch (err: any) {
      console.error('Delete error occurred:', err);
      alert(`Failed to delete booking: ${err.message || 'Check permissions or connection'}`);
    } finally {
      setDeletingId(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  const pendingCount = bookings.filter(b => b.status === 'Pending').length;
  const confirmedCount = bookings.filter(b => b.status === 'Confirmed').length;

  return (
    <div className="bg-background text-on-surface antialiased min-h-screen">
      {/* SideNavBar Shell */}
      <aside className="fixed left-0 top-0 h-screen w-72 flex flex-col bg-surface-container-low dark:bg-stone-900 border-none space-y-8 pt-32 pb-12 px-8 z-40">
        <div className="mb-10 px-4">
          <span className="font-serif italic text-2xl text-on-surface dark:text-white">Beauty Nail Studio</span>
          <p className="font-sans text-[10px] uppercase tracking-[0.1em] font-medium text-on-surface-variant mt-1">Admin Management</p>
        </div>
        
        <nav className="flex flex-col h-full gap-4">
          <button 
            onClick={() => setActiveTab('bookings')}
            className={cn(
              "rounded-md py-3 px-4 flex items-center gap-3 transition-all duration-300 ease-in-out w-full text-left outline-none",
              activeTab === 'bookings' 
                ? "text-on-surface dark:text-white bg-surface-container-lowest dark:bg-stone-800 shadow-sm" 
                : "text-on-surface-variant hover:text-on-surface"
            )}
          >
            <span className="material-symbols-outlined text-lg">calendar_today</span>
            <span className="font-sans text-[10px] uppercase tracking-[0.1em] font-medium">Bookings</span>
          </button>
        </nav>

        {/* Profile Bottom Section */}
        <div className="mt-auto px-4 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-primary-container overflow-hidden ring-1 ring-black/5">
            <img 
              className="w-full h-full object-cover" 
              alt="Admin Profile" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG7Tams2gTWF4wYu5lIPDGdzCJO-170_XLuVmH4wKZsNENkDvZZ2sBQqjrfk4N64uzsCv3-QhErTFlyp_qhFM3cZhAZrejVNAgwxq4D5TWQ4R95DG9vUAQ4rbCX0tT7og6wH6H_mtccxeB9M3uQxL6TDcy8tc0eSybruTWyuhAXImnz0ZL9TPehvdgUkkJ-w6gZGFRfPGE7MrzfznPGT1N88N0spd426aN4DPm6PyMUlU4QOy_ndrXiwVQFjr5SWLL5RZ1qr7-_ANx" 
            />
          </div>
          <div>
            <p className="text-xs font-bold text-on-surface">Admin</p>
            <p className="text-[10px] text-on-surface-variant">admin@beautynail.studio</p>
          </div>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="ml-72 min-h-screen">
        {/* TopAppBar */}
        <header className="fixed top-0 right-0 left-72 z-50 bg-background/80 backdrop-blur-md flex justify-between items-center px-12 py-6 shadow-[0_40px_60px_-15px_rgba(48,51,48,0.05)] border-none">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg tracking-tight text-primary">Booking Dashboard</span>
          </div>
          <div className="flex items-center gap-8">
            <span className="text-on-surface/60 font-sans text-[10px] uppercase tracking-[0.1em] font-medium">admin@beautynail.studio</span>
            <button 
              onClick={handleLogout}
              className="text-primary font-sans text-[10px] uppercase tracking-[0.1em] font-bold hover:opacity-80 transition-all active:scale-95"
            >
              Logout
            </button>
          </div>
        </header>

        <div className="pt-32 pb-24 px-12 max-w-[1600px] mx-auto">
          {/* Page Header Area */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-primary mb-2 block">Management</span>
              <h1 className="text-5xl md:text-6xl text-on-surface font-light leading-tight">Client Bookings</h1>
            </div>
            <button className="editorial-gradient text-on-primary px-8 py-4 rounded-md font-sans text-[10px] uppercase tracking-[0.2em] font-bold shadow-lg flex items-center gap-2 hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-sm">add</span>
              New Booking
            </button>
          </div>

          {/* Stats Area */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 font-body text-body">
            <div className="bg-surface-container-low p-8 rounded-lg">
              <p className="font-sans text-[10px] uppercase tracking-[0.1em] text-on-surface-variant mb-1">Today's Appointments</p>
              <p className="text-4xl font-headline text-on-surface font-light">
                {loading ? '...' : bookings.length.toString().padStart(2, '0')}
              </p>
            </div>
            <div className="bg-primary-container/30 p-8 rounded-lg">
              <p className="font-sans text-[10px] uppercase tracking-[0.1em] text-on-surface-variant mb-1">Pending Requests</p>
              <p className="text-4xl font-headline text-primary font-light">
                {loading ? '...' : pendingCount.toString().padStart(2, '0')}
              </p>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center justify-between mb-6 border-b border-surface-container pb-4">
            <div className="flex items-center gap-8">
              <button className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-primary border-b-2 border-primary pb-4">All Bookings</button>
              <button className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium text-on-surface-variant hover:text-on-surface transition-colors pb-4 border-b-2 border-transparent">Pending</button>
              <button className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium text-on-surface-variant hover:text-on-surface transition-colors pb-4 border-b-2 border-transparent">Confirmed</button>
              <button className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium text-on-surface-variant hover:text-on-surface transition-colors pb-4 border-b-2 border-transparent">Completed</button>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-sm text-outline">search</span>
                <input 
                  className="pl-9 pr-4 py-2 bg-surface-container-low border-none rounded-full text-xs font-sans focus:ring-1 focus:ring-primary/30 w-64 outline-none" 
                  placeholder="Search client or service..." 
                  type="text"
                />
              </div>
            </div>
          </div>

          {/* Main Table Section */}
          <section className="bg-surface-container-lowest rounded-xl editorial-shadow">
            <div className="">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low/50">
                    <th className="px-8 py-6 font-sans text-[10px] uppercase tracking-[0.1em] text-on-surface-variant font-medium">Client Name</th>
                    <th className="px-8 py-6 font-sans text-[10px] uppercase tracking-[0.1em] text-on-surface-variant font-medium">Service</th>
                    <th className="px-8 py-6 font-sans text-[10px] uppercase tracking-[0.1em] text-on-surface-variant font-medium">Date &amp; Time</th>
                    <th className="px-8 py-6 font-sans text-[10px] uppercase tracking-[0.1em] text-on-surface-variant font-medium">Phone Number</th>
                    <th className="px-8 py-6 font-sans text-[10px] uppercase tracking-[0.1em] text-on-surface-variant font-medium">Notes or Preferences</th>
                    <th className="px-8 py-6 font-sans text-[10px] uppercase tracking-[0.1em] text-on-surface-variant font-medium">Status</th>
                    <th className="px-8 py-6 font-sans text-[10px] uppercase tracking-[0.1em] text-on-surface-variant font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container/30">
                  {loading ? (
                    <tr>
                      <td colSpan={7} className="px-8 py-20 text-center text-outline-variant italic">
                        <div className="flex flex-col items-center gap-4">
                          <span className="material-symbols-outlined animate-spin text-primary text-3xl">sync</span>
                          <span>Loading studio archives...</span>
                        </div>
                      </td>
                    </tr>
                  ) : error ? (
                    <tr>
                      <td colSpan={7} className="px-8 py-20 text-center text-error italic">
                        {error}
                      </td>
                    </tr>
                  ) : bookings.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-8 py-20 text-center text-outline-variant italic">
                        No bookings found in the archives.
                      </td>
                    </tr>
                  ) : (
                    bookings.map((booking) => {
                      const statusLower = booking.status.toLowerCase();
                      const statusStyles = {
                        pending: { bg: "bg-[#FEF3E2]", text: "text-[#7C5D2A]", hover: "hover:bg-[#FDF0D0]", itemHover: "hover:bg-[#7C5D2A]/10", dot: "bg-[#7C5D2A]" },
                        confirmed: { bg: "bg-[#E7F5E9]", text: "text-[#1B5E20]", hover: "hover:bg-[#D5EEDC]", itemHover: "hover:bg-[#1B5E20]/10", dot: "bg-[#1B5E20]" },
                        completed: { bg: "bg-[#F3F4F6]", text: "text-[#374151]", hover: "hover:bg-[#E5E7EB]", itemHover: "hover:bg-[#374151]/10", dot: "bg-[#374151]" }
                      }[statusLower as 'pending' | 'confirmed' | 'completed'] || { bg: "bg-surface-container", text: "text-on-surface-variant", hover: "hover:bg-surface-container-high", itemHover: "hover:bg-surface-container-high", dot: "bg-on-surface-variant" };

                      return (
                        <tr key={booking.id} className="hover:bg-surface-container/10 transition-colors">
                          <td className="px-8 py-6">
                            <div>
                              <p className="text-sm font-medium text-on-surface">{booking.clientName}</p>
                              <p className="text-[10px] text-on-surface-variant">{booking.email}</p>
                            </div>
                          </td>
                          <td className="px-8 py-6">
                            <span className="text-sm text-on-surface">{booking.service}</span>
                          </td>
                          <td className="px-8 py-6">
                            <p className="text-sm text-on-surface">{booking.date}</p>
                            <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">{booking.time}</p>
                          </td>
                          <td className="px-8 py-6">
                            <span className="text-sm text-on-surface">{booking.phone}</span>
                          </td>
                          <td className="px-8 py-6">
                            <p className="text-[11px] text-on-surface-variant italic leading-relaxed max-w-[200px]">{booking.notes}</p>
                          </td>
                          <td className="px-8 py-6">
                            <div className="relative inline-block" onClick={(e) => e.stopPropagation()}>
                              <button 
                                onClick={() => setDropdownOpenId(dropdownOpenId === booking.id ? null : booking.id)}
                                disabled={updatingId === booking.id}
                                className={cn(
                                  "flex items-center justify-between gap-3 px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.1em] transition-all w-[140px] shadow-sm",
                                  statusStyles.bg,
                                  statusStyles.text,
                                  statusStyles.hover,
                                  updatingId === booking.id && "opacity-50 cursor-wait"
                                )}
                              >
                                <span>{updatingId === booking.id ? 'SAVE...' : booking.status}</span>
                                <span className="material-symbols-outlined text-sm leading-none shrink-0" style={{ fontVariationSettings: "'wght' 500" }}>
                                  {dropdownOpenId === booking.id ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                                </span>
                              </button>
                              
                              <AnimatePresence>
                                {dropdownOpenId === booking.id && (
                                  <motion.div 
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className={cn(
                                      "absolute left-0 mt-3 w-[140px] border border-black/5 rounded-[1.25rem] shadow-[0_20px_40px_-15px_rgba(48,51,48,0.15)] z-50 overflow-hidden py-1.5",
                                      statusStyles.bg
                                    )}
                                  >
                                    {['Pending', 'Confirmed', 'Completed'].map((status) => (
                                      <button
                                        key={status}
                                        onClick={() => handleStatusChange(booking.id, status)}
                                        className={cn(
                                          "w-full text-left px-6 py-3 text-[10px] font-bold uppercase tracking-[0.15em] transition-all",
                                          statusStyles.text,
                                          booking.status === status ? "opacity-100" : "opacity-60",
                                          statusStyles.itemHover
                                        )}
                                      >
                                        <div className="flex items-center justify-between">
                                          {status}
                                          {booking.status === status && (
                                            <span className={cn("w-1 h-1 rounded-full", statusStyles.dot)}></span>
                                          )}
                                        </div>
                                      </button>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </td>
                          <td className="px-8 py-6 text-right">
                            <div className="relative inline-block" onClick={(e) => e.stopPropagation()}>
                              <button 
                                onClick={() => setActionMenuOpenId(actionMenuOpenId === booking.id ? null : booking.id)}
                                disabled={deletingId === booking.id}
                                className="p-2 text-outline hover:text-primary transition-colors outline-none"
                              >
                                {deletingId === booking.id ? (
                                  <span className="material-symbols-outlined animate-spin text-sm">sync</span>
                                ) : (
                                  <span className="material-symbols-outlined">more_vert</span>
                                )}
                              </button>
                              
                              <AnimatePresence>
                                {actionMenuOpenId === booking.id && (
                                  <motion.div 
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{ duration: 0.1, ease: "easeOut" }}
                                    className="absolute right-0 mt-1 w-32 bg-surface-container-lowest border border-surface-container rounded-xl shadow-xl z-50 overflow-hidden py-1"
                                  >
                                    <button
                                      onClick={() => handleDeleteBooking(booking.id)}
                                      className="w-full text-left px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest text-error hover:bg-error/5 transition-colors flex items-center gap-2"
                                    >
                                      <span className="material-symbols-outlined text-sm">delete</span>
                                      Delete
                                    </button>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
            
            {/* Pagination Area */}
            <div className="px-8 py-6 bg-surface-container-low/20 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-surface-container/30">
              <p className="font-sans text-[10px] uppercase tracking-[0.1em] text-on-surface-variant order-2 md:order-1">
                {loading ? 'Consulting archives...' : `Showing 1 to ${bookings.length} of ${bookings.length} bookings`}
              </p>
              <div className="flex items-center gap-6 order-1 md:order-2">
                <div className="flex items-center gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium" htmlFor="goto">Go to</label>
                  <input className="w-12 py-1 px-2 bg-surface-container-lowest border border-outline-variant/30 rounded-md text-[10px] font-sans focus:ring-1 focus:ring-primary/30 outline-none" id="goto" type="text" placeholder="1"/>
                </div>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 rounded-full flex items-center justify-center text-outline hover:bg-surface-container hover:text-primary transition-all">
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                  </button>
                  <div className="flex items-center gap-1">
                    <button className="w-8 h-8 rounded-full bg-primary text-on-primary text-[10px] font-bold">1</button>
                    <button className="w-8 h-8 rounded-full text-on-surface-variant hover:bg-surface-container text-[10px] font-bold transition-all">2</button>
                    <button className="w-8 h-8 rounded-full text-on-surface-variant hover:bg-surface-container text-[10px] font-bold transition-all">3</button>
                    <span className="text-on-surface-variant/40 px-1 text-[10px]">...</span>
                    <button className="w-8 h-8 rounded-full text-on-surface-variant hover:bg-surface-container text-[10px] font-bold transition-all">5</button>
                  </div>
                  <button className="w-8 h-8 rounded-full flex items-center justify-center text-outline hover:bg-surface-container hover:text-primary transition-all">
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Appointment Focus Bar / System Status */}
      <div className="fixed bottom-0 left-72 right-0 bg-surface/80 backdrop-blur-xl px-12 py-4 flex justify-between items-center z-30 border-t border-surface-container">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="text-[10px] uppercase tracking-widest font-medium text-on-surface-variant">{loading ? '...' : pendingCount} Pending Requests</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="text-[10px] uppercase tracking-widest font-medium text-on-surface-variant">{loading ? '...' : confirmedCount} Confirmed Today</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">System Status: <span className="text-primary font-bold">Optimal</span></p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
