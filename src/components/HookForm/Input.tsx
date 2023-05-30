import { Action } from '../../reducer/bmi-reducer';
import Styled from './Input.styled';

interface InputProps {
  val: string;
  dispatch: React.Dispatch<Action>;
  action: Exclude<Action['type'], 'SET_UNIT' | 'CALCULATE_BMI'>;
  testId: string;
  name: string;
}

const Input = ({ val, dispatch, name, testId, action }: InputProps) => {
  return (
    <Styled.InputContainer>
      <Styled.InputLabel data-cy={testId}>
        <Styled.Input
          type="text"
          id={name}
          name={name}
          value={val}
          onChange={(e) => dispatch({ type: action, payload: e.target.value })}
          maxLength={3}
          placeholder="0"
        />
        <p>{name}</p>
      </Styled.InputLabel>
    </Styled.InputContainer>
  );
};

export default Input;
