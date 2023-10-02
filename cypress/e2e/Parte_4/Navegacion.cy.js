/// <reference types='Cypress'/>

import 'cypress-file-upload';
require('cypress-xpath');
require('cypress-plugin-tab');

beforeEach(() => {
cy.viewport(1500, 900);
});

describe('Navegacion', () => {

    it('back forward', () => {
        cy.visit('https://demoqa.com/');
        cy.title('eq','DEMOQA');
        cy.get('.category-cards > :nth-child(1) > :nth-child(1)').click();
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').click(); 
        cy.wait(1500)
        cy.go("back")
        cy.go("back")
        cy.wait(1500)

        cy.go("forward");
    });

    it.only('refresh', () => {
        cy.visit('https://demoqa.com/');
        cy.title('eq','DEMOQA');
        cy.get('.category-cards > :nth-child(1) > :nth-child(1)').click();
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').click(); 

        cy.get('#userName').should('be.visible').type('Juan');
        cy.get('#userEmail').should('be.visible').type('correo@es.com');
        
        cy.reload()
        
    });
})//cierre