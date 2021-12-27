/// <reference types="Cypress"  />

describe('Salvar o Jogo', () => {
  beforeEach(() => {
    // Login
    cy.visit('');
    cy.LogIn({ email: 'yasmin@gmail.com', password: 'yasmin1' });
  });

  it('Tentando salvar sem passar do valor mínimo', () => {
    //Fazendo aposta
    cy.RandomMegasena();

    //Salvando
    cy.get('.sc-fFeiMQ > button').click();
  });

  it('Salvando jogo válido', () => {
    cy.ChooseMegasena();
    //Fazendo apostas aleatórias
    for (let i = 0; i < 7; i++) {
      cy.RandomBet();
    }

    //Salvando
    cy.get('.sc-fFeiMQ > button').click();
  });
});
