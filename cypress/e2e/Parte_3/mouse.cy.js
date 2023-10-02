/// <reference types="Cypress"/>
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath');
require('cypress-plugin-tab');
beforeEach(() => {
    cy.viewport(1500, 900)
});

describe("mouse Envents", () => {

    it('Drag and Drop', () => {
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
        cy.title("eq", "The Internet")
        cy.wait(1500);
        cy.get('#column-a').drag('#column-b', { force: true });
    })

    it('Drag and Drop', () => {
        cy.visit("https://demoqa.com/droppable")
        cy.title("eq", "DEMOQA")
        cy.wait(1500);
        cy.get('#draggable').drag('#simpleDropContainer > #droppable', { force: true });
    })

    it('Drag and Drop', () => {
        cy.visit("https://www.way2automation.com/")
        cy.title("eq", "Get Online Selenium Certification Course | Way2Automation")
        cy.wait(1500);

        cy.get('.eicon-close').should("be.visible").click()
        cy.contains("All Courses").click()
        
        cy.contains("DevOps").click()
        
    })
    
    it('Drag and Drop', () => {
        cy.visit("http://testingqarvn.com.es")
        cy.title("eq", "TestingQaRvn | Mundo del Testing")
        cy.wait(1500);

        /*
        ** .invoke("removeAttr","target") para eliminar 
        ** la apertura a una nueva pestaña 
        */
        cy.contains("Prácticas QA").trigger("mouseover")
        cy.wait(1500);
        cy.contains("Datos Personales").click()

    })
    
    it('Sliser', () => {
        cy.visit("https://demoqa.com/slider/")
        cy.title("eq", "DEMOQA")
        cy.wait(1500);

        cy.get('.range-slider').invoke("attr","value","50")

    })

    it('Date', () => {
        cy.visit("https://testingqarvn.com.es/calendarios/")
        cy.title("eq", "Calendarios | TestingQaRvn")
        cy.wait(1500);

        cy.get('#wsf-1-field-79').should("be.visible").type("09/18/2023")
        .tab().type("09/20/2023").tab()

    })

    it.only('Date 2', () => {
        cy.visit("https://testingqarvn.com.es/calendarios/")
        cy.title("eq", "Calendarios | TestingQaRvn")
        cy.wait(1500);

        cy.get('#wsf-1-field-79').should("be.visible").type("09/18/2023")
        .tab().type("09/20/2023 {enter}")

    })

})//cierre