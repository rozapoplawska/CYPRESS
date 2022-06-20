class goldapPage{
    _wejscieUrzad = ":nth-child(5) > .show-all-div > .show-all-incat-btn > span";
    _wejscieSzkoly = ":nth-child(17) > .show-all-div > .show-all-incat-btn > span";
    _wejscieSport = ":nth-child(13) > .show-all-div > .show-all-incat-btn > span";

    wybierzWejscieUrzad(){
        return cy.get(this._wejscieUrzad);
    }
    wybierzWejscieSzkoly(){
        return cy.get(this._wejscieSzkoly);
    }
    wybierzWejscieSport(){
        return cy.get(this._wejscieSport);
    }
}
export default goldapPage;

