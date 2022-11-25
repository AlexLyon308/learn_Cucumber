import AmatriumElements from './Amatrium_Elements.js';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('End-user visits Amatrium login page via browser', () => {
    cy.visit('dev.amatrium.com'); 
})

When('End-user types in username as {string} and password as {string}', (username, password) => {
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
    .should( (item) => {
        expect(item).to.exist
        expect(item).to.have.text('Login')
    });

    cy
    .get(AmatriumElements.loginbutton)
    .click();
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