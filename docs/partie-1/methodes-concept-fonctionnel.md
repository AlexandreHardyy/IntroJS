# Méthodes et Programmation Fonctionnelle

Cette section explore les méthodes intégrées puissantes pour manipuler les données et introduit les concepts de la programmation fonctionnelle en JavaScript.

## 1. Manipulation des Chaînes (Strings)

Les chaînes de caractères possèdent de nombreuses méthodes utiles. Rappelez-vous que les méthodes de chaînes retournent toujours une **nouvelle chaîne** (les chaînes sont immuables).

### Extraction et Découpage
*   **`.substring(début, fin)`** : Extrait une partie de la chaîne.
*   **`.slice(début, fin)`** : Similaire à substring, mais supporte les indices négatifs (partir de la fin).
*   **`.split(séparateur)`** : Découpe la chaîne en un tableau selon le séparateur donné.

```javascript
const phrase = "JavaScript est génial";
console.log(phrase.substring(0, 10)); // "JavaScript"
console.log(phrase.slice(-6));        // "génial"
console.log(phrase.split(" "));       // ["JavaScript", "est", "génial"]
```

### Recherche et Modification
*   **`.includes(texte)`** : Vérifie si le texte contient une sous-chaîne.
*   **`.replace(ancien, nouveau)`** : Remplace la première occurrence.
*   **`.trim()`** : Retire les espaces au début et à la fin.
*   **`.toLowerCase()` / `.toUpperCase()`** : Change la casse.

```javascript
const email = "  User@Example.com  ";
const cleanEmail = email.trim().toLowerCase(); // "user@example.com"
```

---

## 2. Méthodes des Tableaux (Arrays)

JavaScript brille par ses méthodes de tableau qui favorisent un style déclaratif.

### `.map()` : Transformer
Crée un **nouveau tableau** en appliquant une fonction à chaque élément.

```javascript
const prix = [10, 20, 30];
const prixTTC = prix.map(p => p * 1.20);
// Résultat : [12, 24, 36]
```

### `.filter()` : Sélectionner
Crée un **nouveau tableau** contenant uniquement les éléments qui valident la condition.

```javascript
const utilisateurs = [
    { id: 1, admin: true },
    { id: 2, admin: false },
    { id: 3, admin: true }
];
const admins = utilisateurs.filter(u => u.admin);
// Résultat : [{ id: 1...}, { id: 3...}]
```

### `.find()` : Trouver
Retourne le **premier élément** qui valide la condition (ou `undefined`).

```javascript
const user = utilisateurs.find(u => u.id === 2);
// Résultat : { id: 2, admin: false }
```

### `.reduce()` : Agréger
Réduit le tableau à une **valeur unique** (somme, objet, etc.).

```javascript
const panier = [10, 20, 30];
const total = panier.reduce((acc, prix) => acc + prix, 0);
// acc est l'accumulateur, 0 est sa valeur initiale.
// 0 + 10 -> 10 + 20 -> 30 + 30 -> 60.
```

### Autres Méthodes Utiles
*   **`.some(cond)`** : `true` si au moins un élément valide la condition.
*   **`.every(cond)`** : `true` si **tous** les éléments valident la condition.
*   **`.join(séparateur)`** : Inverse de `split`, joint un tableau en chaîne.

---

## 3. Introduction à la Programmation Fonctionnelle

La programmation fonctionnelle (PF) est un paradigme où l'on construit des programmes en composant et appliquant des fonctions.

### Concepts Clés
1.  **Fonctions Pures** : Pour une même entrée, toujours la même sortie. Pas d'effets de bord (ne modifie pas de variables externes).
2.  **Immuabilité** : On ne modifie pas les données existantes, on en crée de nouvelles. C'est ce que font `map` et `filter`.
    *   *Mauvais (Mutation)* : `arr.push(4)` modifie `arr`.
    *   *Bon (Immuable)* : `const newArr = [...arr, 4]` crée un nouveau tableau.
3.  **Fonctions d'Ordre Supérieur** : Fonctions qui prennent d'autres fonctions en argument (comme `map`, `filter`, `forEach`).

### Pourquoi utiliser ce style ?
*   **Plus lisible** : On décrit *quoi* faire (map/filter) plutôt que *comment* le faire (boucles for).
*   **Moins de bugs** : L'immuabilité évite les changements d'état imprévus.
*   **Testable** : Les fonctions pures sont très faciles à tester unitairement.
