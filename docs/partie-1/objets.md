# Les Objets & Classes

## 1. Les Objets Littéraux
Structure clé-valeur.

```javascript
const utilisateur = {
    nom: "Hardy",
    roles: ["admin"],
    sePresenter: function() {
        console.log(`Moi c'est ${this.nom}`);
    }
};
console.log(utilisateur.nom);
```

### Destructuring
```javascript
const { nom, roles } = utilisateur;
```

---

## 2. Prototypes & Classes

### Le concept de Prototype
JS est orienté prototype. Chaque objet hérite d'un autre objet (son prototype).

### Classes : Le Sucre Syntaxique
Une jolie façon d'écrire des prototypes depuis ES6.

```javascript
class Commande {
    constructor(id, montant) {
        this.id = id;
        this.montant = montant;
    }

    afficher() {
        console.log(`Commande ${this.id}: ${this.montant}€`);
    }
}

const c1 = new Commande(1, 50);
c1.afficher();
```

---

## Exercice Final : Le Système de Gestion de Commandes
Pour valider cette partie, vous allez construire un mini-système de suivi de commandes.

1.   **Classe `Commande`** : `constructor(id, client, plats, statut)` et méthode `calculerTotal()`.
2.  **Tableau** : Créez un historique de commandes.
3.  **Analyse** :
    *   Utilisez `forEach` pour afficher les détails.
    *   Utilisez `filter` pour trouver les commandes payées.
    *   Utilisez de la logique pour identifier les "Gros clients" (>100€).
