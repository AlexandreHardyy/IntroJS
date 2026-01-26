# Séance 6 : Asynchronisme & API

## 1. Synchrone vs Asynchrone
Par défaut, JS est bloquant (synchrone). L'asynchronisme permet de lancer des tâches longues (ex: requête réseau) sans bloquer la page.

## 2. `setTimeout`
Exécuter du code après un délai.
```javascript
setTimeout(() => {
  console.log("2 secondes plus tard...");
}, 2000);
```

## 3. Les Promesses (Promises)
Un objet représentant la réussite ou l'échec d'une opération asynchrone future.
États : Pending (en cours), Fulfilled (succès), Rejected (échec).

## 4. `fetch` et les API
Récupérer des données depuis un serveur externe.
```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

## 5. Async / Await
Syntaxe moderne pour simplifier les promesses (ressemble à du code synchrone).
```javascript
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```
