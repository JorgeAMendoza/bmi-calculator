import styled from 'styled-components';
import {
  Container,
  LargeHeading,
  MainHeading,
  MediumHeading,
  PageText,
} from './styles/Utils.styled';
import device from './styles/device';

const App = styled.div``;

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

  @media screen and (${device.laptop}) {
    text-align: left;
    padding-top: 7.4rem;
    div > img {
      margin: 0;
      width: 6.4rem;
      height: 6.4rem;
    }
  }
`;

const HeaderContent = styled.div`
  & > *:last-child {
    margin-top: 4.8rem;
  }

  ${MainHeading} {
    --text-color: var(--gun-metal);
    text-align: center;
    letter-spacing: -0.05em;
  }

  @media screen and (${device.laptop}) {
    border: 1px solid red;
    display: flex;
    justify-content: space-between;

    & > *:last-child {
      margin: 0;
      margin-top: 1.6rem;
    }

    & > * {
      width: 50%;
    }

    & > *:last-child {
      width: 48.5%;
    }

    ${MainHeading} {
      text-align: left;
    }
  }
`;

const HeadingInfo = styled.div`
  & ${PageText} {
    margin-top: 2.4rem;
  }

  @media screen and (${device.laptop}) {
    margin-block-start: 10.5rem;

    & ${MainHeading} {
      width: 80%;
    }

    & ${PageText} {
      width: 81%;
      margin-top: 3.4rem;
    }
  }
`;

const MainContent = styled.main`
  margin-block-start: 7.8rem;
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
  margin-block-end: 10rem;
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

const BMILimitationList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-block-start: 5.9rem;
`;

export default {
  App,
  Header,
  HeadingInfo,
  HeaderContent,
  MainContent,
  AboutResults,
  BMILimitations,
  BMILimitationsIntro,
  BMILimitationList,
};
