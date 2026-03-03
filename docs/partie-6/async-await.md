# `async` / `await`

## Le problème avec `.then()`

Les Promises avec `.then()` sont bien plus lisibles que les callbacks imbriquées, mais le chaînage peut rester **verbeux** et difficile à suivre pour des opérations complexes :

```javascript
// Chaînage de .then() — fonctionnel mais verbeux
function afficherProfil(userId) {
    chargerUtilisateur(userId)
        .then(utilisateur => {
            return chargerPosts(utilisateur.id);
        })
        .then(posts => {
            return chargerCommentaires(posts[0].id);
        })
        .then(commentaires => {
            console.log("Commentaires :", commentaires);
        })
        .catch(erreur => {
            console.error("Erreur :", erreur.message);
        });
}
```

> Ne serait-il pas plus simple d'écrire du code asynchrone **comme s'il était synchrone** ?

---

## Les mots-clés `async` et `await`

### `async` — Déclarer une fonction asynchrone

Le mot-clé `async` placé devant une fonction **la transforme en fonction asynchrone**. Elle retournera **toujours** une Promise.

```javascript
// Fonction classique
function saluer() {
    return "Bonjour !";
}

console.log(saluer()); // "Bonjour !"

// Fonction async — retourne automatiquement une Promise
async function saluerAsync() {
    return "Bonjour !";
}

console.log(saluerAsync()); // Promise { "Bonjour !" }

// Il faut utiliser .then() pour récupérer la valeur
saluerAsync().then(message => console.log(message)); // "Bonjour !"
```

### `await` — Attendre le résultat d'une Promise

Le mot-clé `await` **met en pause** l'exécution de la fonction `async` jusqu'à ce que la Promise soit résolue, et retourne directement la **valeur** (pas la Promise).

```javascript
async function afficherMessage() {
    const message = await saluerAsync(); // Attend la résolution
    console.log(message); // "Bonjour !"
}

afficherMessage();
```

::: warning Règle importante
`await` ne peut être utilisé qu'**à l'intérieur** d'une fonction déclarée avec `async`. L'utiliser en dehors provoquera une erreur de syntaxe.

```javascript
// ❌ Erreur de syntaxe
const resultat = await maPromesse;

// ✅ Correct
async function maFonction() {
    const resultat = await maPromesse;
}
```
:::

---

## Réécrire du `.then()` en `async`/`await`

Reprenons l'exemple du début. Voici la même logique avec `async`/`await` :

```javascript
// ❌ Avec .then() — verbeux
function afficherProfil(userId) {
    chargerUtilisateur(userId)
        .then(utilisateur => chargerPosts(utilisateur.id))
        .then(posts => chargerCommentaires(posts[0].id))
        .then(commentaires => console.log("Commentaires :", commentaires))
        .catch(erreur => console.error("Erreur :", erreur.message));
}

// ✅ Avec async/await — clair et lisible
async function afficherProfil(userId) {
    try {
        const utilisateur = await chargerUtilisateur(userId);
        const posts = await chargerPosts(utilisateur.id);
        const commentaires = await chargerCommentaires(posts[0].id);
        console.log("Commentaires :", commentaires);
    } catch (erreur) {
        console.error("Erreur :", erreur.message);
    }
}
```

Le code avec `async`/`await` se lit de haut en bas, exactement comme du code synchrone !

---

## Gestion des erreurs avec `try`/`catch`

Avec `.then()`, on utilise `.catch()`. Avec `async`/`await`, on utilise le classique **`try`/`catch`** de JavaScript :

```javascript
async function chargerDonnees() {
    try {
        const reponse = await fetch("https://api.example.com/data");

        // Vérifier si la réponse est OK
        if (!reponse.ok) {
            throw new Error(`Erreur HTTP : ${reponse.status}`);
        }

        const donnees = await reponse.json();
        console.log("Données :", donnees);
        return donnees;

    } catch (erreur) {
        console.error("Impossible de charger les données :", erreur.message);
    } finally {
        console.log("Opération terminée (succès ou échec)");
    }
}
```

::: tip Le bloc `finally`
Comme avec les Promises, le bloc `finally` s'exécute **toujours**, que l'opération ait réussi ou échoué. Parfait pour cacher un spinner de chargement ou réactiver un bouton.
:::

---

## Exemple concret avec `fetch`

`fetch` est la méthode native du navigateur pour faire des requêtes HTTP. Elle retourne une **Promise**.

### Récupérer des données depuis une API

