/// <reference types="Cypress"/>

describe("Type pag up/down", () => {

    it('down', () => {
        cy.visit("https://testingqarvn.com.es/")
        cy.title().should("eq","TestingQaRvn | Mundo del Testing")
        
        cy.get('#top-menu > #menu-item-185 > a').type("{pagedown}")
        cy.wait(2000)

        })   
        
        it('up', () => {
            cy.visit("https://testingqarvn.com.es/")
            cy.title().should("eq","TestingQaRvn | Mundo del Testing")
            
            cy.get('#top-menu > #menu-item-185 > a').type("{pageup}")
            cy.wait(2000)
    
            })
            //funcion only
            it.only('ultimo', () => {
                cy.visit("https://testingqarvn.com.es/")
                cy.title().should("eq","TestingQaRvn | Mundo del Testing")
                
                cy.get('#top-menu > #menu-item-185 > a').type("{pageup}")
                cy.wait(2000)
        
                })      
            
        

    

})//cierre