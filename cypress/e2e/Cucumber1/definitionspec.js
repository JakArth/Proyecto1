const { And } = require("cypress-cucumber-preprocessor/steps/index")
const { When } = require("cypress/types/jquery")

Given ('Abrir el navegador',()=>{
    cy.visit('https://demoqa.com/text-box')

})

When('Cargando el nombre',()=>{
    cy.get('#userName').should('be.visible').type("Juan");
})
When('Cargando el email',()=>{
    cy.get('#userEmail').should('be.visible').type("juan@example.com");
})

And('Cargando el direccion',()=>{
    cy.get('#currentAddress').should('be.visible').type("Los pinos");
}) 

Then ('Validar el nombre de la pagina',()=>{
    cy.title('eq','DEMOQA')

})