import { BmiArgs } from '../types/bmi';

const calculateBMI = (info: BmiArgs): { bmi: string; message: string } => {
  if (info.type === 'metric') {
    const { cm, kg } = info;
    const meters = cm / 100;
    const bmi = kg / (meters * meters);
    const idealMinWeight = 18.5 * meters * meters;
    const idealMaxWeight = 24.9 * meters * meters;
    const results = { bmi: bmi.toFixed(1) };
    if (bmi < 18.5) {
      return {
        ...results,
        message: `Your BMI suggests you're underweight. Your ideal weight is between ${idealMinWeight.toFixed(
          2
        )}kgs - ${idealMaxWeight.toFixed(2)}kgs.`,
      };
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return {
        ...results,
        message: `Your BMI suggests you're a healthy weight. Your ideal weight is between ${idealMinWeight.toFixed(
          idealMinWeight
        )}kgs - ${idealMaxWeight.toFixed(idealMaxWeight)}kgs.`,
      };
    } else if (bmi >= 25 && bmi <= 29.9) {
      return {
        ...results,
        message: `Your BMI suggets you're overweight. Your ideal weight is between ${idealMinWeight.toFixed(
          idealMinWeight
        )}kgs - ${idealMaxWeight.toFixed(idealMaxWeight)}kgs.`,
      };
    } else {
      return {
        ...results,
        message: `Your BMI suggets you're obese. Your ideal weight is between ${idealMinWeight.toFixed(
          idealMinWeight
        )}kgs - ${idealMaxWeight.toFixed(idealMaxWeight)}kgs.`,
      };
    }
  }

  const { stone, lb, feet, inches } = info;
  const totalInches = feet * 12 + inches;
  const bmi = ((lb + stone * 14) / (totalInches * totalInches)) * 703;
  const idealMinWeight = Math.floor((18.5 * (totalInches * totalInches)) / 703);
  const idealMaxWeight = Math.floor((24.9 * (totalInches * totalInches)) / 703);
  const minStone = Math.floor(idealMinWeight / 14);
  const minPounds = Math.floor(idealMinWeight % 14);
  const maxStone = Math.floor(idealMaxWeight / 14);
  const maxPounds = Math.floor(idealMaxWeight % 14);
  const results = { bmi: bmi.toFixed(1) };
  if (bmi < 18.5) {
    return {
      ...results,
      message: `Your BMI suggests you're underweight. Your ideal weight is between ${minStone}st ${minPounds}lbs - ${maxStone}st ${maxPounds}lbs.`,
    };
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return {
      ...results,
      message: `Your BMI suggests you're a healthy weight. Your ideal weight is between ${minStone}st ${minPounds}lbs - ${maxStone}st ${maxPounds}lbs.`,
    };
  } else if (bmi >= 25 && bmi <= 29.9) {
    return {
      ...results,
      message: `Your BMI suggets you're overweight. Your ideal weight is between ${minStone}st ${minPounds}lbs - ${maxStone}st ${maxPounds}lbs.`,
    };
  } else {
    return {
      ...results,
      message: `Your BMI suggets you're obese. Your ideal weight is between ${minStone}st ${minPounds}lbs - ${maxStone}st ${maxPounds}lbs.`,
    };
  }
};

export default calculateBMI;
