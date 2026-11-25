# Assignment Manager Application

Application Angular de gestion des devoirs (assignments) avec système d'authentification .   
**Demo en ligne** accessible [ici](https://assignment-managment-app-2024-2025.onrender.com/)

## Aperçu de l'application 
<img width="1894" height="868" alt="Image" src="https://github.com/user-attachments/assets/2a93f420-352d-4e34-b354-65e11cc0365a" />

## Fonctionnalités principales

### 🎯 Gestion des assignments
-  **Ajout** d'un nouvel assignment (nom + date de rendu)
-  **Modification** des assignments existants
-  **Suppression** des assignments
-  Affichage de la **liste complète** des assignments
-  **Détail** de chaque assignment

### 🔐 Système d'authentification
- **Deux types d'utilisateurs** :
  -  Admin (username: `admin1`, password: `admin1`)
  -  Utilisateur standard (username: `user1`, password: `user1`)

### 🛡️ Gestion des permissions
| Action               | Non connecté | Utilisateur | Admin |
|----------------------|--------------|-------------|-------|
| Voir la liste        | ✅           | ✅          | ✅    |
| Ajouter assignment   | ❌           | ✅          | ✅    |
| Modifier assignment  | ❌           | ❌          | ✅    |
| Supprimer assignment | ❌           | ❌          | ✅    |

## Architecture des pages

###  Page d'accueil (`/home`)
- Tableau de bord avec statistiques :
  -  Nombre total d'assignments
  -  Assignments soumis
  -  Assignments en attente

###  Liste des assignments (`/assignments`)
- Affichage sous forme de tableau ou de cartes
- Accès aux détails en cliquant sur un assignment

###  Ajout d'assignment (`/add`)
- Formulaire avec :
  - Champ pour le nom
  - Sélecteur de date
  - Bouton de soumission

###  Édition d'assignment (`/assignment/:id/edit`)
- Formulaire pré-rempli avec les données existantes

###  Détail d'assignment (`/assignment/:id`)
- Affichage complet des informations
- Boutons d'action (si permissions suffisantes) :
  - Modification
  - Suppression
  - Marquer comme soumis

###  Page de connexion (`/login`)
- Formulaire d'authentification
- Redirection vers la page d'accueil après connexion
- Gestion des erreurs (identifiants incorrects)

## Technologies utilisées

-  **Angular** (v19)


## Installation et lancement

1. Cloner le dépôt :
```bash
git clone https://github.com/capatainkomic/Assignment-Managment-App-2024-2025-.git
```

2. Installer les dépendances :
```bash
npm install
```

3. Lancer l'application :
```bash
ng serve
```

4. Ouvrir dans le navigateur :
```bash
http://localhost:4200
```

## Auteur(s) et Autrice(s) 
[capatainkomic](https://github.com/capatainkomic) - Developpeuse principale

## Amélioration du projet 
Amélioration du projet [ici](https://github.com/theholysloth/angular_front) en collaboration avec [theholysloth](https://github.com/theholysloth)  




