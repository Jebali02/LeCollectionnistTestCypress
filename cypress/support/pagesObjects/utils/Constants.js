const HomePageConsts={
 BTN_SEARCH:".base-search__btn",
 SEARCH_DESTINATION_BOX:".multiselect__single > .flex-none"
}
const DetailsVillaPageConsts={
    INFORMATION_REQUEST_BTN:"//div[@class=\'relative lc_tooltip lc_tooltip--hover\']//button[contains(text(),\'Demande de renseignements\')]",
    LASTNAME_BOX:"[data-testid=inquiry-form__input-lastname]",
    FIRSTNAME_BOX:"[data-testid=inquiry-form__input-firstname]",
    EMAIL_BOX:"[data-testid=inquiry-form__input-email]",
    PHONE_BOX:"#phone_undefined",
    SEND_REQUEST_BTN:"//button[@data-testid=\'inquiry-form-step__send-request-unlogged\']"
}
const OurLuxuryVillaAndChaletsPageConst={
    DATES_FIELD:".datepicker__input--first",
    MONTH_NAME:"//div[@class=\'datepicker__months\']//div[1]//p[@class=\'datepicker__month-name\']",
    NEXT_MONTH_BTN:".datepicker__month-button--next",
    ARRIVAL_DATE:"[data-testid=day-'+arrivalDate+']",
    DEPARTURE_DATE:"[data-testid=day-'+departureDate+']",
    BUDGET_BTN:".min-w-full",
    MAX_BUDGET_FIELD:"#maxBudget_search-budget",
    MIN_BUDGET_FIELD:"#minBudget_search-budget",
    APPLY_BTN:".grid > .lc-btn--secondary",
    RECOMMANDED_BTN:"//span[@class=\'font-medium truncate\']",
    FILTER_TYPE:".col-span-2 > .base-multiselect > .w-full > .multiselect > .multiselect__tags",
    CHAMBRES_CROISSANT_BTN:"//span[contains(text(),\'Nombre de chambres croissant\')]",
    CHAMBRES_DECROISSANT_BTN:"//span[contains(text(),\'Nombre de chambres décroissant\')]",
    PRIX_CROISSANT_BTN:"//span[contains(text(),\'Prix croissant\')]",
    PRIX_DECROISSANT_BTN:"//span[contains(text(),\'Prix décroissant\')]",
    FIELD_RESULT:"//h1[@class=\'w-full search__result-number\']",
    VILLA_LIST:"//div[@class='lc-row mb-6']//div[@class='house-card h-full']",
    FIRST_VILLA:"//div[@class='lc-row mb-6']//div[@data-insights-position='1']"
    







    
   }
export{HomePageConsts,DetailsVillaPageConsts,OurLuxuryVillaAndChaletsPageConst}