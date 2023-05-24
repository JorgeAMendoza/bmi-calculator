import { Action, CalculatorState } from '../../reducer/bmi-reducer';

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
      <label data-cy={testId}>
        <input
          type="radio"
          id={name}
          value={name}
          onChange={() => {
            dispatch({ type: action });
          }}
          checked={val === name}
        />
        {name}
      </label>
    </div>
  );
};

export default RadioInput;
