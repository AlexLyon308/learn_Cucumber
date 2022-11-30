import AmatriumElements from './Amatrium_Elements.js';
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'


Given('End-user visits Amatrium login page via browser', () => {
    cy.visit('dev.amatrium.com')
})


//Scenario: End-user navigate to Privacy Policy page

When('End-user clicks at web element as privacyPolicyOpenButton', () => {
    expect(AmatriumElements.privacyPolicyOpenButton, 'Term Open button should be available').to.exist
    cy.get(AmatriumElements.privacyPolicyOpenButton).click()
});

And('End-user checks available web element privacyPolicyPanelHeader to have text Privacy Policy', () => {
    cy.get(AmatriumElements.privacyPolicyPanelHeader).should('have.text', 'Privacy Policy').click()
});

Then('End-user clicks at web element as privacyPolicyCloseButton to close panel', () => {
    expect(AmatriumElements.privacyPolicyCloseButton, 'Privacy Policy Close button should be available').to.exist
    cy.get(AmatriumElements.privacyPolicyCloseButton).click()
});

//Scenario: End-user navigate to Term page
When('End-user clicks at web element as termOpenButton', () => {
    expect(AmatriumElements.termOpenButton, 'Term Open button should be available').to.exist
    cy.get(AmatriumElements.termOpenButton).click()
});

And('End-user checks Term panel to have text Terms of Service', () => {
    cy.get('#chakra-modal--header-5').should('have.text', 'Terms of Service')
});

Then('End-user clicks at web element as termCloseButton to close panel', () => {
    expect(AmatriumElements.termCloseButton, 'Privacy Policy Close button should be available').to.exist
    cy.get(AmatriumElements.termCloseButton).click()
});


//
When('End-user types in username as {string} and password as {string}', (username,password) => {
    cy
        .get(AmatriumElements.emailAddressField)
        .type(username)
        .should('have.value', 'britishcolumbia247@gmail.com');

    cy
        .get(AmatriumElements.passWordField)
        .type(password)
        .should('have.value', 'w7ekg2w');
})

And('End-user clicks on login button', () => {
    cy
        .get(AmatriumElements.loginbutton)
        .should((item) => {
            expect(item).to.exist
            expect(item).to.have.text('Login')
        });

        cy.get('.css-mx6vab').click();
});

Then('End-user successfully logins to the Amatrium website and sees the main page', () => {
    cy
        .get(AmatriumElements.mainScreen_HeaderLogo)
        .should('exist');

    cy
        .get(AmatriumElements.mainScreen_HeaderLogo)
        .find('svg')
        .should('be.visible');
});