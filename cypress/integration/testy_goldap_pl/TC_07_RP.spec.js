/// <reference types="cypress" />

describe("goldap 07", () => {
    it("wejscie_w_zakldke_sport_i_przejscie_na_druga_strone", () => {
      cy.wejscie_sport();
      cy.get('[href="/pl/229/0/aktualnosci.html?page=2"]').as('2_strona');
      cy.get('@2_strona').click();
      cy.url().should("contain", "goldap.pl/pl/229/0/aktualnosci.html?page=2");
    });
  });