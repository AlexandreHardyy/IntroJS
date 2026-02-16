/**
 * Exercice 1 : Sélection d'éléments
 * 
 * Consigne : Implémentez les fonctions suivantes qui simulent des opérations
 * de sélection sur le DOM. Ici on travaille avec des structures de données
 * pour tester la logique de sélection.
 */

/**
 * 1. Écrivez une fonction `trouverParId` qui prend un tableau d'objets 
 * (chaque objet a une propriété `id` et `text`) et un id, 
 * et retourne l'objet correspondant ou null.
 * 
 * Exemple : trouverParId([{id: 'a', text: 'Hello'}], 'a') → {id: 'a', text: 'Hello'}
 */
export function trouverParId(elements, id) {
    // Écrivez votre code ici
    return null;
}

/**
 * 2. Écrivez une fonction `trouverParClasse` qui prend un tableau d'objets
 * (chaque objet a une propriété `classes` qui est un tableau de strings, et `text`)
 * et un nom de classe, et retourne TOUS les objets qui possèdent cette classe.
 * 
 * Exemple : trouverParClasse([{classes: ['a', 'b'], text: 'X'}, {classes: ['c'], text: 'Y'}], 'a')
 *   → [{classes: ['a', 'b'], text: 'X'}]
 */
export function trouverParClasse(elements, classe) {
    // Écrivez votre code ici
    return [];
}

/**
 * 3. Écrivez une fonction `trouverParTag` qui prend un tableau d'objets
 * (chaque objet a une propriété `tag` et `text`)
 * et un nom de tag, et retourne tous les objets avec ce tag.
 * 
 * Exemple : trouverParTag([{tag: 'p', text: 'X'}, {tag: 'div', text: 'Y'}], 'p')
 *   → [{tag: 'p', text: 'X'}]
 */
export function trouverParTag(elements, tag) {
    // Écrivez votre code ici
    return [];
}
