/// <reference types="Cypress"  />

describe('Criar uma aposta da Mega-Sena de forma aleatória', () => {
  beforeEach(() => {
    cy.visit('');
    cy.LogIn({ email: 'yasmin@gmail.com', password: 'yasmin1' });
  });

  it('apertando em Complete Game duas vezes', () => {
    cy.ChooseMegasena();
    cy.get('.sc-bqiRlB > div > :nth-child(1)').click();
    cy.get('.sc-bqiRlB > div > :nth-child(1)').click();
  });

  it('Escolhendo 3 números (1, 2, 3) e depois apertando em complete game', () => {
    cy.ChooseMegasena();
    cy.get(':nth-child(5) > :nth-child(1)').click();
    cy.get(':nth-child(5) > :nth-child(2)').click();
    cy.get(':nth-child(5) > :nth-child(3)').click();

    cy.RandomBet();
  });

  it('Apertando em Complete Game', () => {
    cy.ChooseMegasena();
    cy.RandomBet();
  });
});
