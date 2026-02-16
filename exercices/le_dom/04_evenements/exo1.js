/**
 * Exercice 1 : Gestion d'événements (simulation)
 * 
 * Consigne : Implémentez un mini système d'événements (EventEmitter simplifié)
 * pour comprendre comment fonctionne addEventListener / removeEventListener.
 * 
 * Vous devez implémenter la classe `GestionnaireEvenements` qui simule
 * le comportement du système d'événements du DOM.
 */

export class GestionnaireEvenements {
    constructor() {
        // Initialisez une structure pour stocker les écouteurs
        // Conseil : un objet dont les clés sont les types d'événements
        // et les valeurs sont des tableaux de fonctions.
    }

    /**
     * Ajoute un écouteur pour un type d'événement donné.
     * @param {string} type - Le type d'événement (ex: 'click', 'input')
     * @param {Function} callback - La fonction à appeler
     */
    addEventListener(type, callback) {
        // Écrivez votre code ici
    }

    /**
     * Retire un écouteur pour un type d'événement donné.
     * Ne retire que la première occurrence si le même callback est ajouté plusieurs fois.
     * @param {string} type - Le type d'événement
     * @param {Function} callback - La même référence de fonction que celle ajoutée
     */
    removeEventListener(type, callback) {
        // Écrivez votre code ici
    }

    /**
     * Déclenche un événement : appelle tous les écouteurs enregistrés pour ce type.
     * Chaque callback reçoit un objet `event` avec au minimum { type: ... }.
     * Si des données supplémentaires sont passées, elles sont ajoutées à l'objet event.
     * @param {string} type - Le type d'événement
     * @param {Object} data - Données supplémentaires (optionnel)
     */
    dispatchEvent(type, data = {}) {
        // Écrivez votre code ici
    }

    /**
     * Retourne le nombre d'écouteurs enregistrés pour un type donné.
     * @param {string} type - Le type d'événement
     * @returns {number}
     */
    countListeners(type) {
        // Écrivez votre code ici
        return 0;
    }
}
