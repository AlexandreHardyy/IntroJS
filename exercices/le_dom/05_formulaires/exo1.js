/**
 * Exercice 1 : Validation de formulaire
 * 
 * Consigne : Implémentez des fonctions de validation de formulaire.
 * Ces fonctions prennent des valeurs et retournent des résultats de validation.
 */

/**
 * 1. Écrivez une fonction `validerEmail` qui prend une chaîne
 * et retourne un objet { valide: boolean, message: string }.
 * Un email est valide s'il contient un @ et un . après le @.
 * Si invalide, le message doit être 'Email invalide'.
 * Si valide, le message doit être ''.
 */
export function validerEmail(email) {
    // Écrivez votre code ici
    return { valide: false, message: '' };
}

/**
 * 2. Écrivez une fonction `validerMotDePasse` qui prend un mot de passe
 * et retourne { valide: boolean, message: string }.
 * Le mot de passe doit :
 * - Avoir au moins 8 caractères
 * - Contenir au moins une majuscule
 * - Contenir au moins un chiffre
 * En cas d'erreur, le message doit indiquer la PREMIÈRE règle non respectée :
 * - 'Le mot de passe doit contenir au moins 8 caractères'
 * - 'Le mot de passe doit contenir au moins une majuscule'
 * - 'Le mot de passe doit contenir au moins un chiffre'
 */
export function validerMotDePasse(mdp) {
    // Écrivez votre code ici
    return { valide: false, message: '' };
}

/**
 * 3. Écrivez une fonction `validerFormulaire` qui prend un objet
 * { nom: string, email: string, age: number }
 * et retourne un objet { valide: boolean, erreurs: { nom?: string, email?: string, age?: string } }.
 * 
 * Règles :
 * - nom : obligatoire, au moins 2 caractères → 'Le nom est obligatoire' ou 'Le nom doit contenir au moins 2 caractères'
 * - email : doit être valide (réutilisez validerEmail) → 'Email invalide'
 * - age : doit être un nombre entre 1 et 150 inclus → 'L\'âge doit être entre 1 et 150'
 * 
 * L'objet `erreurs` ne doit contenir que les champs en erreur.
 * `valide` est true seulement si `erreurs` est vide.
 */
export function validerFormulaire(donnees) {
    // Écrivez votre code ici
    return { valide: false, erreurs: {} };
}
