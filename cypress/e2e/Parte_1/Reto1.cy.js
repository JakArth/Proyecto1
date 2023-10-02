/// <reference types="Cypress"/>
require('cypress-plugin-tab')
describe("Reto 1", () => {

    it('', () => {
        cy.visit("https://demoqa.com")
        cy.get('.category-cards > :nth-child(1)').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click()
        cy.get('#searchBox').should("be.visible").type("Cierra")
        cy.get('#searchBox').should("be.visible").clear()
        //boton add
        cy.get('#addNewRecordButton').should("be.visible").click()
        cy.get('#firstName').should("be.visible").type("Juan")
        cy.get('#lastName').should("be.visible").type("Cañon")
        cy.get('#userEmail').should("be.visible").type("correo@es.com")
        cy.get('#age').should("be.visible").type("30")
        cy.get('#salary').should("be.visible").type("30000")
        cy.get('#department').should("be.visible").type("Systems")
        cy.get('#submit').should("be.visible").click()
        })

    

})//cierre