# Guide des Exercices JavaScript

Bienvenue dans la suite d'exercices pour le cours d'Introduction à JavaScript. Ce dossier contient tout le nécessaire pour pratiquer et valider vos acquis.

## 1. Installation

Avant de commencer, vous devez installer les dépendances du projet (les outils nécessaires pour exécuter les tests).

Ouvrez votre terminal dans le dossier `exercices` et exécutez la commande suivante :

```bash
npm install
```

Cette commande va télécharger et installer tous les outils nécessaires dans un dossier `node_modules`. Vous ne devez le faire qu'une seule fois.

## 2. Structure du projet

Les exercices sont organisés en dossiers thématiques :
- `les_fondations/` : Les bases du langage (variables, types, boucles, fonctions...)
- `la_poo/` : La Programmation Orientée Objet

Chaque exercice est composé généralement de :
- Un fichier d'instructions ou de code à compléter.
- Un fichier de test associé qui valide votre code.

## 3. Lancer les tests

Nous utilisons **Vitest** pour vérifier que votre code fonctionne comme attendu.

### Lancer tous les tests
Pour lancer tous les tests du projet d'un coup, exécutez :

```bash
npm run test
```

### Tester un exercice spécifique (Recommandé)
Quand vous travaillez sur un exercice en particulier, il est plus pratique de ne lancer que les tests qui concernent cet exercice. 

Pour cela, ajoutez `--` suivi du nom du fichier (ou une partie du nom) à la commande.

**Exemple :**
Si vous travaillez sur l'exercice `01_types_variables`, vous pouvez lancer :

```bash
npm run test -- 01_types_variables
```

Cela lancera uniquement les tests correspondants.

### Mode surveillance (Watch mode)
Par défaut, la commande `npm run test` lance Vitest en mode "surveillance". Cela signifie que la console reste ouverte et relance les tests automatiquement à chaque fois que vous sauvegardez un fichier.
Pour quitter ce mode, appuyez sur `Ctrl + C`.

## 4. Comprendre les résultats

- **Vert (PASS)** : Bravo ! Votre code fonctionne correctement.
- **Rouge (FAIL)** : Il y a une erreur. Lisez le message d'erreur dans la console pour comprendre ce qui ne va pas (souvent Vitest vous indique la ligne exacte et la différence entre ce qui est attendu et ce que votre code produit).

Bon code !
