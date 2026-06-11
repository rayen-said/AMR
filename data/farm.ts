export interface SensorNode {
  id: string;
  name: string;
  type: "soil" | "weather" | "optical" | "spectral";
  status: "active" | "warning" | "inactive";
  lastReading: string;
  value: string;
  battery: number;
}

export interface FarmField {
  id: string;
  name: string;
  crop: string;
  healthIndex: number;
  moisture: string;
  nitrogen: string;
  temp: string;
  status: "Optimal" | "Action Required" | "Critical";
}

export const farmNodes: SensorNode[] = [
  { id: "SN-101", name: "North Sector Soil Node", type: "soil", status: "active", lastReading: "2 mins ago", value: "32% VWC", battery: 94 },
  { id: "SN-102", name: "South Ridge Weather Node", type: "weather", status: "active", lastReading: "Just now", value: "24.5°C / 62% RH", battery: 89 },
  { id: "SN-103", name: "East Orchard Spectral Cam", type: "spectral", status: "active", lastReading: "5 mins ago", value: "NDVI 0.78", battery: 78 },
  { id: "SN-104", name: "West Valley Soil Node", type: "soil", status: "warning", lastReading: "10 mins ago", value: "18% VWC (Low)", battery: 42 },
];

export const farmFields: FarmField[] = [
  { id: "field-a", name: "North Alfa Sector", crop: "Organic Soybeans", healthIndex: 94, moisture: "31%", nitrogen: "Optimal", temp: "22.1°C", status: "Optimal" },
  { id: "field-b", name: "South Clover Valley", crop: "Winter Wheat", healthIndex: 89, moisture: "28%", nitrogen: "Low (Action Needed)", temp: "21.8°C", status: "Action Required" },
  { id: "field-c", name: "East Orchard Terraces", crop: "Honeycrisp Apples", healthIndex: 96, moisture: "34%", nitrogen: "Optimal", temp: "20.5°C", status: "Optimal" },
  { id: "field-d", name: "West Corn Flats", crop: "Sweet Corn", healthIndex: 72, moisture: "19%", nitrogen: "Deficient", temp: "23.4°C", status: "Critical" },
];

export const weatherAlerts = [
  { id: "w-1", severity: "warning", title: "Imminent Heat Stress Alert", description: "Temperatures exceeding 34°C forecasted for Tuesday, June 9th. Increase soil moisture levels in Zone 3.", time: "1 hour ago" },
  { id: "w-2", severity: "info", title: "Precipitation Probability Shift", description: "30mm rainfall expected this Thursday. Automated irrigation cycles adjusted downwards to save water.", time: "4 hours ago" }
];

export const aiAssistantPrompts = [
  {
    question: "How is the soil nitrogen in Field B?",
    answer: "Field B (South Clover Valley) shows low nitrogen levels (approx 22 ppm). Recommend scheduling a precise liquid fertigation cycle of 15 lbs/acre this evening."
  },
  {
    question: "Optimize irrigation for tomorrow",
    answer: "Based on 82% humidity and incoming 30mm rainfall, I have scheduled a 40% reduction in irrigation across all sectors to maximize water conservation."
  },
  {
    question: "Analyze spectral anomalies in East Orchard",
    answer: "NDVI indices indicate a 3% drop in the outer block of East Orchard, likely due to localized rust infestation. Field inspection is recommended."
  }
];
