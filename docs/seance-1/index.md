# Séance 1 : Les Fondamentaux du Langage

Bienvenue dans ce cours. L'objectif de cette première séance est ambitieux : **Maîtriser la syntaxe de base de JavaScript** pour être capable d'écrire des algorithmes complets avant même de toucher à une page web. Nous allons combiner les variables, la logique, les fonctions et les structures de données (tableaux, objets).

## 1. Introduction
JavaScript (JS) est le langage qui a mangé le monde. Initialement conçu pour scripter de petites interactions dans Netscape Navigator en 1995, il est aujourd'hui omniprésent.

### Pourquoi JavaScript ?
*   **Web Front-end** : Il est irremplaçable pour l'interactivité (React, Vue, Angular).
*   **Web Back-end** : Avec Node.js, on construit des serveurs performants (Netflix, Uber, Trello utilisent Node).
*   **Mobile** : React Native permet de créer des apps iOS/Android.
*   **Desktop** : VS Code, Discord et Slack sont construits avec Electron (Tech Web).

### Environnement
Nous utiliserons la console du navigateur (F12 > Console) pour tester nos bouts de code rapidement.

```javascript
console.log("Prêt à coder !");
console.warn("Ceci est un avertissement");
console.error("Ceci est une erreur");
```

---

## 2. Variables et Types
JavaScript est **dynamiquement typé**. Le type d'une variable est défini par sa valeur.

### Déclaration : `let` vs `const`
*   `const` : **Par défaut**. Pour tout ce qui ne change pas de référence.
*   `let` : Pour les compteurs ou variables qui seront réassignées.
*   `var` : **Obsolète**. À bannir (problèmes de portée).

```javascript
const NOM_COURS = "Intro JS";
let nombreEtudiants = 30;

nombreEtudiants = 31; // OK
// NOM_COURS = "Autre"; // ❌ TypeError
```

### Types Primitifs
*   **String** : `"Double"`, `'Simple'`, `` `Template` ``.
*   **Number** : `42`, `3.14` (pas de distinction int/float).
*   **Boolean** : `true`, `false`.
*   **Null** : Valeur "vide" explicite.
*   **Undefined** : Variable déclarée sans valeur.

### Types Complexes
*   **Object** : `{ clé: valeur }`
*   **Array** : `[1, 2, 3]` (qui est techniquement un objet).

---

## 3. Opérateurs
*   **Arithmétiques** : `+`, `-`, `*`, `/`, `%` (modulo), `**` (exposant).
*   **Comparaison** :
    *   `===` (Strict : valeur ET type). Utiliser toujours celui-ci.
    *   `!==` (Différent strict).
    *   `==` (Permissif : `1 == '1'` est vrai). À éviter.
*   **Logiques** : `&&` (ET), `||` (OU), `!` (NON).

---

## 4. Logique de Contrôle

### Conditions
```javascript
const age = 20;

if (age > 18) {
    console.log("Majeur");
} else if (age === 18) {
    console.log("Pile poil !");
} else {
    console.log("Mineur");
}

// Ternaire (If en une ligne)
const type = age >= 18 ? "Adulte" : "Enfant";
```

### Switch
```javascript
const fruit = "Pomme";
switch (fruit) {
    case "Pomme": console.log("C'est rouge ou vert"); break;
    case "Banane": console.log("C'est jaune"); break;
    default: console.log("Je ne connais pas ce fruit");
}
```

---

## 5. Boucles (Loops)
Pour répéter une logique.

```javascript
// Boucle FOR (connue)
for (let i = 0; i < 3; i++) {
    console.log(`Tour ${i}`);
}

// Boucle WHILE (condition)
let essence = 10;
while (essence > 0) {
    console.log("On roule...");
    essence--;
}
```

---

## 6. Les Fonctions
Le cœur de la réutilisabilité en JS.

### 1. Fonction Fléchée (Arrow Function) - Moderne
Syntaxe concise, idéale pour les callbacks.

```javascript
const carre = (x) => x * x;
const direBonjour = (nom) => {
    return `Bonjour ${nom} !`; // Template Literal
};

console.log(carre(5)); // 25
```

### 2. Fonction Classique
```javascript
function addition(a, b) {
    return a + b;
}
```

### Paramètres par défaut
```javascript
const bienvenue = (user = "Visiteur") => console.log(`Hello ${user}`);
bienvenue(); // "Hello Visiteur"
```

---

## 7. Portée (Scope)
Comprendre où vos variables sont visibles est CRUCIAL.

*   **Global Scope** : Accessible partout (attention aux conflits).
*   **Function Scope** : `var` (ancien).
*   **Block Scope** : `let` et `const` sont confinés au bloc `{ ... }` courant (if, for, function).

```javascript
if (true) {
    let secret = "1234";
    const code = "XYZ";
    var visible = "Je sors du bloc";
}
// console.log(secret); // ❌ ReferenceError
console.log(visible); // "Je sors du bloc" (Le piège de var)
```

---

## 8. Les Tableaux (Arrays)
Une liste ordonnée, indexée à partir de 0.

```javascript
const stack = ["HTML", "CSS", "JS"];
console.log(stack[1]); // "CSS"
console.log(stack.length); // 3
```

### Méthodes Indispensables
*   `push(val)` : Ajoute à la fin.
*   `pop()` : Retire le dernier.
*   `splice(start, nb)` : Supprime/Remplace n'importe où.
*   `includes(val)` : Vérifie la présence (`true`/`false`).

### Itération Moderne
Oubliez la boucle `for` classique pour parcourir un tableau.

```javascript
const notes = [10, 15, 20];

// forEach : Pour exécuter une action
notes.forEach((note) => {
    console.log(note);
});

// map : Pour transformer (retourne un nouveau tableau)
const notesSur100 = notes.map(note => note * 5);
console.log(notesSur100); // [50, 75, 100]

// filter : Pour garder selon condition
const bonnesNotes = notes.filter(note => note >= 15);
console.log(bonnesNotes); // [15, 20]
```

---

## 9. Les Objets
Structure clé-valeur pour représenter des entités.

```javascript
const utilisateur = {
    nom: "Hardy",
    prenom: "Alex",
    roles: ["admin", "editor"],
    sePresenter: function() {
        console.log(`Je suis ${this.prenom}`);
    }
};

console.log(utilisateur.nom); // "Hardy"
utilisateur.sePresenter();
```

### Destructuring (Déstructuration)
Une syntaxe élégante pour extraire des données.

```javascript
// Au lieu de const nom = utilisateur.nom...
const { nom, roles } = utilisateur;
console.log(roles); // ["admin", "editor"]
```

---

## Exercice : Le Gestionnaire de Tâches
Créez un tableau d'objets `taches`. Chaque tâche a un `titre` (string), une `priorite` (number) et un statut `faite` (boolean).

1.  Ajoutez 3 tâches.
2.  Affichez le titre de toutes les tâches à faire (`faite: false`).
3.  Créez un nouveau tableau avec seulement les titres des tâches urgentes (`priorite > 3`).

*Correction à voir ensemble dans la console !*
