import { ConversionError } from "./utils/errors";
import { getConverter, getSupportedUnits } from "./converters";

export function convert(
  value: number,
  fromUnit: string,
  toUnit: string
): number | string {
  const sourceConverter = getConverter(fromUnit);
  const targetConverter = getConverter(toUnit);

  if (!sourceConverter || !targetConverter) {
    throw new ConversionError(
      `Unsupported unit: ${!sourceConverter ? fromUnit : toUnit}`
    );
  }

  if (sourceConverter !== targetConverter) {
    throw new ConversionError(
      `Cannot convert between ${sourceConverter.category} and ${targetConverter.category}`
    );
  }

  return sourceConverter.convert(value, fromUnit, toUnit);
}

export { getSupportedUnits };
