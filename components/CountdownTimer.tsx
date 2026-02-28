import React, { useState, useEffect } from 'react';
import { OrazaEntry } from '../types';
import { getFastStatus, getNowInSeconds, parseTimeToSeconds, formatCountdown } from '../utils';

interface Props {
  entry: OrazaEntry;
}

const CountdownTimer: React.FC<Props> = ({ entry }) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [label, setLabel] = useState<string>('');

  useEffect(() => {
    const update = () => {
      const status = getFastStatus(entry);
      const now = getNowInSeconds();

      if (status === 'before_suhoor') {
        const target = parseTimeToSeconds(entry.suhoor);
        setTimeLeft(target - now);
        setLabel('Suhura galan wagt:');
      } else if (status === 'fasting') {
        const target = parseTimeToSeconds(entry.iftar);
        setTimeLeft(target - now);
        setLabel('Agzaçara galan wagt:');
      } else {
        setLabel('Agyz açyldy! 🌙');
        setTimeLeft(0);
      }
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [entry]);

  return (
    <div className="flex items-center space-x-4">
      <span className="text-xs md:text-sm font-bold uppercase tracking-wider">{label}</span>
      {timeLeft > 0 && (
        <span className="text-xl md:text-3xl font-black tabular-nums drop-shadow-sm">
          {formatCountdown(timeLeft)}
        </span>
      )}
    </div>
  );
};

export default CountdownTimer;
