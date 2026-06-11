export interface Solution {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  benefits: string[];
}

export const solutions: Solution[] = [
  {
    id: "enterprise-growers",
    title: "Large Enterprise Growers",
    tagline: "Standardize data structures across vast multi-regional farm networks.",
    problem: "Corporate agricultural managers face fragmented tools, delayed field telemetry, and visual blind spots across thousands of hectares, leading to sub-optimal crop scheduling.",
    solution: "AMR Solutions unifies all fleet sensor networks, weather indicators, and yield models into a singular cloud dashboard. Managers gain centralized oversight and standardized reporting.",
    benefits: [
      "Real-time central operations map showing all active regions",
      "Unified telemetry APIs easily connecting to legacy ERP systems",
      "Standardized compliance logging for water and chemical usage",
      "Automated alert escalation for sensor offline states or field stresses"
    ]
  },
  {
    // Water Scarcity
    id: "water-conservation",
    title: "Precision Water Management",
    tagline: "Thrive in drought-prone climates with drop-level tracking.",
    problem: "Escalating water costs and severe climate volatility threaten yields. Blanket watering cycles waste precious resources and drown roots in some spots while leaving others parched.",
    solution: "Deploy volumetric soil probes that feed directly into our digital twin engine. The system maps the precise water table dynamics and adjusts drip rates locally via edge controllers.",
    benefits: [
      "Reduced irrigation waste through dynamic, sensor-driven watering schedules",
      "Soil moisture profiles mapped in 3D topography models",
      "Micro-valve automated schedules adjusted hourly based on microclimate forecasts",
      "Detection of leaking lines via sudden flow rate differentials"
    ]
  },
  {
    id: "cooperatives",
    title: "Agricultural Cooperatives",
    tagline: "Empower individual members with shared intelligence and machinery.",
    problem: "Small to medium growers within cooperatives often lack the budget for standalone cloud servers, proprietary AI models, and deep data analytics pipelines.",
    solution: "AMR Solutions offers co-op licensing models that share weather stations, agronomic predictions, and machine telemetry. Members profit from regional scale insights and shared costs.",
    benefits: [
      "Shared microclimate tracking across the local regional mesh",
      "Anonymized regional yield tracking to optimize market prices",
      "Machinery tracking modules to coordinate harvest and spraying fleets",
      "Group training models fine-tuned to local regional crops"
    ]
  },
  {
    id: "agronomic-research",
    title: "Researchers & Analytics",
    tagline: "Academic-grade telemetry with open research APIs.",
    problem: "Agronomists and biotechnology teams struggle with noisy, sparse sensor data and lack of physical-biological simulations.",
    solution: "AMR Solutions delivers raw, uncompressed high-fidelity sensor readouts and multispectral imagery logs alongside the digital twin simulation environment.",
    benefits: [
      "Raw CSV, JSON, and GraphQL API endpoints for data analysis",
      "Exportable soil diffusion models for academic publications",
      "Calibration values to align sensor metrics with lab testing results",
      "Custom ML model integration sandboxes"
    ]
  }
];
