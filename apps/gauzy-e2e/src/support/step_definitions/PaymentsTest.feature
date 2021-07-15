Feature: Payments test
  Scenario: Login with email
    Given Login with default credentials
  Scenario: Add employee
    And User can add new employee
  Scenario: Add project
    And User can add new project
  Scenario: Add new payment
    Then User can visit Accounting payments page
    And User can see grid button
    And User can click on second grid button to change view
    And User can see add payment button
    When User click on add payment button
    Then User can see project dropdown
    When User click on project dropdown
    Then User can select project from dropdown options
    And User can see date input field
    And User can enter value for date
    And User can see payment method dropdown
    When User click on payment method dropdown
    Then User can select payment method from dropdown options
    And User can see amount input field
    And User can enter value for amount
    And User can see note textarea input field
    And User can enter value for note
    And User can see save button
    When User click on save button
    Then Notification message will appear
  Scenario: Edit payment
    Then User can see payments table
    When User select table row
    Then Edit payment button will become active
    When User click on edit payment button
    Then User can see project dropdown
    When User click on project dropdown
    Then User can select project from dropdown options
    And User can see date input field
    And User can enter value for date
    And User can see payment method dropdown
    When User click on payment method dropdown
    Then User can select payment method from dropdown options
    And User can see amount input field
    And User can enter value for amount
    And User can see note textarea input field
    And User can enter value for note
    And User can see save button
    When User click on save button
    Then Notification message will appear again
  Scenario: Delete payment
    Then User can see again payments table
    When User select table row again
    Then Delete payment button will become active
    When User can click on Delete payment button
    Then User can see confrim delete button
    When User click on confirm delete button
    Then Notification message will appear
    And User can verify payment was deleted