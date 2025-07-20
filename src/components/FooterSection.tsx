import React, { useState } from 'react';

const FooterSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="relative z-10 bg-black py-16 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Keep In Touch</h3>
          </div>
          
          <form onSubmit={handleSubmit} className="flex gap-4 w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="flex-1 md:w-80 px-4 py-3 bg-transparent border border-white/30 rounded text-white placeholder-white/60 focus:outline-none focus:border-white/50 transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-white text-black px-8 py-3 rounded font-semibold hover:bg-white/90 transition-colors"
            >
              SIGN UP
            </button>
          </form>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm mb-4">
            Copyright © 2025 BEZTERN - All Rights Reserved.
          </p>
          <div className="flex items-center justify-center gap-2 text-white/40 text-xs">
            <span>Powered by <span className="font-semibold">Beztern Clothing</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;