```javascript
async function recupererUtilisateurs() {
    try {
        const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
        const utilisateurs = await reponse.json();

        utilisateurs.forEach(user => {
            console.log(`${user.name} — ${user.email}`);
        });

    } catch (erreur) {
        console.error("Erreur lors du chargement :", erreur.message);
    }
}

recupererUtilisateurs();
```

### Afficher les données dans le DOM

```javascript
async function afficherUtilisateurs() {
    const liste = document.querySelector('#liste-users');
    liste.innerHTML = "<li>Chargement...</li>";

    try {
        const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
        const utilisateurs = await reponse.json();

        liste.innerHTML = ""; // Vider le message de chargement

        utilisateurs.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.name} (${user.email})`;
            liste.appendChild(li);
        });

    } catch (erreur) {
        liste.innerHTML = `<li class="erreur">Erreur : ${erreur.message}</li>`;
    }
}

afficherUtilisateurs();
```

---

## Exécuter des Promises en parallèle avec `await`

### Piège : exécution séquentielle inutile

```javascript
// ❌ Séquentiel — chaque await attend le précédent
async function chargerTout() {
    const users = await fetch("https://api.example.com/users");     // 1 seconde
    const posts = await fetch("https://api.example.com/posts");     // + 1 seconde
    const comments = await fetch("https://api.example.com/comments"); // + 1 seconde
    // Total : ~3 secondes 😰
}
```

### Solution : `Promise.all` avec `await`

```javascript
// ✅ Parallèle — toutes les requêtes partent en même temps
async function chargerTout() {
    const [usersRes, postsRes, commentsRes] = await Promise.all([
        fetch("https://api.example.com/users"),
        fetch("https://api.example.com/posts"),
        fetch("https://api.example.com/comments"),
    ]);

    const users = await usersRes.json();
    const posts = await postsRes.json();
    const comments = await commentsRes.json();
    // Total : ~1 seconde 🚀
}
```

::: tip Quand utiliser quoi ?
- **Séquentiel** (`await` un par un) : quand chaque opération **dépend** du résultat de la précédente
- **Parallèle** (`Promise.all`) : quand les opérations sont **indépendantes** les unes des autres
:::

---

## `async`/`await` avec les fonctions fléchées

`async` fonctionne aussi avec les **fonctions fléchées** et les **méthodes de classe** :

```javascript
// Fonction fléchée async
const chargerDonnees = async () => {
    const reponse = await fetch("https://api.example.com/data");
    return reponse.json();
};

// Méthode de classe async
class ApiService {
    async recupererUtilisateurs() {
        const reponse = await fetch("https://api.example.com/users");
        return reponse.json();
    }
}

// Callback async dans un event listener
document.querySelector('#btn').addEventListener('click', async () => {
    const donnees = await chargerDonnees();
    console.log(donnees);
});
```

---

## Les boucles avec `await`

### `for...of` avec `await`

```javascript
const urls = [
    "https://api.example.com/user/1",
    "https://api.example.com/user/2",
    "https://api.example.com/user/3",
];

// ✅ Les requêtes s'exécutent une par une (séquentiel)
async function chargerSequentiel() {
    for (const url of urls) {
        const reponse = await fetch(url);
        const data = await reponse.json();
        console.log(data);
    }
}
```

::: warning `forEach` ne fonctionne PAS avec `await`
```javascript
// ❌ NE FONCTIONNE PAS comme attendu
urls.forEach(async (url) => {
    const reponse = await fetch(url); // Les requêtes partent toutes en même temps
    console.log(await reponse.json());
});
```
`forEach` ne comprend pas les fonctions `async`. Utilisez `for...of` à la place.
:::

---

## Résumé

| Concept | Description |
| :--- | :--- |
| `async function` | Déclare une fonction qui retourne une Promise |
| `await` | Met en pause la fonction et attend la résolution de la Promise |
| `try/catch` | Gestion des erreurs (remplace `.catch()`) |
| `finally` | Code exécuté dans tous les cas |
| `Promise.all` + `await` | Exécuter des opérations en parallèle |
| `for...of` + `await` | Boucler de manière séquentielle sur des Promises |

| `.then()` / `.catch()` | `async` / `await` |
| :--- | :--- |
| `promesse.then(val => ...)` | `const val = await promesse` |
| `.catch(err => ...)` | `try { ... } catch (err) { ... }` |
| `.finally(() => ...)` | `finally { ... }` |
| Chaînage horizontal | Lecture verticale, comme du code synchrone |

> `async`/`await` est la manière **moderne et recommandée** d'écrire du code asynchrone en JavaScript. C'est la même chose que les Promises, mais avec une syntaxe bien plus lisible.
