export type LandUnit = "hectares" | "fields";

export type CropType =
  | "olives"
  | "dates"
  | "citrus"
  | "vegetables"
  | "cereal"
  | "other";

export type WaterSource =
  | "artesian"
  | "shared-dam"
  | "reservoir";

export interface QuoteInputs {
  landSize: number;
  landUnit: LandUnit;
  cropType: CropType;
  waterSource: WaterSource;
}

export interface InfrastructureEstimate {
  hectares: number;
  gateways: number;
  loraNodeArrays: number;
  totalNodes: number;
}

const FIELDS_TO_HECTARES = 2.5;

export function calculateInfrastructure(
  landSize: number,
  landUnit: LandUnit
): InfrastructureEstimate {
  const hectares =
    landUnit === "hectares"
      ? Math.max(0, landSize)
      : Math.max(0, landSize * FIELDS_TO_HECTARES);

  const units = Math.max(1, Math.ceil(hectares));
  const gateways = units;
  const loraNodeArrays = units * 3;
  const totalNodes = loraNodeArrays * 4;

  return {
    hectares: Math.round(hectares * 10) / 10,
    gateways,
    loraNodeArrays,
    totalNodes,
  };
}
