import { convert } from "../index";

describe("Area Converter", () => {
  test("Converts square kilometers to hectares", () => {
    expect(convert(1, "Square Kilometer", "Hectare")).toBe(100);
  });

  test("Converts acres to square meters", () => {
    expect(convert(1, "Acre", "Square Meter")).toBeCloseTo(4046.856);
  });

  test("Converts square feet to square inches", () => {
    expect(convert(1, "Square Foot", "Square Inch")).toBeCloseTo(144);
  });

  test("Throws error when mixing categories", () => {
    expect(() => convert(1, "Square Meter", "Celsius")).toThrowError(
      "Cannot convert between area and temperature"
    );
  });
});
