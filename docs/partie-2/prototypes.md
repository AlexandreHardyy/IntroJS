# Comprendre les Prototypes

Avant de plonger dans les classes, il est CRUCIAL de comprendre que JavaScript est un langage **basé sur les prototypes**. Les classes en JS ne sont souvent qu'enrobage syntaxique (syntactic sugar) autour de ce système de prototypes.

## Qu'est-ce qu'un prototype ?

En JavaScript, presque tout est un objet. Chaque objet possède un lien interne vers un autre objet appelé son **prototype**. Cet objet prototype possède lui-même un prototype, et ainsi de suite jusqu'à ce que l'on atteigne un objet dont le prototype est `null`. C'est ce qu'on appelle la **chaîne de prototypes**.

Lorsqu'on essaie d'accéder à une propriété ou une méthode sur un objet :
1. JS cherche d'abord sur l'objet lui-même.
2. S'il ne trouve pas, il cherche sur le prototype de l'objet.
3. S'il ne trouve toujours pas, il remonte la chaîne jusqu'au bout.

## Exemple concret sans classes

Imaginons un objet "animal" générique :

```javascript
const animal = {
  manger: true,
  marcher() {
    console.log("Je marche...");
  }
};

// Créons un objet "lapin" qui hérite de "animal"
const lapin = Object.create(animal);
lapin.sauter = true;

console.log(lapin.sauter); // true (trouvé sur lapin)
console.log(lapin.manger); // true (trouvé sur animal, le prototype)
lapin.marcher();           // "Je marche..." (trouvé sur animal)
```

Ici, `animal` est le prototype de `lapin`.

## `__proto__` vs `prototype`

C'est souvent une source de confusion.

- **`__proto__`** (ou `Object.getPrototypeOf(obj)`) : C'est la propriété qui existe sur **chaque instance** d'objet et qui pointe vers son prototype. C'est le lien réel dans la mémoire.
- **`prototype`** : C'est une propriété qui n'existe que sur les **fonctions constructeurs** (ou les classes). Elle définit le prototype qui sera assigné aux instances créées avec `new`.

```javascript
function Chien(nom) {
  this.nom = nom;
}

// On ajoute une méthode au prototype de la fonction
Chien.prototype.aboyer = function() {
  console.log("Wouf !");
};

const medor = new Chien("Médor");

// medor.__proto__ === Chien.prototype
medor.aboyer(); // Affiche "Wouf !" via la chaîne de prototypes
```

La syntaxe `class` masque cette complexité, mais c'est exactement ce qui se passe sous le capot.
