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
  bmi: null,
};

const BMICalculator = () => {
  const [state, dispatch] = useReducer(BMIReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'CALCULATE_BMI' });
  }, [state]);
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
        {state.unit === 'metric' ? (
          <div>
            <p>metric form</p>
            {/* height */}
            <p>height</p>
            <Input
              val={state.cm}
              dispatch={dispatch}
              action="SET_CM"
              testId="cmSelect"
              name="cm"
            />
            {/* weight */}
            <p>weight</p>
            <Input
              val={state.kg}
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

        {/* for imperial input */}
      </form>
    </div>
  );
};

export default BMICalculator;
