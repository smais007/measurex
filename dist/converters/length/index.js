"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lengthConverter = void 0;
const constants_1 = require("./constants");
exports.lengthConverter = {
    category: "length",
    units: Object.keys(constants_1.LENGTH_CONVERSION),
    convert: (value, from, to) => {
        const baseValue = value * constants_1.LENGTH_CONVERSION[from];
        return baseValue / constants_1.LENGTH_CONVERSION[to];
    },
};
