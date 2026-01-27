# Les Méthodes

Les méthodes sont simplement des fonctions qui appartiennent à une classe. Elles définissent le **comportement** des objets.

## Définition de méthodes

On définit les méthodes directement dans le corps de la classe, sans mot-clé `function`.

```javascript
class MathUtil {
  carre(x) {
    return x * x;
  }

  direBonjour() {
    console.log("Bonjour !");
  }
}
```

## Méthodes et `this`

Dans une méthode, `this` fait référence à **l'instance de l'objet** qui appelle la méthode. C'est fondamental pour accéder aux propriétés de l'objet.

```javascript
class Compteur {
  count = 0;

  incrementer() {
    this.count++; // Accède à la propriété count de l'instance
    console.log(this.count);
  }
}

const c1 = new Compteur();
c1.incrementer(); // 1
c1.incrementer(); // 2

const c2 = new Compteur();
c2.incrementer(); // 1 (c'est une instance séparée !)
```

## Méthodes Privées

Tout comme les propriétés, les méthodes peuvent être privées en utilisant le préfixe `#`. Elles ne servent alors qu'à la logique interne de la classe.

```javascript
class Moteur {
  demarrer() {
    this.#verifierCarburant();
    console.log("Moteur démarré !");
  }

  #verifierCarburant() {
    console.log("Vérification du niveau d'essence...");
    // Logique interne...
  }
}

const m = new Moteur();
m.demarrer(); 
// m.#verifierCarburant(); // Erreur ! Inaccessible de l'extérieur.
```

## Méthodes asynchrones

Les méthodes peuvent bien sûr être asynchrones (`async`).

```javascript
class API {
  async chargerDonnees() {
    const reponse = await fetch('https://api.exemple.com/data');
    const data = await reponse.json();
    return data;
  }
}
```
