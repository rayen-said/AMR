"use client";

import { fetchGreenhouseData } from "@/lib/actions/greenhouse";
import { isLiveData } from "@/lib/greenhouse/status";
import type { GreenhouseData } from "@/lib/greenhouse/types";
import { useCallback, useEffect, useRef, useState } from "react";

const DEFAULT_POLL_MS = 3000;
const MAX_HISTORY = 24;

export function useGreenhouseData(pollIntervalMs = DEFAULT_POLL_MS) {
  const [data, setData] = useState<GreenhouseData | null>(null);
  const [history, setHistory] = useState<GreenhouseData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const isMounted = useRef(true);

  const refresh = useCallback(async () => {
    const result = await fetchGreenhouseData();

    if (!isMounted.current) return;

    if (result.ok) {
      setData(result.data);
      setError(null);
      setLastUpdated(new Date());
      setHistory((prev) => {
        const next = [...prev, result.data];
        return next.length > MAX_HISTORY ? next.slice(-MAX_HISTORY) : next;
      });
    } else {
      setError(result.error);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    isMounted.current = true;
    refresh();

    const intervalId = window.setInterval(refresh, pollIntervalMs);
    return () => {
      isMounted.current = false;
      window.clearInterval(intervalId);
    };
  }, [pollIntervalMs, refresh]);

  return {
    data,
    history,
    error,
    isLoading,
    isOffline: Boolean(error),
    isLive: isLiveData(data) && !error,
    lastUpdated,
    refresh,
  };
}
