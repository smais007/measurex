const { convert } = require("./dist/index.js");

// console.log("5 Foot to Meters:", convert(5, "Foot", "Meter"));
// console.log("1000 Millimeters to Inches:", convert(1000, "Millimeter", "Inch"));
// console.log("2.5 Miles to Meters:", convert(2.5, "Mile", "Meter"));
// console.log("10 Light Years to Meters:", convert(10, "Light Year", "Meter"));

console.log("5 Foot to Foot:", convert(5, "Foot", "Foot"));

console.log("Supported Units:", require("./dist/index.js").getSupportedUnits());
