import { Converter } from "../../utils/converters";
import { ANGLE_CONVERSION } from "./constants";
import { AngleUnit } from "./types";

export const angleConverter: Converter = {
  category: "length",
  units: Object.keys(ANGLE_CONVERSION) as AngleUnit[],
  convert: (value: number, from: string, to: string): number => {
    const baseValue = value * ANGLE_CONVERSION[from as AngleUnit];
    return baseValue / ANGLE_CONVERSION[to as AngleUnit];
  },
};
