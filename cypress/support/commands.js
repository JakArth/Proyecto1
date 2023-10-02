// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Texto_visible', (selector,texto) => { 
    cy.get(selector).should('be.visible').type(texto);
})

Cypress.Commands.add('Texto_visible_xpath', (selector,texto) => { 
    cy.xpath(selector).should('be.visible').type(texto);
})

Cypress.Commands.add('Click', (selector) => { 
    cy.get(selector).should('be.visible').click();
})

Cypress.Commands.add('Click_force', (selector) => { 
    cy.get(selector).should('be.visible').click({force: true});
})

//Funciones por conjunto
Cypress.Commands.add('Bloque_DEMOQA',(name,email,dir,text) => { 
    cy.get('#userName').should('be.visible').type(name);
    cy.get('#userEmail').should('be.visible').type(email);
    cy.get(".col-md-9 > #currentAddress").should('be.visible').type(dir);
    cy.get('.col-md-9 > #permanentAddress').should('be.visible').type(text);
    cy.get('#submit').should('be.visible').click();

})

Cypress.Commands.add('Bloque_Reto',(name,ape,email,phone,dir,city,state,code,url,text) => { 
    cy.get(':nth-child(2) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(name);
    cy.get(':nth-child(3) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(ape);
    cy.get(':nth-child(4) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(email);
    cy.get(':nth-child(5) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(phone);
    cy.get(':nth-child(6) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(dir);
    cy.get(':nth-child(7) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(city);
    
    cy.get('.selectContainer > .input-group > .form-control').select(state)
    cy.get(':nth-child(9) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(code);
    cy.get(':nth-child(10) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(url);
    cy.get(':nth-child(2) > label > input').check();
    cy.get(':nth-child(12) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(text);

    cy.get('.btn').should('be.visible').click();

})

Cypress.Commands.add('Validar',(campo, vari) => { 
    cy.xpath(campo).should("be.visible").then((val) => {
            let dato=val.text();
            cy.log(dato)
            if (dato=="Please supply a valid email address"){
                cy.log("###########################")
                cy.log("El " +vari+ " no es valido")
                cy.log("###########################")
            }
        });
})

Cypress.Commands.add('Validar2',(campo,men,vari) => { 
    cy.xpath(campo).should("be.visible").should("contain",men).then((val) => {
            cy.log("###########################")
            cy.log("El " +vari+ " no es valido")
            cy.log("###########################")
            
        });
})




