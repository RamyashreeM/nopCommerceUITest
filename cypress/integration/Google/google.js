import { Given } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'
Given('I open Google page', () => {
  cy.visit(url)
})

Then('I see "Google" in the title', () => {
//sscy.visit(url)
})