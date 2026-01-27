/**
 * EXERCICE DE SYNTHÈSE : GESTION DE PERSONNAGE RPG
 * 
 * Objectif : Créer un petit programme de gestion de personnage en utilisant :
 * - Les variables (const / let)
 * - Les types primitifs (String, Number, Boolean)
 * - Les structures de contrôle (if / else, switch, opérateur ternaire)
 * - Les tableaux (Tableaux simples)
 * - Les boucles (for)
 * - Les fonctions (Classiques et Fléchées)
 * 
 * ==========================================
 * COMMENT EXECUTER CE FICHIER ?
 * ==========================================
 * 
 * 1. Ouvrez un terminal
 * 2. Placez-vous à la racine du projet ou dans le dossier exercices
 * 3. Exécutez la commande suivante :
 *    node exercices/les_fondations/SPE_01_base.js
 *    (Adaptez le chemin si nécessaire selon votre position)
 * 
 * Vous verrez le résultat de vos console.log() s'afficher dans le terminal.
 * Essayez de coder chaque étape et de vérifier le résultat en exécutant le fichier.
 * 
 * ==========================================
 */

console.log("--- DÉBUT DE LA PARTIE ---\n");

// ------------------------------------------------------------------
// ÉTAPE 1 : VARIABLES & TYPES
// ------------------------------------------------------------------
// 1. Créez une constante 'nomHero' contenant le nom de votre héros (ex: "Geralt").
// 2. Créez une variable 'niveau' initialisée à 1.
// 3. Créez une variable 'pointsDeVie' initialisée à 100.
// 4. Créez une variable 'estEnVie' (booléen) initialisée à true.
// 5. Affichez dans la console une phrase de présentation (ex: "Héros: Geralt | Niveau: 1 | PV: 100").

// ... Code ici ...


// ------------------------------------------------------------------
// ÉTAPE 2 : CONDITIONS & TERNIARE
// ------------------------------------------------------------------
// 1. Créez une variable 'degats' égale à 25.
// 2. Soustrayez 'degats' aux 'pointsDeVie' du héros.
// 3. Utilisez une condition (if/else) :
//    - Si 'pointsDeVie' <= 0 : Mettez 'estEnVie' à false et affichez "Le héros est tombé au combat."
//    - Sinon : Affichez "Le héros a survécu avec [X] PV."
// 4. Utilisez un opérateur ternaire pour définir une variable 'statut' :
//    - Si 'estEnVie' est vrai, 'statut' vaut "Actif".
//    - Sinon, 'statut' vaut "KO".
// 5. Affichez le statut.

// ... Code ici ...


// ------------------------------------------------------------------
// ÉTAPE 3 : TABLEAUX (INVENTAIRE)
// ------------------------------------------------------------------
// 1. Créez un tableau 'inventaire' contenant : "Épée", "Bouclier", "Potion".
// 2. Affichez la taille de l'inventaire.
// 3. Ajoutez "Arc" à la fin de l'inventaire (utilisez push).
// 4. Remplacez le premier élément ("Épée") par "Hache de guerre" (accès par index).

// ... Code ici ...


// ------------------------------------------------------------------
// ÉTAPE 4 : BOUCLES
// ------------------------------------------------------------------
// 1. Utilisez une boucle 'for' pour parcourir le tableau 'inventaire'.
// 2. Pour chaque objet, affichez : "Objet [index] : [Nom de l'objet]".

// ... Code ici ...


// ------------------------------------------------------------------
// ÉTAPE 5 : FONCTIONS (CLASSIQUES)
// ------------------------------------------------------------------
// 1. Créez une fonction 'soigner' qui prend en paramètre un montant de soins (ex: 20).
// 2. Dans la fonction :
//    - Ajoutez le montant aux 'pointsDeVie'.
//    - Si 'pointsDeVie' dépasse 100, ramenez-le à 100 (plafond).
//    - Affichez "Le héros a été soigné. PV actuels : [pointsDeVie]".
// 3. Appelez cette fonction avec la valeur 30.

// ... Code ici ...


// ------------------------------------------------------------------
// ÉTAPE 6 : FONCTIONS FLÉCHÉES & MÉTHODES
// ------------------------------------------------------------------
// 1. Créez une fonction fléchée 'ajouterExperience' qui prend 'xp' en paramètre.
// 2. Dans la fonction, ajoutez l'xp au score global (vous pouvez créer une variable 'experience' avant).
// 3. (Optionnel - Avancé) Utilisez la méthode .includes() sur l'inventaire pour vérifier si "Potion" est présent.
//    Si oui, affichez "Potion prête à l'emploi !".

// ... Code ici ...


console.log("\n--- FIN DE LA PARTIE ---");
