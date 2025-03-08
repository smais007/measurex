import { AreaUnit } from "../converters/area/types";
import { LengthUnit } from "../converters/length/types";
import { TemperatureUnit } from "../converters/temperature/types";
import { TimeUnit } from "../converters/time/types";
import { WeightUnit } from "../converters/weigth/type";
export interface Converter {
    category: string;
    units: string[];
    convert: (value: number, from: string, to: string) => number;
}
export type AnyUnit = LengthUnit | TemperatureUnit | TimeUnit | WeightUnit | AreaUnit;
