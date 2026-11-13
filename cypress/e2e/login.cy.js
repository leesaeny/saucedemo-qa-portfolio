
describe('Autenticação - Login', () => {

  const selectors = {
    username: '[data-test="username"]',
    password: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',
    error: '[data-test="error"]',
    title: '[data-test="title"]',
  };

  const testData = {
    validUsername: 'standard_user',
    lockedUsername: 'locked_out_user',
    validPassword: 'secret_sauce',
    invalidPassword: 'senha_incorreta_123',
  };

  beforeEach(() => {
    cy.visit('/');
  });

  it('QASD-T1 - Login com credenciais válidas', () => {
    cy.get(selectors.username).type(testData.validUsername);
    cy.get(selectors.password).type(testData.validPassword);
    cy.get(selectors.loginButton).click();
    cy.url().should('include', '/inventory.html');
    cy.get(selectors.title)
      .should('be.visible')
      .and('have.text', 'Products');
  });

  it('QASD-T2 - Login com senha incorreta', () => {
    cy.get(selectors.username).type(testData.validUsername);
    cy.get(selectors.password).type(testData.invalidPassword);
    cy.get(selectors.loginButton).click();
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.get(selectors.error)
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('QASD-T3 - Login com username vazio', () => {
    cy.get(selectors.username).clear();
    cy.get(selectors.password).type(testData.validPassword);
    cy.get(selectors.loginButton).click();
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.get(selectors.error)
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Username is required');
  });

  it('QASD-T4 - Login com password vazio', () => {
    cy.get(selectors.username).type(testData.validUsername);
    cy.get(selectors.password).clear();
    cy.get(selectors.loginButton).click();
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.get(selectors.error)
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Password is required');
  });

  it('QASD-T5 - Login com username e password vazios', () => {
    cy.get(selectors.username).clear();
    cy.get(selectors.password).clear();
    cy.get(selectors.loginButton).click();
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.get(selectors.error)
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Username is required');
  });

  it('QASD-T6 - Login com username bloqueado', () => {
    cy.get(selectors.username).type(testData.lockedUsername);
    cy.get(selectors.password).type(testData.validPassword);
    cy.get(selectors.loginButton).click();
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.get(selectors.error)
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Sorry, this user has been locked out.');
  });

});

