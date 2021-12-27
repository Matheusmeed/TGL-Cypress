/// <reference types="Cypress"  />

describe('Autenticar Usuário', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('Login com conta não existente', () => {
    cy.LogIn({ email: 'naoexiste@mail.com', password: 'blabla1' });
  });

  it('Login com conta existente', () => {
    cy.LogIn({ email: 'yasmin@gmail.com', password: 'yasmin1' });
  });
});
