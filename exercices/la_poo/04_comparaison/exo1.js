/**
 * Exercice : Comparaison d'objets
 * 
 * Objectif : Comprendre la différence entre référence et valeur, et implémenter une comparaison profonde.
 */

/**
 * 1. Comprendre les références
 * 
 * Écrivez une fonction 'sontLesMemesReferences' qui prend deux objets en paramètre
 * et retourne true s'ils pointent vers la même référence mémoire, false sinon.
 */
export function sontLesMemesReferences(obj1, obj2) {
  // Votre code ici
}

/**
 * 2. Comparaison profonde simplifiée
 * 
 * Écrivez une fonction 'estIdentique' qui prend deux objets en paramètre.
 * La fonction doit retourner true si les deux objets ont les mêmes propriétés et valeurs (au premier niveau uniquement pour l'instant, ou récursif si vous y arrivez !).
 * 
 * Pour cet exercice, on va se contenter d'une comparaison via JSON.stringify pour simplifier,
 * bien que ce ne soit pas la méthode parfaite en prod.
 */
export function estIdentique(obj1, obj2) {
  // Votre code ici
}

/**
 * 3. Comparaison manuelle (Challenge)
 * 
 * Écrivez une fonction 'estIdentiqueComplet' qui compare deux objets propriété par propriété.
 * Elle doit gérer les objets imbriqués (récursivité).
 * 
 * Indices :
 * - Vérifiez si ce sont des objets
 * - Comparez le nombre de clés
 * - Parcourez les clés de l'un et comparez les valeurs avec l'autre
 * - Si une valeur est elle-même un objet, appelez la fonction récursivement
 */
export function estIdentiqueComplet(obj1, obj2) {
  // Votre code ici
  // Pour l'aider, voici le début de la structure :
  // if (obj1 === obj2) return true;
  // if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) return false;
  
}
