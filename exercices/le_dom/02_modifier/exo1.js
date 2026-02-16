/**
 * Exercice 1 : Modifier du contenu
 * 
 * Consigne : Implémentez des fonctions qui simulent la modification
 * de contenu d'éléments DOM.
 * 
 * Un élément a la structure : { tag, id?, classes: [], text: '', attributes: {}, children: [] }
 */

/**
 * 1. Écrivez une fonction `changerTexte` qui prend un élément et un nouveau texte,
 * et retourne une COPIE de l'élément avec le texte modifié.
 * (Ne modifiez pas l'objet original — principe d'immutabilité)
 */
export function changerTexte(element, nouveauTexte) {
    // Écrivez votre code ici
    return null;
}

/**
 * 2. Écrivez une fonction `ajouterClasse` qui prend un élément et un nom de classe,
 * et retourne une copie de l'élément avec la classe ajoutée dans son tableau `classes`.
 * La classe ne doit pas être ajoutée si elle est déjà présente.
 */
export function ajouterClasse(element, classe) {
    // Écrivez votre code ici
    return null;
}

/**
 * 3. Écrivez une fonction `supprimerClasse` qui prend un élément et un nom de classe,
 * et retourne une copie de l'élément sans cette classe.
 */
export function supprimerClasse(element, classe) {
    // Écrivez votre code ici
    return null;
}

/**
 * 4. Écrivez une fonction `toggleClasse` qui prend un élément et un nom de classe.
 * Si la classe est présente, la retirer. Sinon, l'ajouter.
 * Retourne une copie de l'élément modifié.
 */
export function toggleClasse(element, classe) {
    // Écrivez votre code ici
    return null;
}
