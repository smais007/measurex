import { Converter } from "../utils/converters";
import { areaConverter } from "./area";
import { lengthConverter } from "./length";
import { temperatureConverter } from "./temperature";
import { timeConverter } from "./time";
import { volumeConverter } from "./volume";
import { weightConverter } from "./weigth";

const converters = [
  lengthConverter,
  temperatureConverter,
  timeConverter,
  weightConverter,
  areaConverter,
  volumeConverter,
];

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
