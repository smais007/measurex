"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areaConverter = void 0;
const constants_1 = require("./constants");
exports.areaConverter = {
    category: "area",
    units: Object.keys(constants_1.AREA_CONVERSION),
    convert: (value, from, to) => {
        const baseValue = value * constants_1.AREA_CONVERSION[from];
        return baseValue / constants_1.AREA_CONVERSION[to];
    },
};
