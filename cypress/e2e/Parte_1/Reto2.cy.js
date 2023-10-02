/// <reference types="Cypress"/>
require('cypress-xpath');
require('cypress-plugin-tab');

describe("Reto 2", () => {

    it('Probando app', () => {
        cy.visit("https://computer-database.gatling.io/computers")
        cy.title().should("eq","Computers database")

        cy.xpath("//input[@id='searchbox']").type("ACE");
        cy.get('#searchsubmit').should("be.visible").click();
        cy.get('#add').should("be.visible").click();

        cy.get('#name').type('Asus Prime');
        cy.get('#introduced').type('2023-09-15').should("be.visible")
        
        
        //selector
        cy.xpath("//select[@id='company']").should("be.visible")
        .select("IBM").should("have.value","13");
        cy.wait(1500);
        cy.xpath("//input[@value='Create this computer']").should("be.visible").
        click();

        cy.xpath("//input[@id='searchbox']").type("Asus Prime");
        cy.get('#searchsubmit').
        click();
        })

    

})//cierre