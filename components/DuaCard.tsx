import React from 'react';
import { DUA_SUHOOR, DUA_IFTAR } from '../constants';

interface Props {
  type: 'suhoor' | 'iftar';
}

const DuaCard: React.FC<Props> = ({ type }) => {
  const currentDua = type === 'suhoor' ? DUA_SUHOOR : DUA_IFTAR;

  return (
    <div className="w-full p-4 md:p-6 rounded-sm bg-black/40 border-t-4 border-[#D4A843] shadow-lg">
      <div className="text-center">
        <h3 className="text-sm md:text-base font-bold text-[#D4A843] mb-3 underline decoration-white/20 underline-offset-4">
          {currentDua.title}
        </h3>
        <p lang="ar" dir="rtl" className="husrev-style text-[#A8C5E8] mb-4 text-center select-none">
          {currentDua.arabic}
        </p>
        <p className="text-sm md:text-lg leading-relaxed text-[#A8C5E8] italic">
          "{currentDua.turkmen}"
        </p>
      </div>
    </div>
  );
};

export default DuaCard;
