Feature: Recherche d'une villa
Faire une recherche et une demande de renseignements d'une maison

Scenario Outline: Faire une recherche et une demande de renseignements d'une maison
Given je suis sur la page d'acceuil
When je cherche la destination "<destination>"
Then je dois vérifier que je suis rederigé vers la page intitulée "Nos villas et chalets de luxe - Le Collectionist"
When je fait une recherche pour le mois d'"<mois>", avec une date de départ du "<arrivalDate>" au "<departureDate>"
And je définie le budget maximal de "<budget>"
And j'applique le filtrage 'Nombre de chambres croissant'
Then je dois vérifier que le nombre de résultat s'affiche
And je sélectionne la première maison qui s'affiche
And je clique sur demande de renseignements
And je renseigne l'ensemble des informations le "<nom>" le "<prenom>" l'"<email>" et le "<numero>"
And je clique sur envoyer ma demande
Then je dois vérifier l'affichage d'un message indiquant que la demande a été envoyé


  Examples:
    | destination | mois  | arrivalDate | departureDate | budget | nom  | prenom | email            | numero     |
    |   St Tropez | Août  | 2023-08-06  | 2023-08-26    | 60000  | Test | QA     | testqa@gmail.com | 0600000001 |
    |   Corse     | Avril | 2023-04-06  | 2023-04-26    | 40000  | Test | QA     | testqa@gmail.com | 0600000001 |
