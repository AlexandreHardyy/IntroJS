# Les Timers : `setTimeout` et `setInterval`

Les **timers** sont les formes les plus simples d'asynchronisme en JavaScript. Ils permettent de **différer** ou de **répéter** l'exécution d'une fonction.

## `setTimeout` — Exécuter après un délai

`setTimeout` permet d'exécuter une fonction **une seule fois**, après un délai donné en millisecondes.

### Syntaxe

```javascript
const timerId = setTimeout(callback, delai);
```

- **`callback`** : la fonction à exécuter
- **`delai`** : le temps d'attente en millisecondes (1000 ms = 1 seconde)
- **Retour** : un identifiant numérique pour pouvoir annuler le timer

### Exemples

```javascript
// Afficher un message après 2 secondes
setTimeout(() => {
    console.log("2 secondes se sont écoulées !");
}, 2000);

// Avec une fonction nommée
function direBonjour() {
    console.log("Bonjour !");
}

setTimeout(direBonjour, 3000); // Bonjour après 3 secondes
```

### Passer des arguments à la callback

```javascript
function saluer(prenom, nom) {
    console.log(`Bonjour ${prenom} ${nom} !`);
}

// Les arguments supplémentaires sont passés à la callback
setTimeout(saluer, 1000, "Jean", "Dupont");
// Après 1 seconde : "Bonjour Jean Dupont !"
```

### Annuler un timer avec `clearTimeout`

```javascript
const timer = setTimeout(() => {
    console.log("Ce message ne s'affichera jamais");
}, 5000);

// Annuler avant que le timer ne se déclenche
clearTimeout(timer);
console.log("Timer annulé !");
```

### Cas d'usage courant : message temporaire

```javascript
function afficherNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.classList.add('notification');
    document.body.appendChild(notification);

    // La notification disparaît après 3 secondes
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

afficherNotification("Données sauvegardées !");
```

---

## `setInterval` — Exécuter à intervalles réguliers

`setInterval` exécute une fonction **de manière répétée**, à chaque intervalle de temps spécifié.

### Syntaxe

```javascript
const intervalId = setInterval(callback, intervalle);
```

### Exemples

```javascript
// Afficher l'heure toutes les secondes
setInterval(() => {
    const maintenant = new Date();
    console.log(maintenant.toLocaleTimeString());
}, 1000);
```

### Créer un compteur

```javascript
let compteur = 0;

const intervalId = setInterval(() => {
    compteur++;
    console.log(`Compteur : ${compteur}`);

    // Arrêter après 5 itérations
    if (compteur >= 5) {
        clearInterval(intervalId);
        console.log("Compteur terminé !");
    }
}, 1000);

// Affiche :
// "Compteur : 1"  (après 1s)
// "Compteur : 2"  (après 2s)
// "Compteur : 3"  (après 3s)
// "Compteur : 4"  (après 4s)
// "Compteur : 5"  (après 5s)
// "Compteur terminé !"
```

### Annuler un intervalle avec `clearInterval`

```javascript
const monIntervalle = setInterval(() => {
    console.log("Tic...");
}, 1000);

// Stopper après 5 secondes
setTimeout(() => {
    clearInterval(monIntervalle);
    console.log("Intervalle arrêté !");
}, 5000);
```

---

## Cas pratique : un compte à rebours

```javascript
function compteARebours(secondes) {
    let restant = secondes;

    // Afficher immédiatement
    console.log(`⏳ ${restant}...`);

    const intervalle = setInterval(() => {
        restant--;

        if (restant > 0) {
            console.log(`⏳ ${restant}...`);
        } else {
            console.log("🎉 Terminé !");
            clearInterval(intervalle); // Très important !
        }
    }, 1000);
}

compteARebours(5);
// ⏳ 5...
// ⏳ 4...
// ⏳ 3...
// ⏳ 2...
// ⏳ 1...
// 🎉 Terminé !
```

::: warning Attention : toujours nettoyer vos intervalles !
Un `setInterval` qui n'est jamais arrêté continue de tourner en arrière-plan, ce qui peut causer des **fuites de mémoire** et des **bugs subtils**. Pensez toujours à appeler `clearInterval` quand l'intervalle n'est plus nécessaire.
:::

---

## Cas pratique : un chronomètre dans le DOM

```html
<div id="chrono">00:00</div>
<button id="start">Démarrer</button>
<button id="stop">Arrêter</button>
<button id="reset">Réinitialiser</button>
```

```javascript
let secondes = 0;
let intervalId = null;
const affichage = document.querySelector('#chrono');

function mettreAJour() {
    const min = String(Math.floor(secondes / 60)).padStart(2, '0');
    const sec = String(secondes % 60).padStart(2, '0');
    affichage.textContent = `${min}:${sec}`;
}

document.querySelector('#start').addEventListener('click', () => {
    // Éviter de lancer plusieurs intervalles
    if (intervalId !== null) return;

    intervalId = setInterval(() => {
        secondes++;
        mettreAJour();
    }, 1000);
});

document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});

document.querySelector('#reset').addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    secondes = 0;
    mettreAJour();
});
```

---

## `setTimeout` vs `setInterval`

| | `setTimeout` | `setInterval` |
| :--- | :--- | :--- |
| **Exécution** | Une seule fois | Répétée |
| **Annulation** | `clearTimeout(id)` | `clearInterval(id)` |
| **Usage typique** | Délai, debounce, notification | Horloge, animation, polling |

---

## Simuler un `setInterval` avec `setTimeout` récursif

On peut reproduire le comportement de `setInterval` avec des `setTimeout` imbriqués. L'avantage est un meilleur contrôle du timing :

```javascript
// Avec setInterval : le prochain appel est planifié même si le précédent
// n'est pas encore terminé
setInterval(() => {
    // Traitement qui peut prendre du temps...
}, 1000);

// Avec setTimeout récursif : le prochain appel est planifié APRÈS
// la fin du traitement
function boucle() {
    // Traitement...
    console.log("Tic");

    setTimeout(boucle, 1000); // Planifie le prochain appel
}

boucle(); // Lancer la boucle
```

::: tip Bonne pratique
Utilisez `setTimeout` récursif quand votre callback contient des opérations asynchrones (requêtes réseau, etc.). Cela garantit que le prochain appel n'est planifié qu'**après** la fin du traitement précédent.
:::

---

## Résumé

| Fonction | Rôle | Annulation |
| :--- | :--- | :--- |
| `setTimeout(fn, ms)` | Exécuter `fn` après `ms` millisecondes | `clearTimeout(id)` |
| `setInterval(fn, ms)` | Exécuter `fn` toutes les `ms` millisecondes | `clearInterval(id)` |

> Les timers sont le premier outil pour gérer l'asynchronisme, mais pour des opérations plus complexes (requêtes réseau, enchaînement de tâches), nous allons découvrir les **Promises**.
