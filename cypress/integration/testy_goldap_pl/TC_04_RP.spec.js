/// <reference types="cypress" />
import goldapPage from "../../pageObject/goldapPage";
const goldapObject = new goldapPage();

  describe("goldap 04", () => {
    it("wejscie_w_zakladke_szkoly", () => {
      cy.wejscie_goldap();
      goldapObject.wybierzWejscieSzkoly().click();
      cy.url().should("contain", "https://www.goldap.pl/pl/229/0/szkoly.html?cid=16");
    });
  });
  

  