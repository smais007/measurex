"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.temperatureConverter = void 0;
const constants_1 = require("./constants");
exports.temperatureConverter = {
    category: "temperature",
    units: Object.keys(constants_1.TEMPERATURE_CONVERSION),
    convert: (value, from, to) => {
        const kelvinValue = constants_1.TEMPERATURE_CONVERSION[from].toKelvin(value);
        return constants_1.TEMPERATURE_CONVERSION[to].fromKelvin(kelvinValue);
    },
};
