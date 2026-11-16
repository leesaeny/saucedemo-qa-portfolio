
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

  it('QASD-T8 - Nome crescente e preservação das informações', () => {
    // Começa em Z a A para verificar uma mudança real de ordem.
    cy.get(selectors.sort).select('za');

    getProducts().then((productsBefore) => {
      cy.get(selectors.sort).select('az');

      cy.get(selectors.sort).should('have.value', 'az');

      cy.get(selectors.sort)
        .find('option:selected')
        .should('have.text', 'Name (A to Z)');

      getProducts().then((productsAfter) => {
        const namesAfter = productsAfter.map((product) => product.name);
        const expectedNames = productsBefore
          .map((product) => product.name)
          .sort((a, b) => a.localeCompare(b));

        expect(namesAfter, 'nomes em ordem crescente')
          .to.deep.equal(expectedNames);

        expect(productsAfter, 'produtos e informações preservados')
          .to.have.deep.members(productsBefore);
      });
    });
  });

  it('QASD-T9 - Nome decrescente e preservação das informações', () => {
    cy.get(selectors.sort).select('az');
    cy.get(selectors.sort).should('have.value', 'az');

    getProducts().then((productsBefore) => {
      cy.get(selectors.sort).select('za');
      cy.get(selectors.sort).should('have.value', 'za');

      cy.get(selectors.sort)
        .find('option:selected')
        .should('have.text', 'Name (Z to A)');

      getProducts().then((productsAfter) => {
        const namesAfter = productsAfter.map((product) => product.name);
        const expectedNames = productsBefore
          .map((product) => product.name)
          .sort((a, b) => b.localeCompare(a));

        expect(namesAfter, 'nomes em ordem decrescente')
          .to.deep.equal(expectedNames);

        expect(productsAfter, 'produtos e informações preservados')
          .to.have.deep.members(productsBefore);
      });
    });
  });

  it('QASD-T10 - Preço crescente e preservação das informações', () => {
    cy.get(selectors.sort).select('hilo');
    cy.get(selectors.sort).should('have.value', 'hilo');

    getProducts().then((productsBefore) => {
      cy.get(selectors.sort).select('lohi');
      cy.get(selectors.sort).should('have.value', 'lohi');

      cy.get(selectors.sort)
        .find('option:selected')
        .should('have.text', 'Price (low to high)');

      getProducts().then((productsAfter) => {
        const pricesAfter = productsAfter.map((product) =>
          Number(product.price.replace('$', ''))
        );

        const expectedPrices = productsBefore
          .map((product) => Number(product.price.replace('$', '')))
          .sort((a, b) => a - b);

        expect(pricesAfter, 'preços em ordem crescente')
          .to.deep.equal(expectedPrices);

        expect(productsAfter, 'produtos e informações preservados')
          .to.have.deep.members(productsBefore);
      });
    });
  });

  it('QASD-T11 - Preço decrescente e preservação das informações', () => {
    cy.get(selectors.sort).select('lohi');
    cy.get(selectors.sort).should('have.value', 'lohi');

    getProducts().then((productsBefore) => {
      cy.get(selectors.sort).select('hilo');
      cy.get(selectors.sort).should('have.value', 'hilo');

      cy.get(selectors.sort)
        .find('option:selected')
        .should('have.text', 'Price (high to low)');

      getProducts().then((productsAfter) => {
        const pricesAfter = productsAfter.map((product) =>
          Number(product.price.replace('$', ''))
        );

        const expectedPrices = productsBefore
          .map((product) => Number(product.price.replace('$', '')))
          .sort((a, b) => b - a);

        expect(pricesAfter, 'preços em ordem decrescente')
          .to.deep.equal(expectedPrices);

        expect(productsAfter, 'produtos e informações preservados')
          .to.have.deep.members(productsBefore);
      });
    });
  });

});

