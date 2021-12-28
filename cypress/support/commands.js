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
