import { WAITING_DIAGNOSIS, type GreenhouseData } from "./types";

export function isLiveData(data: GreenhouseData | null): boolean {
  if (!data) return false;
  return data.diagnosis !== WAITING_DIAGNOSIS;
}

export function moistureStatus(moist: number): {
  label: string;
  tone: "optimal" | "warning" | "critical";
} {
  if (moist >= 40) return { label: "Optimal", tone: "optimal" };
  if (moist >= 25) return { label: "Low", tone: "warning" };
  return { label: "Critical", tone: "critical" };
}

export function temperatureStatus(temp: number): {
  label: string;
  tone: "optimal" | "warning" | "critical";
} {
  if (temp >= 45) return { label: "Critical", tone: "critical" };
  if (temp >= 35) return { label: "High", tone: "warning" };
  if (temp <= 0) return { label: "No reading", tone: "warning" };
  return { label: "Normal", tone: "optimal" };
}

export function humidityStatus(humid: number): {
  label: string;
  tone: "optimal" | "warning";
} {
  if (humid >= 30 && humid <= 70) return { label: "Comfortable", tone: "optimal" };
  return { label: "Out of range", tone: "warning" };
}
