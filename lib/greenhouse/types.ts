export type GreenhouseData = {
  temp: number;
  humid: number;
  lux: number;
  moist: number;
  diagnosis: string;
};

export type GreenhouseCommand = Record<string, unknown>;

export type GreenhouseDataResult =
  | { ok: true; data: GreenhouseData }
  | { ok: false; error: string };

export type GreenhouseCommandResult =
  | { ok: true; message: string }
  | { ok: false; error: string };

export const WAITING_DIAGNOSIS = "Waiting for data...";
