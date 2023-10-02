/// <reference types='Cypress'/>

import 'cypress-file-upload';
require('cypress-xpath');
require('cypress-plugin-tab');

beforeEach(() => {
cy.viewport(1500, 900);
});



describe('Ejemplos de hooks', () => {

    before(() => {
    cy.visit('http://testingqarvn.com.es/combobox/');
    cy.title('eq','ComboBox | TestingQaRvn')
})
it("Test uno", () => {
        cy.get('[type="checkbox"]').check({force: true}).should("be.checked");
        cy.wait(1500)
        
    })

    it("Test dos", () => {
        // cy.visit('http://testingqarvn.com.es/combobox/')
        cy.get('[type="checkbox"]').uncheck({force: true}).should("not.be.checked");
        
    })
    

    

})//cierre