export type LengthUnit =
  | "Meter"
  | "Kilometer"
  | "Centimeter"
  | "Millimeter"
  | "Micrometer"
  | "Nanometer"
  | "Mile"
  | "Yard"
  | "Foot"
  | "Inch"
  | "Light Year";

const conversionTable: Record<LengthUnit, number> = {
  Meter: 1,
  Kilometer: 1000,
  Centimeter: 0.01,
  Millimeter: 0.001,
  Micrometer: 1e-6,
  Nanometer: 1e-9,
  Mile: 1609.34,
  Yard: 0.9144,
  Foot: 0.3048,
  Inch: 0.0254,
  "Light Year": 9.461e15,
};

export function convert(
  value: number,
  fromUnit: LengthUnit,
  toUnit: LengthUnit
): number {
  if (!(fromUnit in conversionTable)) {
    throw new Error(`Invalid fromUnit: ${fromUnit}`);
  }
  if (!(toUnit in conversionTable)) {
    throw new Error(`Invalid toUnit: ${toUnit}`);
  }

  const meters = value * conversionTable[fromUnit];
  return meters / conversionTable[toUnit];
}

export function getSupportedUnits(): LengthUnit[] {
  return Object.keys(conversionTable) as LengthUnit[];
}
