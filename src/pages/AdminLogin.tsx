import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { signIn } from '../services/api';

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const data = await signIn(email, password);
      localStorage.setItem('adminToken', data.idToken);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message === 'INVALID_LOGIN_CREDENTIALS' || err.message === 'INVALID_PASSWORD' || err.message === 'EMAIL_NOT_FOUND' 
        ? 'Invalid email or password' 
        : 'An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background text-on-surface min-h-screen flex items-center justify-center p-6 selection:bg-primary-container selection:text-on-primary-container font-body">
      <main className="w-full max-w-lg z-10">
        {/* Brand Identity Intro */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:text-left md:pl-4"
        >
          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary/70 block mb-3">Professional Portal</span>
          <h1 className="text-4xl md:text-5xl font-headline italic text-on-surface leading-tight tracking-tight">
            Glow Nail Studio Admin
          </h1>
        </motion.div>

        {/* The Central Login Canvas */}
        <div className="relative">
          {/* Decorative Background Element */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -z-10"></div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-surface-container-lowest rounded-xl p-10 md:p-14 shadow-[0_40px_60px_-15px_rgba(48,51,48,0.04)] border border-outline-variant/5"
          >
            <div className="mb-10">
              <h2 className="text-2xl font-headline text-on-surface mb-2">Welcome Back</h2>
              <p className="text-on-surface-variant text-sm font-light">Login to manage bookings and studio operations.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {error && (
                <div className="bg-error/10 border border-error/20 text-error text-xs p-4 rounded-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">error</span>
                  {error}
                </div>
              )}
              {/* Email Field */}
              <div className="space-y-2">
                <label className="font-label text-[10px] uppercase tracking-[0.1em] text-primary font-semibold ml-1" htmlFor="email">
                  Email Address
                </label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant text-lg">mail</span>
                  <input 
                    className="w-full bg-surface-container-low border-none rounded-lg py-4 pl-12 pr-4 text-on-surface placeholder:text-outline-variant/50 focus:ring-1 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300 outline-none" 
                    id="email" 
                    name="email" 
                    placeholder="admin@glownail.studio" 
                    required 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="font-label text-[10px] uppercase tracking-[0.1em] text-primary font-semibold" htmlFor="password">
                    Password
                  </label>
                  <a className="text-[10px] uppercase tracking-wider text-outline-variant hover:text-primary transition-colors duration-300 font-medium" href="#">
                    Forgot password?
                  </a>
                </div>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant text-lg">lock</span>
                  <input 
                    className="w-full bg-surface-container-low border-none rounded-lg py-4 pl-12 pr-4 text-on-surface placeholder:text-outline-variant/50 focus:ring-1 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300 outline-none" 
                    id="password" 
                    name="password" 
                    placeholder="••••••••" 
                    required 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4">
                <button 
                  className="w-full bg-gradient-to-br from-primary to-primary-dim text-on-primary font-label py-5 rounded-lg shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed" 
                  type="submit"
                  disabled={loading}
                >
                  <span className="font-medium tracking-wide uppercase text-xs">
                    {loading ? 'Authenticating...' : 'Login to Dashboard'}
                  </span>
                  {!loading && <span className="material-symbols-outlined text-xl">arrow_forward</span>}
                </button>
              </div>
            </form>

            {/* Help Link */}
            <div className="mt-12 text-center">
              <p className="text-xs text-on-surface-variant font-light flex items-center justify-center gap-2">
                Need assistance? <a className="text-primary font-medium hover:underline decoration-primary-container underline-offset-4" href="mailto:support@glownail.studio">Contact IT Support</a>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer Accent Typography */}
        <div className="mt-12 flex justify-between items-end opacity-40 select-none">
          <div className="max-w-[120px]">
            <p className="text-[8px] uppercase tracking-[0.3em] font-medium leading-relaxed">
              Designed for Tranquility and Professionalism.
            </p>
          </div>
          <div className="font-headline italic text-2xl text-on-surface-variant">
            Glow
          </div>
        </div>
      </main>

      {/* Aesthetic Decorative Image (Editorial placement) */}
      <div className="hidden lg:block fixed top-0 right-0 w-1/3 h-full overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 z-10 transition-opacity duration-1000 group-hover:opacity-20"></div>
        <img 
          alt="Luxury spa interior" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzpod1V5XkpJJEGpQOiWSEFsbwq1THqE33s4ipgbfdQ-vRMj5WZd1Fg3g09DBMRk9O37QR_xBtpwzu7NSLApgP_3CwhleqxHPeUjom0q7LBRSEOM_o9Damq0JLXXE94qTww2TNnbcnJkIm0P6JsAw7WNX4j3pd-DjwKONI-dPlHm71Td9cax3HV1L5Hnwi681vpDaCfbr5ciJfIuiA-v5FRngnoFgL6mI7WUaeUjsAQob7nbInq-FRh3ty65dh6jUfV1lAf7NVdbc0" 
          referrerPolicy="no-referrer"
        />
        {/* Floating Quote */}
        <div className="absolute bottom-20 left-0 right-0 z-20 px-20">
          <p className="text-white font-headline text-3xl italic leading-relaxed drop-shadow-md">
            "Precision in every stroke, <br/>beauty in every detail."
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
