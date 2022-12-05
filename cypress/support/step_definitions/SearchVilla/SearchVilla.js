import DetailsVillaPage from '../../pagesObjects/DetailsVillaPage';
import HomePage from '../../pagesObjects/HomePage'
import OurLuxuryVillaAndChaletsPage from '../../pagesObjects/OurLuxuryVillasAndChaletsPage';

Given('je suis sur la page d\'acceuil', ()=>{
    cy.visit("https://www.lecollectionist.com/fr");
} )
When('je cherche la destination {string}', (destination)=>{
    HomePage.typeDestination(destination)
    HomePage.clickOnSearchBTN()
} )
Then('je dois vérifier que une page qui affiche la liste des villas s\'ouvre', ()=>{

} )
When('je définie la date d\'{string} et de {string}', ()=>{
    OurLuxuryVillaAndChaletsPage.clickOnDatesField()
    OurLuxuryVillaAndChaletsPage.setArrivalDate()
    OurLuxuryVillaAndChaletsPage.setDepartureDate()
} )
And('je définie le budget maximal de {string}', (budget)=>{
    OurLuxuryVillaAndChaletsPage.FillMaximumBudget(budget)
    OurLuxuryVillaAndChaletsPage.clickOnApplyBTN()
} )
And('j\'applique le filtrage {string}', (filtrageType)=>{
    OurLuxuryVillaAndChaletsPage.chooseFilterType(filtrageType)
} )
Then('je dois vérifier que le nombre de résultat s\'affiche', ()=>{
} )
And('je sélectionne la première maison qui s\'affiche', ()=>{
   OurLuxuryVillaAndChaletsPage.clickOnFirstVilla()
} )
And('je clique sur demande de renseignements', ()=>{
    DetailsVillaPage.clickOnInformationRequestBTN()
} )
And('je renseigne l\'ensemble des informations le {string} le {string} l\'{string} et le {string}', ()=>{
    DetailsVillaPage.FillLastName("Test")
    DetailsVillaPage.FillFirstName("QA")
    DetailsVillaPage.FillEmail("qa@test")
    DetailsVillaPage.FillPhone("0600000000")
} )
And('je clique sur envoyer ma demande', ()=>{
    //DetailsVillaPage.clickOnSendRequestBTN()
} )
Then('je dois vérifier l\'affichage d\'un message indiquant que la demande a été envoyé', ()=>{
} )

