import { TemperatureUnit } from "./types";
type ConversionFunctions = {
    toKelvin: (value: number) => number;
    fromKelvin: (value: number) => number;
};
export declare const TEMPERATURE_CONVERSION: Record<TemperatureUnit, ConversionFunctions>;
export {};
