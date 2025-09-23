[English](./README.md) | [Français](./README.fr.md) | [Kreyòl Ayisyen](./README.ht.md)

# Haiti Utils

[![npm version](https://img.shields.io/npm/v/@dolphfi_/haiti-utils.svg)](https://www.npmjs.com/package/@dolphfi_/haiti-utils)

`haiti-utils` est un package npm léger, sans dépendances, qui fournit des utilitaires simples et fiables pour travailler avec les données géographiques haïtiennes.

## Pourquoi utiliser `haiti-utils` ?

- **Gagnez du temps** : Arrêtez de chercher et de coder en dur des listes de départements, de communes ou de codes postaux.
- **Données fiables** : Accédez à un ensemble de données complet et structuré pour les 10 départements.
- **Facile à utiliser** : Une API simple et intuitive, entièrement typée avec TypeScript.
- **Insensible à la casse** : Toutes les fonctions de recherche sont insensibles à la casse pour une meilleure expérience de développement.

## Installation

```bash
npm install haiti-utils
# ou
yarn add haiti-utils
# ou
bun add haiti-utils
```

## Utilisation

Voici quelques exemples d'utilisation du package.

### Obtenir la liste de tous les départements

```typescript
import { getDepartments } from 'haiti-utils';

const departments = getDepartments();
console.log(departments);
// Résultat : ["Artibonite", "Centre", ...]
```

### Obtenir les communes d'un département spécifique

```typescript
import { getCommunes } from 'haiti-utils';

// La recherche est insensible à la casse
const communes = getCommunes('Ouest'); 
console.log(communes);
// Résultat : ["Arcahaie", "Cabaret", ...]
```

### Obtenir le code postal d'une commune

```typescript
import { getPostalCode } from 'haiti-utils';

// La recherche est insensible à la casse pour le département et la commune
const postalCode = getPostalCode('Ouest', 'Pétion-Ville');
console.log(postalCode);
// Résultat : "HT6122"

const notFound = getPostalCode('Nord', 'InvalidCommune');
console.log(notFound);
// Résultat : null
```

### Obtenir toutes les données

```typescript
import { getAllData } from 'haiti-utils';

const allData = getAllData();
console.log(allData[0].department); // "Artibonite"
console.log(allData[0].communes[0].name); // "Dessalines"
```

### Valider un numéro de téléphone

```typescript
import { validatePhoneNumber } from 'haiti-utils';

validatePhoneNumber('+509 34 56 78 90'); // true
validatePhoneNumber('55555555'); // false
```

### Formater un numéro de téléphone

```typescript
import { formatPhoneNumber } from 'haiti-utils';

// Format par défaut (international)
formatPhoneNumber('34567890'); // "+509 34 56 78 90"

// Format national
formatPhoneNumber('+509 34.56.78.90', { format: 'national' }); // "3456-7890"

// Format compact
formatPhoneNumber('34567890', { format: 'compact' }); // "+50934567890"

// Numéro invalide
formatPhoneNumber('12345'); // null
```

## Référence de l'API

### `getDepartments(): string[]`

Retourne une liste de tous les noms de départements.

### `getCommunes(department: string): string[]`

Retourne une liste de toutes les communes pour un département donné. La recherche est insensible à la casse. Retourne un tableau vide si le département n'est pas trouvé.

### `getPostalCode(department: string, commune: string): string | null`

Retourne le code postal d'une commune spécifique au sein d'un département. La recherche est insensible à la casse pour le département et la commune. Retourne `null` si non trouvé ou non disponible.

### `getAllData(): DepartmentData[]`

Retourne l'ensemble complet des données de tous les départements et de leurs communes.

### `validatePhoneNumber(phoneNumber: string): boolean`

Valide un numéro de téléphone haïtien. La fonction gère les formats courants, y compris l'indicatif `+509`, et ignore les espaces ou les tirets. Retourne `true` si le numéro est valide, `false` sinon.

### `formatPhoneNumber(phoneNumber: string, options?: { format: 'international' | 'national' | 'compact' }): string | null`

Formate un numéro de téléphone haïtien dans un format cohérent et lisible. Si le numéro est invalide, la fonction retourne `null`. Le format par défaut est `international`.

## Contribuer

Les contributions, les problèmes et les demandes de fonctionnalités sont les bienvenus ! N'hésitez pas à consulter la [page des problèmes](https://github.com/dolphfi/haiti-utils/issues).

## 💖 Sponsor

Si ou jwenn pake **haiti-utils** itil, ou ka sipòte devlopman li.

👉 [Become a Sponsor on GitHub](https://github.com/sponsors/dolphfi)