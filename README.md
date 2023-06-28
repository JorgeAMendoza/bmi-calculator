# BMI Calculator

Design, assets, and requirements provided thanks to [FrontEndMentor](https://www.frontendmentor.io/challenges/body-mass-index-calculator-brrBkfSz1T)

The project requirement is to create a working BMI calculator that returns the results in either metric or imperial form depending on user preference. The rest of the page includes an explanation of the results, attributes that effect a BMI result, and the limitations of using BMI as a health indicator.

My attempt of the challenge focuses on testing the application for errors and the implementation of a responsive design.

## Techstack

This project was bootstrapped with [Vite](https://vitejs.dev/guide/) using the the React/Typescript template. The project is linted with [ESLint](https://eslint.org/docs/latest/user-guide/getting-started) using react, prettier, cypress, and the [jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) rules.

Some of the tools and libraries used in this project include:

- [React](https://react.dev/), a JavaScript library for building user interfaces
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress), a JavaScript testing library for creating end-to-end and unit tests
- [Styled Components](https://styled-components.com/), a CSS-in-JS tool for styling React components
- [TypeScript](https://www.typescriptlang.org/docs/), a typed superset of JavaScript that compiles to plain JavaScript
- [Vitest](https://vitest.dev/), a vite-native unit testing framework

## Installation and Usage

To run the application locally, please follow the steps below:

1. Cloen the repository to your local machine with the `git clone https://github.com/JorgeAMendoza/bmi-calculator.git` command, and `cd` into the project directory.
2. Install the dependencies with `npm install`.
3. Run the application with `npm run dev` and navigate to `localhost:3000` in your browser.

## Development

This section discusses the development process of the application, and the various challenges that were encountered.

### Calculating BMI

One of initial problems I had with the application was that I could not determine what would be the best way to handle the state of the [`BMICalculator.tsx`](./src/components/BMICalculator/BMICalculator.tsx) component. I initally planned to use [`react-hook-form`](https://react-hook-form.com/) to handle the form, but I was having trouble integrating the _metric_ and _imperial_ aspects of the calculator into one _form_. I believed that creating two seperate instances of the calculator state (imperial/metric) was not necessary.

#### useReducer

To resolve this, I decided to use the [`useReducer`](https://reactjs.org/docs/hooks-reference.html#usereducer) hook. See the reducer function below:

```typescript
type MetricInput = Record<keyof MetricInfo, string>;
type ImperialInput = Record<keyof ImperialInfo, string>;
type Inputs = MetricInput & ImperialInput;
export type CalculatorState = {
  unit: 'metric' | 'imperial';
  bmiInfo: { bmi: string; message: string } | null;
} & Omit<Inputs, 'type'>;

type InputAction = {
  type:
    | 'SET_CM'
    | 'SET_KG'
    | 'SET_FEET'
    | 'SET_INCHES'
    | 'SET_LB'
    | 'SET_STONE';
  payload: string;
};

type UnitAction = { type: 'SET_UNIT' };

type CalculateAction = { type: 'CALCULATE_BMI' };

export type Action = InputAction | UnitAction | CalculateAction;
const reducer = (state: CalculatorState, action: Action): CalculatorState => {
  switch (action.type) {
    case 'SET_UNIT': {
      if (state.unit === 'metric') {
        return {
          ...state,
          unit: 'imperial',
          cm: '',
          kg: '',
          bmiInfo: null,
        };
      }

      return {
        ...state,
        unit: 'metric',
        feet: '',
        inches: '',
        lb: '',
        stone: '',
        bmiInfo: null,
      };
    }
    case 'SET_CM':
      return { ...state, cm: action.payload };
    case 'SET_KG':
      return { ...state, kg: action.payload };
    case 'SET_FEET':
      return { ...state, feet: action.payload };
    case 'SET_INCHES':
      return { ...state, inches: action.payload };
    case 'SET_LB':
      return { ...state, lb: action.payload };
    case 'SET_STONE':
      return { ...state, stone: action.payload };
    case 'CALCULATE_BMI': {
      if (state.unit === 'metric') {
        const { cm, kg } = state;
        if (!cm || !kg) return state;

        if (!digitRegex.test(cm) || !digitRegex.test(kg)) return state;

        const info: BmiArgs = {
          type: 'metric',
          cm: parseInt(cm),
          kg: parseInt(kg),
        };

        const bmi = calculateBmi(info);
        return { ...state, bmiInfo: bmi };
      }

      const { feet, inches, lb, stone } = state;
      if (!feet || !inches || !lb || !stone) return state;

      if (
        !digitRegex.test(feet) ||
        !digitRegex.test(inches) ||
        !digitRegex.test(lb) ||
        !digitRegex.test(stone)
      )
        return state;

      const info: BmiArgs = {
        type: 'imperial',
        feet: parseInt(feet),
        inches: parseInt(inches),
        lb: parseInt(lb),
        stone: parseInt(stone),
      };

      const bmi = calculateBmi(info);
      return { ...state, bmiInfo: bmi };
    }
    default:
      return state;
  }
};
```

The type for the bmi arguments is located in [bmi.ts](./src/types/bmi.ts), these types are modified using TypeScript utility functions such as `Record` and `Omit` to create the `CalculatorState` type for the reducer.

The function takes in a state and an action value which has been defined in TypeScript to avoid mistyping the action type (SET_CM, SET_FEET, etc.) Depending on the action, an input value is set to the state, the unit changes, or the BMi result is calculated.

For the `CALCULATE_BMI` action, if any of the target input values are empty or not a number, the state is returned without calculating the BMI.

THe reducer is used in `BMICalculator.tsx` as follows:

```typescript
const BMICalculator = () => {
  const [{ cm, kg, feet, inches, lb, stone, unit, bmiInfo }, dispatch] =
    useReducer(BMIReducer, { ...initialState });

  useEffect(() => {
    dispatch({ type: 'CALCULATE_BMI' });
  }, [cm, kg, feet, inches, lb, stone]);
};
```

The `useEffect` hook is used to calculate the BMI whenever the input values change. An [`Input.tsx`](./src/components/HookForm/Input.tsx) component was created to take in a dispatch function to change a property of the state based on the input value, as seen below:

```typescript
<Styled.FormInput>
  {/* height */}
  <div>
    <Styled.InputTitle>height</Styled.InputTitle>
    <div>
      <Input
        val={cm}
        dispatch={dispatch}
        action="SET_CM"
        testId="cmInput"
        name="cm"
      />
    </div>
  </div>

  {/* weight */}
  <div>
    <Styled.InputTitle>weight</Styled.InputTitle>
    <div>
      <Input
        val={kg}
        dispatch={dispatch}
        action="SET_KG"
        testId="kgInput"
        name="kg"
      />
    </div>
  </div>
</Styled.FormInput>
```

#### Calculating the Score

The logic to calculate the BMI score is located in [`calculate-bmi.ts`](./src/lib/calculate-bmi.ts). See the function below:

```typescript
const calculateBMI = (info: BmiArgs): { bmi: string; message: string } => {
  if (info.type === 'metric') {
    const { cm, kg } = info;
    const meters = cm / 100;
    const bmi = kg / (meters * meters);
    const idealMinWeight = 18.5 * meters * meters;
    const idealMaxWeight = 24.9 * meters * meters;
    const results = { bmi: bmi.toFixed(1) };
    if (bmi < 18.5) {
      return {
        ...results,
        message: `Your BMI suggests you're underweight. Your ideal weight is between ${idealMinWeight.toFixed(
          1
        )}kgs - ${idealMaxWeight.toFixed(1)}kgs.`,
      };
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return {
        ...results,
        message: `Your BMI suggests you're a healthy weight. Your ideal weight is between ${idealMinWeight.toFixed(
          1
        )}kgs - ${idealMaxWeight.toFixed(1)}kgs.`,
      };
    } else if (bmi >= 25 && bmi <= 29.9) {
      return {
        ...results,
        message: `Your BMI suggets you're overweight. Your ideal weight is between ${idealMinWeight.toFixed(
          1
        )}kgs - ${idealMaxWeight.toFixed(1)}kgs.`,
      };
    } else {
      return {
        ...results,
        message: `Your BMI suggets you're obese. Your ideal weight is between ${idealMinWeight.toFixed(
          1
        )}kgs - ${idealMaxWeight.toFixed(1)}kgs.`,
      };
    }
  }

  const { stone, lb, feet, inches } = info;
  const totalInches = feet * 12 + inches;
  const bmi = ((lb + stone * 14) / (totalInches * totalInches)) * 703;
  const idealMinWeight = Math.floor((18.5 * (totalInches * totalInches)) / 703);
  const idealMaxWeight = Math.floor((24.9 * (totalInches * totalInches)) / 703);
  const minStone = Math.floor(idealMinWeight / 14);
  const minPounds = Math.floor(idealMinWeight % 14);
  const maxStone = Math.floor(idealMaxWeight / 14);
  const maxPounds = Math.floor(idealMaxWeight % 14);
  const results = { bmi: bmi.toFixed(1) };
  if (bmi < 18.5) {
    return {
      ...results,
      message: `Your BMI suggests you're underweight. Your ideal weight is between ${minStone}st ${minPounds}lbs - ${maxStone}st ${maxPounds}lbs.`,
    };
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return {
      ...results,
      message: `Your BMI suggests you're a healthy weight. Your ideal weight is between ${minStone}st ${minPounds}lbs - ${maxStone}st ${maxPounds}lbs.`,
    };
  } else if (bmi >= 25 && bmi <= 29.9) {
    return {
      ...results,
      message: `Your BMI suggets you're overweight. Your ideal weight is between ${minStone}st ${minPounds}lbs - ${maxStone}st ${maxPounds}lbs.`,
    };
  } else {
    return {
      ...results,
      message: `Your BMI suggets you're obese. Your ideal weight is between ${minStone}st ${minPounds}lbs - ${maxStone}st ${maxPounds}lbs.`,
    };
  }
};
```

Depending on the unit, either metric or imperial units will be extracted from the arguments. The BMI score is calculated along with the ideal weight range the user should be in based on their height. The results are returned as an object with the BMI score and a message.

### Testing

Both Vitest and Cypress were used to test test the application, Vitest is used to test the `calculate-bmi.ts` result and cypress is used to run end-to-end tests.

#### Vitest

An excerpt of a test from [`calculate-bmi.test.ts`](./src/__test__/calculate-bmi.test.ts) is shown below:

```typescript
describe('calculate-bmi for metric information', () => {
  test('height of 185, weight of 80, returns 23.4', () => {
    const metricInformation: MetricInfo = {
      type: 'metric',
      cm: 185,
      kg: 80,
    };
    const bmi = calculateBMI(metricInformation);
    expect(bmi.bmi).toBe("23.4");
    expect(bmi.message).toBe(
      "Your BMI suggests you're a healthy weight. Your ideal weight is between 63.3kgs - 85.2kgs."
    );
    ...
  });
});
```

A set of information is passed into the function, and the test asserts that the correct value and message is returned.

#### Cypress

An excerpt of a test from [`calculate-bmi.cy.ts`](./cypress/e2e/calculate-bmi.cy.ts) can be seen below:

```typescript
describe('calculate-bmi for metric information', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy="metricSelect"]').as('metricSelect');
    cy.get('[data-cy="imperialSelect"]').as('imperialSelect');
    cy.get('[data-cy="cmInput"]').as('cmInput');
    cy.get('[data-cy="kgInput"]').as('kgInput');
  });

  it('metric is selected by default, no results displayed', () => {
    cy.get('@metricSelect').find('input').should('be.checked');
    cy.get('@imperialSelect').find('input').should('not.be.checked');
    cy.get('[data-cy="bmiScore"]').should('not.exist');
  });

  it('height of 185, weight of 80, displays  23.4', () => {
    cy.get('@cmInput').find('input').type('185');
    cy.get('@kgInput').find('input').type('80');
    cy.get('[data-cy="bmiScore"]').should('have.text', '23.4');
    cy.get('[data-cy="bmiResultText"]').should(
      'have.text',
      "Your BMI suggests you're a healthy weight. Your ideal weight is between 63.3kgs - 85.2kgs."
    );
  });

  ...
});
```

Before each test, the test runner will visit the page, select the unit inputs and the weight and height inputs for the metric form. The first test asserts that the metric unit is selected by default with no results displayed; the second test asserts that the correct BMI score and message is rendered with the given input.

### Styling

With this project, I wanted to focus on creating styled components that could be used multiple times around the page. See an excrept from [`Utils.styled.tsx`](./src/styles/Utils.styled.tsx) below:

```typescript
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
  font-size: 2.4rem;
  font-weight: 600;
