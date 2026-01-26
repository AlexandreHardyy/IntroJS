# Séance 4 : Le DOM (Document Object Model)

## 1. Qu'est-ce que le DOM ?
C'est la représentation structurée (en arbre) de votre page HTML. JavaScript peut l'utiliser pour modifier la page en temps réel.

## 2. Sélectionner des Éléments
Comment attraper des balises HTML.

*   `document.getElementById('monId')`
*   `document.querySelector('.maClasse')` : Sélectionne le premier trouvé.
*   `document.querySelectorAll('p')` : Sélectionne tous les paragraphes (retourne une NodeList).

## 3. Modifier le Contenu
*   `element.innerText` : Texte visible.
*   `element.innerHTML` : HTML interne (attention aux failles XSS !).

## 4. Modifier le Style
*   `element.style.color = 'red'`
*   `element.style.display = 'none'`

## 5. Manipuler les Classes
La meilleure façon de styliser.
*   `element.classList.add('active')`
*   `element.classList.remove('active')`
*   `element.classList.toggle('active')`

## 6. Créer et Insérer des Éléments
*   `document.createElement('div')`
*   `parent.appendChild(enfant)`
