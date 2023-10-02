/// <reference types='Cypress'/>

import 'cypress-file-upload';
require('cypress-xpath');
require('cypress-plugin-tab');

before(function(){
    cy.fixture("datos2").then(function(data){
        globalThis.data=data
    })
});

beforeEach(() => {
cy.viewport(1500, 900);
});

describe('Carga con Fixture', () => {

    it('Demo Json', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.title('eq','DEMOQA')
        
        data.forEach((data) => {
            
            cy.get('#userName').clear().should('be.visible').type(data.name);
            cy.get('#userEmail').clear().should('be.visible').type(data.email);
            cy.get('#currentAddress').clear().should('be.visible').type(data.dir);
            cy.get('#permanentAddress').clear().should('be.visible').type(data.dir2);
            cy.get('#submit').click()
        
        })
            
    });
})//cierre

