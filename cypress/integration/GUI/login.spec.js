///<reference types="Cypress" />

describe('Login', () => {
    it('succesfully', () => {
        cy.login()

        cy.get('qa-user-avatar').should('exist')
        
    });

})