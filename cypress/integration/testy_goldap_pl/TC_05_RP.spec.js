/// <reference types="cypress" />

import goldap from "../../fixtures/goldap.json";
describe("goldap 05", () => {
    it("wyszukiwanie_po_tekscie", () => {
      cy.wejscie_goldap();
      cy.get('#search-mod-top-btn > .fa').as('wyszukiwarka');
      cy.get('@wyszukiwarka').click();
      cy.get('input').clear().type(goldap[0].fraze).type("{enter}");
    cy.url().should("contain", "www.goldap.pl/pl/265/0/wyszukiwarka.html?q=goldap");
    });
  });
  
  

