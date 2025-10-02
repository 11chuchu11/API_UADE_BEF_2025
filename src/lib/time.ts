import {
    addDays,
    format,
    isBefore,
    isSameDay,
    isWeekend,
    setHours,
    setMinutes,
    startOfDay,
  } from "date-fns";
  
  export const START_H = 9;
  export const START_M = 30;
  export const END_H = 18;
  export const END_M = 0;
  
  export function toLabel(h: number, m: number) {
    const d = setMinutes(setHours(new Date(), h), m);
    return format(d, "h:mm a");
  }
  export function toMinutes(h: number, m: number) {
    return h * 60 + m;
  }
  export function parseTimeTo24h(timeLabel: string) {
    const [h12, mm, ap] = timeLabel.replace(" ", ":").split(":");
    const h = (Number(h12) % 12) + (ap?.toUpperCase() === "PM" ? 12 : 0);
    const m = Number(mm);
    return { h, m };
  }
  export function labelToMinutes(label: string) {
    const { h, m } = parseTimeTo24h(label);
    return toMinutes(h, m);
  }
  
  export function* slotsBetween(
    startH: number,
    startM: number,
    endH: number,
    endM: number,
    stepMinutes = 30
  ) {
    let h = startH, m = startM;
    while (h < endH || (h === endH && m <= endM)) {
      yield { h, m, label: toLabel(h, m) };
      m += stepMinutes;
      if (m >= 60) { h += Math.floor(m / 60); m = m % 60; }
    }
  }
  
  export function roundUpToNextHalfHour(d: Date) {
    const mins = d.getMinutes();
    const add = mins === 0 ? 30 : mins <= 30 ? 30 - mins : 60 - mins;
    return new Date(d.getTime() + add * 60 * 1000);
  }
  export function clampToBusinessStart(d: Date) {
    const start = setMinutes(setHours(new Date(), START_H), START_M);
    return isBefore(d, start) ? start : d;
  }
  export function nextBusinessDay(d = new Date()) {
    let cur = startOfDay(d);
    while (isWeekend(cur) || isBefore(cur, startOfDay(new Date()))) {
      cur = addDays(cur, 1);
    }
    return cur;
  }
  
  export const dFns = { format, isBefore, isSameDay, isWeekend, setHours, setMinutes, startOfDay };
  