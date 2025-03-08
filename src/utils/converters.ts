import { AngleUnit } from "../converters/angle/types";
import { AreaUnit } from "../converters/area/types";
import { LengthUnit } from "../converters/length/types";
import { NumberBase } from "../converters/number/type";
import { TemperatureUnit } from "../converters/temperature/types";
import { TimeUnit } from "../converters/time/types";
import { VolumeUnit } from "../converters/volume/types";
import { WeightUnit } from "../converters/weigth/type";

export interface Converter {
  category: string;
  units: string[];
  convert: (value: number, from: string, to: string) => number;
}

export type AnyUnit =
  | LengthUnit
  | TemperatureUnit
  | TimeUnit
  | WeightUnit
  | AreaUnit
  | VolumeUnit
  | AngleUnit
  | NumberBase;
