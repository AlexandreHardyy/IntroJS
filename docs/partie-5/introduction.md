# Introduction à la Gestion d'Erreurs

## Pourquoi gérer les erreurs ?

La gestion des erreurs est primordiale pour construire une application robuste.
En JavaScript, une erreur non interceptée provoque souvent le blocage ou l'arrêt brutal du programme. Cela peut également causer une mauvaise expérience utilisateur, comme une application vide sans message d'explication.

L'idée de base est qu'il vaut mieux afficher une erreur avec courtoisie que de laisser l'utilisateur face à un écran blanc.

## Le bloc `try...catch`

L'instruction `try...catch` est composée de deux blocs distincts. Le fonctionnement est le suivant :

1. Votre programme tente d'exécuter (**try**) le premier bloc.
2. Si une erreur survient pendant son exécution, il est immédiatement avorté. L'erreur est récupérée (**catch**) et vous pouvez agir en conséquence dans le second bloc.

**Syntaxe de base :**

```js
try {
  // Le code à exécuter
  console.log("On tente l'opération...");
  let resultat = calculComplexe();
  console.log("Ceci ne s'affichera pas si calculComplexe() déclenche une erreur.");
} catch (erreur) {
  // Le code à exécuter si une erreur s'est produite (le paramètre "erreur" est optionnel mais conseillé)
  console.log("Une erreur a été attrapée !");
  console.error("Détails : ", erreur);
}
```

> [!TIP]
> Lorsque vous utilisez des APIs ou un backend que vous ne maîtrisez pas, un bloc `try...catch` est le meilleur moyen d'éviter que votre application entière ne plante lors de la réception de données incorrectes (comme une JSON malformé, par exemple).

## Le bloc `finally` (optionnel)

Il est également possible d'ajouter un bloc `finally`. Le code de ce bloc s'exécutera **toujours**, qu'il y ait eu une erreur ou pas, à la fin des autres instructions `try...catch`.

```js
try {
  effectuerUnTravailDangereux();
} catch(erreur) {
  console.error("Erreur gérée : ", erreur);
} finally {
  console.log("L'opération est maintenant terminée (avec ou sans succès).");
  // Ce bloc est parfait pour fermer un fichier, arrêter un décompte, masquer un loader...
}
```
