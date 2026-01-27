# 🛍️ Exercice Visuel : Le Magasin Galactique

Bienvenue dans cet exercice spécial !
Le but est de voir la puissance de JavaScript en action. Vous allez coder la logique d'un magasin en ligne, et voir le résultat directement sur une interface graphique moderne.

## 📂 Structure du projet

- `index.html` : L'interface du magasin (ne pas modifier).
- `style.css` : Le style graphique (ne pas modifier, sauf si vous êtes curieux !).
- `engine.js` : Le moteur qui gère l'affichage (ne pas modifier).
- **`logic.js`** : C'est ici que vous allez travailler !

## 🚀 Comment lancer le projet ?

1. Assurez-vous d'avoir ce dossier ouvert dans VS Code.
2. Ouvrez un terminal (`Terminal -> New Terminal`).
3. Tapez les commandes suivantes :
   ```bash
   npm install
   npm run dev
   ```
4. Cliquez sur le lien local qui apparaît (ex: `http://localhost:5173/`).

## ⚠️ Note importante sur les modules

Nous utilisons un serveur de développement moderne (Vite).
Dans le fichier `logic.js`, vous verrez le mot-clé `export` devant les fonctions. **Ne le supprimez pas !** Cela permet au moteur de récupérer vos fonctions.

## 📝 Votre Mission (To-Do List)

Ouvrez le fichier `logic.js` et complétez les fonctions suivantes. Sauvegardez et rafraîchissez la page (`F5` ou `Cmd+R`) pour tester à chaque étape.

### Étape 1 : Ajouter au panier
- [ ] Trouvez la fonction `ajouterProduit(panierActuel, nouveauProduit)`.
- [ ] Utilisez la méthode `.push()` pour ajouter le produit au tableau.
- [ ] Retournez le tableau modifié.
- **Test :** Cliquez sur "Ajouter" sur un produit. Il doit apparaître dans la colonne de droite !

### Étape 2 : Calculer le total
- [ ] Trouvez la fonction `calculerTotal(panierActuel)`.
- [ ] Créez une variable `total = 0`.
- [ ] Parcourez le panier (boucle `for` ou `.forEach` ou `.reduce`) et additionnez le `prix` de chaque item.
- [ ] Retournez le résultat.
- **Test :** Ajoutez des produits. Le total en bas doit se mettre à jour automatiquement (avec une belle animation).

### Étape 3 : Retirer un produit
- [ ] Trouvez la fonction `retirerProduit(panierActuel, nomProduit)`.
- [ ] Vous devez supprimer l'élément qui porte ce nom.
- [ ] *Astuce facile :* Utilisez `.filter()` pour garder tout ce qui n'est PAS ce nom (cela supprimera tous les items de ce type).
- [ ] *Astuce avancée :* Utilisez `.findIndex()` pour trouver l'index du premier élément correspondant, puis `.splice(index, 1)` pour n'en supprimer qu'un seul.
- **Test :** Cliquez sur la croix rouge à côté d'un item dans le panier.

### Étape 4 : Bonus Promo
- [ ] Trouvez la fonction `verifierPromo(total)`.
- [ ] Si le total dépasse 1000 crédits, retournez `true`.
- **Test :** Remplissez le panier pour dépasser 1000. Le badge "PROMO ACTIVÉE" doit apparaître.

---

👻 **Bonne chance, jeune Padawan du Code !**
