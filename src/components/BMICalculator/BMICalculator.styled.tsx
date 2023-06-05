import styled from 'styled-components';

const BMICalculator = styled.form`
  border-radius: 16px;
  padding: 1.3em 1.4em;
  text-align: left;
  background-color: var(--white);

  & > *:not(:last-child) {
    margin-bottom: 2.3rem;
  }
`;

const CalculatorTitle = styled.h2`
  font-size: 2.4rem;
  color: var(--gun-metal);
  font-weight: 600;
  letter-spacing: -0.05em;
`;

const UnitSelect = styled.div`
  display: flex;
  gap: 5.1rem;
`;

const InputTitle = styled.p`
  text-transform: capitalize;
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
`;

const FormInput = styled.div`
  margin-block-start: 2.9rem;

  & > *:not(:last-child) {
    margin-block-end: 1.5rem;
  }
`;

const InputArea = styled.div`
  display: flex;
  gap: 1.6rem;
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

const BMIResult = styled.div`
  p > span {
    font-size: 4.8rem;
    font-weight: 600;
    letter-spacing: -0.03em;
  }
  p:last-of-type {
    font-weight: 400;
    border: 1px solid red;
    font-size: 1.4rem;
    padding-top: 1.2rem;
  }
`;

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
  UnitSelect,
  FormInput,
  InputArea,
  Result,
  WelcomeMessage,
  BMIResult,
  InputTitle,
};
