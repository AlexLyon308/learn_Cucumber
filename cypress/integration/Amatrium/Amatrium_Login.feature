Feature: Amatrium_Login

    Scenario Outline: End-user logins to Amatrium Website

        Given End-user visits Amatrium login page via browser
        When End-user types in username as '<username>' and password as '<password>'
        And End-user clicks on login button
        Then End-user successfully logins to the Amatrium website and sees the main page 
        Examples:
            | username | password |
            | britishcolumbia247@gmail.com    | w7ekg2w |