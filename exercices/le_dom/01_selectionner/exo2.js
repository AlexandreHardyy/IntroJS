/**
 * Exercice 2 : Sélection avancée
 * 
 * Consigne : Implémentez les fonctions qui simulent des sélections avancées
 * sur une structure arborescente (arbre DOM simplifié).
 * 
 * Un nœud a la structure suivante :
 * { tag: 'div', id: 'app', classes: ['container'], children: [...], text: '' }
 */

/**
 * 1. Écrivez une fonction `trouverPremier` qui prend un arbre (nœud racine)
 * et un nom de tag, et retourne LE PREMIER nœud trouvé avec ce tag
 * en parcourant l'arbre en profondeur (depth-first).
 * Retourne null si aucun nœud ne correspond.
 * 
 * Exemple :
 * const arbre = { tag: 'div', children: [{ tag: 'p', children: [], text: 'Hello' }] };
 * trouverPremier(arbre, 'p') → { tag: 'p', children: [], text: 'Hello' }
 */
export function trouverPremier(noeud, tag) {
    // Écrivez votre code ici
    return null;
}

/**
 * 2. Écrivez une fonction `trouverTous` qui prend un arbre (nœud racine)
 * et un nom de tag, et retourne TOUS les nœuds avec ce tag
 * en parcourant l'arbre en profondeur.
 */
export function trouverTous(noeud, tag) {
    // Écrivez votre code ici
    return [];
}

/**
 * 3. Écrivez une fonction `trouverParent` qui prend un arbre, un id d'enfant,
 * et retourne le nœud parent de l'élément ayant cet id. Retourne null si non trouvé.
 * 
 * Chaque nœud peut avoir une propriété `id`.
 */
export function trouverParent(noeud, idEnfant) {
    // Écrivez votre code ici
    return null;
}
