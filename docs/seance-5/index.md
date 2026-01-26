# Séance 5 : Événements & Formulaires

## 1. Introduction aux Événements
Réagir aux actions de l'utilisateur (clic, survol, frappe au clavier).

### `addEventListener`
La méthode standard.
```javascript
const bouton = document.querySelector('button');

bouton.addEventListener('click', () => {
  alert("Click !");
});
```

## 2. L'objet Event
JavaScript passe automatiquement un objet contenant les détails de l'événement.
```javascript
bouton.addEventListener('click', (event) => {
  console.log(event.target); // L'élément cliqué
});
```

## 3. Types d'événements courants
*   Souris : `click`, `mouseenter`, `mouseleave`.
*   Clavier : `keydown`, `keyup` (`event.key` pour la touche).
*   Formulaire : `submit`, `input`, `change`.

## 4. `preventDefault`
Empêcher le comportement par défaut (ex: empêcher le rechargement de la page lors de la soumission d'un formulaire).

## 5. Gestion des Formulaires
Récupérer les valeurs entrées par l'utilisateur.
```javascript
const input = document.querySelector('input');
console.log(input.value);
```
