"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSupportedUnits = void 0;
exports.convert = convert;
const errors_1 = require("./utils/errors");
const converters_1 = require("./converters");
Object.defineProperty(exports, "getSupportedUnits", { enumerable: true, get: function () { return converters_1.getSupportedUnits; } });
function convert(value, fromUnit, toUnit) {
    const sourceConverter = (0, converters_1.getConverter)(fromUnit);
    const targetConverter = (0, converters_1.getConverter)(toUnit);
    if (!sourceConverter || !targetConverter) {
        throw new errors_1.ConversionError(`Unsupported unit: ${!sourceConverter ? fromUnit : toUnit}`);
    }
    if (sourceConverter !== targetConverter) {
        throw new errors_1.ConversionError(`Cannot convert between ${sourceConverter.category} and ${targetConverter.category}`);
    }
    return sourceConverter.convert(value, fromUnit, toUnit);
}
