import HomePage from '../../pagesObjects/HomePage'

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
} )
And('je définie le {string} maximal', ()=>{
} )
And('j\'applique le filtrage {string}', ()=>{
} )
Then('je dois vérifier que le nombre de résultat s\'affiche', ()=>{
} )
And('je sélectionne la première maison qui s\'affiche', ()=>{
} )
And('je clique sur demande de renseignements', ()=>{
} )
And('je renseigne l\'ensemble des informations', ()=>{
} )
And('je clique sur envoyer ma demande', ()=>{
} )
Then('je dois vérifier l\'affichage d\'un message indiquant que la demande a été envoyé', ()=>{
} )

