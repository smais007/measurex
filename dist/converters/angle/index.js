"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.angleConverter = void 0;
const constants_1 = require("./constants");
exports.angleConverter = {
    category: "length",
    units: Object.keys(constants_1.ANGLE_CONVERSION),
    convert: (value, from, to) => {
        const baseValue = value * constants_1.ANGLE_CONVERSION[from];
        return baseValue / constants_1.ANGLE_CONVERSION[to];
    },
};
