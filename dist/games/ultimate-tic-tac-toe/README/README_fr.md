# Morpion Ultime

[English](README.md) | [中文](README_zh.md) | [日本語](README_jp.md) | [한국어](README_kr.md) | [Русский](README_ru.md) | [Español](README_es.md) | [Deutsch](README_de.md)

🌐 Un jeu de morpion multilingue, moderne et riche en fonctionnalités, accessible sur le web 🌐

<div align="center">
  <img width="128px" src="https://raw.githubusercontent.com/VoxDroid/Ultimate-Tic-Tac-Toe/refs/heads/main/assets/logo/UT.png" alt="Logo Morpion Ultime">
</div>

<div align="center">
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/releases">
    <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000">
  </a>
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/blob/main/LICENSE">
    <img alt="Licence : MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
  <a href="https://html.spec.whatwg.org/">
    <img alt="Construit avec : HTML5" src="https://img.shields.io/badge/Built%20with-HTML5-E34F26?logo=html5&logoColor=white">
  </a>
  <a href="https://www.w3.org/Style/CSS/Overview.en.html">
    <img alt="Stylisé avec : CSS3" src="https://img.shields.io/badge/Styled%20with-CSS3-1572B6?logo=css3&logoColor=white">
  </a>
  <a href="https://javascript.info/">
    <img alt="Propulsé par : JavaScript" src="https://img.shields.io/badge/Powered%20by-JavaScript-F7DF1E?logo=javascript&logoColor=black">
  </a>
</div>

<div align="center">
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/stargazers">
    <img alt="Étoiles GitHub" src="https://img.shields.io/github/stars/VoxDroid/Ultimate-Tic-Tac-Toe?color=gold">
  </a>
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/network/members">
    <img alt="Forks GitHub" src="https://img.shields.io/github/forks/VoxDroid/Ultimate-Tic-Tac-Toe?color=silver">
  </a>
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/issues">
    <img alt="Problèmes GitHub" src="https://img.shields.io/github/issues/VoxDroid/Ultimate-Tic-Tac-Toe?color=orange">
  </a>
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/commits/main">
    <img alt="Commits GitHub" src="https://img.shields.io/github/commit-activity/m/VoxDroid/Ultimate-Tic-Tac-Toe">
  </a>
</div>

<div align="center">
  <a href="https://voxdroid.github.io/Ultimate-Tic-Tac-Toe/" target="_blank">
    <img src="https://img.shields.io/badge/Jouer%20Maintenant-Morpion%20Ultime-brightgreen?style=for-the-badge" alt="Jouer à Morpion Ultime">
  </a>
</div>

## Tableau des matières

