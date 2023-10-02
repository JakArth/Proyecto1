/// <reference types="Cypress"/>

describe("Validando titulo", () => {

    it('Validar title', () => {
        cy.visit("https://demoqa.com")
        cy.get('.category-cards > :nth-child(1)').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()
        //cy.get('#userName').type("Juan")
        cy.title().should("eq","DEMOQA")

        cy.log("funciono el titulo")
        })

    

})//cierre