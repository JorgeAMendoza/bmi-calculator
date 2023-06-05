import { useReducer, useEffect } from 'react';
import Input from '../HookForm/Input';
import BMIReducer, { CalculatorState } from '../../reducer/bmi-reducer';
import RadioInput from '../HookForm/RadioInput';
import Styled from './BMICalculator.styled';

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
    <Styled.BMICalculator>
      <Styled.CalculatorTitle>Enter your details below</Styled.CalculatorTitle>

      <Styled.UnitSelect>
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
      </Styled.UnitSelect>

      {/* for metric input */}
      {unit === 'metric' ? (
        <Styled.FormInput>
          {/* height */}
          <div>
            <Styled.InputTitle>height</Styled.InputTitle>
            <div>
              <Input
                val={cm}
                dispatch={dispatch}
                action="SET_CM"
                testId="cmInput"
                name="cm"
              />
            </div>
          </div>

          {/* weight */}
          <div>
            <Styled.InputTitle>weight</Styled.InputTitle>
            <div>
              <Input
                val={kg}
                dispatch={dispatch}
                action="SET_KG"
                testId="kgInput"
                name="kg"
              />
            </div>
          </div>
        </Styled.FormInput>
      ) : (
        <Styled.FormInput>
          {/* height */}
          <div>
            <Styled.InputTitle>height</Styled.InputTitle>
            <Styled.InputArea>
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
            </Styled.InputArea>
          </div>

          {/* weight */}
          <div>
            <Styled.InputTitle>weight</Styled.InputTitle>
            <Styled.InputArea>
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
                name="lbs"
              />
            </Styled.InputArea>
          </div>
        </Styled.FormInput>
      )}

      <Styled.Result aria-live="polite">
        {bmiInfo !== null ? (
          <Styled.BMIResult>
            <p>
              Your BMI is... <br />
              <span data-cy="bmiScore">{bmiInfo.bmi}</span>
            </p>
            <p data-cy="bmiResultText">{bmiInfo.message}</p>
          </Styled.BMIResult>
        ) : (
          <Styled.WelcomeMessage>
            <p>Welcome</p>
            <p>
              Enter your height and weight and you&#39;ll see your BMI result
              here
            </p>
          </Styled.WelcomeMessage>
        )}
      </Styled.Result>
    </Styled.BMICalculator>
  );
};

export default BMICalculator;
