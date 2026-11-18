describe('Checkout - Validação funcional', () => {
    const selectors = {
        username: '[data-test="username"]',
        password: '[data-test="password"]',
        loginButton: '[data-test="login-button"]',
        addBackpack: '[data-test="add-to-cart-sauce-labs-backpack"]',
        cartLink: '[data-test="shopping-cart-link"]',
        cartBadge: '[data-test="shopping-cart-badge"]',
        checkoutButton: '[data-test="checkout"]',
        firstName: '[data-test="firstName"]',
        lastName: '[data-test="lastName"]',
        postalCode: '[data-test="postalCode"]',
        continueButton: '[data-test="continue"]',
        error: '[data-test="error"]',

        product: '[data-test="inventory-item"]',
        productName: '[data-test="inventory-item-name"]',
        productDescription: '[data-test="inventory-item-desc"]',
        productQuantity: '[data-test="item-quantity"]',
        productPrice: '[data-test="inventory-item-price"]',
        subtotal: '[data-test="subtotal-label"]',
        tax: '[data-test="tax-label"]',
        total: '[data-test="total-label"]',

        cancelButton: '[data-test="cancel"]',

        removeBackpack: '[data-test="remove-sauce-labs-backpack"]',

        finishButton: '[data-test="finish"]',
        confirmationMessage: '[data-test="complete-header"]',
        backHomeButton: '[data-test="back-to-products"]',
    };

    const testData = {
        username: 'standard_user',
        password: 'secret_sauce',
        firstName: 'QA',
        lastName: 'Tester',
        postalCode: '12345',
    };

    beforeEach(() => {
        cy.visit('/');
        cy.get(selectors.username).type(testData.username);
        cy.get(selectors.password).type(testData.password);
        cy.get(selectors.loginButton).click();

        cy.location('pathname').should('eq', '/inventory.html');
        cy.get(selectors.cartBadge).should('not.exist');

        cy.get(selectors.addBackpack).click();
        cy.get(selectors.cartBadge).should('have.text', '1');
        cy.get(selectors.cartLink).click();

        cy.location('pathname').should('eq', '/cart.html');
    });

    function openCheckout() {
        cy.get(selectors.checkoutButton).click();
        cy.location('pathname').should('eq', '/checkout-step-one.html');
    }

    const requiredFields = [
        {
            title: 'QASD-T18 - Bloquear avanço com First Name vazio',
            field: 'firstName',
            message: 'Error: First Name is required',
        },
        {
            title: 'QASD-T19 - Bloquear avanço com Last Name vazio',
            field: 'lastName',
            message: 'Error: Last Name is required',
        },
        {
            title: 'QASD-T20 - Bloquear avanço com ZIP/Postal Code vazio',
            field: 'postalCode',
            message: 'Error: Postal Code is required',
        },
    ];

    requiredFields.forEach(({ title, field, message }) => {
        it(title, () => {
            openCheckout();

            cy.get(selectors[field]).should('have.value', '');

            requiredFields.forEach(({ field: input }) => {
                if (input !== field) {
                    cy.get(selectors[input]).type(testData[input]);
                }
            });

            cy.get(selectors.continueButton).click();

            cy.location('pathname').should('eq', '/checkout-step-one.html');
            cy.get(selectors.error)
                .should('be.visible')
                .and('have.text', message);
        });
    });

    function continueToOverview() {
        cy.get(selectors.firstName).type(testData.firstName);
        cy.get(selectors.lastName).type(testData.lastName);
        cy.get(selectors.postalCode).type(testData.postalCode);
        cy.get(selectors.continueButton).click();

        cy.location('pathname').should('eq', '/checkout-step-two.html');
    }

    function readOrderItem() {
        return cy.get(selectors.product)
            .should('have.length', 1)
            .and('be.visible')
            .then(($item) => ({
                name: $item.find(selectors.productName).text().trim(),
                description: $item.find(selectors.productDescription).text().trim(),
                quantity: $item.find(selectors.productQuantity).text().trim(),
                price: $item.find(selectors.productPrice).text().trim(),
            }));
    }

    function toCents(text) {
        const amount = text.trim().match(/\$(\d+)\.(\d{2})$/);

        expect(amount, `valor monetário em "${text}"`).not.to.be.null;

        return Number(amount[1]) * 100 + Number(amount[2]);
    }

    it('QASD-T21 - Conferir item e valores no resumo do pedido', () => {
        readOrderItem().then((cartItem) => {
            expect(cartItem.name).to.equal('Sauce Labs Backpack');
            expect(cartItem.description).not.to.be.empty;
            expect(cartItem.quantity).to.equal('1');
            const itemPrice = toCents(cartItem.price);

            openCheckout();
            continueToOverview();

            readOrderItem().then((overviewItem) => {
                expect(overviewItem).to.deep.equal(cartItem);
            });

            cy.get(selectors.subtotal).should('be.visible').invoke('text').then((subtotalText) => {
                const subtotal = toCents(subtotalText);
                expect(subtotal, 'subtotal em centavos').to.equal(itemPrice);

                cy.get(selectors.tax).should('be.visible').invoke('text').then((taxText) => {
                    const tax = toCents(taxText);

                    cy.get(selectors.total).should('be.visible').invoke('text').then((totalText) => {
                        expect(toCents(totalText), 'total em centavos').to.equal(subtotal + tax);
                    });
                });
            });
        });
    });

    it('QASD-T22 - Cancelar no formulário e preservar o item no carrinho', () => {
        openCheckout();

        cy.get(selectors.cancelButton).click();

        cy.location('pathname').should('eq', '/cart.html');
        readOrderItem().then((item) => {
            expect(item.name).to.equal('Sauce Labs Backpack');
            expect(item.quantity).to.equal('1');
        });
    });

    it('QASD-T23 - Cancelar no resumo e preservar o item no carrinho', () => {
        openCheckout();
        continueToOverview();

        cy.get(selectors.cancelButton).click();

        cy.location('pathname').should('eq', '/inventory.html');
        cy.get(selectors.cartBadge)
            .should('be.visible')
            .and('have.text', '1');
        cy.get(selectors.removeBackpack)
            .should('be.visible')
            .and('have.text', 'Remove');

        cy.get(selectors.cartLink).click();

        cy.location('pathname').should('eq', '/cart.html');
        readOrderItem().then((item) => {
            expect(item.name).to.equal('Sauce Labs Backpack');
            expect(item.quantity).to.equal('1');
        });
    });

    it('QASD-T24 - Concluir pedido e verificar que o carrinho fica vazio', () => {
        openCheckout();
        continueToOverview();

        cy.get(selectors.finishButton).click();

        cy.location('pathname').should('eq', '/checkout-complete.html');
        cy.get(selectors.confirmationMessage)
            .should('be.visible')
            .and('have.text', 'Thank you for your order!');
        cy.get(selectors.cartBadge).should('not.exist');

        cy.get(selectors.backHomeButton).click();

        cy.location('pathname').should('eq', '/inventory.html');
        cy.get(selectors.addBackpack)
            .should('be.visible')
            .and('have.text', 'Add to cart');

        cy.get(selectors.cartLink).click();

        cy.location('pathname').should('eq', '/cart.html');
        cy.get(selectors.product).should('not.exist');
    });

});
