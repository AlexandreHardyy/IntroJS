# Les Bases Complètes

L'objectif est de maîtriser la syntaxe de base pour écrire des algorithmes avant d'aborder le Web.

## 1. Variables et Types

JavaScript est un langage **dynamiquement typé**, ce qui signifie que vous n'avez pas besoin de préciser le type d'une variable (entier, texte, etc.) lors de sa déclaration. Le moteur JavaScript le devine pour vous.

### Déclaration de variables

Il existe trois façons de déclarer des variables, mais une seule règle d'or moderne : **préférez `const` par défaut**.

1.  **`const`** (Constante) :
    *   C'est la déclaration standard en JS moderne.
    *   On ne peut **pas** réassigner une valeur à une variable `const` (d'où son nom).
    *   *Usage* : Pour tout ce qui ne change pas (configurations, sélecteurs, fonctions, imports).
    *   *Note* : Si `const` contient un objet ou un tableau, on peut modifier le contenu de l'objet, mais pas remplacer l'objet lui-même.

2.  **`let`** (Variable) :
    *   On l'utilise quand on sait que la valeur va changer au cours du temps.
    *   *Usage* : Compteurs de boucles (`i`), résultats intermédiaires, booléens d'état (`isVisible`).

3.  **`var`** (L'ancien temps) :
    *   **Obsolète**. À éviter absolument aujourd'hui.
    *   A des comportements de portée bizarres (function scope) qui créent des bugs.

```javascript
// Bonne pratique
const NOM_UTILISATEUR = "Alice"; // Ne changera pas
let pointsDeVie = 100;           // Va changer quand elle prend des dégâts

pointsDeVie = 90; // Valide
// NOM_UTILISATEUR = "Bob"; // ERREUR ! Assignment to constant variable.
```

### Conventions de nommage
*   **camelCase** : C'est la norme en JS. On commence en minuscule, et chaque nouveau mot prend une majuscule. (ex: `maSuperVariable`, `nombreClients`).

### Les Types Primitifs

JavaScript possède quelques types de base simples : aloués par valeur.

*   **String (Chaînes de caractères)** :
    *   Peuvent être entourées de guillemets simples `' '` ou doubles `" "`. C'est pareil.
    *   **Template Literals** (Backticks `` ` ` ``) : La méthode moderne. Elle permet d'insérer des variables directement dedans avec `${variable}`.

    ```javascript
    const prenom = "Jean";
    // Ancienne méthode (concaténation)
    const salutationOld = "Bonjour " + prenom + ", ça va ?";
    
    // Nouvelle méthode (interpolation) - Beaucoup plus lisible !
    const salutationNew = `Bonjour ${prenom}, ça va ?`;
    ```

*   **Number (Nombres)** :
    *   Il n'y a pas de distinction "entier" vs "flottant" (décimal) en JS. Tout est `Number`.
    *   Attention aux calculs décimaux précis (0.1 + 0.2 !== 0.3 en informatique !).
    *   **`NaN`** (Not a Number) : Valeur spéciale obtenue quand on essaie de faire des maths impossibles (ex: `"texte" * 2`).

*   **Boolean** :
    *   `true` ou `false`. Rien d'autre. Base de toute la logique.

*   **Null et Undefined** (L'absence de valeur) :
    *   **`undefined`** : "Je ne sais pas ce que c'est". C'est la valeur par défaut d'une variable déclarée mais non initialisée. C'est le langage qui le dit.
    *   **`null`** : "Je sais qu'il n'y a rien". C'est une valeur que le développeur assigne volontairement pour dire "cette variable est vide".

---

## 2. Opérateurs

Les outils pour manipuler vos variables.

### Opérateurs Arithmétiques
Les classiques : `+`, `-`, `*`, `/`.
*   **Modulo (`%`)** : Donne le *reste* de la division entière. Génial pour savoir si un nombre est pair (`n % 2 === 0`) ou pour faire des boucles cycliques.
*   **Exposant (`**`)** : `2 ** 3` vaut 8 (2 puissance 3).

**Incrémentation rapide :**
```javascript
let compteur = 0;
compteur++; // équivaut à compteur = compteur + 1
compteur += 5; // équivaut à compteur = compteur + 5
```

### Opérateurs de Comparaison
C'est ici que les débutants se font piéger.

*   **L'égalité stricte (`===`)** : Vérifie la **valeur** ET le **type**.
    *   `5 === 5` // true
    *   `5 === "5"` // false (Number vs String)
*   **L'égalité faible (`==`)** : À BANNIR. Vérifie la valeur après conversion de type automatique.
    *   `5 == "5"` // true (JS convertit le string en nombre pour vous... risqué)

> **Règle** : Utilisez **toujours** `===` et `!==`. Oubliez que `==` et `!=` existent.

### Opérateurs Logiques
Pour combiner des conditions.

*   **ET (`&&`)** : Tout doit être vrai.
*   **OU (`||`)** : Au moins un doit être vrai.
*   **NON (`!`)** : Inverse le résultat (`!true` devient `false`).

**Short-circuit (Astuce Pro)** :
JS s'arrête dès qu'il a la réponse.
*   `const config = userConfig || defaultConfig;` -> Si `userConfig` existe, on le prend, sinon on prend `defaultConfig`. C'est très courant pour gérer des valeurs par défaut.

---

## 3. Les Conversions de Type (Coercion) et Types Explicites

Puisque JS est permissif, il essaie souvent de "réparer" vos erreurs de types. C'est la **coercion implicite**.

### Les Pièges classiques
```javascript
console.log("5" + 1); // "51" -> Le + sert à concaténer des textes, donc JS transforme 1 en "1".
console.log("5" - 1); // 4 -> Le - ne marche qu'avec des nombres, donc JS transforme "5" en 5.
console.log(1 + "1"); // "11"
```

### Conversion Explicite (Caster)
Ne laissez pas JS deviner. Convertissez vous-même vos données.

*   `String(valeur)` : Transforme en texte.
*   `Number(valeur)` : Transforme en nombre (ou `NaN` si impossible).
*   `Boolean(valeur)` : Transforme en vrai/faux.

**Exemple concret : Récupérer une entrée utilisateur**
Tout ce qui vient d'un formulaire HTML est une **String**.
```javascript
const ageInput = "42"; // Vient du formulaire
const age = Number(ageInput); // On le force en nombre pour faire des maths
console.log(age + 1); // 43 (Bravo !)
// Si on avait pas converti : "42" + 1 = "421" (Oups)
```

### TypeOf
Pour savoir à qui on a affaire :
```javascript
console.log(typeof 42); // "number"
console.log(typeof "Bob"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (C'est un vieux bug connu de JS, ne pas s'en inquiéter)
```

---

## 4. Logique de Contrôle

### L'instruction `if / else if / else`
C'est la base de la prise de décision. Le code dans le bloc `{ ... }` ne s'exécute que si la condition est vraie (`true`).

```javascript
const age = 20;
const aUnPermis = true;

if (age < 18) {
    console.log("Mineur : Pas de conduite.");
} else if (aUnPermis === false) {
    console.log("Majeur sans permis : Passager.");
} else {
    // Si aucune des conditions précédentes n'est vraie
    console.log("Majeur avec permis : Conducteur.");
}
```

> **Notion de Truthy/Falsy** : En JS, certaines valeurs sont considérées comme fausses (`false`, `0`, `""`, `null`, `undefined`, `NaN`). Toutes les autres sont vraies (`true`, `"a"`, `1`, `[]`, `{}`).

### Opérateur Ternaire (`? :`)
L'opérateur ternaire est une façon concise d'écrire un `if...else` sur une seule ligne. Il est très utilisé pour l'affectation de variables en fonction d'une condition.

**Syntaxe :**
`Condition ? ValeurSiVrai : ValeurSiFaux`

**Exemple Classique :**
```javascript
let statut;
const age = 20;

// Version avec if/else (6 lignes)
if (age >= 18) {
    statut = "Majeur";
} else {
    statut = "Mineur";
}

// Version Ternaire (1 ligne)
const statutRapide = age >= 18 ? "Majeur" : "Mineur";
console.log(statutRapide); // "Majeur"
```

**Exemple Avancé (Affichage) :**
```javascript
const user = { name: "Alice", isMember: true };
const message = user.isMember ? `Bienvenue membre ${user.name}` : "Inscrivez-vous !";
console.log(message);
```

### L'instruction `switch`
Utile quand on veut comparer une même variable à **plusieurs valeurs spécifiques**. C'est souvent plus propre qu'une série de `else if`.

**Attention** : Le mot-clé `break` est crucial. Sans lui, le code continue d'exécuter les cas suivants ("fall-through").

```javascript
const fruit = "Pomme";

switch (fruit) {
    case "Banane":
        console.log("C'est jaune.");
        break; // Arrête l'exécution ici si c'est une banane
    case "Pomme":
    case "Fraise": // On peut grouper des cas
        console.log("C'est rouge.");
        break; 
    case "Kiwi":
        console.log("C'est vert.");
        break;
    default: // Comme le 'else' final
        console.log("Couleur inconnue.");
}
```

---

## 5. Boucles (Loops)

### La boucle `for` (Itérations définies)
C'est la boucle la plus courante quand on connait à l'avance le nombre de tours (par exemple, parcourir un tableau ou compter jusqu'à 10).

**Anatomie :**
`for (initialisation; condition; incrémentation) { ... }`

```javascript
// Compter de 1 à 5
for (let i = 1; i <= 5; i++) {
    console.log("Tour numéro : " + i);
}

// Parcourir un tableau à l'envers
const lettres = ["A", "B", "C"];
for (let i = lettres.length - 1; i >= 0; i--) {
    console.log(lettres[i]); // C, puis B, puis A
}
```

### La boucle `while` (Itérations indéfinies)
Utilisée quand on ne sait pas combien de temps la boucle doit durer, mais qu'on a une condition d'arrêt (exemple : "Tant que le joueur a des vies").

```javascript
let vies = 3;
while (vies > 0) {
    console.log("Toujours en vie !");
    vies--; // Important : modifier la condition pour éviter une boucle infinie
}
console.log("Game Over");
```

### Contrôle de boucle : `break` et `continue`
*   **`break`** : Stoppe immédiatement la boucle et en sort.
*   **`continue`** : Zappe le reste du code actuel et passe directement au tour suivant.

```javascript
// Moteur de recherche simple
const mots = ["Bonjour", "Salut", "Bye", "Hello"];

for (let i = 0; i < mots.length; i++) {
    if (mots[i] === "Bye") {
        console.log("Trouvé ! Arrêt de la recherche.");
        break; // On ne vérifie pas "Hello", on sort
    }
    console.log("Test : " + mots[i]);
}

// Afficher seulement les nombres pairs
for (let i = 0; i < 5; i++) {
    if (i % 2 !== 0) {
        continue; // Si impair, on passe au suivant directement sans afficher
    }
    console.log("Nombre pair : " + i);
}
```

---

## 6. Les Fonctions

Les fonctions sont des blocs de code réutilisables. En JS, ce sont des citoyens de première classe (on peut les stocker dans des variables).

### Déclaration Classique
```javascript
function direBonjour(nom = "Invité") { // "Invité" est une valeur par défaut
    return `Bonjour ${nom} !`;
}

console.log(direBonjour("Thomas")); // "Bonjour Thomas !"
console.log(direBonjour());         // "Bonjour Invité !"
```

### Fonctions Fléchées (Arrow Functions)
Introduites avec ES6 (JS Moderne), elles offrent une syntaxe plus courte et sont très utilisées, notamment souvent dans les callbacks (fonctions passées en paramètre).

**1. Syntaxe de base :**
On remplace le mot clé `function` par une flèche `=>` après les arguments.

```javascript
// Fonction classique
const addition = function(a, b) {
    return a + b;
};

// Fonction fléchée équivalente
const additionArrow = (a, b) => {
    return a + b;
};
```

**2. Le retour implicite :**
C'est la grande force des arrow functions. Si la fonction ne fait **qu'une seule instruction** (un retour de valeur), on peut enlever les accolades `{}` et le mot `return`.

```javascript
// Très concis !
const multiplier = (x, y) => x * y;
const carre = x => x * x; // Si un seul paramètre, parenthèses optionnelles
```

**Exemple comparatif :**
```javascript
// Vérifier si pair
// Classique
function isPair(n) {
    return n % 2 === 0;
}

// Arrow function optimisée
const isPairArrow = n => n % 2 === 0;
```

---

## 7. Portée (Scope)

La portée définit où vos variables sont accessibles. C'est concept CRITIQUE pour éviter les bugs.

### Portée Globale
Une variable déclarée hors de toute fonction/bloc est globale. Elle est accessible partout.
⚠️ À éviter car n'importe qui peut la modifier par erreur.

### Portée de Bloc (`let` et `const`)
C'est la portée moderne. Une variable créée avec `let` ou `const` dans un bloc `{ ... }` (if, for, while) **n'existe que dans ce bloc**.

```javascript
if (true) {
    let messageSecret = "Chut !";
    const code = 1234;
    console.log(messageSecret); // OK
}

// console.log(messageSecret); // ERREUR ! messageSecret is not defined
```

### Le piège du `var` (Function Scope)
C'est pour cela qu'on ne l'utilise plus. `var` ignore les blocs `{}` classiques, il ne respecte que les fonctions.

```javascript
if (true) {
    var ancien = "Je suis visible dehors...";
}
console.log(ancien); // Affiche "Je suis visible dehors..." -> DANGER !
```

### Variable Shadowing
Si vous déclarez une variable avec le même nom qu'une variable externe, la variable interne "masque" l'externe temporairement.

```javascript
let prenom = "Paul";

function test() {
    let prenom = "Jacques"; // Variable différente, locale
    console.log(prenom); // "Jacques"
}

test();
console.log(prenom); // "Paul" (L'originale n'a pas bougé)
```

---

## 8. Les Tableaux (Arrays)

Structure de données fondamentale. Liste ordonnée, indexée à partir de 0.

### Création et Accès
```javascript
const monTableau = ["Pomme", 42, true];
console.log(monTableau[0]); // "Pomme"
console.log(monTableau.length); // 3

// Le dernier élément est toujours à length - 1
console.log(monTableau[monTableau.length - 1]); // true
```

### Manipulation de base
*   **Ajouter** : `push` (fin), `unshift` (début).
*   **Retirer** : `pop` (fin), `shift` (début).
*   **Trouver** : `includes(valeur)` (vrai/faux), `indexOf(valeur)` (position ou -1).

```javascript
const fruits = ["Pomme", "Poire"];
fruits.push("Banane"); // ["Pomme", "Poire", "Banane"]
const dernier = fruits.pop(); // Retire "Banane"
```

### Itération sur les tableaux

**1. La boucle `for...of` (Moderne & Lisible)**
C'est la meilleure façon de boucler simplement sur des valeurs.

```javascript
const membres = ["Alice", "Bob", "Charlie"];

for (const membre of membres) {
    console.log("Bonjour " + membre);
}
```

**2. `.forEach` (Méthode fonctionnelle)**
Exécute une fonction pour chaque élément. Très populaire.

```javascript
membres.forEach((membre, index) => {
    console.log(`${index} - ${membre}`);
});
```

**3. Transformation : `.map()`**
**Essentiel**. Permet de transformer un tableau en un **nouveau** tableau de même taille.

```javascript
const prixHT = [10, 20, 100];
// On veut appliquer 20% de TVA partout
const prixTTC = prixHT.map(prix => prix * 1.20);
console.log(prixTTC); // [12, 24, 120]
```

**4. Filtrage : `.filter()`**
Permet de créer un nouveau tableau ne contenant que les éléments qui valident une condition.

```javascript
const notes = [5, 12, 18, 9, 15];
// On ne garde que la moyenne
const bonnesNotes = notes.filter(note => note >= 10);
console.log(bonnesNotes); // [12, 18, 15] (5 et 9 ont disparu)
```
