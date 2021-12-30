

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (baseUrl,username, password) => {
   // cy.session([baseUrl,username, password], () => {
        cy.visit(baseUrl)
        cy.get('#login.ant-input').type(username)
        cy.get('#password').type(password)
        cy.get('button').click()
        cy.url().should('contain', '/dashboard')
    ///})
})
//   cy.visit(baseUrl)
//     cy.get('#login.ant-input').type(Cypress.env('Login'));  
//     cy.get('#password').type(Cypress.env('Password'));
//     cy.get('button').click()
//     cy.intercept('GET', baseUrl+'/dashboard')
//     cy.get('.styles-m__title---Nwr2X').contains('Календар Завантаження');