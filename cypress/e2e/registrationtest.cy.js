/// <reference types="cypress" />


describe('test automation script to Registration journey', () => {
    beforeEach(() => {
        cy.visit('/signup');
    });

    it('Register User', () => {

        const email = Cypress.config('email')
        const pin = Cypress.config('pin')
        const companyName = Cypress.config('companyName')

        cy.get('#email').type(email).wait(2000)
        cy.get('.sc-fTFjTM > .sc-fjhLSj').click().wait(20000)
        cy.get(':nth-child(3) > .pincode-input-container > :nth-child(1)').type(pin)
        cy.get(':nth-child(3) > .pincode-input-container > :nth-child(2)').type(pin)
        cy.get(':nth-child(3) > .pincode-input-container > :nth-child(3)').type(pin)
        cy.get(':nth-child(3) > .pincode-input-container > :nth-child(4)').type(pin)

        ///Confirm pin />

        cy.get('[style="margin-top: 32px; width: 100%;"] > .sc-cFShuL > .pincode-input-container > :nth-child(1)').type(pin)
        cy.get('[style="margin-top: 32px; width: 100%;"] > .sc-cFShuL > .pincode-input-container > :nth-child(2)').type(pin)
        cy.get('[style="margin-top: 32px; width: 100%;"] > .sc-cFShuL > .pincode-input-container > :nth-child(3)').type(pin)
        cy.get('[style="margin-top: 32px; width: 100%;"] > .sc-cFShuL > .pincode-input-container > :nth-child(4)').type(pin).wait(2000)
        cy.get('.sc-ibQAlb > .sc-fjhLSj').click()


        ///Set profile
        cy.get('#companyName').type(companyName)
        cy.get('.sc-ibQAlb > .sc-fjhLSj').click()

        cy.get('[for="To disburse payments to all employees"] > .sc-blFMiU').click()
        cy.get('.sc-hWmCAe > .sc-fjhLSj').click().wait(5000)
        cy.get('.sc-kNxgZW > .sc-fjhLSj').click()

        cy.log(`Registration Complete`);
        
    });

});