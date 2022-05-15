const TITLE = "COIN STORE";
const EMPTY_FIELDS = "Insira dados válidos";
const ERROR_LOGIN = "Email ou senha incorretas";
const ERROR_REGISTER = "Email já cadastrado";

// --------------------------- LOGIN ------------------------------

describe('Componente de "Login"', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Veririfica se  o titulo esta correto', () => {
    cy.contains(TITLE).should('to.have.length', 1);
  });

  it('Valida a adição no campo de "email"', () => {
    cy.get('[data-cy=input-email]').type('usuario@email.com');
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
    cy.get('[data-cy=input-password]').type('1234');
    cy.get('[data-cy=button-login]').click();

    cy.contains(ERROR_LOGIN);
  })

  it('Ao clicar em "REGISTRAR" leva para pagina de cadastro', () => {
    cy.get('[data-cy=button-register]').click();
    cy.get('[data-cy=input-name]');
  })
});

// -------------------------- REGISTER ----------------------------

describe('Componente de "Registro"', () => {
  beforeEach(() => {
    cy.visit('/register');
  });

  it('Valida a adição no campo de "name"', () => {
    cy.get('[data-cy=input-name]').type('Usuário');
  })

  it('Valida a adição no campo de "email"', () => {
    cy.get('[data-cy=input-email]').type('usuario@email.com');
  })

  it('Valida a adição no campo de "password"', () => {
    cy.get('[data-cy=input-password]').type('123456789');
  })

  it('Verifica se contém botão "CRIAR"', () => {
    cy.get('[data-cy=button-submit]').should('have.text', 'CRIAR');
  })

  it('Se não preencher os campos recebe um erro', () => {
    cy.get('[data-cy=button-submit]').click();

    cy.contains(EMPTY_FIELDS);
  })

  it('Se o email já esta cadastrado retorna erro', () => {
    cy.get('[data-cy=input-name]').type('Usuario');
    cy.get('[data-cy=input-email]').type('filipe@email.com');
    cy.get('[data-cy=input-password]').type('abcde');
    cy.get('[data-cy=button-submit]').click();

    cy.contains(ERROR_REGISTER);
  })

  it('Cria um novo usuario', () => {
    cy.get('[data-cy=input-name]').type('Usuario');
    cy.get('[data-cy=input-email]').type('usuario@email.com');
    cy.get('[data-cy=input-password]').type('123456');
    cy.get('[data-cy=button-submit]').click();
  });
});

// ----------------------- ADMIN ----------------------------

describe('Componente de "Admin"', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Caso tenha a role "admin" entra na pagina "/admin"', () => {
    cy.get('[data-cy=input-email]').type('email@email.com');
    cy.get('[data-cy=input-password]').type('12345');
    cy.get('[data-cy=button-login]').click();

    cy.get('[data-cy=name]');
  })

  it('Caso tenha a role "user" entra na pagina "/products"', () => {
    cy.get('[data-cy=input-email]').type('usuario@email.com');
    cy.get('[data-cy=input-password]').type('123456');
    cy.get('[data-cy=button-login]').click();

    cy.get('[data-cy=name]');
  })
});
