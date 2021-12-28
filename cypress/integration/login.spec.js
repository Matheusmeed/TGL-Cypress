/// <reference types="Cypress"  />

describe('Autenticar Usuário', () => {
  let validAccount;

  beforeEach(() => {
    cy.visit('');
  });

  before(() => {
    cy.fixture('validAccount').then((data) => {
      validAccount = data;
    });
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
    cy.LogIn({ email: validAccount.email, password: validAccount.password });

    cy.wait('@login').then((xhr) => {
      expect(xhr.response.statusCode).be.eq(200);
    });
  });

  it('Login sem preencher a senha', () => {
    cy.get(':nth-child(2) > input').type(validAccount.email);
    cy.get(':nth-child(3) > button').click();
  });

  it('Login sem preencher o email', () => {
    cy.get(':nth-child(2) > input').type(validAccount.password);
    cy.get(':nth-child(3) > button').click();
  });
});
