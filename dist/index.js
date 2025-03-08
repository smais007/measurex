"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = convert;
exports.getSupportedUnits = getSupportedUnits;
const conversionTable = {
    Meter: 1,
    Kilometer: 1000,
    Centimeter: 0.01,
    Millimeter: 0.001,
    Micrometer: 1e-6,
    Nanometer: 1e-9,
    Mile: 1609.34,
    Yard: 0.9144,
    Foot: 0.3048,
    Inch: 0.0254,
    "Light Year": 9.461e15,
};
function convert(value, fromUnit, toUnit) {
    if (!(fromUnit in conversionTable)) {
        throw new Error(`Invalid fromUnit: ${fromUnit}`);
    }
    if (!(toUnit in conversionTable)) {
        throw new Error(`Invalid toUnit: ${toUnit}`);
    }
    const meters = value * conversionTable[fromUnit];
    return meters / conversionTable[toUnit];
}
function getSupportedUnits() {
    return Object.keys(conversionTable);
}
