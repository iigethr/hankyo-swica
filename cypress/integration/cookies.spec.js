/// <reference types="Cypress" />

context("Cookies", () => {
  beforeEach(() => {
    Cypress.Cookies.debug(true)
    cy.visit("/")
    cy.clearCookies()
  })

  // Set weLoveCookies#withMilk
  it("cy.getCookie() - get a browser cookie", () => {
    cy.getCookies().should("be.empty")

    cy.get(".cookies .cookies-box .cookies-row a").click()

    cy.getCookie("weLoveCookies").should("have.property", "value", "withMilk")
  })

  // Set weLoveCookies#withMilk & verify properties
  it("cy.getCookies() - get browser cookies", () => {
    cy.getCookies().should("be.empty")

    cy.get(".cookies .cookies-box .cookies-row a").click()

    cy.getCookies().should("have.length", 1).should((cookies) => {
      expect(cookies[0]).to.have.property("name", "weLoveCookies")
      expect(cookies[0]).to.have.property("value", "withMilk")
      expect(cookies[0]).to.have.property("httpOnly", false)
      expect(cookies[0]).to.have.property("secure", false)
      expect(cookies[0]).to.have.property("domain")
      expect(cookies[0]).to.have.property("path")
    })
  })

  // Set & Clear weLoveCookies#withMilk
  it("cy.clearCookie() - clear a browser cookie", () => {
    cy.getCookies().should("be.empty")

    cy.get(".cookies .cookies-box .cookies-row a").click()

    cy.getCookie("weLoveCookies").should("have.property", "value", "withMilk")

    cy.clearCookie("weLoveCookies").should("be.null")

    cy.getCookie("weLoveCookies").should("be.null")
  })

  // Set & Clear All Cookies
  it("cy.clearCookies() - clear browser cookies", () => {
    cy.getCookies().should("be.empty")

    cy.get(".cookies .cookies-box .cookies-row a").click()

    cy.getCookies().should("have.length", 1)

    cy.clearCookies()

    cy.getCookies().should("be.empty")
  })
})
