/// <reference types="Cypress"/>

describe("Clic Basico", () => {

    it('Clic sencillo', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        cy.title().should("eq", "OrangeHRM")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').should("be.visible").click()

        cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click()
        cy.get('.oxd-topbar-body').should("be.visible")
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').should("be.visible").click()
    })

    //Clic forzado
    it('Clic force true', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        cy.title().should("eq", "OrangeHRM")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').should("be.visible").click()

        cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click()
        cy.get('.oxd-topbar-body').should("be.visible")
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').should("be.visible").click({ force: true })
    })

    //Clic por coordenadas
    it.only('Clic con coordenadas', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        cy.title().should("eq", "OrangeHRM")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').should("be.visible").click()
        cy.wait(1500)
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("be.visible").click(50, 5)
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("be.visible").click(70, 18.5)
    })



})//cierre