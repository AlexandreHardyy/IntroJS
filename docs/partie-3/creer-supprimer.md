# Créer et supprimer des éléments

Savoir créer et supprimer des éléments dynamiquement est essentiel pour construire des interfaces interactives : listes dynamiques, cartes, notifications, modales…

## Créer des éléments

### `document.createElement`

C'est la méthode principale pour créer un nouvel élément. L'élément est créé **en mémoire** — il n'apparaît pas encore dans la page.

```javascript
// Créer un <p>
const paragraphe = document.createElement('p');

// Lui donner du contenu et des attributs
paragraphe.textContent = 'Je suis un nouveau paragraphe !';
paragraphe.classList.add('info');
paragraphe.id = 'paragraphe-dynamique';
```

### `document.createTextNode`

Crée un nœud texte pur (rarement utilisé directement, `textContent` est plus simple).

```javascript
const texte = document.createTextNode('Du texte brut');
```

### `document.createDocumentFragment`

Un **fragment de document** est un conteneur léger qui n'existe pas dans le DOM. Il sert à regrouper plusieurs éléments avant de les insérer d'un coup, ce qui est plus performant.

```javascript
const fragment = document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
    const li = document.createElement('li');
    li.textContent = `Élément ${i + 1}`;
    fragment.appendChild(li);
}

// Un seul insert dans le DOM = une seule opération de rendu
document.querySelector('ul').appendChild(fragment);
```

::: tip Performance
Chaque modification du DOM peut déclencher un **reflow** (recalcul de la mise en page). En utilisant un `DocumentFragment`, on fait toutes les modifications en mémoire et on insère le résultat en une seule fois.
:::

---

## Insérer des éléments dans le DOM

Une fois l'élément créé, il faut l'**attacher** au DOM pour qu'il apparaisse.

### `appendChild`

Ajoute un élément **à la fin** des enfants d'un parent.

```javascript
const liste = document.querySelector('ul');
const item = document.createElement('li');
item.textContent = 'Nouveau';

liste.appendChild(item);
// <ul>
//   <li>Existant 1</li>
//   <li>Existant 2</li>
//   <li>Nouveau</li>      ← ajouté ici
// </ul>
```

### `prepend` et `append`

Méthodes modernes, plus flexibles que `appendChild`. Elles acceptent à la fois des **éléments** et des **chaînes de texte**.

```javascript
const conteneur = document.querySelector('.conteneur');

// Ajouter au début
conteneur.prepend('Texte au début ', elementA);

// Ajouter à la fin
conteneur.append(elementB, ' Texte à la fin');
```

### `insertBefore`

Insère un élément **avant** un autre dans le même parent.

```javascript
const liste = document.querySelector('ul');
const reference = liste.children[1];  // Le 2ème <li>
const nouveau = document.createElement('li');
nouveau.textContent = 'Inséré avant le 2ème';

liste.insertBefore(nouveau, reference);
// <ul>
//   <li>Premier</li>
//   <li>Inséré avant le 2ème</li>  ← inséré ici
//   <li>Deuxième</li>
// </ul>
```

### `before` et `after`

