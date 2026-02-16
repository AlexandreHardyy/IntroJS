/**
 * ==========================================
 * EXERCICE RÉCAPITULATIF : TODO LIST EN CONSOLE
 * ==========================================
 * 
 * Objectif : Créer une application de gestion de tâches (Todo List) dans la console,
 * en combinant vos connaissances de :
 * - Programmation Orientée Objet (Classes, Constructeur, Méthodes, Getters/Setters)
 * - Les bases de JavaScript (Variables, Boucles, Conditions, Fonctions, Tableaux)
 * - Les méthodes fonctionnelles de tableaux (filter, map, find, etc.)
 * 
 * ==========================================
 * CONSIGNE
 * ==========================================
 * 
 * 1. Créez une classe `Tache` :
 *    - Propriétés : 
 *        • id (nombre, auto-incrémenté — utiliser un compteur statique)
 *        • titre (string)
 *        • description (string, optionnelle, vide par défaut)
 *        • faite (boolean, false par défaut)
 *        • dateCreation (Date, initialisée automatiquement)
 *    - Méthodes :
 *        • basculerStatut() : inverse la propriété `faite`
 *        • toString() : retourne une chaîne lisible de la tâche
 *          Exemple : "[✓] #1 - Faire les courses (Créée le 16/02/2026)"
 *                    "[ ] #2 - Réviser le JS (Créée le 16/02/2026)"
 * 
 * 2. Créez une classe `TodoList` :
 *    - Propriétés : 
 *        • nom (string, le nom de la liste)
 *        • taches (tableau de Tache)
 *    - Méthodes :
 *        • ajouterTache(titre, description) : crée et ajoute une nouvelle Tache
 *        • supprimerTache(id) : supprime la tâche ayant cet id
 *        • trouverTache(id) : retourne la tâche correspondant à l'id, ou null
 *        • marquerFaite(id) : bascule le statut de la tâche
 *        • listerTaches() : affiche toutes les tâches (console.log)
 *        • listerFaites() : affiche uniquement les tâches terminées
 *        • listerAFaire() : affiche uniquement les tâches non terminées
 *        • compter() : retourne un objet { total, faites, aFaire }
 *        • viderTerminees() : supprime toutes les tâches marquées comme faites
 * 
 * 3. Créez une boucle interactive dans la fonction `main()` :
 *    Utilisez la fonction `input()` importée depuis './input.js' pour interagir avec l'utilisateur.
 *    
 *    Le menu principal doit afficher :
 *    ┌─────────────────────────────────┐
 *    │  📋 MA TODO LIST                │
 *    │                                 │
 *    │  1. Ajouter une tâche           │
 *    │  2. Voir toutes les tâches      │
 *    │  3. Voir les tâches à faire     │
 *    │  4. Voir les tâches terminées   │
 *    │  5. Marquer une tâche faite     │
 *    │  6. Supprimer une tâche         │
 *    │  7. Vider les tâches terminées  │
 *    │  8. Voir les statistiques       │
 *    │  9. Quitter                     │
 *    └─────────────────────────────────┘
 * 
 *    L'application tourne en boucle jusqu'à ce que l'utilisateur choisisse "9".
 * 
 * ==========================================
 * INDICES
 * ==========================================
 * 
 * - Pour le compteur auto-incrémenté, pensez aux propriétés `static`
 * - Utilisez `filter()` pour lister les tâches faites/à faire
 * - Utilisez `find()` pour trouver une tâche par id
 * - Utilisez `async/await` pour la boucle interactive (car `input()` est asynchrone)
 * - La boucle principale peut être un `while(true)` avec un `break` sur le choix "9"
 * 
 * ==========================================
 * COMMENT EXÉCUTER CE FICHIER ?
 * ==========================================
 * 
 * 1. Ouvrez un terminal
 * 2. Placez-vous dans le dossier RECAP_POO_BASE :
 *    cd exercices/RECAP_POO_BASE
 * 3. Exécutez :
 *    npm start
 *    (ou directement : node index.js)
 * 
 * ==========================================
 * BONUS (si vous avez fini en avance)
 * ==========================================
 * 
 * - Ajouter une priorité aux tâches (haute, moyenne, basse)
 * - Permettre de modifier le titre/description d'une tâche
 * - Ajouter un tri des tâches (par date, par priorité, par statut)
 * - Ajouter des catégories/tags aux tâches
 * - Ajouter une recherche par titre
 * 
 * ==========================================
 */


// ÉCRIVEZ VOS CLASSES ICI (Tache et TodoList)




// Fonction principale
async function main() {
    console.log("🚀 Bienvenue dans votre Todo List !\n");

    // ÉCRIVEZ VOTRE BOUCLE INTERACTIVE ICI

}

// Lancer l'application
main();
