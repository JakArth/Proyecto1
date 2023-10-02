/// <reference types='Cypress'/>

import 'cypress-file-upload';
require('cypress-xpath');
require('cypress-plugin-tab');

beforeEach(() => {
cy.viewport(1500, 900);
cy.visit('http://demo.seleniumeasy.com/input-form-demo.html');
cy.title('eq','Selenium Easy - Input Form Demo with Validations')
});

describe('Reto commands', () => {

    it('Formulario', () => {
        cy.Bloque_Reto("Juan","Canon","juan@example.com","1234567890","cll 4 #2","ilinox","Kansas","1234",".com","Reto de commnads")
    });

    it.only('Validando email', () => {
        cy.Bloque_Reto("Juan","Canon","juanexample.com","1234567890","cll 4 #2","ilinox","Kansas","1234",".com","Reto de commnads")
        // cy.Validar("//small[normalize-space()='Please supply a valid email address']","Email")
        cy.Validar2("//small[normalize-space()='Please supply a valid email address']","Email",'Please supply a valid email address')
    });
    it('Validando nombre', () => {
        cy.Bloque_Reto("*****","Canon","juan@example.com","1234567890","cll 4 #2","ilinox","Kansas","1234",".com","Reto de commnads")
    });
})//cierre