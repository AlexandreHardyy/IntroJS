# Les Promises (Promesses)

## Qu'est-ce qu'une Promise ?

Une **Promise** (promesse) est un objet qui représente le **résultat futur** d'une opération asynchrone. C'est comme un ticket de commande au restaurant : vous avez la garantie qu'on vous apportera votre plat, mais il n'est pas encore prêt.

Une Promise peut être dans l'un de ces **3 états** :

| État | Description |
| :--- | :--- |
| **`pending`** (en attente) | L'opération est en cours, pas encore terminée |
| **`fulfilled`** (résolue) | L'opération a réussi ✅ |
| **`rejected`** (rejetée) | L'opération a échoué ❌ |

```
   pending (en attente)
       │
       ├──→ fulfilled (résolue)   → .then() est appelé
       │
       └──→ rejected (rejetée)    → .catch() est appelé
```

::: tip Important
Une fois qu'une Promise est **fulfilled** ou **rejected**, son état ne peut plus changer. On dit qu'elle est **settled** (établie).
:::

---

## Créer une Promise

### Syntaxe

```javascript
const maPromesse = new Promise((resolve, reject) => {
    // Opération asynchrone...
    // Si succès → appeler resolve(valeur)
    // Si erreur → appeler reject(erreur)
});
```

- **`resolve(valeur)`** : marque la Promise comme **réussie** et transmet une valeur
- **`reject(erreur)`** : marque la Promise comme **échouée** et transmet une erreur

### Exemple simple

```javascript
const promesse = new Promise((resolve, reject) => {
    const succes = true;

    setTimeout(() => {
        if (succes) {
            resolve("Opération réussie !");
        } else {
            reject("Quelque chose a mal tourné...");
        }
    }, 2000);
});
```

### Exemple concret : simuler un chargement

```javascript
function chargerDonnees(url) {
    return new Promise((resolve, reject) => {
        console.log(`Chargement de ${url}...`);

        setTimeout(() => {
            // Simuler une réponse
            if (url.includes("api")) {
                resolve({ id: 1, nom: "Jean", age: 25 });
            } else {
                reject(new Error(`URL invalide : ${url}`));
            }
        }, 1500);
    });
}
```

---

## Consommer une Promise avec `.then()`, `.catch()`, `.finally()`

### `.then()` — Quand la Promise est résolue

```javascript
chargerDonnees("https://api.example.com/user")
    .then((donnees) => {
        console.log("Données reçues :", donnees);
        // { id: 1, nom: "Jean", age: 25 }
    });
```

### `.catch()` — Quand la Promise est rejetée

```javascript
chargerDonnees("https://mauvaise-url.com")
    .then((donnees) => {
        console.log("Données :", donnees);
    })
    .catch((erreur) => {
        console.error("Erreur :", erreur.message);
        // "Erreur : URL invalide : https://mauvaise-url.com"
    });
```

### `.finally()` — Dans tous les cas

`.finally()` s'exécute **toujours**, que la Promise soit résolue ou rejetée. C'est idéal pour du nettoyage (cacher un spinner, réactiver un bouton…).

```javascript
const bouton = document.querySelector('#charger');

bouton.addEventListener('click', () => {
    bouton.disabled = true;
    bouton.textContent = "Chargement...";

    chargerDonnees("https://api.example.com/user")
        .then((donnees) => {
            console.log("Succès :", donnees);
        })
        .catch((erreur) => {
            console.error("Erreur :", erreur.message);
        })
        .finally(() => {
            // S'exécute toujours, succès ou erreur
            bouton.disabled = false;
            bouton.textContent = "Charger";
        });
});
```

::: tip Astuce
`.finally()` ne reçoit **aucun argument**. Il ne sait pas si la Promise a réussi ou échoué, c'est juste un endroit pour exécuter du code dans tous les cas.
:::

---

## Chaînage de Promises

`.then()` retourne **lui-même une Promise**, ce qui permet de les **chaîner** :

```javascript
chargerDonnees("https://api.example.com/user")
    .then((utilisateur) => {
        console.log("Utilisateur :", utilisateur.nom);
        // Retourner une valeur crée une nouvelle Promise résolue
        return utilisateur.id;
    })
    .then((id) => {
        console.log("ID récupéré :", id);
        // On peut retourner une autre Promise
        return chargerDonnees(`https://api.example.com/posts/${id}`);
    })
    .then((posts) => {
        console.log("Posts de l'utilisateur :", posts);
    })
    .catch((erreur) => {
        // Attrape TOUTE erreur de la chaîne
        console.error("Erreur dans la chaîne :", erreur.message);
    });
