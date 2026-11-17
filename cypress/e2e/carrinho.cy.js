describe('Carrinho - Gerenciamento de produtos', () => {
    const selectors = {
        username: '[data-test="username"]',
        password: '[data-test="password"]',
        loginButton: '[data-test="login-button"]',
        title: '[data-test="title"]',

        product: '[data-test="inventory-item"]',
        productName: '[data-test="inventory-item-name"]',
        productDescription: '[data-test="inventory-item-desc"]',
        productPrice: '[data-test="inventory-item-price"]',
        productQuantity: '[data-test="item-quantity"]',

        cartLink: '[data-test="shopping-cart-link"]',
        cartBadge: '[data-test="shopping-cart-badge"]',
        continueShopping: '[data-test="continue-shopping"]',
    };

    const testData = {
        validUsername: 'standard_user',
        validPassword: 'secret_sauce',

        backpack: {
            name: 'Sauce Labs Backpack',
            addButton: '[data-test="add-to-cart-sauce-labs-backpack"]',
            removeButton: '[data-test="remove-sauce-labs-backpack"]',
        },

        bikeLight: {
            name: 'Sauce Labs Bike Light',
            addButton: '[data-test="add-to-cart-sauce-labs-bike-light"]',
            removeButton: '[data-test="remove-sauce-labs-bike-light"]',
        },
    };

    function getProductData(product) {
        return cy.get(product.addButton)
            .closest(selectors.product)
            .should('be.visible')
            .and(($product) => {
                [
                    selectors.productName,
                    selectors.productDescription,
                    selectors.productPrice,
                ].forEach((selector) => {
                    const $field = $product.find(selector);

                    expect($field).to.have.length(1);
                    expect($field).to.be.visible;
                    expect($field.text().trim()).not.to.equal('');
                });
            })
            .then(($product) => {
                return {
                    name: $product.find(selectors.productName).text().trim(),
                    description: $product
                        .find(selectors.productDescription)
                        .text()
                        .trim(),
                    price: $product.find(selectors.productPrice).text().trim(),
                };
            });
    }

    function checkCartProduct(product, expectedData) {
        return cy.get(product.removeButton)
            .should('be.visible')
            .and('have.text', 'Remove')
            .closest(selectors.product)
            .should('be.visible')
            .within(() => {
                cy.get(selectors.productName)
                    .should('be.visible')
                    .and(($name) => {
                        expect($name.text().trim()).to.equal(expectedData.name);
                    });

                cy.get(selectors.productDescription)
                    .should('be.visible')
                    .and(($description) => {
                        expect($description.text().trim())
                        .to.equal(expectedData.description);
                    });

                cy.get(selectors.productPrice)
                    .should('be.visible')
                    .and(($price) => {
                        expect($price.text().trim()).to.equal(expectedData.price);
                    });

                cy.get(selectors.productQuantity)
                    .should('be.visible')
                    .and('have.text', '1');
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

        cy.get(selectors.cartBadge).should('not.exist');
    });

    it('QASD-T12 - Adicionar um produto ao carrinho', () => {
        const product = testData.backpack;

        getProductData(product).then((catalogData) => {
            expect(catalogData.name).to.equal(product.name);

            cy.get(product.addButton).click();

            cy.get(product.removeButton)
                .should('be.visible')
                .and('have.text', 'Remove');

            cy.get(selectors.cartBadge)
                .should('be.visible')
                .and('have.text', '1');

            cy.get(selectors.cartLink).click();

            cy.location('pathname').should('eq', '/cart.html');

            cy.get(selectors.title)
                .should('be.visible')
                .and('have.text', 'Your Cart');

            cy.get(selectors.product).should('have.length', 1);

            checkCartProduct(product, catalogData);

            cy.get(selectors.cartBadge)
                .should('be.visible')
                .and('have.text', '1');
        });
    });

    it('QASD-T13 - Adicionar dois produtos distintos ao carrinho', () => {
        const backpack = testData.backpack;
        const bikeLight = testData.bikeLight;

        getProductData(backpack).then((backpackData) => {
            getProductData(bikeLight).then((bikeLightData) => {
                expect(backpackData.name).to.equal(backpack.name);
                expect(bikeLightData.name).to.equal(bikeLight.name);

                cy.get(backpack.addButton).click();

                cy.get(selectors.cartBadge)
                    .should('be.visible')
                    .and('have.text', '1');

                cy.get(bikeLight.addButton).click();

                cy.get(backpack.removeButton)
                    .should('be.visible')
                    .and('have.text', 'Remove');

                cy.get(bikeLight.removeButton)
                    .should('be.visible')
                    .and('have.text', 'Remove');

                cy.get(selectors.cartBadge)
                    .should('be.visible')
                    .and('have.text', '2');

                cy.get(selectors.cartLink).click();

                cy.location('pathname').should('eq', '/cart.html');

                cy.get(selectors.title)
                    .should('be.visible')
                    .and('have.text', 'Your Cart');

                cy.get(selectors.product).should('have.length', 2);

                checkCartProduct(backpack, backpackData);
                checkCartProduct(bikeLight, bikeLightData);

                cy.get(selectors.cartBadge)
                .should('be.visible')
                .and('have.text', '2');
            });
        });
    });

    it('QASD-T14 - Remover um produto mantendo os demais itens', () => {
        const backpack = testData.backpack;
        const bikeLight = testData.bikeLight;

        getProductData(bikeLight).then((bikeLightData) => {
            expect(bikeLightData.name).to.equal(bikeLight.name);

            cy.get(backpack.addButton).click();
            cy.get(bikeLight.addButton).click();

            cy.get(selectors.cartLink).click();

            cy.location('pathname').should('eq', '/cart.html');

            cy.get(selectors.product).should('have.length', 2);
            cy.get(backpack.removeButton).should('be.visible');
            checkCartProduct(bikeLight, bikeLightData);

            cy.get(selectors.cartBadge)
                .should('be.visible')
                .and('have.text', '2');

            cy.get(backpack.removeButton).click();

            cy.get(backpack.removeButton).should('not.exist');

            cy.contains(selectors.productName, backpack.name)
                .should('not.exist');

            cy.get(selectors.product).should('have.length', 1);

            checkCartProduct(bikeLight, bikeLightData);

            cy.get(selectors.cartBadge)
                .should('be.visible')
                .and('have.text', '1');
        });
    });

    it('QASD-T15 - Remover o último produto do carrinho', () => {
        const product = testData.bikeLight;

        cy.get(product.addButton).click();
        cy.get(selectors.cartLink).click();

        cy.location('pathname').should('eq', '/cart.html');

        cy.get(selectors.product).should('have.length', 1);

        cy.get(selectors.productName)
            .should('be.visible')
            .and('have.text', product.name);

        cy.get(selectors.productQuantity)
            .should('be.visible')
            .and('have.text', '1');

        cy.get(selectors.cartBadge)
            .should('be.visible')
            .and('have.text', '1');

        cy.get(product.removeButton).click();

        cy.get(selectors.product).should('not.exist');
        cy.get(product.removeButton).should('not.exist');
        cy.get(selectors.cartBadge).should('not.exist');
    });

    it('QASD-T16 - Retornar ao catálogo preservando a seleção', () => {
        const backpack = testData.backpack;
        const bikeLight = testData.bikeLight;

        cy.get(backpack.addButton).click();
        cy.get(bikeLight.addButton).click();
        cy.get(selectors.cartLink).click();

        cy.location('pathname').should('eq', '/cart.html');
        cy.get(selectors.product).should('have.length', 2);

        cy.get(selectors.cartBadge)
            .should('be.visible')
            .and('have.text', '2');

        cy.get(selectors.continueShopping).click();

        cy.location('pathname').should('eq', '/inventory.html');

        cy.get(selectors.title)
        .should('be.visible')
        .and('have.text', 'Products');

        cy.get(backpack.removeButton)
            .should('be.visible')
            .and('have.text', 'Remove');

        cy.get(bikeLight.removeButton)
            .should('be.visible')
            .and('have.text', 'Remove');

        cy.get(selectors.cartBadge)
            .should('be.visible')
            .and('have.text', '2');

        cy.get(selectors.cartLink).click();

        cy.location('pathname').should('eq', '/cart.html');
        cy.get(selectors.product).should('have.length', 2);

        [backpack, bikeLight].forEach((product) => {
            cy.get(product.removeButton)
                .should('be.visible')
                .closest(selectors.product)
                .within(() => {
                    cy.get(selectors.productName)
                        .should('be.visible')
                        .and('have.text', product.name);

                    cy.get(selectors.productQuantity)
                        .should('be.visible')
                        .and('have.text', '1');
                });
        });

        cy.get(selectors.cartBadge)
            .should('be.visible')
            .and('have.text', '2');
    });

    it('QASD-T17 - Atualizar o catálogo após remover todos os produtos', () => {
        const backpack = testData.backpack;
        const bikeLight = testData.bikeLight;

        cy.get(backpack.addButton).click();
        cy.get(bikeLight.addButton).click();
        cy.get(selectors.cartLink).click();

        cy.location('pathname').should('eq', '/cart.html');
        cy.get(selectors.product).should('have.length', 2);

        cy.get(backpack.removeButton).should('be.visible');
        cy.get(bikeLight.removeButton).should('be.visible');

        cy.get(selectors.cartBadge)
            .should('be.visible')
            .and('have.text', '2');

        cy.get(backpack.removeButton).click();

        cy.get(backpack.removeButton).should('not.exist');
        cy.get(selectors.product).should('have.length', 1);
        cy.get(bikeLight.removeButton).should('be.visible');

        cy.get(selectors.cartBadge)
            .should('be.visible')
            .and('have.text', '1');

        cy.get(bikeLight.removeButton).click();

        cy.get(selectors.product).should('not.exist');
        cy.get(selectors.cartBadge).should('not.exist');

        cy.get(selectors.continueShopping).click();

        cy.location('pathname').should('eq', '/inventory.html');

        cy.get(selectors.title)
                .should('be.visible')
                .and('have.text', 'Products');

        [backpack, bikeLight].forEach((product) => {
            cy.get(product.addButton)
                .should('be.visible')
                .and('have.text', 'Add to cart');

            cy.get(product.removeButton).should('not.exist');
        });

        cy.get(selectors.cartBadge).should('not.exist');
    });

});