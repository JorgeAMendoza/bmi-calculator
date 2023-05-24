/// <reference types="cypress" />

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

  it('height of 165, weight of 82, displays 30.1', () => {
    cy.get('@cmInput').find('input').type('165');
    cy.get('@kgInput').find('input').type('82');
    cy.get('[data-cy="bmiScore"]').should('have.text', '30.1');
    cy.get('[data-cy="bmiResultText"]').should(
      'have.text',
      "Your BMI suggets you're obese. Your ideal weight is between 50.4kgs - 67.8kgs."
    );
  });

  it('missing required field, no results displayed', () => {
    cy.get('@cmInput').find('input').type('165');
    cy.get('[data-cy="bmiScore"]').should('not.exist');
  });

  it('invalid value present, no results displayed', () => {
    cy.get('@cmInput').find('input').type('165');
    cy.get('@kgInput').find('input').type('a2');
    cy.get('[data-cy="bmiScore"]').should('not.exist');
  });

  it('invalid value present after bmi score calculated, same result displayed', () => {
    cy.get('@cmInput').find('input').type('165');
    cy.get('@kgInput').find('input').type('82');
    cy.get('[data-cy="bmiScore"]').should('have.text', '30.1');
    cy.get('[data-cy="bmiResultText"]').should(
      'have.text',
      "Your BMI suggets you're obese. Your ideal weight is between 50.4kgs - 67.8kgs."
    );
    cy.get('@kgInput').find('input').clear();
    cy.get('@kgInput').find('input').type('a2');
    cy.get('[data-cy="bmiScore"]').should('have.text', '30.1');
    cy.get('[data-cy="bmiResultText"]').should(
      'have.text',
      "Your BMI suggets you're obese. Your ideal weight is between 50.4kgs - 67.8kgs."
    );
  });

  it('switching to imperial, no results displayed', () => {
    cy.get('@imperialSelect').click();
    cy.get('@metricSelect').find('input').should('not.be.checked');
    cy.get('@imperialSelect').find('input').should('be.checked');
    cy.get('[data-cy="bmiScore"]').should('not.exist');
  });

  it('switching to imperial, then back to metric, no results displayed and input blank', () => {
    cy.get('@imperialSelect').click();
    cy.get('@metricSelect').click();
    cy.get('@metricSelect').find('input').should('be.checked');
    cy.get('@imperialSelect').find('input').should('not.be.checked');
    cy.get('[data-cy="bmiScore"]').should('not.exist');
    cy.get('@cmInput').find('input').should('have.value', '');
    cy.get('@kgInput').find('input').should('have.value', '');
  });
});

describe('calculate-bmi for imperial information', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy="metricSelect"]').as('metricSelect');
    cy.get('[data-cy="imperialSelect"]').as('imperialSelect');

    cy.get('@imperialSelect').click();
    cy.get('[data-cy="ftInput"]').as('feetInput');
    cy.get('[data-cy="inInput"]').as('inchesInput');
    cy.get('[data-cy="stInput"]').as('stoneInput');
    cy.get('[data-cy="lbInput"]').as('poundsInput');
  });

  it('imperial is selected, no results displayed', () => {
    cy.get('@metricSelect').find('input').should('not.be.checked');
    cy.get('@imperialSelect').find('input').should('be.checked');
    cy.get('[data-cy="bmiScore"]').should('not.exist');
  });

  it('height of 5ft 11, weight of 158, displays 22.0', () => {
    cy.get('@feetInput').find('input').type('5');
    cy.get('@inchesInput').find('input').type('11');
    cy.get('@stoneInput').find('input').type('11');
    cy.get('@poundsInput').find('input').type('4');
    cy.get('[data-cy="bmiScore"]').should('have.text', '22.0');

    cy.get('[data-cy="bmiResultText"]').should(
      'have.text',
      "Your BMI suggests you're a healthy weight. Your ideal weight is between 9st 6lbs - 12st 10lbs."
    );
  });

  it('height of 5ft 5, weight of 181, displays 30.1', () => {
    cy.get('@feetInput').find('input').type('5');
    cy.get('@inchesInput').find('input').type('5');
    cy.get('@stoneInput').find('input').type('12');
    cy.get('@poundsInput').find('input').type('13');
    cy.get('[data-cy="bmiScore"]').should('have.text', '30.1');

    cy.get('[data-cy="bmiResultText"]').should(
      'contain.text',
      "Your BMI suggets you're obese. Your ideal weight is between 7st 13lbs - 10st 9lbs."
    );
  });

  it('invalid values present, no results displayed', () => {
    cy.get('@feetInput').find('input').type('5');
    cy.get('@inchesInput').find('input').type('5');
    cy.get('@stoneInput').find('input').type('12');
    cy.get('@poundsInput').find('input').type('a');
    cy.get('[data-cy="bmiScore"]').should('not.exist');
  });

  it('missing required field, no results displayed', () => {
    cy.get('@feetInput').find('input').type('5');
    cy.get('@inchesInput').find('input').type('5');
    cy.get('@stoneInput').find('input').type('12');
    cy.get('[data-cy="bmiScore"]').should('not.exist');
  });

  it('switch to metric, no results displayed', () => {
    cy.get('@metricSelect').click();
    cy.get('@metricSelect').find('input').should('be.checked');
    cy.get('@imperialSelect').find('input').should('not.be.checked');
    cy.get('[data-cy="bmiScore"]').should('not.exist');
  });

  it('switch to metric, then back to imperial, no results displayed and input blank', () => {
    cy.get('@metricSelect').click();
    cy.get('@imperialSelect').click();
    cy.get('@metricSelect').find('input').should('not.be.checked');
    cy.get('@imperialSelect').find('input').should('be.checked');
    cy.get('[data-cy="bmiScore"]').should('not.exist');
    cy.get('@feetInput').find('input').should('have.value', '');
    cy.get('@inchesInput').find('input').should('have.value', '');
    cy.get('@stoneInput').find('input').should('have.value', '');
    cy.get('@poundsInput').find('input').should('have.value', '');
  });
});
