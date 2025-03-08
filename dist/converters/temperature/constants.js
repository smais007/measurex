"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEMPERATURE_CONVERSION = void 0;
exports.TEMPERATURE_CONVERSION = {
    Celsius: {
        toKelvin: (c) => c + 273.15,
        fromKelvin: (k) => k - 273.15,
    },
    Fahrenheit: {
        toKelvin: (f) => ((f - 32) * 5) / 9 + 273.15,
        fromKelvin: (k) => ((k - 273.15) * 9) / 5 + 32,
    },
    Kelvin: {
        toKelvin: (k) => k,
        fromKelvin: (k) => k,
    },
};
