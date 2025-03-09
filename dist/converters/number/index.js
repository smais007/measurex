"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberConverter = void 0;
const constants_1 = require("./constants");
exports.numberConverter = {
    category: "number",
    units: Object.keys(constants_1.BASE_MAP),
    convert: (value, from, to) => {
        if (typeof value !== "string" && typeof value !== "number") {
            throw new Error(`Invalid input: value must be a string or number`);
        }
        if (typeof from !== "string" || typeof to !== "string") {
            throw new Error(`Invalid input: from and to must be strings`);
        }
        const fromBase = constants_1.BASE_MAP[from];
        const toBase = constants_1.BASE_MAP[to];
        if (!fromBase || !toBase) {
            throw new Error(`Unsupported base: ${from} or ${to}`);
        }
        // Convert from source base to decimal first
        const decimalValue = parseInt(value.toString(), fromBase);
        if (isNaN(decimalValue)) {
            throw new Error(`Invalid number '${value}' for base ${from}`);
        }
        // Convert from decimal to target base and parse back to number
        const result = parseInt(decimalValue.toString(toBase).toUpperCase(), toBase);
        if (isNaN(result)) {
            throw new Error(`Conversion failed from base ${from} to base ${to}`);
        }
        return result;
    },
};
