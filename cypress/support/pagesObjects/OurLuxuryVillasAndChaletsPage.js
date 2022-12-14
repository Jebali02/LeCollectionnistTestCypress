import { recurse } from "cypress-recurse";
import { getPath } from "./utils/functions";
import { OurLuxuryVillaAndChaletsPageConst } from "./utils/Constants";

class OurLuxuryVillaAndChaletsPage {

    static GetPageTitle(title){
        cy.title().should('eq',title)
    }
    static clickOnDatesField(){
        getPath(OurLuxuryVillaAndChaletsPageConst.DATES_FIELD).click()
    }
    static SetDate(month,arrivalDate,departureDate){
        recurse(
            () =>  getPath(OurLuxuryVillaAndChaletsPageConst.MONTH_NAME).invoke("text"),
            (n) => {
                if (!n.includes(month)) {
                    getPath(OurLuxuryVillaAndChaletsPageConst.NEXT_MONTH_BTN).click();
                  return false;
                } 
                cy.get('[data-testid=day-'+arrivalDate+']', { force: true }).click({ multiple: true })                 
                cy.get('[data-testid=day-'+departureDate+']', { force: true }).click({ multiple: true })                 
                return true;
              }, 
                {
                delay: 200, // delay before next iteration, ms
                limit: 48,
              }
        );
    }
   
    static clickOnBudgetBTN(){
        getPath(OurLuxuryVillaAndChaletsPageConst.BUDGET_BTN).click()
    }
  
    static FillMaximumBudget(Budget){
        getPath(OurLuxuryVillaAndChaletsPageConst.BUDGET_BTN).click()
        getPath(OurLuxuryVillaAndChaletsPageConst.MAX_BUDGET_FIELD).type(Budget)
    }
    static FillMinimumBudget(Budget){
        getPath(OurLuxuryVillaAndChaletsPageConst.BUDGET_BTN).click()
        getPath(OurLuxuryVillaAndChaletsPageConst.MIN_BUDGET_FIELD).type(Budget)
    }
    static clickOnApplyBTN(){
        getPath(OurLuxuryVillaAndChaletsPageConst.APPLY_BTN).click()
    }
    static clickOnRecommendedBTN(){
        getPath(OurLuxuryVillaAndChaletsPageConst.RECOMMANDED_BTN).click()
    }
    static chooseFilterType(filtrageType){
        getPath(OurLuxuryVillaAndChaletsPageConst.FILTER_TYPE).click()
        if(filtrageType.includes('chambres croissant')){
            getPath(OurLuxuryVillaAndChaletsPageConst.CHAMBRES_CROISSANT_BTN).click()
        }
        if(filtrageType.includes('chambres décroissant')){
            getPath(OurLuxuryVillaAndChaletsPageConst.CHAMBRES_DECROISSANT_BTN).click()
        }
        if(filtrageType.includes('Prix croissant')){
            getPath(OurLuxuryVillaAndChaletsPageConst.PRIX_CROISSANT_BTN).click()  
        }
        if(filtrageType.includes('Prix décroissant')){
            getPath(OurLuxuryVillaAndChaletsPageConst.PRIX_DECROISSANT_BTN).click()  
        }
        if(filtrageType.includes('Recommandés')){
            getPath(OurLuxuryVillaAndChaletsPageConst.RECOMMANDES_BTN).click()  
        }
    }
    static GetResults () {
        getPath(OurLuxuryVillaAndChaletsPageConst.FIELD_RESULT).invoke('text').should('contain', 'résultats')
       /* getPath(OurLuxuryVillaAndChaletsPageConst.FIELD_RESULT).then(($result) => {
            const text = $result.text()
            cy.debug(text)
        })*/
    }
    static isVillaDisplayed(){
        getPath(OurLuxuryVillaAndChaletsPageConst.VILLA_LIST).should('be.visible')
    }
    static clickOnFirstVilla(){
        getPath(OurLuxuryVillaAndChaletsPageConst.FIRST_VILLA).click()
    }
    static clickOnNextMonthBTN(){
        getPath(OurLuxuryVillaAndChaletsPageConst.NEXT_MONTH_BTN).click()
    }
 
}
export default OurLuxuryVillaAndChaletsPage;