// ------------------------------------------------------------------
// 🛍️ LOGIQUE DU MAGASIN (À VOUS DE CODER !)
// ------------------------------------------------------------------

/**
 * Cette fonction est appelée quand l'utilisateur clique sur "Ajouter au panier".
 * Elle doit ajouter le produit cliqué dans le tableau du panier.
 * 
 * @param {Array} panierActuel - Le tableau contenant les items actuellement dans le panier
 * @param {Object} nouveauProduit - L'objet produit à ajouter (ex: {nom: "Sabre Laser", prix: 150})
 * @returns {Array} - Le tableau du panier mis à jour
 */
export function ajouterProduit(panierActuel, nouveauProduit) {
    // TODO: Ajouter le nouveauProduit au panierActuel
    // Indice: utilisez .push()
    
    return panierActuel;
}

/**
 * Cette fonction est appelée quand l'utilisateur clique sur la croix pour retirer un item.
 * Elle doit retirer l'item correspondant du panier.
 * 
 * @param {Array} panierActuel - Le tableau du panier
 * @param {string} nomProduit - Le nom du produit à retirer
 * @returns {Array} - Le nouveau panier sans le produit supprimé
 */
export function retirerProduit(panierActuel, nomProduit) {
    // TODO: Retirer le produit qui a le nom "nomProduit"
    // Indice: utilisez .filter() ou une boucle
    // Attention: si on a 2 "Potion", on veut peut-être en retirer qu'une seule ou toutes ? 
    // Pour cet exercice, retirer TOUS les produits du même nom est acceptable,
    // ou mieux: utilisez .findIndex() et .splice() pour en retirer qu'un seul.

    return panierActuel;
}

/**
 * Cette fonction doit calculer le prix total du panier.
 * 
 * @param {Array} panierActuel - Le tableau du panier
 * @returns {number} - Le prix total
 */
export function calculerTotal(panierActuel) {
    // TODO: Calculer la somme des prix de tous les éléments
    // Indice: boucle for ou .reduce()
    let total = 0;
    
    return total;
}

/**
 * Cette fonction vérifie si le panier est éligible pour la livraison gratuite (ou une promo).
 * 
 * @param {number} total - Le montant total actuel
 * @returns {boolean} - true si le total est supérieur à 1000, sinon false
 */
export function verifierPromo(total) {
    // TODO: Retourner true si le total > 1000
    return false;
}
