export const OFFLINE_MESSAGE = "system is currently offline";

export function getOverviewStatusMessage(isOffline: boolean, isLive: boolean): string {
  if (isOffline) return OFFLINE_MESSAGE;
  if (isLive) return "Live greenhouse telemetry from ESP32 via MQTT.";
  return "Waiting for the ESP32 to publish on greenhouse/data.";
}

export function getTelemetryStatusMessage(isOffline: boolean, isLive: boolean): string {
  if (isOffline) return OFFLINE_MESSAGE;
  if (isLive) return "Streaming sensor readings from the MQTT bridge.";
  return "Connected to the API, waiting for ESP32 payloads.";
}
