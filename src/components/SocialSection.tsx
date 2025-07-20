import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

const SocialSection: React.FC = () => {
  return (
    <div className="relative z-10 bg-black py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          Connect With Us
        </h2>
        
        <div className="flex justify-center gap-6">
          <a 
            href="https://www.instagram.com/beztern/" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6 text-white" />
          </a>
          <a 
            href="https://youtube.com/@bezternindia?si=_FVqbZ60jDG10j8y" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="YouTube"
          >
            <Youtube className="h-6 w-6 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialSection;