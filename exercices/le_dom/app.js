/**
 * ============================================================
 *  CinéCollect — Gestionnaire de Collection de Films
 * ============================================================
 *
 *  Bienvenue dans cet exercice !
 *  Le HTML et le CSS sont déjà prêts. Votre mission : écrire
 *  tout le JavaScript pour rendre l'application interactive.
 *
 *  Ouvrez index.html dans votre navigateur (clic droit → Open
 *  with Live Server, ou double-clic sur le fichier) et observez
 *  les changements au fur et à mesure que vous codez.
 *
 *  L'exercice est découpé en ÉTAPES progressives.
 *  Complétez chaque section marquée "TODO" dans l'ordre.
 *
 *  Concepts du cours utilisés :
 *   - querySelector / querySelectorAll
 *   - textContent, innerHTML, classList, dataset, style
 *   - createElement, appendChild, remove, insertAdjacentHTML
 *   - addEventListener, event.target, event.preventDefault()
 *   - Délégation d'événements
 *   - Propagation (bubbling)
 *   - FormData, validation
 *   - Keyboard events
 *   - closest, matches
 *
 * ============================================================
 */

// Variable globale pour générer des IDs uniques
let nextId = 1;

// ============================================================
// ÉTAPE 1 : Sélectionner les éléments du DOM
// ============================================================
//
// Stockez dans des constantes les références vers les éléments
// importants de la page. Utilisez querySelector ou getElementById.
//
// Rappel du cours (chapitre Sélectionner) :
//   const element = document.querySelector('#mon-id');
//   const elements = document.querySelectorAll('.ma-classe');
//
// TODO : Sélectionnez et stockez les éléments suivants :

// -- Header --
const searchInput = null;       // TODO : l'input de recherche (#search-input)
const btnDarkMode = null;       // TODO : le bouton dark mode (#btn-dark-mode)

// -- Statistiques --
const statTotal = null;         // TODO : #stat-total
const statNoteMoyenne = null;   // TODO : #stat-note-moyenne
const statFavoris = null;       // TODO : #stat-favoris
const statRecents = null;       // TODO : #stat-recents

// -- Formulaire d'ajout --
const formAjout = null;         // TODO : #form-ajout
const inputTitre = null;        // TODO : #film-titre
const inputRealisateur = null;  // TODO : #film-realisateur
const inputAnnee = null;        // TODO : #film-annee
const selectGenre = null;       // TODO : #film-genre
const ratingInput = null;       // TODO : #rating-input (le conteneur des étoiles)
const hiddenNote = null;        // TODO : #film-note (l'input hidden qui stocke la note)
const errorTitre = null;        // TODO : #error-titre
const errorRealisateur = null;  // TODO : #error-realisateur
const errorAnnee = null;        // TODO : #error-annee

// -- Grille de films --
const filmsGrid = null;         // TODO : #films-grid
const emptyState = null;        // TODO : #empty-state

// -- Filtres & Tri --
const filterButtons = null;     // TODO : Tous les boutons .filter-btn (querySelectorAll)
const triSelect = null;         // TODO : #tri-select

// -- Modale d'édition --
const modalOverlay = null;      // TODO : #modal-overlay
const modalClose = null;        // TODO : #modal-close
const modalCancel = null;       // TODO : #modal-cancel
const formEdit = null;          // TODO : #form-edit
const editId = null;            // TODO : #edit-id
const editTitre = null;         // TODO : #edit-titre
const editRealisateur = null;   // TODO : #edit-realisateur
const editAnnee = null;         // TODO : #edit-annee
const editGenre = null;         // TODO : #edit-genre
const editRating = null;        // TODO : #edit-rating (conteneur étoiles édition)
const editNote = null;          // TODO : #edit-note (hidden input édition)

// -- Toast --
const toastContainer = null;    // TODO : #toast-container

// -- Aide raccourcis --
const shortcutsOverlay = null;  // TODO : #shortcuts-overlay
const shortcutsClose = null;    // TODO : #shortcuts-close


