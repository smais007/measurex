"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConverter = getConverter;
exports.getSupportedUnits = getSupportedUnits;
const angle_1 = require("./angle");
const area_1 = require("./area");
const length_1 = require("./length");
const temperature_1 = require("./temperature");
const time_1 = require("./time");
const volume_1 = require("./volume");
const weigth_1 = require("./weigth");
const converters = [
    length_1.lengthConverter,
    temperature_1.temperatureConverter,
    time_1.timeConverter,
    weigth_1.weightConverter,
    area_1.areaConverter,
    volume_1.volumeConverter,
    angle_1.angleConverter,
];
const unitConverterMap = new Map();
// Initialize converter registry
converters.forEach((converter) => {
    unitConverterMap.set(converter.category, converter); // Store by category instead of unit
});
function getConverter(unit) {
    return converters.find((converter) => converter.units.includes(unit));
}
function getSupportedUnits() {
    return Array.from(unitConverterMap.keys());
}
