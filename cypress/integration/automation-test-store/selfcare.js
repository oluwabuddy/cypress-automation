/// <reference types="Cypress" />

describe("Test login page with valid data", () => {
    it("Should be able to log user in", () => {
        cy.visit("https://selfcare.spectranet.com.ng/login");
        cy.get('#userid').type('16113650');
        cy.get('#password').type('123456');
        cy.get('.MuiButton-containedPrimary').click();
        cy.get('#notistack-snackbar').should('have.text', 'bool is not defined')
        
    });
})