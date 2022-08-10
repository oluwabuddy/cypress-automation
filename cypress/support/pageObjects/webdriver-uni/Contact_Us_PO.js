class Contact_Us_PO{
    contactForm_Submission(firstName, lastName, email, comment, $selector, textToLocate) {
        cy.get('[name="first_name"]').type(data.first_name)
        cy.get('[name="last_name"]').type(data.last_name)
        cy.get('[name="email"]').type(data.email)
        cy.get('textarea.feedback-input').type("can we make it more interesting")
        cy.get('[type="submit"]').click();
        cy.get($selector).contains(textToLocate);
        cy.screenshot();
        cy.screenshot("Made a contact us form via webdriverUni")
 }
}
export default Contact_Us_PO;