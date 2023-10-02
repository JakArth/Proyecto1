/// <reference types="Cypress"/>
import 'cypress-file-upload';
require('cypress-xpath');
require('cypress-plugin-tab');
beforeEach(() => {
    cy.viewport(1500, 900)
});


describe("Upload", () => {

    it('Upload imagen', () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should("eq","DEMOQA")
        
        const ruta = "6025.jpg"
        cy.get('#uploadPicture').attachFile(ruta);
        
        })

    

})//cierre