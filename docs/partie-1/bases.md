# Les Bases Complètes

L'objectif est de maîtriser la syntaxe de base pour écrire des algorithmes avant d'aborder le Web.

## 1. Variables et Types
JavaScript est **dynamiquement typé**.

### Déclaration : `let` vs `const`
*   `const` : **Par défaut**. Pour tout ce qui ne change pas de référence.
*   `let` : Pour les compteurs ou variables qui seront réassignées.
*   `var` : **Obsolète**. À bannir.

```javascript
const NOM_COURS = "Intro JS";
let nombreEtudiants = 30;
nombreEtudiants = 31; // OK
```

### Types Primitifs
*   **String** : `"Double"`, `'Simple'`, `` `Template` ``.
*   **Number** : `42`, `3.14`.
*   **Boolean** : `true`, `false`.
*   **Null** / **Undefined**.

---

## 2. Opérateurs
*   **Arithmétiques** : `+`, `-`, `*`, `/`, `%` (modulo), `**` (exposant).
*   **Comparaison** : `===` (Strict), `!==`, `==` (Permissif, à éviter).
*   **Logiques** : `&&` (ET), `||` (OU), `!` (NON).

---

## 3. Les Bizarreries du Langage (Type Coercion)
JS tente de convertir les types implicitement.

```javascript
console.log("5" - 1); // 4 (Nombre)
console.log("5" + 1); // "51" (Concaténation)
console.log(null >= 0); // true (Absurde mais réel)
```
> **Conseil :** Utilisez toujours `===`.

---

## 4. Logique de Contrôle

### L'instruction `if / else`
```javascript
const note = 14;
if (note >= 16) { console.log("Très bien"); } 
else if (note >= 10) { console.log("Moyenne"); } 
else { console.log("Rattrapage"); }
```

### L'instruction `switch`
Attention au `break` pour éviter le *fall-through*.

```javascript
switch (jour) {
    case "Lundi": console.log("Début"); break;
    case "Vendredi": console.log("Fin"); break;
    default: console.log("Autre");
}
```

---

## 5. Boucles (Loops)

### `for` (Itérations connues)
```javascript
for (let i = 0; i < 5; i++) { console.log(i); }
```

### `while` (Conditionnelle)
```javascript
while (essence > 0) { essence--; }
```

### Contrôle (`break` / `continue`)
*   `break` : Sortir de la boucle.
*   `continue` : Passer à l'itération suivante.

---

## 6. Les Fonctions

### Anatomie
```javascript
function saluer(nom) {
    return "Bonjour " + nom;
}
```

### Fonctions Fléchées (Arrow Functions)
Moderne et concis.
```javascript
const carre = (x) => x * x;
```

---

## 7. Portée (Scope)
*   **Block Scope** : `let` et `const` existent seulement dans leur bloc `{ ... }`.
*   **Function Scope** : `var` (ancien).

---

## 8. Les Tableaux (Arrays)
Liste ordonnée, indexée à 0, types mixtes possibles.

### Méthodes
`push`, `pop`, `shift`, `unshift`, `splice`, `includes`.

### Itération Moderne
```javascript
const notes = [10, 15, 20];

// Boucler
notes.forEach(n => console.log(n));

// Transformer (Map)
const double = notes.map(n => n * 2);

// Filtrer (Filter)
const moyenne = notes.filter(n => n >= 10);
```
