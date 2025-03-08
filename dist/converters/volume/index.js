"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.volumeConverter = void 0;
const constants_1 = require("./constants");
exports.volumeConverter = {
    category: "length",
    units: Object.keys(constants_1.VOLUME_CONVERSION),
    convert: (value, from, to) => {
        const baseValue = value * constants_1.VOLUME_CONVERSION[from];
        return baseValue / constants_1.VOLUME_CONVERSION[to];
    },
};
