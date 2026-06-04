"use server";

import { getGreenhouseApiUrl } from "@/lib/greenhouse/config";
import type {
  GreenhouseCommand,
  GreenhouseCommandResult,
  GreenhouseData,
  GreenhouseDataResult,
} from "@/lib/greenhouse/types";

function parseGreenhouseData(payload: unknown): GreenhouseData | null {
  if (!payload || typeof payload !== "object") return null;

  const record = payload as Record<string, unknown>;
  const temp = Number(record.temp);
  const humid = Number(record.humid);
  const lux = Number(record.lux);
  const moist = Number(record.moist);
  const diagnosis =
    typeof record.diagnosis === "string"
      ? record.diagnosis
      : "Waiting for data...";

  if ([temp, humid, lux, moist].some((value) => Number.isNaN(value))) {
    return null;
  }

  return { temp, humid, lux, moist, diagnosis };
}

export async function fetchGreenhouseData(): Promise<GreenhouseDataResult> {
  const apiUrl = getGreenhouseApiUrl();

  try {
    const response = await fetch(`${apiUrl}/data`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return {
        ok: false,
        error: `Greenhouse API returned ${response.status}`,
      };
    }

    const payload = await response.json();
    const data = parseGreenhouseData(payload);

    if (!data) {
      return { ok: false, error: "Invalid telemetry payload from greenhouse API" };
    }

    return { ok: true, data };
  } catch {
    return {
      ok: false,
      error: `Unable to reach greenhouse API at ${apiUrl}`,
    };
  }
}

export async function sendGreenhouseCommand(
  command: GreenhouseCommand
): Promise<GreenhouseCommandResult> {
  const apiUrl = getGreenhouseApiUrl();

  try {
    const response = await fetch(`${apiUrl}/api/command`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(command),
      cache: "no-store",
    });

    const payload = (await response.json()) as {
      status?: string;
      message?: string;
    };

    if (!response.ok || payload.status === "error") {
      return {
        ok: false,
        error: payload.message ?? `Command failed with status ${response.status}`,
      };
    }

    return {
      ok: true,
      message: payload.message ?? "Command sent to ESP32",
    };
  } catch {
    return {
      ok: false,
      error: `Unable to reach greenhouse API at ${apiUrl}`,
    };
  }
}
