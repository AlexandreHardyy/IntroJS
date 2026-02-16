# Sélectionner des éléments

Avant de pouvoir modifier quoi que ce soit dans la page, il faut d'abord **sélectionner** l'élément ciblé. Le DOM offre plusieurs méthodes de sélection, chacune avec ses spécificités.

## Les méthodes de sélection

### `getElementById`

Sélectionne **un seul** élément par son attribut `id`. Retourne l'élément directement, ou `null` s'il n'existe pas.

```html
<h1 id="titre-principal">Bienvenue</h1>
```

```javascript
const titre = document.getElementById('titre-principal');
console.log(titre.textContent); // "Bienvenue"
```

::: warning Attention
Les `id` doivent être **uniques** dans toute la page HTML. Si vous avez deux éléments avec le même `id`, seul le premier sera retourné, et votre HTML sera invalide.
:::

### `getElementsByClassName`

Sélectionne **tous** les éléments qui ont une classe CSS donnée. Retourne une **HTMLCollection** (collection *live*).

```html
<p class="important">Premier</p>
<p class="important">Deuxième</p>
<p>Troisième</p>
```

```javascript
const importants = document.getElementsByClassName('important');
console.log(importants.length); // 2
console.log(importants[0].textContent); // "Premier"
```

### `getElementsByTagName`

Sélectionne **tous** les éléments d'un type de balise donné. Retourne aussi une **HTMLCollection**.

```javascript
const paragraphes = document.getElementsByTagName('p');
console.log(paragraphes.length); // 3
```

### `querySelector` ⭐

La méthode **moderne et recommandée**. Sélectionne **le premier** élément correspondant à un **sélecteur CSS**. Retourne l'élément ou `null`.

```javascript
// Par id
const titre = document.querySelector('#titre-principal');

// Par classe
const premier = document.querySelector('.important');

// Par balise
const premierP = document.querySelector('p');

// Sélecteurs complexes
const lien = document.querySelector('nav a.active');
const input = document.querySelector('form input[type="email"]');
const troisieme = document.querySelector('li:nth-child(3)');
```

### `querySelectorAll` ⭐

Sélectionne **tous** les éléments correspondant au sélecteur CSS. Retourne une **NodeList** (collection *statique*).

```javascript
const tousLesParagraphes = document.querySelectorAll('p');
const elementsImportants = document.querySelectorAll('.important');
const liens = document.querySelectorAll('a[href^="https"]');
```

## HTMLCollection vs NodeList

C'est une subtilité importante qui piège beaucoup de développeurs.

| | **HTMLCollection** | **NodeList** |
| :--- | :--- | :--- |
| Retournée par | `getElementsBy*` | `querySelectorAll` |
| **Live** (mise à jour auto) | ✅ Oui | ❌ Non (statique) |
| Itérable avec `forEach` | ❌ Non | ✅ Oui |
| Accès par index | ✅ Oui | ✅ Oui |

### Collection *live* vs *statique*

```html
<ul id="liste">
    <li>A</li>
    <li>B</li>
</ul>
```

```javascript
// HTMLCollection = live
const itemsLive = document.getElementsByTagName('li');
console.log(itemsLive.length); // 2

// NodeList = statique
const itemsStatique = document.querySelectorAll('li');
console.log(itemsStatique.length); // 2

// On ajoute un élément au DOM
const nouvelItem = document.createElement('li');
nouvelItem.textContent = 'C';
document.getElementById('liste').appendChild(nouvelItem);

// La HTMLCollection se met à jour automatiquement !
console.log(itemsLive.length);     // 3 ← mis à jour
console.log(itemsStatique.length); // 2 ← reste à 2
```

### Convertir en tableau

Pour utiliser les méthodes de tableau (`map`, `filter`, `reduce`…) sur ces collections :

```javascript
// Méthode 1 : Array.from()
const tableau1 = Array.from(document.querySelectorAll('li'));

// Méthode 2 : Spread operator
const tableau2 = [...document.querySelectorAll('li')];

// Maintenant on peut utiliser .map(), .filter(), etc.
const textes = tableau1.map(li => li.textContent);
```

## Recherche dans un sous-arbre

Les méthodes `querySelector` et `querySelectorAll` peuvent aussi être appelées sur **un élément** (pas seulement sur `document`), pour limiter la recherche à ses descendants.

```html
<div id="section-1">
    <p class="info">Info Section 1</p>
</div>
<div id="section-2">
    <p class="info">Info Section 2</p>
</div>
```

```javascript
// Recherche dans tout le document
const toutesInfos = document.querySelectorAll('.info');
console.log(toutesInfos.length); // 2

// Recherche limitée à section-1
const section1 = document.getElementById('section-1');
const infosSection1 = section1.querySelectorAll('.info');
console.log(infosSection1.length); // 1
```

## Méthodes utilitaires

### `closest`

Remonte dans l'arbre depuis un élément pour trouver le **premier ancêtre** correspondant au sélecteur. Très utile pour la délégation d'événements.

```html
<div class="card">
    <div class="card-body">
        <button class="btn">Cliquer</button>
    </div>
</div>
```

```javascript
const bouton = document.querySelector('.btn');
const carte = bouton.closest('.card');
console.log(carte); // <div class="card">...</div>
```

### `matches`

Vérifie si un élément correspond à un sélecteur CSS. Retourne `true` ou `false`.

```javascript
const element = document.querySelector('p');
console.log(element.matches('.important')); // true ou false
console.log(element.matches('p'));          // true
```

### `contains`

Vérifie si un élément est un descendant d'un autre.

```javascript
const parent = document.querySelector('.card');
const bouton = document.querySelector('.btn');
console.log(parent.contains(bouton)); // true
```

## Résumé des bonnes pratiques

| ✅ Faire | ❌ Éviter |
| :--- | :--- |
| `querySelector` / `querySelectorAll` | `getElementById` / `getElementsBy*` |
| Stocker dans une variable | Resélectionner à chaque fois |
| Sélecteur précis : `.card .title` | Sélecteur trop large : `div` |
| Recherche dans un sous-arbre | Toujours chercher dans `document` |

```javascript
// ✅ Bonne pratique : stocker la référence
const bouton = document.querySelector('#mon-bouton');
bouton.textContent = 'Cliquer ici';
bouton.classList.add('active');

// ❌ Mauvaise pratique : re-sélectionner à chaque fois
document.querySelector('#mon-bouton').textContent = 'Cliquer ici';
document.querySelector('#mon-bouton').classList.add('active');
```
