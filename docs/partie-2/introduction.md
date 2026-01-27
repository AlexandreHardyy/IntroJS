# Introduction à la POO en JavaScript

La **Programmation Orientée Objet (POO)** est un paradigme de programmation qui repose sur le concept d'**objets**, qui peuvent contenir des données (sous forme de champs, souvent appelés attributs ou propriétés) et du code (sous forme de procédures, souvent appelées méthodes).

En JavaScript, la POO est un peu particulière car c'est un langage _basé sur les prototypes_, bien que la syntaxe moderne des **Classes** introduite avec ES6 (ECMAScript 2015) nous permette d'écrire du code orienté objet d'une manière très similaire à d'autres langages comme Java ou C#.

## Pourquoi la POO ?

La POO permet de mieux organiser son code, surtout lorsque l'application grandit. Elle favorise :

- **L'encapsulation** : Regrouper les données et les méthodes qui les manipulent au même endroit.
- **La réutilisabilité** : Créer des modèles (Classes) pour instancier plusieurs objets similaires.
- **La maintenance** : Un code plus modulaire est plus facile à lire et à modifier.

## Objet Littéral vs Classe

Jusqu'à présent, vous avez probablement utilisé des objets littéraux :

```javascript
const utilisateur = {
  nom: "Alice",
  age: 25,
  direBonjour() {
    console.log("Bonjour !");
  }
};
```

C'est très utile pour des structures uniques. Mais si vous devez créer 100 utilisateurs, copier-coller ce code n'est pas viable. C'est là qu'interviennent les **Classes** et les **Constructeurs**, qui agissent comme des "moules" ou des "plans" pour fabriquer des objets.

Dans ce chapitre, nous allons explorer comment JavaScript gère la POO, depuis ses fondements (les prototypes) jusqu'à la syntaxe moderne des classes.
