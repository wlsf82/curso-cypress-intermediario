///<reference types="Cypress" />

describe('Logout', () => {
    beforeEach(() => cy.gui_login())

    it('should make logout after make login', () => {
        cy.gui_logout()

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
        
    });
})
