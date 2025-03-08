"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weightConverter = void 0;
const constants_1 = require("./constants");
exports.weightConverter = {
    category: "length",
    units: Object.keys(constants_1.WEIGHT_CONVERSION),
    convert: (value, from, to) => {
        const baseValue = value * constants_1.WEIGHT_CONVERSION[from];
        return baseValue / constants_1.WEIGHT_CONVERSION[to];
    },
};
