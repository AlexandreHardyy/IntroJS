# Les Propriétés (Champs)

Les propriétés représentent l'état d'un objet. Jusqu'à récemment, on les définissait uniquement dans le constructeur. Mais les standards modernes (ES2022) nous permettent de les définir directement dans le corps de la classe.

## Propriétés Publiques

On peut déclarer des propriétés directement à la racine de la classe. C'est plus lisible et évite d'encombrer le constructeur si l'initialisation ne dépend pas d'arguments.

```javascript
class Joueur {
  // Champ public avec valeur par défaut
  score = 0;
  vies = 3;

  constructor(nom) {
    this.nom = nom;
  }
}

const p1 = new Joueur("Mario");
console.log(p1.score); // 0
```

## Propriétés Privées (#)

L'un des piliers de la POO est l'**encapsulation** : cacher certains détails d'implémentation pour protéger l'intégrité de l'objet.
En JavaScript, on utilise le préfixe **`#`** pour rendre une propriété privée. Elle ne sera accessible QUE depuis l'intérieur de la classe.

```javascript
class Compte {
  #codeSecret; // Déclaration obligatoire du champ privé

  constructor(code) {
    this.#codeSecret = code;
  }

  verifierCode(essai) {
    return essai === this.#codeSecret;
  }
}

const monCompte = new Compte("1234");
// console.log(monCompte.#codeSecret); // ERREUR ! SyntaxError
console.log(monCompte.verifierCode("1234")); // true
```

C'est une fonctionnalité très puissante pour sécuriser votre code et éviter les modifications accidentelles de l'extérieur.

## Accesseurs : Getters et Setters

Les `get` et `set` permettent de créer des pseudo-propriétés qui sont en fait des fonctions. Cela permet de contrôler l'accès et la modification d'une propriété (souvent privée ou interne).

### Getter (Accès en lecture)

```javascript
class Cercle {
  constructor(rayon) {
    this.rayon = rayon;
  }

  // "diametre" se comporte comme une propriété, mais est calculé à la volée
  get diametre() {
    return this.rayon * 2;
  }
}

const c = new Cercle(5);
console.log(c.diametre); // 10 (Notez l'absence de parenthèses ! On n'écrit pas c.diametre())
```

### Setter (Accès en écriture)

Le setter permet d'exécuter de la logique (validation, transformation) lors de l'assignation d'une valeur.

```javascript
class Utilisateur {
  #age;

  constructor(age) {
    this.#age = age;
  }

  get age() {
    return this.#age;
  }

  set age(valeur) {
    if (valeur < 0) {
      console.error("L'âge ne peut pas être négatif !");
      return;
    }
    this.#age = valeur;
  }
}

const u = new Utilisateur(25);
u.age = -5; // Affiche l'erreur "L'âge ne peut pas être négatif !"
console.log(u.age); // 25 (n'a pas changé)
u.age = 30;
console.log(u.age); // 30
```
