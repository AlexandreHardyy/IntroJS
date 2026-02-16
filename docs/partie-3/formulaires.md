# Formulaires et interactions utilisateur

Les formulaires sont au cœur de l'interactivité web. Ce chapitre couvre la gestion complète des formulaires en JavaScript : récupération de valeurs, validation, et gestion de l'objet `FormData`.

## Accéder aux éléments d'un formulaire

### Via `querySelector`

```javascript
const inputNom = document.querySelector('#nom');
const inputEmail = document.querySelector('input[type="email"]');
const selectPays = document.querySelector('#pays');
const textarea = document.querySelector('textarea');
```

### Via la propriété `elements` du formulaire

Chaque formulaire possède une propriété `elements` qui donne accès à tous ses champs par **nom** ou par **index**.

```html
<form id="inscription">
    <input name="nom" type="text">
    <input name="email" type="email">
    <select name="role">
        <option value="etudiant">Étudiant</option>
        <option value="prof">Professeur</option>
    </select>
    <button type="submit">Envoyer</button>
</form>
```

```javascript
const form = document.querySelector('#inscription');

// Accès par nom
console.log(form.elements.nom);   // <input name="nom">
console.log(form.elements.email); // <input name="email">
console.log(form.elements.role);  // <select name="role">

// Accès par index
console.log(form.elements[0]); // Premier champ du formulaire
```

---

## Lire et modifier les valeurs

### Champs texte, email, password, etc.

```javascript
const inputNom = document.querySelector('#nom');

// Lire la valeur
console.log(inputNom.value); // "Alice"

// Modifier la valeur
inputNom.value = 'Bob';

// Vider le champ
inputNom.value = '';
```

### Cases à cocher (`checkbox`)

```html
<input type="checkbox" id="accepter" name="accepter">
```

```javascript
const checkbox = document.querySelector('#accepter');

// Lire l'état
console.log(checkbox.checked); // true ou false

// Modifier l'état
checkbox.checked = true;
```

### Boutons radio

```html
<input type="radio" name="genre" value="homme" id="homme">
<input type="radio" name="genre" value="femme" id="femme">
```

```javascript
// Récupérer la valeur sélectionnée
const genreSelectionne = document.querySelector('input[name="genre"]:checked');
console.log(genreSelectionne?.value); // "homme" ou "femme" ou undefined
```

### Listes déroulantes (`select`)

```html
<select id="pays">
    <option value="">-- Choisir --</option>
    <option value="fr">France</option>
    <option value="be">Belgique</option>
    <option value="ch">Suisse</option>
</select>
```

```javascript
const select = document.querySelector('#pays');

// Lire la valeur sélectionnée
console.log(select.value); // "fr"

// Modifier la sélection
select.value = 'be';

// Lire l'index sélectionné
console.log(select.selectedIndex); // 2

// Lire le texte affiché
console.log(select.options[select.selectedIndex].text); // "Belgique"
```

### Select multiple

```html
<select id="langages" multiple>
    <option value="js">JavaScript</option>
    <option value="py">Python</option>
    <option value="java">Java</option>
</select>
```

```javascript
const select = document.querySelector('#langages');

// Récupérer toutes les valeurs sélectionnées
const valeurs = [...select.selectedOptions].map(option => option.value);
console.log(valeurs); // ["js", "py"]
```

---

## Événements de formulaire en détail

### `input` vs `change`

```javascript
const champ = document.querySelector('#recherche');

// `input` se déclenche à CHAQUE frappe
champ.addEventListener('input', (event) => {
    console.log('Recherche en direct :', event.target.value);
});

// `change` se déclenche quand on QUITTE le champ (si la valeur a changé)
champ.addEventListener('change', (event) => {
    console.log('Valeur finale :', event.target.value);
});
```

### `focus` et `blur`

```javascript
const champ = document.querySelector('#email');

champ.addEventListener('focus', () => {
    champ.parentElement.classList.add('champ-actif');
});

champ.addEventListener('blur', () => {
    champ.parentElement.classList.remove('champ-actif');
    // Bon moment pour valider le champ
    validerEmail(champ.value);
});
```

### `submit`

```javascript
const form = document.querySelector('#inscription');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // TOUJOURS empêcher le rechargement
    
    // Récupérer les données
    const nom = form.elements.nom.value;
    const email = form.elements.email.value;
    
    console.log(`Inscription de ${nom} (${email})`);
});
```

---

## L'objet `FormData`

