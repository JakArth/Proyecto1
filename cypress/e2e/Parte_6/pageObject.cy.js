

/// <reference types='Cypress'/>
import ProyectoUno_PO from '../../support/pageObject/proyecto_PO/proyectoPO.cy'; 
import 'cypress-file-upload';
require('cypress-xpath');
require('cypress-plugin-tab');

beforeEach(() => {
cy.viewport(1500, 900);
});

describe('Page Object models', () => {

    const master = new ProyectoUno_PO();
    master.visitHome();

    it.only('Seccion 1', () => {
        master.Seccionuno("Juan","Canon", "juan@gmail.com","12345670")
        cy.Validar2("//small[normalize-space()='Please supply a vaild phone number with area code']","Please supply a vaild phone number with area code","Telefono")
    });

    it('Seccion 2', () => {
        master.SeccionDos("cll 2 # 4", "BOGOTA","Kansas")
    });

    it('Seccion 3', () => {
        master.SeccionTres("1234", ".com","Secciones")
        cy.Validar2("//small[contains(text(),'Please enter at least 10 characters and no more th')]","Please enter at least 10 characters and no more than 200","Proyecto")
    });

    it.skip('Seccion 4', () => {
        master.Seccionuno("Juan","Canon", "juan@gmail.com","1234567890")
        master.SeccionDos("cll 2 # 4", "BOGOTA","Kansas")
        master.SeccionTres("1234", ".com","Secciones Proyect PO")
    });
})//cierre