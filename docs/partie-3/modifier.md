# Modifier des éléments

Une fois un élément sélectionné, on peut modifier son **contenu**, ses **attributs** et ses **styles CSS**. Ce chapitre couvre en détail toutes les façons de transformer un élément du DOM.

## Modifier le contenu

### `textContent`

Lit ou modifie le **contenu textuel brut** d'un élément et de tous ses descendants. Il ignore complètement le HTML.

```html
<p id="message">Bonjour <strong>le monde</strong> !</p>
```

```javascript
const msg = document.querySelector('#message');

// Lecture : récupère TOUT le texte, ignore les balises
console.log(msg.textContent); // "Bonjour le monde !"

// Écriture : remplace TOUT le contenu par du texte brut
msg.textContent = 'Au revoir !';
// Résultat : <p id="message">Au revoir !</p>
// Le <strong> a disparu !
```

### `innerHTML`

Lit ou modifie le **contenu HTML** d'un élément. Permet d'injecter du HTML, mais attention aux risques de sécurité.

```javascript
const msg = document.querySelector('#message');

// Lecture : récupère le HTML interne
console.log(msg.innerHTML); // 'Bonjour <strong>le monde</strong> !'

// Écriture : injecte du HTML
msg.innerHTML = '<em>Nouveau</em> contenu';
// Résultat : <p id="message"><em>Nouveau</em> contenu</p>
```

::: danger Sécurité — Injection XSS
**N'utilisez JAMAIS `innerHTML` avec des données provenant de l'utilisateur** (formulaires, URL, API…). Un attaquant pourrait injecter du JavaScript malveillant.

```javascript
// ❌ DANGEREUX — NE JAMAIS FAIRE ÇA
const nomUtilisateur = '<img src=x onerror="alert(\'hacké !\')">';
element.innerHTML = `Bienvenue ${nomUtilisateur}`;

// ✅ SÛR — textContent échappe automatiquement le HTML
element.textContent = `Bienvenue ${nomUtilisateur}`;
```
:::

### `innerText`

Similaire à `textContent` mais tient compte du **rendu visuel** : il ne retourne pas le texte des éléments cachés (`display: none`) et respecte les retours à la ligne visuels.

```javascript
// textContent renvoie tout, même le texte caché
// innerText renvoie uniquement ce qui est visuellement affiché
```

> **Préférez `textContent`** pour la performance. N'utilisez `innerText` que si vous avez besoin du texte "tel qu'il est affiché".

---

## Modifier les attributs

Les attributs HTML (`id`, `class`, `src`, `href`, `data-*`, etc.) sont accessibles et modifiables via plusieurs méthodes.

### Méthodes génériques

```javascript
const img = document.querySelector('img');

// Lire un attribut
const source = img.getAttribute('src');
console.log(source); // "photo.jpg"

// Modifier un attribut
img.setAttribute('src', 'nouvelle-photo.jpg');
img.setAttribute('alt', 'Une belle photo');

// Vérifier si un attribut existe
console.log(img.hasAttribute('alt')); // true

// Supprimer un attribut
img.removeAttribute('alt');
```

### Propriétés directes

Pour les attributs courants, on peut aussi utiliser les propriétés JavaScript directement :

```javascript
const lien = document.querySelector('a');

// Accès direct (plus court)
lien.href = 'https://example.com';
lien.target = '_blank';
lien.id = 'mon-lien';

const input = document.querySelector('input');
input.value = 'Nouveau texte';
input.disabled = true;     // Désactiver l'input
input.placeholder = 'Entrez votre nom';
input.type = 'password';
```

::: tip Différence entre attribut et propriété
- **Attribut** (HTML) : la valeur initiale définie dans le HTML.
- **Propriété** (JS) : la valeur actuelle en mémoire, qui peut différer.

```javascript
// <input id="nom" value="Alice">
const input = document.querySelector('#nom');

input.getAttribute('value'); // "Alice" (attribut HTML initial)
input.value;                 // "Alice" (propriété JS actuelle)

// L'utilisateur tape "Bob" dans le champ
input.getAttribute('value'); // "Alice" (l'attribut ne change PAS)
input.value;                 // "Bob"   (la propriété reflète la valeur actuelle)
```
:::

### Les attributs `data-*`

Les attributs personnalisés `data-*` permettent de stocker des données directement dans le HTML. On y accède via la propriété **`dataset`**.

