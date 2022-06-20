/// <reference types="cypress" />

describe("goldap 09", () => {
    it("przejscie_na_strone_glowna_z_zakladki_sport", () => {
      cy.wejscie_sport();
      cy.get(':nth-child(1) > .sp_size > span').as('strona_glowna');
      cy.get('@strona_glowna').click();
      cy.url().should("contain", "https://www.goldap.pl/pl/256/0/strona-glowna.html");
    });
  });



