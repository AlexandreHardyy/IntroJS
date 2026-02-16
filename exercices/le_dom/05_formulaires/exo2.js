/**
 * Exercice 2 : Manipulation de FormData simulée
 * 
 * Consigne : Implémentez une classe `FormulaireData` qui simule
 * le comportement de l'objet FormData du navigateur.
 */

export class FormulaireData {
    /**
     * Le constructeur prend un objet optionnel représentant les champs initiaux.
     * Exemple : new FormulaireData({ nom: 'Alice', email: 'alice@mail.com' })
     */
    constructor(donneesInitiales = {}) {
        // Écrivez votre code ici
    }

    /**
     * Retourne la valeur associée à la clé, ou null si elle n'existe pas.
     */
    get(cle) {
        // Écrivez votre code ici
        return null;
    }

    /**
     * Définit une valeur pour une clé (écrase si elle existe déjà).
     */
    set(cle, valeur) {
        // Écrivez votre code ici
    }

    /**
     * Ajoute une valeur pour une clé.
     * Si la clé existe déjà, la valeur est ajoutée (la clé peut avoir plusieurs valeurs).
     */
    append(cle, valeur) {
        // Écrivez votre code ici
    }

    /**
     * Retourne true si la clé existe, false sinon.
     */
    has(cle) {
        // Écrivez votre code ici
        return false;
    }

    /**
     * Supprime la clé et toutes ses valeurs.
     */
    delete(cle) {
        // Écrivez votre code ici
    }

    /**
     * Retourne toutes les valeurs associées à une clé sous forme de tableau.
     * Si la clé n'existe pas, retourne un tableau vide.
     */
    getAll(cle) {
        // Écrivez votre code ici
        return [];
    }

    /**
     * Retourne un objet simple { clé: valeur } avec toutes les données.
     * Si une clé a plusieurs valeurs, seule la première est conservée.
     */
    toObject() {
        // Écrivez votre code ici
        return {};
    }
}
