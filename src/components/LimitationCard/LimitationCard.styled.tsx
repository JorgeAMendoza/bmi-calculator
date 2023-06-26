import styled from 'styled-components';
import { SmallHeading } from '../../styles/Utils.styled';
import device from '../../styles/device';

const LimitationCard = styled.div`
  filter: drop-shadow(16px 32px 56px rgba(143, 174, 207, 0.25));
  background-color: #fff;
  border-radius: 16px;
  padding: 1.5em;

  & ${SmallHeading} {
    letter-spacing: -0.05em;
  }

  &[data-limitation='gender'] {
    margin-block-start: 5.8rem;
  }

  &:not([data-limitation='race']) {
    margin-block-end: 1.7rem;
  }

  @media screen and (${device.laptop}) {
    padding: 2em 2.1em;
    &[data-limitation='gender'] {
      margin-block-start: 0;
      grid-column: 8 / 12;
    }

    &[data-limitation='age'] {
      grid-column: 5/9;
    }

    &[data-limitation='muscle'] {
      grid-column: 9/13;
    }

    &[data-limitation='pregnancy'] {
      grid-column: 3/7;
    }

    &[data-limitation='race'] {
      grid-column: 7/11;
    }

    &[data-limitation] {
      margin-block-end: 0;
    }
  }
`;

const Title = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-block-end: 1.5rem;
`;

export default { LimitationCard, Title };
