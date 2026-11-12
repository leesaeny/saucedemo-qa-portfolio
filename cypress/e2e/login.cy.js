
describe('Autenticação - Login', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('QASD-T1 - Login com credenciais válidas', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
    cy.get('[data-test="title"]')
      .should('be.visible')
      .and('have.text', 'Products');
  });

  it('QASD-T2 - Login com senha incorreta', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('senha_incorreta_123');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('QASD-T3 - Login com username vazio', () => {
    cy.get('[data-test="username"]').clear();
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Username is required');
  });

  it('QASD-T4 - Login com password vazio', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').clear();
    cy.get('[data-test="login-button"]').click();
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Password is required');
  });

  it('QASD-T5 - Login com username e password vazios', () => {
    cy.get('[data-test="username"]').clear();
    cy.get('[data-test="password"]').clear();
    cy.get('[data-test="login-button"]').click();
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Username is required');
  });

  it('QASD-T6 - Login com username bloqueado', () => {
    cy.get('[data-test="username"]').type('locked_out_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Sorry, this user has been locked out.');
  });

});

