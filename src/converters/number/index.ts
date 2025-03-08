import { Converter } from "../../utils/converters";
import { BASE_MAP } from "./constants";
import { NumberBase } from "./type";

export const numberConverter: Converter = {
  category: "number",
  units: Object.keys(BASE_MAP) as string[],
  convert: (value: number, from: string, to: string): number => {
    const fromBase = BASE_MAP[from as NumberBase];
    const toBase = BASE_MAP[to as NumberBase];

    // Convert the number to the target base
    const convertedValue = parseInt(value.toString(), fromBase);

    if (isNaN(convertedValue)) {
      throw new Error(`Invalid number for base ${fromBase}: ${value}`);
    }

    return parseInt(convertedValue.toString(toBase), 10);
  },
};
