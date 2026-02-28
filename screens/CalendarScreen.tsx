import React, { useEffect, useRef } from 'react';
import { ORAZA_2026 } from '../data';
import { COLUMNS } from '../constants';
import { getCurrentOrazaDay } from '../utils';
import CalendarRow from '../components/CalendarRow';
import DuaCard from '../components/DuaCard';

const CalendarScreen: React.FC = () => {
  const currentDay = getCurrentOrazaDay();
  const activeRowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (activeRowRef.current) {
      activeRowRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, []);

  return (
    <div className="max-w-[1100px] mx-auto relative z-10 pb-10">
      {/* Sub-header description */}
      <div className="text-center mb-6">
        <p className="text-white/60 text-[10px] md:text-xs uppercase tracking-widest px-4">
          2026-njy ýylyň Oraza aýynda Mary welaýaty boýunça agyz beklenýän we açylýan wagtlar
        </p>
      </div>

      {/* Таблица */}
      <div className="bg-white text-black rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden mb-8 border-4 border-white">
        {/* Заголовки колонок */}
        <div className="grid grid-cols-10 bg-gray-200 border-b-2 border-black/10">
          {COLUMNS.map((col) => (
            <div
              key={col.key}
              className="p-1 md:p-2 text-center text-[7px] md:text-[10px] leading-tight font-black border-r border-black/5 flex flex-col items-center justify-center last:border-r-0 h-12 md:h-16 uppercase italic"
            >
              {col.label.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          ))}
        </div>

        {/* Строки данных */}
        <div className="flex flex-col">
          {ORAZA_2026.map((entry) => {
            const isActive = entry.day === currentDay;
            return (
              <CalendarRow
                key={entry.day}
                entry={entry}
                isActive={isActive}
                rowRef={isActive ? activeRowRef : undefined}
              />
            );
          })}
        </div>
      </div>

      {/* Дуа внизу (как на постере) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 px-2">
        <DuaCard type="suhoor" />
        <DuaCard type="iftar" />
      </div>

      <div className="text-center py-8 text-white/20 text-[9px] tracking-[0.5em] uppercase font-bold">
        Mary Şäheri • 2026 • Valvoline Edition
      </div>
    </div>
  );
};

export default CalendarScreen;
