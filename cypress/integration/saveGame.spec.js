/// <reference types="Cypress"  />

describe('Salvar o Jogo', () => {
  beforeEach(() => {
    // Login
    cy.visit('');
    cy.LogIn({ email: 'yasmin@gmail.com', password: 'yasmin1' });
  });

  it('Salvando sem passar do valor mínimo', () => {
    //Fazendo aposta
    cy.RandomBet();

    //Salvando
    cy.intercept('POST', 'http://127.0.0.1:3333/bet/new-bet').as('bet');
    cy.get('.sc-fFeiMQ > button').click();
    cy.wait('@bet').then((xhr) => {
      expect(xhr.response.statusCode).be.eq(400);
    });
  });

  it('Salvando sem escolher números', () => {
    cy.ChooseMegasena();

    //Salvando
    cy.get('.sc-fFeiMQ > button').click();
  });

  it('Salvando corretamente (passando do valor mínimo)', () => {
    cy.ChooseMegasena();
    //Fazendo apostas aleatórias
    for (let i = 0; i < 7; i++) {
      cy.RandomBet();
    }

    //Salvando
    cy.get('.sc-fFeiMQ > button').click();
  });
});
