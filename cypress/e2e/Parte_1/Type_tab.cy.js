/// <reference types="Cypress"/>
require('cypress-plugin-tab')

describe("Type_tab", () => {

    it('tab', () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should("eq","Datos Personales | TestingQaRvn")
        cy.get('#wsf-1-field-21').type("Juan").tab()
        .type("Cañon").tab()
        .type("email@es.com")
        })

    

})//cierre