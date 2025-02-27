import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user is on the login page", () => {
  cy.visit("/login");
});

When("they enter valid credentials", () => {
  cy.get("#email").type("test@example.com");
  cy.get("#password").type("password123");
  cy.get("button[type=submit]").click();
});

Then("they should be redirected to the homepage", () => {
  cy.url().should("include", "/home");
});

When("they enter invalid credentials", () => {
  cy.get("#email").type("wrong@example.com");
  cy.get("#password").type("wrongpassword");
  cy.get("button[type=submit]").click();
});

Then("an error message should be displayed", () => {
  cy.get(".error").should("contain", "Invalid credentials");
});