// ============================================================
// ÉTAPE 2 : Le système de notation par étoiles
// ============================================================
//
// Quand l'utilisateur clique sur une étoile (⭐), toutes les
// étoiles jusqu'à celle cliquée doivent devenir "active" (★)
// et les suivantes redevenir inactives (☆).
//
// La valeur de la note doit être stockée dans l'input hidden.
//
// Rappels du cours :
//   - dataset pour lire data-value
//   - classList.add / classList.remove
//   - querySelectorAll sur un sous-élément
//   - addEventListener('click', ...)
//
// Cette fonction doit fonctionner pour le formulaire d'ajout
// ET pour la modale d'édition (les deux ont un conteneur
// .rating avec des .rating__star).
//
// TODO : Implémentez cette fonction
function setupRating(conteneurEtoiles, hiddenInput) {
    // Sélectionnez toutes les étoiles dans le conteneur
    // Pour chaque étoile, ajoutez un écouteur 'click'
    // Au clic :
    //   1. Lisez la valeur data-value de l'étoile cliquée
    //   2. Mettez à jour hiddenInput.value
    //   3. Pour chaque étoile : ajoutez la classe 'active' si sa
    //      data-value <= valeur choisie, sinon retirez-la
    //   4. Remplacez le texte : '★' si active, '☆' sinon
}

// TODO : Appelez setupRating pour les deux systèmes de notation :
// setupRating(ratingInput, hiddenNote);
// setupRating(editRating, editNote);


// ============================================================
// ÉTAPE 3 : Afficher les notifications toast
// ============================================================
//
// Créez une fonction qui affiche un message temporaire en bas
// à droite de l'écran (le conteneur #toast-container existe déjà).
//
// Rappels du cours (chapitre Créer et supprimer) :
//   - document.createElement
//   - classList.add
//   - textContent
//   - appendChild
//   - setTimeout pour supprimer après un délai
//
// TODO : Implémentez cette fonction
function toast(message, type = 'info') {
    // 1. Créez un <div>
    // 2. Ajoutez les classes 'toast' et `toast--${type}`
    //    (type peut être : 'success', 'danger', 'warning', 'info')
    // 3. Mettez le message en textContent
    // 4. Ajoutez-le au toastContainer
    // 5. Supprimez-le après 3 secondes (setTimeout + remove)
}


// ============================================================
// ÉTAPE 4 : Mettre à jour les statistiques
// ============================================================
//
// Cette fonction doit compter les films affichés et mettre à
// jour les 4 compteurs dans la barre de statistiques.
//
// Rappels du cours (chapitre Modifier / Traverser) :
//   - querySelectorAll('.film-card') pour obtenir toutes les cartes
//   - dataset pour lire les données stockées sur chaque carte
//   - textContent pour modifier le texte des compteurs
//
// TODO : Implémentez cette fonction
function updateStats() {
    // 1. Sélectionnez toutes les cartes .film-card dans filmsGrid
    // 2. Comptez le total
    // 3. Calculez la note moyenne (chaque carte a data-note)
    // 4. Comptez les favoris (cartes qui ont la classe 'is-fav' sur leur bouton favori,
    //    ou plus simple : comptez les .film-card__fav.is-fav)
    // 5. Comptez les films récents (data-annee >= 2020)
    // 6. Mettez à jour statTotal, statNoteMoyenne, statFavoris, statRecents
    //    avec textContent
    // 7. Affichez/masquez l'empty-state :
    //    - Si 0 films : emptyState.classList.remove('hidden')
    //    - Sinon : emptyState.classList.add('hidden')
}


// ============================================================
// ÉTAPE 5 : Créer une carte de film
// ============================================================
//
// C'est LE cœur de l'exercice. Cette fonction doit créer tout
// le HTML d'une carte de film et la retourner (sans l'insérer).
//
// Rappels du cours (chapitre Créer et supprimer) :
//   - document.createElement
//   - element.classList.add
//   - element.dataset.xxx = valeur
//   - element.textContent
//   - parent.appendChild(enfant)
//
// Structure attendue d'une carte :
//
// <div class="film-card" data-id="1" data-genre="sf" data-note="4" data-annee="2010" data-titre="Inception">
//     <div class="film-card__genre-bar film-card__genre-bar--sf"></div>
//     <div class="film-card__body">
//         <div class="film-card__top">
//             <span class="film-card__title">Inception</span>
//             <button class="film-card__fav">🤍</button>
//         </div>
//         <div class="film-card__meta">Christopher Nolan · 2010</div>
//         <span class="film-card__genre-tag film-card__genre-tag--sf">Science-Fiction</span>
//         <div class="film-card__rating">
//             <span class="star filled">★</span>
//             <span class="star filled">★</span>
//             <span class="star filled">★</span>
//             <span class="star filled">★</span>
//             <span class="star">☆</span>
//         </div>
//         <div class="film-card__actions">
//             <button class="btn btn--small btn--primary btn-edit">✏️ Modifier</button>
//             <button class="btn btn--small btn--danger btn-delete">🗑️ Supprimer</button>
//         </div>
//     </div>
// </div>
//
// TODO : Implémentez cette fonction

