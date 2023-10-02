/// <reference types="Cypress"/>

const { should } = require('chai');

require('cypress-xpath');
require('cypress-plugin-tab');

describe("Select 1", () => {

    it('Select', () => {
        cy.visit("https://testingqarvn.com.es/combobox/")
        /*
        **Multi select .select(["@","@","@"])
        */
        cy.get('#wsf-1-field-53').should("be.visible").select(1)
        .should("have.value","Linux")
        })


})//cierre