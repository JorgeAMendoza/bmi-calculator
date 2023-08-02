import styled from 'styled-components';

const RadioLabel = styled.label`
  position: relative;
  text-transform: capitalize;
  display: block;
  cursor: pointer;
  user-select: none;
  padding-left: 5rem;
  font-weight: bold;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  span {
    position: absolute;
    top: -1px;
    left: 2px;
    padding: 0.9em;
    border: 1px solid var(--borders);
    border-radius: 50%;
  }

  span::after {
    content: '';
    position: absolute;
    display: none;
    left: 7px;
    top: 6px;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: var(--blue);
  }

  & input:checked ~ span::after {
    display: block;
  }

  &:hover input ~ span {
    outline: 1px solid var(--blue);
  }

  & input:checked ~ span {
    background-color: rgba(52, 95, 246, 0.15);
  }
`;
export default { RadioLabel };