// Map des labels de genre pour l'affichage
const genreLabels = {
    action: 'Action',
    comedie: 'Comédie',
    drame: 'Drame',
    horreur: 'Horreur',
    sf: 'Science-Fiction',
    animation: 'Animation',
    thriller: 'Thriller',
    documentaire: 'Documentaire'
};

function creerCarteFilm({ id, titre, realisateur, annee, genre, note }) {
    // 1. Créez le conteneur principal .film-card
    //    Ajoutez les data attributes : data-id, data-genre, data-note, data-annee, data-titre
    //
    // 2. Créez la barre de couleur du genre :
    //    <div class="film-card__genre-bar film-card__genre-bar--{genre}">
    //
    // 3. Créez le body .film-card__body
    //
    // 4. Dans le body, créez :
    //    a) .film-card__top avec le titre et le bouton favori 🤍
    //    b) .film-card__meta avec "réalisateur · année"
    //    c) .film-card__genre-tag avec le label du genre (utilisez genreLabels)
    //    d) .film-card__rating avec 5 étoiles (★ remplies jusqu'à `note`, ☆ ensuite)
    //    e) .film-card__actions avec les boutons Modifier et Supprimer
    //
    // 5. Assemblez tout et retournez la carte

    return null; // TODO : retournez l'élément créé
}


// ============================================================
// ÉTAPE 6 : Valider et soumettre le formulaire d'ajout
// ============================================================
//
// Ajoutez un écouteur 'submit' sur le formulaire.
// Validez les champs, créez la carte et ajoutez-la à la grille.
//
// Rappels du cours (chapitre Formulaires / Événements) :
//   - event.preventDefault()
//   - element.value pour lire les champs
//   - classList.add('invalid') pour marquer un champ en erreur
//   - form.reset() pour vider le formulaire
//
// TODO : Implémentez la soumission du formulaire
//
// formAjout.addEventListener('submit', function(event) {
//     event.preventDefault();
//
//     // 1. Réinitialisez les erreurs (videz les .form__error, retirez .invalid)
//
//     // 2. Validez :
//     //    - titre ne doit pas être vide → "Le titre est obligatoire"
//     //    - réalisateur ne doit pas être vide → "Le réalisateur est obligatoire"
//     //    - année doit être entre 1895 et 2030 → "L'année doit être entre 1895 et 2030"
//
//     // 3. Si erreurs, arrêtez là
//
//     // 4. Créez la carte avec creerCarteFilm({ id: nextId++, titre, ... })
//
//     // 5. Ajoutez la carte à filmsGrid (appendChild ou prepend)
//
//     // 6. Mettez à jour les stats (updateStats)
//
//     // 7. Affichez un toast de succès : toast('Film ajouté !', 'success')
//
//     // 8. Réinitialisez le formulaire (form.reset)
//     //    + remettez les étoiles à 0 (retirez .active, remettez ☆, hiddenNote.value = '0')
// });


// ============================================================
// ÉTAPE 7 : Délégation d'événements sur la grille
// ============================================================
//
// Au lieu de poser un écouteur sur chaque bouton de chaque carte,
// posez UN SEUL écouteur sur filmsGrid et utilisez event.target
// pour déterminer quel bouton a été cliqué.
//
// C'est le pattern de DÉLÉGATION expliqué dans le cours.
//
// Rappels du cours (chapitre Événements) :
//   - event.target.closest('.classe') pour remonter au bon parent
//   - event.target.matches('.classe') ou classList.contains
//   - element.closest('.film-card').dataset.id → l'id du film
//
// TODO : Implémentez la délégation sur filmsGrid
//
// filmsGrid.addEventListener('click', function(event) {
//
//     // --- Suppression ---
//     // Si le clic est sur un .btn-delete (ou à l'intérieur) :
//     //   1. Trouvez la carte parente avec closest('.film-card')
//     //   2. Ajoutez la classe 'removing' (déclenche l'animation CSS)
//     //   3. Après 300ms (setTimeout), supprimez la carte (remove)
//     //   4. Mettez à jour les stats
//     //   5. Affichez un toast : toast('Film supprimé', 'danger')
//
//     // --- Favori ---
//     // Si le clic est sur un .film-card__fav :
//     //   1. Togglez la classe 'is-fav' sur le bouton
//     //   2. Changez le texte : '❤️' si favori, '🤍' sinon
//     //   3. Mettez à jour les stats
//
//     // --- Modifier ---
//     // Si le clic est sur un .btn-edit :
//     //   1. Trouvez la carte parente
//     //   2. Lisez les data-* de la carte
//     //   3. Remplissez la modale d'édition avec ces valeurs
//     //   4. Mettez à jour les étoiles dans la modale
//     //   5. Affichez la modale : modalOverlay.hidden = false
//
// });


