import styled from 'styled-components';
import {
  Container,
  LargeHeading,
  MainHeading,
  MediumHeading,
  PageText,
} from './styles/Utils.styled';
import device from './styles/device';

// Utils
const CurvedLine = styled.img`
  position: absolute;
  width: auto;
  display: none;

  @media screen and (${device.laptop}) {
    display: block;
  }
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

  @media screen and (${device.laptop}) {
    margin-block-start: 18rem;
  }
`;
// About BMI Results Section

const AboutResults = styled.section`
  position: relative;

  ${CurvedLine} {
    right: 16.9rem;
    top: -5.3rem;
  }

  ${LargeHeading} {
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
        margin-block-start: 1.9rem;
      }

      &:not(:last-of-type) {
        margin-block-end: 4rem;
      }
    }
  }

  @media screen and (${device.laptop}) {
    ul {
      display: grid;
      margin-block-start: 16.6rem;
      margin-left: 0;
      grid-template-columns: repeat(auto-fill, minmax(36.5rem, 1fr));
      gap: 3rem;

      li {
        ${MediumHeading} {
          margin-block-start: 4.2rem;
        }
      }
    }
  }
`;

const AboutImageMobile = styled.img`
  @media screen and (${device.laptop}) {
    display: none;
  }
`;

const AboutImageDesktop = styled.div`
  display: none;

  @media screen and (${device.laptop}) {
    display: block;
  }
`;

const AboutResultsInfo = styled.div`
  @media screen and (${device.laptop}) {
    display: flex;

    & > * {
      width: 50%;
    }

    & > *:first-child {
      width: 48.5%;
    }

    /* text information */
    & > *:last-child {
      width: 40%;
      align-self: end;
      margin-left: 13.2rem;
      margin-bottom: 4.4rem;
    }
  }
`;

// BMI Limitations
const BMILimitationsIntro = styled.div`
  text-align: center;

  p {
    margin-block-start: 3rem;
  }

  @media screen and (${device.laptop}) {
    text-align: left;
  }
`;

const BMILimitations = styled.section`
  margin-block-start: 12.9rem;
  margin-block-end: 10rem;
  position: relative;

  ${CurvedLine} {
    top: 25rem;
    left: 30.5rem;
  }

  & ${LargeHeading} {
    letter-spacing: -0.05em;
    line-height: 110%;
  }

  @media screen and (${device.laptop}) {
    margin-block-start: 17.9rem;

    ${Container} {
      display: grid;
      grid-template-columns: repeat(12, minmax(0, 1fr));
      grid-template-rows: auto;
      gap: 2.9rem;
    }

    ${BMILimitationsIntro} {
      grid-column: 1 / 7;
    }
  }
`;

export default {
  Header,
  HeadingInfo,
  HeaderContent,
  MainContent,
  CurvedLine,
  AboutResults,
  AboutImageMobile,
  AboutImageDesktop,
  AboutResultsInfo,
  BMILimitations,
  BMILimitationsIntro,
};
