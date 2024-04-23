// cypress/support/login.js

export function login() {
    const email = Cypress.config('email')

    cy.visit('/login');
    cy.get('#email').type(email).wait(2000)
    cy.get('.sc-fTFjTM > .sc-fjhLSj').click().wait(15000)
}
