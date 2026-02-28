import React from 'react';
import { OrazaEntry } from '../types';
import CountdownTimer from './CountdownTimer';
import GadyrBadge from './GadyrBadge';

interface Props {
  entry: OrazaEntry;
  isActive: boolean;
  rowRef?: React.RefObject<HTMLDivElement | null>;
}

const CalendarRow: React.FC<Props> = ({ entry, isActive, rowRef }) => {
  const getDayFormatted = (date: string) => {
    // Date-only strings like "YYYY-MM-DD" are parsed as UTC by JS, which can shift the day
    // for users in negative timezones. Parse it as a local date instead.
    const [y, m, d] = date.split('-').map(Number);
    const localDate = new Date(y, (m ?? 1) - 1, d ?? 1);
    const months = [
      'Januar',
      'Fewral',
      'Mart',
      'Aprel',
      'Maý',
      'Iýun',
      'Iýul',
      'Awgust',
      'Sentýabr',
      'Oktýabr',
      'Noýabr',
      'Dekabr',
    ];
    return `${months[localDate.getMonth()]} ${localDate.getDate()}`;
  };

  const textBaseClass = isActive ? 'text-white' : 'text-black';
  const activeRowClass = isActive
    ? 'bg-[rgba(31,175,90,0.85)] border-l-4 border-[#1FAF5A] shadow-[inset_0_0_20px_rgba(31,175,90,0.1)] text-white font-bold'
    : 'border-l-4 border-transparent';
  const suhoorCellClass = isActive ? 'text-[#4ade80]' : 'app-text-suhoor';
  const iftarCellClass = isActive ? 'text-[#4ade80]' : 'app-text-iftar';

  if (entry.isBayram) {
    const bayramTime = entry.bayramNote?.match(/\b\d{1,2}:\d{2}\b/)?.[0] ?? '07:50';
    return (
      <div
        ref={rowRef}
        className={`grid grid-cols-10 p-2 border-b border-black/10 bg-gray-50 items-center`}
      >
        <div className="col-span-2 text-xs md:text-sm font-bold pl-2">
          {getDayFormatted(entry.date)}
        </div>
        <div className="col-span-1 text-xs md:text-sm font-bold">Baýram 1</div>
        <div className="col-span-1 text-xs md:text-sm font-bold">{entry.weekday}</div>
        <div className="col-span-2 text-center text-xs md:text-sm font-black text-blue-900">
          BAÝRAM
        </div>
        <div className="col-span-2 text-center text-xs md:text-sm font-black text-blue-900">
          NAMAZY
        </div>
        <div className="col-span-2 text-right text-xs md:text-sm font-bold pr-2">
          sagat {bayramTime}
        </div>
      </div>
    );
  }

  const row = (
    <div
      ref={rowRef}
      className={`relative grid grid-cols-10 border-b border-black/10 text-[10px] md:text-[13px] transition-all ${activeRowClass}`}
    >
      <div
        className={`p-1 md:p-2 border-r border-black/10 flex items-center justify-start pl-2 ${textBaseClass}`}
      >
        {getDayFormatted(entry.date)}
      </div>
      <div
        className={`p-1 md:p-2 border-r border-black/10 flex items-center justify-center ${textBaseClass}`}
      >
        Oraza {entry.day}
      </div>
      <div
        className={`p-1 md:p-2 border-r border-black/10 flex items-center justify-center truncate ${textBaseClass}`}
      >
        {entry.weekday}
      </div>
      <div
        className={`p-1 md:p-2 border-r border-black/10 flex items-center justify-center font-bold ${suhoorCellClass}`}
      >
        {entry.suhoor}
      </div>
      <div
        className={`p-1 md:p-2 border-r border-black/10 flex items-center justify-center ${textBaseClass}`}
      >
        {entry.fajr}
      </div>
      <div
        className={`p-1 md:p-2 border-r border-black/10 flex items-center justify-center ${textBaseClass}`}
      >
        {entry.sunrise}
      </div>
      <div
        className={`p-1 md:p-2 border-r border-black/10 flex items-center justify-center ${textBaseClass}`}
      >
        {entry.dhuhr}
      </div>
      <div
        className={`p-1 md:p-2 border-r border-black/10 flex items-center justify-center ${textBaseClass}`}
      >
        {entry.asr}
      </div>
      <div
        className={`p-1 md:p-2 border-r border-black/10 flex items-center justify-center font-bold ${iftarCellClass}`}
      >
        {entry.iftar}
      </div>
      <div className={`p-1 md:p-2 flex items-center justify-center ${textBaseClass}`}>
        {entry.isha}
      </div>

      {isActive && (
        <div className="col-span-full bg-black/20 text-white p-2 flex flex-col items-center">
          <CountdownTimer entry={entry} />
        </div>
      )}
    </div>
  );

  // Show Gadyr badge exactly between day 26 and 27 (before rendering day 27 row).
  if (entry.isGadyr && entry.day === 27) {
    return (
      <>
        <GadyrBadge />
        {row}
      </>
    );
  }

  return row;
};

export default CalendarRow;
