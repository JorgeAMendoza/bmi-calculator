import styled from 'styled-components';
import device from '../../styles/device';

const BMICalculator = styled.form`
  border-radius: 16px;
  padding: 1.3em 1.4em;
  text-align: left;
  background-color: var(--white);
  box-shadow: 16px 32px 56px rgba(143, 174, 207, 0.25);
  width: min(100%, 45rem);
  margin: 0 auto;

  & > *:not(:last-child) {
    margin-bottom: 2.3rem;
  }

  @media screen and (${device.laptop}) {
    width: 100%;
    padding: 1.9em;

    & > *:not(:last-child) {
      margin-bottom: 3.4rem;
    }
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

  @media screen and (${device.laptop}) {
    gap: 15.9rem;
  }
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

  @media screen and (${device.laptop}) {
    display: flex;
    gap: 2.6rem;
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
  margin-top: -1.6rem;

  @media screen and (${device.laptop}) {
    border-radius: 10px 150px 150px 10px;
    padding: 1.8em 2em;
  }
`;

const BMIResult = styled.div`
  p > span {
    font-size: 4.8rem;
    font-weight: 600;
    letter-spacing: -0.03em;
  }
  p:last-of-type {
    font-weight: 400;
    font-size: 1.4rem;
    padding-top: 1.2rem;
  }

  @media screen and (${device.laptop}) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p > span {
      font-size: 6.4rem;
      line-height: 1.4;
    }

    p:last-of-type {
      text-align: left;
      width: 50%;
      padding: 0;
      padding-left: 1.2rem;
    }
  }
`;

const WelcomeMessage = styled.div`
  p {
    font-size: 2.4rem;
    font-weight: 600;
    letter-spacing: -0.05em;
  }

  p:last-of-type {
    font-weight: 400;
    font-size: 1.4rem;
    letter-spacing: default;
  }

  @media screen and (${device.laptop}) {
    p:last-of-type {
      padding-top: 1.2rem;
    }
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
