/// <reference types="cypress" />

describe("goldap 10", () => {
    it("wejscie_w_zakladke_kontakt_do_wydzialow", () => {
      cy.wejscie_goldap();
      cy.get('.foot-fdane-btn-cont > a > span').as('kontakt');
      cy.get('@kontakt').click();
      cy.url().should("contain", "https://www.goldap.pl/pl/1540/0/kontakt-do-wydzialow.html");
    });
  });
