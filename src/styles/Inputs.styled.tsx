import styled from 'styled-components';

export const TextInput = styled.div`
  --labelText: var(--dark-electric-blue);
  --inputIndicator: var(--blue);
  --inputText: var(--gun-metal);
  --inputBorder: var(--borders);
  --inputBorderActive: var(--blue);

  input {
    outline: 1px solid var(--inputBorder);
    color: var(--inputText);

    &:focus {
      outline: 1px solid var(--inputBorderActive);
    }
  }

  label {
    color: var(--labelText);

    p {
      color: var(--inputIndicator);
    }
  }
`;

export const RaidioButton = styled.div`
    --labelText: var(--dark-electric-blue);
    --inputFocus: var(--blue);
`;
