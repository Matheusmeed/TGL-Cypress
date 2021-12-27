/// <reference types="Cypress"  />

describe('Criar uma aposta da Mega-Sena de forma aleatória', () => {
  it('Fazendo login e criando aposta', () => {
    // Login
    cy.visit('');
    cy.LogIn({ email: 'yasmin@gmail.com', password: 'yasmin1' });

    //Fazendo aposta
    cy.ChooseMegasena();
    cy.RandomBet();
  });
});
