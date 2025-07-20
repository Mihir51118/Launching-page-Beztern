import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setMessage('Thank you! We\'ll notify you when we launch.');
      setEmail('');
    }, 1500);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-white/60" />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === 'error') setStatus('idle');
            }}
            placeholder="Enter your email address"
            className="w-full pl-12 pr-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/50 transition-all duration-300"
            disabled={status === 'loading'}
          />
        </div>
        
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold transition-all duration-300 hover:bg-white/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap"
        >
          {status === 'loading' ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-900 border-t-transparent mr-2"></div>
              Subscribing...
            </div>
          ) : (
            'Notify Me'
          )}
        </button>
      </form>

      {/* Status Messages */}
      {(status === 'success' || status === 'error') && (
        <div className={`mt-4 p-3 rounded-lg flex items-center space-x-3 ${
          status === 'success' 
            ? 'bg-green-500/20 border border-green-500/30' 
            : 'bg-red-500/20 border border-red-500/30'
        } animate-fade-in`}>
          {status === 'success' ? (
            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
          ) : (
            <AlertCircle className="h-4 w-4 text-red-400 flex-shrink-0" />
          )}
          <p className={`text-sm ${
            status === 'success' ? 'text-green-400' : 'text-red-400'
          }`}>
            {message}
          </p>
        </div>
      )}
    </div>
  );
};

export default EmailSignup;