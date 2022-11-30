import AmatriumElements from './Amatrium_Elements.js';
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'


Given('User is at the login page', () => {
    cy.visit('dev.amatrium.com')
})