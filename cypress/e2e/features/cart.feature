Feature: Add Items to Cart

  Scenario: Add a food item to the cart
    Given the user is on the homepage
    When they add "Burger" to the cart
    Then the cart should contain "Burger"
