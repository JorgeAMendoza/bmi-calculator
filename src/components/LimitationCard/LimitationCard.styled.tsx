import styled from 'styled-components';

const LimitationCard = styled.div`
  filter: drop-shadow(16px 32px 56px rgba(143, 174, 207, 0.25));
  background-color: #fff;
  border-radius: 16px;
  padding: 1.5em;
`;

const Title = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  margin-block-end: 1.5rem;
`;

export default { LimitationCard, Title };
