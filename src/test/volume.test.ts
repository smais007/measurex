import { convert } from "../index";

describe("Volume Converter", () => {
  test("Converts liters to milliliters", () => {
    expect(convert(1, "Liter", "Milliliter")).toBe(1000);
  });

  test("Converts gallons to liters", () => {
    expect(convert(1, "Gallon", "Liter")).toBeCloseTo(3.78541);
  });

  test("Converts cubic feet to gallons", () => {
    expect(convert(1, "CubicFoot", "Gallon")).toBeCloseTo(7.48052);
  });

  test("Converts fluid ounces to milliliters", () => {
    expect(convert(1, "FluidOunce", "Milliliter")).toBeCloseTo(29.5735);
  });

  test("Throws error when mixing categories", () => {
    expect(() => convert(1, "Liter", "Celsius")).toThrowError(
      "Cannot convert between volume and temperature"
    );
  });
});
