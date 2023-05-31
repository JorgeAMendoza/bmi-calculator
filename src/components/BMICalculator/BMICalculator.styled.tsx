import styled from 'styled-components';

const BMICalculator = styled.form`
  border-radius: 16px;
  padding: 1.3em 1.4em;
  text-align: left;

  & > *:not(:last-child) {
    margin-bottom: 2.3rem;
  }
`;

const CalculatorTitle = styled.h2`
  font-size: 2.4rem;
  color: var(--gun-metal);
  font-weight: 600;
  letter-spacing: -0.05em;
  word-spacing: -0.1em;
`;

const Form = styled.form``;

const UnitSelect = styled.div`
  display: flex;
  gap: 5.1rem;
`;

const FormInput = styled.div``;

const InputArea = styled.div`
  display: flex;

  & > * {
    flex-grow: 1;
  }
`;

const Result = styled.div`
  background: linear-gradient(90deg, #345ff7 0%, #587dff 100%);
  padding: 2em;
  color: var(--white);
  border-radius: 16px;
`;

const BMIResult = styled.div``;

const WelcomeMessage = styled.div`
  p {
    font-size: 2.4rem;
    font-weight: 600;
  }

  p:last-of-type {
    font-weight: 400;
    font-size: 1.4rem;
    letter-spacing: default;
  }
`;

export default {
  BMICalculator,
  CalculatorTitle,
  Form,
  UnitSelect,
  FormInput,
  InputArea,
  Result,
  WelcomeMessage,
  BMIResult,
};
