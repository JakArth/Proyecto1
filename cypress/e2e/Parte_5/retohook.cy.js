/// <reference types='Cypress'/>

import 'cypress-file-upload';
require('cypress-xpath');
require('cypress-plugin-tab');

beforeEach(() => {
cy.viewport(1500, 900);
});
before(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});
describe('Reto hooks', () => {

    it( 'login', () => {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click();
    })

    it('reto 1', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').should('be.visible').click();
        
    });

    it( 'dos', () => {
        cy.get(':nth-child(4) > .oxd-main-menu-item').should('be.visible').click();
    })

    it( 'tres', () => {
        cy.get(':nth-child(6) > .oxd-main-menu-item').should('be.visible').click();
    })

    after( () => {
        cy.get('.oxd-userdropdown-tab > .oxd-icon').should('be.visible').click();
        cy.wait(1500)
        cy.get(':nth-child(4) > .oxd-userdropdown-link').should('be.visible').click();
    });
})//cierre