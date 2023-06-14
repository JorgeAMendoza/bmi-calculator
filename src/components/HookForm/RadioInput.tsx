import { Action, CalculatorState } from '../../reducer/bmi-reducer';
import Styled from './RadioInput.styled';

interface RadioInputProps {
  val: CalculatorState['unit'];
  dispatch: React.Dispatch<Action>;
  action: Extract<Action['type'], 'SET_UNIT'>;
  testId: string;
  name: 'metric' | 'imperial';
}
const RadioInput = ({
  val,
  dispatch,
  action,
  testId,
  name,
}: RadioInputProps) => {
  return (
    <div>
      <Styled.RadioLabel data-cy={testId}>
        {name}
        <input
          type="radio"
          id={name}
          value={name}
          onChange={() => {
            dispatch({ type: action });
          }}
          checked={val === name}
        />
        <span></span>
      </Styled.RadioLabel>
    </div>
  );
};

export default RadioInput;
