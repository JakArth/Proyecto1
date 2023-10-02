/// <reference types="Cypress"/>
require('cypress-xpath');
require('cypress-plugin-tab');

describe("Asserts", () => {

    it('Asserts contain', () => {
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.title().should("eq", "My Shop")

        cy.get('#block_top_menu').contains("Women").click()
        //cy.get('.sf-menu').contains("Women").click()
    })

    it('Asserts find, eq', () => {
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.title().should("eq", "My Shop")

        cy.get('.sf-menu').contains("Women").click()
        cy.get('.product-container').find(".product-image-container").eq(2).click();
    })

    it('Validando producto', () => {
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.title().should("eq", "My Shop")

        cy.get('.sf-menu').contains("Women").click()
        cy.get('.product-container').find(".product-image-container").eq(3).click();
        cy.get('#product_condition .editable').then((e)=>{
            //cy.log(e.text())
            let est =e.text()
            if (est=="New product") {
                cy.log("El producto es nuevo")
            }
            
        })
        cy.get('#our_price_display').then((e)=>{
            cy.log(e.text())
            let precio=e.text()
            precio=precio.slice(1,3)
            cy.log(precio)
            if (precio > 30) {
                cy.log("No se puede comprar")
            }else{
                cy.log("Si se puede comprar")
                cy.get('.exclusive > span').click()
            }
        })
    })

    it('Asserts contain text y have text', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "DEMOQA")

        cy.get('#userName').should("be.visible").type("Juan Camilo")
        cy.get('#submit').click()
        cy.get('#name').should("have.text",'Name:Juan Camilo')
        cy.get('#name').should("contain.text",'Juan')
    }) 

    it('Asserts have,text y then', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "DEMOQA")

        cy.get('#userName').should("be.visible").type("Juan Camilo");
        //contain.value(parte del valor) y have.value(valor exacto)
        cy.get('#userName').should("have.value","Juan Camilo");
        cy.get('#userEmail').should("be.visible").type("correo@mail.com");
        cy.get('#submit').should("be.visible").click();
    })
    
    it('Asserts have class', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "DEMOQA")

        cy.get('#userName').should("be.visible").should("have.class","mr-sm-2").then(()=>{
            cy.get('#userName').type("Juan");
        })
        
    })
    
    it('Asserts have class y and', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "DEMOQA")

        cy.get('#userName').should("be.visible").and("have.class","mr-sm-2").then(()=>{
            cy.get('#userName').type("Juan");
        })
        
    })

    it('Asserts have class', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "DEMOQA")

        cy.get('#userName').should("be.visible").should("not.have.class","mr-sm-22").then(()=>{
            cy.get('#userName').type("Juan");
        })
        
    })
    //

    it.only('Asserts have class', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "DEMOQA")

        cy.get('#userName').should("be.visible").type("Juan")
        cy.get('#userName').invoke("attr","style","color:blue")
        })
        
    
})//cierre