```

::: warning Le Callback Hell
Les Promises ont été inventées pour éviter le **"Callback Hell"** (pyramide infernale des callbacks imbriquées) :

```javascript
// ❌ Callback Hell — difficile à lire et maintenir
faireA((resultatA) => {
    faireB(resultatA, (resultatB) => {
        faireC(resultatB, (resultatC) => {
            faireD(resultatC, (resultatD) => {
                console.log("Ouf, enfin fini...");
            });
        });
    });
});

// ✅ Avec des Promises — beaucoup plus lisible
faireA()
    .then(resultatA => faireB(resultatA))
    .then(resultatB => faireC(resultatB))
    .then(resultatC => faireD(resultatC))
    .then(resultatD => console.log("Fini !"))
    .catch(erreur => console.error(erreur));
```
:::

---

## Méthodes statiques utiles

### `Promise.resolve()` et `Promise.reject()`

Créer immédiatement une Promise résolue ou rejetée :

```javascript
// Promise immédiatement résolue
const resolue = Promise.resolve(42);
resolue.then(valeur => console.log(valeur)); // 42

// Promise immédiatement rejetée
const rejetee = Promise.reject(new Error("Échec !"));
rejetee.catch(err => console.error(err.message)); // "Échec !"
```

### `Promise.all()` — Attendre que TOUTES soient terminées

Exécute plusieurs Promises **en parallèle** et attend que **toutes** réussissent.

```javascript
const promesse1 = chargerDonnees("https://api.example.com/users");
const promesse2 = chargerDonnees("https://api.example.com/posts");
const promesse3 = chargerDonnees("https://api.example.com/comments");

Promise.all([promesse1, promesse2, promesse3])
    .then(([users, posts, comments]) => {
        console.log("Users :", users);
        console.log("Posts :", posts);
        console.log("Comments :", comments);
    })
    .catch((erreur) => {
        // Si UNE SEULE échoue, tout échoue
        console.error("Au moins une requête a échoué :", erreur.message);
    });
```

::: warning Attention
Avec `Promise.all`, si **une seule** Promise est rejetée, le `.catch()` est déclenché et les autres résultats sont **ignorés**.
:::

### `Promise.allSettled()` — Attendre que TOUTES soient terminées (sans échouer)

Comme `Promise.all`, mais ne rejette **jamais**. Retourne le statut de chaque Promise :

```javascript
Promise.allSettled([
    Promise.resolve("OK"),
    Promise.reject(new Error("Erreur")),
    Promise.resolve("Aussi OK")
]).then((resultats) => {
    resultats.forEach((resultat) => {
        if (resultat.status === "fulfilled") {
            console.log("✅ Succès :", resultat.value);
        } else {
            console.log("❌ Échec :", resultat.reason.message);
        }
    });
});

// ✅ Succès : OK
// ❌ Échec : Erreur
// ✅ Succès : Aussi OK
```

### `Promise.race()` — La première qui termine gagne

Retourne le résultat de la **première** Promise qui se termine (résolue ou rejetée).

```javascript
const lente = new Promise(resolve => setTimeout(() => resolve("Lente"), 3000));
const rapide = new Promise(resolve => setTimeout(() => resolve("Rapide"), 1000));

Promise.race([lente, rapide])
    .then(resultat => console.log("Gagnant :", resultat));
// "Gagnant : Rapide"
```

#### Cas d'usage : timeout pour une requête

```javascript
function avecTimeout(promesse, ms) {
    const timeout = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Timeout !")), ms);
    });

    return Promise.race([promesse, timeout]);
}

// Si la requête prend plus de 5 secondes, on reçoit une erreur
avecTimeout(chargerDonnees("https://api.example.com/data"), 5000)
    .then(donnees => console.log(donnees))
    .catch(err => console.error(err.message)); // "Timeout !" si trop lent
```

---

## Résumé

| Méthode | Rôle |
| :--- | :--- |
| `.then(fn)` | Exécutée quand la Promise est **résolue** |
| `.catch(fn)` | Exécutée quand la Promise est **rejetée** |
| `.finally(fn)` | Exécutée dans **tous les cas** |
| `Promise.all([...])` | Attend que **toutes** réussissent |
| `Promise.allSettled([...])` | Attend que **toutes** se terminent (succès ou échec) |
| `Promise.race([...])` | Retourne la **première** qui se termine |
| `Promise.resolve(val)` | Crée une Promise immédiatement résolue |
| `Promise.reject(err)` | Crée une Promise immédiatement rejetée |

> Les Promises sont puissantes, mais le chaînage de `.then()` peut devenir verbeux. Dans la partie suivante, nous verrons **`async`/`await`**, une syntaxe qui rend le code asynchrone aussi lisible que du code synchrone.
