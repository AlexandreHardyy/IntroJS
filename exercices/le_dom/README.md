# Exercices : Manipulation du DOM

Ces exercices couvrent la section "Manipulation du DOM" du cours. Ils travaillent sur des **structures de données JavaScript** qui simulent le DOM, ce qui permet de les tester avec Vitest sans avoir besoin d'un navigateur.

## Lancer les tests

```bash
cd exercices
npx vitest --root le_dom
```

Ou pour lancer un dossier spécifique :

```bash
npx vitest --root le_dom tests/01_selectionner
```

## Structure

| Dossier | Sujet | Exercices |
| :--- | :--- | :--- |
| `01_selectionner/` | Sélection d'éléments (recherche dans listes et arbres) | exo1, exo2 |
| `02_modifier/` | Modification de contenu, classes et attributs | exo1, exo2 |
| `03_creer_supprimer/` | Création, insertion, clonage et suppression d'éléments | exo1, exo2 |
| `04_evenements/` | Système d'événements, propagation et délégation | exo1, exo2 |
| `05_formulaires/` | Validation de formulaires et FormData | exo1, exo2 |
| `06_traverser/` | Parcours d'arbre, profondeur, collecte de données | exo1 |

## Convention

Les éléments DOM sont simulés par des objets JavaScript avec la structure :

```javascript
{
  tag: 'div',
  id: 'mon-id',
  classes: ['classe1', 'classe2'],
  text: 'Mon texte',
  attributes: { src: 'image.jpg', 'data-id': '42' },
  children: [ /* autres éléments */ ]
}
```

Toutes les fonctions qui modifient un élément doivent retourner une **copie** (immutabilité). L'objet original ne doit jamais être modifié.
