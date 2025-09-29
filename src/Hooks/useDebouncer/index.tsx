import { useCallback, useEffect, useRef, useState } from "react";

export function useDebouncer<T>(delay = 300) {
  const [value, setValue] = useState<T | undefined>(undefined);

  const timerRef = useRef<number | null>(null);
  const lastValueRef = useRef<T | undefined>(undefined);
  const resolverRef = useRef<((v: T) => void) | null>(null);
  const rejecterRef = useRef<((err: unknown) => void) | null>(null);

  const clearTimer = () => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const cancel = useCallback((reason: unknown = new Error("debounce canceled")) => {
    clearTimer();
    if (rejecterRef.current) {
      rejecterRef.current(reason);
    }
    resolverRef.current = null;
    rejecterRef.current = null;
  }, []);

  const flush = useCallback(() => {
    clearTimer();
    const v = lastValueRef.current as T;
    setValue(v);
    if (resolverRef.current) {
      resolverRef.current(v);
    }
    resolverRef.current = null;
    rejecterRef.current = null;
    return v;
  }, []);

  const debounce = useCallback((next: T): Promise<T> => {
    cancel(new Error("debounce superseded by a newer call"));

    lastValueRef.current = next;

    return new Promise<T>((resolve, reject) => {
      resolverRef.current = resolve;
      rejecterRef.current = reject;

      timerRef.current = window.setTimeout(() => {
        flush(); 
      }, delay);
    });
  }, [delay, cancel, flush]);

  // Limpieza en unmount
  useEffect(() => cancel, [cancel]);

  return { debounce, value, flush, cancel };
}
