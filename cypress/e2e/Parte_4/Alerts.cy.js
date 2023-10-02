/// <reference types="Cypress"/>
require('cypress-xpath');
require('cypress-plugin-tab');
beforeEach(() => {
    cy.viewport(1500, 900)
});

describe("Alertas", () => {

    it('Alertas 1', () => {
        cy.visit("https://qavbox.github.io/demo/alerts/")
        cy.title("eq", "Alerts")

        cy.get('[name="commit"]').click()

        cy.on("window:alert", (str) => {
            expect(str).to.equal("Have a nice day!!!")
            return true;
        })
        //cy.on("window:alert", ()=>false);
    })

    it('Alertas cancel', () => {
        cy.visit("https://qavbox.github.io/demo/alerts/")
        cy.title("eq", "Alerts")

        cy.get('#confirm').click()

        cy.on("window:alert", (str) => {
            expect(str).to.equal("Press a button!")
            
        })
        cy.on("window:confirm", ()=>false);
        cy.get('#Parademo').should("have.text","You pressed Cancel!")
    })

    it.only('Alertas prompt', () => {
        cy.visit("https://qavbox.github.io/demo/alerts/")
        cy.title("eq", "Alerts")

        
        cy.window().then((win) => {
            cy.stub(win,"prompt").returns("Juan")
        })
        cy.wait(1500);
        cy.get('#prompt').click()

        cy.get('#Parademo').should("have.text","Hello Juan! How are you today?")

    })


})//cierre