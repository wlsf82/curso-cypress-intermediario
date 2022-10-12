/// <reference types="Cypress" />

describe('Login', () => {
  it('successfully', () => {
    cy.login()
    cy.visit('')

    cy.get('.qa-user-avatar').should('exist')
  })
})
