///<reference types="Cypress" />

describe('Login', () => {
    it('succesfully', () => {
        cy.gui_login()

        cy.get('.qa-user-avatar').should('exist')
        
    });

})

