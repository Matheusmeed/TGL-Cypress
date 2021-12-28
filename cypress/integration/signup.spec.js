/// <reference types="Cypress"  />

describe('Criar um Usuário', () => {
  let validAccount;

  before(() => {
    cy.fixture('validAccount').then((data) => {
      validAccount = data;
    });
  });

  beforeEach(() => {
    cy.visit('/registration');
  });

  it('Cadastro com email inválido (que já existe no DB)', () => {
    cy.intercept('POST', 'http://127.0.0.1:3333/user/create').as('signup');
    cy.SignUp({
      name: validAccount.username,
      email: validAccount.email,
      password: validAccount.password,
    });
    cy.wait('@signup').then((xhr) => {
      expect(xhr.response.statusCode).be.eq(400);
    });
  });

  it('Cadastro correto (com email que não existe no DB)', () => {
    cy.intercept('POST', 'http://127.0.0.1:3333/user/create').as('signup');
    cy.SignUp({
      name: 'Nao',
      email: 'naoexisto@mail.com',
      password: 'nao12345',
    });
    cy.wait('@signup').then((xhr) => {
      expect(xhr.response.statusCode).be.eq(200);
    });
  });

  it('Cadastro sem preencher os dados', () => {
    cy.get(':nth-child(4) > button').click();
  });

  it('Cadastro com email incorreto', () => {
    cy.get(':nth-child(1) > input').type('Matheus');
    cy.get(':nth-child(2) > input').type('matheus123');
    cy.get(':nth-child(3) > input').type('matheus123');

    cy.get(':nth-child(5) > button').click();
  });

  it('Cadastro com nome incorreto', () => {
    cy.get(':nth-child(1) > input').type('432');
    cy.get(':nth-child(2) > input').type('matheus123@gmail.com');
    cy.get(':nth-child(3) > input').type('matheus123');

    cy.get(':nth-child(5) > button').click();
  });

  it('Cadastro com senha incorreta', () => {
    cy.get(':nth-child(1) > input').type('Matheus');
    cy.get(':nth-child(2) > input').type('matheus123@gmail.com');
    cy.get(':nth-child(3) > input').type('mat');

    cy.get(':nth-child(4) > button').click();
  });
});
