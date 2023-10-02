/// <reference types="Cypress"/>

describe("Assert", () => {

    it('Demo', () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should("eq","Datos Personales | TestingQaRvn")
        cy.get('#wsf-1-field-21').should("be.visible").type("Juan")
        cy.get('#wsf-1-field-22').should("be.visible").type("Cañon")
        cy.get('#wsf-1-field-23').should("be.visible").should("be.enabled").type("correo@es.com")
        });
        
        

})//cierre