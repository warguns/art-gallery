Feature: Get pictures
  As a user with permissions
  I want to get pictures

  Scenario: All existing courses
    Given I send a GET request to "/pictures"
    Then the response status code should be 200
    And the response should be:
    """
    []
    """
