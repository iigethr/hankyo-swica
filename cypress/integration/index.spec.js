/// <reference types="Cypress" />

describe("Index page", () => {
  beforeEach(() => {
    cy.log("Visiting http://localhost:3000")
    cy.visit("/")
  })

  // Verify H1 presence & length - Important for SEO
  it("should have H1", () => {
    cy.get("h1").should("have.length", 1)
  })
 })
