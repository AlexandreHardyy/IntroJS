/**
 * Exercice : Consommer une promesse
 * Consigne : Vous disposez d'une fonction `simulerLancerDeDe()` qui retourne une promesse.
 * Cette promesse se résout avec un nombre entre 1 et 6, ou est rejetée si le dé "tombe du tapis" (erreur).
 * 
 * 1. Appelez la fonction `simulerLancerDeDe`.
 * 2. Utilisez `.then()` pour afficher dans la console le résultat de la forme : "Le dé a fait un [résultat]".
 * 3. Utilisez `.catch()` pour intercepter l'erreur et afficher "Erreur : le dé est tombé du tapis".
 */

// NE PAS MODIFIER CETTE FONCTION
function simulerLancerDeDe() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const chance = Math.random();
            if (chance > 0.2) {
                const resultat = Math.floor(Math.random() * 6) + 1;
                resolve(resultat);
            } else {
                reject(new Error("Le dé est tombé du tapis"));
            }
        }, 1000);
    });
}

export function jouerAuDe() {
    // Écrivez votre code ici en appelant simulerLancerDeDe()
}