// ============================================================
// ÉTAPE 8 : Modale d'édition — Sauvegarder les modifications
// ============================================================
//
// Quand le formulaire de la modale est soumis, mettez à jour
// la carte correspondante dans le DOM.
//
// Rappels du cours :
//   - querySelector avec un sélecteur d'attribut : `[data-id="${id}"]`
//   - Modifier textContent, dataset, classes
//
// TODO : Implémentez la sauvegarde
//
// formEdit.addEventListener('submit', function(event) {
//     event.preventDefault();
//
//     // 1. Récupérez l'id depuis editId.value
//     // 2. Trouvez la carte existante dans le DOM avec querySelector
//     // 3. Mettez à jour ses data-* attributes
//     // 4. Mettez à jour le titre, la meta, le genre-tag, les étoiles
//     // 5. Fermez la modale : modalOverlay.hidden = true
//     // 6. Mettez à jour les stats
//     // 7. toast('Film modifié !', 'success')
// });


// ============================================================
// ÉTAPE 9 : Fermer la modale
// ============================================================
//
// La modale doit se fermer quand on clique sur :
//   - Le bouton ✕ (modalClose)
//   - Le bouton "Annuler" (modalCancel)
//   - L'overlay en arrière-plan (modalOverlay, mais PAS la modale elle-même)
//   - La touche Échap (voir Étape 12)
//
// Rappels du cours :
//   - element.hidden = true pour cacher
//   - event.target === modalOverlay pour vérifier le clic sur l'overlay
//
// TODO : Ajoutez les écouteurs pour fermer la modale
// ...


// ============================================================
// ÉTAPE 10 : Recherche en temps réel
// ============================================================
//
// Quand l'utilisateur tape dans la barre de recherche, filtrez
// les cartes pour ne montrer que celles dont le titre ou le
// réalisateur contiennent le texte recherché.
//
// Rappels du cours (chapitre Événements / Modifier) :
//   - événement 'input' sur le champ de recherche
//   - element.classList.add('hidden') / .remove('hidden')
//   - dataset.titre pour lire le titre stocké
//   - String.toLowerCase() pour comparer sans casse
//
// TODO : Implémentez la recherche
//
// searchInput.addEventListener('input', function() {
//     const recherche = searchInput.value.toLowerCase().trim();
//     const cartes = filmsGrid.querySelectorAll('.film-card');
//
//     cartes.forEach(carte => {
//         // Lisez le titre et le réalisateur de la carte
//         // Si la recherche est contenue dans l'un des deux → montrer
//         // Sinon → cacher avec la classe 'hidden'
//     });
//
//     // Bonus : gérer l'empty-state si tous les résultats sont masqués
// });


// ============================================================
// ÉTAPE 11 : Filtrer par genre
// ============================================================
//
// Les boutons de filtre en haut permettent de ne montrer que
// les films d'un genre précis. Le bouton "Tous" montre tout.
//
// Rappels du cours :
//   - Délégation ou boucle sur les boutons
//   - classList pour activer/désactiver le bouton sélectionné
//   - dataset.genre sur chaque bouton
//   - dataset.genre sur chaque carte
//
// TODO : Implémentez le filtrage par genre
//
// filterButtons.forEach(btn => {
//     btn.addEventListener('click', function() {
//         // 1. Retirez filter-btn--active de tous les boutons
//         // 2. Ajoutez filter-btn--active sur le bouton cliqué
//         // 3. Lisez le genre sélectionné (btn.dataset.genre)
//         // 4. Pour chaque carte :
//         //    - Si genre === 'tous' ou carte.dataset.genre === genre → montrer
//         //    - Sinon → cacher avec .hidden
//     });
// });


