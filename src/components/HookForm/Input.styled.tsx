import styled from 'styled-components';

const InputContainer = styled.div`
  outline: 1px solid var(--borders);
  border-radius: 12px;
  height: 6.9rem;
`;

const InputLabel = styled.label`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 1.5em;

  p {
    color: var(--blue);
    font-weight: 700;
    font-size: 2.4rem;
  }
`;

const Input = styled.input`
  width: 100%;
  font-size: 2.4rem;
  font-weight: bold;
  color: var(--gun-metal);
  outline: transparent;
`;

export default { InputContainer, Input, InputLabel };
