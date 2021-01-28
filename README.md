# MEAN STACK DEV - TEST

## Description
**INFI SHOPIFY** est une application E-commerce développer en ``MEAN (Mongo Express Angular Node)``, les principales fonctionnalités de cette application est l'ajout au panier la modification de la quantite et la validation d'une commande

## Prérequis
il vous faut :
- IDE ou éditeur de code (VS Code) :)
- Une connexion internet

## Démarrage
Avant tout vous avez un template front `Angular` et un back `Express & TypeScript` déjà établie pour vous, si vous n'êtes pas alaise avec `Express & TypeScript` vous etes libre de changer le back en `Express`
seulement.

- *Front (Angular)*

`cd store`
````console
npm i && npm run start
 ````
Votre application angular est démarrée sur le port [http://localhost:4200](http://localhost:4200)

- *Back (Express & TypeScript)*

`cd api`
````console
npm i && npm run build && npm run start
 ````
Votre api angular est démarrée sur le port [http://localhost:3000](http://localhost:3000)

## A Faire

Vous devez implementer les tâches suivantes :

- Implementer une api pour récupérer les produits et les afficher sur la page produit de qui existe deja dans la base de données.
- L'ajout de produit dans un panier et incrémenté le nombre d'element dans le panier en haut a droite
- Lister les produits dans le panier sur la page panier avec possibilité de modifier la quantité
- Implementer une api de sauvegarde de commande

## Bonus
- Ajouter une page de commande pour lister les commandes et une api




