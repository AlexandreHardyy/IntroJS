# Introduction à Fetch

Félicitations, vous maîtrisez (presque) le concept de l'asynchronisme en JavaScript !
La raison principale pour laquelle les développeurs JS s'intéressent aux promesses, c'est pour pouvoir envoyer et recevoir des données sur le réseau internet depuis d'autres serveurs. C'est l'un des moyens les plus puissants de rendre une application interactive (en affichant par des exemples des données depuis une base de données, des prix en temps réel, etc...).

L'outil principal fourni par le navigateur pour réaliser cela est la fonction native `fetch`.

## Comment fonctionne fetch ?

La fonction `fetch()` sert de passerelle pour effectuer des requêtes HTTP réseau depuis le code JavaScript.
Elle accepte en paramètre de base l'URL (l'adresse web) à laquelle le navigateur doit envoyer la requête.

Puisqu'on ne connaît pas à l'avance le temps que va mettre un serveur distant (qui peut se trouver à l'autre bout de la Terre) pour répondre, `fetch()` retourne immédiatement **une Promesse (`Promise`)**.

```js
const promesseDeReponse = fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
```

## Utiliser `.then()` avec Fetch

Tant qu'on a juste la promesse, on ne peut pas encore visualiser les données.
Il faut chainer un `.then()` (ou utiliser `await` comme vu au module précédent) pour patienter jusqu'à la réception de la réponse, puis un second pour convertir cette réponse.

```javascript
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  // Le premier .then() attend que le tout premier bit réseau de la réponse revienne (généralement on dit que le header est arrivé).
  .then(function(reponse) {
    // A ce stade, le corps de la réponse n'est pas encore téléchargé.
    // Il faut utiliser la méthode .json() qui renvoie une 2ème promesse
    // jusqu'à ce que le téléchargement entier du JSON soit fini.
    return reponse.json(); 
  })
  // Ce second .then() contient nos objets javascript définitifs.
  .then(function(donnees) {
      console.log('Nom du Pokemon :', donnees.name); // pikachu
      console.log('Taille :', donnees.height); // 4
  });
```

> [!WARNING]
> Oui, il faut bien deux promesses (ou deux `await`) pour lire le contenu retourné par `.fetch()`. Une première pour la connexion, et une seconde pour laisser le temps au navigateur de transformer le texte reçu en vrais objets ou tableaux JSON JavaScript utilisables.
