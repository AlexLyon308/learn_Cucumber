Feature: Amatrium_Login

    Scenario: End-user navigate to Privacy Policy page

        Given End-user visits Amatrium login page via browser
        When End-user clicks at web element as privacyPolicyOpenButton 
        And End-user checks available web element privacyPolicyPanelHeader to have text Privacy Policy
        Then End-user clicks at web element as privacyPolicyCloseButton to close panel 

    