```html
<article 
    id="post-1" 
    data-author="Alice" 
    data-category="tech" 
    data-read-time="5"
>
    <h2>Mon article</h2>
</article>
```

```javascript
const article = document.querySelector('#post-1');

// Lecture
console.log(article.dataset.author);   // "Alice"
console.log(article.dataset.category); // "tech"
console.log(article.dataset.readTime); // "5" (camelCase !)

// Écriture
article.dataset.likes = '42';
// Ajoute l'attribut data-likes="42" dans le HTML

// Suppression
delete article.dataset.category;
```

::: info Conversion de noms
Les noms en `kebab-case` dans le HTML (`data-read-time`) deviennent en `camelCase` dans le JS (`dataset.readTime`).
:::

---

## Modifier les classes CSS

La manipulation des classes CSS est **la façon recommandée** de changer l'apparence d'un élément. On utilise la propriété **`classList`** qui expose des méthodes pratiques.

### `classList`

```javascript
const element = document.querySelector('.card');

// Ajouter une ou plusieurs classes
element.classList.add('active');
element.classList.add('visible', 'animee');

// Supprimer une ou plusieurs classes
element.classList.remove('active');
element.classList.remove('visible', 'animee');

// Toggle : ajoute si absente, retire si présente
element.classList.toggle('active');
// Retourne true si ajoutée, false si retirée

// Toggle conditionnel
element.classList.toggle('active', true);  // Force l'ajout
element.classList.toggle('active', false); // Force la suppression

// Vérifier la présence d'une classe
console.log(element.classList.contains('active')); // true ou false

// Remplacer une classe par une autre
element.classList.replace('ancienne', 'nouvelle');
```

### `className`

La propriété `className` donne accès à la **chaîne complète** des classes. Utile pour remplacer toutes les classes d'un coup, mais **dangereux** car on écrase tout.

```javascript
const element = document.querySelector('.card');

// Lecture
console.log(element.className); // "card important"

// Écriture (remplace TOUT)
element.className = 'card active';
// ⚠️ La classe "important" a été perdue !
```

> **Préférez toujours `classList`** pour éviter d'écraser les classes existantes par accident.

---

## Modifier les styles CSS

### Style inline avec `style`

La propriété `style` permet de modifier les styles **inline** (attribut `style="..."`) d'un élément.

```javascript
const boite = document.querySelector('.boite');

// Écriture
boite.style.backgroundColor = 'blue';
boite.style.color = 'white';
boite.style.padding = '20px';
boite.style.borderRadius = '8px';
boite.style.fontSize = '1.2rem';

// Lecture
console.log(boite.style.backgroundColor); // "blue"

// Supprimer un style inline
boite.style.backgroundColor = '';
```

::: info Noms des propriétés
Les propriétés CSS en `kebab-case` (`background-color`, `font-size`) deviennent en `camelCase` en JS (`backgroundColor`, `fontSize`).
:::

### `cssText` pour plusieurs styles

```javascript
const boite = document.querySelector('.boite');

// Définir plusieurs styles d'un coup (écrase les styles inline existants !)
boite.style.cssText = 'background-color: blue; color: white; padding: 20px;';
```

### Lire le style calculé avec `getComputedStyle`

La propriété `element.style` ne retourne que les styles **inline**. Pour obtenir le style réel (incluant les feuilles de style CSS), on utilise `getComputedStyle`.

```javascript
const boite = document.querySelector('.boite');

// Ne retourne que les styles inline
console.log(boite.style.width); // "" (vide si défini en CSS)

// Retourne le style calculé final
const styles = window.getComputedStyle(boite);
console.log(styles.width);           // "300px"
console.log(styles.backgroundColor); // "rgb(0, 0, 255)"
console.log(styles.display);         // "block"
```

### Bonnes pratiques pour les styles

| ✅ Faire | ❌ Éviter |
| :--- | :--- |
| Ajouter/retirer des **classes CSS** | Modifier `element.style` directement |
| Animations via classes CSS | Animations via JS `style.left = ...` |
| Utiliser des variables CSS | Valeurs en dur dans le JS |

```css
/* Définir les styles dans votre CSS */
.card { background: white; transition: all 0.3s; }
.card.active { background: yellow; transform: scale(1.05); }
```

```javascript
// ✅ Toggler la classe pour changer le style
carte.classList.toggle('active');

// ❌ Modifier les styles un par un en JS
carte.style.background = 'yellow';
carte.style.transform = 'scale(1.05)';
```
