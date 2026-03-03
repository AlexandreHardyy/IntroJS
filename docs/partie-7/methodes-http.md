# Les méthodes HTTP avec Fetch

Par défaut, quand vous ouvrez un onglet dans votre navigateur ou que vous utilisez la fonction `fetch("url")` simplement, vous envoyez ce qu'on appelle une requête `GET`. 

Le protocole HTTP définit plusieurs autres méthodes, que l'on appelle souvent des "Verbes", pour réaliser des actions précises avec une API dite "REST" sur un serveur backend.

## Les verbes principaux (CRUD)

- **GET** : Récupérer des ressources (Ex: "Afficher la liste des films").
- **POST** : Créer de nouvelles ressources sur le serveur (Ex: "S'inscrire", "Ajouter un article au panier").
- **PUT** / **PATCH** : Mettre à jour une ressource existante (Ex: "Modifier le mot de passe de mon profil").
- **DELETE** : Supprimer une ressource spécifique.

*Ce sont les quatre pilliers du C.R.U.D. (Create, Read, Update, Delete)*.

## Comment configurer Fetch pour envoyer autre chose que GET ?

La fonction `fetch()` peut prendre un 2ème paramètre optionnel. Il s'agit d'un objet de configuration qui permet de tout modifier : le verbe, les headers cryptographiques, et bien sûr "le corps" (ce qu'on envoie).

### Exemple d'une requête POST pour créer un utilisateur

Une requête POST nécessite de dire au serveur ce que l'on veut rajouter en lui envoyant du contenu. On appelle cela le **`body`** (le corps) de la requête.

```javascript
// Les données (l'objet javascript) que je veux envoyer pour qu'il soit sauvegardé
const nouvelUtilisateur = {
  nom: 'Alexandre',
  age: 25,
  metier: 'Développeur'
};

async function creerUtilisateur() {
  try {
    const reponse = await fetch('https://api.monsite.com/utilisateurs', {
      // On modifie explicitement la méthode
      method: 'POST', 
      
      // On lui précise que le contenu final au serveur qu'on envoie est du JSON
      headers: {
        'Content-Type': 'application/json'
      },
      
      // On convertit notre bel objet Javascript en chaîne de caractères JSON
      // Car il est impossible d'envoyer de l'objet natif JS à travers internet tel quel !
      body: JSON.stringify(nouvelUtilisateur) 
    });

    const donneesSauvegardees = await reponse.json();
    console.log("Super, le serveur a confirmé l'insertion :", donneesSauvegardees);

  } catch (erreur) {
    console.error("Erreur de connexion : ", erreur);
  }
}
```

> [!IMPORTANT]
> - N'oubliez jamais le header `'Content-Type': 'application/json'`. Sans lui, de nombreux serveurs backend bloqueront la requête par précaution.
> - On utilise `JSON.stringify()` pour envoyer vers l'extérieur (avant le réseau).
> - On utilise `reponse.json()` quand c'est nous qui réceptionnons vers l'extérieur (après le réseau).
