import { OrazaEntry, FastStatus } from './types';
import { ORAZA_2026 } from './data';

/**
 * Returns the current day of Ramadan (1-30) based on local date matching the JSON string.
 */
export function getCurrentOrazaDay(): number | null {
  // Get today's date in YYYY-MM-DD format
  // Note: toISOString() uses UTC. For a local app, we extract YYYY-MM-DD locally.
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const todayStr = `${year}-${month}-${day}`;

  // Find matching entry in the data
  const entry = ORAZA_2026.find((item) => item.date === todayStr);

  return entry ? entry.day : null;
}

export function getCurrentOrazaEntry(): OrazaEntry | null {
  const day = getCurrentOrazaDay();
  return ORAZA_2026.find((entry) => entry.day === day) || null;
}

export function isOrazaExpired(): boolean {
  const now = new Date();
  // Use explicit timezone offset so the cutoff is stable across user locales.
  // Turkmenistan time is UTC+05:00 (no DST).
  const end = new Date('2026-03-20T07:51:00+05:00');
  return now > end;
}

export function parseTimeToSeconds(timeStr: string | null): number {
  if (!timeStr) return 0;
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 3600 + minutes * 60;
}

export function getNowInSeconds(): number {
  const now = new Date();
  return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}

export function formatCountdown(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, '0')).join(':');
}

export function getFastStatus(entry: OrazaEntry): FastStatus {
  const nowSec = getNowInSeconds();
  const suhoorSec = parseTimeToSeconds(entry.suhoor);
  const iftarSec = parseTimeToSeconds(entry.iftar);

  if (!entry.suhoor || !entry.iftar) return 'not_oraza';
  if (nowSec < suhoorSec) return 'before_suhoor';
  if (nowSec >= suhoorSec && nowSec < iftarSec) return 'fasting';
  return 'after_iftar';
}
