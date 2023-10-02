/// <reference types="Cypress"/>

describe("Funciones Type", () => {

    it('Type --Enter', () => {
        cy.visit("https://www.google.com")
        cy.title().should("eq","Google")
        cy.wait(1500)
        cy.get('#APjFqb').type("Cypress io{enter}")
        cy.get('[lang="en"] > .tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click()
        })

    

})//cierre