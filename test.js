const { convert } = require("./dist/index.js");

// console.log("5 Foot to Meters:", convert(5, "Foot", "Meter"));
// console.log("1000 Millimeters to Inches:", convert(1000, "Millimeter", "Inch"));
// console.log("2.5 Miles to Meters:", convert(2.5, "Mile", "Meter"));
// console.log("10 Light Years to Meters:", convert(10, "Light Year", "Meter"));

// console.log("Supported Units:", require("./dist/index.js").getSupportedUnits());
// console.log("5 Foot to Foot:", convert(5, "Foot", "Foot"));

// console.log("0°C to Fahrenheit:", convert(0, "Celsius", "Fahrenheit"));
// console.log("212°F to Kelvin:", convert(212, "Fahrenheit", "Kelvin"));
// console.log("10°C to Celsius:", convert(10, "Celsius", "Celsius"));

// console.log("1 Second to Minutes:", convert(1, "Second", "Minute"));
// console.log("30 Days to Months:", convert(30, "Day", "Month"));
// console.log("54 Weeks to Years:", convert(54, "Week", "Year"));

// console.log("1 Kilogram to Pounds:", convert(1, "Kilogram", "Pound"));
// console.log("10 Ounce to Kilograms:", convert(10, "Ounce", "Kilogram"));

// console.log("1000 Grams to Ounces:", convert(1000, "Gram", "Ounce"));

// console.log(
//   "100 Square Meters to Acres:",
//   convert(100, "Square Meter", "Acre")
// );

// console.log(
//   "1 Square Kilometer to Hectares:",
//   convert(1, "Square Kilometer", "Hectare")
// );

// console.log(
//   "1 Cubic Yard to Cubic Mile:",
//   convert(1, "Cubic Foot", "Cubic Mile")
// );

console.log(convert(1, "Right Angle", "Sextant"));
console.log(convert(1, "Revolution", "Revolution"));
console.log(convert(90, "Degree", "Radian"));
