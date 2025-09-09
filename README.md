[English](./README.md) | [Français](./README.fr.md) | [Kreyòl Ayisyen](./README.ht.md)

# Haiti Utils

[![npm version](https://img.shields.io/npm/v/@dolphfi_/haiti-utils.svg)](https://www.npmjs.com/package/@dolphfi_/haiti-utils)

`haiti-utils` is a lightweight, zero-dependency npm package that provides simple and reliable utilities for working with Haitian geographical data.

## Why use `haiti-utils`?

- **Save Time**: Stop searching for and hardcoding lists of departments, communes, or postal codes.
- **Reliable Data**: Access a complete and structured dataset for all 10 departments.
- **Easy to Use**: A simple and intuitive API that is fully typed with TypeScript.
- **Case-Insensitive**: All search functions are case-insensitive for a better developer experience.

## Installation

```bash
npm install haiti-utils
# or
yarn add haiti-utils
# or
bun add haiti-utils
```

## Usage

Here are a few examples of how to use the package.

### Get a list of all departments

```typescript
import { getDepartments } from 'haiti-utils';

const departments = getDepartments();
console.log(departments);
// Output: ["Artibonite", "Centre", ...]
```

### Get the communes of a specific department

```typescript
import { getCommunes } from 'haiti-utils';

// The search is case-insensitive
const communes = getCommunes('Ouest'); 
console.log(communes);
// Output: ["Arcahaie", "Cabaret", ...]
```

### Get the postal code of a commune

```typescript
import { getPostalCode } from 'haiti-utils';

// The search is case-insensitive for both department and commune
const postalCode = getPostalCode('Ouest', 'Pétion-Ville');
console.log(postalCode);
// Output: "HT6122"

const notFound = getPostalCode('Nord', 'InvalidCommune');
console.log(notFound);
// Output: null
```

### Get all data

```typescript
import { getAllData } from 'haiti-utils';

const allData = getAllData();
console.log(allData[0].department); // "Artibonite"
console.log(allData[0].communes[0].name); // "Dessalines"
```

### Validate a phone number

```typescript
import { validatePhoneNumber } from 'haiti-utils';

validatePhoneNumber('+509 34 56 78 90'); // true
validatePhoneNumber('55555555'); // false
```

### Format a phone number

```typescript
import { formatPhoneNumber } from 'haiti-utils';

// Default format (international)
formatPhoneNumber('34567890'); // "+509 34 56 78 90"

// National format
formatPhoneNumber('+509 34.56.78.90', { format: 'national' }); // "3456-7890"

// Compact format
formatPhoneNumber('34567890', { format: 'compact' }); // "+50934567890"

// Invalid number
formatPhoneNumber('12345'); // null
```

## API Reference

### `getDepartments(): string[]`

Returns a list of all department names.

### `getCommunes(department: string): string[]`

Returns a list of all communes for a given department. The search is case-insensitive. Returns an empty array if the department is not found.

### `getPostalCode(department: string, commune: string): string | null`

Returns the postal code for a specific commune within a department. The search is case-insensitive for both department and commune. Returns `null` if not found or not available.

### `getAllData(): DepartmentData[]`

Returns the complete dataset of all departments and their communes.

### `validatePhoneNumber(phoneNumber: string): boolean`

Validates a Haitian phone number. It handles common formats, including the `+509` country code, and ignores spaces or hyphens. Returns `true` if the number is valid, `false` otherwise.

### `formatPhoneNumber(phoneNumber: string, options?: { format: 'international' | 'national' | 'compact' }): string | null`

Formats a Haitian phone number into a consistent, readable format. If the number is invalid, it returns `null`. The default format is `international`.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/dolphfi/haiti-utils/issues).

