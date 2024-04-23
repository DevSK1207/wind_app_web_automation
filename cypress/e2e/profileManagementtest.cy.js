/// <reference types="cypress" />

import { login } from "./login";



describe('test automation script to Update profile', () => {


    it('userupdate profile', () => {

        login();
        cy.get('.sc-lkuliq > img').click().wait(3000)
        cy.get('[href="/settings"] > .sc-gQzfVk').click({force: true});


        ///Update profile />

        cy.get('#name').scrollIntoView().clear().type("test user").wait(2000)
        cy.get('#companyName').scrollIntoView().clear().type("New Company").wait(2000)
        cy.contains('Save changes').scrollIntoView().click()



    });

});