`FormData` est un objet natif qui permet de récupérer **automatiquement toutes les données** d'un formulaire. Très utile pour envoyer des données à une API.

```javascript
const form = document.querySelector('#inscription');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Créer un FormData à partir du formulaire
    const donnees = new FormData(form);
    
    // Lire des valeurs
    console.log(donnees.get('nom'));   // "Alice"
    console.log(donnees.get('email')); // "alice@email.com"
    
    // Vérifier si une clé existe
    console.log(donnees.has('nom')); // true
    
    // Itérer sur toutes les données
    for (const [cle, valeur] of donnees) {
        console.log(`${cle}: ${valeur}`);
    }
    
    // Convertir en objet simple
    const objet = Object.fromEntries(donnees);
    console.log(objet); // { nom: "Alice", email: "alice@email.com", role: "etudiant" }
});
```

### Manipuler les données

```javascript
const donnees = new FormData(form);

// Ajouter une donnée
donnees.append('date', new Date().toISOString());

// Modifier une donnée
donnees.set('nom', 'Bob');

// Supprimer une donnée
donnees.delete('role');

// Récupérer toutes les valeurs d'une clé (pour les checkboxes multiples)
donnees.getAll('hobbies'); // ["sport", "lecture"]
```

---

## Validation de formulaire

### Validation HTML native

Le HTML offre des attributs de validation que le navigateur vérifie automatiquement :

```html
<form id="mon-formulaire">
    <input type="text" name="nom" required minlength="2" maxlength="50">
    <input type="email" name="email" required>
    <input type="number" name="age" min="18" max="120">
    <input type="text" name="code" pattern="[A-Z]{3}-\d{4}">
    <button type="submit">Valider</button>
</form>
```

### Validation JavaScript avec l'API Constraint Validation

```javascript
const form = document.querySelector('#mon-formulaire');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const inputNom = form.elements.nom;
    
    // Vérifier la validité globale du formulaire
    if (form.checkValidity()) {
        console.log('Formulaire valide !');
    }
    
    // Vérifier un champ spécifique
    if (inputNom.validity.valid) {
        console.log('Le nom est valide');
    }
    
    // Détail des erreurs
    console.log(inputNom.validity.valueMissing);  // true si vide et required
    console.log(inputNom.validity.tooShort);      // true si trop court
    console.log(inputNom.validity.tooLong);       // true si trop long
    console.log(inputNom.validity.patternMismatch); // true si ne matche pas le pattern
    console.log(inputNom.validity.typeMismatch);  // true si type email invalide
    
    // Afficher le message d'erreur du navigateur
    console.log(inputNom.validationMessage);
});
```

### Validation personnalisée

```javascript
const inputEmail = form.elements.email;

inputEmail.addEventListener('input', () => {
    if (inputEmail.value && !inputEmail.value.endsWith('@edu.fr')) {
        inputEmail.setCustomValidity('Seuls les emails @edu.fr sont acceptés');
    } else {
        inputEmail.setCustomValidity(''); // Réinitialiser = valide
    }
});
```

### Pattern complet de validation avec feedback visuel

```javascript
const form = document.querySelector('#inscription');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Nettoyer les erreurs précédentes
    form.querySelectorAll('.erreur').forEach(el => el.remove());
    form.querySelectorAll('.invalide').forEach(el => el.classList.remove('invalide'));
    
    let estValide = true;
    
    // Valider chaque champ
    const nom = form.elements.nom;
    if (nom.value.trim().length < 2) {
        afficherErreur(nom, 'Le nom doit contenir au moins 2 caractères');
        estValide = false;
    }
    
    const email = form.elements.email;
    if (!email.value.includes('@')) {
        afficherErreur(email, 'Veuillez entrer un email valide');
        estValide = false;
    }
    
    if (estValide) {
        console.log('Formulaire envoyé !');
    }
});

function afficherErreur(champ, message) {
    champ.classList.add('invalide');
    const erreur = document.createElement('span');
    erreur.classList.add('erreur');
    erreur.textContent = message;
    champ.after(erreur);
}
```

---

## Réinitialiser un formulaire

```javascript
const form = document.querySelector('#inscription');

// Méthode native
form.reset();

// Ou via un bouton type="reset"
// <button type="reset">Effacer</button>

// Écouter la réinitialisation
form.addEventListener('reset', () => {
    console.log('Le formulaire a été réinitialisé');
    // Nettoyer les messages d'erreur, etc.
});
```
