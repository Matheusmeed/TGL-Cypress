/// <reference types="Cypress"  />

describe('Autenticar Usuário', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('Login com conta não existente', () => {
    cy.intercept('POST', 'http://127.0.0.1:3333/login').as('login');
    cy.LogIn({ email: 'naoexiste@mail.com', password: 'blabla1' });

    cy.wait('@login').then((xhr) => {
      expect(xhr.response.statusCode).be.eq(401);
    });
  });

  it('Login com conta existente', () => {
    cy.intercept('POST', 'http://127.0.0.1:3333/login').as('login');
    cy.LogIn({ email: 'yasmin@gmail.com', password: 'yasmin1' });

    cy.wait('@login').then((xhr) => {
      expect(xhr.response.statusCode).be.eq(200);
    });
  });

  it('Login sem preencher a senha', () => {
    cy.get(':nth-child(2) > input').type('yasmin@gmail.com');
    cy.get(':nth-child(3) > button').click();
  });

  it('Login sem preencher o email', () => {
    cy.get(':nth-child(2) > input').type('senha111');
    cy.get(':nth-child(3) > button').click();
  });
});
