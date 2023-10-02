/// <reference types="Cypress"/>
require('cypress-xpath');

describe("Selectores", () => {

    it.only('Selector por id', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "DEMOQA")

        cy.get('#userName').should("be.visible",{timeout:5000}).type("Juan")
        cy.get('#userEmail').should("be.visible").type("correo@es.com")
    })
    //----------------------------------
    it('Selector por atributos', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "DEMOQA")

        cy.get("[placeholder='Full Name']").should("be.visible").type("Juan")
        //cy.get('#lastName').should("be.visible").type("Cañon")
        //cy.get('#userEmail').should("be.visible").type("correo@es.com")
    })
    //------------------------------
    it('Selector por XPATH', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "DEMOQA")
        
        /*
        ** -=>//input[@id='userName' or/and type='text']<=--
        */
        cy.xpath("//*[@id='userName']").should("be.visible").type("Juan")
        cy.xpath("(//input[@id='userEmail'])[1]").should("be.visible").type("Juan@email.com")
        cy.xpath("//textarea[@id='currentAddress']").should("be.visible").type("cll 2 33")

    })
    //---------------------------------
    it('Selector por container', () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should("eq", "DEMOQA")

        cy.get('#genterWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').contains("Female").click()
        cy.wait(1500);
        //id por clase
        cy.get(".custom-control-label").contains("Other").click();
    })
    //--------------------------------------
    it('Selector por selector', () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should("eq", "DEMOQA")

        cy.get('#userNumber').should("be.visible").type("123489");
    })

    




})//cierre