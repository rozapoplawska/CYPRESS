/// <reference types="cypress" />

describe("goldap 08", () => {
    it("przejscie_na_strone_aktualnosci_z_zakladki_sport", () => {
      cy.wejscie_sport();
      cy.get('#breadcrumb > :nth-child(2) > a').as('aktualnosci');
      cy.get('@aktualnosci').click();
      cy.url().should("contain", "https://www.goldap.pl/pl/229/0/aktualnosci.html");
    });
  });
 