- [Introduction](#introduction)
- [Fonctionnalités](#fonctionnalités)
- [Configuration requise](#configuration-requise)
- [Installation](#installation)
- [Démarrage](#démarrage)
- [Utilisation](#utilisation)
- [Démo](#démo)
- [Contribuer](#contribuer)
- [Sécurité](#sécurité)
- [Code de conduite](#code-de-conduite)
- [Support](#support)
- [Licence](#licence)
- [Remerciements](#remerciements)

## Introduction

**Morpion Ultime** est une implémentation open-source, basée sur le web, du jeu classique de morpion, enrichie de fonctionnalités modernes et d'une expérience utilisateur soignée. Développé avec HTML5, CSS3 et JavaScript, il offre un support multilingue, des thèmes personnalisables, un adversaire IA, et des améliorations de jeu comme des minuteurs, un suivi des scores et une fonction d'annulation. Conçu pour les joueurs de tous âges, il permet de profiter du morpion sur n'importe quel appareil de manière ludique et accessible.

Hébergé sur GitHub Pages, Morpion Ultime est disponible en ligne sans installation, mais peut également être exécuté localement. En tant que projet open-source, il encourage les contributions pour améliorer ses fonctionnalités, corriger des bugs ou optimiser l'accessibilité.

> **Note** : Ce projet est activement maintenu. Certaines fonctionnalités, comme la stratégie de l'IA ou les performances des animations, peuvent avoir des limites. Vos retours sont appréciés !

## Fonctionnalités

- **Jeu classique de morpion** : Grille 3x3 avec les symboles X et O, objectif d'aligner trois symboles (horizontalement, verticalement ou en diagonale).
- **Modes de jeu** :
  - Humain contre Humain (jeu local sur le même appareil).
  - Humain contre IA (IA de base effectuant des coups aléatoires).
- **Support multilingue** : Disponible en 8 langues :
  - Anglais, Chinois (中文), Japonais (日本語), Coréen (한국어), Russe (Русский), Espagnol (Español), Français (Français), Allemand (Deutsch).
- **Interface personnalisable** :
  - **Thèmes de couleur** : Choisissez entre Par défaut, Sombre, Clair ou Coloré.
  - **Polices** : Sélectionnez entre Poppins, Roboto ou Open Sans.
- **Fonctionnalités de jeu** :
  - **Minuteur** : Suit la durée du jeu avec des contrôles pour démarrer, arrêter et réinitialiser.
  - **Suivi des scores** : Affiche les victoires pour le Joueur X, le Joueur O et les égalités.
  - **Annuler un coup** : Permet de revenir en arrière sur le dernier coup pendant une partie active.
  - **Noms des joueurs** : Personnalisez les noms pour le Joueur X et le Joueur O.
  - **Célébration de victoire** : Animation de confettis à la victoire.
- **Paramètres** :
  - Changez la langue, le thème de couleur ou la police via une fenêtre de paramètres.
  - Sauvegardez vos préférences dans le stockage local pour les conserver entre les sessions.
- **Design adaptatif** : Optimisé pour ordinateurs, tablettes et mobiles.
- **Effets visuels** :
  - Page d'accueil animée avec un effet de chargement et un fond à bulles.
  - Mise en évidence des cellules gagnantes pour indiquer clairement la victoire.
- **Accessibilité** : Inclut des attributs `data-i18n` pour les traductions et un support clavier de base.
- **Sans publicité** : Une expérience de jeu sans distractions.

## Configuration requise

Pour jouer à Morpion Ultime, vous devez avoir :

- **Navigateur web** : Navigateur moderne (par exemple, Chrome, Firefox, Edge, Safari) avec JavaScript activé.
- **Système d'exploitation** : N'importe lequel (Windows, macOS, Linux, iOS, Android) avec un navigateur compatible.
- **Espace disque** : Minimal (~5 Mo pour les fichiers de l'application, y compris les ressources).
- **Connexion Internet** : Nécessaire pour le chargement initial des ressources (par exemple, Google Fonts) sauf si hébergé localement.
- **Dépendances** : Aucune (toutes les ressources sont chargées via des CDN ou des fichiers locaux).

## Installation

Suivez ces étapes pour configurer Morpion Ultime localement :

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe.git
   ```

2. **Naviguer dans le répertoire du projet** :
   ```bash
   cd Ultimate-Tic-Tac-Toe
   ```

3. **Ouvrir l'application** :
   - Double-cliquez sur `index.html` pour l'ouvrir dans votre navigateur par défaut.
   - Alternativement, servez les fichiers avec un serveur local (recommandé pour un chargement correct des ressources) :
     ```bash
     python -m http.server 8000
     ```
     Ensuite, accédez à `http://localhost:8000` dans votre navigateur.

4. **Vérifier le fonctionnement** :
   - Assurez-vous que la page d'accueil se charge avec le logo, le titre et le bouton "Démarrer le jeu".
   - Cliquez sur "Démarrer le jeu" pour accéder à l'interface de jeu et tester un coup (par exemple, placez un X dans une cellule).
   - Vérifiez que la fenêtre des paramètres, le sélecteur de langue et les contrôles de jeu (par exemple, minuteur, annuler) fonctionnent.

> **Note** : Assurez-vous que les ressources chargées via CDN (par exemple, Google Fonts) sont accessibles. Pour une utilisation hors ligne, envisagez de télécharger les polices et de les héberger localement.

## Démarrage

Pour commencer à jouer à Morpion Ultime :

1. **Accéder au jeu** :
   - Jouez en ligne sur [voxdroid.github.io/Ultimate-Tic-Tac-Toe](https://voxdroid.github.io/Ultimate-Tic-Tac-Toe/).
   - Ou ouvrez `index.html` localement comme décrit dans [Installation](#installation).

2. **Naviguer sur la page d'accueil** :
   - Sélectionnez une langue dans le menu déroulant (Français par défaut).
   - Cliquez sur "Démarrer le jeu" pour passer à l'interface de jeu avec une animation de chargement.

3. **Explorer l'interface** :
   - **Plateau de jeu** : Une grille 3x3 pour placer les symboles X ou O.
   - **Panneau d'informations** : Inclut les champs pour les noms des joueurs, le minuteur, l'affichage des scores et les contrôles (annuler, nouveau jeu, coup IA, réinitialiser les scores).
   - **Paramètres** : Accessible via le bouton des paramètres pour ajuster la langue, le thème de couleur ou la police.
   - **Barre d'état** : Affiche le tour du joueur actuel ou le résultat du jeu.

4. **Démarrer une partie** :
   - Cliquez sur "Démarrer le jeu" pour initialiser le plateau.
   - Cliquez sur une cellule pour placer votre symbole (X commence en premier).
   - Utilisez le bouton "Coup IA" pour laisser l'IA jouer en tant qu'adversaire.

5. **Personnaliser les paramètres** :
   - Ouvrez la fenêtre des paramètres pour changer le thème de couleur, la police ou la langue.
   - Entrez les noms des joueurs dans les champs prévus.
   - Les paramètres sont automatiquement sauvegardés dans le stockage local.

## Utilisation

### Jouer une partie
- **Humain contre Humain** :
  - Les joueurs alternent en plaçant X ou O dans des cellules vides (X commence).
  - Cliquez sur une cellule pour faire un coup.
  - Alignez trois symboles identiques (horizontalement, verticalement ou en diagonale).
- **Humain contre IA** :
  - Jouez en tant que X ou O ; cliquez sur le bouton "Coup IA" pour laisser l'IA effectuer un coup aléatoire.
  - L'IA choisit une cellule vide au hasard.
- **Contrôles** :
  - **Nouveau jeu** : Réinitialise le plateau et le minuteur.
  - **Annuler** : Annule le dernier coup (si la partie est active).
  - **Coup IA** : Déclenche un coup de l'IA pour l'adversaire.
  - **Démarrer/Arrêter/Réinitialiser le minuteur** : Gère le minuteur du jeu.
  - **Réinitialiser les scores** : Efface les compteurs de victoires/égalités.

### Personnalisation
- **Langue** : Sélectionnez parmi 8 langues via le menu déroulant sur la page d'accueil ou l'interface de jeu.
- **Thème de couleur** : Choisissez entre Par défaut, Sombre, Clair ou Coloré dans la fenêtre des paramètres.
- **Police** : Passez entre Poppins, Roboto ou Open Sans.
- **Noms des joueurs** : Entrez des noms personnalisés pour le Joueur X et le Joueur O dans les champs prévus.

### Fonctionnalités de jeu
- **Minuteur** : Affiche le temps écoulé au format MM:SS, avec des contrôles pour démarrer, arrêter ou réinitialiser.
- **Suivi des scores** : Suit les victoires pour X, O et les égalités, affichées dans le panneau d'informations.
- **Annuler un coup** : Permet de revenir sur le dernier coup, en préservant l'état du jeu.
- **Célébration de victoire** : Déclenche une animation de confettis lorsqu'un joueur gagne.
- **Notifications** : Affiche les indicateurs de tour, les messages de victoire ou les alertes d'égalité/fin de jeu dans la langue sélectionnée.

## Démo

<div align="center">
  <img src="https://raw.githubusercontent.com/VoxDroid/Ultimate-Tic-Tac-Toe/refs/heads/main/assets/img/preview.png" alt="Gameplay de Morpion Ultime" width="800">
</div>

Essayez Morpion Ultime en direct sur [voxdroid.github.io/Ultimate-Tic-Tac-Toe](https://voxdroid.github.io/Ultimate-Tic-Tac-Toe/).

## Contribuer

Nous accueillons les contributions à Morpion Ultime ! Pour participer :

- Consultez les [Directives de contribution](../CONTRIBUTING.md) pour plus de détails sur la soumission de problèmes, de demandes de fonctionnalités ou de pull requests.
- Forkez le dépôt, effectuez des modifications et soumettez une pull request.
- Respectez le [Code de conduite](../CODE_OF_CONDUCT.md) pour garantir une communauté respectueuse.

Exemples de contributions :
- Améliorez l'IA avec un algorithme plus intelligent (par exemple, minimax).
- Ajoutez de nouveaux thèmes de couleur ou polices.
- Améliorez l'accessibilité (par exemple, attributs ARIA, navigation au clavier).
- Implémentez les règles du morpion ultime (grille 9x9 avec sous-grilles).

## Sécurité

La sécurité est une priorité pour Morpion Ultime. Si vous découvrez une vulnérabilité :

- Signalez-la de manière privée comme décrit dans la [Politique de sécurité](../SECURITY.md).
- Évitez toute divulgation publique tant que le problème n'est pas résolu.

## Code de conduite

Tous les contributeurs et utilisateurs sont tenus de respecter le [Code de conduite](../CODE_OF_CONDUCT.md) pour maintenir un environnement accueillant et inclusif.

## Support

Besoin d'aide avec Morpion Ultime ? Visitez la [page de support](../SUPPORT.md) pour des ressources, y compris :

- Soumettre des rapports de bugs ou des demandes de fonctionnalités.
- Discussions communautaires et informations de contact.
- FAQ pour les problèmes courants (par exemple, comportement de l'IA, problèmes de minuteur).

## Licence

Morpion Ultime est sous licence [MIT](../LICENSE). Consultez le fichier [LICENSE](../LICENSE) pour plus de détails.

## Remerciements

- **Google Fonts** : Pour avoir fourni les polices Poppins, Roboto et Open Sans.
- **VoxDroid** : Pour la création et la maintenance du projet.
- **Contributeurs** : Merci à tous ceux qui signalent des problèmes, suggèrent des fonctionnalités ou contribuent au code.
- **Communauté du morpion** : Pour avoir inspiré ce projet avec des ressources et des idées.

---

<div align="center">
  <p><strong>Développé par <a href="https://github.com/VoxDroid">VoxDroid</a></strong></p>
  <p>Vous appréciez Morpion Ultime ? Mettez une étoile au projet sur <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe">GitHub</a> !</p>
</div>