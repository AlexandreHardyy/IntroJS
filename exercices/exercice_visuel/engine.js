import { ajouterProduit, calculerTotal, retirerProduit, verifierPromo } from './logic.js';
import './style.css';

// Données du catalogue
const catalogue = [
    { id: 1, nom: "Sabre Laser", prix: 1500, emoji: "⚔️" },
    { id: 2, nom: "Potion de Soin", prix: 50, emoji: "🧪" },
    { id: 3, nom: "Armure Beskar", prix: 800, emoji: "🛡️" },
    { id: 4, nom: "Holocron", prix: 5000, emoji: "🔮" },
    { id: 5, nom: "Droid R2", prix: 1200, emoji: "🤖" },
    { id: 6, nom: "Speeder", prix: 3000, emoji: "🏍️" },
    { id: 7, nom: "Cristal Kyber", prix: 400, emoji: "💎" },
    { id: 8, nom: "Fruit Meiloorun", prix: 10, emoji: "🍈" }
];

// État interne du panier (géré par le moteur, mais modifié via les fonctions de l'étudiant)
let panierState = [];

// Sélection des éléments DOM
const productsGrid = document.getElementById('products-grid');
const cartContainer = document.getElementById('cart-items');
const totalPriceEl = document.getElementById('total-price');
const promoBadge = document.getElementById('promo-status');
const consoleOutput = document.getElementById('console-output');
const clearBtn = document.getElementById('clear-btn');

// Initialisation
function init() {
    renderProducts();
    updateCartUI();
    log("Système initialisé. Prêt.", "info");
}

// Affiche les produits
function renderProducts() {
    productsGrid.innerHTML = '';
    catalogue.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <span class="product-emoji">${product.emoji}</span>
            <span class="product-name">${product.nom}</span>
            <span class="product-price">${product.prix} 💎</span>
            <button class="btn btn-add" data-id="${product.id}">Ajouter</button>
        `;
        // Ajout explicite de l'event listener car window.handleAddToCart n'est plus accessible facilement depuis le module
        card.querySelector('button').addEventListener('click', () => handleAddToCart(product.id));
        productsGrid.appendChild(card);
    });
}

// Gestionnaire d'ajout
function handleAddToCart(id) {
    const product = catalogue.find(p => p.id === id);
    
    // Appel sécurisé à la fonction étudiant
    try {
        if (typeof ajouterProduit !== 'function') {
            throw new Error("La fonction 'ajouterProduit' n'existe pas !");
        }

        // On passe une COPIE du produit pour éviter les modifications par référence non voulues sur le catalogue
        const productCopy = { ...product };
        
        log(`Tentative d'ajout: ${product.nom}`, "action");
        
        const nouveauPanier = ajouterProduit(panierState, productCopy);
        
        if (!Array.isArray(nouveauPanier)) {
            throw new Error("Votre fonction ajouterProduit doit retourner un TABLEAU !");
        }

        panierState = nouveauPanier;
        updateCartUI();
        
    } catch (e) {
        log(`ERREUR: ${e.message}`, "error");
        console.error(e);
    }
};

// Gestionnaire de retrait
function handleRemoveFromCart(nom) {
    try {
        if (typeof retirerProduit !== 'function') {
            throw new Error("La fonction 'retirerProduit' n'existe pas !");
        }

        log(`Tentative de retrait: ${nom}`, "action");

        const nouveauPanier = retirerProduit(panierState, nom);

        if (!Array.isArray(nouveauPanier)) {
            throw new Error("Votre fonction retirerProduit doit retourner un TABLEAU !");
        }

        panierState = nouveauPanier;
        updateCartUI();

    } catch (e) {
        log(`ERREUR: ${e.message}`, "error");
    }
};

// Mise à jour de l'interface Panier
function updateCartUI() {
    // 1. Rendu de la liste
    cartContainer.innerHTML = '';
    
    if (panierState.length === 0) {
        cartContainer.innerHTML = '<p class="empty-msg">Votre panier est vide...</p>';
    } else {
        panierState.forEach((item, index) => {
            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            // Ajout d'un index unique pour aider si besoin, mais retrait basé sur nom
            itemEl.innerHTML = `
                <div class="item-info">
                    <span>${item.emoji || '📦'}</span>
                    <span>${item.nom}</span>
                    <span style="color:var(--secondary)">${item.prix}💎</span>
                </div>
                <button class="btn-remove">&times;</button>
            `;
            // Ajout event listener
            itemEl.querySelector('.btn-remove').addEventListener('click', () => handleRemoveFromCart(item.nom));
            cartContainer.appendChild(itemEl);
        });
    }

    // 2. Calcul du total via fonction étudiant
    let total = 0;
    try {
        if (typeof calculerTotal === 'function') {
            total = calculerTotal(panierState);
            if (typeof total !== 'number') {
                log("Attention: calculerTotal ne retourne pas un nombre", "warning");
                total = 0;
            }
        }
    } catch (e) {
        log(`Erreur dans calculerTotal: ${e.message}`, "error");
    }

    // Animation du prix
    animateValue(totalPriceEl, parseInt(totalPriceEl.innerText) || 0, total, 500);

    // 3. Vérification Promo
    try {
        if (typeof verifierPromo === 'function') {
            const isPromo = verifierPromo(total);
            if (isPromo) {
                promoBadge.classList.remove('hidden');
                promoBadge.style.display = 'block';
            } else {
                promoBadge.classList.add('hidden');
                promoBadge.style.display = 'none';
            }
        }
    } catch (e) {}
}

// Vider le panier
clearBtn.addEventListener('click', () => {
    panierState = [];
    updateCartUI();
    log("Panier vidé manu militari.", "action");
});

// Utilitaire de log visuel
function log(msg, type = "info") {
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.innerText = `> ${msg}`;
    entry.style.color = type === 'error' ? '#ff5555' : (type === 'action' ? '#00d4ff' : '#888');
    consoleOutput.prepend(entry);
}

// Animation nombre
function animateValue(obj, start, end, duration) {
    if (start === end) return;
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start) + " 💎";
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            obj.innerHTML = end + " 💎";
        }
    };
    window.requestAnimationFrame(step);
}

// Lancement
init();
