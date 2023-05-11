// types that will be passed into the 'calculateBmi' function
// one should be for metric units, the other is for imperial units that uses the stone unit
// the stone unit is for every one stone, it is 14 pounds

export interface MetricInfo {
  type: 'metric';
  cm: number;
  kg: number;
}

export interface ImperialInfo {
  type: 'imperial';
  feet: number;
  inches: number;
  stone: number;
  lb: number;
}

export type BmiArgs = MetricInfo | ImperialInfo;
