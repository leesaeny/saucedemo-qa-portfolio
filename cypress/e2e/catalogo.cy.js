
describe('Catálogo - Exibição e ordenação', () => {
  const selectors = {
    username: '[data-test="username"]',
    password: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',
    title: '[data-test="title"]',

    product: '[data-test="inventory-item"]',
    productName: '[data-test="inventory-item-name"]',
    productDescription: '[data-test="inventory-item-desc"]',
    productPrice: '[data-test="inventory-item-price"]',
    productImage: 'img.inventory_item_img',

    sort: '[data-test="product-sort-container"]',
  };

  const testData = {
    validUsername: 'standard_user',
    validPassword: 'secret_sauce',
  };

  function getProducts() {
    return cy.get(selectors.product).then(($products) => {
      return Array.from($products, (product) => {
        const $product = Cypress.$(product);

        return {
          name: $product.find(selectors.productName).text().trim(),
          description: $product
            .find(selectors.productDescription)
            .text()
            .trim(),
          price: $product.find(selectors.productPrice).text().trim(),
          image: $product.find(selectors.productImage).attr('src'),
        };
      });
    });
  }

  beforeEach(() => {
    cy.visit('/');
    cy.get(selectors.username).type(testData.validUsername);
    cy.get(selectors.password).type(testData.validPassword);
    cy.get(selectors.loginButton).click();

    cy.location('pathname').should('eq', '/inventory.html');
    cy.get(selectors.title)
      .should('be.visible')
      .and('have.text', 'Products');
  });
  
  it('QASD-T7 - Exibição das informações dos produtos', () => {
    cy.get(selectors.product)
      .should('have.length.greaterThan', 0)
      .each(($product) => {
        cy.wrap($product).within(() => {
          cy.get(selectors.productName)
            .should('be.visible')
            .and(($name) => {
              expect($name.text().trim()).not.to.equal('');
            });

          cy.get(selectors.productDescription)
            .should('be.visible')
            .and(($description) => {
              expect($description.text().trim()).not.to.equal('');
            });

          cy.get(selectors.productPrice)
            .should('be.visible')
            .and(($price) => {
              expect($price.text().trim())
                .to.match(/^\$\d+\.\d{2}$/);
            });

          cy.get(selectors.productImage)
            .should('be.visible')
            .and(($image) => {
              expect($image[0].complete).to.equal(true);
              expect($image[0].naturalWidth).to.be.greaterThan(0);
            });
        });
      });
  });
});

