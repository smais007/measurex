import { Converter } from "../../utils/converters";
import { TIME_CONVERSION } from "./constants";
import { TimeUnit } from "./types";

export const timeConverter: Converter = {
  category: "time",
  units: Object.keys(TIME_CONVERSION) as TimeUnit[],
  convert: (value: number, from: string, to: string) => {
    const baseValue = value * TIME_CONVERSION[from as TimeUnit];
    return baseValue / TIME_CONVERSION[to as TimeUnit];
  },
};
