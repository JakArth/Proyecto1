/// <reference types="Cypress"/>
require('cypress-xpath');
require('cypress-plugin-tab');
beforeEach(() => {
    cy.viewport(1500, 900)
});

describe("Funciones Invoke", () => {

    it('invoke text', () => {
        cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")

        cy.get('.page-body > :nth-child(5)').invoke("text").as("info")
        cy.get('@info').should("eq", "The information will be submitted to the server if it passes client side validation.");

        cy.xpath("//label[@for='firstname']").invoke("text").as("name")
        cy.get('@name').should("contain", "First name:").then(() => {
            cy.get('#firstname').type("Juan");
        });
    })

    it('invoke estilos', () => {
        cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")

        cy.get('[for="firstname"]').invoke("attr","style","color:blue; font-size: 30px;")
        
    })
    it('invoke ocultar y mostrar', () => {
        cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")

        cy.get('[for="firstname"]').invoke("hide")
        cy.get('#firstname').invoke("hide")
        cy.wait(1500);
        cy.get('[for="firstname"]').invoke("show","3s")
        cy.get('#firstname').invoke("show","4s")
    })
    it('invoke reto', () => {
        cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")

        cy.get('[for="surname"]').invoke("hide")
        cy.get('#surname').invoke("hide")
        cy.wait(1500);

        cy.get('#firstname').as("name").type("Juan")
        .then(()=>{
            cy.get('[for="surname"]').invoke("show")
            cy.get('#surname').invoke("show")
            cy.get('#surname').type("Cañon")
        })
    })

    it('invoke ocultar y mostrar', () => {
        cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")

        cy.get('[for="firstname"]').invoke("hide")
        cy.get('#firstname').invoke("hide")
        cy.wait(1500);
        cy.get('[for="firstname"]').invoke("show","3s")
        cy.get('#firstname').invoke("show","4s")
    })

    it.only('invoke ocultar y mostrar', () => {
        cy.visit("https://demoqa.com/")
        cy.title().should("eq", "DEMOQA")

        cy.get('header > a > img').invoke("attr", "src").should("include","/images/Toolsqa.jpg")
        // invoke("removeAttr","target") eliminar la apertura de una nueva pestaña
    })


})//cierre