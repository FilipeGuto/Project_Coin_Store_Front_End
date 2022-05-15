const TITLE = "COIN STORE";
const EMPTY_FIELDS = "Insira email e senha válidas";
const ERROR_LOGIN = "Email ou senha incorretas";

describe('Pagina de "Login"', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Veririfica se  o titulo esta correto', () => {

    cy.contains(TITLE).should('to.have.length', 1);
  });

  it('Valida a adição no campo de "email"', () => {
    cy.get('[data-cy=input-email]').type('Usuário');
  })

  it('Valida a adição no campo de "password"', () => {
    cy.get('[data-cy=input-password]').type('123456');
  })

  it('Verifica se contém botão "ENTRAR" e "REGISTRAR"', () => {
    cy.get('[data-cy=button-login]').should('have.text', 'ENTRAR');
    cy.get('[data-cy=button-register]').should('have.text', 'REGISTRAR');
  })

  it('Se não preencher os campos recebe um erro', () => {
    cy.get('[data-cy=button-login]').click();

    cy.contains(EMPTY_FIELDS);
  })

  it('Ao passar informações que não contém no banco recebe um erro', () => {
    cy.get('[data-cy=input-email]').type('usuario@email.com');
    cy.get('[data-cy=input-password]').type('123456');
    cy.get('[data-cy=button-login]').click();

    cy.contains(ERROR_LOGIN);
  })

  it('Ao clicar em "REGISTRAR" leva para pagina de cadastro', () => {
    cy.get('[data-cy=button-register]').click();
    cy.get('[data-cy=input-name]');
  })
});
