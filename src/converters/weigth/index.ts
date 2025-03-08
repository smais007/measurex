import { Converter } from "../../utils/converters";
import { WEIGHT_CONVERSION } from "./constants";
import { WeightUnit } from "./type";

export const weightConverter: Converter = {
  category: "length",
  units: Object.keys(WEIGHT_CONVERSION) as WeightUnit[],
  convert: (value: number, from: string, to: string): number => {
    const baseValue = value * WEIGHT_CONVERSION[from as WeightUnit];
    return baseValue / WEIGHT_CONVERSION[to as WeightUnit];
  },
};
