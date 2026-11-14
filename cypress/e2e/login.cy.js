
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

  function login(username, password) {
    cy.get(selectors.username).clear();
    cy.get(selectors.password).clear();

    if (username !== '') {
      cy.get(selectors.username).type(username);
    }

    if (password !== '') {
      cy.get(selectors.password).type(password);
    }

    cy.get(selectors.loginButton).click();
  }

  beforeEach(() => {
    cy.visit('/');
  });

  it('QASD-T1 - Login com credenciais válidas', () => {
    login(testData.validUsername, testData.validPassword);
    cy.url().should('include', '/inventory.html');
    cy.get(selectors.title)
      .should('be.visible')
      .and('have.text', 'Products');
  });

  it('QASD-T2 - Login com senha incorreta', () => {
    login(testData.validUsername, testData.invalidPassword);
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.get(selectors.error)
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('QASD-T3 - Login com username vazio', () => {
    login('', testData.validPassword);
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.get(selectors.error)
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Username is required');
  });

  it('QASD-T4 - Login com password vazio', () => {
    login(testData.validUsername, '');
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.get(selectors.error)
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Password is required');
  });

  it('QASD-T5 - Login com username e password vazios', () => {
    login('', '');
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.get(selectors.error)
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Username is required');
  });

  it('QASD-T6 - Login com username bloqueado', () => {
    login(testData.lockedUsername, testData.validPassword);
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.get(selectors.error)
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Sorry, this user has been locked out.');
  });

});

