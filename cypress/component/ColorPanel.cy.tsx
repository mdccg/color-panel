import React from 'react';
import { ColorPanel } from './../../src/components/ColorPanel';
import { generateRandomInteger } from './../support/commands';

describe('<ColorPanel />', () => {
  it('should displays the correct color', () => {
    const red   = generateRandomInteger(0, 255);
    const green = generateRandomInteger(0, 255);
    const blue  = generateRandomInteger(0, 255);
    const alpha = generateRandomInteger(0, 10) / 10;

    cy.mount(<ColorPanel red={red} green={green} blue={blue} alpha={alpha} />);
    cy.get('[data-cy="square"]').should('have.css', 'background-color', `rgba(${red}, ${green}, ${blue}, ${alpha})`);
  });
  
  it('should displays a transparent square', () => {
    const red   = 0;
    const green = 0;
    const blue  = 0;
    const alpha = 0;

    cy.mount(<ColorPanel red={red} green={green} blue={blue} alpha={alpha} />);
    cy.get('[data-cy="square"]').should('have.css', 'background-color', `rgba(0, 0, 0, 0)`);
  });
  
});