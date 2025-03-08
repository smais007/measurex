export type LengthUnit = "Meter" | "Kilometer" | "Centimeter" | "Millimeter" | "Micrometer" | "Nanometer" | "Mile" | "Yard" | "Foot" | "Inch" | "Light Year";
export declare function convert(value: number, fromUnit: LengthUnit, toUnit: LengthUnit): number;
export declare function getSupportedUnits(): LengthUnit[];
