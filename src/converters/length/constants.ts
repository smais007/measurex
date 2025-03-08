import { LengthUnit } from "./types";

export const LENGTH_CONVERSION: Record<LengthUnit, number> = {
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
