import React from 'react';

const ExpiredScreen: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="mb-10 text-8xl animate-bounce">🌙</div>
      <h1 className="text-4xl md:text-7xl font-bold shimmer mb-6 uppercase tracking-tighter">
        Oraza tamamlandy!
      </h1>
      <p className="text-xl md:text-3xl text-white mb-10 font-light">Baýramyňyz gutly bolsun! 🌟</p>

      <div className="p-8 rounded-3xl bg-red-500/20 border-2 border-red-500/50 backdrop-blur-lg max-w-md">
        <h2 className="text-2xl font-bold text-red-400 mb-2 uppercase">Oraza Baýramy</h2>
        <p className="text-[#A8C5E8] mb-4">
          Allah etjek doga-dilegleriňizi, tutjak orazalaryňyzy kabul etsin!
        </p>
        <div className="py-3 px-6 bg-red-500 rounded-full text-white font-bold text-lg shadow-lg">
          Baýram Namazy — 07:50
        </div>
      </div>

      <div className="mt-20 flex space-x-4 opacity-50">
        <span className="text-4xl">🪔</span>
        <span className="text-4xl">🕌</span>
        <span className="text-4xl">🪔</span>
      </div>
    </div>
  );
};

export default ExpiredScreen;
