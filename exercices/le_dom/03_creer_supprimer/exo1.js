/**
 * Exercice 1 : Créer et structurer des éléments
 * 
 * Consigne : Implémentez des fonctions qui simulent la création
 * d'éléments DOM sous forme d'objets JavaScript.
 * 
 * Un élément a la structure : { tag, id, classes: [], text: '', attributes: {}, children: [] }
 */

/**
 * 1. Écrivez une fonction `creerElement` qui prend un tag, un texte, et un objet d'options
 * optionnel { id, classes, attributes } et retourne un objet élément.
 * 
 * Exemple :
 * creerElement('p', 'Hello', { id: 'msg', classes: ['info'] })
 * → { tag: 'p', id: 'msg', classes: ['info'], text: 'Hello', attributes: {}, children: [] }
 * 
 * Si aucune option n'est fournie, id vaut '', classes vaut [], attributes vaut {}.
 */
export function creerElement(tag, text, options = {}) {
    // Écrivez votre code ici
    return null;
}

/**
 * 2. Écrivez une fonction `ajouterEnfant` qui prend un élément parent et un élément enfant,
 * et retourne une copie du parent avec l'enfant ajouté à la fin de ses children.
 */
export function ajouterEnfant(parent, enfant) {
    // Écrivez votre code ici
    return null;
}

/**
 * 3. Écrivez une fonction `supprimerEnfant` qui prend un élément parent et un index,
 * et retourne une copie du parent sans l'enfant à cet index.
 * Si l'index est invalide (négatif ou >= nombre d'enfants), retourner une copie non modifiée.
 */
export function supprimerEnfant(parent, index) {
    // Écrivez votre code ici
    return null;
}

/**
 * 4. Écrivez une fonction `insererAvant` qui prend un parent, un nouvel enfant, et un index.
 * Insère le nouvel enfant AVANT l'enfant situé à l'index donné.
 * Si l'index est >= nombre d'enfants, l'ajouter à la fin.
 * Retourne une copie du parent modifié.
 */
export function insererAvant(parent, enfant, index) {
    // Écrivez votre code ici
    return null;
}
