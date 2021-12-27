/// <reference types="Cypress"  />

describe('Criar um Usuário', () => {
  beforeEach(() => {
    cy.visit('/registration');
  });

  it('Cadastro com email inválido (que já existe no DB)', () => {
    cy.SignUp({
      name: 'Yasmin',
      email: 'yasmin@gmail.com',
      password: 'yasmin1',
    });
  });

  it('Cadastro com email válido (que não existe no DB)', () => {
    cy.SignUp({
      name: 'Lucas',
      email: 'lucas12345@mail.com',
      password: 'lucas1',
    });
  });
});
