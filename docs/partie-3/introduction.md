# Introduction à la manipulation du DOM

## Qu'est-ce que le DOM ?

Le **DOM** (Document Object Model) est une **représentation en mémoire** de votre page HTML sous forme d'un **arbre d'objets**. Quand le navigateur charge une page HTML, il ne se contente pas de l'afficher : il construit un modèle structuré que JavaScript peut lire et manipuler.

Chaque balise HTML devient un **nœud** (node) dans cet arbre. Par exemple :

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Ma Page</title>
  </head>
  <body>
    <h1>Bonjour</h1>
    <p>Un paragraphe</p>
  </body>
</html>
```

Se traduit en un arbre :

```
document
└── html
    ├── head
    │   └── title
    │       └── "Ma Page" (nœud texte)
    └── body
        ├── h1
        │   └── "Bonjour" (nœud texte)
        └── p
            └── "Un paragraphe" (nœud texte)
```

## Pourquoi manipuler le DOM ?

Sans le DOM, JavaScript ne pourrait **rien faire** sur la page. C'est le DOM qui permet de :

- **Lire** le contenu actuel de la page (texte, attributs, styles…)
- **Modifier** le contenu (changer un texte, une couleur, une image…)
- **Ajouter** de nouveaux éléments (créer des cartes, des listes dynamiques…)
- **Supprimer** des éléments existants
- **Réagir** aux actions de l'utilisateur (clics, saisies clavier, survol…)

> Le DOM est le **pont** entre votre code JavaScript et ce que l'utilisateur voit à l'écran.

## L'objet `document`

Le point d'entrée principal du DOM est l'objet global **`document`**. Il représente la page entière et expose toutes les méthodes pour la manipuler.

```javascript
// Accéder au titre de la page
console.log(document.title);

// Accéder à l'élément <body>
console.log(document.body);

// Accéder à l'élément <head>
console.log(document.head);

// Accéder à l'URL de la page
console.log(document.URL);
```

## Les types de nœuds

Tous les éléments du DOM ne sont pas des balises HTML. Il existe différents **types de nœuds** :

| Type | Description | Exemple |
| :--- | :--- | :--- |
| **Element** | Une balise HTML | `<div>`, `<p>`, `<span>` |
| **Text** | Le texte à l'intérieur d'une balise | `"Bonjour"` dans `<p>Bonjour</p>` |
| **Comment** | Un commentaire HTML | `<!-- ceci est un commentaire -->` |
| **Document** | Le document lui-même | `document` |
| **Attribute** | Un attribut d'élément | `class="active"` |

Chaque nœud possède une propriété **`nodeType`** qui retourne un nombre :
- `1` → Element
- `3` → Text
- `8` → Comment
- `9` → Document

```javascript
const titre = document.querySelector('h1');
console.log(titre.nodeType); // 1 (Element)
console.log(titre.firstChild.nodeType); // 3 (Text)
```

## Relations parent / enfant / frère

Les nœuds du DOM sont organisés selon des relations familiales :

```javascript
const body = document.body;

// Enfants
body.childNodes;      // Tous les nœuds enfants (y compris texte, commentaires)
body.children;        // Seulement les éléments enfants (HTMLCollection)
body.firstChild;      // Premier nœud enfant
body.firstElementChild; // Premier élément enfant
body.lastChild;       // Dernier nœud enfant
body.lastElementChild;  // Dernier élément enfant

// Parent
body.parentNode;      // Le nœud parent (ici <html>)
body.parentElement;   // L'élément parent (ici <html>)

// Frères (siblings)
const h1 = document.querySelector('h1');
h1.nextSibling;           // Prochain nœud frère
h1.nextElementSibling;    // Prochain élément frère
h1.previousSibling;       // Nœud frère précédent
h1.previousElementSibling; // Élément frère précédent
```

::: tip Bonne pratique
Préférez toujours les propriétés `Element` (`children`, `firstElementChild`, `nextElementSibling`…) aux propriétés `Node` (`childNodes`, `firstChild`, `nextSibling`…), car elles ignorent les nœuds texte et commentaires, qui sont rarement utiles.
:::

## Comment JavaScript s'exécute dans la page

Quand le navigateur rencontre une balise `<script>`, il **met en pause** le rendu HTML pour exécuter le JavaScript. C'est pourquoi :

1. **Placer le `<script>` à la fin du `<body>`** garantit que tous les éléments HTML existent avant que le JS ne s'exécute.

```html
<body>
    <h1>Ma Page</h1>
    <p>Du contenu</p>
    
    <!-- Le script en dernier -->
    <script src="app.js"></script>
</body>
```

2. **L'attribut `defer`** permet de placer le script dans le `<head>` tout en attendant que le HTML soit complètement chargé.

```html
<head>
    <script src="app.js" defer></script>
</head>
```

3. **L'événement `DOMContentLoaded`** permet de s'assurer que le DOM est prêt.

```javascript
document.addEventListener('DOMContentLoaded', () => {
    // Tout le HTML est chargé et parsé
    const titre = document.querySelector('h1');
    console.log(titre.textContent);
});
```

> Dans la suite de ce cours, nous verrons en détail comment **sélectionner**, **modifier**, **créer** et **supprimer** des éléments du DOM.
