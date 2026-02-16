# Les événements

Les événements sont le mécanisme fondamental pour rendre une page web **interactive**. Chaque action de l'utilisateur (clic, frappe clavier, survol, soumission de formulaire…) déclenche un événement que JavaScript peut intercepter et traiter.

## Qu'est-ce qu'un événement ?

Un événement est un **signal** émis par le navigateur pour indiquer que quelque chose s'est passé. Par exemple :
- L'utilisateur a cliqué sur un bouton → événement `click`
- L'utilisateur a appuyé sur une touche → événement `keydown`
- La page a fini de se charger → événement `load`
- Un formulaire est soumis → événement `submit`

## Ajouter un écouteur d'événement : `addEventListener`

C'est LA méthode standard pour réagir aux événements.

```javascript
const bouton = document.querySelector('#mon-bouton');

bouton.addEventListener('click', function() {
    console.log('Le bouton a été cliqué !');
});
```

### Syntaxe

```javascript
element.addEventListener(typeEvenement, fonctionCallback, options);
```

- **`typeEvenement`** : une chaîne représentant l'événement (`'click'`, `'input'`, `'submit'`…)
- **`fonctionCallback`** : la fonction exécutée quand l'événement se produit
- **`options`** (optionnel) : objet de configuration (voir plus loin)

### Avec une fonction fléchée

```javascript
bouton.addEventListener('click', () => {
    console.log('Cliqué !');
});
```

### Avec une fonction nommée

```javascript
function handleClick() {
    console.log('Cliqué !');
}

bouton.addEventListener('click', handleClick);
```

> Utiliser une fonction nommée est nécessaire si on veut **retirer** l'écouteur plus tard.

---

## L'objet `Event`

Quand un événement se produit, le navigateur crée un **objet `Event`** contenant toutes les informations sur l'événement. Il est automatiquement passé en paramètre à la fonction callback.

```javascript
bouton.addEventListener('click', function(event) {
    console.log(event);           // L'objet événement complet
    console.log(event.type);      // "click"
    console.log(event.target);    // L'élément cliqué
    console.log(event.timeStamp); // Quand c'est arrivé
});
```

### Propriétés essentielles

| Propriété | Description |
| :--- | :--- |
| `event.type` | Le type d'événement (`'click'`, `'input'`…) |
| `event.target` | L'élément qui a **déclenché** l'événement |
| `event.currentTarget` | L'élément sur lequel l'écouteur est **attaché** |
| `event.timeStamp` | Le moment où l'événement s'est produit |

### `event.target` vs `event.currentTarget`

```html
<div id="parent">
    <button id="enfant">Cliquer</button>
</div>
```

```javascript
const parent = document.querySelector('#parent');

parent.addEventListener('click', function(event) {
    console.log(event.target);        // <button> (ce qui est réellement cliqué)
    console.log(event.currentTarget); // <div>    (ce sur quoi l'écouteur est posé)
});
```

---

## Les événements courants

### Événements de souris

| Événement | Déclencheur |
| :--- | :--- |
| `click` | Clic gauche |
| `dblclick` | Double-clic |
| `mousedown` / `mouseup` | Bouton enfoncé / relâché |
| `mouseenter` / `mouseleave` | Survol d'un élément (ne *bubble* pas) |
| `mouseover` / `mouseout` | Survol (inclut les enfants, *bubble*) |
| `mousemove` | Mouvement de la souris |
| `contextmenu` | Clic droit |

```javascript
const element = document.querySelector('.hover-zone');

element.addEventListener('mouseenter', () => {
    element.classList.add('survole');
});

element.addEventListener('mouseleave', () => {
    element.classList.remove('survole');
});
```

### Événements de clavier

| Événement | Déclencheur |
| :--- | :--- |
| `keydown` | Touche enfoncée |
| `keyup` | Touche relâchée |
| `keypress` | ❌ **Obsolète** — ne pas utiliser |

```javascript
document.addEventListener('keydown', (event) => {
    console.log(event.key);   // "a", "Enter", "Escape", "ArrowUp"…
    console.log(event.code);  // "KeyA", "Enter", "Escape", "ArrowUp"…
    
    if (event.key === 'Escape') {
        console.log('Vous avez appuyé sur Échap');
    }
    
    // Vérifier les touches modificatrices
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault(); // Empêcher la sauvegarde du navigateur
        console.log('Sauvegarde personnalisée !');
    }
});
```

### Événements de formulaire

| Événement | Déclencheur |
| :--- | :--- |
| `submit` | Soumission d'un formulaire |
| `input` | Changement de valeur en temps réel |
| `change` | Changement validé (quand on quitte le champ) |
| `focus` / `blur` | Le champ prend / perd le focus |

```javascript
const formulaire = document.querySelector('form');

formulaire.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêcher le rechargement de la page
    
    const nom = document.querySelector('#nom').value;
    console.log(`Formulaire soumis par : ${nom}`);
});

const champEmail = document.querySelector('#email');

champEmail.addEventListener('input', (event) => {
    console.log('Valeur actuelle :', event.target.value);
});
```

### Événements de page

