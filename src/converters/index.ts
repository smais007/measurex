import { Converter } from "../utils/converters";
import { lengthConverter } from "./length";
import { temperatureConverter } from "./temperature";

const converters = [lengthConverter, temperatureConverter];
const unitConverterMap = new Map<string, Converter>();

// Initialize converter registry
converters.forEach((converter) => {
  converter.units.forEach((unit) => {
    unitConverterMap.set(unit, converter);
  });
});

export function getConverter(unit: string): Converter | undefined {
  return unitConverterMap.get(unit);
}

export function getSupportedUnits(): string[] {
  return Array.from(unitConverterMap.keys());
}
