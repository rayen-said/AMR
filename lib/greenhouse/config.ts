export function getGreenhouseApiUrl(): string {
  return process.env.GREENHOUSE_API_URL ?? "https://www.amrsolutions.tech/";
}
