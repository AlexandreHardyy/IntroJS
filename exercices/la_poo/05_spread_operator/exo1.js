/**
 * Exercice : Le Spread Operator
 * 
 * Objectif : Maîtriser la copie, la fusion et la modification d'objets via le spread operator (...).
 */

/**
 * 1. Copie superficielle
 * 
 * Écrivez une fonction 'clonerObjet' qui prend un objet en entrée
 * et retourne un NOUVEL objet contenant les mêmes propriétés (copie superficielle).
 * Vous devez utiliser le spread operator.
 */
export function clonerObjet(obj) {
  // Votre code ici
}

/**
 * 2. Fusion d'objets
 * 
 * Écrivez une fonction 'fusionner' qui prend deux objets 'a' et 'b'
 * et retourne un nouvel objet contenant les propriétés de 'a' et 'b'.
 * Si une propriété existe dans les deux, c'est celle de 'b' qui doit prévaloir.
 */
export function fusionner(a, b) {
  // Votre code ici
}

/**
 * 3. Modification immuable
 * 
 * Écrivez une fonction 'ajouterPropriete' qui prend un objet 'user', une clé 'key' et une valeur 'value'.
 * La fonction doit retourner un NOUVEL objet (sans modifier l'original) qui contient toutes les propriétés de 'user'
 * plus la nouvelle propriété.
 * 
 * Astuce : { ...user, [key]: value }
 */
export function ajouterPropriete(user, key, value) {
  // Votre code ici
}

/**
 * 4. Extraction (Rest Operator)
 * 
 * Écrivez une fonction 'sansMotDePasse' qui prend un objet 'user' contenant une propriété 'password'.
 * La fonction doit retourner un nouvel objet contenant toutes les propriétés de 'user' SAUF 'password'.
 * Utilisez la déstructuration avec le rest operator (...).
 */
export function sansMotDePasse(user) {
  // Votre code ici
}
