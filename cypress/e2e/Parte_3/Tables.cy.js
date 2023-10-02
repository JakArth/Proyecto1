/// <reference types="Cypress"/>
require('cypress-xpath');
require('cypress-plugin-tab');
beforeEach(() => {
    cy.viewport(1500, 900)
});

describe("Elementos de tabla", () => {

    it('children', () => {
        cy.visit("https://demoqa.com/alerts")
        cy.title("eq", "DEMOQA")

        cy.get('.row').children('.col-12.col-md-6').children("#javascriptAlertsWrapper")
            .should("contain", "Click me").click()

    })

    it('children', () => {
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.title("eq", "My Shop")

        cy.get('#block_top_menu').children(".sf-menu").contains("li", "Women").click()

    })

    it('Filter', () => {
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.title("eq", "My Shop")

        cy.get('#block_top_menu').filter(".sf-menu")

    })

    it('Find', () => {
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.title("eq", "My Shop")

        cy.get('#block_top_menu').find(".sf-with-ul").contains("Women").click()

    })

    it('Find', () => {
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.title("eq", "My Shop")

        cy.get('#block_top_menu').find(".sf-with-ul").first().click()
        cy.wait(1500);
        cy.get('#block_top_menu').find(".sf-with-ul").last().click()
    })
    it('NextAll', () => {
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.title("eq", "My Shop")

        cy.get('#block_top_menu')(".sf-with-ul").nextAll()

    })
    it('Parent', () => {
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.title("eq", "My Shop")

        cy.get(".container").parent().should("have.class", "banner")
    })

    it('Recorrido ', () => {
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.title("eq", "My Shop")

        for (let x = 0; x <= 3; x++) {
            cy.get('.sf-with-ul').eq(x).click({ force: true })
            cy.wait(1500);

        }
    })

    it('Obteniendo datos de una tabla', () => {
        cy.visit("https://qavbox.github.io/demo/webtable/")
        cy.title("eq", "webtable")

        const datos = []
        cy.get('#table02 td').each(($el, index, $list) => {
            datos[index] = $el.text()
        }).then(() => {
            for (let i = 0; i <= datos.length; i++)
                cy.log(datos[i])
        })
    })

    it('Sumando datos', () => {
        cy.visit("https://qavbox.github.io/demo/webtable/")
        cy.title("eq", "webtable")

        const datos = []
        let cant=0
        cy.get('#table02 td').each(($el, index, $list) => {
            datos[index] = $el.text()
        }).then(() => {
            for (let i = 0; i <= datos.length; i++){
                cy.log(datos[i])

                if (Number(datos[i])) {
                    cant+=Number(datos[i])
                }
            }
            cy.log("La cantidad de datos es: "+cant)
            expect(cant).eq(2380)
        })
    })

    it.only('Valor de campo especifico', () => {
        cy.visit("https://qavbox.github.io/demo/webtable/")
        cy.title("eq", "webtable")

        const campo=cy.get('tbody > :nth-child(5) > :nth-child(1)')
        //cy.log(campo)
        campo.each(($el,index,$list)=>{
            const dato =$el.text()
            cy.log(dato)

            if (dato.includes("Airi Satou")) {
                campo.eq(index).next().next().next().then((age)=>{
                    const Edad=age.text()
                    cy.log(Edad)
                    cy.log("La edad es: "+Edad)
                })
            }
        })
    })



})//cierre