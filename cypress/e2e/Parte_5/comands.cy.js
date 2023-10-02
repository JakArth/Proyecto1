/// <reference types='Cypress'/>

import 'cypress-file-upload';
require('cypress-xpath');
require('cypress-plugin-tab');

beforeEach(() => {
cy.viewport(1500, 900);
cy.visit('https://demoqa.com/text-box');
cy.title('eq','DEMOQA');

});

describe('Comando personalizados', () => {

    it('Comando uno', () => {
        cy.Texto_visible("#userName","Juan");
        cy.Texto_visible("#userEmail","email@es.com");
        cy.Texto_visible_xpath("//textarea[@id='currentAddress']","Cll 3 # 4-12")
        cy.Texto_visible_xpath("//textarea[@id='permanentAddress']","lakdhf")
        cy.Click("#submit")
    });

    it("Comando por bloque",() => {
        cy.Bloque_DEMOQA("Juan","juan@es.com","cll 3 # 4-12","coisdaidjl");
    });
})//cierre