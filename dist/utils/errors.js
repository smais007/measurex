"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversionError = void 0;
class ConversionError extends Error {
    constructor(message) {
        super(message);
        this.name = "ConversionError";
    }
}
exports.ConversionError = ConversionError;
