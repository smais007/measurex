import { Converter } from "../../utils/converters";
import { VOLUME_CONVERSION } from "./constants";
import { VolumeUnit } from "./types";

export const volumeConverter: Converter = {
  category: "length",
  units: Object.keys(VOLUME_CONVERSION) as VolumeUnit[],
  convert: (value: number, from: string, to: string): number => {
    const baseValue = value * VOLUME_CONVERSION[from as VolumeUnit];
    return baseValue / VOLUME_CONVERSION[to as VolumeUnit];
  },
};
