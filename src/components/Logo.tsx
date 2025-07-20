import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center mb-12 animate-fade-in-up">
      <img
        src="/Screenshot%202025-06-09%20at%2011.50.22%20AM.png"
        alt="Beztern Logo"
        style={{ width: '150px', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 24px rgba(0,0,0,0.15)' }}
      />
    </div>
  );
};

export default Logo;