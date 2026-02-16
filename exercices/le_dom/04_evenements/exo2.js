/**
 * Exercice 2 : Délégation d'événements et propagation
 * 
 * Consigne : Implémentez des fonctions qui simulent la propagation
 * d'événements dans un arbre DOM simplifié.
 * 
 * Un nœud a la structure : { tag, id, children: [], handlers: {} }
 * `handlers` est un objet dont les clés sont des types d'événements
 * et les valeurs sont des tableaux de fonctions callbacks.
 */

/**
 * 1. Écrivez une fonction `trouverChemin` qui prend un arbre (racine) et un id cible,
 * et retourne le chemin (tableau de nœuds) depuis la racine jusqu'au nœud cible.
 * Le chemin inclut la racine ET le nœud cible.
 * Retourne un tableau vide si le nœud n'est pas trouvé.
 * 
 * Exemple :
 * arbre = { id: 'root', children: [{ id: 'child', children: [] }] }
 * trouverChemin(arbre, 'child') → [noeudRoot, noeudChild]
 */
export function trouverChemin(racine, idCible) {
    // Écrivez votre code ici
    return [];
}

/**
 * 2. Écrivez une fonction `simulerBubbling` qui prend un arbre (racine), un id cible,
 * et un type d'événement, et retourne un tableau contenant les ids des nœuds
 * dont les handlers seraient exécutés lors du bubbling.
 * 
 * Le bubbling commence par le nœud cible et remonte vers la racine.
 * Seuls les nœuds qui ont un handler pour ce type d'événement sont inclus dans le résultat.
 * 
 * Exemple :
 * Si le chemin est [racine, parent, cible] et que parent et cible ont un handler 'click',
 * le résultat serait ['cible', 'parent'] (du plus profond au plus haut).
 */
export function simulerBubbling(racine, idCible, typeEvenement) {
    // Écrivez votre code ici
    return [];
}

/**
 * 3. Écrivez une fonction `deleguer` qui prend un tableau d'éléments 
 * (chaque élément a { id, tag, text }), un tag cible, et un callback.
 * Elle exécute le callback uniquement pour les éléments dont le tag correspond au tag cible.
 * Le callback reçoit l'élément en paramètre.
 * Retourne le nombre d'éléments pour lesquels le callback a été exécuté.
 * 
 * Cela simule le pattern : parent.addEventListener('click', (e) => { if (e.target.matches(tag)) ... })
 */
export function deleguer(elements, tagCible, callback) {
    // Écrivez votre code ici
    return 0;
}
