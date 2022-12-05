class HomePage{

static typeDestination(destination){
    cy.get('.multiselect__single > .flex-none').type(destination)
}
static clickOnSearchBTN(){
    cy.get('.base-search__btn').click()
}

}
export default HomePage;