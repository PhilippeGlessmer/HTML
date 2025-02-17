# 📌 Description Fonctionnelle du Menu Vertical Bootstrap 5.2.3

## 1️⃣ Objectif
Ce menu vertical permet de naviguer entre différentes catégories d’actions et de projets.  
Il repose sur **Bootstrap 5.2.3** et intègre des **collapses multi-niveaux**, des **icônes FontAwesome** et **Material Icons** pour un affichage dynamique et clair.

---

## 2️⃣ Structure du Menu
Le menu est structuré en **deux niveaux** :

- **Niveau 1** : Catégories principales  
  *(ex. : **Action Commerciale, Projet, Besoin, Action**)*  
- **Niveau 2** : Sous-catégories associées à chaque Niveau 1  
  *(ex. : **En cours, Futur, Annulé, Terminé**)*  
- **Liens d'action** : Chaque sous-catégorie contient des **activités**  
  *(ex. : **Activité 1, Activité 2**)*  

---

## 3️⃣ Comportement du Menu
### 📌 Ouverture / Fermeture Automatique
✔ **Lorsqu'un Niveau 1 est cliqué :**  
   - Il **s'ouvre** et **ferme tous les autres Niveaux 1**.  
   - Il **ouvre automatiquement** la sous-catégorie **"En cours"** *(si elle existe)*.  
   - Il **ne rouvre pas "En cours"** si une autre sous-catégorie (ex. "Annulé" ou "Terminé") est sélectionnée.  

✔ **Lorsqu'un Niveau 2 est cliqué :**  
   - Il **s'ouvre** et **ferme les autres sous-menus du même Niveau 1**.  

---

## 4️⃣ Affichage Dynamique
### 📌 Gestion des icônes
✔ **Les icônes `fa-chevron-right` et `fa-chevron-down`** indiquent l'état du menu :  
   - **`fa-chevron-right`** → Menu fermé  
   - **`fa-chevron-down`** → Menu ouvert  

✔ **Les sous-menus utilisent des badges et icônes Material Icons** pour représenter l'état des éléments :  
   - 🕒 **`schedule`** → Action en attente  
   - ▶️ **`play_arrow`** → En cours  
   - ⏩ **`fast_forward`** → Futur  
   - 🗑️ **`delete`** → Annulé  
   - ✅ **`done`** → Terminé  

---

## 5️⃣ Exemple de Menu avec Catégories et Activités
### 📌 **Catégories et sous-catégories disponibles :**  

### ✅ **Action Commerciale**
   - **En cours**  
     - **Activité 1**  
     - **Activité 2**  
   - **Futur**  
     - **Activité 1**  
     - **Activité 2**  

### ✅ **Projet**
   - **En cours**  
     - **Activité 1**  
     - **Activité 2**  
   - **Futur**  
     - **Activité 1**  
     - **Activité 2**  
   - **Annulé**  
     - **Activité 1**  
     - **Activité 2**  
   - **Terminé**  
     - **Activité 1**  
     - **Activité 2**  

### ✅ **Besoin**
   - **En cours**  
     - **Activité 1**  
     - **Activité 2**  
   - **Futur**  
     - **Activité 1**  
     - **Activité 2**  
   - **Annulé**  
     - **Activité 1**  
     - **Activité 2**  
   - **Terminé**  
     - **Activité 1**  
     - **Activité 2**  

### ✅ **Action**
   - **En cours**  
     - **Activité 1**  
     - **Activité 2**  
   - **Futur**  
     - **Activité 1**  
     - **Activité 2**  
   - **Annulé**  
     - **Activité 1**  
     - **Activité 2**  
   - **Terminé**  
     - **Activité 1**  
     - **Activité 2**  

---

## 6️⃣ Technologie utilisée
✔ **Bootstrap 5.2.3** pour la gestion des collapses  
✔ **FontAwesome 6.4.2** pour les chevrons dynamiques  
✔ **Material Icons** pour les statuts des éléments  
✔ **JavaScript natif** pour gérer l’ouverture et la fermeture dynamique  

---

📌 **Ce menu est optimisé pour une navigation fluide et intuitive, garantissant une organisation claire des actions et projets.** 🚀😊  
