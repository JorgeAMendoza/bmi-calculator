import styled from 'styled-components';

export const Container = styled.div`
  width: min(87%, 116rem);
  margin: 0 auto;
`;

export const MainHeading = styled.h1`
  font-size: clamp(4.8rem, 5vw + 1rem, 6.4rem);
  line-height: 1.1;
  font-weight: 600;
  color: var(--text-color);
`;

export const LargeHeading = styled.h2`
  font-size: clamp(3.2rem, 2.8vw + 1rem, 4.8rem);
  font-weight: 600;
`;

export const MediumHeading = styled.h3`
  font-size: clamp(2.4rem, 3.5vw + 1rem, 3.2rem);
  font-weight: 600;
`;

export const SmallHeading = styled.h4`
  font-size: 2rem;
  font-weight: 600;
`;

export const PageText = styled.p`
  hyphens: none;
  color: var(--dark-electric-blue);
`;
