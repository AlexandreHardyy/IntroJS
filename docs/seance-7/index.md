# Séance 7 : Moderne & Stockage

## 1. Modules ES6
Organiser son code en plusieurs fichiers.

*   `export` : Rendre une var/fonction disponible.
*   `import` : Utiliser une var/fonction d'un autre fichier.

```javascript
// utils.js
export const add = (a, b) => a + b;

// main.js
import { add } from './utils.js';
```
*Note : nécessite un serveur local ou une config spécifique.*

## 2. Stockage Client
Sauvegarder des données dans le navigateur (persistant après rafraichissement).

### `localStorage`
Stockage permanent (jusqu'à effacement manuel).
```javascript
localStorage.setItem('user', 'Alex');
const user = localStorage.getItem('user');
localStorage.removeItem('user');
```

### `sessionStorage`
Stockage temporaire (durée de la session).

## 3. JSON (JavaScript Object Notation)
Format d'échange de données standard.
*   `JSON.stringify(obj)` : Convertit un objet JS en chaîne JSON.
*   `JSON.parse(str)` : Convertit une chaîne JSON en objet JS.
*   Nécessaire pour stocker des objets dans `localStorage` !

## 4. Syntaxe Moderne (ES6+)
*   **Template Literals** : `` `Bonjour ${nom}` ``.
*   **Spread Operator** (`...`) : Pour copier/fusionner des tableaux ou objets.
*   **Destructuring** (Rappel).
