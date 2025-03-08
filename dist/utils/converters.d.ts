import { LengthUnit } from "../converters/length/types";
import { TemperatureUnit } from "../converters/temperature/types";
export interface Converter {
    category: string;
    units: string[];
    convert: (value: number, from: string, to: string) => number;
}
export type AnyUnit = LengthUnit | TemperatureUnit;
