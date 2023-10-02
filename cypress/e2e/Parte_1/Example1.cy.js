describe("Curso cypress", () => {

    it('Test one', () => {
        cy.visit("https://testingqarvn.com.es/")
        //.sub-menu
        cy.get('#top-menu > #menu-item-179 > [href="https://testingqarvn.com.es/practicas-qa/"]').each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            if ($el.text() === 'Datos Personales') {
                // wrap this element so we can
                // use cypress commands on it
                cy.wrap($el).select($el)
            }
        })

    });

})//cierre