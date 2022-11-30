Feature: Amatrium_Login

    Scenario: End-user navigate to Privacy Policy page

        Given End-user visits Amatrium login page via browser
        When End-user clicks at web element as privacyPolicyOpenButton 
        And End-user checks available web element privacyPolicyPanelHeader to have text Privacy Policy
        Then End-user clicks at web element as privacyPolicyCloseButton to close panel

    Scenario: End-user navigate to Term page

        Given End-user visits Amatrium login page via browser
        When End-user clicks at web element as termOpenButton
        And End-user checks Term panel to have text Terms of Service
        Then End-user clicks at web element as termCloseButton to close panel

    Scenario Outline: End-user logins to Amatrium Website

        Given End-user visits Amatrium login page via browser
        When End-user types in username as '<username>' and password as '<password>'
        And End-user clicks on login button
        Then End-user successfully logins to the Amatrium website and sees the main page
        Examples:
            | username | password |
            | britishcolumbia247@gmail.com | w7ekg2w |