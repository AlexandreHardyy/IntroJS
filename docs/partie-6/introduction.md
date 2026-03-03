# Introduction à l'asynchronisme

## Pourquoi l'asynchronisme ?

JavaScript est un langage **mono-thread** : il ne peut exécuter qu'**une seule instruction à la fois**. Imaginez un restaurant avec un seul serveur. Si ce serveur doit attendre que chaque plat soit prêt avant de prendre la commande suivante, le service serait extrêmement lent.

C'est exactement le problème auquel JavaScript est confronté. Certaines opérations prennent du temps :
- **Requêtes réseau** (appeler une API, charger une image…)
- **Lecture/écriture de fichiers**
- **Timers** (attendre X secondes)
- **Interactions utilisateur** (attendre un clic)

Si JavaScript attendait la fin de chaque opération avant de passer à la suite, la page serait **complètement figée** pendant ce temps. L'utilisateur ne pourrait ni cliquer, ni scroller, ni interagir.

> L'asynchronisme permet à JavaScript de **lancer** une opération longue, puis de **continuer** à exécuter le reste du code, et de **revenir** traiter le résultat quand il est prêt.

## Synchrone vs Asynchrone

### Code synchrone (bloquant)

Chaque ligne attend la fin de la précédente avant de s'exécuter :

```javascript
console.log("Étape 1");
console.log("Étape 2"); // Attend que l'étape 1 soit finie
console.log("Étape 3"); // Attend que l'étape 2 soit finie

// Résultat :
// "Étape 1"
// "Étape 2"
// "Étape 3"
```

### Code asynchrone (non-bloquant)

Certaines opérations sont lancées et le code continue sans attendre :

```javascript
console.log("Étape 1");

setTimeout(() => {
    console.log("Étape 2 (après 2 secondes)");
}, 2000);

console.log("Étape 3");

// Résultat :
// "Étape 1"
// "Étape 3"
// "Étape 2 (après 2 secondes)"  ← arrive en dernier !
```

::: tip Observation clé
L'étape 3 s'affiche **avant** l'étape 2 ! JavaScript n'a pas attendu la fin du `setTimeout` pour continuer.
:::

---

## L'Event Loop (Boucle d'événements)

L'**Event Loop** est le mécanisme qui permet à JavaScript de gérer l'asynchronisme malgré son caractère mono-thread. C'est le **chef d'orchestre** de l'exécution.

### Les composants

Pour comprendre l'Event Loop, il faut connaître 3 espaces :

| Composant | Rôle |
| :--- | :--- |
| **Call Stack** (Pile d'appels) | La pile où JavaScript exécute le code, une fonction à la fois |
| **Web APIs** | Les fonctionnalités du navigateur (timers, requêtes HTTP, événements DOM…) |
| **Callback Queue** (File d'attente) | La file où les callbacks attendent d'être exécutées |

### Comment ça fonctionne ?

```javascript
console.log("Début");

setTimeout(() => {
    console.log("Timer terminé");
}, 0);

console.log("Fin");
```

Voici ce qui se passe étape par étape :

1. `console.log("Début")` → ajouté à la **Call Stack** → exécuté → affiché → retiré
2. `setTimeout(callback, 0)` → ajouté à la **Call Stack** → le timer est transféré aux **Web APIs** → retiré de la Stack
3. `console.log("Fin")` → ajouté à la **Call Stack** → exécuté → affiché → retiré
4. Le timer (0ms) est terminé dans les **Web APIs** → la callback est placée dans la **Callback Queue**
5. L'**Event Loop** vérifie : la Call Stack est vide ? ✅ → elle transfère la callback dans la Call Stack
6. `console.log("Timer terminé")` → exécuté → affiché

```
Résultat :
"Début"
"Fin"
"Timer terminé"   ← même avec un délai de 0ms !
```

::: warning Important
Même avec `setTimeout(fn, 0)`, la callback ne s'exécute **jamais** immédiatement. Elle doit toujours passer par la Callback Queue et attendre que la Call Stack soit vide.
:::

### Schéma de l'Event Loop

```
┌──────────────────────┐
│      Call Stack       │ ← Exécution du code JS
│  (une tâche à la     │
│       fois)           │
└──────────┬───────────┘
           │
           │   L'Event Loop transfère les
           │   callbacks quand la Stack est vide
           │
┌──────────┴───────────┐       ┌─────────────────┐
│   Callback Queue     │◄──────│    Web APIs      │
│ (file d'attente)     │       │  (setTimeout,    │
│                      │       │   fetch, DOM...) │
└──────────────────────┘       └─────────────────┘
```

### La Microtask Queue

Il existe en réalité **deux files d'attente** :

| File | Priorité | Exemples |
| :--- | :--- | :--- |
| **Microtask Queue** | 🔴 Haute (vidée en premier) | Callbacks de `Promise` (`.then`, `.catch`, `.finally`) |
| **Callback Queue** (Macrotask) | 🟡 Basse | `setTimeout`, `setInterval`, événements DOM |

```javascript
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");

// Résultat :
// "1"
// "4"
// "3"  ← Promise (microtask) passe AVANT
// "2"  ← setTimeout (macrotask) passe APRÈS
```

::: tip Règle d'or
Les **microtasks** (Promises) sont **toujours** traitées avant les **macrotasks** (`setTimeout`, `setInterval`), même si le timer a un délai de 0.
:::

---

## Exemple concret : pourquoi c'est crucial

Imaginons un bouton qui charge des données depuis une API :

```javascript
// ❌ Si JavaScript était bloquant (ce n'est pas le cas, mais imaginons)
const bouton = document.querySelector('#charger');

bouton.addEventListener('click', () => {
    // Si cette requête prenait 3 secondes de manière synchrone...
    const donnees = fetchSynchrone('https://api.example.com/data'); // ← BLOQUÉ 3 sec
    
    // Pendant ces 3 secondes :
    // - L'utilisateur ne peut pas cliquer
    // - La page ne répond plus
    // - Les animations sont figées
    // - Le navigateur peut afficher "Page non responsive"
    
    afficher(donnees);
});
```

```javascript
// ✅ Grâce à l'asynchronisme
const bouton = document.querySelector('#charger');

bouton.addEventListener('click', () => {
    // La requête est lancée de manière asynchrone
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(donnees => {
            // Ce code s'exécute QUAND les données arrivent
            afficher(donnees);
        });
    
    // Le code continue immédiatement
    // La page reste interactive !
    console.log('Chargement en cours...');
});
```

---

## Résumé

| Concept | Description |
| :--- | :--- |
| **Mono-thread** | JavaScript exécute une tâche à la fois |
| **Synchrone** | Chaque ligne attend la fin de la précédente |
| **Asynchrone** | Lance une opération et continue sans attendre |
| **Call Stack** | Pile d'exécution du code JS |
| **Web APIs** | Fonctionnalités du navigateur (timers, réseau…) |
| **Callback Queue** | File d'attente des callbacks (macrotasks) |
| **Microtask Queue** | File prioritaire (Promises) |
| **Event Loop** | Transfère les callbacks de la queue vers la stack |

> Dans la suite de ce cours, nous verrons les outils concrets pour écrire du code asynchrone : les **timers**, les **Promises**, et le couple **async/await**.
