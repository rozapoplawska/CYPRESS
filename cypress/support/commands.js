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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("wejscie_goldap", () => {
    cy.visit("/");
    cy.url().should("contain", 'www.goldap.pl');
  });

  Cypress.Commands.add("wejscie_z_urzedu", () => {
    cy.wejscie_goldap();
    cy.get(':nth-child(5) > .show-all-div > .show-all-incat-btn > span').as('z_urzedu');
    cy.get('@z_urzedu').click();
  });

  Cypress.Commands.add("wejscie_sport", () => {
    cy.wejscie_goldap();
    cy.get(':nth-child(13) > .show-all-div > .show-all-incat-btn > span').as('sport');
    cy.get('@sport').click();
    cy.url().should("contain", "https://www.goldap.pl/pl/229/0/sport.html?cid=15");
  });