import { Action } from '../../reducer/bmi-reducer';

interface InputProps {
  val: string;
  dispatch: React.Dispatch<Action>;
  action: Exclude<Action['type'], 'SET_UNIT' | 'CALCULATE_BMI'>;
  testId: string;
  name: string;
}

const Input = ({ val, dispatch, name, testId, action }: InputProps) => {
  return (
    <div>
      <label data-cy={testId}>
        <input
          type="text"
          id={name}
          name={name}
          value={val}
          onChange={(e) => dispatch({ type: action, payload: e.target.value })}
          maxLength={3}
          placeholder="0"
        />
        <p>{name}</p>
      </label>
    </div>
  );
};

export default Input;
