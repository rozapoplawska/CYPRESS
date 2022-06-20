class goldapPage{
    
    _wejscieSzkoly = ":nth-child(17) > .show-all-div > .show-all-incat-btn > span";
    _wejscieAktualnosci = "#breadcrumb > :nth-child(2) > a";

    wybierzWejscieSzkoly(){
        return cy.get(this._wejscieSzkoly);
    }
    wybierzWejscieAktualnosci(){
        return cy.get(this._wejscieAktualnosci);
    }
}
export default goldapPage;

