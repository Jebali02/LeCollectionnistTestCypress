Feature: Recherche d'une villa
Faire une recherche et une demande de renseignements d'une maison

Scenario: Faire une recherche et une demande de renseignements d'une maison
Given je suis sur la page d'acceuil
When je cherche la destination 'St Tropez'
Then je dois vérifier que une page qui affiche la liste des villas s'ouvre
When je définie la date d''arrivée' et de 'départ'
And je définie le budget maximal de '60000'
And j'applique le filtrage 'Nombre de chambres croissant'
Then je dois vérifier que le nombre de résultat s'affiche
And je sélectionne la première maison qui s'affiche
And je clique sur demande de renseignements
And je renseigne l'ensemble des informations le 'nom' le 'prenom' l''email' et le 'numero'
And je clique sur envoyer ma demande
Then je dois vérifier l'affichage d'un message indiquant que la demande a été envoyé
      
