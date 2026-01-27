/**
 * EXERCICE DE SYNTHÈSE : SYSTÈME DE GESTION DE BIBLIOTHÈQUE
 * 
 * Objectif : Modéliser une petite bibliothèque en utilisant la Programmation Orientée Objet.
 * Vous devez utiliser :
 * - Des Classes (Class)
 * - Des Constructeurs (constructor)
 * - Des Méthodes
 * - Des Objets / Instanciation
 * - (Bonus) Getter / Setter si pertinent
 * 
 * ==========================================
 * CONSIGNE GLOBALE
 * ==========================================
 * 
 * Imaginez un système où vous avez des "Livres" et des "Utilisateurs".
 * 
 * 1. Créez une classe `Livre` :
 *    - Propriétés : titre, auteur, une propriété pour savoir s'il est disponible.
 *    - Méthodes : pour changer son statut de disponibilité.
 * 
 * 2. Créez une classe `Utilisateur` :
 *    - Propriétés : nom, prénom, liste des livres empruntés.
 *    - Méthode `emprunter(livre)` : 
 *         - Vérifie si le livre est disponible.
 *         - Si oui, le livre devient indisponible, et il est ajouté à la liste de l'utilisateur.
 *         - Sinon, afficher une erreur.
 *    - Méthode `rendre(livre)` :
 *         - Retire le livre de la liste de l'utilisateur.
 *         - Le livre redevient disponible.
 * 
 * A VOUS DE JOUER :
 * Implémentez ces classes, instanciez 2 ou 3 livres (ex: "Harry Potter", "Le Seigneur des Anneaux") 
 * et un utilisateur (ex: vous-même).
 * Simulez un scénario : l'utilisateur emprunte un livre, essaie d'emprunter un livre déjà pris, puis rend le premier.
 * Utilisez des console.log() pour afficher l'état de l'utilisateur et des livres à chaque étape.
 * 
 * ==========================================
 * COMMENT EXECUTER CE FICHIER ?
 * ==========================================
 * 
 * 1. Ouvrez un terminal
 * 2. Placez-vous à la racine du projet
 * 3. Exécutez la commande suivante :
 *    node exercices/la_poo/SPE_02_opp.js
 * 
 * ==========================================
 */

console.log("--- DÉBUT DE LA SIMULATION BIBLIOTHÈQUE ---\n");

// ÉCRIVEZ VOTRE CODE ICI




console.log("\n--- FIN DE LA SIMULATION ---");
