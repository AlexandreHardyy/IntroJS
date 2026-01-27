# Les Classes

Introduites avec ECMAScript 2015 (ES6), les **Classes** offrent une syntaxe beaucoup plus claire et familière pour créer des objets et gérer l'héritage, par rapport à l'ancienne méthode basée sur les fonctions constructeurs.

## Déclaration d'une classe

On utilise le mot-clé `class` suivi du nom de la classe (par convention en PascalCase, c'est-à-dire avec une majuscule au début).

```javascript
class Utilisateur {
  // Corps de la classe
}
```

## Instanciation

Pour créer un objet à partir d'une classe (on dit "instancier" la classe), on utilise le mot-clé **`new`**.

```javascript
const user1 = new Utilisateur();
const user2 = new Utilisateur();

console.log(typeof Utilisateur); // "function" - Rappelez-vous, c'est du sucre syntaxique !
console.log(user1 instanceof Utilisateur); // true
```

## Structure d'une classe

Une classe peut contenir :
- Un **Constructor** (pour initialiser l'objet)
- Des **Propriétés** (variables attachées à l'objet)
- Des **Méthodes** (fonctions attachées à l'objet)
- Des blocs statiques ou privés (que nous verrons plus tard)

Exemple complet simple :

```javascript
class Voiture {
  demarrer() {
    console.log("Vroum !");
  }
}

const maVoiture = new Voiture();
maVoiture.demarrer(); // "Vroum !"
```

Dans les chapitres suivants, nous détaillerons chaque partie de la classe : le constructeur, les propriétés et les méthodes.
