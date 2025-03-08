"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeConverter = void 0;
const constants_1 = require("./constants");
exports.timeConverter = {
    category: "time",
    units: Object.keys(constants_1.TIME_CONVERSION),
    convert: (value, from, to) => {
        const baseValue = value * constants_1.TIME_CONVERSION[from];
        return baseValue / constants_1.TIME_CONVERSION[to];
    },
};
