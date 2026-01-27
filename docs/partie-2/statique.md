# Membres Statiques

Le mot-clé `static` définit une méthode ou une propriété "de classe", plutôt que d'instance.
Cela signifie qu'on y accède directement **sur la classe elle-même**, et non sur un objet créé avec `new`.

C'est très utile pour créer des fonctions utilitaires, des constructeurs alternatifs, ou des constantes.

## Méthodes Statiques

```javascript
class MathHelper {
  static carre(x) {
    return x * x;
  }
}

// On n'a pas besoin de faire "new MathHelper()"
console.log(MathHelper.carre(5)); // 25
```

Si vous essayez d'appeler `carre` sur une instance, cela échouera :

```javascript
const m = new MathHelper();
// m.carre(5); // TypeError
```

Un exemple natif très connu est `Math` (bien que ce soit un objet et non une classe) ou `Array.from()`, `Date.now()`.

## Propriétés Statiques

On peut aussi stocker des données au niveau de la classe.

```javascript
class Configuration {
  static API_URL = "https://api.mon-site.com";
  static TIMEOUT = 5000;
}

console.log(Configuration.API_URL);
```

## `this` dans un contexte statique

Dans une méthode statique, `this` fait référence **à la classe elle-même**, pas à une instance (puisqu'il n'y en a pas forcément !).

```javascript
class Article {
  static count = 0;

  constructor() {
    Article.incrementer();
  }

  static incrementer() {
    this.count++;
    console.log(`Nombre d'articles : ${this.count}`);
  }
}

new Article(); // Nombre d'articles : 1
new Article(); // Nombre d'articles : 2
```

## Cas d'utilisation courants

1.  **Méthodes utilitaires (Helpers)** : Formatage de dates, calculs mathématiques.
2.  **Factory Methods** : Méthodes qui créent et retournent des instances pré-configurées.

```javascript
class User {
  constructor(role) {
    this.role = role;
  }

  static createAdmin() {
    return new User("admin");
  }

  static createGuest() {
    return new User("guest");
  }
}

const admin = User.createAdmin();
```
