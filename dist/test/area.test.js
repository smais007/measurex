"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
describe("Area Converter", () => {
    test("Converts square kilometers to hectares", () => {
        expect((0, index_1.convert)(1, "Square Kilometer", "Hectare")).toBe(100);
    });
    test("Converts acres to square meters", () => {
        expect((0, index_1.convert)(1, "Acre", "Square Meter")).toBeCloseTo(4046.856);
    });
    test("Converts square feet to square inches", () => {
        expect((0, index_1.convert)(1, "Square Foot", "Square Inch")).toBeCloseTo(144);
    });
    test("Throws error when mixing categories", () => {
        expect(() => (0, index_1.convert)(1, "Square Meter", "Celsius")).toThrowError("Cannot convert between area and temperature");
    });
});
