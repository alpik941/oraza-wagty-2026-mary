export interface OrazaEntry {
  day: number;
  date: string; // YYYY-MM-DD
  weekday: string;
  suhoor: string | null;
  fajr: string | null;
  sunrise: string | null;
  dhuhr: string | null;
  asr: string | null;
  iftar: string | null;
  isha: string | null;
  isGadyr: boolean;
  isBayram: boolean;
  bayramNote?: string;
}

export type FastStatus = 'before_suhoor' | 'fasting' | 'after_iftar' | 'not_oraza';

export interface DuaData {
  title: string;
  arabic: string;
  turkmen: string;
}
