/// <reference types="cypress" />
import goldapPage from "../../pageObject/goldapPage";
const goldapObject = new goldapPage();

describe("goldap 02", () => {
  it("wejscie_w_zakladke_z_urzedu", () => {
    cy.wejscie_goldap();
    goldapObject.wybierzWejscieUrzad().click();
    cy.url().should("contain", "www.goldap.pl/pl/229/0/z-urzedu.html?cid=13");
  });
});
