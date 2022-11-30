Feature: Amatrium_Login

    Scenario Outline: End-user navigate to Privacy Policy page

        Given End-user visits Amatrium login page via browser
        When End-user clicks at web element as '<AmatriumElements.privacyPolicyOpenButton>' 
        And End-user check available web element '<AmatriumElements.privacyPolicyPanelHeader>' to have text 'Privacy Policy'
        Then End-user clicks at web element as  '<AmatriumElements.privacyPolicyOpenButton>'

    Scenario Outline: End-user navigate to Term page

        Given End-user visits Amatrium login page via browser
        When End-user clicks at web element as '<AmatriumElements.termOpenButton>' 
        And End-user check available web element '<AmatriumElements.termHeader>' to have 'Terms of Service'
        Then End-user clicks at web element as  '<AmatriumElements.termCloseButton>'

    