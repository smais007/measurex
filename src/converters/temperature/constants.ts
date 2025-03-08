import { TemperatureUnit } from "./types";

type ConversionFunctions = {
  toKelvin: (value: number) => number;
  fromKelvin: (value: number) => number;
};

export const TEMPERATURE_CONVERSION: Record<
  TemperatureUnit,
  ConversionFunctions
> = {
  Celsius: {
    toKelvin: (c) => c + 273.15,
    fromKelvin: (k) => k - 273.15,
  },
  Fahrenheit: {
    toKelvin: (f) => ((f - 32) * 5) / 9 + 273.15,
    fromKelvin: (k) => ((k - 273.15) * 9) / 5 + 32,
  },
  Kelvin: {
    toKelvin: (k) => k,
    fromKelvin: (k) => k,
  },
};
