# Traverser et analyser le DOM

Ce chapitre aborde les techniques avancées pour **naviguer** dans l'arbre DOM, **mesurer** et **positionner** les éléments, et comprendre les dimensions du viewport.

## Naviguer dans l'arbre DOM

### Résumé des propriétés de navigation

```javascript
const element = document.querySelector('.cible');

// ===== VERS LE HAUT =====
element.parentElement;        // Parent direct
element.closest('.ancetre');  // Premier ancêtre correspondant au sélecteur

// ===== VERS LE BAS =====
element.children;             // Tous les enfants éléments (HTMLCollection)
element.firstElementChild;    // Premier enfant élément
element.lastElementChild;     // Dernier enfant élément
element.childElementCount;    // Nombre d'enfants éléments

// ===== SUR LE CÔTÉ =====
element.previousElementSibling; // Frère précédent
element.nextElementSibling;     // Frère suivant
```

### Parcourir tous les descendants

```javascript
// Parcourir les enfants directs
const parent = document.querySelector('.conteneur');

for (const enfant of parent.children) {
    console.log(enfant.tagName, enfant.textContent);
}

// Récupérer TOUS les descendants (pas seulement les enfants directs)
const tousLesDescendants = parent.querySelectorAll('*');
```

### TreeWalker (navigation avancée)

Pour des parcours complexes de l'arbre DOM, `TreeWalker` offre un contrôle fin.

```javascript
const walker = document.createTreeWalker(
    document.body,          // Racine du parcours
    NodeFilter.SHOW_ELEMENT // Ne montrer que les éléments
);

while (walker.nextNode()) {
    console.log(walker.currentNode.tagName);
}
```

---

## Dimensions et positions

### Dimensions d'un élément

```javascript
const element = document.querySelector('.boite');

// ===== getBoundingClientRect() =====
// Retourne un objet avec position ET dimensions relatives au viewport
const rect = element.getBoundingClientRect();

console.log(rect.width);   // Largeur totale (contenu + padding + bordure)
console.log(rect.height);  // Hauteur totale
console.log(rect.top);     // Distance entre le haut de l'élément et le haut du viewport
console.log(rect.left);    // Distance entre le côté gauche et le côté gauche du viewport
console.log(rect.bottom);  // Distance entre le bas de l'élément et le haut du viewport
console.log(rect.right);   // Distance entre le côté droit et le côté gauche du viewport
```

### Propriétés de dimension

```javascript
const el = document.querySelector('.boite');

// Dimensions avec padding (sans bordure)
el.clientWidth;   // largeur intérieure + padding
el.clientHeight;  // hauteur intérieure + padding

// Dimensions totales (avec bordure)
el.offsetWidth;   // largeur + padding + bordure
el.offsetHeight;  // hauteur + padding + bordure

// Dimensions du contenu scrollable
el.scrollWidth;   // Largeur totale du contenu scrollable
el.scrollHeight;  // Hauteur totale du contenu scrollable
```

### Position de défilement (scroll)

```javascript
const el = document.querySelector('.conteneur-scroll');

// Lire la position de scroll
console.log(el.scrollTop);   // Combien l'utilisateur a scrollé verticalement
console.log(el.scrollLeft);  // Combien l'utilisateur a scrollé horizontalement

// Modifier la position de scroll
el.scrollTop = 0;  // Revenir en haut

// Scroll fluide
el.scrollTo({
    top: 500,
    behavior: 'smooth'
});

// Scroll vers un élément spécifique
const cible = document.querySelector('#section-3');
cible.scrollIntoView({ behavior: 'smooth', block: 'start' });
```

---

## Le Viewport

Le **viewport** est la zone visible de la page dans le navigateur.

```javascript
// Dimensions du viewport
window.innerWidth;   // Largeur de la zone visible
window.innerHeight;  // Hauteur de la zone visible

// Position de scroll de la page
window.scrollX;  // ou window.pageXOffset
window.scrollY;  // ou window.pageYOffset

// Scroller la page
window.scrollTo({
    top: 0,
    behavior: 'smooth'
});

// Scroller de manière relative
window.scrollBy({
    top: 200,       // 200px vers le bas
    behavior: 'smooth'
});
```

---

## Vérifier la visibilité d'un élément

### Avec `getBoundingClientRect`

```javascript
function estVisible(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom > 0 &&
        rect.left < window.innerWidth &&
        rect.right > 0
    );
}
```

### Avec `IntersectionObserver` (recommandé)

L'`IntersectionObserver` est bien plus performant que d'écouter le scroll et vérifier les positions manuellement.

```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(`${entry.target.id} est visible !`);
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.5 // Déclencher quand 50% de l'élément est visible
});

// Observer des éléments
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Arrêter d'observer
observer.unobserve(element);
observer.disconnect(); // Tout arrêter
```

::: tip Cas d'usage courants
- **Lazy loading** d'images : charger les images seulement quand elles apparaissent
- **Animations au scroll** : animer les éléments quand ils deviennent visibles
- **Infinite scroll** : charger plus de contenu quand on atteint le bas
:::

---

## Manipulation avancée du DOM

### `MutationObserver`

Observer les **changements** du DOM en temps réel.

```javascript
const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
            console.log('Des enfants ont été ajoutés ou supprimés');
        }
        if (mutation.type === 'attributes') {
            console.log(`L'attribut ${mutation.attributeName} a changé`);
        }
    });
});

const cible = document.querySelector('#conteneur');

observer.observe(cible, {
    childList: true,    // Observer les ajouts/suppressions d'enfants
    attributes: true,   // Observer les changements d'attributs
    subtree: true,      // Observer aussi les descendants
    characterData: true // Observer les changements de texte
});

// Arrêter l'observation
observer.disconnect();
```

### `ResizeObserver`

Observer les **changements de taille** d'un élément.

```javascript
const observer = new ResizeObserver((entries) => {
    entries.forEach(entry => {
        const { width, height } = entry.contentRect;
        console.log(`Nouvelle taille : ${width}x${height}`);
    });
});

observer.observe(document.querySelector('.conteneur-responsive'));
```
