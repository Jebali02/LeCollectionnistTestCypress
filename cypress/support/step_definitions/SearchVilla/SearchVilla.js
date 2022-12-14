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
Then('je dois vérifier que je suis rederigé vers la page intitulée {string}', (title)=>{
    OurLuxuryVillaAndChaletsPage.GetPageTitle(title)
} )
When('je fait une recherche pour le mois d\'{string}, avec une date de départ du {string} au {string}', (month,arrivalDate,departureDate)=>{
    OurLuxuryVillaAndChaletsPage.clickOnDatesField()
    OurLuxuryVillaAndChaletsPage.SetDate(month,arrivalDate,departureDate)
} )
And('je définie le budget maximal de {string}', (budget)=>{
    OurLuxuryVillaAndChaletsPage.FillMaximumBudget(budget)
    OurLuxuryVillaAndChaletsPage.clickOnApplyBTN()
} )
And('j\'applique le filtrage {string}', (filtrageType)=>{
    OurLuxuryVillaAndChaletsPage.chooseFilterType(filtrageType)
} )
Then('je dois vérifier que le nombre de résultat s\'affiche', ()=>{
    OurLuxuryVillaAndChaletsPage.isVillaDisplayed()
} )
And('je sélectionne la première maison qui s\'affiche', ()=>{
   OurLuxuryVillaAndChaletsPage.clickOnFirstVilla()
} )
And('je clique sur demande de renseignements', ()=>{
    DetailsVillaPage.clickOnInformationRequestBTN()
} )
And('je renseigne l\'ensemble des informations le {string} le {string} l\'{string} et le {string}', (nom,prenom,email,numero)=>{
    DetailsVillaPage.FillFirstName(prenom)
    DetailsVillaPage.FillLastName(nom)
    DetailsVillaPage.FillEmail(email)
    DetailsVillaPage.FillPhone(numero)
} )
And('je clique sur envoyer ma demande', ()=>{
    //DetailsVillaPage.clickOnSendRequestBTN()
} )
Then('je dois vérifier l\'affichage d\'un message indiquant que la demande a été envoyé', ()=>{
} )

