import { Given } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'
Given('I open Google page', () => {
  cy.log("Today's date is Jan 6th Jan 2022");
  //Cypress.env("url","https://zoom.us/");//Setting env key at code level - Priority 1
  cy.visit(Cypress.env("url"));//READING ENVIRONMENT KEYS IN CODE
})

Then('I see "Google" in the title', () => {
cy.log(Cypress.env("title"));
})
