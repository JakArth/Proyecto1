/// <reference types="Cypress"/>

require('cypress-xpath');
require('cypress-plugin-tab');
beforeEach(() => {
    cy.viewport(1500, 900)
});

describe("Ciclos each", () => {

    it('each one', () => {
        cy.visit("http://www.automationpractice.pl/index.php?id_category=3&controller=category")
        cy.get('.product-name').each(($el,index,$list) => {
            let name = $el.text()
            if (name.includes("Blouse")) {
                cy.wrap($el).click()
            }

        });

    })

    it.only('each reto', () => {
        cy.visit("http://www.automationpractice.pl/index.php?id_category=3&controller=category")
        
        for (let x = 0; x <=6; x++) {
            cy.get('#center_column .product-name').eq(x).click({force:true})
            //cy.wait(1500);
            cy.get('#quantity_wanted').should("be.visible").clear().type(2)
            cy.get('#group_1').select("L")
            cy.get('[itemscope=""] > a > span').click()
        }

        });

    

})//cierre