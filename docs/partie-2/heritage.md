# Héritage

L'héritage est un concept fondamental de la POO qui permet de créer une nouvelle classe basée sur une classe existante. La nouvelle classe (enfant/fille) hérite des propriétés et méthodes de la classe existante (parent/mère), mais peut aussi en ajouter de nouvelles ou modifier celles existantes.

## Le mot-clé `extends`

Pour hériter d'une classe, on utilise `extends`.

```javascript
class Animal {
  constructor(nom) {
    this.nom = nom;
  }

  parler() {
    console.log(`${this.nom} fait du bruit.`);
  }
}

class Chien extends Animal {
  aboyer() {
    console.log("Wouf !");
  }
}

const d = new Chien("Médor");
d.parler(); // "Médor fait du bruit." (hérité de Animal)
d.aboyer(); // "Wouf !" (propre à Chien)
```

## Le mot-clé `super`

Le mot-clé `super` est utilisé pour accéder au parent. Il a deux usages principaux :

### 1. Dans le constructor (`super()`)

Si vous définissez un constructor dans une classe enfant, vous **DEVEZ** appeler `super()` avant d'utiliser `this`. Cela permet d'appeler le constructeur du parent pour qu'il initialise ses propres propriétés.

```javascript
class Chat extends Animal {
  constructor(nom, race) {
    // this.race = race; // ERREUR ! Il faut appeler super() avant.
    
    super(nom); // Appel du constructeur de Animal
    this.race = race; // Maintenant on peut utiliser this
  }
}
```

### 2. Dans les méthodes (`super.method()`)

On peut utiliser `super` pour appeler une méthode du parent. C'est utile quand on veut **surcharger** (override) une méthode tout en gardant une partie du comportement original.

## Surcharge de méthodes (Override)

Une classe enfant peut redéfinir une méthode de son parent.

```javascript
class Lion extends Animal {
  parler() {
    super.parler(); // Appelle la version originale
    console.log("ET IL RUGIT !");
  }
}

const simba = new Lion("Simba");
simba.parler();
// Affiche :
// "Simba fait du bruit."
// "ET IL RUGIT !"
```

## Chaîne de prototypes et `instanceof`

L'héritage fonctionne via la chaîne de prototypes dont nous avons parlé au début.
`instanceof` vérifie si le prototype d'une classe apparaît dans la chaîne de prototypes de l'objet.

```javascript
console.log(d instanceof Chien);  // true
console.log(d instanceof Animal); // true (car Chien hérite de Animal)
console.log(d instanceof Object); // true (tout hérite de Object)
```
