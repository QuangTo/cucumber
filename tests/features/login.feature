Feature: Login

    Scenario Outline: User login api
        When I send POST api to login with credentials <username> <password>
        Then I login with <status> status
    Example:
            | username     | password        | status |
            | admin        | password        | 200    |
            | user_2@gmail | INvalidPassword | 404    |