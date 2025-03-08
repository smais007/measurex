import { AREA_CONVERSION } from "./constants";
import { AreaUnit } from "./types";
import { Converter } from "../../utils/converters";

export const areaConverter: Converter = {
  category: "area",
  units: Object.keys(AREA_CONVERSION) as AreaUnit[],
  convert: (value: number, from: string, to: string) => {
    const baseValue = value * AREA_CONVERSION[from as AreaUnit];
    return baseValue / AREA_CONVERSION[to as AreaUnit];
  },
};
