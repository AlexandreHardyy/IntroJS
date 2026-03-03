# Lancer des erreurs

Il y a des cas de figure où votre propre programme ne trouvera pas d'erreur, mais vous ressentirez tout de même le besoin d'en générer une volontairement pour éviter que des données invalides ne se propagent ou des bugs plus profonds n'apparaissent. 
On appelle cela **"lancer" une erreur** (*Throwing an Error*).

## Le mot-clé `throw`

L'instruction `throw` permet de générer une exception personnalisée qu'un bloc `try...catch` plus haut dans l'application pourra rattraper. On "lève" ou on "jette" cette erreur.

```js
function diviser(a, b) {
  if (b === 0) {
    // Si la condition n'est pas remplie, on lève explicitement une erreur.
    throw new Error("Impossible de diviser par zéro.");
  }
  return a / b;
}
```

**Que se passe-t-il lorsque ce code s'exécute ?**

```js
try {
  console.log(diviser(10, 2)); // Affiche 5
  console.log(diviser(10, 0)); // Une erreur est levée ici...
  console.log(diviser(10, 5)); // ...Cette ligne ne s'exécutera jamais.
} catch (e) {
  console.log("Il y a eu un problème :", e.message); 
  // e.message contient "Impossible de diviser par zéro."
}
```

## Objets d'Erreurs Communs

JavaScript possède plusieurs types d'erreurs intégrés :
- `Error` : L'erreur standard et globale.
- `SyntaxError` : Quand le code n'est pas grammaticalement valide dans le langage.
- `ReferenceError` : Quand on tente d'accéder à une variable qui n'existe pas.
- `TypeError` : Quand une valeur n'est pas du type espéré (ex: essayer d'exécuter un nombre qui n'est pas une fonction : `let num = 5; num();`).

## Pourquoi personnaliser les `throw` ?

Lancer vos propres erreurs vous permet d'ajouter de la documentation précieuse sur les dysfonctionnements internes à votre application. Si un autre développeur utilise vos fonctions ou vos classes, cela l'aide à comprendre tout de suite s'il s'en sert mal, plutôt que d'attendre un bug incompréhensible quelques heures plus tard.

```js
class Utilisateur {
  constructor(nom, age) {
    if (age < 0) {
      throw new TypeError("L'âge de l'utilisateur doit être positif.");
    }
    this.nom = nom;
    this.age = age;
  }
}
```
