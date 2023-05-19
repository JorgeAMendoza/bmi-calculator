import { MetricInfo, ImperialInfo } from '../types/bmi';

interface Input {
  value: number;
  error: boolean;
}

type MetricInput = Record<keyof MetricInfo, Input>;
type ImperialInput = Record<keyof ImperialInfo, Input>;
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
  payload: number;
};

type UnitAction = { type: 'SET_UNIT'; payload: 'metric' | 'imperial' };

type CalculateAction = { type: 'CALCULATE_BMI' };

type Action = InputAction | UnitAction | CalculateAction;

const reducer = (state: CalculatorState, action: Action) => {
  switch (action.type) {
    case 'SET_CM':
      return { ...state, cm: { value: action.payload, error: false } };
    case 'SET_KG':
      return { ...state, kg: { value: action.payload, error: false } };
    case 'SET_FEET':
      return { ...state, feet: { value: action.payload, error: false } };
    case 'SET_INCHES':
      return { ...state, inches: { value: action.payload, error: false } };
    case 'SET_LB':
      return { ...state, lb: { value: action.payload, error: false } };
    case 'SET_STONE':
      return { ...state, stone: { value: action.payload, error: false } };
    case 'SET_UNIT':
      return { ...state, unit: action.payload };
    case 'CALCULATE_BMI': {
      // grab unit
      // if metric
      // confirm that cm and kg are valid
      // call calculate bmi
      // set bmi
      // return state with bmi updated

      // repeat steps for imperial
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
