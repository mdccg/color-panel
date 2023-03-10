import { generateRandomInteger } from './../support/commands';

describe('app spec', () => {
  it('should display the correct color as the user drags the inputs', () => {
    cy.visit('');

    const red   = generateRandomInteger(0, 255);
    const green = generateRandomInteger(0, 255);
    const blue  = generateRandomInteger(0, 255);
    const alpha = generateRandomInteger(0, 10);

    cy.get(':nth-child(1) > input')
      .then((input: JQuery<HTMLInputElement>) => input[0].stepUp(red))
      .trigger('change');
    
    cy.get(':nth-child(2) > input')
      .then((input: JQuery<HTMLInputElement>) => input[0].stepUp(green))
      .trigger('change');
    
    cy.get(':nth-child(3) > input')
      .then((input: JQuery<HTMLInputElement>) => input[0].stepUp(blue))
      .trigger('change');
    
    cy.get(':nth-child(4) > input')
      .then((input: JQuery<HTMLInputElement>) => input[0].stepUp(alpha))
      .trigger('change');
    
    const rgba = alpha === 1 ? `rgb(${red}, ${green}, ${blue})` : `rgba(${red}, ${green}, ${blue}, ${alpha / 10})`;

    cy.get('[data-cy="square"]').should('have.css', 'background-color', rgba);
  });
});