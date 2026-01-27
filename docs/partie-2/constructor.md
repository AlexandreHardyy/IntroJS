# Le Constructor

Le **constructor** (constructeur) est une méthode spéciale au sein d'une classe. Elle est **automatiquement appelée** lorsqu'on crée une nouvelle instance de la classe avec `new`.

Son rôle principal est d'**initialiser** l'objet, c'est-à-dire de définir les valeurs initiales de ses propriétés.

## Syntaxe

```javascript
class Livre {
  constructor(titre, auteur) {
    this.titre = titre;
    this.auteur = auteur;
  }
}
```

- Il ne peut y avoir qu'**un seul** constructor par classe.
- Si vous ne définissez pas de constructor, JavaScript en ajoute un vide par défaut.

## Utilisation

C'est ici que l'on passe les arguments nécessaires à la création de l'objet.

```javascript
const monLivre = new Livre("Le Seigneur des Anneaux", "J.R.R. Tolkien");

console.log(monLivre.titre); // "Le Seigneur des Anneaux"
console.log(monLivre.auteur); // "J.R.R. Tolkien"
```

## Le mot-clé `this`

Dans le constructeur, `this` fait référence à **l'instance en cours de création**.
Ainsi, `this.titre = titre` signifie : "Prends la valeur de l'argument `titre` et stocke-la dans la propriété `titre` de cet objet précis".

## Valeurs par défaut

Vous pouvez utiliser les paramètres par défaut des fonctions dans le constructeur :

```javascript
class CompteBancaire {
  constructor(soldeInitial = 0) {
    this.solde = soldeInitial;
  }
}

const compte1 = new CompteBancaire(); // solde = 0
const compte2 = new CompteBancaire(100); // solde = 100
```
