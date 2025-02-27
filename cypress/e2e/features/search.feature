Feature: Search for Food Items

  Scenario: Search for a valid item
    Given the user is on the homepage
    When they search for "Pizza"
    Then they should see "Pizza" in the results

  Scenario: Search for a non-existent item
    Given the user is on the homepage
    When they search for "Unicorn Burger"
    Then they should see "No results found"

