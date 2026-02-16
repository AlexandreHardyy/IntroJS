/**
 * Exercice 2 : Cloner et remplacer
 * 
 * Consigne : Implémentez des fonctions qui simulent le clonage
 * et le remplacement d'éléments.
 * 
 * Un élément a la structure : { tag, id, classes: [], text: '', attributes: {}, children: [] }
 */

/**
 * 1. Écrivez une fonction `clonerElement` qui prend un élément et un booléen `profond`.
 * - Si `profond` est false : retourne une copie de l'élément SANS ses children (children = []).
 * - Si `profond` est true : retourne une copie COMPLÈTE incluant tous les children (récursivement).
 * 
 * IMPORTANT : les objets retournés doivent être des COPIES (pas de référence partagée).
 */
export function clonerElement(element, profond) {
    // Écrivez votre code ici
    return null;
}

/**
 * 2. Écrivez une fonction `remplacerEnfant` qui prend un parent, un index, et un nouvel élément.
 * Retourne une copie du parent avec l'enfant à l'index donné remplacé par le nouvel élément.
 * Si l'index est invalide, retourner une copie non modifiée.
 */
export function remplacerEnfant(parent, index, nouveauElement) {
    // Écrivez votre code ici
    return null;
}

/**
 * 3. Écrivez une fonction `viderEnfants` qui prend un élément
 * et retourne une copie de l'élément avec un tableau children vide.
 */
export function viderEnfants(element) {
    // Écrivez votre code ici
    return null;
}
