/// <reference types="Cypress"/>
require('cypress-xpath');
require('cypress-plugin-tab');
beforeEach(() => {
    cy.viewport(1500, 900)
});

describe("Manejo de alias", () => {

    it('Alias 1', () => {
        cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html")
        cy.title().should("eq","Input Validation")

        cy.get('#firstname').should("be.visible").as("nom")
        cy.get('@nom').type("Juan");
        cy.get('#surname').should("be.visible").as("ape")
        cy.get('@ape').type("Cañon Pineda");
        cy.get('#age').should("be.visible").as("edad").type("23")
        cy.get('#country').should("be.visible").as("pais").select("Colombia");
        cy.get('[type="submit"]').click()
        cy.get('#notes').should("be.visible").as("not").type("23")
        })
    

})//cierre