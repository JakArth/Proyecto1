/// <reference types='Cypress'/>

import 'cypress-file-upload';
require('cypress-xpath');
require('cypress-plugin-tab');

beforeEach(() => {
    cy.viewport(1500, 900);
});

describe('Hooks', () => {
    before(() => {
        // Se ejecuta una vez antes de todas las pruebas del bloque
        cy.log( 'Inicio de todo')
    })

    beforeEach(() => {
        // Se ejecuta antes de cada prueba del bloque
        cy.log( 'Se ejecuta antes de cada prueba del bloque')
    })

    afterEach(() => {
        // Se ejecuta después de cada prueba en el bloque
        cy.log('Se ejecuta después de cada prueba en el bloque')
    })

    after(() => {
        // Se ejecuta una vez después de todas las pruebas en el bloques
        cy.log('Final de todo')
    })

    it( 'caso 1', () => {
        cy.log( 'caso 1')
    })
    it( 'caso 2', () => {
        cy.log( 'caso 2')
    })
})