Méthodes modernes pour insérer **avant** ou **après** un élément donné (au même niveau, pas à l'intérieur).

```javascript
const deuxieme = document.querySelector('li:nth-child(2)');

const nouveau = document.createElement('li');
nouveau.textContent = 'Ajouté';

deuxieme.before(nouveau);  // Insère juste avant le 2ème
deuxieme.after(nouveau);   // Insère juste après le 2ème
```

### `insertAdjacentHTML`

Insère du **code HTML** (sous forme de chaîne) à une position précise par rapport à un élément. Très performant et pratique.

```javascript
const carte = document.querySelector('.card');

// beforebegin → Avant l'élément lui-même
carte.insertAdjacentHTML('beforebegin', '<p>Avant la carte</p>');

// afterbegin → Au début du contenu de l'élément
carte.insertAdjacentHTML('afterbegin', '<h2>Titre</h2>');

// beforeend → À la fin du contenu de l'élément
carte.insertAdjacentHTML('beforeend', '<footer>Pied</footer>');

// afterend → Après l'élément lui-même
carte.insertAdjacentHTML('afterend', '<p>Après la carte</p>');
```

Voici les 4 positions possibles :

```
<!-- beforebegin -->
<div class="card">
    <!-- afterbegin -->
    <p>Contenu existant</p>
    <!-- beforeend -->
</div>
<!-- afterend -->
```

::: warning Sécurité
Comme `innerHTML`, `insertAdjacentHTML` interprète le HTML. Ne l'utilisez **jamais** avec des données non fiables provenant de l'utilisateur.
:::

### `insertAdjacentElement` et `insertAdjacentText`

Variantes qui insèrent un **élément DOM** ou du **texte brut** aux mêmes positions.

```javascript
const element = document.createElement('span');
element.textContent = 'Hello';

carte.insertAdjacentElement('afterbegin', element);
carte.insertAdjacentText('beforeend', ' du texte brut');
```

---

## Cloner des éléments

### `cloneNode`

Crée une **copie** d'un élément existant.

```javascript
const original = document.querySelector('.card');

// Clone superficiel (l'élément seul, sans ses enfants)
const copieVide = original.cloneNode(false);

// Clone profond (l'élément + tous ses descendants)
const copieTotale = original.cloneNode(true);

// Il faut encore insérer le clone dans le DOM
document.body.appendChild(copieTotale);
```

::: warning Attention aux `id`
Si l'élément cloné a un `id`, pensez à le modifier pour éviter les doublons.

```javascript
const clone = original.cloneNode(true);
clone.id = 'card-copie';
document.body.appendChild(clone);
```
:::

---

## Supprimer des éléments

### `remove` ⭐

La méthode moderne et la plus simple.

```javascript
const element = document.querySelector('.a-supprimer');
element.remove();
```

### `removeChild`

L'ancienne méthode. Il faut passer par le parent.

```javascript
const parent = document.querySelector('ul');
const enfant = parent.children[0]; // Premier <li>
parent.removeChild(enfant);
```

### Vider un conteneur

```javascript
const conteneur = document.querySelector('#conteneur');

// Méthode 1 : innerHTML (simple mais détruit les écouteurs d'événements)
conteneur.innerHTML = '';

// Méthode 2 : Boucle (préserve les références si besoin)
while (conteneur.firstChild) {
    conteneur.removeChild(conteneur.firstChild);
}

// Méthode 3 : replaceChildren (moderne)
conteneur.replaceChildren(); // Vide tout
conteneur.replaceChildren(element1, element2); // Remplace tout par ces éléments
```

---

## Remplacer des éléments

### `replaceWith`

Remplace un élément par un ou plusieurs autres.

```javascript
const ancien = document.querySelector('.ancienne-carte');
const nouveau = document.createElement('div');
nouveau.classList.add('nouvelle-carte');
nouveau.textContent = 'Contenu mis à jour';

ancien.replaceWith(nouveau);
```

### `replaceChild`

L'ancienne méthode, via le parent.

```javascript
const parent = document.querySelector('ul');
const ancien = parent.children[0];
const nouveau = document.createElement('li');
nouveau.textContent = 'Remplacé';

parent.replaceChild(nouveau, ancien);
```

---

## Pattern complet : création dynamique de liste

Voici un exemple concret de tout ce qu'on a vu, combiné en un seul pattern :

```javascript
// Les données
const fruits = ['Pomme', 'Banane', 'Cerise', 'Mangue', 'Kiwi'];

// 1. Sélectionner le conteneur
const liste = document.querySelector('#liste-fruits');

// 2. Créer un fragment pour la performance
const fragment = document.createDocumentFragment();

// 3. Boucler sur les données pour créer les éléments
fruits.forEach((fruit, index) => {
    const li = document.createElement('li');
    li.textContent = fruit;
    li.dataset.index = index;
    li.classList.add('fruit-item');
    
    // Ajouter un bouton de suppression
    const btnSuppr = document.createElement('button');
    btnSuppr.textContent = '✕';
    btnSuppr.classList.add('btn-supprimer');
    li.appendChild(btnSuppr);
    
    fragment.appendChild(li);
});

// 4. Insérer tout d'un coup
liste.appendChild(fragment);
```
