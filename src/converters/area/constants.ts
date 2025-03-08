import { AreaUnit } from "./types";

export const AREA_CONVERSION: Record<AreaUnit, number> = {
  "Square Meter": 1,
  "Square Kilometer": 1e6, // 1 km² = 1,000,000 m²
  "Square Centimeter": 0.0001, // 1 cm² = 0.0001 m²
  "Square Millimeter": 1e-6, // 1 mm² = 0.000001 m²
  "Square Micrometer": 1e-12, // 1 µm² = 1e-12 m²
  Hectare: 10000, // 1 hectare = 10,000 m²
  Acre: 4046.86, // 1 acre = 4046.86 m²
  "Square Mile": 2.59e6, // 1 mi² = 2,590,000 m²
  "Square Yard": 0.836127, // 1 yd² = 0.836127 m²
  "Square Foot": 0.092903, // 1 ft² = 0.092903 m²
  "Square Inch": 0.00064516, // 1 in² = 0.00064516 m²
  Are: 100, // 1 are = 100 m²
  Barn: 1e-28, // 1 barn = 1e-28 m² (used in nuclear physics)
  Rood: 1011.71, // 1 rood = 1011.71 m²
  Section: 2.59e6, // 1 section = 2.59 km² = 2,590,000 m²
  Township: 9.323e7, // 1 township = 93,230,000 m²
  Dunam: 1000, // 1 dunam = 1000 m² (Middle East)
  Bigha: 1333, // 1 bigha ≈ 1333 m² (varies by region)
  Marla: 25.2929, // 1 marla ≈ 25.2929 m²
  Katha: 126, // 1 katha ≈ 126 m² (varies by country)
  Cent: 40.4686, // 1 cent = 40.4686 m²
  Guntha: 101.17, // 1 guntha = 101.17 m²
  Ground: 203, // 1 ground = 203 m² (South India)
  Cuerda: 3930, // 1 cuerda ≈ 3930 m² (Puerto Rico)
  Tsubo: 3.306, // 1 tsubo ≈ 3.306 m² (Japan)
};
