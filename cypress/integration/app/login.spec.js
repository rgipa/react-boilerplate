/// <reference types="Cypress" />

context('Login', () => {
  it('.type() - type into a DOM element', () => {
    cy.visit(`/login`)

    cy.get('[data-test-id="username"]').type('username')

    cy.get('[data-test-id="password"]').type('password')

    cy.get('[data-test-id="submit"]').click()

    cy.url().should('include', '/home')
  })
})
