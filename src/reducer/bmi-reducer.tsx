import { MetricInfo, ImperialInfo } from '../types/bmi';
const digitRegex = /^\d{1,4}$/;

type MetricInput = Record<keyof MetricInfo, string>;
type ImperialInput = Record<keyof ImperialInfo, string>;
type Inputs = MetricInput & ImperialInput;
export type CalculatorState = {
  unit: 'metric' | 'imperial';
  bmi: number | null;
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

type UnitAction = { type: 'SET_UNIT'; payload: 'metric' | 'imperial' };

type CalculateAction = { type: 'CALCULATE_BMI' };

export type Action = InputAction | UnitAction | CalculateAction;

const reducer = (state: CalculatorState, action: Action) => {
  switch (action.type) {
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
    case 'SET_UNIT':
      return { ...state, unit: action.payload };
    case 'CALCULATE_BMI': {
      if (state.unit === 'metric') {
        const { cm, kg } = state;
        if (!cm || !kg) return state;

        if (!digitRegex.test(cm) || !digitRegex.test(kg)) return state;

        console.log('calculate bmi');
      }
      // if metric, grab cm and kg
      // if cm or kg are empty, just return;

      // if cm or kg are invalid, return;

      // else, calculate the bmi, and set bmi state to that.
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
