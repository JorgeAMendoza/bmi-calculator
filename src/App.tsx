import bmiLogo from './assets/images/logo.svg';
import BmiCalculator from './components/BMICalculator/BMICalculator';
import manEatingPhoto from './assets/images/image-man-eating.webp';
import sleepIcon from './assets/images/icon-sleep.svg';
import eatingIcon from './assets/images/icon-eating.svg';
import exerciseIcon from './assets/images/icon-exercise.svg';
import genderIcon from './assets/images/icon-gender.svg';
import ageIcon from './assets/images/icon-age.svg';
import muscleIcon from './assets/images/icon-muscle.svg';
import pregnancyIcon from './assets/images/icon-pregnancy.svg';
import raceIcon from './assets/images/icon-race.svg';
import Styled from './App.styled';
import {
  Container,
  LargeHeading,
  MediumHeading,
  PageText,
} from './styles/Utils.styled';

function App() {
  return (
    <Styled.App>
      <Container>
        <Styled.Header>
          <div>
            <img src={bmiLogo} alt="BMI Calculator Logo" />
          </div>

          <Styled.HeadingOne>Body Mass Index Calculator</Styled.HeadingOne>
          <p>
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>

          <BmiCalculator />
        </Styled.Header>
      </Container>

      <Styled.MainContent>
        <Styled.AboutResults>
          <div>
            <img src={manEatingPhoto} alt="phot of man eating food" />
          </div>
          <Container>
            <LargeHeading>What your BMI result means</LargeHeading>
            <PageText>
              A BMI range of 18.5 to 24.9 is considered a &#39;healthy
              weight.&#39; Maintaining a healthy weight may lower your chances
              of experiencing health issues later on, such as obesity and type 2
              diabetes. Aim for a nutritious diet with reduced fat and sugar
              content, incorporating ample fruits and vegetables. Additionally,
              strive for regular physical activity, ideally about 30 minutes
              daily for five days a week.
            </PageText>

            <ul>
              <li>
                <div>
                  <img src={eatingIcon} alt="eating icon" />
                </div>
                <MediumHeading>Healthy eating</MediumHeading>
                <PageText>
                  Healthy eating promotes weight control, disease prevention,
                  better digestion, immunity, mental clarity, and mood.
                </PageText>
              </li>
              <li>
                <div>
                  <img src={exerciseIcon} alt="exercise icon" />
                </div>
                <MediumHeading>Regular exercise</MediumHeading>
                <PageText>
                  Exercise improves fitness, aids weight control, elevates mood,
                  and reduces disease risk, fostering wellness and longevity.
                </PageText>
              </li>
              <li>
                <div>
                  <img src={sleepIcon} alt="sleep icon" />
                </div>
                <MediumHeading>Adequate sleep</MediumHeading>
                <PageText>
                  Sleep enhances mental clarity, emotional stability, and
                  physical wellness, promoting overall restoration and
                  rejuvenation.
                </PageText>
              </li>
            </ul>
          </Container>
        </Styled.AboutResults>

        <section>
          <div>
            <h2>Limitations of BMI</h2>
            <p>
              Although BMI is often a practical indicator of healthy weight, it
              is not suited for every person. Specific groups should carefully
              consider their BMI outcomes, and in certain cases, the measurement
              may not be beneficial to use.
            </p>
          </div>

          <div>
            <div>
              <div>
                <img src={genderIcon} alt="gender icon" />
              </div>
              <h3>Gender</h3>
            </div>
            <p>
              The development and body fat composition of girls and boys vary
              with age. Consequently, a child&#39;s age and gender are
              considered when evaluating their BMI.
            </p>
          </div>

          <div>
            <div>
              <div>
                <img src={ageIcon} alt="age icon" />
              </div>
              <h3>Age</h3>
            </div>
            <p>
              In aging individuals, increased body fat and muscle loss may cause
              BMI to underestimate body fat content.
            </p>
          </div>

          <div>
            <div>
              <div>
                <img src={muscleIcon} alt="muscle icon" />
              </div>
              <h3>Muscle</h3>
            </div>
            <p>
              BMI may misclassify muscular individuals as overweight or obese,
              as it doesn&#39;t differentiate muscle from fat.
            </p>
          </div>

          <div>
            <div>
              <div>
                <img src={pregnancyIcon} alt="pregnancy icon" />
              </div>
              <h3>Pregnancy</h3>
            </div>
            <p>
              Expectant mothers experience weight gain due to their growing
              baby. Maintaining a healthy pre-pregnancy BMI is advisable to
              minimise health risks for both mother and child.
            </p>
          </div>

          <div>
            <div>
              <div>
                <img src={raceIcon} alt="race icon" />
              </div>
              <h3>Race</h3>
            </div>
            <p>
              Certain health concerns may affect individuals of some Black and
              Asian origins at lower BMIs than others. To learn more, it is
              advised to discuss this with your GP or practice nurse.
            </p>
          </div>
        </section>
      </Styled.MainContent>
    </Styled.App>
  );
}

export default App;
