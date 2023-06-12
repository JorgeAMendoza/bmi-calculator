import styled from 'styled-components';
import {
  Container,
  LargeHeading,
  MainHeading,
  MediumHeading,
  PageText,
} from './styles/Utils.styled';

const App = styled.div``;

const HeadingOne = styled(MainHeading)`
  --text-color: var(--gun-metal);
  text-align: center;
  letter-spacing: -0.05em;
`;

const Header = styled.header`
  padding-top: 3.3rem;
  text-align: center;
  div > img {
    width: 4rem;
    height: 4rem;
    margin: 0 auto;
  }

  & > *:not(:first-child) {
    margin-top: 2.4rem;
  }

  & > *:last-child {
    margin-top: 4.8rem;
  }
`;

const MainContent = styled.main`
  margin-block-start: 7.8rem;

  /* & > *:not(:first-child) {
    margin-block-start: 4.8rem;
  } */
`;

const AboutResults = styled.section`
  ${LargeHeading} {
    font-size: 3.2rem;
    letter-spacing: -0.05em;
    line-height: 110%;

    & ~ ${PageText} {
      margin-top: 3rem;
    }
  }

  ${Container} {
    margin-block-start: 4.8rem;
  }

  ul {
    margin-block-start: 12.8rem;
    margin-left: -0.5rem;

    li {
      ${MediumHeading} {
        margin-block-start: 3rem;
        letter-spacing: -0.05em;
      }

      ${PageText} {
        margin-block-start: 1.8rem;
      }

      &:not(:last-of-type) {
        margin-block-end: 4rem;
      }
    }
  }
`;

const BMILimitations = styled.section`
  margin-block-start: 12.9rem;
  border: 1px solid red;
  & ${LargeHeading} {
    letter-spacing: -0.05em;
    line-height: 110%;
  }
`;

const BMILimitationsIntro = styled.div`
  text-align: center;

  p {
    margin-block-start: 3rem;
  }
`;
export default {
  App,
  Header,
  HeadingOne,
  MainContent,
  AboutResults,
  BMILimitations,
  BMILimitationsIntro,
};
