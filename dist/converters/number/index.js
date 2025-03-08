"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberConverter = void 0;
const constants_1 = require("./constants");
exports.numberConverter = {
    category: "number",
    units: Object.keys(constants_1.BASE_MAP),
    convert: (value, from, to) => {
        const fromBase = constants_1.BASE_MAP[from];
        const toBase = constants_1.BASE_MAP[to];
        // Convert the number to the target base
        const convertedValue = parseInt(value.toString(), fromBase);
        if (isNaN(convertedValue)) {
            throw new Error(`Invalid number for base ${fromBase}: ${value}`);
        }
        return parseInt(convertedValue.toString(toBase), 10);
    },
};
