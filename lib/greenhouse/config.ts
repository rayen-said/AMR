export function getGreenhouseApiUrl(): string {
  return process.env.GREENHOUSE_API_URL ?? "http://127.0.0.1:5000";
}
