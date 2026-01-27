# Organisation du Code : Modules & Imports

Au début, tout le JavaScript était souvent écrit dans un seul fichier géant ou éparpillé dans plusieurs balises `<script>` sans communication entre elles. C'était un cauchemar à maintenir.

Aujourd'hui, on découpe notre code en **Modules**. Un module est simplement un fichier JavaScript qui peut "exporter" des parties de son code pour qu'elles soient utilisées ailleurs.

## 1. Pourquoi diviser son code ?

*   **Maintenabilité** : Il est plus facile de comprendre un fichier de 50 lignes qu'un fichier de 5000 lignes.
*   **Réutilisabilité** : Une fonction écrite dans `utils.js` peut être utilisée dans `page1.js` et `page2.js`.
*   **Encapsulation** : On peut cacher des détails internes d'un module et n'exposer que ce qui est nécessaire (`export`).

---

## 2. ES Modules (ESM) : Le Standard Moderne

C'est le standard officiel du JavaScript moderne (arrivé avec ES6 en 2015). C'est ce que vous utiliserez 99% du temps dans le développement web moderne (avec Vite, React, Vue, etc.).

### Comment Exporter (Sortir des données)

Il y a deux façons principales d'exporter des données depuis un fichier.

#### A. Les Exports Nommés (Named Exports)
Utilisez-les quand vous voulez exporter **plusieurs choses** depuis un même fichier (une bibliothèque d'outils par exemple).

```javascript
/* === fichier: outils.js === */

// 1. Export direct à la déclaration
export const PI = 3.14159;
export function addition(a, b) { return a + b; }

// Variable interne (privée), non exportée
const secret = "Code123"; 

function soustraction(a, b) { return a - b; }

// 2. Export groupé à la fin (pratique pour avoir une vue d'ensemble)
export { soustraction };

// 3. Export avec renommage (alias)
export { soustraction as minus };
```

#### B. L'Export par Défaut (Default Export)
Utilisez-le quand votre fichier ne sert qu'à **une seule chose principale** (ex: un composant React, une classe spécifique).
Il ne peut y avoir qu'**un seul** `export default` par fichier.

```javascript
/* === fichier: User.js === */

export default class User {
    constructor(nom) { this.nom = nom; }
}

// On peut quand même avoir des exports nommés à côté si besoin
export const USER_ROLE = "admin";
```

---

### Comment Importer (Récupérer des données)

La façon d'importer dépend de comment la donnée a été exportée.

#### A. Importer des Exports Nommés
On utilise les accolades `{ }`. Le nom doit être **exactement** le même que celui exporté.

```javascript
/* === fichier: main.js === */

// 1. Import simple
import { PI, addition } from './outils.js';
console.log(addition(2, PI));

// 2. Import avec renommage (si conflits de noms avec votre code)
import { addition as add } from './outils.js';
console.log(add(10, 5));
```

#### B. Importer un Export par Défaut
On **n'utilise pas** d'laccolades. On peut donner **le nom qu'on veut** à la variable importée (puisqu'il n'y en a qu'une par défaut, JS sait de laquelle on parle).

```javascript
/* === fichier: main.js === */

import Utilisateur from './User.js'; // J'aurais pu l'appeler 'Personne', ça marcherait aussi
import { USER_ROLE } from './User.js'; // L'export nommé a toujours besoin d'accolades

const u = new Utilisateur("Alice");
```

#### C. Importer Tout d'un coup (Namespace Import)
Si un module exporte plein de choses et que vous ne voulez pas toutes les lister, vous pouvez tout importer dans un objet.

```javascript
import * as MathTools from './outils.js';

console.log(MathTools.PI);
console.log(MathTools.addition(1, 2));
```

---

## 3. Pièges et Bonnes Pratiques

### Chemins Relatifs
En local, vos imports doivent toujours commencer par `./` ou `../` pour indiquer qu'il s'agit d'un fichier du projet.
*   `import ... from 'react'` -> Cherche dans le dossier `node_modules` (librairie installée).
*   `import ... from './monFichier.js'` -> Cherche le fichier local `monFichier.js` dans le même dossier.

### Utilisation dans le HTML
Pour que le navigateur comprenne ce système "moderne" directement (sans outil de build comme Vite), il faut l'attribut `type="module"`.

```html
<!-- index.html -->
<script type="module" src="./main.js"></script>
```
*Note : Avec `type="module"`, le script est automatiquement différé (`defer`), il ne bloque pas l'affichage de la page.*

---

## 4. CommonJS (CJS) : L'Héritage Node.js

Avant qu'ESM (import/export) ne devienne standard, Node.js utilisait son propre système. Vous verrez souvent ça dans des fichiers de configuration (comme `tailwind.config.js` ou des vieux projets backend).

C'est bon à savoir lire, mais évitez de l'écrire si vous pouvez faire du ESM.

```javascript
// Export (Vieux style)
module.exports = {
  maFonction: function() {},
  maVariable: 42
};

// Import (Vieux style)
const outils = require('./outils.js');
```
