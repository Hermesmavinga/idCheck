# Gestion des Réservations

## Description

Cette application web permet de gérer des réservations clients. Elle comporte deux pages distinctes :

- **Ajouter une réservation** (`ajouter.html`) : page sécurisée accessible uniquement à l’administrateur via un mot de passe. Permet d’ajouter une nouvelle réservation avec les informations du client (nom, email, date, type de billet, etc.) et de les stocker dans le `localStorage` du navigateur.

- **Rechercher une réservation** (`rechercher.html`) : page publique permettant de rechercher une réservation par ID client et d’afficher ses informations. Elle affiche aussi un historique des ID recherchés, cliquable pour un accès rapide.

## Fonctionnalités

- Protection par mot de passe simple côté client sur la page d’ajout (prompt).
- Ajout dynamique de réservations sauvegardées dans `localStorage`.
- Recherche et affichage des réservations existantes.
- Historique des recherches consultables et cliquables.
- Interface simple et responsive grâce à Tailwind CSS.

## Installation et Utilisation

1. Clonez ou téléchargez le projet.
2. Ouvrez `ajouter.html` dans un navigateur pour ajouter des réservations (le mot de passe admin est à modifier dans le fichier).
3. Ouvrez `rechercher.html` pour rechercher les réservations existantes.
4. Toutes les données sont stockées localement dans le navigateur (pas de serveur requis).

## Personnalisation

- Vous pouvez modifier les styles via Tailwind CSS selon vos besoins.

## Limitations

- Le système d’authentification est très basique et côté client uniquement (non sécurisé pour un usage réel en production).
- Pas de base de données serveur, les données sont uniquement stockées localement dans le navigateur.
- L’accès admin peut être contourné par un utilisateur connaissant un peu JavaScript.

## Améliorations possibles

- Implémenter une vraie authentification côté serveur.
- Ajouter une base de données pour stocker les réservations.
- Créer une interface utilisateur plus avancée avec gestion des erreurs, filtres, pagination.
- Ajouter des rôles utilisateurs et permissions.

## Technologies utilisées

- HTML5 / CSS3
- JavaScript (Vanilla)
- [Tailwind CSS](https://tailwindcss.com/) pour le style

---

N’hésitez pas à me contacter pour toute question ou amélioration !
