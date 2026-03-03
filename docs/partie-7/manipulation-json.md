# Traitement des réponses JSON et statut d'erreur

Quand on consomme une API avec Fetch, le code `catch()` de votre promesse ne se déclenche **que** s'il y a eu un problème purement réseau (le serveur n'existe pas, l'utilisateur a coupé son Wi-Fi en plein milieu...).

Si le réseau est bon mais que le serveur vous répond "Je ne trouve pas tes identifiants" ou "Ta demande de films Pokemon n'existe pas", il vous renverra volontairement un code d'erreur réseau HTTP (comme la fameuse 404 : Not Found).
**Dans ce scénario très commun, `fetch()` ne rentrera pas dans un `catch()` ! Il considèrera que la création de la réponse a réussi !**

Il est de notre responsabilité de vérifier si la réponse était un "succès" coté backend.

## Utiliser `.ok` et `.status`

L'objet qui est réceptionné lors du premier retour de la promesse `fetch()` contient des attributs extrêmement utiles.

- `reponse.status` : Le code HTTP précis du serveur (ex : `200` = OK, `201` = CREATED, `404` = NOT FOUND, `500` = INTERNAL SERVER ERROR ou plantage serveur).
- `reponse.ok` : Un raccourci très simple. Il vaut `true` si le status était compris entre 200 et 299 (tout ce qui est de l'ordre du succès HTTP). Il vaut `false` dans tous les autres cas d'erreurs logiques ou d'effacement.

## Vérifier le succès avant de parser le JSON

```javascript
fetch('https://pokeapi.co/api/v2/pokemon/ce_pokemon_n_existe_pas')
  .then(function(reponse) {
    if (!reponse.ok) {
      // Si la reponse "n'est pas ok", on rentre ici !
      // On lance nous-même volontairement (throw) une erreur personnalisée,
      // Ce qui nous arrêtera et nous fera tomber directement dans le dernier bloc ".catch()" !
      throw new Error("L'API a répondu avec l'erreur HTTP " + reponse.status);
    }
    // Si on arrive ici, la reponse est ok, on peut la parser confortablement !
    return reponse.json();
  })
  .then(function(donnees) {
    // Si c'est un succès :
      console.log('Pokémon :', donnees);
  })
  .catch(function(erreurInterneOutReseau) {
    // Affiche par exemple : "Erreur: L'API a répondu avec l'erreur HTTP 404"
      console.error("Il y a eu un problème :", erreurInterneOutReseau.message);
  });
```

*Avec `async/await` le principe est le même : on vérifie `reponse.ok` après notre premier `await`, puis on `throw Error` si besoin ce qui est rattrapé par notre bloc global `try...catch`.*
