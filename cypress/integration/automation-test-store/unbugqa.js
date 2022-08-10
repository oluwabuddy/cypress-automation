/// <reference types="Cypress" />

describe("Test login page with valid data", () => {
    it("Verify user can access google", () => {
      cy.visit('https://google.com');
      cy.get('.gLFyf').type("Oshikomaiya Oluwaseun");
      cy.get('.FPdoLc > center > .gNO89b').click();

        
    });
})