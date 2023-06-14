import styled from 'styled-components';
import { SmallHeading } from '../../styles/Utils.styled';

const LimitationCard = styled.div`
  filter: drop-shadow(16px 32px 56px rgba(143, 174, 207, 0.25));
  background-color: #fff;
  border-radius: 16px;
  padding: 1.5em;

  & ${SmallHeading} {
    letter-spacing: -0.05em;
  }
`;

const Title = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  margin-block-end: 1.5rem;
`;

export default { LimitationCard, Title };
