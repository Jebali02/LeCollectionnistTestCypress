class OurLuxuryVillaAndChaletsPage {

    static clickOnDatesField(){
        cy.get('.datepicker__input--first').click();
    }
    static setArrivalDate(arrivalDate){
        cy.get('[data-testid=day-2022-12-07]', { force: true }).click()
    }
    static setDepartureDate(departure){
        cy.get('[data-testid=day-2022-12-15]', { force: true }).click()
    }
    static clickOnDepartBTN(){
        cy.get('.datepicker__dummy-wrapper > [tabindex="-1"]').click()
    }
    static clickOnBudgetBTN(){
        cy.get('.min-w-full').click()
    }
    static clickOnMaxBudget(){
        cy.get('').click()
    }
    static FillMaximumBudget(Budget){
        cy.get('.min-w-full').click()
        cy.get('#maxBudget_search-budget').type(Budget)
    }
    static FillMinimumBudget(Budget){
        cy.get('.min-w-full').click()
        cy.get('#minBudget_search-budget').type(Budget)
    }
    static clickOnApplyBTN(){
        cy.get('.grid > .lc-btn--secondary').click()
    }
    static clickOnRecommendedBTN(){
        cy.get('.col-span-2 > .base-multiselect > .w-full > .multiselect > .multiselect__tags').click()
    }
    static chooseFilterType(filtrageType){
        cy.get('.col-span-2 > .base-multiselect > .w-full > .multiselect > .multiselect__tags').click()
        if(filtrageType.includes('chambres croissant')){
            cy.xpath('//span[contains(text(),\'Nombre de chambres croissant\')]').click()
        }
        if(filtrageType.includes('chambres décroissant')){
            cy.xpath('//span[contains(text(),\'Nombre de chambres décroissant\')]').click()
        }
        if(filtrageType.includes('Prix croissant')){
            cy.xpath('//span[contains(text(),\'Prix croissant\')]').click()  
        }
        if(filtrageType.includes('Prix décroissant')){
            cy.xpath('//span[contains(text(),\'Prix décroissant\')]').click()  
        }
        if(filtrageType.includes('Recommandés')){
            cy.xpath('//span[contains(text(),\'Recommandés\')]').click()  
        }
    }
    static clickOnFirstVilla(){
        cy.xpath("//div[@class='lc-row mb-6']//div[@data-insights-position='1']").click()
    }
    static clickOnNextMonthBT(){
        cy.get('.datepicker__month-button--next').click()
    }
    static chooseDepartureAndArrivalDate(){

    }


}
export default OurLuxuryVillaAndChaletsPage;