| Événement | Déclencheur |
| :--- | :--- |
| `DOMContentLoaded` | Le HTML est entièrement chargé et parsé |
| `load` | La page et toutes ses ressources sont chargées |
| `scroll` | Défilement de la page |
| `resize` | Redimensionnement de la fenêtre |

```javascript
window.addEventListener('scroll', () => {
    console.log('Position verticale :', window.scrollY);
});

window.addEventListener('resize', () => {
    console.log('Largeur :', window.innerWidth);
});
```

---

## Supprimer un écouteur

Pour retirer un écouteur, il faut **la même référence** de fonction.

```javascript
function handleClick() {
    console.log('Cliqué !');
}

// Ajouter
bouton.addEventListener('click', handleClick);

// Retirer
bouton.removeEventListener('click', handleClick);
```

::: warning Piège courant
```javascript
// ❌ NE FONCTIONNE PAS — Les fonctions anonymes ne sont pas les mêmes
bouton.addEventListener('click', () => { console.log('A'); });
bouton.removeEventListener('click', () => { console.log('A'); }); // Ne retire rien !
```
:::

### L'option `once`

Pour un écouteur qui ne s'exécute qu'**une seule fois** :

```javascript
bouton.addEventListener('click', () => {
    console.log('Ceci ne sera loggé qu\'une seule fois');
}, { once: true });
```

---

## `preventDefault` — Empêcher le comportement par défaut

Certains événements ont un comportement par défaut du navigateur. `preventDefault()` empêche ce comportement.

```javascript
// Empêcher un lien de naviguer
const lien = document.querySelector('a');
lien.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Navigation empêchée !');
});

// Empêcher un formulaire de recharger la page
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Traiter les données en JS
});

// Empêcher le menu contextuel (clic droit)
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});
```

---

## Propagation des événements (Bubbling & Capturing)

Quand un événement se produit sur un élément enfant, il se **propage** vers le haut à travers tous ses ancêtres. C'est le **bubbling** (remontée de bulles).

```html
<div id="grand-parent">
    <div id="parent">
        <button id="enfant">Cliquer</button>
    </div>
</div>
```

```javascript
document.querySelector('#grand-parent').addEventListener('click', () => {
    console.log('Grand-parent cliqué');
});

document.querySelector('#parent').addEventListener('click', () => {
    console.log('Parent cliqué');
});

document.querySelector('#enfant').addEventListener('click', () => {
    console.log('Enfant cliqué');
});

// En cliquant sur le bouton, la console affiche :
// "Enfant cliqué"
// "Parent cliqué"
// "Grand-parent cliqué"
```

### Les 3 phases de propagation

1. **Capturing** (Descente) : L'événement descend de `document` vers l'élément ciblé.
2. **Target** : L'événement atteint l'élément ciblé.
3. **Bubbling** (Remontée) : L'événement remonte de l'élément ciblé vers `document`.

Par défaut, les écouteurs se déclenchent en phase de **bubbling**. Pour écouter en phase de **capturing** :

```javascript
element.addEventListener('click', handler, true); // ou { capture: true }
```

### `stopPropagation`

Empêche l'événement de continuer à se propager.

```javascript
document.querySelector('#enfant').addEventListener('click', (event) => {
    event.stopPropagation(); // Les parents ne seront pas notifiés
    console.log('Seul ceci sera affiché');
});
```

---

## Délégation d'événements ⭐

La **délégation** est un pattern puissant : au lieu de poser un écouteur sur chaque enfant, on en pose **un seul sur le parent**, et on utilise `event.target` pour savoir quel enfant a été cliqué.

### Pourquoi ?

- **Performance** : Un seul écouteur au lieu de centaines.
- **Éléments dynamiques** : Fonctionne même pour les éléments ajoutés après le chargement de la page.

### Exemple concret

```html
<ul id="ma-liste">
    <li>Pomme</li>
    <li>Banane</li>
    <li>Cerise</li>
</ul>
```

```javascript
// ❌ Sans délégation : un écouteur par <li>
document.querySelectorAll('#ma-liste li').forEach(li => {
    li.addEventListener('click', () => {
        console.log(li.textContent);
    });
});

// ✅ Avec délégation : un seul écouteur sur le <ul>
document.querySelector('#ma-liste').addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        console.log(event.target.textContent);
    }
});
```

### Avec `closest` pour plus de robustesse

```html
<ul id="ma-liste">
    <li>
        <span class="nom">Pomme</span>
        <button class="supprimer">✕</button>
    </li>
</ul>
```

```javascript
document.querySelector('#ma-liste').addEventListener('click', (event) => {
    // Vérifier si on a cliqué sur un bouton supprimer
    const btnSuppr = event.target.closest('.supprimer');
    if (btnSuppr) {
        const li = btnSuppr.closest('li');
        li.remove();
    }
});
```

---

## Résumé

| Concept | Méthode/Propriété |
| :--- | :--- |
| Écouter | `addEventListener(type, fn)` |
| Retirer | `removeEventListener(type, fn)` |
| Infos sur l'événement | `event.target`, `event.type` |
| Empêcher le défaut | `event.preventDefault()` |
| Stopper la propagation | `event.stopPropagation()` |
| Délégation | Écouteur sur le parent + `event.target` |
