import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user is on the homepage", () => {
  cy.visit("/");
});

When("they search for {string}", (item) => {
  cy.get("#search-bar").type(item);
  cy.get("#search-button").click();
});

Then("they should see {string} in the results", (item) => {
  cy.get(".search-results").should("contain", item);
});
