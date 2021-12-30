import { Given } from "cypress-cucumber-preprocessor/steps";

Given('I open Google page', () => {
  cy.visit(Cypress.env('URL'))
})

Then('I see "Google" in the title', () => {
//sscy.visit(url)
})