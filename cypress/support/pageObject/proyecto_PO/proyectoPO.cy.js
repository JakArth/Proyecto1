class ProyectoUno_PO{
    visitHome(){
        Cypress.config("defaultCommandTimeout", 15000)
        before(() => {
            cy.viewport(1500, 900);
            cy.visit('http://demo.seleniumeasy.com/input-form-demo.html');
            cy.title('eq','Selenium Easy - Input Form Demo with Validations')
            })
    }

    Seccionuno(name,ape,email,phone){
        cy.get(':nth-child(2) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(name);
        cy.screenshot("Campo nomnre")
        cy.get(':nth-child(3) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(ape);
        cy.screenshot("Campo apellido")
        cy.get(':nth-child(4) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(email);
        cy.get(':nth-child(5) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(phone);
    }

    SeccionDos(dir,city,state){
    
        cy.get(':nth-child(6) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(dir);
        cy.get(':nth-child(7) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(city);
        cy.get('.selectContainer > .input-group > .form-control').select(state)
    }

    SeccionTres(code,url,text){
        cy.get(':nth-child(9) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(code);
        cy.get(':nth-child(10) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(url);
        cy.get(':nth-child(2) > label > input').check();
        cy.get(':nth-child(12) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(text);
        cy.get('.btn').should('be.visible').click({force: true});

    }

}//FIN

export default ProyectoUno_PO;