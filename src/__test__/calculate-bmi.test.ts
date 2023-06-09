import { expect } from 'vitest';
import calculateBMI from '../lib/calculate-bmi';
import { ImperialInfo, MetricInfo } from '../types/bmi';

describe('calculate-bmi for metric information', () => {
  test('height of 185, weight of 80, returns 23.4', () => {
    const metricInformation: MetricInfo = {
      type: 'metric',
      cm: 185,
      kg: 80,
    };
    const bmi = calculateBMI(metricInformation);
    expect(bmi.bmi).toBe("23.4");
    expect(bmi.message).toBe(
      "Your BMI suggests you're a healthy weight. Your ideal weight is between 63.3kgs - 85.2kgs."
    );
  });

  test('height of 165, weight of 82, 30.1', () => {
    const metricInformation: MetricInfo = {
      type: 'metric',
      cm: 165,
      kg: 82,
    };
    const bmi = calculateBMI(metricInformation);
    expect(bmi.bmi).toBe("30.1");
    expect(bmi.message).toBe(
      "Your BMI suggets you're obese. Your ideal weight is between 50.4kgs - 67.8kgs."
    );
  });
});
describe('calculate-bmi for imperial information', () => {
  test('height of 5ft 11, weight of 158, returns 22.0', () => {
    const imperialInformation: ImperialInfo = {
      type: 'imperial',
      feet: 5,
      inches: 11,
      stone: 11,
      lb: 4,
    };
    const bmi = calculateBMI(imperialInformation);
    expect(bmi.bmi).toBe("22.0");
    expect(bmi.message).toBe(
      "Your BMI suggests you're a healthy weight. Your ideal weight is between 9st 6lbs - 12st 10lbs."
    );
  });

  test('height of 5ft 5, weight of 181, returns 30.1', () => {
    const imperialInformation: ImperialInfo = {
      type: 'imperial',
      feet: 5,
      inches: 5,
      stone: 12,
      lb: 13,
    };
    const bmi = calculateBMI(imperialInformation);
    expect(bmi.bmi).toBe("30.1");
    expect(bmi.message).toBe(
      "Your BMI suggets you're obese. Your ideal weight is between 7st 13lbs - 10st 9lbs."
    );
  });
});
