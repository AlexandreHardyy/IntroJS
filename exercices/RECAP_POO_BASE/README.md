# Exercice Récapitulatif : Todo List en Console

## Objectif

Créer une application de **gestion de tâches** (Todo List) interactive dans la console, en combinant :
- La **Programmation Orientée Objet** (classes, constructeur, méthodes, getters/setters, propriétés statiques)
- Les **bases de JavaScript** (variables, boucles, conditions, fonctions)
- Les **méthodes fonctionnelles** de tableaux (`filter`, `map`, `find`, etc.)

## Lancer l'exercice

```bash
cd exercices/RECAP_POO_BASE
npm start
```

## Fichiers

| Fichier | Description |
| :--- | :--- |
| `index.js` | Le fichier principal à compléter — contient les consignes détaillées |
| `input.js` | Utilitaire fourni — exporte la fonction `input()` pour lire la saisie console |

## La fonction `input()`

Cette fonction est **déjà fournie**, pas besoin de la modifier. Elle permet de poser une question et d'attendre la réponse :

```javascript
import { input } from './input.js';

const nom = await input('Quel est votre nom ? ');
console.log(`Bonjour ${nom} !`);
```

> **Note :** `input()` retourne une Promise, donc il faut utiliser `await` (et être dans une fonction `async`).

## Pas de tests

Cet exercice sera **corrigé ensemble**.  
Testez votre application en la lançant et en essayant les différentes options du menu !
