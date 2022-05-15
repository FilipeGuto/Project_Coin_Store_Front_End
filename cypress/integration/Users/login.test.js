const TITLE = "COIN STORE";

describe('Pagina de "Login"', () => {
  it('Veririfica se  o titulo esta correto', () => {
    cy.visit('/');

    cy.contains(TITLE).should('to.have.length', 1);
  });

  it('Valida a adição no campo de "email"', () => {
    cy.get('[data-cy=input-email]').type('Usuário');
  })

  it('Valida a adição no campo de "password"', () => {
    cy.get('[data-cy=input-password]').type('123456');
  })
});
