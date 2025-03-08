import { WeightUnit } from "./type";

export const WEIGHT_CONVERSION: Record<WeightUnit, number> = {
  Gram: 1,
  Kilogram: 1000,
  Milligram: 0.001,
  Microgram: 1e-6,
  "Metric Ton": 1e6,
  "Long Ton": 1.016e6, // 1 UK ton = 1016 kg
  "Short Ton": 907184.74, // 1 US ton = 907.18474 kg
  Pound: 453.592, // 1 lb = 453.592 g
  Ounce: 28.3495, // 1 oz = 28.3495 g
  Stone: 6350.29, // 1 stone = 6.35029 kg
  Carrat: 0.2, // 1 carat = 0.2 g
  Dram: 1.77185, // 1 dram = 1.77185 g
  Grain: 0.0647989, // 1 grain = 0.0647989 g
  "Atomic Mass Unit": 1.6605390666e-24, // 1 amu in grams
  Tonne: 1e6, // Same as Metric Ton
  Masha: 0.972, // 1 Masha ≈ 0.972 g
  Tola: 11.6638, // 1 Tola ≈ 11.6638 g
  Seer: 933.1, // 1 Seer ≈ 933.1 g
  Maund: 37324.2, // 1 Maund ≈ 37.3242 kg
  Catty: 604.79, // 1 Catty ≈ 604.79 g
  Picul: 60000, // 1 Picul ≈ 60 kg
  Shekel: 11.34, // 1 Shekel ≈ 11.34 g
  Talent: 26000, // 1 Talent ≈ 26 kg
  Drachma: 4.3, // 1 Drachma ≈ 4.3 g
  Obolos: 0.72, // 1 Obolos ≈ 0.72 g
  Quarter: 12700, // 1 Quarter ≈ 12.7 kg
  Hundredweight: 50800, // 1 Hundredweight (UK) ≈ 50.8 kg
};
