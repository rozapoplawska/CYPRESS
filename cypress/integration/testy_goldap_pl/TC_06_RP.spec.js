/// <reference types="cypress" />
import goldapPage from "../../pageObject/goldapPage";
const goldapObject = new goldapPage();
  
describe("goldap 06", () => {
    it("wejscie_w_zakladke_sport", () => {
      cy.wejscie_goldap();
      goldapObject.wybierzWejscieSport().click();
      cy.url().should("contain", "https://www.goldap.pl/pl/229/0/sport.html?cid=15");
    });
  });
  