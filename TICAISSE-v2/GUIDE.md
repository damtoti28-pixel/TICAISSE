# TICAISSE — Guide de mise à jour

## Fichiers du dossier
- `index.html` — le site (avec toutes les nouvelles fonctionnalités)
- `manifest.json` — fichier requis pour l'installation en app mobile (PWA)
- `sw.js` — service worker, permet le fonctionnement **hors connexion**
- `assets/icon-192.png` et `assets/icon-512.png` — icônes de l'application (à remplacer par votre logo si besoin, même noms de fichiers)

## Mise à jour sur GitHub
1. Va dans ton dépôt GitHub existant (celui où est hébergé TICAISSE).
2. Remplace `index.html` par le nouveau fichier (ou renomme-le si ton fichier actuel a un autre nom).
3. Ajoute les nouveaux fichiers `manifest.json`, `sw.js`, et le dossier `assets/` (avec les deux icônes).
4. Attends 1–2 minutes que GitHub Pages se mette à jour, puis ouvre le site.

**Important** : `manifest.json` et `sw.js` doivent être au même niveau que `index.html` (pas dans un sous-dossier), sinon le mode hors-ligne ne fonctionnera pas.

## Installer l'app sur téléphone
1. Ouvre le site avec Chrome (Android) ou Safari (iPhone).
2. Menu ⋮ (Android) ou bouton Partager (iPhone) → **"Ajouter à l'écran d'accueil"**.
3. Une icône TICAISSE apparaît sur l'écran d'accueil — elle s'ouvre en plein écran, comme une vraie app.
4. Une fois ouverte une première fois avec connexion, le site continue de fonctionner **sans connexion internet** (sauf pour l'envoi réel des paiements mobile money, qui nécessite le réseau téléphonique).

## Nouveautés ajoutées
- **Rôle Secrétaire** : nouveau type de compte, en plus de Président, Trésorier, Membre.
- **Prêts** (onglet 💼 Prêts) : réservé au président, trésorier, secrétaire, et au membre concerné.
  - Intérêt de **5% par mois** sur le capital restant dû, calculé automatiquement.
  - Motif du prêt facultatif.
  - Suivi des remboursements et solde restant dû.
- **Cotisations carnet** (dans l'onglet Trésorerie) : la trésorière peut enregistrer manuellement les cotisations des personnes qui paient en espèces / sur carnet papier (nom, mois, montant, date).
- **Adhésion au groupe** (dans l'onglet Trésorerie) : enregistrement du paiement d'adhésion de chaque membre, avec montant libre.
- **Impression du bilan** : bouton 🖨️ à côté de chaque membre dans le suivi des cotisations — ouvre la fenêtre d'impression avec le récapitulatif complet du membre (cotisations, adhésion, prêts).
- **Design retravaillé** : animations d'apparition plus douces, cartes avec effet de survol, meilleure hiérarchie visuelle.

## Note sur les données
Vos données existantes (membres, cotisations déjà enregistrées, etc.) sont **conservées** — la mise à jour n'efface rien, elle ajoute simplement les nouvelles fonctionnalités.
