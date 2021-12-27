// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('SignUp', (content) => {
  cy.get(':nth-child(1) > input').type(content.name);
  cy.get(':nth-child(2) > input').type(content.email);
  cy.get(':nth-child(3) > input').type(content.password);

  cy.get(':nth-child(4) > button').click();
});

Cypress.Commands.add('LogIn', (content) => {
  cy.get(':nth-child(1) > input').type(content.email);
  cy.get(':nth-child(2) > input').type(content.password);

  cy.get(':nth-child(3) > button').click();
});

Cypress.Commands.add('RandomBet', () => {
  cy.get('.sc-bqiRlB > div > :nth-child(1)').click();
  cy.get('.sc-ksdxgE').click();
});

Cypress.Commands.add('ChooseMegasena', () => {
  cy.get('.igrFWR').click();
});
