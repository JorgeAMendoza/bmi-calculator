import calculateBmi from '../lib/calculate-bmi';
import { MetricInfo, ImperialInfo, BmiArgs } from '../types/bmi';
const digitRegex = /^\d{1,4}$/;

type MetricInput = Record<keyof MetricInfo, string>;
type ImperialInput = Record<keyof ImperialInfo, string>;
type Inputs = MetricInput & ImperialInput;
export type CalculatorState = {
  unit: 'metric' | 'imperial';
  bmiInfo: { bmi: string; message: string } | null;
} & Omit<Inputs, 'type'>;

type InputAction = {
  type:
    | 'SET_CM'
    | 'SET_KG'
    | 'SET_FEET'
    | 'SET_INCHES'
    | 'SET_LB'
    | 'SET_STONE';
  payload: string;
};

type UnitAction = { type: 'SET_UNIT' };

type CalculateAction = { type: 'CALCULATE_BMI' };

export type Action = InputAction | UnitAction | CalculateAction;

const reducer = (state: CalculatorState, action: Action): CalculatorState => {
  switch (action.type) {
    case 'SET_UNIT': {
      if (state.unit === 'metric') {
        return {
          ...state,
          unit: 'imperial',
          cm: '',
          kg: '',
          bmiInfo: null,
        };
      }

      return {
        ...state,
        unit: 'metric',
        feet: '',
        inches: '',
        lb: '',
        stone: '',
        bmiInfo: null,
      };
    }
    case 'SET_CM':
      return { ...state, cm: action.payload };
    case 'SET_KG':
      return { ...state, kg: action.payload };
    case 'SET_FEET':
      return { ...state, feet: action.payload };
    case 'SET_INCHES':
      return { ...state, inches: action.payload };
    case 'SET_LB':
      return { ...state, lb: action.payload };
    case 'SET_STONE':
      return { ...state, stone: action.payload };
    case 'CALCULATE_BMI': {
      if (state.unit === 'metric') {
        const { cm, kg } = state;
        if (!cm || !kg) return state;

        if (!digitRegex.test(cm) || !digitRegex.test(kg)) return state;

        const info: BmiArgs = {
          type: 'metric',
          cm: parseInt(cm),
          kg: parseInt(kg),
        };

        const bmi = calculateBmi(info);
        if (Number(bmi.bmi) > 100) return state;

        return { ...state, bmiInfo: bmi };
      }

      const { feet, inches, lb, stone } = state;
      if (!feet || !inches || !lb || !stone) return state;

      if (
        !digitRegex.test(feet) ||
        !digitRegex.test(inches) ||
        !digitRegex.test(lb) ||
        !digitRegex.test(stone)
      )
        return state;

      const info: BmiArgs = {
        type: 'imperial',
        feet: parseInt(feet),
        inches: parseInt(inches),
        lb: parseInt(lb),
        stone: parseInt(stone),
      };

      const bmi = calculateBmi(info);
      if (Number(bmi.bmi) > 100) return state;

      return { ...state, bmiInfo: bmi };
    }
    default:
      return state;
  }
};

export default reducer;