// ============================================================
// ÉTAPE 12 : Trier les films
// ============================================================
//
// Le menu déroulant permet de changer l'ordre des cartes.
//
// Rappels du cours (chapitre Traverser / Créer-supprimer) :
//   - Convertir une NodeList en tableau : [...querySelectorAll(...)]
//   - Array.sort() avec une fonction de comparaison
//   - Retirer toutes les cartes puis les ré-ajouter dans le bon ordre
//   - Ou utiliser append(...tableauTrie) qui accepte plusieurs éléments
//
// TODO : Implémentez le tri
//
// triSelect.addEventListener('change', function() {
//     const critere = triSelect.value;
//     const cartes = [...filmsGrid.querySelectorAll('.film-card')];
//
//     cartes.sort((a, b) => {
//         switch (critere) {
//             case 'titre-az':
//                 // Comparez a.dataset.titre et b.dataset.titre
//                 break;
//             case 'titre-za':
//                 break;
//             case 'annee-asc':
//                 break;
//             case 'annee-desc':
//                 break;
//             case 'note-desc':
//                 break;
//             case 'note-asc':
//                 break;
//             default: // date-ajout
//                 // Comparez par data-id (ordre d'ajout)
//                 break;
//         }
//         return 0;
//     });
//
//     // Réinsérez les cartes triées :
//     // cartes.forEach(c => filmsGrid.appendChild(c));
//     // Ou : filmsGrid.append(...cartes);
// });


// ============================================================
// ÉTAPE 13 : Mode sombre
// ============================================================
//
// Un clic sur le bouton 🌙 doit toggler la classe 'dark' sur
// le <body>, et changer l'icône du bouton (🌙 ↔ ☀️).
//
// Rappels du cours :
//   - document.body.classList.toggle('dark')
//   - textContent pour changer l'icône
//
// TODO : Implémentez le dark mode
// ...


// ============================================================
// ÉTAPE 14 : Raccourcis clavier
// ============================================================
//
// Ajoutez un écouteur 'keydown' sur document pour gérer :
//   - 'n' ou 'N' → focus sur le champ titre du formulaire d'ajout
//   - '/' → focus sur la barre de recherche (+ preventDefault pour
//            ne pas écrire '/' dans le champ)
//   - 'd' ou 'D' → toggler le dark mode
//   - 'Escape' → fermer la modale (si ouverte)
//   - '?' → afficher/masquer l'aide des raccourcis
//
// ATTENTION : les raccourcis ne doivent PAS se déclencher si
// l'utilisateur est en train de taper dans un champ de saisie !
// Vérifiez que event.target n'est pas un input/textarea/select.
//
// Rappels du cours (chapitre Événements) :
//   - event.key pour identifier la touche
//   - event.target.tagName pour vérifier le type d'élément
//   - element.focus() pour donner le focus à un champ
//
// TODO : Implémentez les raccourcis clavier
// ...


// ============================================================
// ÉTAPE 15 (BONUS) : Pré-remplir quelques films
// ============================================================
//
// Pour que la page ne soit pas vide au démarrage, ajoutez
// quelques films par défaut.
//
// TODO : Créez un tableau de films et ajoutez-les au DOM

/*
const filmsInitiaux = [
    { titre: 'Inception', realisateur: 'Christopher Nolan', annee: 2010, genre: 'sf', note: 5 },
    { titre: 'Le Parrain', realisateur: 'Francis Ford Coppola', annee: 1972, genre: 'drame', note: 5 },
    { titre: 'Spirited Away', realisateur: 'Hayao Miyazaki', annee: 2001, genre: 'animation', note: 5 },
    { titre: 'Pulp Fiction', realisateur: 'Quentin Tarantino', annee: 1994, genre: 'thriller', note: 4 },
    { titre: 'The Dark Knight', realisateur: 'Christopher Nolan', annee: 2008, genre: 'action', note: 5 },
    { titre: 'Parasite', realisateur: 'Bong Joon-ho', annee: 2019, genre: 'thriller', note: 4 },
];

filmsInitiaux.forEach(film => {
    const carte = creerCarteFilm({ id: nextId++, ...film });
    filmsGrid.appendChild(carte);
});

updateStats();
*/


// ============================================================
// ✅ Bravo si vous êtes arrivé(e) ici !
// ============================================================
//
// Idées pour aller plus loin (optionnel) :
//   - Sauvegarder les films dans localStorage pour les retrouver
//     après un rechargement de page
//   - Ajouter un compteur de films par genre
//   - Ajouter une confirmation avant la suppression (modale)
//   - Implémenter le drag & drop pour réordonner les cartes
//   - Ajouter une vue "liste" en plus de la vue "grille"
//   - Ajouter un champ "synopsis" avec affichage tronqué
