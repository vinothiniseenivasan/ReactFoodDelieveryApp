import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user is on the homepage", () => {
  cy.visit("/");
});

When("they add {string} to the cart", (item) => {
  cy.contains(item).parent().find(".add-to-cart").click();
});

Then("the cart should contain {string}", (item) => {
  cy.get("#cart").should("contain", item);
});
