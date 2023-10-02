/// <reference types='Cypress'/>

import 'cypress-file-upload';
require('cypress-xpath');
require('cypress-plugin-tab');

// before(function(){
//     cy.fixture("datos").then(function(data){
//         // this.data=data
//         globalThis.data=data
//     })
// });

before(function(){
    cy.fixture("datos").as("Campos")
    
});

beforeEach(() => {
cy.viewport(1500, 900);
});

describe('Carga con Fixture', () => {

    it('Demo Json', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.title('eq','DEMOQA')
        
        cy.get("@Campos").then((data)=>{
        
            cy.get('#userName').should('be.visible').type(data.name);
            cy.get('#userEmail').should('be.visible').type(data.email);
            cy.get('#currentAddress').should('be.visible').type(data.dir);
            cy.get('#permanentAddress').should('be.visible').type(data.dir2);
            cy.get('#submit').click()
        })
    });
})//cierre