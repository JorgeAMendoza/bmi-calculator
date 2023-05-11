/// <reference types="cypress" />

describe('calculate-bmi for metric information', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy="metricSelect"]').as('metricSelect');
    cy.get('[data-cy="imperialSelect"]').as('imperialSelect');
    cy.get('[data-cy="results"]').as('results');
    cy.get('[data-cy="weightInput"]').as('weightInput');
    cy.get('[data-cy="heightInput"]').as('heightInput');
  });

  it('metric is selected by default, no results displayed', () => {
    cy.get('@metricSelect').should('be.checked');
    cy.get('@imperialSelect').should('not.be.checked');
    cy.get('@results').get('[data-cy="bmiScore"]').should('not.exist');
  });

  it('height of 185, weight of 80, displays  23.4', () => {
    cy.get('@heightInput').find('input').type('185');
    cy.get('@weightInput').find('input').type('80');
    cy.get('@results').should('have.text', '23.4');
    cy.get('[data=cy="bmiResultText"]').should(
      'have.text',
      "Your BMI suggests you're a healthy weight. Your ideal weight is between 63.3kgs - 85.5kgs."
    );
  });

  it('height of 165, weight of 82, displays 30.1', () => {
    cy.get('@heightInput').find('input').type('165');
    cy.get('@weightInput').find('input').type('82');
    cy.get('@results').get('[data-cy="bmiScore"]').should('have.text', '30.1');
    cy.get('[data=cy="bmiResultText"]').should(
      'have.text',
      "Your BMI suggets you're overweight. Your ideal weight is between 50.3kgs - 67.6kgs."
    );
  });

  it('missing required field, no results displayed', () => {
    cy.get('@heightInput').find('input').type('165');
    cy.get('@results').get('[data-cy="bmiScore"]').should('not.exist');
  });
});

describe('calculate-bmi for imperial information', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy="metricSelect"]').as('metricSelect');
    cy.get('[data-cy="imperialSelect"]').as('imperialSelect');
    cy.get('[data-cy="results"]').as('results');

    cy.get('@imperialSelect').click();
    cy.get('[data-cy="feetInput"]').as('feetInput');
    cy.get('[data-cy="inchesInput"]').as('inchesInput');
    cy.get('[data-cy="stoneInput"]').as('stoneInput');
    cy.get('[data-cy="poundsInput"]').as('poundsInput');
  });

  it('imperial is selected, no results displayed', () => {
    cy.get('@metricSelect').should('not.be.checked');
    cy.get('@imperialSelect').should('be.checked');
    cy.get('@results').get('[data-cy="bmiScore"]').should('not.exist');
  });

  it('height of 5ft 11, weight of 158, displays 22.0', () => {
    cy.get('@feetInput').find('input').type('5');
    cy.get('@inchesInput').find('input').type('11');
    cy.get('@stoneInput').find('input').type('11');
    cy.get('@poundsInput').find('input').type('4');
    cy.get('@results').should('have.text', '22.0');

    cy.get('[data=cy="bmiResultText"]').should(
      'have.text',
      "Your BMI suggests you're a healthy weight. Your ideal weight is between 9st 6lbs - 12st 10lbs."
    );
  });

  it('height of 5ft 5, weight of 181, displays 30.1', () => {
    cy.get('@feetInput').find('input').type('5');
    cy.get('@inchesInput').find('input').type('5');
    cy.get('@stoneInput').find('input').type('12');
    cy.get('@poundsInput').find('input').type('13');
    cy.get('@results').should('have.text', '30.1');

    cy.get('[data=cy="bmiResultText"]').should(
      'contain.text',
      "Your BMI suggets you're overweight. Your ideal weight is between 7st 3lbs - 10st 9lbs."
    );
  });
});
