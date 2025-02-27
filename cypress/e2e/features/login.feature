Feature: User Login

  Scenario: Successful Login
    Given the user is on the login page
    When they enter valid credentials
    Then they should be redirected to the homepage

  Scenario: Failed Login
    Given the user is on the login page
    When they enter invalid credentials
    Then an error message should be displayed

