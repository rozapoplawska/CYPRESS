/// <reference types="cypress" />

import goldap from "../../fixtures/goldap.json";
describe("goldap 03", () => {
    it("przejscie_na_strone_startowa_za_pomoca_przycisku_domek", () => {
      cy.wejscie_z_urzedu();
      cy.get('#breadcrumb > :nth-child(1) > a > .fa').as('domek');
      cy.get('@domek').click();
      cy.url().should("contain", goldap[1].fraze)
    });
  });

  