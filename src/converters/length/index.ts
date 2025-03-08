import { Converter } from "../../utils/converters";
import { LengthUnit } from "./types";
import { LENGTH_CONVERSION } from "./constants";

export const lengthConverter: Converter = {
  category: "length",
  units: Object.keys(LENGTH_CONVERSION) as LengthUnit[],
  convert: (value: number, from: string, to: string): number => {
    const baseValue = value * LENGTH_CONVERSION[from as LengthUnit];
    return baseValue / LENGTH_CONVERSION[to as LengthUnit];
  },
};
