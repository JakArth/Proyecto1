/// <reference types="Cypress"/>
require('cypress-xpath');
require('cypress-plugin-tab');

describe("Check box", () => {

    it('check 1', () => {
        cy.visit("https://demoqa.com/checkbox")

        cy.get('.col-md-6').should("be.visible")
            .click(415, 10);
        cy.get("[type='checkbox']").should("be.enabled").check({ force: true });
    })

    //Por conjunto
    it('Check 2', () => {
        cy.visit('https://testingqarvn.com.es/combobox/');

        cy.get("[type='checkbox']").should("be.enabled").check({ force: true }).should("be.checked");
        cy.wait(1500);
        cy.get("[type='checkbox']").should("be.enabled").uncheck({ force: true }).should("not.be.checked");
    });

    //Por seleccion 
    it('Check 2', () => {
        cy.visit('https://testingqarvn.com.es/combobox/');
        //No puedo usar check() porque estoy seleccionando un label
        cy.get('#wsf-1-label-50-row-1').should("be.visible").click();
        cy.xpath("//label[@id='wsf-1-label-50-row-2']").should("be.visible").click();
    });

    //Radio Button
    it.only('Radio button', () => {
        cy.visit('https://testingqarvn.com.es/combobox/');

        cy.get("[type='radio']").should("be.enabled");
        cy.get('#wsf-1-label-51-row-2').click()
        

    });
    

})//cierre