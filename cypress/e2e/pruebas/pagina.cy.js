describe("Pagina de pruebas", () =>{

    //beforeEach(() =>{
        //hace ejecucion de un comando en cada bloque  
    //})

    it("Pruebas",() => {

        cy.visit("http://testingqarvn.com.es/combobox/")

        cy.get('#wsf-1-field-45').type("Josh")
        cy.get('#wsf-1-field-46').type("Walker")
        cy.get('#wsf-1-field-47').type("joshw@correo.com")
        cy.get('#wsf-1-field-48').type("555789564")
        cy.get('#wsf-1-field-49').type("crr 3# 4 55")
        cy.get('#wsf-1-label-50-row-1').click()
        cy.get('#wsf-1-label-51-row-1').click()
        cy.get('#wsf-1-field-53').select("Mac")
        cy.get('#wsf-1-field-52').click()
        cy.title().should("eq","ComboBox | TestingQaRvn")

    })



})