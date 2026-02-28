import React from 'react';

const GadyrBadge: React.FC = () => {
  return (
    <div className="my-4 py-3 px-6 bg-gradient-to-r from-transparent via-[#D4A843]/80 to-transparent border-y border-[#D4A843]/50">
      <div className="flex items-center justify-center space-x-4">
        <span className="text-2xl">✦</span>
        <h2 className="text-xl md:text-3xl font-bold uppercase tracking-[0.15em] shimmer">
          GADYR GIJESI
        </h2>
        <span className="text-2xl">✦</span>
      </div>
      <p
        className="text-center text-[10px] md:text-sm text-[#D4A843] mt-1 italic"
        style={{ textShadow: '0 0 8px rgba(212,168,67,0.3)' }}
      >
        Bereketli we hayyrly gije bolsun
      </p>
    </div>
  );
};

export default GadyrBadge;
