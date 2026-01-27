# Comparaison d'objets

En JavaScript, la comparaison d'objets fonctionne différemment de la comparaison de types primitifs (nombres, chaînes de caractères, booléens). C'est une source fréquente de bugs pour les débutants.

## Référence vs Valeur

### Les Primitifs (Par Valeur)
Les types primitifs sont comparés par leur **valeur**. Si deux variables contiennent la même valeur, elles sont considérées comme égales.

```javascript
const a = 10;
const b = 10;
const c = "bonjour";
const d = "bonjour";

console.log(a === b); // true
console.log(c === d); // true
```

### Les Objets (Par Référence)
Les objets (ainsi que les tableaux et les fonctions) sont stockés et comparés par **référence** (adresse mémoire). 

Lorsque vous écrivez `{ a: 1 }`, JavaScript crée un nouvel objet en mémoire. Si vous écrivez à nouveau `{ a: 1 }`, c'est un **autre** objet, à une autre adresse, même s'ils ont le même contenu.

```javascript
const obj1 = { nom: "Alice" };
const obj2 = { nom: "Alice" };

console.log(obj1 === obj2); // false !
console.log(obj1 == obj2);  // false !
```

Bien que le contenu soit identique, `obj1` et `obj2` pointent vers deux emplacements mémoire différents. L'opérateur `===` vérifie "est-ce que ces deux variables pointent vers le **même** objet en mémoire ?", et non "est-ce que le contenu est le même ?".

## Copie de référence

Si vous assignez un objet existant à une nouvelle variable, vous copiez la **référence**, pas l'objet lui-même.

```javascript
const original = { id: 42 };
const copie = original; // Copie de la référence (alias)

console.log(original === copie); // true

// Modifier l'un modifie l'autre car ils pointent vers le même objet
copie.id = 99;
console.log(original.id); // 99
```

## Comment comparer le contenu de deux objets ?

Puisque `===` ne fonctionne pas pour le contenu, comment vérifier si deux objets sont "identiques" structurellement ?

### 1. La méthode "rapide" : JSON.stringify

Pour des objets simples (sans fonctions, `undefined`, ou références circulaires), vous pouvez convertir les objets en chaînes JSON et comparer les chaînes.

```javascript
const o1 = { a: 1, b: 2 };
const o2 = { a: 1, b: 2 };

console.log(JSON.stringify(o1) === JSON.stringify(o2)); // true
```

⚠️ **Attention** : Cette méthode est fragile. Elle dépend de l'ordre des propriétés (qui n'est pas garanti pas JSON standard, bien que souvent respecté pour les clés simples).
```javascript
console.log(JSON.stringify({ a: 1, b: 2 }) === JSON.stringify({ b: 2, a: 1 })); // false
```

### 2. Comparaison manuelle ou récursive

Pour une comparaison fiable (Deep Equality), il faut vérifier chaque propriété une par une.

```javascript
function estEgal(objA, objB) {
  // Vérification de base des références
  if (objA === objB) return true;

  // Vérifier si ce sont bien des objets non-null
  if (objA === null || typeof objA !== 'object' ||
      objB === null || typeof objB !== 'object') {
    return false;
  }

  const clesA = Object.keys(objA);
  const clesB = Object.keys(objB);

  // Vérifier le nombre de propriétés
  if (clesA.length !== clesB.length) return false;

  // Vérifier chaque propriété récursivement
  for (let cle of clesA) {
    if (!clesB.includes(cle) || !estEgal(objA[cle], objB[cle])) {
      return false;
    }
  }

  return true;
}

const u1 = { nom: "Bob", adresse: { ville: "Paris" } };
const u2 = { nom: "Bob", adresse: { ville: "Paris" } };

console.log(estEgal(u1, u2)); // true
```

### 3. Utiliser une librairie

Dans le monde professionnel, on utilise souvent des fonctions éprouvées comme `_.isEqual` de Lodash qui gèrent tous les cas limites (Dates, Regex, références circulaires, etc.).