`;
```

Multiple heading elements were created to be used in the application, along with a container component to wrap page content. So instead of creating specific _heading_ components for each section, these components can be used instead. See an example below from [`App.tsx`](./src/App.tsx):

```typescript
<Container>
  <Styled.CurvedLine src={curvedLineLeft} alt="" />
  <Styled.AboutResultsInfo>
    <Styled.AboutImageDesktop>
      <img src={manEatingPhoto} alt="phot of man eating food" />
    </Styled.AboutImageDesktop>
    <div>
      <LargeHeading>What your BMI result means</LargeHeading>
      <PageText>
        A BMI range of 18.5 to 24.9 is considered a &#39;healthy weight.&#39;
        Maintaining a healthy weight may lower your chances of experiencing
        health issues later on, such as obesity and type 2 diabetes. Aim for a
        nutritious diet with reduced fat and sugar content, incorporating ample
        fruits and vegetables. Additionally, strive for regular physical
        activity, ideally about 30 minutes daily for five days a week.
      </PageText>
    </div>
  </Styled.AboutResultsInfo>
  ...
</Container>
```

If a specific style needs to be applied to the heading or container, nested CSS can be used to select the component without effecting other instances of it. From [`App.styled.tsx`](./src/App.styled.tsx):

```typescript
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
```

`PageText` and `MainHeading` are nested within the styled component above and are styled accordingly.

## Conclusion

Overall this project was a good learning experience, I got a better idea on how to re-use styled components and obtained a better understanding of using the Vitest test runner. If you have any feedback please let me know and feel free to fork the repository and make any changes you see fit.

Thanks for reading!
