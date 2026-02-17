# 🎬 CinéCollect — Exercice DOM JavaScript

## Objectif

Rendre interactive une application de **gestion de collection de films** en écrivant du JavaScript pur. Le HTML et le CSS sont déjà fournis — vous n'avez qu'à compléter le fichier `app.js`.

## Lancer le projet

Ouvrez `index.html` dans votre navigateur :
- **Avec Live Server** (recommandé) : clic droit sur `index.html` → *Open with Live Server*
- **Sans extension** : double-clic sur le fichier `index.html`

## Fichiers

| Fichier | À modifier ? | Description |
| :--- | :---: | :--- |
| `index.html` | ❌ | Structure HTML complète |
| `style.css` | ❌ | Styles, animations, dark mode — tout est prêt |
| `app.js` | ✅ **OUI** | Le fichier à compléter — 15 étapes progressives |

## Les étapes

| # | Étape | Concepts DOM utilisés |
| :---: | :--- | :--- |
| 1 | Sélectionner les éléments | `querySelector`, `querySelectorAll`, `getElementById` |
| 2 | Système de notation par étoiles | `dataset`, `classList`, `addEventListener('click')` |
| 3 | Notifications toast | `createElement`, `classList.add`, `appendChild`, `setTimeout`, `remove` |
| 4 | Statistiques dynamiques | `querySelectorAll`, `textContent`, `dataset`, `.classList.add/remove` |
| 5 | Créer une carte de film | `createElement`, `classList`, `dataset`, `textContent`, `appendChild` |
| 6 | Formulaire d'ajout + validation | `submit`, `preventDefault`, `value`, validation, `form.reset()` |
| 7 | Délégation d'événements (grille) | `event.target`, `closest()`, délégation, `remove()`, `classList.toggle` |
| 8 | Modale d'édition — sauvegarde | `querySelector('[data-id="..."]')`, modification du DOM |
| 9 | Fermer la modale | `hidden`, `event.target ===`, plusieurs écouteurs |
| 10 | Recherche en temps réel | `input` event, `toLowerCase()`, `classList.add/remove('hidden')` |
| 11 | Filtrer par genre | Boucle sur boutons, `dataset.genre`, classes actives |
| 12 | Trier les films | `Array.sort()`, `[...NodeList]`, `append()` |
| 13 | Mode sombre | `document.body.classList.toggle('dark')`, `textContent` |
| 14 | Raccourcis clavier | `keydown`, `event.key`, `event.target.tagName`, `focus()` |
| 15 | Films pré-remplis (bonus) | Boucle de création + insertion |

## Conseils

- **Faites une étape à la fois**, testez dans le navigateur, puis passez à la suivante.
- **Ouvrez la console** (F12 → Console) pour voir les erreurs.
- Les commentaires dans `app.js` expliquent en détail quoi faire.
- Le CSS gère déjà toutes les animations : il suffit d'ajouter/retirer les bonnes classes.
- Référez-vous au cours (Partie 3 — Manipulation du DOM) pour chaque concept.

## Aperçu des fonctionnalités attendues

Une fois terminé, votre application pourra :
- ➕ Ajouter des films via un formulaire validé
- ⭐ Noter les films avec des étoiles cliquables
- ❤️ Marquer des films en favoris
- 🔍 Rechercher en temps réel par titre ou réalisateur
- 🏷️ Filtrer par genre (Action, Comédie, Drame...)
- 📊 Trier par titre, année ou note
- ✏️ Modifier un film via une modale
- 🗑️ Supprimer un film avec animation
- 🌙 Basculer en mode sombre
- ⌨️ Utiliser des raccourcis clavier
- 📈 Voir les statistiques en temps réel
