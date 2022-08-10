/// <reference types="Cypress" />


describe("Verify checkboxes via webdriveruni", () => {
    beforeEach(function () {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });
    })
    it("Confirm and validate checkbox", () => {
        cy.get(':nth-child(5) > input').uncheck().should('not.be.checked')
        cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
        cy.get('#radio-buttons').find("[type='radio']")

    });



})