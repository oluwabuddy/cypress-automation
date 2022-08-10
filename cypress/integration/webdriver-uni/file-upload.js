/// <reference types="Cypress" />


describe("Test file upload via webdriver uni", () => {
    it("Upload a file...", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#file-upload').invoke("removeAttr", "target").click();
        cy.fixture("mac-laptop-png-13.png", "base64").then(fileContent => {
            cy.get("#myFile").attachFile(
                {
                    fileContent,
                    fileName: "mac-laptop-png-13.png",
                    mimeType: "image/png"
                },
                {
                    uploadeType: "input"
                }
            )
        })
        cy.get("#submit-button").click();
    });
    it("Upload no file...", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#file-upload').invoke("removeAttr", "target").click();
       
        cy.get("#submit-button").click();
    });
   

    
})