class DetailsVillaPage {
    static clickOnInformationRequestBTN(){
        cy.xpath('//div[@class=\'relative lc_tooltip lc_tooltip--hover\']//button[contains(text(),\'Demande de renseignements\')]').click()
    }
    static FillLastName(LastName){
        cy.get('[data-testid=inquiry-form__input-lastname]').type(LastName)
    }
    static FillFirstName(FirstName){
        cy.get('[data-testid=inquiry-form__input-firstname]').type(FirstName)
    }
    static FillEmail(Email){
        cy.get('[data-testid=inquiry-form__input-email]').type(Email)
    }
    static FillPhone(Phone){
        cy.get('#phone_undefined').type(Phone)
    }
    static clickOnSendRequestBTN(){
        cy.xpath('//button[@data-testid=\'inquiry-form-step__send-request-unlogged\']').click()
    }
    
}
export default DetailsVillaPage;