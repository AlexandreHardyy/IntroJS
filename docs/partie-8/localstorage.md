# Le Web Storage : LocalStorage et SessionStorage

Le navigateur n'est pas qu'un outil pour afficher du HTML. Pour nous aider dans le développement Front-End, il met à notre disposition plusieurs fonctionnalités ("APIs Web"). 

Parmi les plus utiles, il existe le Web Storage API. Il s'agit d'une petite base de données incluse directement dans l'ordinateur du client.

## Différence entre LocalStorage et SessionStorage

Le système de persistance de Javascript propose deux moyens de sauvegarde, qui marchent de manière parfaitement identique au niveau du code :

- **`localStorage`** : Les données enregistrées ici n'ont aucune date d'expiration. Elles resteront figées sur l'ordinateur de l'utilisateur même si ce dernier ferme Google Chrome et l'ouvre à nouveau après 6 mois ou éteint son ordinateur portable. Pratique pour sauver la couleur d'un "Thème Sombre" par exemple ou se rappeler d'un panier d'e-commerce incomplet.
- **`sessionStorage`** : Les données ne durent que le temps de la "session" (tant que l'onglet de cette page est ouverte). Si on rafraîchit la page (F5), la session reste. Mais si on ferme l'onglet, toutes ces données sont définitivement supprimées de la machine du client.

> [!WARNING]
> La limite de taille est souvent fixée à environ 5 à 10 mégaoctets de texte maximum selon le navigateur pour un nom de domaine. On ne sauvegarde jamais de vidéos ou de fichiers images lourds dans le LocalStorage ! C'est uniquement de la "petite" donnée texte !

## Enregistrer et Supprimer

L'objet global `localStorage` (et de même pour le `sessionStorage`) permet d'écrire des paires de clés et valeurs. C'est très similaire aux objets JS classiques {}.

**Écrire une valeur (`setItem`) :**
```javascript
// La clé s'appelle "pseudo" et sa valeur insérée ou modifiée est "Alex".
localStorage.setItem('pseudo', 'Alex');

// Je crée une deuxième donnée différente mémorisée sous le dictionnaire "theme"
localStorage.setItem('theme', 'noir');
```

**Récupérer une valeur (`getItem`) :**
```javascript
let themeChoisi = localStorage.getItem('theme');
console.log(themeChoisi); // affiche "noir"

// Si la clé n'existait jamais, "valeurManquante" deviendra "null".
let valeurManquante = localStorage.getItem('donneeFausse'); 
```

**Supprimer une valeur (`removeItem` et `clear`)** :
```javascript
// Je supprime spécifiquement la clé cible et sa valeur (mon nom)
localStorage.removeItem('pseudo');

// Je vide et brûle TOUT le local storage présent pour mon site web.
localStorage.clear();
```

## Sauvegarder des éléments complexes JSON

Le gros inconvénient du Web Storage du navigateur, c'est **qu'il n'est capable que de comprendre du texte (`STRING`)**.
Impossible d'afficher et sauvegarder nativement un objet javascript du type `{ utilisateur: 'Alex' }` ou un tableau JS du type `['Pomme', 'Poire']`.

Si vous le faites, le localStorage les remplacera par le texte par défaut : `"[object Object]"`. Ce n'est pas ce que l'on veut !

**La technique est donc toujours d'utiliser les parseurs JSON :**

1. Traduire notre bel Objet en chaine de caractère JSON juste avant l'insertion dans le localStorage.
2. Traduire en sens inverse la chaine de caractère JSON récupérée depuis le localStorage en un bel Objet avec lequel on va réellement travailler.

```javascript
const mesFruits = ['Pomme', 'Fraise', 'Banane'];

// 1. Sauvegarde impossible tel quel !
// On va donc utiliser JSON.stringify() pour créer : "['Pomme', 'Fraise', 'Banane']" (qui n'est plus qu'un grand texte String innocent pour le navigateur).
localStorage.setItem('sauvegarde_fruits', JSON.stringify(mesFruits));

// ---- Le navigateur est fermé, l'ordinateur est redémarré puis rouvert ---- //

// 2. Je veux récupérer ma sauvegarde pour travailler
const recupDepuisMemoire = localStorage.getItem('sauvegarde_fruits');

// C'est encore un banal morceau de texte String ici que je ne peux pas manipuler :
console.log(typeof recupDepuisMemoire); // string

// Je reconvertis ça en un grand Array JS natif grâce à JSON.parse() !
const tableauJS = JSON.parse(recupDepuisMemoire);

// Tout fonctionne, je peux à nouveau utiliser les méthodes de tableau car c'en est de nouveau un !
console.log(tableauJS[0]); // Apple
tableauJS.push('Tomate');
```
