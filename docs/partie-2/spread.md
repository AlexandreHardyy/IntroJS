# Le Spread Operator (Objets)

Le **Spread Operator** (opérateur de décomposition), noté `...`, est un outil puissant introduit dans ES2015 (pour les tableaux) et ES2018 (pour les objets). Il permet de "déballer" les propriétés d'un objet dans un nouvel objet.

## Clonage superficiel (Shallow Copy)

L'usage le plus courant est de créer une copie d'un objet. Contrairement à une simple assignation (`=`) qui copie la référence, le spread operator crée un **nouvel objet** avec les mêmes propriétés.

```javascript
const original = { a: 1, b: 2 };
const copie = { ...original };

console.log(copie); // { a: 1, b: 2 }
console.log(copie === original); // false (références différentes)

// Modifier la copie n'affecte pas l'original
copie.a = 99;
console.log(original.a); // 1
```

⚠️ **Attention : Copie superficielle**
Cela ne copie que le premier niveau. Si l'objet contient d'autres objets (imbriqués), ces sous-objets sont toujours partagés par référence.

```javascript
const user = { 
  nom: "Alice", 
  details: { age: 25 } 
};
const clone = { ...user };

clone.details.age = 30; // Modifie l'objet imbriqué partagé !
console.log(user.details.age); // 30
```
Pour une copie profonde (Deep Copy), on utilise souvent `structuredClone(user)` (disponible dans les navigateurs modernes et Node.js récents) ou des librairies.

## Fusionner des objets

Le spread operator permet de combiner facilement plusieurs objets.

```javascript
const bases = { vie: 100, mana: 50 };
const guerrier = { force: 20, defense: 10 };

const personnage = { ...bases, ...guerrier };
// { vie: 100, mana: 50, force: 20, defense: 10 }
```

### Ordre et Surcharge
L'ordre est important ! Si plusieurs objets ont la même clé, c'est **la dernière** qui gagne (elle écrase les précédentes).

```javascript
const defaut = { theme: "light", admin: false };
const userPrefs = { theme: "dark" };

const configFinale = { ...defaut, ...userPrefs };
// { theme: "dark", admin: false } -> "dark" écrase "light"

const erreurConfig = { ...userPrefs, ...defaut };
// { theme: "light", admin: false } -> "light" écrase "dark" (probablement pas ce qu'on veut)
```

## Ajouter ou modifier des propriétés

On peut mixer le spread operator avec des déclarations de propriétés explicites pour ajouter ou surcharger des valeurs.

```javascript
const article = { id: 1, titre: "Le JS", publie: false };

// Créer une version publiée de l'article sans toucher à l'original
const articlePublie = { 
  ...article, 
  publie: true, 
  dateDePublication: "2024-01-27" 
};

console.log(articlePublie);
/*
{
  id: 1, 
  titre: "Le JS", 
  publie: true, 
  dateDePublication: "2024-01-27"
}
*/
```

## Le Rest Operator (Extraction)

L'opérateur `...` peut aussi être utilisé dans l'autre sens, lors de la déstructuration, pour récupérer "le reste" des propriétés. On l'appelle alors **Rest Operator**.

```javascript
const voiture = { marque: "Toyota", modele: "Yaris", annee: 2020, couleur: "Rouge" };

// On extrait la marque, et on met tout le reste dans 'details'
const { marque, ...details } = voiture;

console.log(marque);   // "Toyota"
console.log(details);  // { modele: "Yaris", annee: 2020, couleur: "Rouge" }
```
C'est très utile pour supprimer une propriété d'un objet de manière immuable (en créant un nouvel objet sans la propriété indésirable).
