export interface PlatformLayer {
  id: string;
  number: string;
  name: string;
  shortDesc: string;
  detailedDesc: string;
  icon: string;
  technicalSpecs: string[];
}

export const platformLayers: PlatformLayer[] = [
  {
    id: "iot-sensors",
    number: "01",
    name: "IoT Sensor Nodes",
    shortDesc: "Industrial-grade hardware deploying real-time data directly from fields.",
    detailedDesc: "Our ultra-low-power soil telemetry, microclimate probes, and multispectral optical nodes log data every 60 seconds with an operational battery span of up to 10 years.",
    icon: "sensors",
    technicalSpecs: [
      "LoRaWAN & NB-IoT native wireless protocol",
      "Multilayer soil moisture VWC sensor (+/- 1.5% accuracy)",
      "Solar charging panel with LiFePO4 battery backing",
      "IP68 ruggedized glass-reinforced polymer enclosure"
    ]
  },
  {
    id: "edge-station",
    number: "02",
    name: "Edge Computing Station",
    shortDesc: "Local signal processing and automation protocols running directly on the field margin.",
    detailedDesc: "Processes high-bandwidth sensor outputs and spectral images locally. Edge stations verify data sanity and execute automated valve controls instantly—even when satellite links drop.",
    icon: "memory",
    technicalSpecs: [
      "ARM Cortex-A72 quad-core processing unit",
      "Offline automation engine with SQLite telemetry database",
      "Relay terminals for 24V solenoids and motor controls",
      "Fail-safe regional radio backup mesh"
    ]
  },
  {
    id: "weather-intelligence",
    number: "03",
    name: "Weather Stations",
    shortDesc: "Hyperlocal weather stations logging solar, wind, humidity, and rainfall rates.",
    detailedDesc: "Microclimate tracking detects incoming cold fronts, wind shear, and relative humidity. Data feeds directly into evapotranspiration models for exact water volume calculations.",
    icon: "partly_sunny",
    technicalSpecs: [
      "Sonic anemometer for zero-maintenance wind speed/direction",
      "Optical disdrometer rain gauge for droplet sizing",
      "Active ventilated radiation shield for temperature",
      "Pyranometer for solar radiation and crop canopy loading"
    ]
  },
  {
    id: "digital-twin",
    number: "04",
    name: "Digital Twin Engine",
    shortDesc: "High-fidelity virtual recreation of fields, terrain, soil, and water hydrology.",
    detailedDesc: "Generates visual 3D terrain grids mapping soil moisture profiles, canopy development, and fertilizer spreads. Runs physics-based simulations to predict water flows and yield potentials.",
    icon: "map",
    technicalSpecs: [
      "Topographical CAD mapping via satellite and UAV import",
      "Dynamic finite element model for soil moisture diffusion",
      "NDVI historical overlay timeline generator",
      "3D volumetric irrigation grid rendering"
    ]
  },
  {
    id: "ai-copilot",
    number: "05",
    name: "AI Agent Layer",
    shortDesc: "Agentic crop intelligence acting as your agricultural copilot.",
    detailedDesc: "Decodes complex data into plain text recommendations. Monitors farm operations to detect diseases, schedule optimal harvest times, and flag nitrogen deficiencies automatically.",
    icon: "smart_toy",
    technicalSpecs: [
      "Fine-tuned Agronomic LLM with proprietary context database",
      "Auto-generated disease diagnosis via camera image inputs",
      "Multi-variable predictive analytics for maturity dates",
      "Proactive push notification engine for crop hazard alerts"
    ]
  },
  {
    id: "cloud-control",
    number: "06",
    name: "Cloud Intelligence & Automation",
    shortDesc: "Central orchestration portal coordinating global farm assets.",
    detailedDesc: "Aggregates regional data dashboards, generates reporting outputs for regulatory bodies, and publishes secure web interfaces to monitor macro trends across multi-state operations.",
    icon: "cloud",
    technicalSpecs: [
      "Enterprise-ready cloud ingestion layer with security-first design",
      "API gateway with GraphQL integration for third-party ERPs",
      "Automated PDF compliance report export",
      "Global fleet dashboard mapping multiple farms simultaneously"
    ]
  }
];
