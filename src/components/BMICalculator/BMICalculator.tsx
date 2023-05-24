import { useReducer, useEffect } from 'react';
import Input from '../HookForm/Input';
import BMIReducer, { CalculatorState } from '../../reducer/bmi-reducer';
import RadioInput from '../HookForm/RadioInput';

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
  }, [cm, kg, feet, inches, lb, stone]);
  return (
    <div>
      <p>Enter your details below</p>
      <form>
        <div>
          <RadioInput
            val={unit}
            dispatch={dispatch}
            action="SET_UNIT"
            name="metric"
            testId="metricSelect"
          />
          <RadioInput
            val={unit}
            dispatch={dispatch}
            action="SET_UNIT"
            name="imperial"
            testId="imperialSelect"
          />
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
              testId="cmInput"
              name="cm"
            />
            {/* weight */}
            <p>weight</p>
            <Input
              val={kg}
              dispatch={dispatch}
              action="SET_KG"
              testId="kgInput"
              name="kg"
            />
          </div>
        ) : (
          <div>
            <p>imperial form</p>
            {/* height */}
            <Input
              val={feet}
              dispatch={dispatch}
              action="SET_FEET"
              name="ft"
              testId="ftInput"
            />
            <Input
              val={inches}
              dispatch={dispatch}
              action="SET_INCHES"
              testId="inInput"
              name="in"
            />

            {/* weight */}

            <Input
              val={stone}
              dispatch={dispatch}
              action="SET_STONE"
              testId="stInput"
              name="st"
            />
            <Input
              val={lb}
              dispatch={dispatch}
              action="SET_LB"
              testId="lbInput"
              name="lb"
            />
          </div>
        )}
      </form>
      <div aria-live="polite">
        {bmiInfo !== null ? (
          <>
            <p>
              Your BMI is... <br />
              <span data-cy="bmiScore">{bmiInfo.bmi}</span>
            </p>
            <p data-cy="bmiResultText">{bmiInfo.message}</p>
          </>
        ) : (
          <>
            <p>Welcome</p>
            <p>
              Enter your height and weight and you&#39;ll see your BMI result
              here
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
