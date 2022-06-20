/// <reference types="cypress" />
import goldapPage from "../../pageObject/goldapPage";
const goldapObject = new goldapPage();

describe("goldap 08", () => {
    it("przejscie_na_strone_aktualnosci_z_zakladki_sport", () => {
      cy.wejscie_sport();
      goldapObject.wybierzWejscieAktualnosci().click();
      cy.url().should("contain", "https://www.goldap.pl/pl/229/0/aktualnosci.html");
    });
  });
 