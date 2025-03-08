"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
describe("Length Converter", () => {
    test("Converts kilometers to meters", () => {
        expect((0, index_1.convert)(1, "Kilometer", "Meter")).toBe(1000);
    });
    test("Converts inches to feet", () => {
        expect((0, index_1.convert)(12, "Inch", "Foot")).toBeCloseTo(1);
    });
    test("Converts miles to yards", () => {
        expect((0, index_1.convert)(1, "Mile", "Yard")).toBeCloseTo(1760);
    });
    test("Throws error for invalid unit", () => {
        expect(() => (0, index_1.convert)(1, "InvalidUnit", "Meter")).toThrow();
    });
});
