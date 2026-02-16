/**
 * Exercice 2 : Modifier les attributs
 * 
 * Consigne : Implémentez des fonctions qui simulent la modification
 * d'attributs d'éléments DOM.
 * 
 * Un élément a la structure : { tag, id?, classes: [], text: '', attributes: {}, children: [] }
 */

/**
 * 1. Écrivez une fonction `setAttribute` qui prend un élément, un nom d'attribut et une valeur,
 * et retourne une copie de l'élément avec l'attribut ajouté/modifié.
 */
export function setAttribute(element, nom, valeur) {
    // Écrivez votre code ici
    return null;
}

/**
 * 2. Écrivez une fonction `removeAttribute` qui prend un élément et un nom d'attribut,
 * et retourne une copie de l'élément sans cet attribut.
 */
export function removeAttribute(element, nom) {
    // Écrivez votre code ici
    return null;
}

/**
 * 3. Écrivez une fonction `getDataAttribute` qui prend un élément et un nom de donnée (sans le préfixe "data-"),
 * et retourne la valeur de l'attribut `data-{nom}` depuis l'objet `attributes`.
 * Les attributs data sont stockés avec le préfixe "data-" dans attributes.
 * Retourne undefined si l'attribut n'existe pas.
 * 
 * Exemple : getDataAttribute({ attributes: { "data-id": "42" } }, "id") → "42"
 */
export function getDataAttribute(element, nom) {
    // Écrivez votre code ici
    return undefined;
}

/**
 * 4. Écrivez une fonction `hasAttribute` qui prend un élément et un nom d'attribut,
 * et retourne true si l'attribut existe, false sinon.
 */
export function hasAttribute(element, nom) {
    // Écrivez votre code ici
    return false;
}
