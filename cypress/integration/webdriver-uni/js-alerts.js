/// <reference types="Cypress" />


describe("Handle js alerts", () => {
    it("Confirm js alert contains the correct text", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true})
        cy.get('#button1').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('i am an alert box!')
        })

     
    });
    it.only("Validate js confirm alert box works correctly when clicking ok", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true})
        //cy.get('#button1').click();
        cy.get('#button4').click();
        cy.on('window:confirm', (str) => {
            return false;
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')

       

     
    });

    
})