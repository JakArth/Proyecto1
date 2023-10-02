/// <reference types="Cypress"/>
import 'cypress-file-upload';
require('cypress-xpath');
require('cypress-plugin-tab');
beforeEach(() => {
    cy.viewport(1500, 900)
});

describe("Uso de los snippets", () => {

    it('snippets 1', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title("eq","DEMOQA")
        cy.get('').should('be.visible').type('');
        cy.wait('')
        })
        c_

})//cierre