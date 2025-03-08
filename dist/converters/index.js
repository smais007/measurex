"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConverter = getConverter;
exports.getSupportedUnits = getSupportedUnits;
const angle_1 = require("./angle");
const area_1 = require("./area");
const length_1 = require("./length");
const number_1 = require("./number");
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
    number_1.numberConverter,
];
const unitConverterMap = new Map();
// Initialize converter registry
converters.forEach((converter) => {
    converter.units.forEach((unit) => {
        unitConverterMap.set(unit, converter);
    });
});
function getConverter(unit) {
    return unitConverterMap.get(unit);
}
function getSupportedUnits() {
    return Array.from(unitConverterMap.keys());
}
