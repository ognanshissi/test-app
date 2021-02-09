# MEAN STACK DEV - TEST

## Description
**INFI REGISTRY** est une application de souscription développer en ``MEAN (Mongo Express Angular Node)``.
Cette application permet de recueillir les informations du client en plusieurs étapes jusqu'à la commande

## Prérequis
il vous faut :
- IDE ou éditeur de code (VS Code) :)
- Une connexion internet

## Démarrage
Avant tout vous avez un template front `Angular` et un back `ExpressJs` déjà établie pour vous,
`L'API` a déjà une implémentation et est connectée a une base de donnée

- *Front (Angular)*

`cd front`
````console
npm i && npm run start
 ````
Votre application angular est démarrée sur le port [http://localhost:4200](http://localhost:4200)

- *Back (ExpressJs)*

`cd api`
````console
npm i && npm run start
 ````
Votre api est démarrée sur le port [http://localhost:3000](http://localhost:3000)

## A Faire

Vous devez implementer les tâches suivantes :

- Implementer une api pour récupérer les produits et les afficher sur la page de produit. 
  Les produits ont été créés dans la collection `products` qui existe déjà dans la base de données sur 
  `Mongo Atlas`.
  
- Ajouter 3 pages `step1, step2, step3` ou :
  - `step1`: est la page qui permet de recueillir les informations personnelles de l'utilisateur `(firstName, lastName, email, phoneNumber)` 
    ensuite un bouton d'action `Etape Suivante` pour passer á la page suivante.
    
  - `Step2`: Page Informations d'entreprise avec les champs `(companyName, companyLength["0-9", "10-29", "30-49"], companyLocation)`
    - Actions : deux boutons `Précèdent, Etape Suivante`
    
  - `Step3`: Page de choix de produit, cette page liste des produits existants rangés par catégories
    - Implémenter une api pour récupérer la liste des produits grouper par catégorie
    - Actions : deux boutons `Précèdent, Etape Suivante`
    
- Utiliser un stockage en service pour stocker les informations des étapes
- Implémenter une api de sauvegarde de commande avec toutes les informations collectées sur les trois différentes pages.

## COURAGE :)




