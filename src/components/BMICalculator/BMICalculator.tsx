import { useReducer, useEffect } from 'react';
import Input from '../HookForm/Input';
import BMIReducer, { CalculatorState } from '../../reducer/bmi-reducer';

const initialState: CalculatorState = {
  unit: 'metric',
  cm: '',
  kg: '',
  feet: '',
  inches: '',
  lb: '',
  stone: '',
  bmiInfo: null,
};

const BMICalculator = () => {
  const [{ cm, kg, feet, inches, lb, stone, unit, bmiInfo }, dispatch] =
    useReducer(BMIReducer, { ...initialState });

  useEffect(() => {
    dispatch({ type: 'CALCULATE_BMI' });
  }, [cm, kg]);
  return (
    <div>
      <p>Enter your details below</p>
      <form>
        <div>
          <label>
            <input type="radio" id="metric" name="units" value="metric" />
            Metric
          </label>
          <label>
            <input type="radio" id="imperial" name="units" value="imperial" />
            Imperial
          </label>
        </div>

        {/* for metric input */}
        {unit === 'metric' ? (
          <div>
            <p>metric form</p>
            {/* height */}
            <p>height</p>
            <Input
              val={cm}
              dispatch={dispatch}
              action="SET_CM"
              testId="cmSelect"
              name="cm"
            />
            {/* weight */}
            <p>weight</p>
            <Input
              val={kg}
              dispatch={dispatch}
              action="SET_KG"
              testId="kgSelect"
              name="kg"
            />
          </div>
        ) : (
          <div>
            <p>imperial form</p>
            {/* height */}
            {/* <Input /> */}
            {/* <Input /> */}

            {/* weight */}

            {/* <Input /> */}
            {/* <Input /> */}
          </div>
        )}
      </form>
      <p>{bmiInfo !== null ? <>{bmiInfo.bmi}</> : 'no bmi'}</p>
    </div>
  );
};

export default BMICalculator;
