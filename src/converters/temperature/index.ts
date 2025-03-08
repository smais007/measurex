import { Converter } from "../../utils/converters";
import { TemperatureUnit } from "./types";
import { TEMPERATURE_CONVERSION } from "./constants";

export const temperatureConverter: Converter = {
  category: "temperature",
  units: Object.keys(TEMPERATURE_CONVERSION) as TemperatureUnit[],
  convert: (value: number, from: string, to: string): number => {
    const kelvinValue =
      TEMPERATURE_CONVERSION[from as TemperatureUnit].toKelvin(value);
    return TEMPERATURE_CONVERSION[to as TemperatureUnit].fromKelvin(
      kelvinValue
    );
  },
};
